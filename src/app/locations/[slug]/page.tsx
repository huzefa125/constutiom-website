import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/sections/Cta";
import { RelatedLinks } from "@/components/sections/services/RelatedLinks";
import { SectionHeading } from "@/components/sections/services/SectionHeading";
import { ServiceFaq } from "@/components/sections/services/ServiceFaq";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { LOCATIONS_DATA, getLocationBySlug } from "@/data/locations";
import { PROJECTS_DATA } from "@/data/projects";
import { SERVICES_DATA } from "@/data/services";
import { SITE_URL, breadcrumbSchema, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const instant = false;

export function generateStaticParams() {
  return LOCATIONS_DATA.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return { title: "Location not found" };
  return pageMetadata({
    title: location.seoTitle,
    description: location.seoDescription,
    path: `/locations/${location.slug}`,
    image: location.image,
  });
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  const path = `/locations/${location.slug}`;
  const projects = location.projects.flatMap((id) => PROJECTS_DATA.filter((p) => p.id === id));
  const others = LOCATIONS_DATA.filter((l) => l.slug !== location.slug);

  return (
    <div className="flex w-full flex-col bg-[#f7f7f7]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: location.place, path },
          ]),
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: `Construction in ${location.place}`,
            serviceType: "Building construction",
            url: `${SITE_URL}${path}`,
            provider: { "@id": `${SITE_URL}/#organization` },
            areaServed: { "@type": "AdministrativeArea", name: location.region },
          },
        ]}
      />

      <ServiceHero
        compact
        lines={location.heroLines}
        description={location.heroText}
        image={location.image}
        imageAlt={location.imageAlt}
        ctaLabel="REQUEST A QUOTE"
        ctaHref="/contact#contact-form"
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: location.place }]}
      />

      <section className="w-full px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={location.place}>
              Who builds homes in <span className="text-[#800020]">{location.place}</span>?
            </SectionHeading>
            <p className="mt-6 font-[Urbanist] text-[20px] font-medium leading-[1.4] text-black/80 sm:text-[24px]">
              {location.answer}
            </p>
          </div>
          <ul className="lg:col-span-5">
            {location.facts.map((fact) => (
              <li key={fact} className="border-t border-black/10 py-4 font-[Urbanist] text-base font-medium leading-[150%] text-black/80 last:border-b">
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {projects.length > 0 && (
        <section className="w-full px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36">
          <div className="mx-auto w-full max-w-[1300px]">
            <SectionHeading eyebrow="Our work here">
              What has Ipile built in <span className="text-[#800020]">{location.place}</span>?
            </SectionHeading>
            <ul className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:mt-12">
              {projects.map((project) => (
                <li key={project.id}>
                  <Link href={`/projects#${project.id}`} className="group block">
                    <div className="relative aspect-[16/11] overflow-hidden rounded-[14px] bg-[#e9e9e9]">
                      <Image
                        src={project.image}
                        alt={`${project.name}, ${project.location}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 640px"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      />
                    </div>
                    <h3 className="mt-5 font-heading text-[22px] font-bold uppercase leading-[1.05] text-black transition-colors group-hover:text-[#800020] sm:text-[26px]">
                      {project.name}
                    </h3>
                    <p className="mt-1 font-[Urbanist] text-sm font-semibold uppercase tracking-[0.14em] text-[#800020]">
                      {project.location}
                    </p>
                    <p className="mt-3 font-[Urbanist] text-base font-medium leading-[150%] text-black/70">{project.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ServiceFaq items={location.faqs} />

      <RelatedLinks
        heading="Services and other locations"
        links={[
          { href: SERVICES_DATA[0].link, title: SERVICES_DATA[0].title, text: SERVICES_DATA[0].description },
          { href: "/affordable-housing-nigeria", title: "Affordable housing in Nigeria", text: "How Compressed Earth Brick brings the cost of a quality home down." },
          ...others.slice(0, 1).map((other) => ({
            href: `/locations/${other.slug}`,
            title: other.seoTitle,
            text: other.heroText,
          })),
        ]}
      />

      <Cta />
    </div>
  );
}
