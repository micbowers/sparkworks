/**
 * One meta-area card (4 of these on the program page).
 * Renders a colored kicker, header, and its two topics.
 * No session numbers, no ordering, no badges — the program groups topics by
 * area, not by sequence.
 */
export function CurriculumSection({ accent, kicker, title, sessions }) {
  const accentVar = `var(--sw-${accent})`;
  return (
    <article
      className="sw-card"
      style={{ borderTop: `4px solid ${accentVar}`, display: "flex", flexDirection: "column", gap: 14 }}
    >
      <div className="ts-eyebrow" style={{ color: accentVar }}>{kicker}</div>
      <h3 className="ts-h2">{title}</h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {sessions.map((s, i) => (
          <div key={s.name} style={{ paddingTop: i === 0 ? 0 : 14, borderTop: i === 0 ? "none" : "1px solid var(--sw-bone)" }}>
            <div className="ts-label" style={{ fontSize: "0.8125rem", letterSpacing: 1.2, color: accentVar, marginBottom: 4 }}>
              {s.name}
            </div>
            <p className="ts-body" style={{ marginBottom: s.eureka ? 8 : 0 }}>{s.skill}</p>
            {s.eureka && (
              <p className="ts-caption" style={{ fontStyle: "italic", marginBottom: 0, color: "var(--sw-steel)" }}>
                <span style={{ fontStyle: "normal", fontFamily: "var(--sw-display)", fontWeight: 700, letterSpacing: 0.5, color: accentVar }}>
                  Eureka —{" "}
                </span>
                {s.eureka}
              </p>
            )}
          </div>
        ))}
      </div>
    </article>
  );
}
