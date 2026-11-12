import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/sections/Cta";
import { RelatedLinks } from "@/components/sections/services/RelatedLinks";
import { SectionHeading } from "@/components/sections/services/SectionHeading";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { CONTEXT_DATA, PRESS_DATA, type PressItem } from "@/data/press";
import { breadcrumbSchema, itemListSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ipile Earth Synergy in the News",
  description:
    "Press coverage of Ipile Earth Synergy Construction and its Compressed Earth Brick housing, from BusinessDay, MSME Africa and Independent Nigeria.",
  path: "/press",
  image: "/images/projects/navy-barracks-atimbo/navy-barracks-atimbo-01.webp",
});

const fmt = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

function PressList({ items }: { items: PressItem[] }) {
  return (
    <ul className="mt-8 border-t border-black/10">
      {items.map((item) => (
        <li key={item.url} className="border-b border-black/10 py-6">
          <p className="font-[Urbanist] text-xs font-semibold uppercase tracking-[2px] text-[#800020]">
            {item.outlet}
            {item.date && (
              <>
                {" · "}
                <time dateTime={item.date}>{fmt(item.date)}</time>
              </>
            )}
            {item.author && ` · ${item.author}`}
          </p>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-start gap-2 font-heading text-[22px] font-bold uppercase leading-[1.05] text-black underline-offset-4 hover:text-[#800020] hover:underline sm:text-[26px]"
          >
            {item.title}
            <ArrowUpRight className="mt-1 h-5 w-5 shrink-0" />
          </a>
          <p className="mt-3 max-w-[820px] font-[Urbanist] text-base font-medium leading-[155%] text-black/70">{item.summary}</p>
          {item.guideUrl && (
            <div className="mt-3">
              <Link
                href={item.guideUrl}
                className="inline-flex items-center gap-1 font-[Urbanist] text-sm font-bold uppercase tracking-[1px] text-[#800020] transition-colors hover:text-black"
              >
                {item.guideLabel ?? "Read our full editorial guide →"}
              </Link>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}

export default function PressPage() {
  return (
    <div className="flex w-full flex-col bg-[#f7f7f7]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "In the news", path: "/press" },
          ]),
          itemListSchema(PRESS_DATA.map((p) => ({ name: p.title, path: p.url }))),
        ]}
      />
      <ServiceHero
        compact="small"
        lines={["IPILE EARTH", "IN THE NEWS"]}
        description="What Nigerian and African media have written about Ipile and our Compressed Earth Brick homes."
        image="/images/projects/navy-barracks-atimbo/navy-barracks-atimbo-01.webp"
        imageAlt="Blue-roofed Compressed Earth Brick quarters built by Ipile at Atimbo"
        ctaLabel="REQUEST A QUOTE"
        ctaHref="/contact#contact-form"
        crumbs={[{ name: "Home", href: "/" }, { name: "In the news" }]}
      />
      <section className="w-full px-5 py-20 sm:px-8 sm:py-28 lg:px-12">
        <div className="mx-auto w-full max-w-[1300px]">
          <SectionHeading eyebrow="Press">
            Coverage of <span className="text-[#800020]">Ipile</span>
          </SectionHeading>
          <PressList items={PRESS_DATA} />

          <div className="mt-20">
            <SectionHeading eyebrow="Background">
              Housing finance <span className="text-[#800020]">context</span>
            </SectionHeading>
            <p className="mt-4 max-w-[820px] font-[Urbanist] text-base font-medium leading-[155%] text-black/70">
              These pieces are about how Nigerian housing is financed. They do not mention Ipile.
            </p>
            <PressList items={CONTEXT_DATA} />
          </div>
        </div>
      </section>
      <RelatedLinks
        heading="Keep reading"
        links={[
          { href: "/projects", title: "Our projects", text: "Barracks, schools, churches and homes built in earth brick." },
          { href: "/guides", title: "Building guides", text: "What a house costs and how earth bricks compare." },
          { href: "/about", title: "About Ipile", text: "Who we are and how we work." },
        ]}
      />
      <Cta />
    </div>
  );
}
