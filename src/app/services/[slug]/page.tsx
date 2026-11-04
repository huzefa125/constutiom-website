import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { SERVICES_DATA, getServiceById } from "@/data/services";
import { COMPANY_DATA } from "@/data/company";
import { Cta } from "@/components/sections/Cta";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) return { title: "Service not found" };
  return pageMetadata({
    title: `${service.title} in Nigeria`,
    description: service.description,
    path: `/services/${service.id}`,
    image: service.image,
  });
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <div className="flex items-center gap-[6px]">
      <div className={`h-2 w-2 rounded-full ${light ? "bg-[#FFD700]" : "bg-[#800020]"}`} />
      <div
        className={`font-[Urbanist] text-sm font-semibold uppercase tracking-[1.92px] ${
          light ? "text-[#FFD700]" : "text-[#800020]"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/** "Civil Construction: construction, repair..." -> ["Civil Construction", "construction, repair..."] */
function splitDetail(detail: string): [string, string | null] {
  const i = detail.indexOf(":");
  return i === -1 ? [detail, null] : [detail.slice(0, i), detail.slice(i + 1).trim()];
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) notFound();

  const index = SERVICES_DATA.findIndex((s) => s.id === service.id);
  const prev = SERVICES_DATA[(index - 1 + SERVICES_DATA.length) % SERVICES_DATA.length];
  const next = SERVICES_DATA[(index + 1) % SERVICES_DATA.length];
  const phoneHref = `tel:${COMPANY_DATA.contact.phone.replace(/\s+/g, "")}`;
  const num = String(index + 1).padStart(2, "0");

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

      {/* Hero: full-bleed photo */}
      <section className="relative flex min-h-[640px] w-full items-end overflow-hidden bg-[#1a1718] px-5 pb-12 pt-40 sm:px-8 sm:pb-16 lg:min-h-[760px] lg:px-12 lg:pb-20">
        <Image
          src={service.image}
          alt={`${service.title} by Ipile Earth Synergy`}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />

        <div className="relative mx-auto w-full max-w-[1300px]">
          <nav
            aria-label="Breadcrumb"
            className="mb-8 flex flex-wrap items-center gap-2 font-[Urbanist] text-sm font-semibold text-white/65"
          >
            <Link href="/" className="transition-colors hover:text-[#FFD700]">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="transition-colors hover:text-[#FFD700]">
              Services
            </Link>
            <span>/</span>
            <span className="text-white">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow light>
                {num} / {service.eyebrow}
              </Eyebrow>
              <h1 className="mt-5 font-heading text-[44px] font-bold uppercase leading-[0.92] tracking-tight text-white sm:text-[68px] lg:text-[92px]">
                {service.title}
              </h1>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row lg:col-span-4 lg:flex-col lg:items-stretch">
              <a
                href="#contact"
                className="group inline-flex items-center justify-between gap-3 rounded-full bg-[#FFD700] px-7 py-4 font-[Urbanist] text-sm font-bold uppercase tracking-wider text-[#800020] transition-colors hover:bg-white"
              >
                Request a quote
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href={phoneHref}
                className="inline-flex items-center justify-between gap-3 rounded-full border border-white/40 px-7 py-4 font-[Urbanist] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:border-[#FFD700] hover:text-[#FFD700]"
              >
                {COMPANY_DATA.contact.phone}
                <Phone className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
        <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col gap-5 lg:col-span-4">
            <Eyebrow>Overview</Eyebrow>
            <h2 className="font-serif text-[30px] uppercase leading-[1] text-black sm:text-[38px]">
              {service.category}
            </h2>
          </div>
          <div className="lg:col-span-8">
            <p className="font-[Urbanist] text-[24px] font-medium leading-[1.3] tracking-[-0.01em] text-black sm:text-[30px] lg:text-[36px]">
              {service.overview}
            </p>
            <p className="mt-8 max-w-[620px] font-[Urbanist] text-lg font-medium leading-[150%] text-black/65">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Scope of work */}
      <section className="w-full px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto w-full max-w-[1300px]">
          <div className="mb-10 flex flex-col gap-4 lg:mb-14">
            <Eyebrow>Scope of work</Eyebrow>
            <h2 className="font-serif text-[30px] uppercase leading-[0.98] text-black sm:text-[38px] lg:text-[56px]">
              What&apos;s <span className="text-[#800020]">included</span>
            </h2>
          </div>

          <ul>
            {service.details.map((detail, i) => {
              const [head, body] = splitDetail(detail);
              return (
                <li
                  key={detail}
                  className="group grid grid-cols-[48px_1fr] items-start gap-x-4 gap-y-2 border-t border-black/15 py-7 last:border-b lg:grid-cols-12 lg:gap-x-10 lg:py-9"
                >
                  <span className="pt-1 font-[Urbanist] text-sm font-bold tabular-nums text-[#800020] lg:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-serif text-[22px] uppercase leading-[1.05] text-black transition-colors group-hover:text-[#800020] sm:text-[26px] lg:col-span-5 lg:text-[30px]">
                    {head}
                  </h3>
                  {body && (
                    <p className="col-start-2 font-[Urbanist] text-base font-medium leading-[150%] text-black/65 lg:col-span-6 lg:col-start-auto lg:pt-1">
                      {body}
                    </p>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      <section className="w-full px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-4 sm:grid-cols-6 lg:gap-6">
          {service.gallery.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className={`relative overflow-hidden rounded-[18px] bg-[#e9e9e9] ${
                i === 0 ? "aspect-[4/3] sm:col-span-4 sm:row-span-2 sm:aspect-auto sm:min-h-[420px]" : "aspect-[4/3] sm:col-span-2"
              }`}
            >
              <Image
                src={src}
                alt={`${service.title}: project photo ${i + 1}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1300px) 60vw, 780px"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="w-full px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto w-full max-w-[1300px] rounded-[28px] bg-[#1a1718] px-6 py-12 sm:px-10 lg:px-16 lg:py-20">
          <div className="mb-12 flex flex-col gap-4 lg:mb-16">
            <Eyebrow light>How we work</Eyebrow>
            <h2 className="font-serif text-[30px] uppercase leading-[0.98] text-white sm:text-[38px] lg:text-[56px]">
              Our <span className="text-[#FFD700]">process</span>
            </h2>
          </div>

          <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {service.process.map((step, i) => (
              <li key={step.title} className="relative flex flex-col gap-4 border-t border-white/20 pt-6">
                <span className="absolute -top-[5px] left-0 h-[9px] w-[9px] rounded-full bg-[#FFD700]" />
                <span className="font-serif text-[56px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,215,0,0.7)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-[22px] uppercase leading-[1] text-white">{step.title}</h3>
                <p className="font-[Urbanist] text-base font-medium leading-[150%] text-white/65">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Prev / next */}
      <section className="w-full px-5 pb-16 sm:px-8 sm:pb-24 lg:px-12 lg:pb-28">
        <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-4 md:grid-cols-2 lg:gap-6">
          {[
            { s: prev, dir: "Previous", Icon: ArrowLeft },
            { s: next, dir: "Next", Icon: ArrowRight },
          ].map(({ s, dir, Icon }) => (
            <Link
              key={dir}
              href={s.link}
              className="group relative flex min-h-[220px] flex-col justify-end overflow-hidden rounded-[22px] bg-[#1a1718] p-7 lg:min-h-[280px] lg:p-10"
            >
              <Image
                src={s.image}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 640px"
                className="object-cover opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="relative flex items-end justify-between gap-4">
                <div>
                  <span className="font-[Urbanist] text-xs font-bold uppercase tracking-[0.16em] text-[#FFD700]">
                    {dir} service
                  </span>
                  <h3 className="mt-2 font-serif text-[24px] uppercase leading-[1] text-white sm:text-[30px]">
                    {s.title}
                  </h3>
                </div>
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FFD700] text-[#800020] transition-transform duration-300 group-hover:scale-110">
                  <Icon className="h-5 w-5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Cta />
    </div>
  );
}
