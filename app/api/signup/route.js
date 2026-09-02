// Season 2 sign-up intake -> "Sparkworks Families" + "Sparkworks Kids" in Notion.
//
// THE GRAIN, because it is the whole point of this route:
//   Families         one row per HOUSEHOLD, keyed by lowercased Parent 1 Email.
//   Kids             one row per CHILD per COHORT. A child who does two seasons has TWO rows.
//                    That is intended — it is not a duplicate, and nothing should dedupe it.
//   The Kids table holds LEADS AND REGISTERED CHILDREN ALIKE, told apart by Status. Do not add a
//   separate leads table: converting a lead would then mean moving a row, which destroys the
//   "when did this family first show interest" answer this whole structure exists to give.
//
// ⚠ APPEND-ONLY. RULE SET BY TINA, 2026-09-02. This route must never overwrite existing data.
//   A family who is interested season after season and never enrols is exactly the signal worth
//   keeping, and it only survives if every submission ADDS.
//     · First Interest      written once at creation. NEVER updated. Not even if it looks wrong.
//     · Existing field      filled ONLY if currently empty. A differing value is logged, not written.
//     · History             append a dated line every time a known family comes back.
//     · Kids rows           always created, never updated in place and never reused across seasons.
//   If you add a field here, decide its append behaviour before you ship it. The default answer
//   is "fill if empty, otherwise log to History".
// A returning family gets ONE family row and NEW enrollment rows each season. That is what makes
// "when did this parent first show interest / did they ever register / for which cohort" answerable
// — First Interest lives on the family and is written once, never updated.
//
// This replaced a single flat table that had drifted into two incompatible shapes at once: some
// rows were one-per-family with Child 1..4 columns, others were one-per-child with the parent
// repeated. Don't reintroduce Child N columns here.
//
// Same plain-fetch pattern as the other routes. NOTION_API_KEY is a placeholder in .env.local and
// real on Vercel, so these paths only work against production — see lessons-learned.md.

const FAMILIES_DB = "3cff075b-cf19-8148-bf7e-eb7ef45db0c5";
const ENROLLMENTS_DB = "3cff075b-cf19-81c3-ab02-eb2b6c2759d0";
const NOTION_VERSION = "2022-06-28";
const COHORT = "Season 2 — Fall 2026";

const SLOTS = ["Tue 3:15", "Tue 4:45", "Wed 3:15", "Wed 4:45", "Thu 3:15", "Fri 3:15"];
const HEARD = [
  "A Sparkworks family told us",
  "A friend or neighbor",
  "School or PTA",
  "Found the website",
  "Social media",
  "Other",
];

// Unauthenticated public write: honeypot + per-IP limit. In-memory, so per-instance — enough to
// stop casual scripted abuse, not a distributed flood.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map();

function rateLimited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  if (recent.length >= RATE_LIMIT) return true;
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 500) {
    for (const [k, v] of hits) if (!v.some((t) => now - t < RATE_WINDOW_MS)) hits.delete(k);
  }
  return false;
}

const text = (v) => (typeof v === "string" ? v.trim() : "");
const rt = (v) => [{ text: { content: String(v).slice(0, 1900) } }];

// Notion rich_text caps at 2000 chars per block. History accumulates forever, so cap the STORED
// value by dropping the OLDEST lines — losing ancient log lines beats losing the write entirely.
const HISTORY_MAX = 1900;
const plain = (prop) =>
  (prop?.rich_text || prop?.title || []).map((x) => x.plain_text).join("");

function appendHistory(existing, line) {
  const next = existing ? `${existing}\n${line}` : line;
  if (next.length <= HISTORY_MAX) return next;
  const lines = next.split("\n");
  while (lines.length > 1 && lines.join("\n").length > HISTORY_MAX) lines.shift();
  return lines.join("\n").slice(-HISTORY_MAX);
}

// Ember = grades 2-3, Blaze = grades 4-7 (7th added 2026-09-02). Must stay in sync with the GRADES
// list in SignupForm.jsx. Anything unrecognised — including "Other" — returns null deliberately: a
// blank Track is a visible prompt for manual triage, which is safer than guessing a child into the
// wrong classroom.
function trackFromGrade(grade) {
  const g = text(grade).toLowerCase();
  if (g.startsWith("2") || g.startsWith("3")) return "Ember";
  if (g.startsWith("4") || g.startsWith("5") || g.startsWith("6") || g.startsWith("7")) {
    return "Blaze";
  }
  return null;
}

function notion(key) {
  return (path, body, method = "POST") =>
    fetch(`https://api.notion.com/v1${path}`, {
      method,
      headers: {
        Authorization: `Bearer ${key}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      ...(body ? { body: JSON.stringify(body) } : {}),
    });
}

export async function POST(request) {
  const NOTION_KEY = process.env.NOTION_API_KEY;
  if (!NOTION_KEY) {
    console.error("signup: NOTION_API_KEY missing");
    return Response.json({ error: "Server configuration error" }, { status: 500 });
  }
  const api = notion(NOTION_KEY);

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (rateLimited(ip)) {
    return Response.json(
      { error: "Too many sign-ups from this connection. Please email us instead." },
      { status: 429 }
    );
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Honeypot — 200 so a bot can't tell, but nothing is written.
  if (text(data.website)) return Response.json({ success: true });

  const parentName = text(data.parentName);
  const parentEmail = text(data.parentEmail);
  const children = Array.isArray(data.children) ? data.children.slice(0, 6) : [];

  if (!parentName || !parentEmail) {
    return Response.json({ error: "Name and email are required" }, { status: 400 });
  }
  if (children.length === 0) {
    return Response.json({ error: "At least one child is required" }, { status: 400 });
  }
  if (children.some((c) => !Array.isArray(c.slots) || c.slots.length === 0)) {
    return Response.json({ error: "Each child needs at least one available time" }, { status: 400 });
  }

  const today = new Date().toISOString().slice(0, 10);

  try {
    // ---- find or create the family -------------------------------------------------------
    // Email is the household key. Notion's email filter is case-sensitive, so we also scan the
    // returned rows case-insensitively rather than trusting a single equals match.
    let familyId = null;
    let familyRow = null;
    const found = await api(`/databases/${FAMILIES_DB}/query`, {
      filter: { property: "Parent 1 Email", email: { equals: parentEmail } },
      page_size: 10,
    });
    if (found.ok) {
      const body = await found.json();
      const wanted = parentEmail.toLowerCase();
      const match = (body.results || []).find(
        (r) => (r.properties?.["Parent 1 Email"]?.email || "").toLowerCase() === wanted
      );
      if (match) {
        familyId = match.id;
        familyRow = match;
      }
    }

    if (!familyId) {
      const props = {
        "Parent 1 Name": { title: rt(parentName) },
        "Parent 1 Email": { email: parentEmail },
        // Written ONCE, on creation. A returning family keeps their original date — that is the
        // "when did they first show interest" answer and it must not drift forward.
        "First Interest": { date: { start: today } },
      };
      const phone = text(data.parentPhone);
      if (phone) props["Parent 1 Phone"] = { phone_number: phone };
      const parent2 = text(data.parent2Name);
      if (parent2) props["Parent 2 Name"] = { rich_text: rt(parent2) };
      const notes = text(data.notes);
      if (notes) props["Questions or Comments"] = { rich_text: rt(notes) };
      const heard = text(data.howHeard);
      if (heard && HEARD.includes(heard)) props["How Heard"] = { select: { name: heard } };
      const referredBy = text(data.referredBy);
      if (referredBy) props["Referred By"] = { rich_text: rt(referredBy) };

      const res = await api("/pages", { parent: { database_id: FAMILIES_DB }, properties: props });
      const body = await res.json();
      if (!res.ok) {
        console.error("Notion error creating family:", body);
        return Response.json({ error: "Failed to save sign-up" }, { status: 500 });
      }
      familyId = body.id;
    } else {
      // ---- RETURNING FAMILY — APPEND ONLY ------------------------------------------------
      // Nothing here may replace a value that already exists. First Interest is never touched.
      // A field is filled only if it is currently EMPTY; anything that would have CHANGED an
      // existing value is recorded as a dated line in History instead, so we can still see what
      // they told us this time without destroying what they told us last time.
      const existing = familyRow?.properties || {};
      const props = {};
      const logLines = [];

      const maybeFill = (field, incoming, wrap) => {
        if (!incoming) return;
        const current =
          existing[field]?.email ??
          existing[field]?.phone_number ??
          plain(existing[field]);
        if (!current) {
          props[field] = wrap(incoming);
        } else if (String(current).trim() !== incoming) {
          logLines.push(`${field}: "${incoming}" (on file: "${current}")`);
        }
      };

      maybeFill("Parent 1 Phone", text(data.parentPhone), (v) => ({ phone_number: v }));
      maybeFill("Parent 2 Name", text(data.parent2Name), (v) => ({ rich_text: rt(v) }));
      maybeFill("Referred By", text(data.referredBy), (v) => ({ rich_text: rt(v) }));
      const heard = text(data.howHeard);
      if (heard && HEARD.includes(heard)) {
        const cur = existing["How Heard"]?.select?.name || "";
        if (!cur) props["How Heard"] = { select: { name: heard } };
        else if (cur !== heard) logLines.push(`How Heard: "${heard}" (on file: "${cur}")`);
      }

      // Notes are free text and every season's are worth keeping, so these always append.
      const notes = text(data.notes);
      if (notes) logLines.push(`Note: ${notes}`);

      const kidNames = children.map((c) => text(c.firstName)).filter(Boolean).join(", ");
      logLines.unshift(`Signed up for ${COHORT}${kidNames ? ` — ${kidNames}` : ""}`);

      props.History = {
        rich_text: rt(
          appendHistory(plain(existing.History), `${today} · ${logLines.join(" · ")}`)
        ),
      };

      await api(`/pages/${familyId}`, { properties: props }, "PATCH");
    }

    // ---- one enrollment per child --------------------------------------------------------
    const created = [];
    for (const c of children) {
      const name = text(c.firstName);
      const grade = text(c.grade);
      const props = {
        Child: { title: rt(name || "(unnamed child)") },
        Family: { relation: [{ id: familyId }] },
        Cohort: { select: { name: COHORT } },
        Status: { select: { name: "New" } },
        "Signed Up": { date: { start: today } },
        Source: { rich_text: rt("season-2-signup") },
      };
      if (grade) props.Grade = { rich_text: rt(grade) };
      const track = trackFromGrade(grade);
      if (track) props.Track = { select: { name: track } };

      const slots = (Array.isArray(c.slots) ? c.slots : []).filter((s) => SLOTS.includes(s));
      if (slots.length) props.Availability = { multi_select: slots.map((s) => ({ name: s })) };
      const preferred = text(c.preferred);
      if (preferred && SLOTS.includes(preferred)) {
        props["Preferred Slot"] = { select: { name: preferred } };
      }

      const res = await api("/pages", { parent: { database_id: ENROLLMENTS_DB }, properties: props });
      const body = await res.json();
      if (!res.ok) {
        // The family row is already saved, so a partial failure still leaves us a contactable
        // lead. Log loudly and tell the parent, rather than pretending it worked.
        console.error("Notion error creating enrollment:", body);
        return Response.json(
          { error: "We saved your details but hit a problem with one child. Please email us." },
          { status: 500 }
        );
      }
      created.push(body.id);
    }

    return Response.json({ success: true, familyId, enrollments: created.length });
  } catch (err) {
    console.error("Signup submission error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
