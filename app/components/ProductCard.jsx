import { TrackedLink } from "./TrackedLink";
import { TrackedAnchor } from "./TrackedAnchor";

/**
 * Homepage product card — Program / Games / Materials.
 * `accent` maps to a section color for the kicker + top rule.
 * `cta`/`secondary` are action objects: { href, label, primary?, external?, event?, eventProps? }.
 * When `event` is set, the button fires that Vercel Analytics event on click (see TrackedLink /
 * TrackedAnchor). External (http/.html) hrefs render as anchors; internal hrefs as next/link.
 * `children` renders below the CTA row — used for inline subscribe forms.
 */
function CardButton({ action, primary }) {
  const className = `sw-btn${primary ? " sw-btn-primary" : ""}`;
  const { href, label, external, event, eventProps } = action;
  const isHttp = /^https?:\/\//.test(href);
  const isHtml = /\.html?($|[?#])/.test(href);
  if (external || isHttp) {
    return (
      <TrackedAnchor className={className} href={href} target="_blank" rel="noopener noreferrer" event={event} eventProps={eventProps}>
        {label}
      </TrackedAnchor>
    );
  }
  if (isHtml) {
    return (
      <TrackedAnchor className={className} href={href} event={event} eventProps={eventProps}>
        {label}
      </TrackedAnchor>
    );
  }
  return (
    <TrackedLink className={className} href={href} event={event} eventProps={eventProps}>
      {label}
    </TrackedLink>
  );
}

export function ProductCard({ accent = "blue", kicker, title, body, cta, secondary, children }) {
  const accentVar = `var(--sw-${accent})`;
  const hasButtons = cta || secondary;
  return (
    <article
      className="sw-card"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 14,
        borderTop: `4px solid ${accentVar}`,
      }}
    >
      <div className="ts-eyebrow" style={{ color: accentVar }}>{kicker}</div>
      <h3 className="ts-h2">{title}</h3>
      <div style={{ flex: 1 }}>
        <p className="ts-body">{body}</p>
      </div>
      {hasButtons && (
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 6 }}>
          {cta && <CardButton action={cta} primary={cta.primary} />}
          {secondary && <CardButton action={secondary} primary={false} />}
        </div>
      )}
      {children}
    </article>
  );
}
