import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/sections/Cta";
import { GuideBlocks } from "@/components/sections/guides/GuideBody";
import { RelatedLinks } from "@/components/sections/services/RelatedLinks";
import { ServiceFaq } from "@/components/sections/services/ServiceFaq";
import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { GUIDES_DATA, getGuideBySlug } from "@/data/guides";
import { articleSchema, breadcrumbSchema, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export const instant = false;

export function generateStaticParams() {
  return GUIDES_DATA.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return { title: "Guide not found" };
  return pageMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    path: `/guides/${guide.slug}`,
    image: guide.image,
    article: { published: guide.published, modified: guide.updated },
  });
}

const fmt = (iso: string) => new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const path = `/guides/${guide.slug}`;
  const toc = guide.blocks.flatMap((b) => (b.type === "h2" ? [{ id: b.id, text: b.text }] : []));

  return (
    <div className="flex w-full flex-col bg-[#f7f7f7]">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Guides", path: "/guides" },
            { name: guide.title, path },
          ]),
          articleSchema({
            headline: guide.title,
            description: guide.seoDescription,
            path,
            image: guide.image,
            datePublished: guide.published,
            dateModified: guide.updated,
            reviewedBy: guide.reviewedBy,
          }),
        ]}
      />

      <ServiceHero
        compact="small"
        lines={guide.heroLines}
        description={guide.heroText}
        image={guide.image}
        imageAlt={guide.imageAlt}
        ctaLabel="REQUEST A QUOTE"
        ctaHref="/contact#contact-form"
        crumbs={[{ name: "Home", href: "/" }, { name: "Guides", href: "/guides" }, { name: "Guide" }]}
      />

      <section className="w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <p className="font-[Urbanist] text-sm font-semibold text-black/65">
                By Ipile Earth Synergy
                <br />
                Published <time dateTime={guide.published}>{fmt(guide.published)}</time>
                <br />
                Last updated <time dateTime={guide.updated}>{fmt(guide.updated)}</time>
                {guide.reviewedBy && (
                  <>
                    <br />
                    Reviewed by {guide.reviewedBy.name}, {guide.reviewedBy.credential}
                  </>
                )}
              </p>
              <nav aria-label="In this guide" className="mt-6 border-t border-black/10 pt-5">
                <p className="font-[Urbanist] text-xs font-semibold uppercase tracking-[2px] text-[#800020]">In this guide</p>
                <ol className="mt-3 flex flex-col gap-2">
                  {toc.map((item) => (
                    <li key={item.id}>
                      <a href={`#${item.id}`} className="font-[Urbanist] text-[15px] font-semibold leading-[1.3] text-black/75 transition-colors hover:text-[#800020]">
                        {item.text}
                      </a>
                    </li>
                  ))}
                  <li>
                    <a href="#sources" className="font-[Urbanist] text-[15px] font-semibold text-black/75 transition-colors hover:text-[#800020]">
                      Sources
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </aside>

          <article className="lg:col-span-9 lg:max-w-[820px]">
            <GuideBlocks blocks={guide.blocks} />

            <h2 id="sources" className="mt-14 scroll-mt-28 font-heading text-[28px] font-bold uppercase leading-[1.02] text-black sm:text-[36px]">
              Sources
            </h2>
            <p className="mt-4 font-[Urbanist] text-[16px] font-medium leading-[160%] text-black/70">
              Figures in this guide come from the sources below, checked on {fmt(guide.updated)}. Company figures are marked as
              Ipile&apos;s own.
            </p>
            <ul className="mt-5 border-t border-black/10">
              {guide.sources.map((source) => (
                <li key={source.url} className="border-b border-black/10 py-4">
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-start gap-2 font-[Urbanist] text-[16px] font-bold text-[#800020] underline-offset-4 hover:underline"
                  >
                    {source.name}
                    <ArrowUpRight className="mt-0.5 h-4 w-4 shrink-0" />
                  </a>
                  <p className="mt-1 font-[Urbanist] text-[15px] font-medium leading-[150%] text-black/65">{source.note}</p>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-[Urbanist] text-[15px] font-medium text-black/65">
              Spotted something out of date?{" "}
              <Link href="/contact#contact-form" className="text-[#800020] underline underline-offset-4">
                Tell us
              </Link>{" "}
              and we will update this guide.
            </p>
          </article>
        </div>
      </section>

      <ServiceFaq items={guide.faqs} />
      <RelatedLinks heading="Keep reading" links={guide.related} />
      <Cta />
    </div>
  );
}
