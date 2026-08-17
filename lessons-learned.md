# Sparkworks Website — Lessons Learned (operational quirks)

Project-specific gotchas that aren't obvious from the code. Per org rule #1, durable facts live here (a Drive doc that syncs across machines), **not** auto-memory.

## Local builds/installs choke on the Google Drive filesystem (`G:\My Drive\…`)

- **`npm run build` dies with `EINVAL: invalid argument, write`** from webpack's `PackFileCacheStrategy` (it can't write `.next/cache` on the Drive virtual FS). **Workaround:** temporarily edit `next.config.js`:
  ```js
  const nextConfig = { webpack: (config) => { config.cache = false; return config; } };
  ```
  then `npm run build`, then **revert before commit**. (Vercel's Linux build is the real source of truth; this is only for a local green signal.) Clearing `.next` first helps.
- **`npm install <pkg>` into the repo also fails intermittently** on the Drive (`EBADF` / `TAR_ENTRY_ERROR`). For one-off tooling, install on **local disk**: a temp dir under `%LOCALAPPDATA%`, `npm init` + `npm install` there, then run the script pointing at the repo files (or process copies locally and copy back).
- **`npm run dev` works fine** (serves despite a harmless webpack-cache `ENOENT` warning). Verify changes by polling `http://localhost:3000` with a PowerShell deadline loop — see auto-memory `feedback_dev_verification_pattern.md`; don't restart dev per edit.

### ⭐ BEST FIX (found 2026-08-16): build from a local-disk copy, not the Drive mount

The `config.cache = false` workaround above only buys you the *first* build. Once `.next` accumulates state on the Drive mount, builds start failing in **new and misleading ways** that look like real code bugs but aren't:

- `Failed to collect page data for /api/register` + `PageNotFoundError: Cannot find module for page: /api/survey/route` (`ENOENT`) — for **every** API route, with the source files untouched. Next compiled fine, then couldn't read back the chunks it had just written.
- `EPERM: operation not permitted, open '.next\trace'` — Drive holding a lock on a directory you just deleted.
- `<Html> should not be imported outside of pages/_document`, loading `pages.runtime.**dev**.js` during a **production** build — i.e. a genuinely corrupted `.next`.

Deleting `.next` often **fails** (Drive lock: "cannot be removed because it is not empty"), and **you cannot junction `.next` to local disk** — the Drive FS rejects reparse points with `New-Item : Incorrect function`.

**What actually works — copy the project to local disk and build there:**
```powershell
$proj="g:\My Drive\...\sparkworks-site"; $build="C:\Users\<you>\AppData\Local\Temp\claude\sw-build"
robocopy $proj $build /E /MT:16 /R:1 /W:1 /NFL /NDL /NJH /NJS /NP /XD ".next" ".git" /XF "desktop.ini"
cd $build; npm run build          # robocopy exit 0-7 = success, NOT failure
```
`node_modules` copies fine, so no reinstall is needed. **On local disk the build needs no cache workaround at all** — it succeeds with the stock `next.config.js`, which confirms every one of these errors is a Drive artifact and not a code problem. Verify rendered output by grepping `$build\.next\server\app\*.html`. This is read-only w.r.t. the real repo, so it's safe to run any time.

**Do not** trust a build failure on the Drive mount until you've reproduced it on local disk. On 2026-08-16 a Drive-only failure looked exactly like a broken API route and cost real time.

## git is not on PATH — ⚠️ machine-specific, check before assuming

**This was true on the `BaoClan` machine.** There, use the GitHub Desktop bundled git: `C:\Users\BaoClan\AppData\Local\GitHubDesktop\app-<ver>\resources\app\git\cmd\git.exe` (the `app-<ver>` dir changes on updates — glob `…\GitHubDesktop\app-*\…\cmd\git.exe`).

**On the `micbo` machine (checked 2026-08-16) the full toolchain IS on PATH** — `git`, `node`, `npm`, `npx`, `python`. Don't assume tooling is missing; run a one-line probe first:
```powershell
foreach($c in 'node','npm','git','python','npx'){ "$c :: $((Get-Command $c -ErrorAction SilentlyContinue).Source)" }
```
Neither machine has a `.env.local`, so local Notion REST access is unavailable on both.

## Sub-agents (QA / Design / RBG) don't register — diagnosed + fixed 2026-08-16

**Symptom.** `sparkworks-program-qa`, `cairn-dev-qa`, `sparkworks-designer`, `cairn-legal-rbg` etc. are not in the available agent types and can't be spawned. Spawning by name returns:
`Agent type 'sparkworks-program-qa' not found. Available agents: claude, claude-code-guide, Explore, general-purpose, Plan, statusline-setup`

CLAUDE.md's interaction table tells the agent to call them, so the call just silently isn't possible — and Rule 12's QA gate can't be met the intended way.

**Root cause.** Claude Code discovers sub-agents from exactly two places: `<session root>/.claude/agents/` and `~/.claude/agents/`. Neither existed.
- The session root is usually **`Sparkworks Website`** (the parent), which has **no `.claude` at all**.
- The agent definitions live one level *below*, in **`sparkworks-site/.claude/agents/`** — never scanned.
- `C:\Users\<you>\.claude\` existed but had **no `agents/` subdirectory**.
- The canonical org library at **`g:\My Drive\Family Drive\.Claude\shared\agents\`** (13 files) is just a Drive folder — **not** a path Claude Code reads. CLAUDE.md's interaction table points there, which reads like a live wiring but isn't.

**Also confirmed: additional working directories do NOT contribute agents.** `BlockcodeTableTop/.claude/agents/` holds 6 agents and is an additional working dir for these sessions; none of them registered either. Don't expect `--add-dir` to solve this.

**The fix (applied 2026-08-16, one-time per machine).** Junction the user-level agents dir at the canonical Drive library — single source of truth, no copies, no drift, works in **every** session on the machine regardless of which folder is opened:
```powershell
New-Item -ItemType Junction -Path "$env:USERPROFILE\.claude\agents" `
         -Target "G:\My Drive\Family Drive\.Claude\shared\agents"
```
Use **Junction**, not SymbolicLink — a symlink needs admin ("Administrator privilege required"); a junction doesn't. (Note the earlier `.next` junction attempt failed only because the *link* was being created **on** the Drive FS; creating a link on `C:` that *points at* Drive works fine.)

**Gotchas:**
- **Requires a session restart** — agents are registered at session start and do NOT hot-load.
- **Per-machine.** The link lives on `C:`, so run it once on each machine, and only where Drive is mounted at `G:`.
- All 12 real definitions carry valid frontmatter and their `name:` matches their filename. The library's own `README.md` sits in that folder with no frontmatter — harmless (skipped), but it isn't an agent.
- The copies in `sparkworks-site/.claude/agents/` were byte-identical to the shared originals when checked. They're now redundant (project-level wins over user-level) and are a **drift risk** — but they're also the only fallback on a machine without the junction. If you keep them, re-verify them against the shared library periodically.

**Fallback if the agents still aren't available** (per CLAUDE.md Rule 12): spawn an independent `general-purpose` agent and brief it by pointing at the QA agent's own definition file plus the canonical brand docs to check against. That worked well on 2026-08-16 — it caught two Critical findings the producing agent had missed, both *outside* the diff.

## Commit-scope discipline (important)

The working tree carries **pre-existing uncommitted changes that aren't ours** — e.g. modified `CLAUDE.md` / `README.md`, and the 7 `docs/*.md` brand files were **deleted-but-not-committed** (intentional per "don't duplicate brand docs locally," but left dangling). So:
- Always `git add` **only the specific files you changed**. Never `git add -A`.
- Stray `desktop.ini` (Drive) files are untracked everywhere — don't commit them.
- **Gap caught 2026-06-03:** the FTC/Amazon affiliate disclosure in `Footer.jsx` had been added to the working tree but never committed → it wasn't live on the affiliate-bearing `/practice` page. Shipped in `d6bbf4d`. Lesson: a "modified" footer/component in `git status` may be undeployed compliance copy — check `git diff HEAD` before assuming it's noise.

## Vercel access = CLI auth on the machine (no stored token)

Per `integrations.md` there is no `VERCEL_TOKEN` anywhere — access is the `vercel` CLI logged in on Mike's machine (authed 2026-06-03 as `michaelbowers-4204`). `vercel` isn't globally installed; use `npx vercel …`. DNS for `sparkworks.kids` is hosted on Vercel and manageable via `npx vercel dns ls|add|rm sparkworks.kids` — this is how the ImprovMX MX/SPF records for `privacy@sparkworks.kids` were added.

## Image copyright metadata (CMI)

The 7 Spark of History poster JPGs in `public/sparks` carry embedded IPTC/XMP/EXIF rights metadata (RBG-approved; 17 U.S.C. §1202 copyright-management info). Tooling + scripts live at `%LOCALAPPDATA%\sw-exif-work` (exiftool-vendored). To re-embed/update: copy the repo JPGs there, run the `.mjs` script, copy back (avoids Drive-FS rename failures). Next.js's image optimizer strips metadata from the rendered `<img>`, but the raw downloadable file retains it — which is the point (the download is the copy at risk).

## Sub-agents are stateless across spawns

Each `Agent` call starts a **fresh** instance — there's no way to resume a specific prior sub-agent in this harness. If a sub-agent (e.g. `cairn-legal-rbg`) produces content you need, capture it in the **same turn**; a follow-up spawn won't remember it, and a fresh instance may (correctly) refuse to "reproduce as vetted" what it never wrote. (Lost an RBG `/legal` draft this way 2026-06-03; re-derived cleanly.)

## Callable sub-agents (as of 2026-06-03)

Deployed to this project's `.claude/agents/`: `cairn-legal-rbg` (RBG / legal), `sparkworks-designer`, `cairn-dev-qa`, `sparkworks-program-qa`, `sparkworks-program-creation`, `sparkworks-program-admin`. **No `cairn-architect` agent is deployed here** — canonical-doc/brand-architecture edits route through Mike or an async `[AR]` task on `Cairn – Ops`.
