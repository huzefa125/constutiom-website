import * as React from "react";
import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutPhilosophy } from "@/components/sections/about/AboutPhilosophy";
import { AboutTeam } from "@/components/sections/about/AboutTeam";
import { AboutCta } from "@/components/sections/about/AboutCta";

export const metadata: Metadata = {
  title: "About Our Firm | Ipile Earth Synergy Construction Limited",
  description:
    "Ipile Earth Synergy Construction Limited, established in 2017, provides suitable and affordable homes in a sustainable environment using Compressed Earth Brick (CEB) and locally available resources.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#f7f7f7]">
      {/* 1. ABOUT HERO */}
      <AboutHero />

      {/* 2. OUR PHILOSOPHY SECTION */}
      <AboutPhilosophy />

      {/* 3. EXECUTIVE LEADERSHIP (REAL COMPANY PORTRAITS) */}
      <AboutTeam />

      {/* 4. SCROLL REVEAL CALL TO ACTION */}
      <AboutCta />
    </div>
  );
}
