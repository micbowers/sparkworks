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

*(empty — populated as edits ship)*

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
