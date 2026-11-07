"use client";

import * as React from "react";
import { whenActive } from "@/lib/gsap";

/**
 * Scroll-triggered reveal for every section below the hero.
 * Mount once on a page; it animates headings, eyebrows and grid cards as they enter the viewport.
 */
export function ScrollReveal() {
  React.useEffect(
    () =>
      whenActive(({ gsap }) => {
        const mm = gsap.matchMedia();
        mm.add("(prefers-reduced-motion: no-preference)", () => {
          const sections = gsap.utils.toArray<HTMLElement>("main section:not(.optik-hero)");

          sections.forEach((section) => {
            // Anything already on screen stays put, so nothing flashes when GSAP arrives.
            if (section.getBoundingClientRect().top < window.innerHeight * 0.78) return;

            const eyebrows = section.querySelectorAll(":scope .border-l-2");
            const headings = section.querySelectorAll("h2");
            const paras = section.querySelectorAll("h2 ~ p, .space-y-4 > p");
            const cards = section.querySelectorAll(".grid > *");

            const tl = gsap.timeline({
              scrollTrigger: { trigger: section, start: "top 78%", once: true },
              defaults: { ease: "power3.out" },
            });

            tl.from(eyebrows, { x: -24, autoAlpha: 0, duration: 0.6, stagger: 0.1, clearProps: "all" })
              .from(headings, { y: 40, autoAlpha: 0, duration: 0.9, stagger: 0.12, clearProps: "all" }, "-=0.35")
              .from(paras, { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.1, clearProps: "all" }, "-=0.5")
              .from(cards, { y: 50, autoAlpha: 0, duration: 0.8, stagger: 0.12, clearProps: "all" }, "-=0.4");
          });
        });
        return () => mm.revert();
      }),
    [],
  );

  return null;
}
