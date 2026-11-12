"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { whenActive, type GsapLib } from "@/lib/gsap";

const CARDS = [
  { src: "/images/projects/navy-barracks-kuje/navy-barracks-kuje-01.webp", alt: "Compressed Earth Brick building, Kuje" },
  { src: "/images/projects/navy-barracks-atimbo/navy-barracks-atimbo-03.webp", alt: "Blue-roofed CEB building, Atimbo" },
  { src: "/images/projects/navy-barracks-kuje/navy-barracks-kuje-05.webp", alt: "Orange CEB bungalow, Kuje" },
  { src: "/images/projects/navy-school-akpabuyo/navy-school-akpabuyo-02.webp", alt: "School building, Akpabuyo" },
];

// Resting pose for each depth in the stack (0 = front)
const POSES = [
  { x: 0, y: 0, rotate: 0, scale: 1 },
  { x: -14, y: 8, rotate: -6, scale: 0.97 },
  { x: 16, y: -6, rotate: 7, scale: 0.94 },
  { x: -22, y: 12, rotate: -11, scale: 0.91 },
];

const MARQUEE_TEXT = "Construction & Infrastructure";

export function Showcase() {
  const root = React.useRef<HTMLElement>(null);
  const gsapRef = React.useRef<GsapLib["gsap"] | null>(null);
  const cardRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const order = React.useRef<number[]>(CARDS.map((_, i) => i)); // order[depth] = card index
  const busy = React.useRef(false);
  const reduced = React.useRef(false);
  const timer = React.useRef<ReturnType<typeof setInterval> | null>(null);

  const place = React.useCallback((animated: boolean) => {
    const gsap = gsapRef.current;
    if (!gsap) return;
    order.current.forEach((cardIndex, depth) => {
      const el = cardRefs.current[cardIndex];
      if (!el) return;
      const pose = POSES[depth];
      const vars = { ...pose, opacity: 1, zIndex: CARDS.length - depth };
      if (animated && !reduced.current) {
        gsap.to(el, { ...vars, duration: 0.7, ease: "power3.out", overwrite: "auto" });
      } else {
        gsap.set(el, vars);
      }
    });
  }, []);

  const go = React.useCallback(
    (dir: 1 | -1) => {
      const gsap = gsapRef.current;
      if (busy.current || !gsap) return;
      busy.current = true;
      const o = order.current;

      if (dir === 1) {
        // front card flies out, then drops to the back
        const leaving = o[0];
        const el = cardRefs.current[leaving];
        const finish = () => {
          order.current = [...o.slice(1), leaving];
          if (el) gsap.set(el, { opacity: 0, x: 0, y: 0 });
          place(true);
          busy.current = false;
        };
        if (el && !reduced.current) {
          gsap.to(el, { x: 340, rotate: 22, opacity: 0, duration: 0.5, ease: "power2.in", onComplete: finish });
        } else {
          finish();
        }
      } else {
        // back card returns to the front
        const returning = o[o.length - 1];
        const el = cardRefs.current[returning];
        order.current = [returning, ...o.slice(0, -1)];
        if (el) gsap.set(el, { x: -340, rotate: -22, opacity: 0, zIndex: CARDS.length + 1 });
        place(true);
        window.setTimeout(() => {
          busy.current = false;
        }, reduced.current ? 0 : 500);
      }
    },
    [place],
  );

  const restartTimer = React.useCallback(() => {
    if (timer.current) clearInterval(timer.current);
    if (reduced.current) return;
    timer.current = setInterval(() => go(1), 3800);
  }, [go]);

  React.useEffect(() => {
    const stop = whenActive(({ gsap }) => {
      gsapRef.current = gsap;
      place(false);
      restartTimer();
    });
    return () => {
      stop();
      if (timer.current) clearInterval(timer.current);
    };
  }, [place, restartTimer]);

  const manual = (dir: 1 | -1) => {
    go(dir);
    restartTimer();
  };

  const textGroup = (key: string) => (
    <div key={key} className="flex shrink-0 items-center">
      {[0, 1, 2].map((i) => (
        <span key={i} className="pr-[0.5em] font-serif text-[22vw] font-bold uppercase leading-[0.9] text-black sm:text-[17vw] lg:text-[13vw]">
          {MARQUEE_TEXT}
        </span>
      ))}
    </div>
  );

  return (
    <section ref={root} className="relative overflow-hidden bg-[#f7f7f7] py-[30px] lg:py-[50px]" aria-label="Project showcase">
      <div className="relative flex h-[300px] items-center justify-center sm:h-[400px] lg:h-[480px]">
        {/* Giant scrolling text */}
        <div className="pointer-events-none absolute inset-0 flex items-center overflow-hidden" aria-hidden="true">
          <div className="marquee-track flex w-max items-center" style={{ animationDuration: "40s" }}>
            {[textGroup("a"), textGroup("b")]}
          </div>
        </div>

        {/* Card stack */}
        <div
          className="relative z-10 aspect-[3/4] w-[170px] sm:w-[220px] lg:w-[270px]"
          onMouseEnter={() => timer.current && clearInterval(timer.current)}
          onMouseLeave={restartTimer}
        >
          {CARDS.map((card, i) => (
            <div
              key={card.src}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              onClick={() => manual(1)}
              style={{
                zIndex: CARDS.length - i,
                transform: `translate(${POSES[i].x}px, ${POSES[i].y}px) rotate(${POSES[i].rotate}deg) scale(${POSES[i].scale})`,
              }}
              className="absolute inset-0 cursor-pointer overflow-hidden rounded-[10px] bg-[#e9e9e9] shadow-[0_24px_50px_-20px_rgba(0,0,0,0.45)] will-change-transform"
            >
              <Image src={card.src} alt={card.alt} fill sizes="270px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <div className="relative z-20 flex items-center justify-center gap-4 pt-6">
        <button
          type="button"
          onClick={() => manual(-1)}
          aria-label="Previous project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black transition-colors hover:border-[#800020] hover:bg-[#800020] hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          onClick={() => manual(1)}
          aria-label="Next project"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-black/20 text-black transition-colors hover:border-[#FFD700] hover:bg-[#FFD700] hover:text-[#800020]"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
