import Link from "next/link";
import { Wordmark } from "./Wordmark";

/**
 * Pattern A — Spark Blue hero header.
 * Per design rules: one 100% white element per dark surface, max.
 * If `showWordmark` is true, the wordmark is the 100% element and `title` drops to 85%.
 * If `showWordmark` is false, `title` is the 100% element.
 * `title` is optional — pages with only a wordmark + tagline can omit it.
 */
export function Hero({
  eyebrow,
  title,
  tagline,
  showWordmark = true,
  wordmarkSize = "md",
  tight = false,
  eyebrowSize,
  homeLink = false,
  children,
}) {
  const wordmarkMargin = tight ? 16 : wordmarkSize === "xl" ? 28 : 24;
  return (
    <header className={`sw-hero${tight ? " sw-hero-tight" : ""}`}>
      <div className="sw-page">
        {showWordmark && (
          <div style={{ marginBottom: wordmarkMargin }}>
            {/* On pages that drop SiteHeader, the hero wordmark is the only route home. */}
            {homeLink ? (
              <Link href="/" style={{ textDecoration: "none", lineHeight: 1 }} aria-label="Sparkworks home">
                <Wordmark size={wordmarkSize} onDark />
              </Link>
            ) : (
              <Wordmark size={wordmarkSize} onDark />
            )}
          </div>
        )}
        {/* eyebrowSize lets a page match the eyebrow to the tagline size while keeping the
            display typeface and letterspacing — see /signup. */}
        {eyebrow && (
          <div
            className="ts-eyebrow text-on-dark"
            style={{ marginBottom: 12, ...(eyebrowSize ? { fontSize: eyebrowSize } : null) }}
          >
            {eyebrow}
          </div>
        )}
        {title && (
          <h1
            className={`ts-h1 ${showWordmark ? "text-on-dark" : "text-on-dark-full"}`}
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
              maxWidth: 820,
              marginBottom: tagline ? 14 : 0,
            }}
          >
            {title}
          </h1>
        )}
        {tagline && (
          <p className="ts-quote text-on-dark" style={{ maxWidth: 720, fontSize: "1.1875rem" }}>
            {tagline}
          </p>
        )}
        {children}
      </div>
    </header>
  );
}
