# SPARKWORKS MARKETING MATERIAL PRODUCTION GUIDELINES
*Lessons learned from WhatsApp teaser + 1-page parent PDF production, April 2026*

---

## GENERAL PRINCIPLES

### Design Standard
- Mike expects creative, visually compelling design — not "PowerPoint-like" layouts.
- The WhatsApp teaser (dark background, centered, generous breathing room) is the design reference point for the brand's visual feel.
- When in doubt, make text BIGGER. Mike consistently requests larger text.
- Always check the full rendered output at actual size before delivering — what looks fine in a code preview often has sizing/spacing issues in practice.

### Content Authority
- **Program Guide v5.1** is the sole authoritative source for program content. Do not use the old `Sparkworks_1_Page_Parent.docx` — it has conflicts with the guide.
- **Headline**: "An 8-session program teaching kids critical thinking — through games, not lectures." (Uses "critical thinking" NOT "solve hard problems" or "think through hard problems")
- **Phase names**: Ignite / Sharpen / Engage / Reinforce — no time labels in marketing materials.
- **Skills list**: Use accessible plain language from the guide's "How to Talk About What We Teach" section, not technical names (e.g., "Spotting patterns — and catching mistakes" not "Pattern Detection").

### Brand Audit Checklist (run before every delivery)
1. Verify ALL hex colors against SPARKWORKS_BRAND_REF.md (current palette: Steel Black, Spark Blue, Ember Orange, Spark Red, Live Teal, Spark Yellow, Perception Purple, Section Blue, Bone White, White)
2. Ember Orange used as brand accent + Section 3 only (wordmark accent, kickers, CTAs, "Decide Without All the Facts")
3. Section accents pair with their sprint correctly: Purple → See What Others Miss · Live Teal → Understand the System · Ember → Decide Without All the Facts · Section Blue → Think Beyond What You Control
4. Display font is Barlow Condensed (ExtraBold/Bold/SemiBold) — used for headings, kickers, labels, wordmark only. The SPARKWORKS wordmark is always ExtraBold (800).
5. Body font is Merriweather (Regular/Italic) — used for body text, descriptions, taglines
6. Body font is Regular or Italic only — NEVER Bold (use display font for bold weight)
7. Tracks listed separately (Ember grades 2-3 / Blaze grades 4-6), never undifferentiated
8. White at 100% reserved for the largest header on a dark surface only (one per surface). All other white text on dark is 85%. Muted text on dark is 60%.
9. Bone White is for accent surfaces only (callouts, table rows). Never the main background. Never a text color.
10. Spark Red is for capstones, alerts, and urgency only. Never confuse with Ember Orange.
11. For email-style text-heavy materials (parent recap emails, newsletters, long-form recaps), Lead style collapses into Body — use `.ts-body` for all paragraphs including the intro. Lead stays distinct for websites, worksheets, posters, and games.

---

## WHATSAPP TEASER JPG (PIL/Pillow)

### Specs
- 1080×1920 px, vertical, JPEG quality 95
- Steel Black (#1E2530) background
- Build script: `/home/claude/build_v7.py`

### Design Elements (historical — original WhatsApp teaser v7)
- Centered layout, single visual axis
- Dot · text · dot pattern for skills list (section-colored dots on both sides)
- Ember Orange accent bars as dividers (short centered lines, not full-width)
- Track labels in Arc Blue *(legacy — current spec uses Section Blue #2A85C2)*
- Details card in slightly-lighter-than-Steel dark surface (#232A35)
- Founding Sparks line in Spark Yellow
- CTA button in Live Teal with Steel Black text
- Footer: italic serif "School teaches content." + bold sans "We train how to think."
- AI quote callout: Ember Orange rounded rectangle, rotated -6°, positioned at (620, 1165), partially overlapping right edge of details card area

> **For new teaser builds:** apply the current 10-color palette from `SPARKWORKS_BRAND_REF.md` and the patterns from `SPARKWORKS_DESIGN_PATTERNS.md`. The teaser hero should follow Pattern A (Spark Blue background, white-at-100% wordmark or H1, Ember kicker).

### Production Notes
- PIL gives pixel-perfect control with no rendering engine issues
- Use Barlow Condensed Bold (700) for general heading/display text. The SPARKWORKS wordmark is always ExtraBold (800). Liberation Sans Bold is the available sandbox fallback.
- Use Merriweather Regular/Italic for body text (Liberation Serif is the available sandbox fallback)
- NEVER use bold weight on the body font — brand spec forbids it

---

## 1-PAGE PARENT PDF (HTML → wkhtmltopdf)

### Specs
- US Letter (8.5×11 in), single page
- Build file: `/home/claude/1pager_final.html`
- Render: `wkhtmltopdf --page-width 8.5in --page-height 11in --dpi 150 --zoom 1 --margin-top 0 --margin-bottom 0 --margin-left 0 --margin-right 0 --enable-local-file-access`

### CRITICAL: wkhtmltopdf Smart-Shrinking Fix
The unpatched Qt version of wkhtmltopdf (0.12.6) ignores `--disable-smart-shrinking`. This causes content to render at ~77% of page size, leaving huge margins.

**THE FIX**: Remove `@page` rules and `body { width; height; }` from CSS entirely. Let wkhtmltopdf control page size only via command-line flags. This eliminates the shrinking.

**If content still doesn't fill the page width**: The body width was not removed, or there's still a width constraint in CSS. Grep for `width:` in the CSS and remove any fixed dimensions.

### Layout Architecture
- Full-bleed design: header, details card, founding bar, CTA bar, and footer all go edge-to-edge (no side margins)
- Two-column middle section: left = curriculum cards, right = outcomes + phase card
- Columns use `display: table; table-layout: fixed` (wkhtmltopdf doesn't support CSS Grid)
- Ember Orange full-width divider between columns and bottom section

### Bottom Section Stack (all full-bleed)
1. Ember Orange divider line (3px)
2. Steel Black details card (TRACKS / LOGISTICS)
3. Steel Black founding bar (Spark Yellow "FOUNDING SPARKS" centered)
4. Live Teal CTA bar
5. Steel Black footer bar

### Alignment: Phase Card ↔ Last Curriculum Card
These two boxes must bottom-align. Since wkhtmltopdf doesn't support flexbox `flex-grow`, the only reliable method is manual bottom-padding on the phase card. Current value: `padding: 28px 22px 28px 22px` with `phase-row margin-bottom: 14px`. Adjust the phase card bottom padding if content changes shift the alignment.

### Teaser-Inspired Design Elements (applied)
- Dot · text · dot pattern on outcomes list (matches WhatsApp teaser skills section)
- Ember Orange dividers between sections
- Centered founding section with Spark Yellow on dark background
- Full-width CTA bar in Live Teal
- Bigger, bolder header with more breathing room

### Page Count Check
Always verify page count after rendering:
```python
from pypdf import PdfReader
print('Pages:', len(PdfReader('output.pdf').pages))
```
If 2 pages: reduce padding/margins. If content doesn't fill page: increase padding/font sizes.

### Gap Measurement
To check right/bottom gaps:
```python
from PIL import Image
img = Image.open('rasterized.jpg')
w, h = img.size
for x in range(w-1, 0, -1):
    col = [img.getpixel((x, y)) for y in range(0, h, 10)]
    nw = [p for p in col if p[0] < 250 or p[1] < 250 or p[2] < 250]
    if nw: print(f'Right gap: {w-x}px'); break
```

---

## FONT REFERENCE (Sandbox)

| Brand Font | Available Fallback | Notes |
|---|---|---|
| Barlow Condensed ExtraBold (800) | Liberation Sans Bold | The SPARKWORKS wordmark — always 800, every size |
| Barlow Condensed Bold (700) / SemiBold (600) | Liberation Sans Bold | All other headings, kickers, labels |
| Merriweather Regular | Liberation Serif Regular | Used for body text, descriptions |
| Merriweather Italic | Liberation Serif Italic | Used for taglines, closing quotes, muted text |
| Merriweather Bold | DO NOT USE | Brand spec says body font is Regular/Italic only |

> **Note:** Earlier materials referenced Instrument Serif as the body font. Merriweather replaced it as of April 2026. New builds use Merriweather; existing materials are not retroactively updated.

---

*Last updated: April 2026 — palette refresh, grades-not-ages, Merriweather body font, wordmark = ExtraBold (800), Section 2 renamed to Understand the System*
