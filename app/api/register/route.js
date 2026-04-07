const NOTION_DB_ID = "8c3a6c4a5bb745eea4f247cbe27d77bb";

export async function POST(request) {
  const NOTION_KEY = process.env.NOTION_API_KEY;
  if (!NOTION_KEY) {
    return Response.json({ error: "Server configuration error" }, { status: 500 });
  }

  try {
    const data = await request.json();

    const properties = {
      "Parent 1 Name": {
        title: [{ text: { content: data.parent1Name || "" } }],
      },
      "Parent 1 Email": {
        email: data.parent1Email || null,
      },
      "Parent 1 Phone": {
        phone_number: data.parent1Phone || null,
      },
      Status: {
        select: { name: "New" },
      },
    };

    if (data.parent2Name) {
      properties["Parent 2 Name"] = {
        rich_text: [{ text: { content: data.parent2Name } }],
      };
    }
    if (data.parent2Email) {
      properties["Parent 2 Email"] = { email: data.parent2Email };
    }
    if (data.parent2Phone) {
      properties["Parent 2 Phone"] = { phone_number: data.parent2Phone };
    }

    const children = data.children || [];
    children.forEach((child, i) => {
      const num = i + 1;
      if (child.name) {
        properties[`Child ${num} Name`] = {
          rich_text: [{ text: { content: child.name } }],
        };
      }
      if (child.age) {
        properties[`Child ${num} Age`] = {
          select: { name: String(child.age) },
        };
      }
    });

    if (data.schedule && data.schedule.length > 0) {
      properties["Schedule Availability"] = {
        rich_text: [{ text: { content: data.schedule.join(", ") } }],
      };
    }

    if (data.interest) {
      const interestMap = {
        "interested-schedule": "Interested - see schedule below",
        "interested-timing": "Interested but timing not right",
        "not-interested": "Not interested given competing activities",
      };
      properties["Interest Level"] = {
        select: { name: interestMap[data.interest] || data.interest },
      };
    }

    if (data.heard) {
      properties["How did you hear about us?"] = {
        rich_text: [{ text: { content: data.heard } }],
      };
    }

    if (data.questions) {
      properties["Questions or Comments"] = {
        rich_text: [{ text: { content: data.questions } }],
      };
    }

    if (children[0] && children[0].age) {
      const age = parseInt(children[0].age);
      properties["Track"] = {
        select: { name: age <= 9 ? "Ember (8-9)" : "Blaze (10-12)" },
      };
    }

    const response = await fetch("https://api.notion.com/v1/pages", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${NOTION_KEY}`,
        "Notion-Version": "2022-06-28",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parent: { database_id: NOTION_DB_ID },
        properties,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error("Notion API error:", result);
      return Response.json({ error: "Failed to save registration" }, { status: 500 });
    }

    return Response.json({ success: true, id: result.id });
  } catch (err) {
    console.error("Registration error:", err);
    return Response.json({ error: "Server error" }, { status: 500 });
  }
}
