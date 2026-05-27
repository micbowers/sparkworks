---
agent: Sparkworks Website
last_updated: 2026-05-27
cadence: weekly (daily during cohort enrollment pushes)
---

## Current focus
Games surface (`/practice`) launched. First family card (Mastermind & Code Breaker) live with product photos, version pickers, affiliate CTAs, and email-subscribe form for new picks. Design treatment still stubbed — Design has the brief on `Cairn – Products`. Next likely add: Sparkworks-built games (FTA + Block Code) once cross-product copy is coordinated.

## KPIs
- Registrations to date (Founding Sparks + Season 2): _populate next refresh — needs Notion DB query_
- Subscribers to date (Games / Materials / Program interests): _populate next refresh — needs Notion DB query_
- Deploy status: green · main @ b633124 → (with subscribe-form add) deployed to www.sparkworks.kids on 2026-05-27

## Open items needing Mike (or Tina)
- See `[SW]` tasks on `Cairn – Sparkworks`
- Decision needed: should `/practice` add a "Games we built" section linking Find The Alien + Block Code? Cross-product copy needs Mike's go-ahead per CLAUDE.md.

## Recently completed
- 2026-05-27 — Removed the "From pilot parents" quotes section from the homepage (`92784c1`)
- 2026-05-27 — Shipped `/practice` page with Mastermind & Code Breaker family card (verbatim PCr endorsement copy, two version pickers with affiliate links, site-level affiliate disclosure); wired homepage Games ProductCard to `/practice`; dropped "· Coming soon" suffix on the Games card title (`355e05a`)
- 2026-05-27 — Filed design brief on `Cairn – Products` (`[Des] Hero + family-card visual for sparkworks.kids/practice page`) — async hand-off, stubbed visuals on the page today
- 2026-05-27 — Filed content reconciliation task on `Cairn – Sparkworks` (`[PCr] Reconcile Mastermind session-number mapping (S6 vs S7)`) — endorsements doc says S6, program page shows S7 for the strategy session
- 2026-05-27 — Added product photos (Mastermind / Code Breaker) to /practice and restructured the family card so version pickers + buy buttons sit above the fold; promoted Amazon CTAs to Ember-primary, demoted "More on the way" callout to teal to preserve Ember rationing (`b633124`)
- 2026-05-27 — Replaced static "More on the way" callout on /practice with an email subscribe form (`interests: ["Games"]`, `source: "practice-page"`) — captures interest from email-link visitors who already saw the recommendation (`c81d057`)
- 2026-05-27 — **Process miss + recovery**: Mike flagged image-bg and CTA-alignment issues that should have been caught pre-publish. Invoked **sparkworks-designer (Critique mode)** and **cairn-dev-qa** in parallel — both confirmed Mike's flags plus surfaced ~10 additional findings. Filed `[AR] Update sparkworks-designer + cairn-dev-qa checklists` task on `Cairn – Ops` ([task link](https://tasks.google.com/task/sAIcMXtt8FD44_JK?sa=6)). Integrated fix shipped: image well → white + 1px Bone border (resolves Locked Rule #1 violation); homepage Games CTA promoted to Ember-primary + "Why these games" secondary anchor → /practice#mastermind-code-breaker (Mike: visual parity with Program card); hero-ribbon "Save my seat" demoted to outlined (Mike's call, drops upper-fold Ember count to 2); /practice hero title reframed to "Activities and games we use in class…" per TM doc (TM-2026 entry 11 logged); homepage Games card body re-aligned to activity-led framing (swap log entry 4b updated); /practice family title h3→h2 + version-picker name h4→h3 (a11y heading order); skill names bolded in whyWeRecommend (verbatim discipline); Code Breaker specs restored to full form including difficulty-level detail; VersionPicker top-border dropped (resolves triple-Teal stacking); ProductCard className trailing-space artifact fixed; `id="subscribe"` anchor added on /practice subscribe section.

## Blocked / waiting on
- Waiting on **Design** for hero + family-card visual treatment for `/practice` (brief filed 2026-05-27; stubs live in the meantime)
- Waiting on **PCr** to reconcile Mastermind session-number mapping (filed 2026-05-27; `/practice` uses session name without a number until then)
- Waiting on **PCr + Mike** to author more endorsement entries (Strategy & Critical Thinking, Pattern Detection categories are empty placeholders in `SPARKWORKS_ENDORSEMENTS.md`)

## Brand-audit notes (run on /practice 2026-05-27)
- 11-point checklist from `SPARKWORKS_MARKETING_GUIDELINES.md` passes overall
- **Borderline #9**: Bone White used as the background of the product-image container inside each version picker. Defensible — it's a small accent surface inside a card, not the page background — but worth Mike's eye if it reads off.
- **Skill-chip naming**: chips use technical names ("Pattern Detection", "Elimination", "Strategy"), consistent with the existing `/program` page. The guidelines suggest accessible plain language for *marketing materials* (e.g., WhatsApp teaser) — website nav/structural labels traditionally keep the technical names.

## Known issues
- Local `next build` and `next dev` cache writes fail intermittently with `EINVAL` / `ENOENT` on the Google Drive virtual filesystem (`G:\My Drive\…`). Dev server still serves; build still completes the compile step on Vercel. Not blocking — Vercel's Linux build env is the source of truth for production validation.
