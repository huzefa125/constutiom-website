"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight, Minus } from "lucide-react";
import { PROJECTS_DATA, type ProjectItem } from "@/data/projects";

type Filter = "All" | ProjectItem["category"];
const FILTERS: Filter[] = ["All", "Infrastructure", "Residential", "Commercial"];
const PAGE_SIZE = 4;

export function ProjectsWorks() {
  const [filter, setFilter] = React.useState<Filter>("All");
  const [page, setPage] = React.useState(1);
  const [openId, setOpenId] = React.useState<string | null>(null);
  const top = React.useRef<HTMLDivElement>(null);

  const list = PROJECTS_DATA.filter((p) => filter === "All" || p.category === filter);
  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  const visible = list.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const count = (f: Filter) =>
    f === "All" ? PROJECTS_DATA.length : PROJECTS_DATA.filter((p) => p.category === f).length;

  const goTo = (n: number) => {
    setPage(Math.min(pages, Math.max(1, n)));
    setOpenId(null);
    top.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="w-full bg-[#f7f7f7] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div ref={top} className="mx-auto w-full max-w-[1300px] scroll-mt-28">
        {/* Heading */}
        <div className="flex flex-col gap-6 border-b border-black/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-[6px]">
              <div className="h-2 w-2 rounded-full bg-[#800020]" />
              <div className="font-[Urbanist] text-sm font-semibold uppercase tracking-[1.92px] text-[#800020]">
                Project register
              </div>
            </div>
            <h2 className="font-serif max-w-[640px] text-[30px] uppercase leading-[0.98] text-black sm:text-[36px] lg:text-[46px] xl:text-[56px]">
              Works built to <span className="text-[#800020]">last</span>
            </h2>
          </div>
          <p className="max-w-[360px] font-[Urbanist] text-base font-medium leading-[150%] text-black/70">
            Through earth brick, masonry and structural steel, we build environments that honour materials,
            climate and the people who use them.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 pt-10 lg:grid-cols-12 lg:gap-12">
          {/* Filter */}
          <aside className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              <div className="mb-4 font-[Urbanist] text-xs font-bold uppercase tracking-[0.18em] text-black/50">
                Filter
              </div>
              <ul className="flex flex-wrap gap-2 lg:flex-col lg:gap-0" aria-label="Filter projects">
                {FILTERS.map((f) => {
                  const active = filter === f;
                  return (
                    <li key={f} className="lg:border-t lg:border-black/15 lg:last:border-b">
                      <button
                        aria-pressed={active}
                        onClick={() => {
                          setFilter(f);
                          setPage(1);
                          setOpenId(null);
                        }}
                        className={`flex w-full cursor-pointer items-center justify-between gap-3 rounded-full border px-4 py-2 font-[Urbanist] text-xs font-bold uppercase tracking-[0.14em] transition-colors lg:rounded-none lg:border-0 lg:px-0 lg:py-3.5 ${
                          active
                            ? "border-[#800020] bg-[#800020] text-white lg:bg-transparent lg:text-[#800020]"
                            : "border-black/20 text-black hover:border-[#800020] hover:text-[#800020]"
                        }`}
                      >
                        <span>{f}</span>
                        <span className={active ? "text-[#FFD700] lg:text-[#800020]" : "text-black/60"}>
                          {String(count(f)).padStart(2, "0")}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </aside>

          {/* Rows */}
          <div className="lg:col-span-10">
            {visible.map((p) => {
              const [lead, second, ...more] = p.photos;
              const open = openId === p.id;
              const specs: [string, string][] = [
                ["Category", p.category],
                ["Method", p.highlight],
                ["Location", p.location],
              ];
              return (
                <article key={p.id} id={p.id} className="scroll-mt-28 border-b border-black/15 py-8 first:pt-0 sm:py-10">
                  <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-12">
                    <div
                      className={`relative aspect-[16/11] overflow-hidden rounded-[14px] bg-[#e9e9e9] ${
                        second ? "md:col-span-8" : "md:col-span-12"
                      }`}
                    >
                      <Image
                        src={lead}
                        alt={p.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 760px"
                        className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                      />
                    </div>
                    {second && (
                      <div className="relative hidden aspect-[16/11] overflow-hidden rounded-[14px] bg-[#e9e9e9] md:col-span-4 md:block md:aspect-auto">
                        <Image
                          src={second}
                          alt={`${p.name} site photo 2`}
                          fill
                          sizes="380px"
                          className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                        />
                      </div>
                    )}
                  </div>

                  <div className="mt-5 flex items-start justify-between gap-4">
                    <h3 className="font-heading text-[22px] font-semibold uppercase leading-[1] text-black sm:text-[28px]">
                      {p.name}
                    </h3>
                    <button
                      type="button"
                      onClick={() => setOpenId(open ? null : p.id)}
                      aria-expanded={open}
                      className="group flex shrink-0 cursor-pointer items-center gap-2 border-b border-black pb-[2px] font-[Urbanist] text-xs font-bold uppercase tracking-[0.14em] text-black transition-colors hover:border-[#800020] hover:text-[#800020]"
                    >
                      {open ? "Close" : "View detail"}
                      {open ? (
                        <Minus className="h-3.5 w-3.5" />
                      ) : (
                        <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      )}
                    </button>
                  </div>

                  <dl className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-3">
                    {specs.map(([k, v]) => (
                      <div key={k}>
                        <dt className="font-[Urbanist] text-[11px] font-bold uppercase tracking-[0.18em] text-[#800020]">
                          {k}
                        </dt>
                        <dd className="mt-1 font-[Urbanist] text-[15px] font-semibold text-black">{v}</dd>
                      </div>
                    ))}
                  </dl>

                  {open && (
                    <div className="mt-8 rounded-[14px] bg-[#F7C290] p-5 sm:p-8">
                      <p className="max-w-[720px] font-[Urbanist] text-[17px] font-medium leading-[150%] text-black/80">
                        {p.description}
                      </p>
                      {p.client && (
                        <p className="mt-4 font-[Urbanist] text-sm font-bold uppercase tracking-[0.16em] text-[#800020]">
                          Client · <span className="text-black">{p.client}</span>
                        </p>
                      )}
                      {more.length > 0 && (
                        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                          {more.slice(0, 3).map((src, n) => (
                            <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-[10px] bg-black/5">
                              <Image
                                src={src}
                                alt={`${p.name} site photo ${n + 3}`}
                                fill
                                sizes="(max-width: 640px) 50vw, 300px"
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </article>
              );
            })}

            {/* Pagination */}
            {pages > 1 && (
              <nav className="mt-10 flex items-center justify-center gap-5" aria-label="Pagination">
                <button
                  type="button"
                  onClick={() => goTo(page - 1)}
                  disabled={page === 1}
                  aria-label="Previous page"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/20 text-black transition-colors hover:border-[#800020] hover:bg-[#800020] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-black/20 disabled:hover:bg-transparent disabled:hover:text-black"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-4 font-[Urbanist] text-sm font-bold">
                  {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
                    <button
                      key={n}
                      type="button"
                      onClick={() => goTo(n)}
                      aria-current={n === page ? "page" : undefined}
                      className={`cursor-pointer transition-colors ${
                        n === page ? "text-[#800020] underline underline-offset-4" : "text-black/60 hover:text-black"
                      }`}
                    >
                      {n}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => goTo(page + 1)}
                  disabled={page === pages}
                  aria-label="Next page"
                  className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/20 text-black transition-colors hover:border-[#FFD700] hover:bg-[#FFD700] hover:text-[#800020] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-black/20 disabled:hover:bg-transparent disabled:hover:text-black"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </nav>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
