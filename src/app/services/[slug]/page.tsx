import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowUpRight, Phone } from "lucide-react";
import { SERVICES_DATA, getServiceById } from "@/data/services";
import { COMPANY_DATA } from "@/data/company";
import { Cta } from "@/components/sections/Cta";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({ slug: service.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) return { title: "Service not found" };
  return {
    title: `${service.title} | Ipile Earth Synergy Construction Limited`,
    description: service.description,
  };
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[6px]">
      <div className="h-2 w-2 rounded-full bg-black" />
      <div className="font-[Urbanist] text-sm font-semibold uppercase leading-[150%] tracking-[1.92px] text-black">
        {children}
      </div>
    </div>
  );
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceById(slug);
  if (!service) notFound();

  const others = SERVICES_DATA.filter((s) => s.id !== service.id);
  const phoneHref = `tel:${COMPANY_DATA.contact.phone.replace(/\s+/g, "")}`;

  return (
    <div className="flex w-full flex-col bg-[#f7f7f7]">
      {/* Hero */}
      <section className="px-[10px] pb-[30px] pt-[130px] sm:px-5 lg:pb-[50px] lg:pt-[150px]">
        <div className="mx-auto w-full max-w-[1300px]">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 font-[Urbanist] text-sm font-semibold text-black/55">
            <Link href="/" className="transition-colors hover:text-[#800020]">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="transition-colors hover:text-[#800020]">
              Services
            </Link>
            <span>/</span>
            <span className="text-black">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="flex flex-col items-start gap-6 lg:col-span-6">
              <Eyebrow>{service.eyebrow}</Eyebrow>
              <h1 className="font-serif text-[40px] font-semibold uppercase leading-[0.96] text-black sm:text-[56px] lg:text-[64px] xl:text-[80px]">
                {service.title}
              </h1>
              <p className="max-w-[520px] font-[Urbanist] text-lg font-medium leading-[145%] text-black/70">
                {service.description}
              </p>
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:gap-4">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#800020] px-7 py-4 font-[Urbanist] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#FFD700] hover:text-[#800020]"
                >
                  Request a quote
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-black/25 px-7 py-4 font-[Urbanist] text-sm font-bold uppercase tracking-wider text-black transition-colors hover:border-[#800020] hover:text-[#800020]"
                >
                  <Phone className="h-4 w-4" />
                  {COMPANY_DATA.contact.phone}
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-[#e9e9e9]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 640px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + gallery */}
      <section className="px-[10px] py-[30px] sm:px-5 lg:py-[50px]">
        <div className="mx-auto w-full max-w-[1300px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-14">
            <div className="flex flex-col items-start gap-4 lg:col-span-5">
              <Eyebrow>Overview</Eyebrow>
              <h2 className="font-serif text-[30px] uppercase leading-[0.98] text-black sm:text-[36px] lg:text-[46px]">
                {service.category}
              </h2>
            </div>
            <p className="font-[Urbanist] text-xl font-medium leading-[150%] text-black/70 lg:col-span-7">
              {service.overview}
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3 lg:mt-14 lg:gap-6">
            {service.gallery.map((src, i) => (
              <div key={src} className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#e9e9e9]">
                <Image
                  src={src}
                  alt={`${service.title} project photo ${i + 1}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 420px"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="px-[10px] py-[30px] sm:px-5 lg:py-[50px]">
        <div className="mx-auto w-full max-w-[1300px]">
          <div className="mb-10 flex flex-col items-start gap-4 lg:mb-14">
            <Eyebrow>What&apos;s included</Eyebrow>
            <h2 className="font-serif text-[30px] uppercase leading-[0.98] text-black sm:text-[36px] lg:text-[46px] xl:text-[56px]">
              Scope of <span className="text-[#800020]">work</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
            {service.details.map((detail, i) => (
              <div
                key={detail}
                className="group flex items-center gap-5 rounded-[20px] border border-black/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-[#800020]/30 hover:shadow-[0_18px_40px_-24px_rgba(128,0,32,0.4)] lg:p-8"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#800020] font-serif text-[20px] text-white transition-colors duration-500 group-hover:bg-[#FFD700] group-hover:text-[#800020]">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-[20px] uppercase leading-[1] text-black lg:text-[24px]">{detail}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-[10px] py-[30px] sm:px-5 lg:py-[50px]">
        <div className="mx-auto w-full max-w-[1300px] overflow-hidden rounded-[28px] bg-[#1a1718] px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-20">
          <div className="mb-10 flex flex-col items-start gap-4 lg:mb-14">
            <div className="flex items-center gap-[6px]">
              <div className="h-2 w-2 rounded-full bg-[#FFD700]" />
              <div className="font-[Urbanist] text-sm font-semibold uppercase leading-[150%] tracking-[1.92px] text-[#FFD700]">
                How we work
              </div>
            </div>
            <h2 className="font-serif text-[30px] uppercase leading-[0.98] text-white sm:text-[36px] lg:text-[46px] xl:text-[56px]">
              Our <span className="text-[#FFD700]">process</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {service.process.map((step, i) => (
              <div key={step.title} className="flex flex-col gap-4 border-t border-white/20 pt-6">
                <span className="font-serif text-[56px] leading-none text-transparent [-webkit-text-stroke:1px_rgba(255,215,0,0.7)]">
                  0{i + 1}
                </span>
                <h3 className="font-serif text-[22px] uppercase leading-[1] text-white">{step.title}</h3>
                <p className="font-[Urbanist] text-base font-medium leading-[145%] text-white/65">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="px-[10px] py-[30px] sm:px-5 lg:py-[50px]">
        <div className="mx-auto w-full max-w-[1300px]">
          <div className="mb-10 flex flex-col items-start gap-4 lg:mb-14">
            <Eyebrow>More services</Eyebrow>
            <h2 className="font-serif text-[30px] uppercase leading-[0.98] text-black sm:text-[36px] lg:text-[46px] xl:text-[56px]">
              Explore <span className="text-[#800020]">more</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {others.map((other) => (
              <Link key={other.id} href={other.link} className="group block">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#e9e9e9]">
                  <Image
                    src={other.image}
                    alt={other.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 420px"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <h3 className="font-serif text-[22px] uppercase leading-[0.98] text-black transition-colors group-hover:text-[#800020]">
                      {other.title}
                    </h3>
                    <span className="font-[Urbanist] text-sm font-medium text-black/55">{other.category}</span>
                  </div>
                  <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-black/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#800020]" />
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
