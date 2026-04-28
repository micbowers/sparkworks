import Link from "next/link";

/**
 * Homepage product card — Program / Games / Materials.
 * `accent` maps to a section color for the kicker + top rule.
 * `cta` is a single primary action; if href is external, opens in same tab.
 * `children` renders below the CTA row — used for inline subscribe forms.
 */
export function ProductCard({ accent = "blue", kicker, title, body, cta, secondary, children }) {
  const accentVar = `var(--sw-${accent})`;
  const hasButtons = cta || secondary;
  return (
    <article
      className="sw-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 14,
        borderTop: `4px solid ${accentVar}`,
      }}
    >
      <div className="ts-eyebrow" style={{ color: accentVar }}>{kicker}</div>
      <h3 className="ts-h2">{title}</h3>
      <div style={{ flex: 1 }}>
        <p className="ts-body">{body}</p>
      </div>
      {hasButtons && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 6 }}>
          {cta && (
            cta.external ? (
              <a className={`sw-btn ${cta.primary ? "sw-btn-primary" : ""}`} href={cta.href} target="_blank" rel="noopener noreferrer">
                {cta.label}
              </a>
            ) : (
              <Link className={`sw-btn ${cta.primary ? "sw-btn-primary" : ""}`} href={cta.href}>
                {cta.label}
              </Link>
            )
          )}
          {secondary && (
            secondary.external || /\.html?$/.test(secondary.href) ? (
              <a className="sw-btn sw-btn-subtle" href={secondary.href}>
                {secondary.label}
              </a>
            ) : (
              <Link className="sw-btn sw-btn-subtle" href={secondary.href}>
                {secondary.label}
              </Link>
            )
          )}
        </div>
      )}
      {children}
    </article>
  );
}
