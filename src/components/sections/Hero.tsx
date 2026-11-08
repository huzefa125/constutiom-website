import * as React from "react";
import Link from "next/link";
import Image from "next/image";

const TITLE_LINES = [
  { text: "IPILE", className: "optik-title-ipile" },
  { text: "EARTH", className: "optik-title-earth" },
];

export function Hero() {
  return (
    <section className="optik-hero">
      <div className="optik-container">
        <div className="optik-hero-row">
          <div className="optik-hero-middle my-auto flex flex-col items-start gap-7">
            <h1 className="optik-hero-text hero-rise">
              Affordable homes and quality construction across Nigeria, built with Compressed Earth Brick to cost less.
            </h1>

            <div className="optik-hero-btn-wrap hero-rise" style={{ "--d": "0.5s" } as React.CSSProperties}>
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

          <div className="optik-hero-title-wrap pb-8 sm:pb-12 lg:pb-16">
            <div className="optik-hero-title" aria-hidden="true" style={{ perspective: 900 }}>
              {TITLE_LINES.map((word, w) => (
                <span key={word.text} className={word.className}>
                  {word.text.split("").map((ch, i) => (
                    <span
                      key={i}
                      className="inline-block overflow-visible hero-char"
                      style={{ "--i": w * 5 + i } as React.CSSProperties}
                    >
                      {ch}
                    </span>
                  ))}
                  {w === 0 ? "\u00A0" : null}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Image
        src="/images/hero/hero-villa.webp"
        alt="Modern home designed and built by Ipile Earth Synergy Construction Limited"
        width={1000}
        height={830}
        preload
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 66vw, 52vw"
        className="optik-hero-img hero-slide"
      />
    </section>
  );
}
