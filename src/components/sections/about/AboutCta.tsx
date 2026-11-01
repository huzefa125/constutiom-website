import * as React from "react";
import Link from "next/link";

export function AboutCta() {
  return (
    <section className="relative w-full h-[620px] sm:h-[720px] lg:h-[782px] overflow-hidden flex flex-col justify-end">
      {/* 1. Fixed Parallax / Scroll Reveal Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat bg-fixed pointer-events-none"
        style={{
          backgroundImage: "url('/images/about/cta-parallax-bg.webp')",
        }}
      />

      {/* 2. Vignette & Bottom Contrast Gradient Overlay */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 pointer-events-none"
      />

      {/* 3. Bottom Row: Heading (Left) & Home-Style Button (Right) */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-5 sm:px-8 lg:px-12 pb-14 sm:pb-20 lg:pb-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 lg:gap-12">
          {/* Headline */}
          <h2 className="font-heading font-bold uppercase text-[36px] sm:text-[54px] md:text-[68px] lg:text-[76px] leading-[0.92] tracking-tight text-[#FCC995] max-w-[860px]">
            LET&apos;S BUILD SOMETHING
            <br />
            EXTRAORDINARY
          </h2>

          {/* Consultation Button (Exact Home Page Optik Button with Black Background & Peach Text/Badge) */}
          <div className="shrink-0">
            <div className="optik-theme-button-wrap">
              <Link href="/contact" className="optik-btn-link-wrap group">
                <div className="optik-btn-text-wrap-02">
                  <div className="optik-btn-text-box">
                    <span className="optik-button-text">BOOK A CONSULTATION</span>
                    <span className="optik-button-text">BOOK A CONSULTATION</span>
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
                      <line x1="5" y1="12" x2="19" y2="12" />
                      <polyline points="12 5 19 12 12 19" />
                    </svg>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
