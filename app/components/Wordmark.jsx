export function Wordmark({ size = "lg", onDark = false, className = "" }) {
  const fontSize =
    size === "xl" ? "clamp(2.25rem, 7vw, 4.5rem)"
    : size === "lg" ? "2rem"
    : size === "md" ? "1.375rem"
    : "14px";
  const letterSpacing =
    size === "xl" ? "6px"
    : size === "sm" ? "3px"
    : "4px";
  const aClass = onDark ? "text-on-dark-full" : "";
  return (
    <span
      className={className}
      style={{
        fontFamily: "var(--sw-display)",
        fontWeight: 800,
        fontSize,
        letterSpacing,
        lineHeight: 1,
      }}
    >
      <span className={aClass} style={onDark ? undefined : { color: "var(--sw-steel)" }}>
        SPARK
      </span>
      <span style={{ color: "var(--sw-ember)" }}>WORKS</span>
    </span>
  );
}
