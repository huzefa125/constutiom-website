"use client";

import * as React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { PROJECTS_DATA } from "@/data/projects";

const featured = PROJECTS_DATA.find((p) => p.id === "navy-barracks-atimbo") ?? PROJECTS_DATA[0];

export function ProjectsHero() {
  const root = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (!root.current) return;
    try {
      const mm = gsap.matchMedia();
      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          gsap
            .timeline({ defaults: { ease: "power4.out" } })
            .from(".pj-title-line", { yPercent: 85, rotateX: -40, autoAlpha: 0, duration: 1.1, stagger: 0.15 })
            .from(".pj-desc", { y: 30, autoAlpha: 0, duration: 0.9 }, "-=0.7")
            .from(".pj-meta", { y: 20, autoAlpha: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
            .from(".pj-img-box", { x: 50, autoAlpha: 0, scale: 0.96, duration: 1.3, ease: "power3.out" }, 0.2);
        },
        root,
      );
      return () => mm.revert();
    } catch {
      // GSAP unavailable during SSR / Fast Refresh
    }
  }, []);

  const byCategory = PROJECTS_DATA.reduce<Record<string, number>>((acc, p) => {
    acc[p.category] = (acc[p.category] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <section
      ref={root}
      className="relative w-full bg-[#F7C290] min-h-[92vh] flex flex-col justify-center pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 px-5 sm:px-8 lg:px-12 overflow-hidden"
    >
      <div className="max-w-[1300px] w-full mx-auto my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-20 items-center">
          <div className="flex flex-col items-start justify-center">
            <h1
              className="font-heading font-bold uppercase tracking-tight leading-[0.88] select-none text-[52px] sm:text-[72px] md:text-[92px] lg:text-[104px] xl:text-[120px]"
              style={{ perspective: "1000px" }}
            >
              <span className="block overflow-hidden pb-1">
                <span className="pj-title-line block text-black">BUILT</span>
              </span>
              <span className="block overflow-hidden pt-1">
                <span className="pj-title-line block text-[#800020]">ON SITE</span>
              </span>
            </h1>

            <p className="pj-desc font-[Urbanist] text-[18px] sm:text-[20px] font-medium leading-[145%] text-black/80 max-w-[380px] sm:max-w-[440px] mt-7 sm:mt-9">
              Barracks, schools, churches and homes. Every project here was built by our crews, in earth brick
              and steel, and photographed on site.
            </p>

            <div className="flex flex-wrap gap-2.5 mt-8 sm:mt-10">
              <span className="pj-meta rounded-full bg-black px-4 py-2 font-[Urbanist] text-xs font-bold uppercase tracking-[0.14em] text-[#FCC995]">
                {PROJECTS_DATA.length} projects
              </span>
              {Object.entries(byCategory).map(([cat, n]) => (
                <span
                  key={cat}
                  className="pj-meta rounded-full border border-black/25 px-4 py-2 font-[Urbanist] text-xs font-bold uppercase tracking-[0.14em] text-black"
                >
                  {n} {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="pj-img-box w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] lg:max-w-[620px]">
              <div className="relative w-full aspect-[4/3] sm:aspect-[1.15/1] rounded-[14px] md:rounded-[18px] overflow-hidden shadow-2xl bg-black/5 border border-black/10">
                <Image
                  src={featured.image}
                  alt={featured.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 620px"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                />
              </div>
              <div className="absolute -bottom-5 left-5 sm:left-8 rounded-[10px] bg-black px-5 py-3 shadow-xl">
                <div className="font-[Urbanist] text-[11px] font-bold uppercase tracking-[0.18em] text-[#FFD700]">
                  On site
                </div>
                <div className="font-heading text-[16px] font-semibold uppercase leading-tight text-[#FCC995]">
                  {featured.name}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
