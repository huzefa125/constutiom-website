"use client";

import * as React from "react";
import Link from "next/link";
import { gsap } from "gsap";

const TITLE_LINES = [
  { text: "IPILE", className: "optik-title-ipile" },
  { text: "EARTH", className: "optik-title-earth" },
];

export function Hero() {
  const root = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-img-anim", { x: 120, autoAlpha: 0, scale: 0.94, duration: 1.4, ease: "power3.out" }, 0)
        // 3D flip-in for each title letter
        .from(
          ".hero-char",
          {
            yPercent: 110,
            rotateX: -80,
            autoAlpha: 0,
            transformOrigin: "50% 100%",
            duration: 1,
            stagger: 0.06,
          },
          0.2,
        )
        .from(".hero-line", { y: 30, autoAlpha: 0, duration: 0.8, stagger: 0.12 }, 0.6)
        .from(".hero-btn", { y: 24, scale: 0.9, autoAlpha: 0, duration: 0.8, ease: "back.out(1.6)" }, 1);
    }, root);

    return () => mm.revert();
  }, []);

  return (
    <section className="optik-hero" ref={root}>
      <div className="optik-container">
        <div className="optik-hero-row">
          <div className="optik-hero-middle my-auto flex flex-col items-start gap-7">
            <p className="optik-hero-text" aria-label="From concept to completion, we specialize in blending creativity with functionality.">
              {["From concept to", "completion, we specialize", "in blending creativity with", "functionality."].map((line) => (
                <span key={line} className="hero-line block" aria-hidden="true">
                  {line}
                </span>
              ))}
            </p>

            <div className="optik-hero-btn-wrap hero-btn">
              <div className="optik-theme-button-wrap">
                <Link href="/#projects" className="optik-btn-link-wrap group">
                  <div className="optik-btn-text-wrap-02">
                    <div className="optik-btn-text-box">
                      <span className="optik-button-text">EXPLORE OUR WORK</span>
                      <span className="optik-button-text">EXPLORE OUR WORK</span>
                    </div>

                    <div className="w-7 h-7 rounded-full bg-[#FCC995] group-hover:bg-[#FFD700] transition-colors flex items-center justify-center shrink-0">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="optik-hero-title-wrap pb-8 sm:pb-12 lg:pb-16">
            <h1 className="optik-hero-title" aria-label="Ipile Earth Synergy Construction Limited: affordable homes and building construction in Nigeria" style={{ perspective: 900 }}>
              {TITLE_LINES.map((word, w) => (
                <span key={word.text} className={word.className} aria-hidden="true">
                  {word.text.split("").map((ch, i) => (
                    <span key={i} className="inline-block overflow-visible hero-char">
                      {ch}
                    </span>
                  ))}
                  {w === 0 ? "\u00A0" : null}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>

      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero/gemini-villa-feathered.png"
        alt="Modern home designed and built by Ipile Earth Synergy Construction Limited"
        className="optik-hero-img hero-img-anim"
      />
    </section>
  );
}
