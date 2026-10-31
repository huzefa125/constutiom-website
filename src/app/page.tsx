import * as React from "react";
import { Hero } from "@/components/sections/Hero";
import { Introduction } from "@/components/sections/Introduction";
import { Services } from "@/components/sections/Services";
import { Projects } from "@/components/sections/Projects";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Cta } from "@/components/sections/Cta";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* SECTION 1: HERO */}
      <Hero />

      {/* SECTION 2: COMPANY INTRODUCTION */}
      <Introduction />

      {/* SECTION 3: SERVICES */}
      <Services />

      {/* SECTION 4: FEATURED PROJECTS */}
      <Projects />

      {/* SECTION 5: WHY CHOOSE US */}
      <WhyChooseUs />

      {/* SECTION 6: CALL TO ACTION */}
      <Cta />
    </div>
  );
}

