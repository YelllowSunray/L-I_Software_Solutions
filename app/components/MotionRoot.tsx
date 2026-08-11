"use client";

import { useEffect } from "react";
import { useStyle } from "./StyleProvider";
import type { StyleId } from "../lib/styles";

type RevealTiming = {
  /** Reveal when element top is above this fraction of the viewport height */
  triggerY: number;
};

function getTiming(style: StyleId): RevealTiming {
  const mobile = window.matchMedia("(max-width: 639px)").matches;
  if (style === "atelier") {
    return { triggerY: mobile ? 0.94 : 0.96 };
  }
  // Modern: wait until content sits higher in the frame (later on mobile)
  return { triggerY: mobile ? 0.78 : 0.74 };
}

function shouldReveal(el: HTMLElement, triggerY: number) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  if (rect.height <= 0) return false;
  return rect.top < vh * triggerY && rect.bottom > 16;
}

function observeReveals(style: StyleId) {
  const nodes = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]"),
  );
  if (!nodes.length) return () => {};

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    nodes.forEach((node) => node.classList.add("is-inview"));
    return () => {};
  }

  const timing = getTiming(style);
  const pending = new Set(
    nodes.filter((node) => !node.classList.contains("is-inview")),
  );

  const reveal = (el: HTMLElement) => {
    if (!pending.has(el)) return;
    el.classList.add("is-inview");
    pending.delete(el);
    observer.unobserve(el);
  };

  const flushVisible = () => {
    for (const el of [...pending]) {
      if (shouldReveal(el, timing.triggerY)) reveal(el);
    }
  };

  // Generous IO wake-up; actual timing is gated by shouldReveal + scroll
  const observer = new IntersectionObserver(
    () => flushVisible(),
    {
      threshold: [0, 0.05, 0.15, 0.3],
      rootMargin: "80px 0px 80px 0px",
    },
  );

  pending.forEach((node) => observer.observe(node));
  flushVisible();

  let ticking = false;
  const onScrollOrResize = () => {
    if (ticking || pending.size === 0) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      flushVisible();
    });
  };

  window.addEventListener("scroll", onScrollOrResize, { passive: true });
  window.addEventListener("resize", onScrollOrResize);
  window.visualViewport?.addEventListener("resize", onScrollOrResize);

  return () => {
    observer.disconnect();
    window.removeEventListener("scroll", onScrollOrResize);
    window.removeEventListener("resize", onScrollOrResize);
    window.visualViewport?.removeEventListener("resize", onScrollOrResize);
  };
}

export function MotionRoot() {
  const { style } = useStyle();

  useEffect(() => {
    let cleanup = () => {};
    const id = window.requestAnimationFrame(() => {
      cleanup = observeReveals(style);
    });
    return () => {
      window.cancelAnimationFrame(id);
      cleanup();
    };
  }, [style]);

  return null;
}
