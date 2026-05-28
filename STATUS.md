---
agent: Sparkworks Website
last_updated: 2026-05-27
cadence: weekly (daily during cohort enrollment pushes)
---

## Current focus
`/practice` shipped today through ~25 iterations of feedback + redesign. Final state is an entry-based vertical list under a tight hero — no skill-section grouping, no "We recommend" section header (Sparkworks-built items hidden for now so there's nothing to distinguish a "recommended" group from). 5 entries in revenue-first order:
1. Mastermind & Code Breaker (Amazon affiliate, 2 versions)
2. Shisima & Nine Men's Morris (Amazon affiliate, 2 versions)
3. Perfectly Logical! (Amazon affiliate, solo workbook)
4. Find The Alien (free, live at findthealien.sparkworks.kids)
5. Knight's Tour (free, live at knightstour.sparkworks.kids)

Each entry: tags row → family title → 1-line highlight → prominent **Why we love it / Why we love them** expand at top → product blocks (cover + manufacturer + name + specs + fit hint + ★ rating + price + Buy on Amazon for affiliate, or Play free → for free games). Compact view stays minimal; the editorial differentiator opens on demand.

## KPIs
- Registrations to date (Founding Sparks + Season 2): _populate next refresh — needs Notion DB query_
- Subscribers to date (Games / Materials / Program interests): _populate next refresh — needs Notion DB query_
- Deploy status: green · main @ `eafccc6` deployed to www.sparkworks.kids on 2026-05-27 (Vercel auto-deploy on push)
- Analytics: Vercel `<Analytics />` + `<SpeedInsights />` mounted in `app/layout.js`. Custom events firing: `subscribe_submit` (SubscribeForm), `amazon_click` (AmazonButton), enrollment event (InterestForm). Mike to confirm Vercel dashboard toggles are ON.

## Open items needing Mike (or Tina)
- See `[SW]` tasks on `Cairn – Sparkworks`
- **Bring Sparkworks-built items back** when ready: Block Code + Ignite Practice Book 1 entries are commented out in `app/practice/page.js` FAMILIES array (with a clear note pointing to the easy-restore path). Find The Alien + Knight's Tour are currently in the recommended list since they're working products parents can use immediately; when the Sparkworks-built block returns, FTA + KT could move up there with Block Code + Ignite.
- **Designer subscribe-form redundancy flag** (from prior critique) still open: 2 SubscribeForms visible end-to-end (homepage slot 3 + /practice bottom "Hear about new picks"). Per-Ignite-Book inline form is currently hidden. Lower priority now that Sparkworks-built items aren't on /practice.
- **Cipher Step** game exists in `Games/Cipher Step/` as PDFs only (no web app). Could surface as a "free print-and-play download" entry later; not added today.
- **PA-API migration** trigger: switch to Amazon Product Advertising API for live price/rating data once Sparkworks-20 affiliate account has the required qualifying sales (currently ~3 sales/180 days per Amazon). Task filed.
- **Vercel dashboard toggles**: please verify Analytics + Speed Insights are toggled ON in the project settings — code is wired but data won't flow without the per-project toggle.

## Recently completed (2026-05-27 — single-day session, abbreviated)
- **`/practice` initial launch** with Mastermind & Code Breaker (`355e05a` → `c81d057`)
- **Product photos + above-fold restructure** (`b633124`)
- **Process recovery**: invoked Designer + Dev-QA after Mike flagged image-bg + CTA-alignment issues; filed `[AR]` task to bake pre-publish reviews into agent checklists (`8b9c249`). Held: Amazon-CTA Ember demotion (Mike kept Ember-primary for revenue).
- **PCr endorsement v2** integrated — voice/accessibility pass on Mastermind & Code Breaker; established the reusable `ProTip` component pattern; added "Three strategies we teach in class" Pro Tip verbatim from `S6 Strategy` session plan (`d5f1b3d` → `efe66f2`).
- **Games + Materials merge** on the homepage (`476d40a`): collapsed 3 cards → Program / merged Practice / subscribe slot. TM swap-log entry 12 logged.
- **Added Morris games** family with Nine Men's Morris (WE Games) (`bd56ae9`).
- **Added Perfectly Logical!** workbook (Jenn Larson / Rockridge Press) (`43d5d30`).
- **Shopping-grid redesign** per Mike's "too texty" feedback: 2-col grid with compact cards, inline expand, ExpandableCard component (`a3d2f4b`).
- **Entry-based vertical layout** ("one at a time like on mobile") with products visible in compact view and editorial revealed via `Why we love it/them` expand (`561f03e`).
- **Designer fixes integrated**: image wells white-bg + left-justify (no more white-on-gray); section-eyebrow simplification; section drop to two top-level groups (`a59f99b` → `8ec601c`).
- **Block Code added** as Sparkworks-built game-pre-launch entry with verbatim session-1 editorial and box-front+back PDFs rasterized as covers (`db1233d` → `7ffab81`).
- **Sparkworks-built items hidden** at Mike's call (`ce85da2`); Block Code + Ignite Book commented out, restore-path noted.
- **Shisima (FROEBEL)** added to Morris family per PCr's update; family renamed to "Shisima & Nine Men's Morris" (Mike's preferred order, simpler product first) (`2add774` → `e233a34`).
- **Strategy chip added to Morris family**; "and up" / "fun for adults too" language applied across all fitHints to signal inclusive multi-age appeal (`a6a51c0`).
- **"We recommend" h2 dropped** since Sparkworks-built section is hidden (`c6066d8`).
- **Find The Alien + Knight's Tour added** as free-play entries with Teal `Play free →` CTAs distinct from the Steel/golden Amazon button (`e233a34`). FTA cover swapped to the OG "Dax the alien" share image (`2e726d3`); Knight's Tour cover background made transparent (`6ff8f0c`).
- **Reordered revenue-first**: 3 affiliate entries at top, 2 free Sparkworks entries at bottom (`21ce522`).
- **Amazon button v2**: new `AmazonButton` component with inline a-smile SVG mark + price + ★ rating + (review count) per affiliate version. Snapshot data manually entered for 4 ASINs; refresh task filed on quarterly cadence (`78f6a95`).
- **`amazon_click` event tracking** added to AmazonButton with product/manufacturer/price/rating/source properties (`87fbad9`).
- **Proactive-analytics standing instruction** recorded in CLAUDE.md (`eafccc6`).
- **Hero title** shortened to "Practice at home." with explanatory clause moved to tagline (logged as TM-2026 entry 12c revision).
- **Ember/Blaze insider terms stripped** from public-facing copy on `/practice` (replaced with plain grade ranges); `[PCr]` task open to author canonical plain-language versions in the endorsements doc.

## Blocked / waiting on
- **Design** — original hero + family-card visual brief still open on `Cairn – Products` ([task](https://tasks.google.com/task/iibgX-Bzn07lGKm-?sa=6)). Page currently uses self-styled compact cards; Design hasn't returned visuals yet.
- **PCr** — multiple open tasks: reconcile S6/S7 session-number mapping (Mastermind appears at S6 in endorsements doc but program page shows S7); populate workbook section more broadly; author canonical plain-language versions of `whereWeUseIt` / per-version `why` (drop "Ember track" / "Blaze track" insider terms); author canonical 1-line `shelf_claim` field for each endorsement.
- **Architect** — two open AR tasks: update `sparkworks-designer` + `cairn-dev-qa` checklists with the lessons from today's iteration loop; bump Designer quality bar with reference designs (Cascadia/Wingspan, Aesop, Apple) and explicit "clean modern sophisticated" target.

## Process locked in this session
- **Pre-publish Designer + Dev-QA review** before any substantial visual/structural push (after the initial process miss). Multiple successful loops since.
- **Dev server stays running** across edits; verify with PowerShell poll-with-deadline loop (NOT `ScheduleWakeup`). Saved to auto-memory as `feedback_dev_verification_pattern.md`.
- **TM swap-log discipline**: every copy edit on public-facing surfaces logged in `SPARKWORKS_TRADEMARK_GUIDANCE.md` with Original + Replacement + date.
- **Verbatim discipline**: endorsement prose pulled verbatim from `SPARKWORKS_ENDORSEMENTS.md`. Public-facing translations of insider terms (Ember/Blaze → plain grade ranges) overridden inline with a comment pointing to the PCr task for canonicalization.
- **Proactive analytics**: any new outbound link / form / conversion step gets a `track()` proposal (per Mike's directive, recorded in CLAUDE.md).

## Known issues
- Local `next build` and `next dev` cache writes fail intermittently with `EINVAL` / `ENOENT` / `EPERM` on the Google Drive virtual filesystem (`G:\My Drive\…`). Dev server still serves; Vercel's Linux build env is the source of truth for production validation. Filed `[QD]` task to document the workaround.
- Block Code + Perfectly Logical entries show review counts that the scraper returned as 1 and 5849 respectively. The 1 for Nine Men's Morris and 2 for Shisima look like parser-matching mistakes (caught a different counter in the HTML) — `reviewCount: null` set on those two so the count hides until manually verified in the next refresh cycle.
- Storefront-hero SVG for Block Code (`/practice/block-code-creative.svg`) is in `public/practice/` but not referenced (kept around since Block Code may return).
- Dev server is currently DOWN at session end (port 3000 not listening). Next session will need to restart it. Use the polling pattern, not ScheduleWakeup.

## What's not yet built (deferred)
- Dedicated `/games` and `/materials` pages (currently merged into `/practice`)
- Per-skill filter UI on `/practice` (defer until entry count > 6)
- Real Ignite Practice Book 1 cover (waits on Ignite Phase 5 + KDP listing)
- Cipher Step "print and play" download section
- "How Founding Sparks went" recap on `/program` (hold for after cohort completes)
- Knight's Tour-style interactive build for any other session warm-ups
