"use client";

import * as React from "react";
import Image from "next/image";
import { whenActive } from "@/lib/gsap";

const STATEMENT =
  "On every site we show how earth brick, masonry and structural steel come together, from the first foundation to the last coat of finish, so you can see the quality and bring your own project to life.";
const HIGHLIGHT = new Set(["earth", "brick,", "structural", "steel", "quality"]);

const SECOND =
  "Our goal is to offer a complete building service: design-led, durable, comfortable in the climate, and delivered by our own crews across Nigeria.";

export function ProjectsIntro() {
  const root = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const el = root.current;
    if (!el) return;

    return whenActive(({ gsap }) => {
      const mm = gsap.matchMedia();
      mm.add(
        "(prefers-reduced-motion: no-preference)",
        () => {
          // words light up one by one as the section scrolls through the viewport
          gsap.fromTo(
            ".pj-word",
            { opacity: 0.15 },
            {
              opacity: 1,
              ease: "none",
              stagger: 0.1,
              scrollTrigger: {
                trigger: ".pj-statement",
                start: "top 80%",
                end: "bottom 45%",
                scrub: 0.5,
              },
            },
          );
          gsap.from(".pj-second", {
            y: 40,
            autoAlpha: 0,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: { trigger: ".pj-second", start: "top 88%" },
          });
          gsap.from(".pj-intro-img", {
            clipPath: "inset(0 0 100% 0)",
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: { trigger: ".pj-intro-img", start: "top 85%" },
          });
        },
        el,
      );
      return () => mm.revert();
    });
  }, []);

  return (
    <section id="project-intro" ref={root} className="w-full bg-[#f7f7f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-8 lg:col-span-4">
          <p className="max-w-[320px] font-[Urbanist] text-[17px] font-medium leading-[150%] text-black/80">
            Ipile Earth offers an all-in-one service for the completion of your construction project.
          </p>
          <div className="pj-intro-img relative aspect-[4/3] w-full max-w-[440px] overflow-hidden rounded-[14px] bg-[#e9e9e9]">
            <Image
              src="/images/gallery/navy-school-akpabuyo/navy-school-akpabuyo-03.jpg"
              alt="Covered walkways at Navy School, Akpabuyo"
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="pj-statement font-[Urbanist] text-[28px] font-medium leading-[1.2] tracking-[-0.01em] text-black sm:text-[36px] lg:text-[46px]">
            {STATEMENT.split(" ").map((w, i) => (
              <span
                key={i}
                className={`pj-word inline-block pr-[0.25em] ${HIGHLIGHT.has(w) ? "text-[#800020]" : ""}`}
              >
                {w}
              </span>
            ))}
          </p>
          <p className="pj-second mt-10 max-w-[620px] font-[Urbanist] text-[20px] font-medium leading-[1.35] text-black/70 sm:text-[24px]">
            {SECOND}
          </p>
        </div>
      </div>
    </section>
  );
}
