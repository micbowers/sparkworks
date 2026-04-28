import { Wordmark } from "./Wordmark";

/**
 * Pattern A — Spark Blue hero header.
 * Per design rules: one 100% white element per dark surface, max.
 * If `showWordmark` is true, the wordmark is the 100% element and `title` drops to 85%.
 * If `showWordmark` is false, `title` is the 100% element.
 */
export function Hero({ eyebrow, title, tagline, showWordmark = true, wordmarkSize = "md", children }) {
  const wordmarkMargin = wordmarkSize === "xl" ? 32 : 24;
  return (
    <header className="sw-hero">
      <div className="sw-page">
        {showWordmark && (
          <div style={{ marginBottom: wordmarkMargin }}>
            <Wordmark size={wordmarkSize} onDark />
          </div>
        )}
        {eyebrow && (
          <div
            className="ts-eyebrow"
            style={{ color: "var(--sw-ember)", marginBottom: 12 }}
          >
            {eyebrow}
          </div>
        )}
        <h1
          className={`ts-h1 ${showWordmark ? "text-on-dark" : "text-on-dark-full"}`}
          style={{
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
            maxWidth: 820,
            marginBottom: tagline ? 18 : 0,
          }}
        >
          {title}
        </h1>
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
