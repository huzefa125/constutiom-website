import type { Metadata } from "next";
import { SERVICES_DATA } from "@/data/services";
import { Cta } from "@/components/sections/Cta";
import { ServicesIndex } from "@/components/sections/services/ServicesIndex";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Construction, Building Maintenance & Property Management Services in Nigeria",
  description:
    "Five service lines from one team: construction, building maintenance, structural design and development, property and facility management, and general contracts and procurement.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="flex w-full flex-col bg-[#f7f7f7]">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />

      <section className="w-full bg-[#F7C290] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24 lg:pt-48">
        <div className="mx-auto w-full max-w-[1300px]">
          <div className="flex items-center gap-[6px]">
            <div className="h-2 w-2 rounded-full bg-black" />
            <span className="font-[Urbanist] text-sm font-semibold uppercase tracking-[1.92px] text-black">
              What we do
            </span>
          </div>
          <h1 className="mt-6 font-heading text-[52px] font-bold uppercase leading-[0.88] tracking-tight text-black sm:text-[84px] md:text-[110px] lg:text-[140px]">
            Our <span className="text-[#800020]">services</span>
          </h1>
          <div className="mt-10 flex flex-col gap-8 border-t border-black/20 pt-8 lg:flex-row lg:items-start lg:justify-between">
            <p className="max-w-[520px] font-[Urbanist] text-lg font-medium leading-[150%] text-black/80 sm:text-xl">
              From new homes and institutions to repair and renovation, one accountable team takes your project from
              first sketch to handover.
            </p>
            <dl className="flex gap-10 sm:gap-14">
              {[
                ["05", "Service lines"],
                ["2017", "Established"],
                ["CEB", "Earth brick builds"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-serif text-[34px] leading-none text-[#800020] sm:text-[44px]">{n}</dt>
                  <dd className="mt-2 font-[Urbanist] text-xs font-bold uppercase tracking-[0.14em] text-black/60">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <ServicesIndex services={SERVICES_DATA} />
      <Cta />
    </div>
  );
}
