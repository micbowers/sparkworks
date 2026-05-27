"use client";

import { useState, useEffect } from "react";

/**
 * Entry card for /practice with on-demand detail.
 *
 * Layout slots (top to bottom):
 *  - `summary` — content always visible above the expand affordance (tags, title, highlight)
 *  - the expand button (prominent — this is the editorial differentiation)
 *  - `detail` — content revealed when expanded
 *  - `footer` — content always visible below the expand affordance (products, CTAs)
 *
 * The expand button sits at the TOP of the card body (Mike 2026-05-27: "this is our
 * differentiation"), so when a reader expands, the editorial detail appears right where the
 * button is — directly under the title, above the products. If `detail` is null, no button
 * renders (the entry has nothing additional to reveal beyond its summary + footer).
 *
 * `slug` is set as the article `id` so /practice#mastermind-code-breaker email deep-links
 * still scroll to the right card; the card auto-expands when the URL hash matches its slug.
 *
 * `expandLabel` / `collapseLabel` let each entry use copy that fits its kind: endorsement
 * cards default to "Why we love it" / "Hide details". Multi-product entries should pass
 * "Why we love them"; Sparkworks-built cards may prefer "What's inside".
 */
export function ExpandableCard({
  slug,
  summary,
  detail,
  footer,
  defaultOpen = false,
  expandLabel = "Why we love it",
  collapseLabel = "Hide details",
}) {
  const [open, setOpen] = useState(defaultOpen);
  const hasDetail = detail != null && detail !== false;

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (hash && hash === slug) {
      setOpen(true);
    }
  }, [slug]);

  return (
    <article
      id={slug}
      className="sw-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 16,
        padding: "24px 26px",
        scrollMarginTop: 24,
      }}
    >
      {summary}
      {hasDetail && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={`${slug}-detail`}
          style={{
            alignSelf: "flex-start",
            background: "none",
            border: "none",
            padding: "6px 0",
            fontFamily: "var(--sw-display)",
            fontSize: "1.0625rem",
            fontWeight: 700,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "var(--sw-steel)",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span style={{ textDecoration: "underline", textUnderlineOffset: 4 }}>
            {open ? collapseLabel : expandLabel}
          </span>
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s",
              fontSize: "0.875rem",
            }}
          >
            ↓
          </span>
        </button>
      )}
      {hasDetail && open && (
        <div
          id={`${slug}-detail`}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            paddingTop: 6,
            paddingBottom: 6,
          }}
        >
          {detail}
        </div>
      )}
      {footer}
    </article>
  );
}
