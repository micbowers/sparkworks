---
agent: Sparkworks Website
last_updated: 2026-05-27
cadence: weekly (daily during cohort enrollment pushes)
---

## Current focus
Practice surface (`/practice`) launched as the merged home for games + practice books. Homepage collapsed from 3 product cards (Program / Games / Materials) to 3-up grid of Program / merged Practice / promoted Subscribe slot. `/practice` now grouped by 4 skill sections matching `/program`'s sprint structure (Mike's revision: collapse Game Theory into Think Beyond What You Control). First Practice Book card (Sparkworks Ignite Book 1) shipped as "Preview · Coming soon" with SubscribeForm — real cover/KDP listing waits on Ignite project Phase 5.

## KPIs
- Registrations to date (Founding Sparks + Season 2): _populate next refresh — needs Notion DB query_
- Subscribers to date (Games / Materials / Program interests): _populate next refresh — needs Notion DB query_
- Deploy status: green · main @ d5f1b3d deployed to www.sparkworks.kids on 2026-05-27; Games + Materials merge pending push (this commit)

## Open items needing Mike (or Tina)
- See `[SW]` tasks on `Cairn – Sparkworks`
- Decision deferred from 2026-05-27 Designer critique on the merge: should the "Get on Amazon" Amazon affiliate CTAs on `/practice` stay as `sw-btn-primary` (Ember filled) for revenue prominence, or demote to outlined `sw-btn` to respect the 2-3 Ember rationing rule? Mike previously approved Ember-primary for revenue. Current state keeps them primary; the page sits at ~4 editorial Ember surfaces (Hero kicker + ProTip + 2 Amazon CTAs).
- Designer flagged subscribe-form redundancy: 3 SubscribeForm instances visible to a parent who lands on the homepage and clicks through (homepage slot 3 + /practice "More on the way" section + per-Practice-Book inline form). Designer recommends dropping the homepage slot 3 back to a content card. Holding for Mike's call — the plan-approved structure keeps slot 3 as Subscribe.

## Recently completed
- 2026-05-27 — Removed the "From pilot parents" quotes section from the homepage (`92784c1`)
- 2026-05-27 — Shipped `/practice` page with Mastermind & Code Breaker family card (verbatim PCr endorsement copy, two version pickers with affiliate links, site-level affiliate disclosure); wired homepage Games ProductCard to `/practice`; dropped "· Coming soon" suffix on the Games card title (`355e05a`)
- 2026-05-27 — Filed design brief on `Cairn – Products` (`[Des] Hero + family-card visual for sparkworks.kids/practice page`) — async hand-off, stubbed visuals on the page today
- 2026-05-27 — Filed content reconciliation task on `Cairn – Sparkworks` (`[PCr] Reconcile Mastermind session-number mapping (S6 vs S7)`) — endorsements doc says S6, program page shows S7 for the strategy session
- 2026-05-27 — Added product photos (Mastermind / Code Breaker) to /practice and restructured the family card so version pickers + buy buttons sit above the fold; promoted Amazon CTAs to Ember-primary, demoted "More on the way" callout to teal to preserve Ember rationing (`b633124`)
- 2026-05-27 — Replaced static "More on the way" callout on /practice with an email subscribe form (`interests: ["Games"]`, `source: "practice-page"`) — captures interest from email-link visitors who already saw the recommendation (`c81d057`)
- 2026-05-27 — **Process miss + recovery**: Mike flagged image-bg and CTA-alignment issues that should have been caught pre-publish. Invoked **sparkworks-designer (Critique mode)** and **cairn-dev-qa** in parallel — both confirmed Mike's flags plus surfaced ~10 additional findings. Filed `[AR] Update sparkworks-designer + cairn-dev-qa checklists` task on `Cairn – Ops` ([task link](https://tasks.google.com/task/sAIcMXtt8FD44_JK?sa=6)). Integrated fix shipped: image well → white + 1px Bone border (resolves Locked Rule #1 violation); homepage Games CTA promoted to Ember-primary + "Why these games" secondary anchor → /practice#mastermind-code-breaker (Mike: visual parity with Program card); hero-ribbon "Save my seat" demoted to outlined (Mike's call, drops upper-fold Ember count to 2); /practice hero title reframed to "Activities and games we use in class…" per TM doc (TM-2026 entry 11 logged); homepage Games card body re-aligned to activity-led framing (swap log entry 4b updated); /practice family title h3→h2 + version-picker name h4→h3 (a11y heading order); skill names bolded in whyWeRecommend (verbatim discipline); Code Breaker specs restored to full form including difficulty-level detail; VersionPicker top-border dropped (resolves triple-Teal stacking); ProductCard className trailing-space artifact fixed; `id="subscribe"` anchor added on /practice subscribe section.
- 2026-05-27 — Integrated PCr's endorsement v2 voice/accessibility pass for Mastermind & Code Breaker: simplified specs (both versions now "10 guesses" — 3 difficulty levels moved into family-level Pro Tip per PCr's restructure), softened "leveled up" → "sized up", added new reusable [ProTip](app/components/ProTip.jsx) component for the "Three levels of difficulty" callout (`d5f1b3d`). Established Pro Tip as a recurring family-level pattern for future endorsements.
- 2026-05-27 — **Games + Materials merge** (pending push): collapsed the homepage 3-card structure (Program / Games / Materials) into 3-up grid of Program / merged Practice / Subscribe slot. `/practice` expanded to host games + practice books, grouped under 4 skill-section headers (Mike's 2026-05-27 revision dropped the canonical 5th "Think About How Others Will React" section; Game Theory folds into "Think Beyond What You Control"). New `PracticeBookCard` + `PracticeBookPlaceholder` components; Sparkworks Ignite Book 1 added as a "Preview · Coming soon" card with SubscribeForm. Strategy chip color fixed (blue → teal) and Mastermind session pill updated to match the new Strategy=Teal mapping. TM swap log entry 12 logged. Pre-publish Designer + Dev-QA reviews invoked; Designer findings integrated (slot 3 accent teal → blue to differentiate from merged Practice card; "Built by us" eyebrow Steel → Spark Blue; "By skill ·" prefix dropped from section eyebrows; section h2 sized larger than card h3 to fix heading inversion; Coming Soon badge moved from Ember-filled chip to Steel-outlined "Preview · Coming soon" tab on placeholder cover — also serves as the "this is a mock" honesty signal). Holding two Designer findings for Mike's decision: Amazon CTA Ember demotion + slot-3 subscribe redundancy.

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
