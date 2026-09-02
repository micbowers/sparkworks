"use client";

// Parent-quote carousel. Three cards visible on desktop, two on tablet, one on phone, and it wraps
// — next from the last page returns to the first.
//
// Built on native scroll-snap rather than a transform slider: CSS decides how many cards fit, so
// "3 at a time" is one flex-basis rather than a JS breakpoint, and the track stays swipeable on
// touch and scrollable by keyboard for free.
//
// Page count is derived from the measured card width, NOT from scrollWidth/clientWidth — that ratio
// counts the inter-card gaps and rounds up to a phantom extra page. Measuring the stride and doing
// ceil(quotes / perPage) gives the true number and stays correct if quotes are added or removed.

import { useCallback, useEffect, useRef, useState } from "react";

export function QuoteCarousel({ quotes, attribution = "Founding Sparks parent", featuredIndex = -1 }) {
  const trackRef = useRef(null);
  const [page, setPage] = useState(0);
  const [pages, setPages] = useState(1);

  const metrics = useCallback(() => {
    const el = trackRef.current;
    const first = el?.firstElementChild;
    if (!el || !first) return null;
    const gap = parseFloat(getComputedStyle(el).columnGap) || 0;
    const stride = first.getBoundingClientRect().width + gap;
    if (!stride) return null;
    const perPage = Math.max(1, Math.round((el.clientWidth + gap) / stride));
    const total = Math.max(1, Math.ceil(quotes.length / perPage));
    return { el, stride, perPage, total, pageW: stride * perPage, max: el.scrollWidth - el.clientWidth };
  }, [quotes.length]);

  const measure = useCallback(() => {
    const m = metrics();
    if (!m) return;
    setPages(m.total);
    // A final partial page can't scroll to its full offset, so treat "at the end" as the last page
    // rather than letting the rounding land short.
    const atEnd = m.el.scrollLeft >= m.max - 2;
    setPage(atEnd ? m.total - 1 : Math.min(m.total - 1, Math.round(m.el.scrollLeft / m.pageW)));
  }, [metrics]);

  useEffect(() => {
    measure();
    const el = trackRef.current;
    if (!el) return undefined;
    el.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      el.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const goTo = useCallback(
    (i) => {
      const m = metrics();
      if (!m) return;
      const target = Math.min(i * m.pageW, m.max);
      m.el.scrollTo({ left: Math.max(0, target), behavior: "smooth" });
    },
    [metrics]
  );

  // Wraps in both directions.
  const go = (dir) => goTo((page + dir + pages) % pages);

  return (
    <div className="sw-carousel" /* container needs no styling; class kept as a hook */>
      <div className="sw-carousel-row">
        <button
          type="button"
          className="sw-carousel-btn"
          onClick={() => go(-1)}
          aria-label="Previous quotes"
        >
          &larr;
        </button>

        <div
          className="sw-carousel-track"
          ref={trackRef}
          role="region"
          aria-label="What families said"
          tabIndex={0}
        >
          {quotes.map((q, i) => (
            <div className="sw-carousel-item" key={i}>
              <figure className={`sw-quote${i === featuredIndex ? " sw-quote-lg" : ""}`}>
                <blockquote className="sw-quote-text">{q}</blockquote>
                <figcaption className="sw-quote-who">{attribution}</figcaption>
              </figure>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="sw-carousel-btn"
          onClick={() => go(1)}
          aria-label="More quotes"
        >
          &rarr;
        </button>
      </div>

      <div className="sw-carousel-dots">
        {Array.from({ length: pages }).map((_, i) => (
          <button
            type="button"
            key={i}
            className={`sw-carousel-dot${i === page ? " is-active" : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to quotes, page ${i + 1} of ${pages}`}
            aria-current={i === page}
          />
        ))}
      </div>
    </div>
  );
}
