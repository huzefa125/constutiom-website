import * as React from "react";
import type { Metadata } from "next";
import { COMPANY_DATA } from "@/data/company";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, pageMetadata, personSchema } from "@/lib/seo";
import { AboutHero } from "@/components/sections/about/AboutHero";
import { AboutPhilosophy } from "@/components/sections/about/AboutPhilosophy";
import { AboutTeam } from "@/components/sections/about/AboutTeam";
import { AboutCta } from "@/components/sections/about/AboutCta";

export const metadata: Metadata = pageMetadata({
  title: "About Us: Affordable Home Builders in Nigeria",
  description:
    "Ipile Earth Synergy is an indigenous Nigerian construction company building affordable homes with Compressed Earth Brick. Meet our mission, values and leadership.",
  path: "/about",
  image: "/images/about/about-hero-ceb-villa.webp",
});

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-[#f7f7f7]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
          ...COMPANY_DATA.leadership.map(personSchema),
        ]}
      />
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
