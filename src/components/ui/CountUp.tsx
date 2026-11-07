"use client";

import * as React from "react";
import { whenActive } from "@/lib/gsap";

interface CountUpProps {
  value: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/** Counts from 0 to `value` once the element scrolls into view. Renders the final value if motion is reduced. */
export function CountUp({ value, prefix = "", suffix = "", className }: CountUpProps) {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    return whenActive(({ gsap }) => {
      // Already on screen: keep the final number rather than jumping back to zero.
      if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const state = { n: 0 };
        el.textContent = `${prefix}0${suffix}`;
        gsap.to(state, {
          n: value,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 90%", once: true },
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(state.n)}${suffix}`;
          },
        });
      });
      return () => mm.revert();
    });
  }, [value, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
