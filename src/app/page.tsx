import * as React from "react";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { Showcase } from "@/components/sections/Showcase";
import { Cta } from "@/components/sections/Cta";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export const metadata: Metadata = pageMetadata({
  title: "Affordable Homes & Construction Company in Nigeria",
  description:
    "Ipile Earth Synergy builds suitable, affordable homes in Nigeria with Compressed Earth Brick (CEB). Construction, building maintenance, design and property management. Call +234 812 686 8754.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <ScrollReveal />
      <Hero />

      {/* SECTION 2: COMPANY INTRODUCTION */}
      <Introduction />

      {/* SECTION 3: SERVICES */}
      <Services />

      {/* SECTION 4: SHOWCASE */}
      <Showcase />

      {/* SECTION 5: FEATURED PROJECTS */}
      <Projects />

      {/* SECTION 6: CALL TO ACTION */}
      <Cta />
    </div>
  );
}

