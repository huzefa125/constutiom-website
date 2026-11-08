import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/sections/Cta";
import { SectionHeading } from "@/components/sections/services/SectionHeading";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { GUIDES_DATA } from "@/data/guides";
import { breadcrumbSchema, itemListSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Building Guides for Nigeria",
  description:
    "Free building guides for Nigeria: what a house costs, how earth bricks compare with sandcrete and burnt bricks, and how to build with interlocking blocks.",
  path: "/guides",
  image: "/images/service-photos/construction-hero.webp",
});

export default function GuidesIndexPage() {
  return (
    <div className="flex w-full flex-col bg-[#f7f7f7]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
          ]),
          itemListSchema(GUIDES_DATA.map((g) => ({ name: g.title, path: `/guides/${g.slug}` }))),
        ]}
      />
      <ServiceHero
        compact="small"
        lines={["BUILDING GUIDES", "FOR NIGERIA"]}
        description="Plain answers on what a house costs, how earth bricks compare with other blocks, and how to build with them."
        image="/images/service-photos/construction-hero.webp"
        imageAlt="Ipile crew laying Compressed Earth Brick walls on site"
        ctaLabel="REQUEST A QUOTE"
        ctaHref="/contact#contact-form"
        crumbs={[{ name: "Home", href: "/" }, { name: "Guides" }]}
      />
      <section className="w-full px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto w-full max-w-[1300px]">
          <SectionHeading eyebrow="Guides">
            Read before you <span className="text-[#800020]">build</span>
          </SectionHeading>
          <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
            {GUIDES_DATA.map((guide) => (
              <li key={guide.slug}>
                <Link
                  href={`/guides/${guide.slug}`}
                  className="group flex h-full flex-col justify-between gap-6 rounded-[14px] border border-black/10 p-6 transition-colors hover:border-[#800020] lg:p-8"
                >
                  <span>
                    <span className="block font-heading text-[22px] font-bold uppercase leading-[1.05] text-black sm:text-[26px]">
                      {guide.title}
                    </span>
                    <span className="mt-3 block font-[Urbanist] text-base font-medium leading-[150%] text-black/70">
                      {guide.seoDescription}
                    </span>
                  </span>
                  <span className="inline-flex items-center gap-2 font-[Urbanist] text-sm font-bold uppercase tracking-wider text-[#800020]">
                    Read the guide
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Cta />
    </div>
  );
}
