"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";

// One slide per site photo, across every project
const SLIDES = PROJECTS_DATA.flatMap((p) =>
  p.photos.map((src, i) => ({ src, id: p.id, name: p.name, location: p.location, n: i + 1, total: p.photos.length })),
);

export function ProjectsFeatured() {
  const track = React.useRef<HTMLDivElement>(null);
  const drag = React.useRef({ down: false, moved: false, startX: 0, startLeft: 0 });
  const [progress, setProgress] = React.useState(0);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  const sync = React.useCallback(() => {
    const el = track.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
  }, []);

  React.useEffect(() => {
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, [sync]);

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth / 3 + 8), behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || !track.current) return;
    drag.current = { down: true, moved: false, startX: e.clientX, startLeft: track.current.scrollLeft };
  };
  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current;
    if (!d.down || !track.current) return;
    const dx = e.clientX - d.startX;
    if (Math.abs(dx) > 4) d.moved = true;
    if (d.moved) {
      track.current.style.scrollSnapType = "none";
      track.current.style.scrollBehavior = "auto";
      track.current.scrollLeft = d.startLeft - dx;
    }
  };
  const endDrag = () => {
    const el = track.current;
    drag.current.down = false;
    if (el) {
      el.style.scrollSnapType = "";
      el.style.scrollBehavior = "";
    }
    // let the click handler see `moved` before it resets
    window.setTimeout(() => {
      drag.current.moved = false;
    }, 0);
  };

  return (
    <section className="w-full bg-[#f7f7f7] px-5 pb-16 sm:px-8 sm:pb-20 lg:px-12 lg:pb-28">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="flex flex-col gap-6 border-b border-black/15 pb-10 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-serif max-w-[720px] text-[30px] uppercase leading-[0.98] text-black sm:text-[36px] lg:text-[46px] xl:text-[56px]">
            Defining quality through our <span className="text-[#800020]">featured projects</span>
          </h2>
          <p className="max-w-[320px] font-[Urbanist] text-base font-medium leading-[150%] text-black/70 lg:text-right">
            Drag or swipe through {SLIDES.length} site photos, from barracks to campuses and homes.
          </p>
        </div>

        <div
          ref={track}
          onScroll={sync}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className="mt-10 flex cursor-grab touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth select-none active:cursor-grabbing [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {SLIDES.map((s) => (
            <a
              key={s.src}
              href={`#${s.id}`}
              draggable={false}
              onClick={(e) => {
                if (drag.current.moved) e.preventDefault();
              }}
              className="group block w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-2rem)/3)]"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[14px] bg-[#e9e9e9]">
                <Image
                  src={s.src}
                  alt={`${s.name} site photo ${s.n}`}
                  fill
                  draggable={false}
                  sizes="(max-width: 640px) 78vw, (max-width: 1024px) 46vw, 420px"
                  className="pointer-events-none object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1 font-[Urbanist] text-[11px] font-bold uppercase tracking-[0.14em] text-[#800020]">
                  {String(s.n).padStart(2, "0")} / {String(s.total).padStart(2, "0")}
                </span>
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 font-[Urbanist] text-xs font-bold uppercase tracking-[0.14em]">
                <span className="text-black">{s.name}</span>
                <span className="shrink-0 border-b border-black pb-[2px] text-black transition-colors group-hover:border-[#800020] group-hover:text-[#800020]">
                  View project ↗
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-8 h-[3px] w-full overflow-hidden rounded-full bg-black/10" aria-hidden="true">
          <div
            className="h-full rounded-full bg-[#800020] transition-[width] duration-150"
            style={{ width: `${Math.max(8, progress * 100)}%` }}
          />
        </div>

        {/* Arrows (below the carousel) */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scroll(-1)}
            disabled={atStart}
            aria-label="Previous photos"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/20 text-black transition-colors hover:border-[#800020] hover:bg-[#800020] hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-black/20 disabled:hover:bg-transparent disabled:hover:text-black"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            disabled={atEnd}
            aria-label="Next photos"
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-black/20 text-black transition-colors hover:border-[#FFD700] hover:bg-[#FFD700] hover:text-[#800020] disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:border-black/20 disabled:hover:bg-transparent disabled:hover:text-black"
          >
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
