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

          {/* Consultation Button (Home page structure with peach color & rolling text animation) */}
          <div className="shrink-0">
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-4 bg-[#FCC995] hover:bg-[#FFD700] text-black rounded-[10px] sm:rounded-[12px] px-6 sm:px-7 py-3.5 sm:py-4 transition-all duration-300 shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(255,215,0,0.35)] hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-3.5 relative overflow-hidden">
                {/* Rolling Text Effect from Home Page */}
                <div className="flex flex-col h-[20px] overflow-hidden">
                  <span className="font-heading font-bold text-sm sm:text-[15px] tracking-[1.2px] uppercase text-black leading-[20px] transition-transform duration-300 group-hover:-translate-y-[20px]">
                    BOOK A CONSULTATION
                  </span>
                  <span className="font-heading font-bold text-sm sm:text-[15px] tracking-[1.2px] uppercase text-black leading-[20px] transition-transform duration-300 group-hover:-translate-y-[20px]">
                    BOOK A CONSULTATION
                  </span>
                </div>

                {/* Circular Arrow Badge */}
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black group-hover:bg-[#800020] transition-colors flex items-center justify-center shrink-0">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#FCC995"
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
    </section>
  );
}
