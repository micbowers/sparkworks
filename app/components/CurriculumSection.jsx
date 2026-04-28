/**
 * One sprint section (4 of these on the program page).
 * Each renders a colored kicker, header, and two SessionRow children.
 */
export function CurriculumSection({ accent, kicker, title, sessions, badges }) {
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
          <div key={s.num} style={{ paddingTop: i === 0 ? 0 : 14, borderTop: i === 0 ? "none" : "1px solid var(--sw-bone)" }}>
            <div className="ts-label" style={{ fontSize: "0.8125rem", letterSpacing: 1.2, color: accentVar, marginBottom: 4 }}>
              Session {s.num} · {s.name}
            </div>
            <p className="ts-body" style={{ marginBottom: 4 }}>{s.skill}</p>
            <p className="ts-caption">Badge: {badges[i]}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
