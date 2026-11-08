import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/sections/Cta";
import { RelatedLinks } from "@/components/sections/services/RelatedLinks";
import { SectionHeading } from "@/components/sections/services/SectionHeading";
import { ServiceFaq } from "@/components/sections/services/ServiceFaq";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { ServicesCeb } from "@/components/sections/services/ServicesCeb";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleSchema, breadcrumbSchema, pageMetadata } from "@/lib/seo";

const PATH = "/compressed-earth-bricks";
const IMAGE = "/images/service-photos/general-contracts-procurement-1.webp";

export const metadata: Metadata = pageMetadata({
  title: "Compressed Earth Bricks in Nigeria: CEB Homes",
  description:
    "Compressed Earth Bricks (CEB) in Nigeria: how interlocking earth bricks are made, why they save 30–40% of walling cost, and where we have built with them.",
  path: PATH,
  image: IMAGE,
});

const BENEFITS = [
  { title: "Affordability", text: "CEB saves between 30 and 40% of the total walling unit cost." },
  { title: "Local jobs", text: "Building with local materials employs local people." },
  { title: "Fire resistance", text: "Bricks are fire resistant. Earthen walls do not burn." },
  {
    title: "Uniform blocks",
    text: "The uniformity of the blocks simplifies construction and minimises or eliminates the need for mortar, reducing labour and materials costs.",
  },
  {
    title: "Speed and availability",
    text: "CEB supports high-speed delivery of a building, usually within 6 weeks, and materials are easily sourced, which minimises shipping costs.",
  },
  {
    title: "Moisture control",
    text: "Earth absorbs and releases moisture from indoor air, stabilising humidity inside rooms and helping to prevent mould.",
  },
];

const FAQS = [
  {
    q: "What are Compressed Earth Bricks?",
    a: "Compressed Earth Bricks (CEB) are building bricks made from laterite soil, stabilised with a small percentage of cement and water, then manually compressed at high pressure.",
  },
  {
    q: "Are Compressed Earth Bricks the same as interlocking bricks?",
    a: "Our CEB are interlocking earth bricks. Their uniform shape simplifies construction and minimises or eliminates the need for mortar.",
  },
  {
    q: "How much can I save with interlocking bricks in Nigeria?",
    a: "Using CEB reduces the cost of housing by 30–40% of the total walling cost per unit. The saving on your project depends on its design, so contact us for a quote.",
  },
  {
    q: "Are earth bricks strong enough for a house?",
    a: "Yes. We have used them for completed Navy barracks, a school campus and residential homes across Nigeria. Our quality system follows Federal Ministry of Works standards.",
  },
];

export default function CompressedEarthBricksPage() {
  return (
    <div className="flex w-full flex-col bg-[#f7f7f7]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Compressed Earth Bricks", path: PATH },
          ]),
          articleSchema({
            headline: "Compressed Earth Bricks in Nigeria: CEB Homes",
            description: "How Compressed Earth Bricks are made, why they save 30-40% of walling cost, and where Ipile has built with them.",
            path: PATH,
            image: IMAGE,
            datePublished: "2026-11-07",
            dateModified: "2026-11-08",
          }),
        ]}
      />

      <ServiceHero
        compact
        lines={["Compressed Earth", "Bricks in Nigeria"]}
        description="Our signature product: interlocking earth bricks made from local laterite soil, which cut walling cost by 30–40% per unit."
        image={IMAGE}
        imageAlt="Compressed Earth Bricks being cured on site by the Ipile Earth Synergy crew"
        ctaLabel="REQUEST A QUOTE"
        ctaHref="/contact#contact-form"
        crumbs={[{ name: "Home", href: "/" }, { name: "Compressed Earth Bricks" }]}
      />

      <ServicesCeb />

      <section className="w-full px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36">
        <div className="mx-auto w-full max-w-[1300px]">
          <SectionHeading eyebrow="Why build with CEB">
            What are the benefits of building with <span className="text-[#800020]">CEB</span>?
          </SectionHeading>
          <p className="mt-6 max-w-[760px] font-[Urbanist] text-[20px] font-medium leading-[1.4] text-black/80 sm:text-[24px]">
            Compressed Earth Bricks lower walling cost by 30–40%, are fire resistant, reduce or remove the need for mortar, and
            help regulate indoor humidity. Because they use local materials, they also create local jobs and keep shipping costs
            down. Materials are also easily sourced, which speeds up delivery.
          </p>
          <p className="mt-5 font-[Urbanist] text-sm font-semibold text-black/60">
            Published <time dateTime="2026-11-07">7 November 2026</time> · Last updated{" "}
            <time dateTime="2026-11-08">8 November 2026</time>
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
            {BENEFITS.map((benefit) => (
              <li key={benefit.title} className="flex flex-col gap-3 border-t border-black/10 pt-5">
                <h3 className="font-heading text-[20px] font-bold uppercase leading-none text-black sm:text-[22px]">
                  {benefit.title}
                </h3>
                <p className="font-[Urbanist] text-base font-medium leading-[150%] text-black/70">{benefit.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36">
        <div className="mx-auto w-full max-w-[1300px]">
          <SectionHeading eyebrow="Tested and trusted">
            Where has Ipile <span className="text-[#800020]">built with CEB</span>?
          </SectionHeading>
          <p className="mt-6 max-w-[760px] font-[Urbanist] text-[20px] font-medium leading-[1.4] text-black/80 sm:text-[24px]">
            Our bricks are a registered trademark. We have used them for{" "}
            <Link href="/locations/abuja" className="text-[#800020] underline underline-offset-4">
              100 housing units at Nigerian Navy Barracks, Kuje
            </Link>
            , the{" "}
            <Link href="/locations/cross-river" className="text-[#800020] underline underline-offset-4">
              Navy Barracks at Atimbo
            </Link>{" "}
            and the{" "}
            <Link href="/projects#navy-school-akpabuyo" className="text-[#800020] underline underline-offset-4">
              Navy School at Akpabuyo
            </Link>
            , as well as bungalows at RCCG. These projects show CEB working at barracks, school and residential scale.
          </p>
        </div>
      </section>

      <ServiceFaq items={FAQS} />

      <RelatedLinks
        heading="Build with earth brick"
        links={[
          { href: "/affordable-housing-nigeria", title: "Affordable housing in Nigeria", text: "How CEB brings the cost of a quality home down." },
          { href: "/services/construction", title: "Building construction", text: "Our crews build with CEB from foundation to handover." },
          { href: "/services/general-contracts-procurement", title: "Materials supply", text: "Building materials, equipment and builders' requisites." },
        ]}
      />

      <Cta />
    </div>
  );
}
