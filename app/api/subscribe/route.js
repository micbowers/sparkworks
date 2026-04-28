const SUBSCRIBERS_DB_ID = "d1084ec54ab9470ba3a2d53743c42f8c";
const NOTION_VERSION = "2022-06-28";

const ALLOWED_INTERESTS = new Set(["Games", "Materials", "Program"]);

function notionFetch(path, init, key) {
  return fetch(`https://api.notion.com/v1/${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${key}`,
      "Notion-Version": NOTION_VERSION,
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });
}

function normalizeEmail(input) {
  if (typeof input !== "string") return "";
  return input.trim().toLowerCase();
}

function normalizeInterests(input) {
  if (!Array.isArray(input)) return [];
  return [...new Set(input)].filter((i) => ALLOWED_INTERESTS.has(i));
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

  const email = normalizeEmail(data.email);
  const interests = normalizeInterests(data.interests);
  const source = typeof data.source === "string" ? data.source.trim() : "";

  if (!email || !email.includes("@")) {
    return Response.json({ error: "Email is required" }, { status: 400 });
  }
  if (interests.length === 0) {
    return Response.json({ error: "At least one interest is required" }, { status: 400 });
  }

  try {
    // Look up existing subscriber by email (Email is the title property).
    const queryRes = await notionFetch(
      `databases/${SUBSCRIBERS_DB_ID}/query`,
      {
        method: "POST",
        body: JSON.stringify({
          filter: { property: "Email", title: { equals: email } },
          page_size: 1,
        }),
      },
      NOTION_KEY,
    );
    const queryBody = await queryRes.json();
    if (!queryRes.ok) {
      console.error("Notion query error:", queryBody);
      return Response.json({ error: "Failed to look up subscriber" }, { status: 500 });
    }

    const existing = queryBody.results?.[0];

    if (existing) {
      const currentInterests = (existing.properties?.Interests?.multi_select || []).map((o) => o.name);
      const merged = [...new Set([...currentInterests, ...interests])];
      // No new tags — return success without writing.
      if (merged.length === currentInterests.length) {
        return Response.json({ success: true, action: "noop", id: existing.id });
      }
      const patchRes = await notionFetch(
        `pages/${existing.id}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            properties: {
              Interests: { multi_select: merged.map((name) => ({ name })) },
            },
          }),
        },
        NOTION_KEY,
      );
      const patchBody = await patchRes.json();
      if (!patchRes.ok) {
        console.error("Notion patch error:", patchBody);
        return Response.json({ error: "Failed to update subscriber" }, { status: 500 });
      }
      return Response.json({ success: true, action: "updated", id: existing.id });
    }

    // Create new subscriber.
    const properties = {
      Email: { title: [{ text: { content: email } }] },
      Interests: { multi_select: interests.map((name) => ({ name })) },
      Status: { select: { name: "Active" } },
    };
    if (source) {
      properties.Source = { rich_text: [{ text: { content: source } }] };
    }

    const createRes = await notionFetch(
      "pages",
      {
        method: "POST",
        body: JSON.stringify({
          parent: { database_id: SUBSCRIBERS_DB_ID },
          properties,
        }),
      },
      NOTION_KEY,
    );
    const createBody = await createRes.json();
    if (!createRes.ok) {
      console.error("Notion create error:", createBody);
      return Response.json({ error: "Failed to subscribe" }, { status: 500 });
    }

    return Response.json({ success: true, action: "created", id: createBody.id });
  } catch (err) {
    console.error("Subscribe error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
