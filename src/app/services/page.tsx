import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";
import { Cta } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Services | Ipile Earth Synergy Construction Limited",
  description:
    "Construction, general contracting, affordable housing and civil works delivered with Compressed Earth Brick technology and COREN-certified engineering.",
};

export default function ServicesPage() {
  return (
    <div className="flex w-full flex-col bg-[#f7f7f7]">
      <section className="px-[10px] pb-[30px] pt-[130px] sm:px-5 lg:pb-[50px] lg:pt-[160px]">
        <div className="mx-auto w-full max-w-[1300px]">
          {/* Header */}
          <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col items-start gap-4">
              <div className="flex items-center gap-[6px]">
                <div className="h-2 w-2 rounded-full bg-black" />
                <div className="font-[Urbanist] text-sm font-semibold uppercase leading-[150%] tracking-[1.92px] text-black">
                  Our services
                </div>
              </div>
              <h1 className="font-serif max-w-[760px] text-[38px] font-semibold uppercase leading-[0.98] text-black sm:text-[56px] lg:text-[72px] xl:text-[88px]">
                Everything we <span className="text-[#800020]">build</span> and care for
              </h1>
            </div>
            <p className="max-w-[440px] font-[Urbanist] text-lg font-medium leading-[145%] text-black/70">
              From new homes and institutions to repair and renovation, one accountable team takes your project from
              first sketch to handover.
            </p>
          </div>

          {/* Service cards */}
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
            {SERVICES_DATA.map((service, index) => (
              <Link key={service.id} href={service.link} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#e9e9e9]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 640px"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-1.5 font-[Urbanist] text-xs font-bold uppercase tracking-[0.14em] text-[#800020]">
                    {service.eyebrow}
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute right-4 top-4 flex h-12 w-12 -rotate-45 items-center justify-center rounded-full bg-[#FFD700] text-[#800020] opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-4">
                    <h2 className="font-serif text-[24px] uppercase leading-[0.98] text-black transition-colors group-hover:text-[#800020] sm:text-[28px] lg:text-[32px]">
                      {service.title}
                    </h2>
                    <span className="font-serif text-[24px] leading-none text-black/25 lg:text-[28px]">
                      0{index + 1}
                    </span>
                  </div>
                  <span className="font-[Urbanist] text-sm font-semibold uppercase tracking-[0.14em] text-[#800020]">
                    {service.category}
                  </span>
                  <p className="max-w-[560px] font-[Urbanist] text-base font-medium leading-[145%] text-black/65">
                    {service.description}
                  </p>
                  <span className="mt-1 inline-flex w-fit items-center gap-2 border-b border-black pb-[2px] font-serif text-[16px] font-semibold uppercase leading-none transition-colors group-hover:border-[#800020] group-hover:text-[#800020]">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Cta />
    </div>
  );
}
