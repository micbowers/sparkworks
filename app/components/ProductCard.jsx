import Link from "next/link";

/**
 * Homepage product card — Program / Games / Materials.
 * `accent` maps to a section color for the kicker + bottom rule.
 * `cta` is a single primary action; if href is external, opens in same tab.
 * If `comingSoon` is true, the CTA renders as outline + "Notify me" framing.
 */
export function ProductCard({ accent = "blue", kicker, title, body, cta, secondary }) {
  const accentVar = `var(--sw-${accent})`;
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
    </article>
  );
}
