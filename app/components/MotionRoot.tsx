"use client";

import { useEffect } from "react";

/** Reveal when element top is above this fraction of the viewport height */
const TRIGGER_Y_DESKTOP = 0.8;
const TRIGGER_Y_MOBILE = 0.78;

function shouldReveal(el: HTMLElement, triggerY: number) {
  const rect = el.getBoundingClientRect();
  const vh = window.innerHeight || document.documentElement.clientHeight;
  if (rect.height <= 0) return false;
  return rect.top < vh * triggerY && rect.bottom > 16;
}

function observeReveals() {
  const nodes = Array.from(
    document.querySelectorAll<HTMLElement>("[data-reveal]"),
  );
  if (!nodes.length) return () => {};

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) {
    nodes.forEach((node) => node.classList.add("is-inview"));
    return () => {};
  }

  const mobile = window.matchMedia("(max-width: 639px)").matches;
  const triggerY = mobile ? TRIGGER_Y_MOBILE : TRIGGER_Y_DESKTOP;
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
      if (shouldReveal(el, triggerY)) reveal(el);
    }
  };

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
  useEffect(() => {
    let cleanup = () => {};
    const id = window.requestAnimationFrame(() => {
      cleanup = observeReveals();
    });
    return () => {
      window.cancelAnimationFrame(id);
      cleanup();
    };
  }, []);

  return null;
}
