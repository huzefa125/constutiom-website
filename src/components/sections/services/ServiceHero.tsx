import * as React from "react";
import Link from "next/link";
import Image from "next/image";

type Crumb = { name: string; href?: string };

type Props = {
  /** Two lines: the first is black, the second maroon. */
  lines: [string, string];
  description: string;
  image: string;
  imageAlt: string;
  ctaLabel: string;
  ctaHref: string;
  crumbs?: Crumb[];
  /** Long service names use a smaller title size. */
  compact?: boolean | "small";
  children?: React.ReactNode;
};

/** Same split hero as the About and Projects pages. */
export function ServiceHero({ lines, description, image, imageAlt, ctaLabel, ctaHref, crumbs, compact, children }: Props) {
  return (
    <section
      className="relative flex min-h-[760px] w-full flex-col justify-center overflow-hidden bg-[#F7C290] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-40"
    >
      <div className="mx-auto my-auto w-full max-w-[1300px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="flex flex-col items-start justify-center">
            {crumbs && (
              <nav
                aria-label="Breadcrumb"
                className="mb-6 flex flex-wrap items-center gap-2 font-[Urbanist] text-sm font-semibold text-black/60"
              >
                {crumbs.map((crumb, i) => (
                  <React.Fragment key={crumb.name}>
                    {i > 0 && <span>/</span>}
                    {crumb.href ? (
                      <Link href={crumb.href} className="transition-colors hover:text-[#800020]">
                        {crumb.name}
                      </Link>
                    ) : (
                      <span className="text-black">{crumb.name}</span>
                    )}
                  </React.Fragment>
                ))}
              </nav>
            )}

            <h1
              className={`select-none font-heading font-bold uppercase tracking-tight ${
                compact === "small"
                  ? "text-[32px] leading-[0.96] sm:text-[44px] lg:text-[50px] xl:text-[56px]"
                  : compact
                  ? "text-[40px] leading-[0.94] sm:text-[56px] lg:text-[64px] xl:text-[72px]"
                  : "text-[52px] leading-[0.88] sm:text-[72px] md:text-[92px] lg:text-[104px] xl:text-[120px]"
              }`}
              style={{ perspective: "1000px" }}
            >
              <span className="block overflow-hidden pb-1">
                <span className="hero-title-line block text-black">{lines[0]}</span>
              </span>
              {" "}
              <span className="block overflow-hidden pt-1">
                <span className="hero-title-line block text-[#800020]" style={{ "--i": 1 } as React.CSSProperties}>{lines[1]}</span>
              </span>
            </h1>

            <p className="hero-rise mb-8 mt-7 max-w-[380px] font-[Urbanist] text-[18px] font-medium leading-[145%] text-black/80 sm:mb-10 sm:mt-9 sm:max-w-[460px] sm:text-[20px]">
              {description}
            </p>

            <div className="hero-rise flex flex-wrap items-center gap-x-6 gap-y-4" style={{ "--d": "0.5s" } as React.CSSProperties}>
              <div className="optik-theme-button-wrap">
                <Link href={ctaHref} className="optik-btn-link-wrap group">
                  <div className="optik-btn-text-wrap-02">
                    <div className="optik-btn-text-box">
                      <span className="optik-button-text">{ctaLabel}</span>
                      <span className="optik-button-text">{ctaLabel}</span>
                    </div>
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#FCC995] transition-colors group-hover:bg-[#FFD700]">
                      <svg
                        width="13"
                        height="13"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#000000"
                        strokeWidth="2.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
              {children}
            </div>
          </div>

          <div className="hero-slide flex w-full justify-center lg:justify-end">
            <div className="relative aspect-[4/3] w-full max-w-[580px] overflow-hidden rounded-[14px] border border-black/10 bg-black/5 shadow-2xl sm:aspect-[1.15/1] md:rounded-[18px] lg:max-w-[620px]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                preload
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 620px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
