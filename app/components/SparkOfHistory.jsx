import Image from "next/image";

/**
 * One Spark of History card.
 * Shows the poster preview, the figure's name, the session/skill it's tied to,
 * and a short blurb. Click anywhere on the poster opens the full 24x36 PDF in
 * a new tab. The download button does the same — explicit affordance for parents.
 */
export function SparkOfHistory({ name, sessionLabel, skill, blurb, image, pdf, accent = "purple" }) {
  const accentVar = `var(--sw-${accent})`;
  return (
    <article
      className="sw-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 14,
        borderTop: `4px solid ${accentVar}`,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <a
        href={pdf}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open the ${name} poster as a full-size PDF`}
        style={{
          display: "block",
          background: "var(--sw-bone)",
          lineHeight: 0,
        }}
      >
        <Image
          src={image}
          alt={`${name} — Sparks of History poster preview`}
          width={800}
          height={1200}
          sizes="(max-width: 760px) 92vw, 360px"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </a>
      <div style={{ padding: "0 28px 24px", display: "flex", flexDirection: "column", gap: 8 }}>
        <div className="ts-eyebrow" style={{ color: accentVar }}>
          {sessionLabel}
        </div>
        <h3 className="ts-h2" style={{ marginBottom: 2 }}>{name}</h3>
        <p className="ts-caption" style={{ color: "var(--sw-steel)", marginBottom: 4 }}>
          <strong>{skill}</strong>
        </p>
        <p className="ts-body">{blurb}</p>
        <a
          href={pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="sw-btn sw-btn-subtle"
          style={{ alignSelf: "flex-start", marginTop: 4 }}
        >
          Download poster (PDF) →
        </a>
      </div>
    </article>
  );
}
