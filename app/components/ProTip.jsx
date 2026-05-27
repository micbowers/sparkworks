/**
 * Sparkworks Pro Tip — reusable callout for endorsement family-level tips.
 * Spec from SPARKWORKS_ENDORSEMENTS.md (PCr-owned pattern, established 2026-05-27 with the
 * Mastermind/Code Breaker entry): Ember Orange accent, lightbulb icon, slightly larger than body.
 *
 * Use at family-level only — not per-version. The body text usually generalizes to the whole game
 * family (e.g., "Mastermind-style games let you crank the difficulty without buying anything new"),
 * so the same Pro Tip applies to every version listed.
 *
 * Ember rationing note: this callout uses Ember as a "place." Track against the 2–3 per-page
 * budget when adding more Pro Tips or other Ember surfaces to the same page.
 */
export function ProTip({ title, children }) {
  return (
    <aside
      style={{
        background: "var(--sw-bone)",
        borderLeft: "4px solid var(--sw-ember)",
        borderRadius: "0 var(--sw-radius-md) var(--sw-radius-md) 0",
        padding: "20px 24px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span aria-hidden="true" style={{ fontSize: "1.5rem", lineHeight: 1 }}>
          💡
        </span>
        <div
          className="ts-eyebrow"
          style={{ color: "var(--sw-ember)", fontSize: "0.75rem", margin: 0 }}
        >
          Sparkworks Pro Tip
        </div>
      </div>
      {title && (
        <h4 className="ts-h2" style={{ fontSize: "1.125rem", margin: 0 }}>
          {title}
        </h4>
      )}
      <div
        style={{
          fontFamily: "var(--sw-body)",
          fontSize: "1rem",
          lineHeight: 1.65,
          color: "var(--sw-steel)",
        }}
      >
        {children}
      </div>
    </aside>
  );
}
