import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="bg-[#f7f7f7] px-[10px] py-[30px] sm:px-5 lg:py-[50px]">
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-[6px]">
              <div className="h-2 w-2 rounded-full bg-black" />
              <div className="font-[Urbanist] text-sm font-semibold uppercase leading-[150%] tracking-[1.92px] text-black">
                Our portfolio
              </div>
            </div>
            <h2 className="font-serif max-w-[640px] text-[30px] uppercase leading-[0.98] text-black sm:text-[36px] lg:text-[46px] xl:text-[56px]">
              Selected work we are <span className="text-[#800020]">proud</span> of
            </h2>
          </div>

          <div className="flex max-w-[420px] flex-col items-start gap-5">
            <p className="font-[Urbanist] text-lg font-medium leading-[145%] text-black/70">
              Residential, defence and institutional developments engineered across Nigeria, built to perform for
              decades.
            </p>
            <Link
              href="/projects"
              className="group flex items-center gap-[10px] border-b border-black pb-[2px] transition-colors hover:border-[#800020] hover:text-[#800020]"
            >
              <span className="font-serif text-[16px] font-semibold uppercase leading-none lg:text-[18px]">
                View all projects
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Staggered two-column grid */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
          {PROJECTS_DATA.slice(0, 4).map((project, index) => (
            <Link
              key={project.id}
              href="/projects"
              className={`group block ${index % 2 === 1 ? "md:mt-16" : ""}`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] bg-[#e9e9e9]">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 640px"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-4 py-1.5 font-[Urbanist] text-xs font-bold uppercase tracking-[0.14em] text-[#800020]">
                  {project.category}
                </span>
                <span
                  aria-hidden="true"
                  className="absolute right-4 top-4 flex h-12 w-12 -rotate-45 items-center justify-center rounded-full bg-[#FFD700] text-[#800020] opacity-0 transition-all duration-500 group-hover:rotate-0 group-hover:opacity-100"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>

              <div className="mt-5 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-[24px] uppercase leading-[0.98] text-black transition-colors group-hover:text-[#800020] sm:text-[28px] lg:text-[32px]">
                    {project.name}
                  </h3>
                  <span className="font-serif text-[24px] leading-none text-black/60 lg:text-[28px]">
                    0{index + 1}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-5 gap-y-1 font-[Urbanist] text-sm font-semibold text-black/60">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-[#800020]" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FFD700]" />
                    {project.highlight}
                  </span>
                </div>

                <p className="max-w-[560px] font-[Urbanist] text-base font-medium leading-[145%] text-black/65">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
