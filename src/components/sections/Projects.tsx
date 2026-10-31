import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MapPin, Tag } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative w-full bg-[#FAF9F6] py-24 lg:py-32 border-b border-[#E9E5DF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 border-l-2 border-[#800020] pl-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#800020]">
                OUR PORTFOLIO
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#242424]">
              Selected Projects
            </h2>
            <p className="text-base text-[#666666] font-light">
              A curated record of verified residential, defense infrastructure, and institutional developments engineered across Nigeria.
            </p>
          </div>
          <div className="hidden md:block">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[#777777]">
              {PROJECTS_DATA.length} Verified Landmarks
            </span>
          </div>
        </div>

        {/* Editorial Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS_DATA.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between border border-[#E9E5DF] bg-white transition-all duration-300 hover:border-[#800020]/50 hover:shadow-sm"
            >
              {/* Image Container with Consistent Aspect Ratio */}
              <div
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#F4F1EA]"
                style={{ position: "relative" }}
              >
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-[#FAF9F6]/95 backdrop-blur-sm px-3 py-1 border border-[#E9E5DF]">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#800020]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Meta and Description */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#E9E5DF] pb-3 text-xs text-[#777777]">
                  <div className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#800020]" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#800020]">
                    <Tag className="h-3 w-3" />
                    <span>{project.highlight}</span>
                  </div>
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#242424] group-hover:text-[#800020] transition-colors">
                  {project.name}
                </h3>

                <p className="text-xs sm:text-sm leading-relaxed text-[#666666]">
                  {project.description}
                </p>

                <div className="pt-2">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#800020] group-hover:text-[#630018]"
                  >
                    <span>Request Project Specifications</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

