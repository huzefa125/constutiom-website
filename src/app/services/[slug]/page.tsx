import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { SERVICES_DATA, getServiceById } from "@/data/services";
import { COMPANY_DATA } from "@/data/company";
import { PROJECTS_DATA } from "@/data/projects";
import { SERVICE_CONTENT } from "@/data/service-content";
import { Cta } from "@/components/sections/Cta";
import { RelatedLinks, type RelatedLink } from "@/components/sections/services/RelatedLinks";
import { SectionHeading } from "@/components/sections/services/SectionHeading";
import { ServiceDetails } from "@/components/sections/services/ServiceDetails";
import { ServiceFaq, SHARED_FAQS } from "@/components/sections/services/ServiceFaq";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { ServicesDelivery } from "@/components/sections/services/ServicesDelivery";
import { JsonLd } from "@/components/ui/JsonLd";
import { StickyCard002 } from "@/components/ui/skiper-ui/skiper17";
import { HeroContactNumbers } from "@/components/ui/PhoneActions";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const instant = false;

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) return { title: "Service not found" };
  return pageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.id}`,
    image: service.image,
  });
}

/** "Building Maintenance" -> ["Building", "Maintenance"]: the last word goes on the maroon line. */
function titleLines(title: string): [string, string] {
  const i = title.lastIndexOf(" ");
  return [title.slice(0, i), title.slice(i + 1)];
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) notFound();

  const content = SERVICE_CONTENT[service.id];
  const index = SERVICES_DATA.findIndex((s) => s.id === service.id);
  const prev = SERVICES_DATA[(index - 1 + SERVICES_DATA.length) % SERVICES_DATA.length];
  const next = SERVICES_DATA[(index + 1) % SERVICES_DATA.length];
  const relatedLinks: RelatedLink[] = [
    ...service.related.flatMap((id) => {
      const other = getServiceById(id);
      return other ? [{ href: other.link, title: other.title, text: other.description }] : [];
    }),
    {
      href: "/affordable-housing-nigeria",
      title: "Affordable housing in Nigeria",
      text: "How we build quality homes for less with Compressed Earth Brick.",
    },
  ];
  const relatedProjects = service.projects.flatMap((id) => PROJECTS_DATA.filter((p) => p.id === id));

  return (
    <div className="flex w-full flex-col bg-[#f7f7f7]">
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.id}` },
          ]),
        ]}
      />

      <ServiceHero
        compact
        lines={titleLines(service.title)}
        description={service.description}
        image={service.image}
        imageAlt={service.imageAlt}
        ctaLabel="REQUEST A QUOTE"
        ctaHref="/contact#contact-form"
        crumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.title }]}
      >
        <HeroContactNumbers />
      </ServiceHero>

      {/* Overview */}
      <section className="w-full px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="flex flex-col gap-8 lg:col-span-4">
            <p className="max-w-[320px] font-[Urbanist] text-[17px] font-medium leading-[150%] text-black/80">
              {service.category}
            </p>
            <div className="relative aspect-[4/3] w-full max-w-[440px] overflow-hidden rounded-[14px] bg-[#e9e9e9]">
              <Image
                src={service.overviewImage}
                alt={service.overviewAlt}
                fill
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="font-[Urbanist] text-[26px] font-medium leading-[1.25] tracking-[-0.01em] text-black sm:text-[32px] lg:text-[38px]">
              {service.overview}
            </p>
            <p className="mt-8 font-[Urbanist] text-[17px] font-medium leading-[150%] text-black/75">
              See it in practice:{" "}
              {relatedProjects.map((project, i) => (
                <span key={project.id}>
                  {i > 0 && " and "}
                  <Link href={`/projects#${project.id}`} className="text-[#800020] underline underline-offset-4">
                    {project.name}
                  </Link>
                </span>
              ))}
              . Learn more about our{" "}
              <Link href="/compressed-earth-bricks" className="text-[#800020] underline underline-offset-4">
                Compressed Earth Bricks
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <ServiceDetails content={content} eyebrow={service.category} />

      {/* Scope of work */}
      <section className="w-full px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36">
        <div className="mx-auto w-full max-w-[1300px]">
          <SectionHeading eyebrow="Scope of work" answer={content.scopeAnswer}>
            What does {service.title} <span className="text-[#800020]">include</span>?
          </SectionHeading>
          <ul className="mt-10 lg:mt-12">
            {content.scope.map((item, i) => (
              <li
                key={item.title}
                className="grid grid-cols-[40px_1fr] items-baseline gap-x-2 gap-y-2 border-t border-black/10 py-6 last:border-b lg:grid-cols-12 lg:gap-x-10"
              >
                <span className="font-[Urbanist] text-sm font-bold tabular-nums text-[#800020] lg:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-heading text-[20px] font-bold uppercase leading-[1.05] text-black sm:text-[22px] lg:col-span-5">
                  {item.title}
                </h3>
                <p className="col-start-2 font-[Urbanist] text-base font-medium leading-[150%] text-black/70 lg:col-span-6 lg:col-start-auto">
                  {item.text}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pinned photo stack */}
      <section className="w-full">
        <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-8 lg:px-0">
          <SectionHeading eyebrow="Project photos">
            Our work <span className="text-[#800020]">on site</span>
          </SectionHeading>
        </div>
        <StickyCard002
          cards={service.gallery.map((photo, i) => ({
            id: photo.src,
            image: photo.src,
            alt: photo.caption,
            caption: photo.caption,
            label: `${String(i + 1).padStart(2, "0")} / ${String(service.gallery.length).padStart(2, "0")}`,
          }))}
        />
      </section>

      <ServicesDelivery eyebrow="How we work" steps={service.process} answer={content.processAnswer}>
        How does {service.title} <span className="text-[#800020]">work</span>?
      </ServicesDelivery>

      <ServiceFaq
        items={[
          ...content.faqs,
          {
            q: "How do I get started?",
            a: `Send us your brief with the quote button or call ${COMPANY_DATA.contact.phone}. We review your requirements, then agree the scope and next steps with you.`,
          },
          SHARED_FAQS[0],
        ]}
      />

      <RelatedLinks heading="Related services" links={relatedLinks} />

      {/* Prev / next */}
      <section className="w-full px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {[
            { s: prev, dir: "Previous", Icon: ArrowLeft },
            { s: next, dir: "Next", Icon: ArrowRight },
          ].map(({ s, dir, Icon }) => (
            <Link
              key={dir}
              href={s.link}
              className="group flex items-center justify-between gap-4 rounded-[14px] border border-black/10 p-6 transition-colors hover:border-[#800020] lg:p-8"
            >
              <div>
                <span className="font-[Urbanist] text-xs font-semibold uppercase tracking-[2px] text-[#800020]">
                  {dir} service
                </span>
                <h3 className="mt-2 font-heading text-[20px] font-bold uppercase leading-[1.05] text-black sm:text-[24px]">
                  {s.title}
                </h3>
              </div>
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FCC995] text-black transition-colors group-hover:bg-[#FFD700]">
                <Icon className="h-5 w-5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Cta />
    </div>
  );
}
