"use client";

import * as React from "react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="optik-hero">
      <div className="optik-container">
        <div className="optik-hero-row">
          {/* Middle Group: Vertically centered in the space between navbar and bottom title */}
          <div className="my-auto flex flex-col items-start gap-7">
            <p className="optik-hero-text">
              From concept to completion, we specialize in blending creativity with functionality.
            </p>

            {/* Exact Optik Animated Rolling Button */}
            <div className="optik-hero-btn-wrap">
              <div className="optik-theme-button-wrap">
                <Link href="/#projects" className="optik-btn-link-wrap group">
                  <div className="optik-btn-text-wrap-02">
                    <div className="optik-btn-text-box">
                      <span className="optik-button-text">EXPLORE OUR WORK</span>
                      <span className="optik-button-text">EXPLORE OUR WORK</span>
                    </div>

                    {/* Circular Tan Badge with Black Arrow */}
                    <div className="w-7 h-7 rounded-full bg-[#FCC995] flex items-center justify-center shrink-0">
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

          {/* Bottom Title: Anchored firmly at the bottom with clean baseline margin */}
          <div className="optik-hero-title-wrap pb-1 sm:pb-2">
            <h1 className="optik-hero-title">
              <span className="text-[#000000]">IPILE </span>
              <span className="text-[#FCC995]">EARTH</span>
            </h1>
          </div>
        </div>
      </div>

      {/* Gemini 3D Villa Render with seamless blend */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/hero/gemini-villa-feathered.png"
        alt="Modern luxury two-story villa with warm timber louvers, floor-to-ceiling glass, and landscaped garden."
        className="optik-hero-img"
      />
    </section>
  );
}
