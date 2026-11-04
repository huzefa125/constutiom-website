"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";

export function AboutHero() {
  const root = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!root.current) return;
    try {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.from(".about-title-line", {
          yPercent: 85,
          rotateX: -40,
          autoAlpha: 0,
          duration: 1.1,
          stagger: 0.15,
        })
          .from(
            ".about-desc",
            {
              y: 30,
              autoAlpha: 0,
              duration: 0.9,
            },
            "-=0.7",
          )
          .from(
            ".about-btn",
            {
              y: 20,
              scale: 0.95,
              autoAlpha: 0,
              duration: 0.8,
              ease: "back.out(1.5)",
            },
            "-=0.6",
          )
          .from(
            ".about-img-box",
            {
              x: 50,
              autoAlpha: 0,
              scale: 0.96,
              duration: 1.3,
              ease: "power3.out",
            },
            0.2,
          );
      }, root);

      return () => mm.revert();
    } catch {
      // Safe fallback if GSAP is unavailable during SSR / Fast Refresh
    }
  }, []);

  return (
    <section
      ref={root}
      className="relative w-full bg-[#F7C290] min-h-[92vh] flex flex-col justify-center pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-5 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1300px] w-full mx-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Authentic Heading, Description, CTA */}
          <div className="flex flex-col items-start justify-center">
            {/* Title: ABOUT OUR FIRM (Dual-color brand identity) */}
            <h1
              className="font-heading font-bold uppercase tracking-tight leading-[0.88] select-none text-[52px] sm:text-[72px] md:text-[92px] lg:text-[104px] xl:text-[120px]"
              style={{ perspective: "1000px" }}
            >
              <span className="block overflow-hidden pb-1">
                <span className="about-title-line block text-black">ABOUT</span>
              </span>
              <span className="block overflow-hidden pt-1">
                <span className="about-title-line block text-[#800020]">OUR FIRM</span>
              </span>
            </h1>

            {/* Authentic Company Description */}
            <p className="about-desc font-[Urbanist] text-[18px] sm:text-[20px] font-medium leading-[145%] text-black/80 max-w-[380px] sm:max-w-[420px] mt-7 sm:mt-9 mb-8 sm:mb-10">
              A modern construction company established in 2017, providing suitable and
              affordable homes in a sustainable environment using Compressed Earth Brick and
              locally available resources.
            </p>

            {/* CTA Button */}
            <div className="about-btn">
              <div className="optik-theme-button-wrap">
                <Link href="/projects" className="optik-btn-link-wrap group">
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

          {/* Right Column: Signature CEB Villa Architecture Card */}
          <div className="about-img-box w-full flex justify-center lg:justify-end">
            <div className="relative w-full aspect-[4/3] sm:aspect-[1.15/1] max-w-[580px] lg:max-w-[620px] rounded-[14px] md:rounded-[18px] overflow-hidden shadow-2xl bg-black/5 border border-black/10">
              <Image
                src="/images/about/about-hero-ceb-villa.webp"
                alt="Modern luxury villa built with exposed burnt-orange Compressed Earth Bricks, dark tile hip roof, white columns, and palm trees in Abuja under warm golden-hour light"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
