// Season 2 sign-up intake -> the "Sparkworks Registrations" Notion DB.
// (Renamed from "Founding Sparks Registration" on 2026-09-01 — it holds every cohort, not just the
// pilot. The id below is unchanged and is what actually addresses it.)
//
// Same pattern as app/api/register/route.js and app/api/survey/route.js: plain fetch to the Notion
// REST API, no SDK, DB id hardcoded, NOTION_API_KEY from the environment.
//
// SCHEMA NOTES (enumerated property-by-property against the live DB 2026-09-01):
//   Child 1-3 have Name / Grade / Track / Availability / Preferred Slot.
//   `Child 3 Track` did not exist and was added on 2026-09-01 so third children aren't silently
//   written without a track — do not remove it.
//   Child 4 has ONLY Availability + Preferred Slot — no Name/Grade/Track — so the form caps at 3.
//   `Child N Track` options are still age-labelled ("Ember (8-9)" / "Blaze (10-12)") even though the
//   program is now grade-based. We derive from grade and write the existing option strings rather
//   than adding new ones, so this doesn't fork the vocabulary mid-season.
//   `Cohort` currently has a duplicate corrupted option; we write the em-dash one explicitly.

const REGISTRATION_DB_ID = "8c3a6c4a5bb745eea4f247cbe27d77bb";
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

// This is an unauthenticated public write into the DB we build the season's schedule from, so it
// carries a honeypot and a per-IP rate limit. The limiter is in-memory and therefore per-instance —
// it stops casual scripted abuse, not a distributed flood. If this ever gets seriously targeted,
// move to a durable store; for a home-studio program taking a few dozen sign-ups, this is the right
// amount of machinery.
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

// Ember = grades 2-3, Blaze = grades 4-6. Anything else stays blank for manual triage.
function trackFromGrade(grade) {
  const g = text(grade).toLowerCase();
  if (g.startsWith("2") || g.startsWith("3")) return "Ember (8-9)";
  if (g.startsWith("4") || g.startsWith("5") || g.startsWith("6")) return "Blaze (10-12)";
  return null;
}

export async function POST(request) {
  const NOTION_KEY = process.env.NOTION_API_KEY;
  if (!NOTION_KEY) {
    console.error("signup: NOTION_API_KEY missing");
    return Response.json({ error: "Server configuration error" }, { status: 500 });
  }

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

  // Honeypot: a field no human sees and no real browser fills. Answer 200 so a bot can't tell it
  // was caught, but write nothing.
  if (text(data.website)) {
    return Response.json({ success: true });
  }

  const parentName = text(data.parentName);
  const parentEmail = text(data.parentEmail);
  const children = Array.isArray(data.children) ? data.children.slice(0, 3) : [];

  if (!parentName || !parentEmail) {
    return Response.json({ error: "Name and email are required" }, { status: 400 });
  }
  if (children.length === 0) {
    return Response.json({ error: "At least one child is required" }, { status: 400 });
  }
  // Availability is the whole point of the form — refuse a submission that can't be scheduled.
  if (children.some((c) => !Array.isArray(c.slots) || c.slots.length === 0)) {
    return Response.json({ error: "Each child needs at least one available time" }, { status: 400 });
  }

  const properties = {
    "Parent 1 Name": { title: rt(parentName) },
    "Parent 1 Email": { email: parentEmail },
    Cohort: { select: { name: COHORT } },
    Status: { select: { name: "New" } },
    Source: { rich_text: rt("season-2-signup") },
  };

  const phone = text(data.parentPhone);
  if (phone) properties["Parent 1 Phone"] = { phone_number: phone };

  const parent2 = text(data.parent2Name);
  if (parent2) properties["Parent 2 Name"] = { rich_text: rt(parent2) };

  const notes = text(data.notes);
  if (notes) properties["Questions or Comments"] = { rich_text: rt(notes) };

  const heard = text(data.howHeard);
  if (heard && HEARD.includes(heard)) properties["How Heard"] = { select: { name: heard } };

  const referredBy = text(data.referredBy);
  if (referredBy) properties["Referred By"] = { rich_text: rt(referredBy) };

  children.forEach((c, i) => {
    const n = i + 1;
    const name = text(c.firstName);
    if (name) properties[`Child ${n} Name`] = { rich_text: rt(name) };

    const grade = text(c.grade);
    if (grade) properties[`Child ${n} Grade`] = { rich_text: rt(grade) };

    const track = trackFromGrade(grade);
    if (track) properties[`Child ${n} Track`] = { select: { name: track } };

    const slots = (Array.isArray(c.slots) ? c.slots : []).filter((s) => SLOTS.includes(s));
    if (slots.length) {
      properties[`Child ${n} Availability`] = { multi_select: slots.map((s) => ({ name: s })) };
    }

    const preferred = text(c.preferred);
    if (preferred && SLOTS.includes(preferred)) {
      properties[`Child ${n} Preferred Slot`] = { select: { name: preferred } };
    }
  });

  try {
    const res = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_KEY}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ parent: { database_id: REGISTRATION_DB_ID }, properties }),
    });

    const result = await res.json();
    if (!res.ok) {
      console.error("Notion API error (signup):", result);
      return Response.json({ error: "Failed to save sign-up" }, { status: 500 });
    }
    return Response.json({ success: true, id: result.id });
  } catch (err) {
    console.error("Signup submission error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
