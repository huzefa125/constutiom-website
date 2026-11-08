import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES_DATA } from "@/data/services";
import { Cta } from "@/components/sections/Cta";
import { SectionHeading } from "@/components/sections/services/SectionHeading";
import { ServiceFaq, SHARED_FAQS } from "@/components/sections/services/ServiceFaq";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { ServicesCeb } from "@/components/sections/services/ServicesCeb";
import { ServicesDelivery } from "@/components/sections/services/ServicesDelivery";
import { ServicesIntro } from "@/components/sections/services/ServicesIntro";
import { ServicesProjects } from "@/components/sections/services/ServicesProjects";
import { JsonLd } from "@/components/ui/JsonLd";
import { StickyCard002 } from "@/components/ui/skiper-ui/skiper17";
import { breadcrumbSchema, itemListSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Construction & Building Services in Nigeria",
  description:
    "Construction and building services in Nigeria: home building, maintenance, structural design, property and facility management, and materials supply.",
  path: "/services",
  image: "/images/service-photos/services-hero.webp",
});

export default function ServicesPage() {
  return (
    <div className="flex w-full flex-col bg-[#f7f7f7]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
          itemListSchema(SERVICES_DATA.map((s) => ({ name: s.title, path: s.link }))),
        ]}
      />

      <ServiceHero
        lines={["CONSTRUCTION SERVICES", "IN NIGERIA"]}
        compact
        description="From new homes and institutions to repair and renovation, one accountable team takes your project from first sketch to handover."
        image="/images/service-photos/services-hero.webp"
        imageAlt="Completed Compressed Earth Brick homes along a paved estate road"
        ctaLabel="VIEW OUR SERVICES"
        ctaHref="#service-lines"
      />

      <ServicesIntro />

      <section id="service-lines" className="w-full scroll-mt-8 bg-[#f7f7f7]">
        <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-8 lg:px-0">
          <SectionHeading eyebrow="Five service lines">
            Everything your build <span className="text-[#800020]">needs</span>
          </SectionHeading>
          <nav aria-label="Jump to a service" className="mt-6 flex flex-wrap gap-2">
            {SERVICES_DATA.map((s) => (
              <Link
                key={s.id}
                href={s.link}
                className="rounded-full border border-black/15 px-4 py-2 font-[Urbanist] text-sm font-semibold text-black transition-colors hover:border-[#800020] hover:text-[#800020]"
              >
                {s.title}
              </Link>
            ))}
          </nav>
        </div>
        <StickyCard002
          cards={SERVICES_DATA.map((s, i) => ({
            id: s.id,
            image: s.image,
            alt: s.imageAlt,
            label: `${String(i + 1).padStart(2, "0")} / ${String(SERVICES_DATA.length).padStart(2, "0")}`,
            eyebrow: s.category,
            title: s.title,
            description: s.description,
            points: s.details.slice(0, 3).map((d) => d.split(":")[0]),
            href: s.link,
            linkText: "View service",
          }))}
        />
      </section>

      <ServicesCeb />
      <ServicesDelivery />
      <ServicesProjects />
      <ServiceFaq items={SHARED_FAQS} />
      <Cta />
    </div>
  );
}
