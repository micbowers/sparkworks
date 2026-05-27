"use client";

import { useState, useEffect } from "react";

/**
 * Shopping-style card for /practice with on-demand detail.
 *
 * Always-visible: compact summary (cover, skill chips, title, 1-line highlight, primary CTA
 * if applicable). On click of the expand button the card grows in place to reveal full
 * description, Pro Tips, version pickers, session context, etc.
 *
 * `slug` is set as the article `id` so /practice#mastermind-code-breaker and similar email
 * deep-links still scroll to the right card. If the URL hash on mount matches the card's slug,
 * the card auto-expands — so email recap links land on the open detail, not a collapsed card.
 *
 * `expandLabel` / `collapseLabel` let each card use copy that fits its kind: endorsement
 * cards default to "Why we love this" / "Hide details", but Sparkworks-built cards may prefer
 * "What's inside", and multi-version cards may prefer "See both versions".
 */
export function ExpandableCard({
  slug,
  summary,
  detail,
  defaultOpen = false,
  expandLabel = "Why we love it",
  collapseLabel = "Hide details",
}) {
  const [open, setOpen] = useState(defaultOpen);

  // Open automatically if the URL hash matches this card's slug — so /practice#slug
  // deep-links (from email recaps, /program cross-links, etc.) land on the open card.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash.replace(/^#/, "");
    if (hash && hash === slug) {
      setOpen(true);
    }
  }, [slug]);

  const hasDetail = detail != null && detail !== false;
  return (
    <article
      id={slug}
      className="sw-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 14,
        padding: "20px 22px",
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
            padding: "4px 0",
            fontFamily: "var(--sw-display)",
            fontSize: "0.8125rem",
            fontWeight: 700,
            letterSpacing: "1.2px",
            textTransform: "uppercase",
            color: "var(--sw-steel)",
            cursor: "pointer",
            textDecoration: "underline",
            textUnderlineOffset: 4,
          }}
        >
          {open ? collapseLabel : expandLabel}
        </button>
      )}
      {hasDetail && open && (
        <div
          id={`${slug}-detail`}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 18,
            marginTop: 6,
            paddingTop: 18,
            borderTop: "1px solid var(--sw-bone)",
          }}
        >
          {detail}
        </div>
      )}
    </article>
  );
}
