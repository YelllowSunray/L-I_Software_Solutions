"use client";

import { useLayoutEffect } from "react";

/** Reveal when element top is above this fraction of the viewport height */
const TRIGGER_Y_DESKTOP = 0.85;
const TRIGGER_Y_MOBILE = 0.88;

function shouldReveal(el: HTMLElement, triggerY: number) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  if (rect.height <= 0) return false;
  return rect.top < vh * triggerY && rect.bottom > 0;
}

function observeReveals() {
  const nodes = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]"),
  );
  if (!nodes.length) {
    document.documentElement.classList.add("reveal-ready");
    return () => {
      document.documentElement.classList.remove("reveal-ready");
    };
  }

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    nodes.forEach((node) => node.classList.add("is-inview"));
    document.documentElement.classList.add("reveal-ready");
    return () => {
      document.documentElement.classList.remove("reveal-ready");
    };
  }

  const mobile = window.matchMedia("(max-width: 639px)").matches;
  const triggerY = mobile ? TRIGGER_Y_MOBILE : TRIGGER_Y_DESKTOP;
  const pending = new Set(
    nodes.filter((node) => !node.classList.contains("is-inview")),
  );

  const observer = new IntersectionObserver(
    () => flushVisible(),
    {
      threshold: [0, 0.05, 0.15, 0.3],
      rootMargin: "120px 0px 120px 0px",
    },
  );

  const reveal = (el: HTMLElement) => {
    if (!pending.has(el)) return;
    el.classList.add("is-inview");
    pending.delete(el);
    observer.unobserve(el);
  };

  const flushVisible = () => {
    for (const el of [...pending]) {
      if (shouldReveal(el, triggerY)) reveal(el);
    }
  };

  pending.forEach((node) => observer.observe(node));
  // Mark anything already on screen BEFORE we arm the hide styles
  flushVisible();
  document.documentElement.classList.add("reveal-ready");

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

  const onFonts = () => flushVisible();
  void document.fonts?.ready.then(onFonts);

  // Layout can settle after images/fonts — catch stragglers
  const t1 = window.setTimeout(flushVisible, 120);
  const t2 = window.setTimeout(flushVisible, 400);

  return () => {
    window.clearTimeout(t1);
    window.clearTimeout(t2);
    observer.disconnect();
    window.removeEventListener("scroll", onScrollOrResize);
    window.removeEventListener("resize", onScrollOrResize);
    window.visualViewport?.removeEventListener("resize", onScrollOrResize);
    document.documentElement.classList.remove("reveal-ready");
  };
}

export function MotionRoot() {
  useLayoutEffect(() => observeReveals(), []);

  return null;
}
