/**
 * One meta-area card (4 of these on the program page).
 * Renders a colored kicker, header, and its two topics.
 * No session numbers, no ordering, no badges — the program groups topics by
 * area, not by sequence.
 */
export function CurriculumSection({ accent, kicker, sessions }) {
  const accentVar = `var(--sw-${accent})`;
  return (
    <article
      className="sw-card"
      style={{ borderTop: `4px solid ${accentVar}`, display: "flex", flexDirection: "column", gap: 12 }}
    >
      {/* The old `title` prop was just the topic names joined with a middot — "Pattern Detection ·
          Elimination" — sitting directly above those same names as headings. Dropped: the kicker is
          the meaningful area name, and the topics announce themselves below. */}
      <h3 className="ts-h2" style={{ color: accentVar }}>{kicker}</h3>
      {/* Eureka lines removed from the page 2026-08-31 (Mike). The `eureka` field is still on each
          session in SECTIONS — kept as content, just not rendered here. */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {sessions.map((s) => (
          <div key={s.name}>
            <div
              className="ts-label"
              style={{ color: accentVar, marginBottom: 4, display: "flex", alignItems: "center", gap: 9 }}
            >
              {/* Right-pointing triangle in the section's own accent. Border trick rather than a
                  glyph so it takes the accent colour exactly and stays crisp at any size. */}
              <span
                aria-hidden="true"
                style={{
                  width: 0,
                  height: 0,
                  borderTop: "5px solid transparent",
                  borderBottom: "5px solid transparent",
                  borderLeft: `7px solid ${accentVar}`,
                  flexShrink: 0,
                }}
              />
              {s.name}
            </div>
            <p className="ts-body" style={{ marginBottom: 0 }}>{s.skill}</p>
          </div>
        ))}
      </div>
    </article>
  );
}
