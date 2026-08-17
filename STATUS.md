---
agent: Sparkworks Website
last_updated: 2026-08-16
cadence: weekly (enrollment-push cadence suspended — see Current focus)
---

## Current focus
**🔴 ENROLLMENT PAUSED (2026-08-16, Mike's call) — sign-ups removed from the site.** Season 2 was never scheduled (no day/time/location ever locked) and Tina's availability to teach it again has lessened. Mike's decision: **keep the program presenting as a real, active offering, but stop taking sign-ups** — replaced with a lightweight "tell us you're interested" email capture. All dated and urgency claims are gone from public copy (no "Season 2 is filling now", no September 7 start, no "hold a seat", no "slots offered in order of registration"). The curriculum, tracks, four-phase structure, Spark Challenge and Sparks of History sections are all untouched. **Nothing was deleted** — `InterestForm.jsx`, `/api/register` and the Notion registration DB are intact and unreferenced; restore path is documented inline at the `app/program/page.js` `#interest` section and in `SPARKWORKS_TRADEMARK_GUIDANCE.md` entry A2.

**✅ SHIPPED LIVE** (`b83b4b8`) after an independent QA pass (Rule 12) and Mike's sign-off. Deploy confirmed on prod by polling `/`, `/program` and `/legal` — new copy present, zero stale enrollment copy on any page.

**Also shipped today: quarterly Amazon snapshot refresh — LIVE** (`50c952e`, deploy confirmed in ~20s). Prices were 76 days stale and one was actively wrong. Details in Recently completed.

**`/legal` was updated in the same push** to stop describing child-data collection that no longer happens. RBG owns that page — edited at Mike's explicit direction to avoid shipping a live contradiction, and **still pending RBG review** under the open `[RBG]` task.

## Prior focus (pre-2026-08-16 — superseded; kept for context)
**Analytics funnel-coverage pass (2026-06-08) — SHIPPED LIVE.** Closed the three biggest blind spots: `cta_click`, `game_play_click`, `practice_card_expand`. Committed (`5a1b96d`), live, auto-deploy verified working (~47s).

`/practice` shipped through ~25 iterations of feedback + redesign. Final state is an entry-based vertical list under a tight hero — no skill-section grouping, no "We recommend" section header (Sparkworks-built items hidden for now so there's nothing to distinguish a "recommended" group from). 5 entries in revenue-first order:
1. Mastermind & Code Breaker (Amazon affiliate, 2 versions)
2. Shisima & Nine Men's Morris (Amazon affiliate, 2 versions)
3. Perfectly Logical! (Amazon affiliate, solo workbook)
4. Find The Alien (free, live at findthealien.sparkworks.kids)
5. Knight's Tour (free, live at knightstour.sparkworks.kids)

Each entry: tags row → family title → 1-line highlight → prominent **Why we love it / Why we love them** expand at top → product blocks (cover + manufacturer + name + specs + fit hint + ★ rating + price + Buy on Amazon for affiliate, or Play free → for free games). Compact view stays minimal; the editorial differentiator opens on demand.

## KPIs
- Registrations to date (Founding Sparks + Season 2): **STILL BLOCKED** — the Notion connector requires re-authentication as of 2026-08-16 and a Claude Code session cannot run the OAuth flow itself. Unblocked either by Mike authorizing the connector in claude.ai settings or by dropping `NOTION_API_KEY` into `.env.local` (this machine now has node/npm/python, unlike the June machine). `[SW]` task filed. **This line has been unpopulated since 2026-06-09 — two months of briefs with no enrollment numbers.**
- Subscribers to date (Games / Materials / Program interests): same blocker. Note the `Program` interest will now start accumulating from the new `/program` interest form.
- Founding Sparks post-program survey responses: **3 real** (Wallace Huang, Chris Mangandi, Christina Paraiso) as of 2026-06-09. DB `b9145d59e5b444af8949e20a837157ac`.
- Deploy status: green · www.sparkworks.kids serving latest main (analytics `5a1b96d` + `/feedback` survey work + docs). Auto-deploy on `git push origin main` is **working** (verified ~47s push→deploy). Project = `sparkworks`. Only watch-out: Drive `.git` corruption can block the push (see Known issues).
- Analytics: Vercel `<Analytics />` + `<SpeedInsights />` mounted in `app/layout.js`. Custom events: `register_submit`, `subscribe_submit`, `amazon_click`, `cta_click` (new), `game_play_click` (new), `practice_card_expand` (new), `games_cta_click`, `spark_poster_expand`/`_download`. Full list + properties in CLAUDE.md. Mike to confirm Vercel dashboard toggles are ON.

## Open items needing Mike (or Tina)
- See `[SW]` tasks on `Cairn – Sparkworks`
- **🔴 Review + QA the enrollment-pause copy, then push.** Built and verified locally but deliberately unpushed. Per CLAUDE.md Rule 12 this is external-facing copy and needs an independent QA pass (I must not self-review). Full Original → Replacement diff is in `SPARKWORKS_TRADEMARK_GUIDANCE.md` entry A2.
- **Open question deferred to Mike: what is the program's status, really?** The site now says "dates aren't set yet," which is true and buys time. But if Tina isn't teaching again, "the next season" may not be a season at all, and the honest posture might eventually be past-tense ("here's what we built") rather than forward-looking. Not urgent, but the current copy has a shelf life — revisit if there's no season by the time the interest list has been sitting a few months.
- **Bring Sparkworks-built items back** when ready: Block Code + Ignite Practice Book 1 entries are commented out in `app/practice/page.js` FAMILIES array (with a clear note pointing to the easy-restore path). Find The Alien + Knight's Tour are currently in the recommended list since they're working products parents can use immediately; when the Sparkworks-built block returns, FTA + KT could move up there with Block Code + Ignite.
- **Designer subscribe-form redundancy flag** (from prior critique) still open: 2 SubscribeForms visible end-to-end (homepage slot 3 + /practice bottom "Hear about new picks"). Per-Ignite-Book inline form is currently hidden. Lower priority now that Sparkworks-built items aren't on /practice.
- **Cipher Step** game exists in `Games/Cipher Step/` as PDFs only (no web app). Could surface as a "free print-and-play download" entry later; not added today.
- **PA-API migration** trigger: switch to Amazon Product Advertising API for live price/rating data once Sparkworks-20 affiliate account has the required qualifying sales (currently ~3 sales/180 days per Amazon). Task filed.
- **Vercel dashboard toggles**: please verify Analytics + Speed Insights are toggled ON in the project settings — code is wired but data won't flow without the per-project toggle.

## Recently completed (2026-08-16 — enrollment pause + Amazon refresh)
- **Quarterly Amazon snapshot refresh — SHIPPED LIVE** (`50c952e`; push → prod confirmed in ~20s by polling prod HTML for the new values, not just a 200). Snapshots were from 2026-06-01 (76 days stale). All 5 ASINs re-fetched.
  - **Found a real accuracy bug: `Perfectly Logical!` has NO NEW COPIES on Amazon.** The buybox is a *used* offer ($6.16, "Only 1 left", third-party reseller Gulf Coast Books); the listing renders no "new" offer row at all. The site was showing $12.99 — both stale *and* unpurchasable. Price now hidden (Mike's call: keep the entry, no price) rather than showing a used price beside a "Buy on Amazon" CTA.
  - **Two long-standing "parser error" suspicions resolved.** Nine Men's Morris "1 review" WAS wrong → actual 78. `Perfectly Logical!` 5849 WAS wrong → actual 4,419. But Shisima's "2 reviews" is **real**, confirmed by two independent fetches — it's just a small listing. All three counts now display.
  - **Root cause of the old bad reads:** first-match regex for `X out of 5 stars` / price was hitting unrelated recommendation modules on the page. Authoritative fields are `acrPopover` (rating) and `acrCustomerReviewText` (count). Documented in the refresh task.
  - Mastermind rose 25.5% ($39.05 → $48.99) — real, sold by Amazon, in stock. Flagged: it's the entry-level pick for grades 2–3 and is now the priciest item on the page.
- **ENROLLMENT PAUSED — built, verified, NOT pushed.** Removed all sign-up mechanics and dated/urgency claims from the homepage and `/program`; replaced the child-data registration form with an email-only interest capture reusing the existing `SubscribeForm` → `/api/subscribe` with the already-supported `Program` interest tag (zero new backend, existing `subscribe_submit` analytics). Six copy items + one new FAQ; all logged in `SPARKWORKS_TRADEMARK_GUIDANCE.md` **entry A2** with full Original → Replacement pairs and a restore procedure. `next build` clean (11/11), and prerendered HTML checked to confirm zero residual "Save my seat" / "filling now" / "September 7" / "hold a seat" strings and that the registration form is fully gone from `/program`.
- **QA pass completed (independent reviewer, per Rule 12).** Note: the project's `sparkworks-program-qa` sub-agent is **not registered** in sessions opened at the `Sparkworks Website` folder — its definition lives at `sparkworks-site/.claude/agents/`, one level below the working dir, so it never loads. Used the documented fallback (independent `general-purpose` reviewer briefed with the QA agent's own definition). **Worth fixing: move or symlink `.claude/agents/` up a level so the real QA agent is spawnable.**
  - **2 Criticals, both OUTSIDE the changed files.** (1) **`/legal` still promises seat-holding and describes child-data collection** — the one surviving public contradiction of the pause. RBG-owned, so I did not touch it; drafted replacement copy is in the `[RBG]` task and the decision is Mike's. (2) **`CLAUDE.md` still carried the dead September 7 date** and described `InterestForm` as the live `/program` form — a future agent reading it as canonical would have put the removed claims straight back. **Fixed** (5 edits).
  - **Minors applied:** duplicate "Next season" eyebrow on `/program` → "The Program"; ribbon CTA relabelled "Tell us you're interested" so it no longer reads identically to the submit button it jumps to; cost FAQ trimmed (the page stated the negative 4× and is now 2×); "$449" reframed from "is" to "is priced at" (it was announced but never actually charged); inert `?source=` params dropped from two homepage hrefs and the attribution consequence recorded in A2.
  - **Known non-blocking:** Ember rationing is over budget on BOTH pages (9 on home, ~18 on `/program`, vs. the 2–3 locked rule) — but this diff adds no regression. Root cause is `.ts-eyebrow` defaulting to Ember in `globals.css`, so most instances are inherited, not deliberate. Worth a separate Design ticket. Also flagged site-wide: `<strong>` inside `.ts-body` renders Merriweather Bold, which locked rule 4 forbids — pre-existing, out of scope.
- **Drive `.git` corruption recurred exactly as predicted** — 238 `desktop.ini` files, **9 of them in `.git/refs/`** (the ones that break `push`/`fetch`). Cleared; push then succeeded. This is the second occurrence in two sessions and it will keep happening until the repo moves off Drive.
- **This machine (`micbo`) has full dev tooling** — node, npm, git, python, npx all on PATH. That contradicts the June note that "dev tooling lives on Mike's other machine" (that was the `BaoClan` machine). Builds and scripted Amazon fetches can be run here directly. Still no `.env.local`, so no local Notion REST access.
- **Filed:** `[RBG]` privacy-copy review (the policy still describes child-data collection we no longer do), `[SW]` Notion connector re-auth. **Updated:** the quarterly Amazon refresh task with findings, method lessons, and a 2026-11-14 due date.

## Recently completed (2026-06-09 — survey-response check)
- **Founding Sparks parent survey is collecting real responses.** Queried the survey DB (`b9145d59e5b444af8949e20a837157ac`): **3 genuine submissions** — Wallace Huang (Jun 9), Chris Mangandi (Jun 8), Christina Paraiso (Jun 8, confirmed real by Mike). 5 test rows (Test Parent, Mike Bowers, dfds, FID Test, API Test) flagged; **Mike deleted them in the Notion UI.**
- **Couldn't archive rows from this machine** — the Notion connector has no delete/archive action, and the REST-API route was unavailable (no `.env.local` on disk; no working `node`/`npm`/Vercel CLI here — dev tooling lives on Mike's other machine). Deletion done by Mike directly. Future bulk Notion-row cleanup needs either the dev machine (key + REST) or manual UI.

## Recently completed (2026-06-08 — analytics funnel-coverage pass)
- **Top-of-funnel CTA tracking** (`cta_click`): home ribbon "Save my seat" (`home-hero`), Program card primary + "View Program Details" (`home-program`, `home-program-details`), Practice card "See our picks" (`home-practice`), and the `/program` hero "Save my seat" (`program-hero`). Previously only `register_submit` fired, so home→program click-through and /program landing→submit drop-off were both invisible.
- **`game_play_click`**: "Play free →" outbound links (Find The Alien, Knight's Tour) on `/practice` were untracked outbound clicks — now fire with `{ game, source: "practice-play-free" }`.
- **`practice_card_expand`**: ExpandableCard open now fires `{ slug }` (open only, not collapse). The "Why we love it" expand is the page's editorial differentiator and had zero usage data; the funnel `amazon_click` documents (views → expand → click) was missing its middle step.
- **New reusable infra**: `TrackedAnchor.jsx` (outbound `<a>` click tracking, sibling to existing `TrackedLink.jsx`); `ProductCard` cta/secondary action objects now accept `event`/`eventProps` and route through TrackedLink/TrackedAnchor automatically.
- **Verified** via `next build` (✓ compiled, lint+types pass, 11/11 pages) using the documented webpack-cache-disable workaround for the Drive-mount EINVAL; config restored after.
- **Committed** `5a1b96d` (8 files, staged individually to avoid the noisy working tree) → pushed to GitHub main. Found git not on PATH; used the GitHub-Desktop-bundled git at `C:\Users\BaoClan\AppData\Local\GitHubDesktop\app-*\resources\app\git\cmd\git.exe`.
- **Diagnosed the deploy confusion → root cause = Drive `.git` corruption, not Vercel.** Removed 236 `desktop.ini` files Drive injected into `.git` (5 were broken refs in `.git/refs/`) that were failing `git fetch`/`push` and stalling auto-deploy. Initially (wrongly) concluded auto-deploy was broken and did a manual CLI deploy — which also misfired once to a stray folder-name `sparkworks-site` project (removed) before re-linking to the real `sparkworks` project. **Later proved auto-deploy works** (empty-commit probe → prod deploy in ~47s), so the CLI deploy was unnecessary. Net: site live + correct; the one real action item is getting the repo off Drive.
- **Added `.gitignore`** for `desktop.ini` / `Thumbs.db` / dev logs / `*.tmp` (`570d04a`) — keeps the working tree clean (does not fix `.git`-internal corruption; migration off Drive is the real fix).
- **Decided (Mike + agent): migrate repo off Google Drive → local clones synced via GitHub.** Full step-by-step runbook captured in the `[SW]` "Move sparkworks-site repo off Google Drive" task. Deferred — not urgent.
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
- Dev server not started this session — verification was done via `next build` + inspection of the prerendered HTML in `.next/server/app/`, which was sufficient for copy/structural changes. Use the polling pattern, not ScheduleWakeup, if you start it.
- **`.git` desktop.ini corruption recurred 2026-08-16** (238 files, 9 in `.git/refs/`). Cleared with the documented one-liner and the push went through. **Second occurrence in two sessions — treat as "will happen every session until the repo moves off Drive."** Check it BEFORE attempting a push, not after a confusing failure.
- **Dev tooling IS available on this machine (`micbo`)** — node, npm, git, python, npx all on PATH. The June-session note that dev tooling only lives on Mike's other machine applied to the `BaoClan` machine. Still no `.env.local` here, so Notion REST access is unavailable locally.

## What's not yet built (deferred)
- Dedicated `/games` and `/materials` pages (currently merged into `/practice`)
- Per-skill filter UI on `/practice` (defer until entry count > 6)
- Real Ignite Practice Book 1 cover (waits on Ignite Phase 5 + KDP listing)
- Cipher Step "print and play" download section
- "How Founding Sparks went" recap on `/program` (hold for after cohort completes)
- Knight's Tour-style interactive build for any other session warm-ups
