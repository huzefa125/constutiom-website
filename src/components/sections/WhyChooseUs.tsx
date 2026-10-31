import * as React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Leaf, Compass } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";

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
    <section className="relative w-full bg-[#f7f7f7] px-[10px] py-[30px] sm:px-5 lg:py-[50px]">
      <div className="relative mx-auto w-full max-w-[1300px] overflow-hidden rounded-[28px] bg-[#1a1718] px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-20">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-32 -top-32 aspect-square w-[420px] rounded-full border-[70px] border-[#800020]/30"
        />

        {/* Header */}
        <div className="relative mb-12 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-[6px]">
              <div className="h-2 w-2 rounded-full bg-[#FFD700]" />
              <div className="font-[Urbanist] text-sm font-semibold uppercase leading-[150%] tracking-[1.92px] text-[#FFD700]">
                Why choose us
              </div>
            </div>
            <h2 className="font-serif max-w-[700px] text-[30px] uppercase leading-[0.98] text-white sm:text-[36px] lg:text-[46px] xl:text-[56px]">
              The standard behind <span className="text-[#FFD700]">every</span> structure
            </h2>
          </div>
          <p className="max-w-[440px] font-[Urbanist] text-lg font-medium leading-[145%] text-white/70">
            Engineering excellence is measured by quiet certainty: structural resilience, environmental stewardship and
            absolute fidelity to contractual timelines.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative h-[380px] w-full overflow-hidden rounded-[20px] bg-black/30 sm:h-[460px] lg:h-full lg:min-h-[520px]">
              <Image
                src="/images/gallery/navy-barracks-atimbo/navy-barracks-atimbo-09.jpg"
                alt="Aerial view of completed Compressed Earth Brick bungalows"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-4 bottom-4 flex items-center gap-4 rounded-2xl bg-white/95 p-4 text-black shadow-lg backdrop-blur-md sm:inset-x-6 sm:bottom-6 sm:p-5">
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[#FFD700] bg-[#7D001C]">
                  <Image
                    src="/logos/ipile-official-logo.svg"
                    alt="Ipile Earth Synergy logo"
                    fill
                    unoptimized
                    className="object-cover object-center"
                  />
                </div>
                <div>
                  <span className="block font-serif text-lg font-semibold uppercase leading-none">
                    Certified quality standards
                  </span>
                  <span className="mt-1 block font-[Urbanist] text-sm font-medium text-black/60">
                    Abuja • Cross River • Lagos
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Strength list */}
          <div className="flex flex-col lg:col-span-7">
            {strengths.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="group grid grid-cols-[64px_1fr] gap-x-5 gap-y-2 sm:grid-cols-[80px_1fr] lg:grid-cols-[104px_1fr] border-b border-white/15 py-6 transition-all duration-500 first:pt-0 hover:pl-3 lg:gap-x-6"
                >
                  <span className="row-span-2 font-serif text-[40px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,215,0,0.7)] transition-colors duration-500 group-hover:text-[#FFD700] lg:text-[56px]">
                    0{idx + 1}
                  </span>
                  <div className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 shrink-0 text-[#FFD700]" />
                    <h3 className="font-serif text-[20px] uppercase leading-[1] text-white transition-colors duration-500 group-hover:text-[#FFD700] lg:text-[24px]">
                      {item.title}
                    </h3>
                  </div>
                  <p className="font-[Urbanist] text-base font-medium leading-[145%] text-white/60">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Count-up strip */}
        <div className="relative mt-12 grid grid-cols-1 gap-8 border-t border-white/15 pt-10 sm:grid-cols-3 lg:mt-16">
          {[
            { value: 4, suffix: "", label: "States of operation" },
            { value: 50, suffix: "%", label: "Less cement, up to" },
            { value: 40, suffix: "%", label: "Lower heat transfer" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-2">
              <CountUp
                value={stat.value}
                suffix={stat.suffix}
                className="font-serif text-[56px] font-semibold leading-none text-[#FFD700] lg:text-[72px]"
              />
              <span className="font-[Urbanist] text-base font-medium text-white/70">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
