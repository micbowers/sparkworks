import Link from "next/link";
import { Wordmark } from "./Wordmark";

/**
 * Compact header used on inner pages (e.g. /program). Wordmark links to home.
 * Sits on top of the Spark Blue hero so it visually connects to the page band.
 * The homepage doesn't use this — its hero already serves as the wordmark anchor.
 */
export function SiteHeader() {
  return (
    <div
      style={{
        background: "var(--sw-spark)",
        padding: "16px 40px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="sw-page" style={{ display: "flex", alignItems: "center" }}>
        <Link href="/" style={{ textDecoration: "none", lineHeight: 1 }} aria-label="Sparkworks home">
          <Wordmark size="sm" onDark />
        </Link>
      </div>
    </div>
  );
}
