import * as React from "react";
import Image from "next/image";

export function AboutPhilosophy() {
  return (
    <section className="relative w-full bg-[#F7C290] pt-6 pb-20 sm:pb-28 lg:pb-36 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-10 items-end">
          {/* Left Column (5 cols): Tag, Title, Intro Paragraph, Stats Row */}
          <div className="lg:col-span-5 flex flex-col items-start justify-end">
            {/* Tag / Category */}
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-[#800020]" />
              <span className="font-[Urbanist] text-xs sm:text-sm font-semibold uppercase tracking-[2px] text-[#800020]">
                Our Philosophy
              </span>
            </div>

            {/* Title */}
            <h2 className="font-heading font-bold uppercase text-[32px] sm:text-[42px] lg:text-[46px] xl:text-[52px] leading-[0.98] text-black tracking-tight max-w-[420px]">
              Design with Purpose, Build with Integrity
            </h2>

            {/* Authentic Company Intro text */}
            <p className="font-[Urbanist] text-[15px] sm:text-[17px] font-medium leading-[150%] text-black/80 max-w-[420px] mt-5 mb-8">
              At Ipile Earth Synergy, we believe civil engineering and architecture must
              serve communities, conserve resources, and endure for generations. Backed
              by military-grade execution and Hydraform interlocking brick innovation, our
              mission is to build resilient structures that remain structurally sound,
              thermally efficient, and aesthetically dignified.
            </p>

            {/* Authentic Stats Row */}
            <div className="flex items-start gap-7 sm:gap-10 pt-4 w-full border-t border-black/10">
              {/* Stat 1 */}
              <div className="flex flex-col gap-1.5">
                <span className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-black leading-none">
                  15+
                </span>
                <span className="font-[Urbanist] text-xs sm:text-sm font-medium text-black/75 max-w-[90px] leading-tight">
                  Years of leadership & engineering
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col gap-1.5">
                <span className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-black leading-none">
                  40%
                </span>
                <span className="font-[Urbanist] text-xs sm:text-sm font-medium text-black/75 max-w-[85px] leading-tight">
                  Thermal cooling efficiency
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col gap-1.5">
                <span className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-black leading-none">
                  50%
                </span>
                <span className="font-[Urbanist] text-xs sm:text-sm font-medium text-black/75 max-w-[95px] leading-tight">
                  Cement & carbon reduction
                </span>
              </div>
            </div>
          </div>

          {/* Center Column (4 cols): Signature CEB Modern Complex Architecture */}
          <div className="lg:col-span-4 w-full flex justify-center lg:justify-start">
            <div className="relative w-full aspect-[3/4] max-w-[420px] rounded-[12px] md:rounded-[14px] overflow-hidden shadow-xl bg-black/5 border border-black/10">
              <Image
                src="/images/about/about-philosophy-ceb-complex.webp"
                alt="Impressive modern multi-unit Compressed Earth Brick residential complex with white balconies, textured terracotta walls, and palm trees in twilight"
                fill
                sizes="(max-width: 1024px) 100vw, 420px"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
          </div>

          {/* Right Column (3 cols): Tactile CEB Craftsmanship Detail */}
          <div className="lg:col-span-3 flex flex-col items-start justify-end gap-6 w-full">
            <div className="relative w-full max-w-[210px] aspect-[4/3] rounded-[10px] md:rounded-[12px] overflow-hidden shadow-lg bg-black/5 border border-black/10">
              <Image
                src="/images/about/about-philosophy-ceb-craft.webp"
                alt="High-detail architectural macro close-up of Hydraform interlocking earth bricks meeting a crisp white window frame in warm sunlight"
                fill
                sizes="210px"
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>

            <p className="font-[Urbanist] text-[14px] sm:text-[15px] font-medium leading-[150%] text-black/80 max-w-[340px]">
              Under the executive direction of Rear Admiral James Oladapo (Rtd) mni, our
              operations are driven by military precision, COREN-certified engineering
              standards, and innovative interlocking brick technology. Every foundation we
              pour and every wall we build delivers structural longevity and environmental
              stewardship across Nigeria.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
