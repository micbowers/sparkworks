# SPARKWORKS TRADEMARK GUIDANCE
*Temporary language and structural overrides for the **public website only**, while our USPTO trademark application is pending.*

## SCOPE — READ THIS FIRST

These rules apply **only** to public-facing surfaces that the USPTO can examine: the live website (`www.sparkworks.kids` and any subdomain), site metadata, and any public marketing piece linked from the site.

These rules **do NOT** apply to:
- Brand docs in this repo ([BRAND_REF.md](BRAND_REF.md), [PROGRAM_AND_MESSAGING.md](PROGRAM_AND_MESSAGING.md), [DESIGN_PATTERNS.md](DESIGN_PATTERNS.md), [MARKETING.md](MARKETING.md), [MARKETING_GUIDELINES.md](MARKETING_GUIDELINES.md)) — those continue to reflect the **real brand voice** for all other use cases.
- Program documents, session materials, parent recap emails, classroom posters, internal training, decks.
- Anything not visible to a USPTO examiner reviewing the public-facing brand.

**This is temporary.** Once the trademark is granted, every change made under this doc is reverted. See "Reversibility" below.

*Last updated: April 2026.*

---

## ™ SYMBOL USE (separate lifecycle from copy swaps)

The site marks the SPARKWORKS brand with ™ on three surfaces. This is **not** part of the swap-on-grant copy revert below — it stays in place permanently and the symbol just changes form (™ → ®) when the trademark grants.

### Where ™ appears

1. **Wordmark component** — [app/components/Wordmark.jsx](../app/components/Wordmark.jsx). Always-on, rendered as a small superscript after the WORKS span. Covers every wordmark instance: homepage hero, /program hero, footer, and SiteHeader.
2. **Block Code page wordmark** — [public/blockcode.html](../public/blockcode.html), the `<div class="brand">SPARKWORKS</div>` at the top of the game UI. Static HTML, separate from the Next app.
3. **Footer trademark notice** — [app/components/Footer.jsx](../app/components/Footer.jsx): `Sparkworks™ is a trademark of Cairn Partners, LLC.`

### Where ™ does NOT appear (intentionally)

Per INTA's "first-or-most-prominent" guidance, marking every body-copy mention is non-standard. The wordmark on each page covers the requirement. Skip:

- Body-copy mentions of "Sparkworks" in [app/page.js](../app/page.js) and [app/program/page.js](../app/program/page.js).
- Page `<title>`, meta description, OG tags ([app/layout.js](../app/layout.js), [public/blockcode.html](../public/blockcode.html)).
- aria-labels ([app/components/SiteHeader.jsx](../app/components/SiteHeader.jsx)).
- Image alt text ([public/cairnpartners/index.html](../public/cairnpartners/index.html)).

### When the trademark grants

Swap ™ → ® in three files:

1. [app/components/Wordmark.jsx](../app/components/Wordmark.jsx) — change the `™` character in the `<sup>` element.
2. [public/blockcode.html](../public/blockcode.html) — change `&#8482;` to `&#174;` (or the ® character).
3. [app/components/Footer.jsx](../app/components/Footer.jsx) — change `Sparkworks™` to `Sparkworks®` and (optionally) `is a trademark of` to `is a registered trademark of`.

Sources for the placement choices: INTA fact sheets on trademark symbols and marking requirements, USPTO specimens guidance, Nutter / Gerben / Lexology summaries.

---

## OBJECTIVE

Position **Sparkworks** clearly as an **educational services brand (USPTO Class 041)** — not a games, toys, or product company. There is already a SPARKWORKS that sells games. To minimize likelihood-of-confusion risk and improve our TM approval odds, our public-facing language must lean class-provider and de-emphasize anything that reads as a game/product brand.

We're not changing the business — we still teach with games, we still produce materials. We're changing **how we talk about them.**

---

## CORE PRINCIPLE

We are a **class-based education program.**

- Games = a **teaching method** ✅
- Materials = part of **instruction** ✅
- Products for sale = avoid emphasizing ❌

Every page should pass this final positioning test:

> *"Is this a class provider or a product company?"*

Correct answer: **class provider (education-first).** If a page reads as a product company, rework it.

---

## 1 — HOMEPAGE (HIGHEST PRIORITY)

### Risky phrasing currently in copy

Phrases like *"through games, not lectures"* can read as a **game-based product brand.** Replace with one of:

- "through hands-on problem solving, not lectures"
- "through structured challenges, not lectures"
- "through guided problem-solving, not lectures"

### Confirm a class-provider headline is present

Either as the primary tagline or in a supporting line near the top:

> *"After-school classes that build logic, critical thinking, and problem-solving skills."*

---

## 2 — LANGUAGE REFRAMING RULES (GLOBAL)

### Replace these terms when they're prominent

| Risky term | Replace with |
|---|---|
| games | activities / challenges / exercises |
| logic games | problem-solving exercises |
| workbook(s) | class materials / guided practice |
| curriculum kit | program materials |
| products | program / sessions |

### Context-allowed usage

You MAY still use:

- **"games"** — only when clearly framed as a *teaching method*, not as a thing being sold
- **"materials"** — only when tied to *instructor-led sessions*

### Example rewrite

**Before:** *"Kids learn through games and workbooks."*

**After:** *"Kids learn through instructor-led problem-solving activities and guided materials."*

---

## 3 — MATERIALS / WORKBOOKS POSITIONING

### Avoid

- "Buy our workbook"
- "Sparkworks workbook"
- "Take-home workbook product"

### Use instead

- "Instructor-provided materials"
- "Guided practice used during sessions"
- "Class materials designed to reinforce learning"

---

## 4 — NAVIGATION & SITE STRUCTURE

### Avoid sections like

- Games
- Shop
- Materials (as a standalone category)

### Preferred structure

- Programs
- Curriculum
- How It Works
- Schedule
- Enroll

The current homepage's three-card structure (Program / Games / Materials) needs revisiting against this guidance — a discussion to have during edits, not a one-shot rewrite. We can keep the three concepts but reframe the cards so Games and Materials read as part of the educational service rather than separate product lines.

---

## 5 — PROGRAM PAGES

### Emphasize

- Classes
- Sessions
- Instructor-led
- Small groups
- Structured learning

### Example

**Before:** *"Each session uses games to teach…"*

**After:** *"Each session uses structured problem-solving activities to teach…"*

---

## 6 — CHECKOUT / PAYMENT PAGES

Keep clear references to **sessions**, **program**, **enrollment**, with the SPARKWORKS name/logo visible. These pages are strong evidence of class-provider positioning for trademark use.

---

## 7 — SEO / METADATA

### Include in title tags + descriptions

- "after-school classes"
- "kids learning program"
- "critical thinking classes"

### Avoid emphasizing in metadata

- games
- puzzles
- toys

---

## 8 — VISUAL / BRANDING

### Keep

- Clean academic feel
- Structured program layout
- Session-based design

### Avoid

- "Toy-like" or "game product" visuals
- Anything resembling packaged products

---

## 9 — CONSISTENCY REQUIREMENT

Across all pages, refer to Sparkworks as a:

- **Program**
- **Class**
- **Educational service**

NOT:

- A product
- A game system
- A kit

---

## SUMMARY

We are not changing the business — only how we present it.

- Emphasize: **classes, instruction, programs**
- De-emphasize: **games, products, workbooks**
- Position everything as part of an **instructor-led learning experience**

---

## EXPECTED OUTCOMES

- Improves trademark approval odds
- Reduces likelihood-of-confusion risk vs. the existing game-selling SPARKWORKS
- Strengthens legal defensibility
- Maintains (or improves) marketing clarity for the Invested Parent audience

---

## REVERSIBILITY

Every TM-driven website change must be cleanly reversible when the TM grants. Two-part discipline:

### 1. Inline comment markers in code

Every line of copy edited for TM reasons gets a `// TM-2026:` comment directly above it preserving the original text. Example:

```jsx
{/* TM-2026: original was "through games, not lectures" */}
<p className="ts-quote">…through hands-on problem solving, not lectures.</p>
```

This makes any individual change auditable from the file alone, without consulting external docs.

### 2. Swap log (this doc, below)

A numbered list of every change made under this guidance, with file, line context, original, replacement, and date. When the TM grants, walk this list to revert.

---

## SWAP LOG

*Append a numbered entry every time a TM-driven change ships. When the TM grants, restore each `Original` and remove the `// TM-2026:` comment marker.*

### 1. 2026-04-28 · `app/page.js` · Homepage hero tagline
- **Original:** `Sparkworks teaches kids in grades 2–6 to think through hard problems — through games, not lectures.`
- **Replacement:** `Sparkworks teaches kids in grades 2–6 to think through hard problems — through hands-on problem solving, not lectures.`

### 2a. 2026-04-28 · `app/page.js` · "What we make" intro eyebrow
- **Original:** `What we make`
- **Replacement:** `What we offer`

### 2b. 2026-04-28 · `app/page.js` · "What we make" lead paragraph
- **Original:** `Critical thinking is the most important skill in the AI age. Sparkworks builds it three ways — an in-person program, games kids actually want to play, and materials they can work through on their own.`
- **Replacement:** `Critical thinking is the most important skill in the AI age. Sparkworks builds it three ways: an in-person class for grades 2–6, hands-on activities and games for practice between sessions, and class materials that reinforce what kids learn.`

### 3. 2026-04-28 · `app/page.js` · Homepage Program card body
- **Original:** `The flagship. Two grade-calibrated tracks — Ember (grades 2–3) and Blaze (grades 4–6), 6 students each. Eight sessions, eight thinking skills, taught through real games and Sparks of History — historical figures who used the same principles to change something that mattered. Founding Sparks filled before we listed it. Season 2 is filling now.`
- **Replacement:** `The flagship. Two grade-calibrated tracks — Ember (grades 2–3) and Blaze (grades 4–6), 6 students each. Eight sessions, eight thinking skills, taught through hands-on activities and real-world examples of how great critical thinkers used these same skills to solve some of history's most important challenges. Founding Sparks filled before we listed it. Season 2 is filling now.`

### 4a. 2026-04-28 · `app/page.js` · Homepage Games card kicker
- **Original:** `The Games`
- **Replacement:** `Practice at home`

### 4b. 2026-04-28 · `app/page.js` · Homepage Games card body
- **Original:** `We believe the best way to teach a thinking skill is to put kids inside a game where they need it. The games here are the same ones we use in our program — a mix of games we build (like Find The Alien) and games we recommend from designers we trust. A small marketplace is coming.`
- **Replacement:** `Critical thinking grows with practice. We point parents toward activities and games that build the same skills our class teaches. More on the way.`

*(Title swap "The games we love" → "Games that reinforce Sparkworks skills" was reverted on 2026-04-28 per Mike's call. Title is now "The games we love · Coming soon" — the original phrase plus a non-TM "Coming soon" suffix that comes off when the games surface launches. Not a TM swap; nothing to revert here when the trademark grants.)*

*(The "Play Find The Alien" CTA was also removed on 2026-04-28 — non-TM, non-revert. Mike will decide whether to put it back when the games surface is ready. Unrelated to the trademark.)*

### 5. 2026-04-28 · `app/program/page.js` · Hero title
- **Original:** `An 8-session program that teaches kids to think through hard problems — through games, not lectures.`
- **Replacement:** `An 8-session program that teaches kids to think through hard problems — through hands-on problem solving, not lectures.`

### 6. 2026-04-28 · `app/program/page.js` · FAQ "What is it?" answer
- **Original:** `An 8-session program that teaches kids to think through hard problems — through games, not lectures.`
- **Replacement:** `An 8-session program that teaches kids to think through hard problems — through hands-on problem solving, not lectures.`

### 7. 2026-04-28 · `app/layout.js` · Page metadata description (SEO)
- **Original:** `Sparkworks teaches kids in grades 2–6 to think through hard problems — through games, not lectures. Critical thinking program, games, and materials.`
- **Replacement:** `Sparkworks teaches kids in grades 2–6 to think through hard problems through hands-on problem solving — not lectures. After-school critical thinking classes for grades 2–6.`

### 8. 2026-04-28 · `app/page.js` · Materials card title
- **Original:** `Workbooks · Coming soon`
- **Replacement:** `Class materials · Coming soon`

### 9. 2026-04-28 · `app/page.js` · Materials card body
- **Original:** `Hands-on workbooks built around the thinking skills the program teaches — patterns, elimination, constraints, estimation, strategy. These are the same materials we use in our classes, usually for the Ignite phase. Designed for kids to work through with a parent on weekends, or solo. The first set is in development.`
- **Replacement:** `Class materials built around the thinking skills our program teaches — patterns, elimination, constraints, estimation, strategy. These are the same guided-practice materials we use in our classes, usually during the Ignite phase. We're making them available so families can keep building the skills at home. Coming soon.`

### 10. 2026-04-28 · `app/page.js` · "Hear about new launches" body
- **Original:** `We're shipping new games and workbooks throughout the year. Drop your email and we'll let you know when something new is ready to play or work through.`
- **Replacement:** `Sparkworks adds new activities and class materials throughout the year. Drop your email and we'll let you know when something new is available.`

---

## CHECK-BACK CADENCE

USPTO trademark applications typically take 8–12 months. After filing:

- ~3 months → first office action
- ~6 months → publication for opposition
- ~9–12 months → registration

Schedule a recurring agent (default: every 8 weeks) to ask Mike about TM status. When status changes to "granted":

1. Walk the Swap Log above and revert each change.
2. Remove all `// TM-2026:` comment markers.
3. Delete this doc (or move to an archive).
4. Update the CLAUDE.md "Read these first" section to drop the TRADEMARK_GUIDANCE pointer.

---

## RELATIONSHIP TO OTHER DOCS

- **[BRAND_REF.md](BRAND_REF.md)**, **[DESIGN_PATTERNS.md](DESIGN_PATTERNS.md)**, **[PROGRAM_AND_MESSAGING.md](PROGRAM_AND_MESSAGING.md)**, **[MARKETING.md](MARKETING.md)**, **[MARKETING_GUIDELINES.md](MARKETING_GUIDELINES.md)** — these all continue to reflect the canonical brand voice. Don't apply TM substitutions to them. They govern everything except the public website.
- This doc only governs the public website during the TM application window.

---

*This doc reflects the trademark posture as of April 2026. As coverage expands, some of these constraints will loosen — and once the TM grants, this doc retires entirely.*
