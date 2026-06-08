---
agent: Sparkworks Website
last_updated: 2026-06-08
cadence: weekly (daily during cohort enrollment pushes)
---

## Current focus
**Analytics funnel-coverage pass (2026-06-08) — SHIPPED LIVE.** Closed the three biggest blind spots: top-of-funnel CTA clicks (`cta_click`), "Play free" outbound clicks (`game_play_click`), `/practice` card-expand (`practice_card_expand`). Committed (`5a1b96d`) + on GitHub main; **deployed to production via Vercel CLI** (`dpl_2J5wJjj...`, aliased to www.sparkworks.kids, verified 200). See "Recently completed" below. **One real infra problem surfaced — see Known issues + open Mike task: Google Drive is corrupting `.git`** (breaks `git push`/`fetch`, which stalled deploys and made auto-deploy *look* broken — auto-deploy itself is fine, verified working).

## Prior focus
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
- Deploy status: green · www.sparkworks.kids serving latest main (analytics `5a1b96d` + `/feedback` survey work + docs). Auto-deploy on `git push origin main` is **working** (verified ~47s push→deploy). Project = `sparkworks`. Only watch-out: Drive `.git` corruption can block the push (see Known issues).
- Analytics: Vercel `<Analytics />` + `<SpeedInsights />` mounted in `app/layout.js`. Custom events: `register_submit`, `subscribe_submit`, `amazon_click`, `cta_click` (new), `game_play_click` (new), `practice_card_expand` (new), `games_cta_click`, `spark_poster_expand`/`_download`. Full list + properties in CLAUDE.md. Mike to confirm Vercel dashboard toggles are ON.

## Open items needing Mike (or Tina)
- See `[SW]` tasks on `Cairn – Sparkworks`
- **Bring Sparkworks-built items back** when ready: Block Code + Ignite Practice Book 1 entries are commented out in `app/practice/page.js` FAMILIES array (with a clear note pointing to the easy-restore path). Find The Alien + Knight's Tour are currently in the recommended list since they're working products parents can use immediately; when the Sparkworks-built block returns, FTA + KT could move up there with Block Code + Ignite.
- **Designer subscribe-form redundancy flag** (from prior critique) still open: 2 SubscribeForms visible end-to-end (homepage slot 3 + /practice bottom "Hear about new picks"). Per-Ignite-Book inline form is currently hidden. Lower priority now that Sparkworks-built items aren't on /practice.
- **Cipher Step** game exists in `Games/Cipher Step/` as PDFs only (no web app). Could surface as a "free print-and-play download" entry later; not added today.
- **PA-API migration** trigger: switch to Amazon Product Advertising API for live price/rating data once Sparkworks-20 affiliate account has the required qualifying sales (currently ~3 sales/180 days per Amazon). Task filed.
- **Vercel dashboard toggles**: please verify Analytics + Speed Insights are toggled ON in the project settings — code is wired but data won't flow without the per-project toggle.

## Recently completed (2026-06-08 — analytics funnel-coverage pass)
- **Top-of-funnel CTA tracking** (`cta_click`): home ribbon "Save my seat" (`home-hero`), Program card primary + "View Program Details" (`home-program`, `home-program-details`), Practice card "See our picks" (`home-practice`), and the `/program` hero "Save my seat" (`program-hero`). Previously only `register_submit` fired, so home→program click-through and /program landing→submit drop-off were both invisible.
- **`game_play_click`**: "Play free →" outbound links (Find The Alien, Knight's Tour) on `/practice` were untracked outbound clicks — now fire with `{ game, source: "practice-play-free" }`.
- **`practice_card_expand`**: ExpandableCard open now fires `{ slug }` (open only, not collapse). The "Why we love it" expand is the page's editorial differentiator and had zero usage data; the funnel `amazon_click` documents (views → expand → click) was missing its middle step.
- **New reusable infra**: `TrackedAnchor.jsx` (outbound `<a>` click tracking, sibling to existing `TrackedLink.jsx`); `ProductCard` cta/secondary action objects now accept `event`/`eventProps` and route through TrackedLink/TrackedAnchor automatically.
- **Verified** via `next build` (✓ compiled, lint+types pass, 11/11 pages) using the documented webpack-cache-disable workaround for the Drive-mount EINVAL; config restored after.
- **Committed** `5a1b96d` (8 files, staged individually to avoid the noisy working tree) → pushed to GitHub main. Found git not on PATH; used the GitHub-Desktop-bundled git at `C:\Users\BaoClan\AppData\Local\GitHubDesktop\app-*\resources\app\git\cmd\git.exe`.
- **Diagnosed the deploy confusion → root cause = Drive `.git` corruption, not Vercel.** Removed 236 `desktop.ini` files Drive injected into `.git` (5 were broken refs in `.git/refs/`) that were failing `git fetch`/`push` and stalling auto-deploy. Initially (wrongly) concluded auto-deploy was broken and did a manual CLI deploy — which also misfired once to a stray folder-name `sparkworks-site` project (removed) before re-linking to the real `sparkworks` project. **Later proved auto-deploy works** (empty-commit probe → prod deploy in ~47s), so the CLI deploy was unnecessary. Net: site live + correct; the one real action item is getting the repo off Drive.
- **Deferred** (not done this pass): `register_start` form-abandonment event; standardizing the legacy `games_cta_click` name. Naming convention going forward (`surface_action`) noted in CLAUDE.md.

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
- **RBG (Legal) — DONE this round (2026-06-03):** (1) embedded copyright/CMI metadata in the 7 poster images (`97cb91c`); (2) added the RBG-approved proprietary-rights footer line AND shipped the FTC/Amazon affiliate disclosure that was sitting uncommitted/undeployed (`d6bbf4d`). RBG verified the existing ©/™ + affiliate wording as correct (no change).
- **Email alias — DONE 2026-06-03:** `privacy@sparkworks.kids` → `michael.bowers@gmail.com` is live + tested (ImprovMX + Vercel-CLI DNS: 2 MX + SPF TXT added to the Vercel-hosted zone). Vercel CLI is now authed on this machine as `michaelbowers-4204`. (No agent stores a Vercel token — access = CLI auth per `integrations.md`.)
- **`/legal` page — SHIPPED as MVP 2026-06-03** (`3804c21` → www.sparkworks.kids/legal). RBG-drafted Terms of Use + Intellectual Property + Trademark + Privacy Policy; "Terms & Privacy" footer link added; poster metadata `WebStatement` backfilled to `/legal#ip`. Privacy section is truthful to actual practice (parent-completed enrollment + email signup → Notion; cookieless Vercel analytics; Amazon affiliate; Google Fonts; minimal child data = first name + grade; generic retention; contact privacy@sparkworks.kids).
- **RBG (Legal) — still open (post-ship, non-blocking):** (1) **COPPA counsel pass** (~$300) on the live children's-privacy paragraph; if counsel finds CCPA/CPRA applies, add a California-rights block. (2) **Add `app/legal/page.js` to the ™→® swap list** in `SPARKWORKS_TRADEMARK_GUIDANCE.md` (routes through Architect; the page now carries a literal `Sparkworks™`). Both tracked as `[RBG]` tasks on `Cairn – Ops`.
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
- **🔴 Google Drive corrupts `.git` (2026-06-08) — THE root cause of this session's deploy confusion.** Drive injects `desktop.ini` into `.git/` including `.git/refs/`, producing `bad object refs/desktop.ini` that breaks `git fetch`/`push`. **Effect: commits silently fail to reach GitHub → no auto-deploy → production goes stale, which masquerades as "auto-deploy is broken."** Removed 236 today; it WILL recur. Real fix = move the working clone off the Drive mount to local disk (Drive can hold a non-git copy, but `.git` should not be Drive-synced). **Needs Mike decision.** `[SW]` task filed. Quick unblock if it recurs: `Get-ChildItem .git -Recurse -Filter desktop.ini -Force | Remove-Item -Force`.
- **Auto-deploy on push: VERIFIED WORKING (2026-06-08).** Earlier-in-session belief that it was broken was WRONG — that was the `.git` corruption above blocking the push, not Vercel. Controlled test: empty commit pushed → production deploy in ~47s. `git push origin main` is the normal deploy path; the manual CLI deploy done earlier this session was unnecessary (harmless).
- **Vercel project footgun:** account has both `sparkworks` (real site, www.sparkworks.kids) and — until today — a stray `sparkworks-site` (auto-created by a bare `vercel --prod` defaulting to the folder name; removed). Same pattern as `logixdojo`/`logixdojo-site`. If you ever CLI-deploy, confirm `.vercel/repo.json` → `sparkworks` first.
- Local `next build` and `next dev` cache writes fail intermittently with `EINVAL` / `ENOENT` / `EPERM` / `EBADF` on the Google Drive virtual filesystem (`G:\My Drive\…`). Dev server still serves; Vercel's Linux build env is the source of truth for production validation. **Concrete workarounds (build cache toggle, npm-install-on-local-disk, git-not-on-PATH path, exiftool/Vercel-CLI notes, commit-scope discipline) are now documented in [`lessons-learned.md`](lessons-learned.md)** — read it at session start alongside this file. Filed `[QD]` task to document the workaround.
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
