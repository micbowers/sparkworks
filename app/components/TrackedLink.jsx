"use client";

import Link from "next/link";
import { track } from "@vercel/analytics";

/**
 * A next/link that fires a Vercel Analytics event on click. Use for internal
 * funnel links (e.g. program → /practice) where we want to attribute the click
 * to a surface. `event` is the analytics event name; `eventProps` its payload.
 * All other props (className, style, children, href) pass through to Link.
 */
export function TrackedLink({ event, eventProps, onClick, children, ...rest }) {
  return (
    <Link
      {...rest}
      onClick={(e) => {
        if (event) track(event, eventProps);
        if (onClick) onClick(e);
      }}
    >
      {children}
    </Link>
  );
}
