import { Wordmark } from "./Wordmark";

const YEAR = new Date().getFullYear();

/** Pattern C — Spark Blue footer mark with tagline + legal line. */
export function Footer() {
  return (
    <footer className="sw-foot" style={{ flexDirection: "column", alignItems: "stretch", gap: 12, paddingTop: 18, paddingBottom: 14 }}>
      <div
        className="sw-page"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12,
          width: "100%",
        }}
      >
        <Wordmark size="sm" onDark />
        <div className="sw-foot-tag">Think through anything.</div>
      </div>
      <div
        className="sw-page"
        style={{
          fontFamily: "var(--sw-body)",
          fontSize: 11,
          color: "var(--sw-text-on-dark-muted)",
          width: "100%",
          textAlign: "center",
        }}
      >
        © {YEAR} Cairn Partners, LLC · Sparkworks is a trademark of Cairn Partners, LLC.
      </div>
    </footer>
  );
}
