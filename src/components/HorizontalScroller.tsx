import React, { useEffect, useRef, useState } from "react";

type HorizontalScrollerProps = {
  children: React.ReactNode;
  className?: string;
};

const EPS = 1; // tolerance for fractional pixels

const HorizontalScroller: React.FC<HorizontalScrollerProps> = ({
  children,
  className,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const updateState = () => {
    const el = trackRef.current;
    if (!el) return;

    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const overflow = maxScroll > EPS;

    // where are we now?
    const x = el.scrollLeft;

    // enable/disable based on overflow + position
    setCanLeft(overflow && x > EPS);
    setCanRight(overflow && x < maxScroll - EPS);
  };

  // Step = first card width + gap
  const getStep = () => {
    const el = trackRef.current;
    if (!el) return 0;
    const firstCard = el.firstElementChild as HTMLElement | null;
    if (!firstCard) return 0;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(el).gap || "0") || 0;
    return cardWidth + gap;
  };

  // Temporarily disable scroll-snap so we don't get bounced back by snapping
  const withSnapDisabled = (el: HTMLElement, fn: () => void) => {
    const prev = el.style.scrollSnapType;
    el.style.scrollSnapType = "none";
    try {
      fn();
    } finally {
      // restore after the animation frame so layout settles
      requestAnimationFrame(() => {
        el.style.scrollSnapType = prev || "";
      });
    }
  };

  // Always move by one step, clamped to [0, maxScroll]
  const scrollByOneCard = (dir: number) => {
    if (isAnimating) return;

    const el = trackRef.current;
    if (!el) return;

    const step = getStep();
    if (!step) return;

    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    const current = el.scrollLeft;

    let target;
    if (dir > 0) {
      target = Math.min(current + step, maxScroll);
    } else {
      target = Math.max(current - step, 0);
    }

    // If target == current (already at edge), do nothing and ensure state is correct
    if (Math.abs(target - current) < EPS) {
      setIsAnimating(false);
      updateState();
      return;
    }

    setIsAnimating(true);
    withSnapDisabled(el, () => {
      el.scrollTo({ left: target, behavior: "smooth" });
    });
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // initial compute
    updateState();

    const onScroll = () => updateState();
    el.addEventListener("scroll", onScroll, { passive: true });

    // unlock after smooth scroll finishes
    const onScrollEnd = () => {
      setIsAnimating(false);
      updateState();
    };
    el.addEventListener("scrollend" as any, onScrollEnd);

    // fallback unlock in case scrollend doesn't fire
    let fallbackTimer: number | undefined;
    const unlockFallback = () => {
      window.clearTimeout(fallbackTimer);
      fallbackTimer = window.setTimeout(() => {
        setIsAnimating(false);
        updateState();
      }, 600);
    };
    el.addEventListener("scroll", unlockFallback, { passive: true });

    const ro = new ResizeObserver(updateState);
    ro.observe(el);

    // also handle window resize (fonts/images can change widths)
    window.addEventListener("resize", updateState);

    return () => {
      el.removeEventListener("scroll", onScroll);
      el.removeEventListener("scrollend" as any, onScrollEnd);
      el.removeEventListener("scroll", unlockFallback);
      ro.disconnect();
      window.removeEventListener("resize", updateState);
      if (fallbackTimer) window.clearTimeout(fallbackTimer);
    };
  }, []);

  // Optional desktop nicety: vertical wheel -> horizontal
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollLeft += e.deltaY;
        e.preventDefault();
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <div
      className={`hscroller ${className ?? ""}`}
      aria-label="horizontal card scroller"
    >
      <button
        type="button"
        className="hscroller-arrow left"
        onClick={() => scrollByOneCard(-1)}
        disabled={!canLeft || isAnimating}
        aria-label="Scroll left"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <div className="hscroller-track" ref={trackRef}>
        {children}
      </div>

      <button
        type="button"
        className="hscroller-arrow right"
        onClick={() => scrollByOneCard(1)}
        disabled={!canRight || isAnimating}
        aria-label="Scroll right"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>
    </div>
  );
};

export default HorizontalScroller;
