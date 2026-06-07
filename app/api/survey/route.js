// Founding Sparks — Post-Program Parent Survey response intake.
// Follows the same pattern as app/api/register/route.js and app/api/subscribe/route.js:
// plain fetch to the Notion REST API, no SDK, DB id hardcoded.
//
// The payload is large and irregular: Part-1 fields answered once PLUS a variable
// number of per-child blocks (K1–K8, incl. the K7 favorite-parts ranking), the D1
// activity ranking (with which rows were toggled "we don't do this"), and the two
// grids (B1 length, E5 price). To guarantee NOTHING is lost and per-child data stays
// attributable per child, the COMPLETE payload is serialized to JSON into the
// "Raw JSON" property. A few convenience columns + a human-readable "Summary" are also
// written so the response is legible in the Notion UI without parsing JSON.
//
// Notion rich_text caps each text object at 2000 chars, so long JSON / Summary values
// are chunked across multiple rich_text objects in the same property.

const SURVEY_DB_ID = "b9145d59e5b444af8949e20a837157ac";
const NOTION_VERSION = "2022-06-28";
const CHUNK = 1900; // stay under Notion's 2000-char-per-rich-text-object limit

// Split a long string into <=CHUNK pieces and shape them as Notion rich_text objects.
function richTextChunks(str) {
  const s = typeof str === "string" ? str : String(str ?? "");
  if (s.length === 0) return [{ text: { content: "" } }];
  const out = [];
  for (let i = 0; i < s.length; i += CHUNK) {
    out.push({ text: { content: s.slice(i, i + CHUNK) } });
  }
  // Notion allows up to 100 rich_text objects per property; cap defensively.
  return out.slice(0, 100);
}

function clean(v) {
  return typeof v === "string" ? v.trim() : v;
}

// Build a readable plain-text rendering of the whole submission for the Notion UI.
function buildSummary(d) {
  const lines = [];
  const part1 = d.part1 || {};
  const push = (label, val) => {
    if (val === undefined || val === null || val === "") return;
    lines.push(`${label}: ${val}`);
  };

  lines.push("=== PART 1 — FAMILY & PROGRAM ===");
  push("0a Name", part1.name);
  push("A1 Why enrolled", part1.A1);
  push("A2 Alternative", part1.A2);
  push("B1 Length 75min", part1.B1?.["75 minutes"]);
  push("B1 Length 90min", part1.B1?.["90 minutes"]);
  push("B2 Program length", part1.B2);
  push("B3 Drive distance", part1.B3);
  push("B4 Split times (conditional)", part1.B4);
  push("C1 Read recaps", part1.C1);
  push("C2 Recap usefulness", part1.C2);
  push("C3 Knew what child learned", part1.C3);
  push("C4 Tried home prompts", part1.C4);
  push("C5 Comms comments", part1.C5);

  if (Array.isArray(part1.D1) && part1.D1.length) {
    lines.push("D1 Activity ranking (priority order; [N/A] = we don't do this):");
    part1.D1.forEach((it) => {
      const tag = it.excluded ? "[N/A]" : `#${it.rank}`;
      lines.push(`   ${tag} ${it.label}`);
    });
  }
  push("D2 Discontinue reason", part1.D2);

  push("E1 Smaller-group importance", part1.E1);
  push("E2 Current spend", part1.E2);
  push("E3 Value rating", part1.E3);
  push("E4 Fair price", part1.E4);
  if (part1.E5) {
    push("E5 Re-enroll @ $249", part1.E5["$249"]);
    push("E5 Re-enroll @ $349", part1.E5["$349"]);
    push("E5 Re-enroll @ $449", part1.E5["$449"]);
  }
  push("E6 If not available", part1.E6);
  push("E7 NPS (0-10)", part1.E7);
  push("E8 NPS reason", part1.E8);
  push("E9 How describe", part1.E9);
  push("E10 Caveats", part1.E10);

  push("F1 Talk at home", part1.F1);
  push("F2 Anything else", part1.F2);
  push("G1 Best thing", part1.G1);
  push("G2 Change one thing", part1.G2);
  push("G3 Quote permission", part1.G3);

  const children = Array.isArray(d.children) ? d.children : [];
  lines.push("");
  lines.push(`=== PART 2 — PER CHILD (${children.length}) ===`);
  children.forEach((c, i) => {
    lines.push(`--- Child ${i + 1} ---`);
    push("K1 Name + track", c.K1);
    push("K2 Enjoyment", c.K2);
    push("K3 Difficulty", c.K3);
    push("K4 Thinking change", c.K4);
    push("K5 Used way of thinking", c.K5);
    push("K6 Showed off / replayed", c.K6);
    if (Array.isArray(c.K7) && c.K7.length) {
      lines.push("   K7 Favorite parts (most→least):");
      c.K7.forEach((it) => lines.push(`      #${it.rank} ${it.label}`));
    }
    push("K8 Keep going", c.K8);
  });

  return lines.join("\n");
}

// Determine whether the family had children in both Ember and Blaze tracks.
// K1 is free text "Name — Track"; we also accept an explicit child.track if the
// client provides one. Used to flag B4 (conditional) relevance for analysis.
function detectBothTracks(d) {
  const children = Array.isArray(d.children) ? d.children : [];
  let ember = false;
  let blaze = false;
  children.forEach((c) => {
    const hay = `${c.track || ""} ${c.K1 || ""}`.toLowerCase();
    if (hay.includes("ember")) ember = true;
    if (hay.includes("blaze")) blaze = true;
  });
  return ember && blaze;
}

export async function POST(request) {
  const NOTION_KEY = process.env.NOTION_API_KEY;
  if (!NOTION_KEY) {
    return Response.json({ error: "Server configuration error" }, { status: 500 });
  }

  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const part1 = data.part1 || {};
  const children = Array.isArray(data.children) ? data.children : [];

  // Minimal server-side validation — the page enforces required fields, this is a backstop.
  const respondent = clean(part1.name) || "(no name)";
  if (children.length === 0) {
    return Response.json({ error: "At least one child block is required" }, { status: 400 });
  }

  // NPS as a number when parseable.
  let nps = null;
  if (part1.E7 !== undefined && part1.E7 !== null && part1.E7 !== "") {
    const n = parseInt(part1.E7, 10);
    if (!Number.isNaN(n)) nps = n;
  }

  const rawJson = JSON.stringify(data);
  const summary = buildSummary(data);
  const bothTracks = detectBothTracks(data);

  const properties = {
    Respondent: { title: [{ text: { content: respondent.slice(0, 1900) } }] },
    Status: { select: { name: "New" } },
    Source: {
      rich_text: [{ text: { content: clean(data.source) || "founding-sparks-survey" } }],
    },
    "Child Count": { number: children.length },
    "Both Tracks": { checkbox: bothTracks },
    Summary: { rich_text: richTextChunks(summary) },
    "Raw JSON": { rich_text: richTextChunks(rawJson) },
  };

  if (nps !== null) properties["NPS (E7)"] = { number: nps };
  if (part1.E4) properties["Fair Price (E4)"] = { rich_text: [{ text: { content: String(part1.E4).slice(0, 1900) } }] };
  if (part1.G3) properties["Quote Permission (G3)"] = { select: { name: String(part1.G3) } };
  if (data.fid) properties["Family ID"] = { rich_text: [{ text: { content: String(data.fid).slice(0, 200) } }] };

  try {
    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_KEY}`,
        "Notion-Version": NOTION_VERSION,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parent: { database_id: SURVEY_DB_ID },
        properties,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Notion API error (survey):", result);
      return Response.json({ error: "Failed to save survey response" }, { status: 500 });
    }

    return Response.json({ success: true, id: result.id });
  } catch (err) {
    console.error("Survey submission error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
