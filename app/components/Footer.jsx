import { Wordmark } from "./Wordmark";

/** Pattern C — Spark Blue footer mark with tagline. */
export function Footer() {
  return (
    <footer className="sw-foot">
      <div className="sw-page" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, width: "100%" }}>
        <Wordmark size="sm" onDark />
        <div className="sw-foot-tag">Think through anything.</div>
      </div>
    </footer>
  );
}
