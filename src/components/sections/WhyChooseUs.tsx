import * as React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Leaf, Compass } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function WhyChooseUs() {
  const strengths = [
    {
      icon: Award,
      title: "Strategic Military & Executive Discipline",
      description:
        "Under the chairmanship of Rear Admiral James Oladapo (Rtd) mni, our operations are driven by rigorous organizational discipline, transparent scheduling, and strategic foresight.",
    },
    {
      icon: ShieldCheck,
      title: "COREN & ISO 9001:2008 Registered Standards",
      description:
        "Every foundation, reinforced framework, and structural slab adheres strictly to Council for the Regulation of Engineering in Nigeria (COREN Reg. 42,512) and ISO quality assurance audits.",
    },
    {
      icon: Leaf,
      title: "Hydraform Eco-Block Innovation",
      description:
        "Certified by the Hydraform Academy (Boksburg, South Africa), our Compressed Earth Brick (CEB) system cuts cement dependency by up to 50% while lowering indoor ambient temperatures.",
    },
    {
      icon: Compass,
      title: "Proven Major Infrastructure Track Record",
      description:
        "From defense barracks for the Nigerian Navy in Abuja and Cross River to multi-story mission facilities and energy sector civil works, we deliver enduring durability.",
    },
  ];

  return (
    <section className="relative w-full bg-[#FAF9F6] py-24 lg:py-32 border-b border-[#E9E5DF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Minimal Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">
          {/* Left Column: Photography & Metric Overlay */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div
              className="relative aspect-[3/4] w-full overflow-hidden border border-[#E9E5DF] bg-[#F4F1EA] shadow-sm"
              style={{ position: "relative" }}
            >
              <Image
                src="/images/projects/rccg-mission-house.jpg"
                alt="Ipile Earth Synergy Structural Execution"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              {/* Stat Overlay Box */}
              <div className="absolute bottom-6 left-6 right-6 border border-[#E9E5DF] bg-[#FAF9F6]/95 backdrop-blur-md p-6">
                <div className="flex items-center gap-4">
                  <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-sm border border-[#FFD700] bg-[#7D001C] shadow-sm">
                    <Image
                      src="/logos/ipile-official-logo.svg"
                      alt="Ipile Earth Synergy Logo"
                      fill
                      unoptimized
                      className="object-cover object-center"
                    />
                  </div>
                  <div>
                    <span className="block font-serif text-base font-bold text-[#242424]">
                      Certified Quality Standards
                    </span>
                    <span className="text-xs text-[#777777]">
                      Abuja • Cross River • Lagos
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Typography & Verified Strengths */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 border-l-2 border-[#800020] pl-3">
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#800020]">
                  OUR COMMITMENT
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#242424] leading-[1.15]">
                The Standard Behind Every Structure.
              </h2>
              <p className="text-base text-[#666666] font-light leading-relaxed">
                We believe that genuine engineering excellence is not measured merely by appearances, but by the quiet certainty of structural resilience, environmental stewardship, and absolute fidelity to contractual timelines.
              </p>
            </div>

            {/* Strengths List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
              {strengths.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-7 w-7 items-center justify-center rounded-none border border-[#800020] bg-[#800020]/10 text-[#800020]">
                        <IconComponent className="h-4 w-4" />
                      </div>
                      <h3 className="font-serif text-base font-medium text-[#242424]">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed text-[#666666]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

