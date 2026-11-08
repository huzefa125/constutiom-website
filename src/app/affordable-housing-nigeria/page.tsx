import type { Metadata } from "next";
import Link from "next/link";
import { Cta } from "@/components/sections/Cta";
import { RelatedLinks } from "@/components/sections/services/RelatedLinks";
import { SectionHeading } from "@/components/sections/services/SectionHeading";
import { ServiceFaq } from "@/components/sections/services/ServiceFaq";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { articleSchema, breadcrumbSchema, pageMetadata } from "@/lib/seo";

const PATH = "/affordable-housing-nigeria";
const IMAGE = "/images/service-photos/property-facility-management-1.webp";

export const metadata: Metadata = pageMetadata({
  title: "Affordable Housing in Nigeria: Low-Cost Homes",
  description:
    "Affordable housing in Nigeria built with Compressed Earth Brick. Save 30–40% on walling cost per unit with low-cost homes for every class of society.",
  path: PATH,
  image: IMAGE,
});

const COST_CUTS = [
  {
    title: "Lower walling cost",
    text: "Compressed Earth Brick saves between 30 and 40% of the total walling cost per unit.",
  },
  {
    title: "Local materials",
    text: "Bricks are made from laterite, a locally available resource, which keeps shipping costs down.",
  },
  {
    title: "Less labour and mortar",
    text: "Uniform blocks simplify construction and reduce or remove the need for mortar.",
  },
  {
    title: "Faster delivery",
    text: "CEB supports high-speed delivery, usually within 6 weeks, so projects carry less time on site.",
  },
];

const HOME_TYPES = ["Luxury apartment", "Deluxe apartment", "Standard apartment", "Basic apartment"];

const FEATURES = [
  "Compressed Earth Brick walls",
  "Step tile roofing",
  "Kitchen cabinets",
  "Proper landscaping",
  "Terraces",
  "POP ceilings",
  "Quality Spanish tiles",
  "Ensuite bedrooms",
  "Visitor's toilet",
  "Aluminium windows",
];

const FAQS = [
  {
    q: "What makes housing affordable in Nigeria?",
    a: "The biggest savings come from how a house is built. We use Compressed Earth Brick and locally available resources, which reduces the cost of housing by 30–40% of the total walling cost per unit.",
  },
  {
    q: "Who are your affordable homes for?",
    a: "Our aim is to provide suitable and affordable homes for every class of society, including low-income earners. We design and build to each client's requirements.",
  },
  {
    q: "How much does an affordable house cost?",
    a: "It depends on the design, size and location, so we price each project individually. Send us your plan or budget through the contact page for a quote.",
  },
  {
    q: "Do you work with mortgage banks and organisations?",
    a: "Yes. We have created partnerships with other organisations, mortgage banks and corporate labour services to help low-income earners own a house.",
  },
];

export default function AffordableHousingPage() {
  return (
    <div className="flex w-full flex-col bg-[#f7f7f7]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Affordable Housing in Nigeria", path: PATH },
          ]),
          articleSchema({
            headline: "Affordable Housing in Nigeria: Low-Cost Homes",
            description: "How Ipile Earth Synergy builds affordable housing in Nigeria with Compressed Earth Brick.",
            path: PATH,
            image: IMAGE,
            datePublished: "2026-11-07",
            dateModified: "2026-11-08",
          }),
        ]}
      />

      <ServiceHero
        compact
        lines={["Affordable Housing", "in Nigeria"]}
        description="Suitable, low-cost homes in a sustainable environment for every class of society, built with Compressed Earth Brick and locally available resources."
        image={IMAGE}
        imageAlt="Aerial view of an affordable housing estate built by Ipile Earth Synergy in Nigeria"
        ctaLabel="REQUEST A QUOTE"
        ctaHref="/contact#contact-form"
        crumbs={[{ name: "Home", href: "/" }, { name: "Affordable Housing in Nigeria" }]}
      />

      <section className="w-full px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto w-full max-w-[1300px]">
          <SectionHeading eyebrow="How we keep costs down">
            How does Ipile make housing <span className="text-[#800020]">affordable in Nigeria</span>?
          </SectionHeading>
          <p className="mt-6 max-w-[760px] font-[Urbanist] text-[20px] font-medium leading-[1.4] text-black/80 sm:text-[24px]">
            We change how homes are built. Our{" "}
            <Link href="/compressed-earth-bricks" className="text-[#800020] underline underline-offset-4">
              Compressed Earth Bricks
            </Link>{" "}
            reduce the cost of housing by 30–40% of the total walling cost per unit. They use locally available laterite soil and
            less mortar, so more of your budget goes into the finished home.
          </p>
          <p className="mt-5 font-[Urbanist] text-sm font-semibold text-black/60">
            Published <time dateTime="2026-11-07">7 November 2026</time> · Last updated{" "}
            <time dateTime="2026-11-08">8 November 2026</time>
          </p>
          <ul className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-8">
            {COST_CUTS.map((item, i) => (
              <li key={item.title} className="flex flex-col gap-3 border-t border-black/10 pt-5">
                <span className="font-heading text-3xl font-bold leading-none text-[#800020] sm:text-4xl">0{i + 1}</span>
                <h3 className="mt-2 font-heading text-[20px] font-bold uppercase leading-none text-black sm:text-[22px]">
                  {item.title}
                </h3>
                <p className="font-[Urbanist] text-base font-medium leading-[150%] text-black/70">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36">
        <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Homes for every budget">
              What types of <span className="text-[#800020]">affordable home</span> do you build?
            </SectionHeading>
            <p className="mt-6 font-[Urbanist] text-[17px] font-medium leading-[150%] text-black/75">
              We design and build to each client&apos;s requirements, from basic to luxury homes. At Redemption Camp on
              the Lagos-Ibadan Expressway we have delivered luxury, deluxe, standard and basic apartments, so the same quality
              of construction reaches different budgets and different families.
            </p>
            <ul className="mt-6 border-t border-black/10">
              {HOME_TYPES.map((type) => (
                <li key={type} className="border-b border-black/10 py-3 font-heading text-[18px] font-bold uppercase text-black">
                  {type}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <h3 className="font-heading text-[22px] font-bold uppercase leading-none text-black sm:text-[26px]">
              What goes into every home
            </h3>
            <ul className="mt-6 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {FEATURES.map((feature) => (
                <li key={feature} className="border-b border-black/10 py-3 font-[Urbanist] text-base font-medium text-black/80">
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="w-full px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36">
        <div className="mx-auto w-full max-w-[1300px]">
          <SectionHeading eyebrow="Proven at scale">
            What affordable housing has Ipile <span className="text-[#800020]">already delivered</span>?
          </SectionHeading>
          <p className="mt-6 max-w-[760px] font-[Urbanist] text-[20px] font-medium leading-[1.4] text-black/80 sm:text-[24px]">
            Our largest project is 100 units for the Nigerian Navy at Kuje, Abuja: 20 two-bedroom, 30 three-bedroom, 20
            single-room and 30 studio apartments. The Navy then awarded us a repeat contract at Atimbo, Calabar, in Cross River
            State, after seeing the completed Kuje work.
          </p>
          <div className="mt-10 grid grid-cols-1 gap-10 lg:mt-12 lg:grid-cols-3 lg:gap-8">
            <div className="border-t border-black/10 pt-5">
              <h3 className="font-heading text-[20px] font-bold uppercase leading-[1.05] text-black sm:text-[22px]">
                <Link href="/locations/abuja" className="transition-colors hover:text-[#800020]">
                  Nigerian Navy Barracks, Kuje, Abuja
                </Link>
              </h3>
              <p className="mt-3 font-[Urbanist] text-base font-medium leading-[150%] text-black/70">
                100 housing units for Navy personnel: 20 two-bedroom, 30 three-bedroom, 20 single-room and 30 studio
                apartments.
              </p>
            </div>
            <div className="border-t border-black/10 pt-5">
              <h3 className="font-heading text-[20px] font-bold uppercase leading-[1.05] text-black sm:text-[22px]">
                <Link href="/locations/cross-river" className="transition-colors hover:text-[#800020]">
                  Navy Barracks, Atimbo, Calabar
                </Link>
              </h3>
              <p className="mt-3 font-[Urbanist] text-base font-medium leading-[150%] text-black/70">
                A repeat contract for similar units in Cross River State, awarded after the Kuje handover.
              </p>
            </div>
            <div className="border-t border-black/10 pt-5">
              <h3 className="font-heading text-[20px] font-bold uppercase leading-[1.05] text-black sm:text-[22px]">
                <Link href="/locations/ogun" className="transition-colors hover:text-[#800020]">
                  Redemption Camp homes, Ogun State
                </Link>
              </h3>
              <p className="mt-3 font-[Urbanist] text-base font-medium leading-[150%] text-black/70">
                Luxury, deluxe, standard and basic homes designed and built to client demand on the Lagos-Ibadan
                Expressway.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ServiceFaq items={FAQS} />

      <RelatedLinks
        heading="Start your affordable home"
        links={[
          { href: "/services/construction", title: "Building construction", text: "See how we build from foundation to handover." },
          { href: "/services/structural-design", title: "Modern CEB home plans", text: "Plans tailored to your budget, family size and plot." },
          { href: "/compressed-earth-bricks", title: "Compressed Earth Bricks", text: "How our bricks are made and why they cost less." },
        ]}
      />

      <Cta />
    </div>
  );
}
