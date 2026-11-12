import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";

export function AboutPhilosophy() {
  return (
    <section className="relative w-full bg-[#f7f7f7] pt-6 pb-20 sm:pb-28 lg:pb-36 px-5 sm:px-8 lg:px-12 overflow-hidden">
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
              Ipile Earth Synergy Construction Limited aims to provide suitable and{" "}
              <Link href="/affordable-housing-nigeria" className="text-[#800020] underline underline-offset-4">
                affordable homes
              </Link>{" "}
              in a sustainable environment, using{" "}
              <Link href="/compressed-earth-bricks" className="text-[#800020] underline underline-offset-4">
                locally available resources
              </Link>
              , for every class of society. We carry on construction and civil
              construction services of every description, including repair, maintenance
              and demolition of construction works.
            </p>

            {/* Authentic Stats Row */}
            <div className="flex items-start gap-7 sm:gap-10 pt-4 w-full border-t border-black/10">
              {/* Stat 1 */}
              <div className="flex flex-col gap-1.5">
                <span className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-black leading-none">
                  2017
                </span>
                <span className="font-[Urbanist] text-xs sm:text-sm font-medium text-black/75 max-w-[90px] leading-tight">
                  Year established
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col gap-1.5">
                <span className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-black leading-none">
                  04
                </span>
                <span className="font-[Urbanist] text-xs sm:text-sm font-medium text-black/75 max-w-[85px] leading-tight">
                  Core values
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col gap-1.5">
                <span className="font-heading text-3xl sm:text-4xl lg:text-[42px] font-bold text-black leading-none">
                  05
                </span>
                <span className="font-[Urbanist] text-xs sm:text-sm font-medium text-black/75 max-w-[95px] leading-tight">
                  Service lines
                </span>
              </div>
            </div>
          </div>

          {/* Center Column (4 cols): Signature CEB Modern Complex Architecture */}
          <div className="lg:col-span-4 w-full flex justify-center lg:justify-start">
            <div className="relative w-full aspect-[3/4] max-w-[420px]">
              <div className="relative h-full w-full rounded-[14px] overflow-hidden shadow-2xl bg-black/5">
                <Image
                  src="/images/about/about-philosophy-terrace.jpg"
                  alt="Completed Compressed Earth Brick terrace of homes with a paved interlocking road and landscaped kerbs"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* Right Column (3 cols): Mission, Vision, Core Values */}
          <div className="lg:col-span-3 flex w-full flex-col justify-end divide-y divide-black/10 lg:pl-4">
            {[
              { label: "Mission", text: COMPANY_DATA.mission },
              { label: "Vision", text: COMPANY_DATA.vision },
            ].map((item) => (
              <div key={item.label} className="py-5 first:pt-0">
                <h3 className="flex items-center gap-3 font-heading text-[30px] sm:text-[34px] font-bold uppercase leading-none text-[#800020]">
                  <span aria-hidden className="h-[3px] w-8 bg-[#800020]" />
                  {item.label}
                </h3>
                <p className="mt-3 font-[Urbanist] text-[17px] sm:text-[18px] font-medium leading-[150%] text-black/85">
                  {item.text}
                </p>
              </div>
            ))}
            <div className="pt-5">
              <h3 className="flex items-center gap-3 font-heading text-[30px] sm:text-[34px] font-bold uppercase leading-none text-[#800020]">
                <span aria-hidden className="h-[3px] w-8 bg-[#800020]" />
                Core Values
              </h3>
              <ul className="mt-3 flex flex-col gap-1.5 font-[Urbanist] text-[17px] sm:text-[18px] font-medium leading-[150%] text-black/85">
                {COMPANY_DATA.coreValues.map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
