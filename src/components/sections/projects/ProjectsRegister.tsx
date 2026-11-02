"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA, type ProjectItem } from "@/data/projects";

type Filter = "All" | ProjectItem["category"];
const FILTERS: Filter[] = ["All", "Infrastructure", "Residential", "Commercial"];

export function ProjectsRegister() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const list = PROJECTS_DATA.filter((p) => filter === "All" || p.category === filter);
  const [activeId, setActiveId] = React.useState(PROJECTS_DATA[0].id);
  const active = list.find((p) => p.id === activeId) ?? list[0];

  return (
    <section className="w-full bg-[#f7f7f7] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-[6px]">
              <div className="h-2 w-2 rounded-full bg-[#800020]" />
              <div className="font-[Urbanist] text-sm font-semibold uppercase tracking-[1.92px] text-[#800020]">
                Project register
              </div>
            </div>
            <h2 className="font-serif max-w-[640px] text-[30px] uppercase leading-[0.98] text-black sm:text-[36px] lg:text-[46px] xl:text-[56px]">
              Pick a job, <span className="text-[#800020]">see the site</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className={`cursor-pointer rounded-full border px-5 py-2.5 font-[Urbanist] text-xs font-bold uppercase tracking-[0.14em] transition-colors ${
                  filter === f
                    ? "border-[#800020] bg-[#800020] text-white"
                    : "border-black/20 bg-white text-black hover:border-[#800020] hover:text-[#800020]"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <ul className="lg:col-span-7">
            {list.map((p, i) => {
              const isActive = active?.id === p.id;
              return (
                <li key={p.id} className="border-t border-black/15 last:border-b">
                  <a
                    href={`#${p.id}`}
                    onMouseEnter={() => setActiveId(p.id)}
                    onFocus={() => setActiveId(p.id)}
                    className="group flex items-center gap-4 py-5 sm:gap-8 sm:py-7"
                  >
                    <span
                      className={`w-8 font-heading text-[18px] font-semibold transition-colors sm:w-12 sm:text-[22px] ${
                        isActive ? "text-[#800020]" : "text-black/25"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1">
                      <span
                        className={`block font-heading text-[22px] font-semibold uppercase leading-[1] transition-all duration-300 sm:text-[30px] lg:text-[34px] ${
                          isActive ? "translate-x-2 text-[#800020]" : "text-black"
                        }`}
                      >
                        {p.name}
                      </span>
                      <span className="mt-2 block font-[Urbanist] text-sm font-semibold text-black/55">
                        {p.location} · {p.category}
                      </span>
                    </span>
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isActive ? "rotate-0 bg-[#FFD700] text-[#800020]" : "-rotate-45 bg-black text-white"
                      }`}
                    >
                      <ArrowUpRight className="h-5 w-5" />
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-28">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px] bg-[#e9e9e9] shadow-[0_24px_50px_-24px_rgba(0,0,0,0.45)]">
                {list.map((p) => (
                  <Image
                    key={p.id}
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="480px"
                    className={`object-cover transition-opacity duration-500 ${
                      active?.id === p.id ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
                {active && (
                  <div className="absolute inset-x-4 bottom-4 rounded-[12px] bg-white/95 px-5 py-4 backdrop-blur">
                    <div className="font-[Urbanist] text-[11px] font-bold uppercase tracking-[0.18em] text-[#800020]">
                      {active.highlight}
                    </div>
                    <div className="mt-1 font-[Urbanist] text-sm font-medium leading-[140%] text-black/70">
                      {active.description}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
