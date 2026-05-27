/**
 * Amazon Associates buy button. Inline SVG mark + "Buy on Amazon" label.
 *
 * Style follows Amazon's standard affiliate button pattern: dark background, golden "a" smile mark,
 * white wordmark. Per Amazon Associates Operating Agreement: every affiliate link gets
 * rel="sponsored noopener noreferrer" + target="_blank"; the page footer carries the FTC
 * disclosure boilerplate; price/rating data shown alongside is dated and subject to change.
 */
export function AmazonButton({ href, label = "Buy on Amazon" }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="sponsored noopener noreferrer"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        background: "var(--sw-steel)",
        color: "var(--sw-white)",
        padding: "10px 20px",
        borderRadius: 6,
        fontFamily: "var(--sw-display)",
        fontSize: "0.875rem",
        fontWeight: 700,
        letterSpacing: "1.2px",
        textDecoration: "none",
        textTransform: "uppercase",
        lineHeight: 1,
      }}
    >
      <svg
        viewBox="0 0 36 24"
        width="28"
        height="20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        focusable="false"
        style={{ flexShrink: 0 }}
      >
        <text
          x="18"
          y="17"
          textAnchor="middle"
          fontFamily="Arial, Helvetica, sans-serif"
          fontWeight="900"
          fontSize="18"
          fill="#FF9900"
        >
          a
        </text>
        <path
          d="M5 19 Q18 26 31 19"
          stroke="#FF9900"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M27 16.5 L32 19 L27 21.5"
          stroke="#FF9900"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>{label}</span>
    </a>
  );
}
