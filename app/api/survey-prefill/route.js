// Founding Sparks survey pre-fill.
// Given ?fid=<Survey Token>, return that one family's parent name + children/tracks
// from the Registration DB so /feedback can pre-populate. Random token in, one family out;
// unknown/blank token returns {found:false}. Same NOTION_API_KEY / plain-fetch pattern as
// app/api/register/route.js and app/api/survey/route.js.

const REGISTRATION_DB_ID = "8c3a6c4a5bb745eea4f247cbe27d77bb";
const NOTION_VERSION = "2022-06-28";

function plainText(prop) {
  if (!prop) return "";
  if (prop.type === "title") return (prop.title || []).map((t) => t.plain_text).join("").trim();
  if (prop.type === "rich_text") return (prop.rich_text || []).map((t) => t.plain_text).join("").trim();
  return "";
}
function selectName(prop) {
  return prop && prop.type === "select" && prop.select ? prop.select.name : "";
}
// "Ember (8-9)" -> "Ember", "Blaze (10-12)" -> "Blaze"
function shortTrack(raw) {
  const r = (raw || "").toLowerCase();
  if (r.startsWith("ember")) return "Ember";
  if (r.startsWith("blaze")) return "Blaze";
  return raw || "";
}

export async function GET(request) {
  const NOTION_KEY = process.env.NOTION_API_KEY;
  if (!NOTION_KEY) return Response.json({ found: false }, { status: 200 });

  const fid = (new URL(request.url).searchParams.get("fid") || "").trim();
  if (!fid) return Response.json({ found: false }, { status: 200 });

  try {
    const res = await fetch(
      `https://api.notion.com/v1/databases/${REGISTRATION_DB_ID}/query`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${NOTION_KEY}`,
          "Notion-Version": NOTION_VERSION,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          filter: { property: "Survey Token", rich_text: { equals: fid } },
          page_size: 1,
        }),
      }
    );
    const data = await res.json();
    if (!res.ok || !Array.isArray(data.results) || data.results.length === 0) {
      return Response.json({ found: false }, { status: 200 });
    }
    const props = data.results[0].properties || {};
    const parentName = plainText(props["Parent 1 Name"]);
    const children = [];
    for (let i = 1; i <= 3; i++) {
      const name = plainText(props[`Child ${i} Name`]);
      if (!name) continue;
      children.push({ name, track: shortTrack(selectName(props[`Child ${i} Track`])) });
    }
    return Response.json({ found: true, parentName, children }, { status: 200 });
  } catch {
    return Response.json({ found: false }, { status: 200 });
  }
}
