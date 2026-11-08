import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS_DATA } from "@/data/projects";

const featured = PROJECTS_DATA.find((p) => p.id === "navy-barracks-atimbo") ?? PROJECTS_DATA[0];

export function ProjectsHero() {
  return (
    <section
      className="relative flex min-h-[760px] w-full flex-col justify-center overflow-hidden bg-[#F7C290] px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-12 lg:pb-24 lg:pt-40"
    >
      <div className="mx-auto my-auto w-full max-w-[1300px]">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-14 xl:gap-20">
          <div className="flex flex-col items-start justify-center">
            <h1
              className="select-none font-heading text-[40px] font-bold uppercase leading-[0.94] tracking-tight sm:text-[56px] lg:text-[64px] xl:text-[72px]"
              style={{ perspective: "1000px" }}
            >
              <span className="block overflow-hidden pb-1">
                <span className="hero-title-line block text-black">CONSTRUCTION PROJECTS</span>
              </span>
              {" "}
              <span className="block overflow-hidden pt-1">
                <span className="hero-title-line block text-[#800020]" style={{ "--i": 1 } as React.CSSProperties}>ACROSS NIGERIA</span>
              </span>
            </h1>

            <p className="hero-rise mb-8 mt-7 max-w-[380px] font-[Urbanist] text-[18px] font-medium leading-[145%] text-black/80 sm:mb-10 sm:mt-9 sm:max-w-[440px] sm:text-[20px]">
              Barracks, schools, churches and homes. Every project here was built by our crews, in earth brick and
              steel, and photographed on site.
            </p>

            <div className="hero-rise" style={{ "--d": "0.5s" } as React.CSSProperties}>
              <div className="optik-theme-button-wrap">
                <Link href="#project-intro" className="optik-btn-link-wrap group">
                  <div className="optik-btn-text-wrap-02">
                    <div className="optik-btn-text-box">
                      <span className="optik-button-text">VIEW OUR WORK</span>
                      <span className="optik-button-text">VIEW OUR WORK</span>
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
                        className="rotate-90 transition-transform duration-300 group-hover:translate-y-0.5"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className="hero-slide flex w-full justify-center lg:justify-end">
            <div className="relative aspect-[4/3] w-full max-w-[580px] overflow-hidden rounded-[14px] border border-black/10 bg-black/5 shadow-2xl sm:aspect-[1.15/1] md:rounded-[18px] lg:max-w-[620px]">
              <Image
                src={featured.image}
                alt={featured.name}
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
