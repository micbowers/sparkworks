# SPARKWORKS DESIGN PATTERNS
*Layout, color, and type combination rules for new Sparkworks materials.*
*Companion to SPARKWORKS_BRAND_REF.md (colors, names) and the type system (8 ts-* classes).*

This file is **opinionated, not exhaustive.** It documents recurring patterns from real materials (parent emails, worksheets, Find the Alien, posters) so future builds are consistent without re-deriving everything from scratch.

---

## SCOPE

**Applies to:** Any new Sparkworks material — websites, games, worksheets, emails, presentations, landing pages.

**Does NOT apply to:** Existing materials shipped before April 27, 2026. Those won't be retroactively updated. New builds should follow this playbook from day one.

---

## THE FOUR LOCKED RULES

These are the rules that come up most often and break most easily. If a build follows nothing else, it must follow these.

### Rule 1 — Default background is White (#FFFFFF)
Every page, screen, worksheet, and email starts on white. Bone White (#F2EFE8) is for accent surfaces only — callout cards, table rows, secondary panels. **Never use Bone White as the main background.**

### Rule 2 — White text on dark backgrounds is 85% opacity (with one exception per surface)
Any text on a dark surface (Spark Blue, Steel Black) uses white at **85% opacity** — `rgba(255,255,255,0.85)`. The exception is the largest/highest-level header on that surface, which uses 100% white — typically the SPARKWORKS wordmark, but can also be a hero H1 like "Find The Alien." or "The Spark Challenge." There is **one 100% element per dark surface, maximum.** De-emphasized supporting text can drop to 60%.

| Use | Opacity | When |
|-----|---------|------|
| Largest header on a dark surface | 100% (`#FFFFFF`) | The wordmark OR a hero H1. Maximum prominence. One element per surface, max. |
| All other white text | 85% (`rgba(255,255,255,0.85)`) | Default for subheadings, body, taglines, kickers on dark |
| Muted supporting text | 60% (`rgba(255,255,255,0.6)`) | Footnotes, metadata, captions |

**Never use Bone White (#F2EFE8) as a text color.** Too low-contrast. Use white at 85% instead.

### Rule 3 — Ember Orange is rationed
Ember (#D4501A) is the brand accent. It must appear sparingly — too much Ember and it stops feeling like a brand element. In any single material, Ember should appear in **2–3 places maximum**:
- The orange "WORKS" letters of the SPARKWORKS wordmark (always)
- One section kicker or eyebrow label
- One primary CTA button (if there is one)

**Ember is never a fill color** in session docs, badges, or generic UI buttons. It's an accent.

### Rule 4 — Heading font is Barlow Condensed, body font is Merriweather
Display font (Barlow Condensed) does the architecture: wordmark, headings, kickers, labels.
Body font (Merriweather) does the communication: paragraphs, taglines, captions, italic quotes.
**Never mix them.** Barlow is never used for body paragraphs; Merriweather is never used for the wordmark.

---

## RECURRING LAYOUT PATTERNS

These show up over and over. Use them as starting points.

### Pattern A — The Hero Header

When: Top of any page, game, or major surface.
What: Spark Blue background with the wordmark, title, and supporting line.

**Structure:**
- Background: `--sw-spark` (#1A5C82)
- Eyebrow label: `.ts-eyebrow` in Ember (#D4501A) — e.g., "Sparkworks · Ember Track" or "Session 1 · Pattern detection"
- Title: `.ts-h1` in **white at 100%** — the largest text on the surface (the page/game/section name). This is the single 100% element on this hero.
- Tagline or supporting line: `.ts-quote` (italic Merriweather) in white at 85%
- Optional: a counter or stat block on the right side using `.ts-label` muted + a stat value

**Example HTML:**
```html
<header style="background: var(--sw-spark); padding: 36px 40px;">
  <div class="ts-eyebrow text-on-dark" style="color: var(--sw-ember);">Sparkworks · Ember Track</div>
  <h1 class="ts-h1 text-on-dark-full">Find The Alien.</h1>
  <p class="ts-quote text-on-dark">Ask good questions. Eliminate the impossible.</p>
</header>
```

**If the surface includes the SPARKWORKS wordmark above the H1** (like the brand-board hero or a sparkworks.kids landing page), the wordmark gets 100% and the H1 drops to 85%. The 100% element is whichever is *largest and most identity-defining* on that specific surface.

### Pattern B — The Numbered Step Panel

When: Multi-step setup flows, instructions, sequential content.
What: White card with a numbered circle and a clear heading.

**Structure:**
- Card: white background, 1px Bone White border, `var(--border-radius-md)` corners
- Number circle: 36px Steel Black circle, white number inside (display font, 800 weight)
- Heading: `.ts-h2` in Steel Black, sits next to the circle
- Body: `.ts-body` for instructions, `.ts-lead` for an intro paragraph

**Active state:** When a step is the current focus, give the card a 2px Ember border. Once complete, drop opacity to 0.5 and switch the number circle to Live Teal.

### Pattern C — The Footer Mark

When: Bottom of any standalone material.
What: Spark Blue band with the wordmark and tagline.

**Structure:**
- Background: `--sw-spark` (#1A5C82)
- Wordmark: SPARK at 100% white + WORKS in Ember
- Tagline: "Think through anything." in white at 60%, italic body font

```html
<footer style="background: var(--sw-spark); padding: 18px 40px; display: flex; justify-content: space-between; align-items: center;">
  <div style="font-family: var(--sw-display); font-size: 14px; font-weight: 700; letter-spacing: 3px;">
    <span class="text-on-dark-full">SPARK</span><span style="color: var(--sw-ember);">WORKS</span>
  </div>
  <div class="ts-quote text-on-dark-muted" style="font-size: 12px;">Think through anything.</div>
</footer>
```

### Pattern D — The Callout Card

When: Pull-out content that needs to feel different from the surrounding flow — dinner-question prompts, instructor notes, key takeaways.
What: Bone White background with a Live Teal or Section Color left border.

**Structure:**
- Background: `--sw-bone` (#F2EFE8) — this is one of the few legitimate uses of Bone White
- Border: 3px solid left edge in Live Teal (#1FA8AE) for action items, or the relevant section color for session-specific content
- Padding: ~14px 18px
- Heading: `.ts-label` in Steel Black
- Body: `.ts-quote` (italic) for dinner questions; `.ts-body` for instructor notes

### Pattern E — Section-Colored Skill Lists

When: Showing the four sprint skills as a set (like the homepage of sparkworks.kids).
What: Each skill paired with its sprint section's color via dot · text · dot.

**Mapping:**
- Spotting patterns / Eliminating wrong answers → Perception Purple (#9447D6)
- Finding hidden rules / Constraints → Live Teal (#1FA8AE)
- Estimating / Order of ops → Ember Orange (#D4501A)
- Strategy / Game theory / Thinking ahead → Section Blue (#2A85C2)

**Never invent new dot colors.** If a skill maps to a section, use that section's color.

---

## BUTTON HIERARCHY

Every material has at most **one primary button per view.** The rest are secondary or outline.

| Type | Style | When |
|------|-------|------|
| Primary | Solid Ember Orange background, white text, display font, 800 weight, uppercase | The single most important action ("Start game", "Register now"). One per view. |
| Outline | Transparent background, 1.5px Steel Black border, Steel Black text | Secondary actions ("Different aliens", "Cancel", "Skip"). Most buttons fall here. |
| Subtle | Transparent background, no border, Steel Black text, underline on hover | Tertiary actions ("Show all", "Learn more"). |
| Success | Solid Live Teal background, white text | Reserved for completion / progress confirmation only. |

**Don't use Ember for anything that isn't truly primary.** A page with five Ember buttons has zero primary buttons.

---

## TYPE PAIRING — WHICH STYLE GOES WHERE

| Element | Class | Example |
|---------|-------|---------|
| Page title (above the fold) | `.ts-h1` | "Find The Alien." |
| Subsection / card title | `.ts-h2` | "Pick the secret alien" |
| Eyebrow above a heading | `.ts-eyebrow` | "Session 1 · Pattern detection" |
| Hero tagline | `.ts-quote` | "Ask good questions. Eliminate the impossible." |
| Intro paragraph after a heading | `.ts-lead` | "Tap an alien to make it the secret. Teams will try…" |
| Running paragraph | `.ts-body` | The body of a parent email |
| Italic pull-quote | `.ts-quote` | The student pitch quote |
| Small uppercase tag | `.ts-label` | "PUZZLE 1", "FOUNDING SPARKS", "NAME" |
| Footnote / signoff / metadata | `.ts-caption` | "Tina & Mike · April 27, 2026" |

**Display style (`.ts-display`) is reserved for the SPARKWORKS wordmark and very large hero numbers (like a stat value of "240"). It is not a heading style.**

### Body vs. Lead — when to use which

Both are body-font (Merriweather), regular weight, not italic. The difference is size and placement.

| Style | Size | Where it goes |
|---|---|---|
| `.ts-lead` | 1.0625rem (~17px) | The **first paragraph after a heading** — the intro. Slightly bigger so it pulls the reader in. |
| `.ts-body` | 0.9375rem (~15px) | All **subsequent paragraphs** — running text. Smaller and more line spacing for sustained reading. |

**The simple rule:** if it's the first paragraph under a heading, use `.ts-lead`. Everything else is `.ts-body`.

**Pattern:**
```
H1 / H2 heading
   ↓
.ts-lead       ← intro paragraph (one paragraph)
   ↓
.ts-body       ← all subsequent paragraphs
.ts-body
.ts-body
```

If a section is just one short paragraph and there's no follow-up text, `.ts-body` is fine — you don't need a lead if there's nothing to differentiate it from.

### Exception: text-heavy email-style contexts use Body throughout

In **parent recap emails, newsletters, long-form recap documents, and similar text-heavy prose**, skip Lead entirely. Use `.ts-body` for every paragraph including the intro.

**Why:** In emails and newsletters, the intro paragraph and the body paragraphs are doing the same job — sustained reading at conversational tone. A larger lead style creates a visual stutter that reads as inconsistent rather than emphasized. The kicker label and H1 above the prose already establish hierarchy.

**Applies to:**
- Parent recap emails (Session 2-8 follow-ups, Season 1+ emails)
- Weekly newsletters
- Long-form recap documents (e.g., "How Cohort 1 Went")
- Any prose-dominant material where the reader is reading start-to-finish

**Does NOT apply to:**
- Websites and landing pages (Lead is correct as the hero intro)
- Worksheets, session docs, slide decks (Lead introduces a section)
- Posters (don't typically have intro paragraphs anyway)
- Games and interactive UIs (Lead works as the supporting line under a title)

**Pattern in emails:**
```
Eyebrow
H1 heading
   ↓
.ts-body       ← intro paragraph (same size as the rest)
   ↓
.ts-body
.ts-body
```

---

## STARTING A NEW BUILD

When building anything new for Sparkworks:

1. **Start from `sparkworks_starter_template.html`** — it has the type system CSS, palette variables, and hero/footer scaffolding pre-wired.
2. **Read this file** (SPARKWORKS_DESIGN_PATTERNS.md) to confirm which patterns apply.
3. **Cross-check against SPARKWORKS_BRAND_REF.md** for any color or name questions.
4. **Default to White as background, Steel Black as text, Barlow Condensed for headings, Merriweather for body** — unless a specific pattern says otherwise.

If a build needs something not in the patterns doc, that's a signal to either:
- Re-apply an existing pattern in a new context (most common), or
- Add a new pattern to this doc once it's used in 2+ materials (don't document one-offs)

---

## WHAT THIS DOC IS NOT

- Not a CSS framework. Use the `.ts-*` classes from the type system; they're the source of truth.
- Not exhaustive. Edge cases can be handled with judgment + the brand ref.
- Not retroactive. Existing materials (1-pager PDF, parent emails sent so far, posters in production) won't be updated to match this. New builds only.

---

*Last updated: April 2026 · After Find the Alien rebrand exercise · Companion to SPARKWORKS_BRAND_REF.md*
