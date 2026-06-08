"use client";

import { track } from "@vercel/analytics";

/**
 * A plain anchor (<a>) that fires a Vercel Analytics event on click. Use for
 * OUTBOUND/external links (game subdomains, affiliate, partner, static .html files)
 * where we want to attribute the click to a surface. For internal next/link nav use
 * TrackedLink instead.
 *
 * `event` is the analytics event name; `eventProps` its payload. target/rel and all
 * other anchor props pass through via `...rest` so callers control _blank/noopener.
 */
export function TrackedAnchor({ event, eventProps, onClick, children, ...rest }) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        if (event) track(event, eventProps);
        if (onClick) onClick(e);
      }}
    >
      {children}
    </a>
  );
}
