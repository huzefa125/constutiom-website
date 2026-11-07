"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useSyncExternalStore } from "react";

import { whenActive } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
const subscribeMotion = (onChange: () => void) => {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
};

export interface StickyCardData {
  id: number | string;
  image: string;
  alt: string;
  /** Small number or tag, e.g. "01 / 05". */
  label?: string;
  /** Short line describing a photo-only card. */
  caption?: string;
  /** With a title the card becomes a text panel + photo; without one it is photo-only. */
  title?: string;
  eyebrow?: string;
  description?: string;
  points?: string[];
  href?: string;
  linkText?: string;
}

function CardBody({ card }: { card: StickyCardData }) {
  if (!card.title) {
    return (
      <>
        <Image src={card.image} alt={card.alt} fill sizes="(max-width: 1300px) 100vw, 1300px" className="object-cover" />
        {(card.caption || card.label) && (
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-black/75 to-transparent p-5 pt-20 sm:p-7 sm:pt-24">
            {card.caption && (
              <p className="max-w-[640px] font-[Urbanist] text-base font-semibold leading-[135%] text-white sm:text-lg">{card.caption}</p>
            )}
            {card.label && (
              <span className="shrink-0 font-[Urbanist] text-sm font-bold tabular-nums text-white/80">{card.label}</span>
            )}
          </div>
        )}
      </>
    );
  }

  return (
    <div className="flex h-full flex-col lg:grid lg:grid-cols-12">
      <div className="relative min-h-0 flex-1 lg:order-2 lg:col-span-7 lg:h-full">
        <Image src={card.image} alt={card.alt} fill sizes="(max-width: 1024px) 100vw, 760px" className="object-cover" />
      </div>
      <div className="flex shrink-0 flex-col justify-between gap-5 bg-white p-6 text-black sm:p-8 lg:order-1 lg:col-span-5 lg:h-full lg:p-10">
        <div>
          <div className="flex items-baseline justify-between gap-4 font-[Urbanist] text-xs font-semibold uppercase tracking-[2px] text-[#800020]">
            <span>{card.eyebrow}</span>
            <span className="shrink-0 tabular-nums tracking-normal">{card.label}</span>
          </div>
          <h3 className="mt-4 font-heading text-[28px] font-bold uppercase leading-[0.98] tracking-tight sm:text-[34px] lg:mt-5 lg:text-[40px]">
            {card.title}
          </h3>
          {card.description && (
            <p className="mt-3 font-[Urbanist] text-[15px] font-medium leading-[150%] text-black/70 lg:mt-4 lg:text-base">
              {card.description}
            </p>
          )}
        </div>
        <div>
          {card.points && (
            <ul className="mb-6 hidden border-t border-black/10 lg:block">
              {card.points.map((point) => (
                <li key={point} className="border-b border-black/10 py-2.5 font-[Urbanist] text-sm font-medium text-black/80">
                  {point}
                </li>
              ))}
            </ul>
          )}
          {card.href && (
            <Link
              href={card.href}
              className="group inline-flex items-center gap-2 font-[Urbanist] text-sm font-bold uppercase tracking-wider text-[#800020]"
            >
              {card.linkText ?? "View service"}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Scroll-pinned card stack, adapted from Skiper UI 17 (StickyCard_002).
 * The section pins while each card slides over the last, which shrinks and tilts away.
 * With reduced motion enabled the cards render as a plain stacked list instead.
 */
export function StickyCard002({ cards, className }: { cards: StickyCardData[]; className?: string }) {
  const container = useRef<HTMLDivElement>(null);
  const pinned = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isStatic = useSyncExternalStore(
    subscribeMotion,
    () => window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );

  useEffect(() => {
    if (isStatic) return;

    return whenActive(({ gsap }) => {
      const els = cardRefs.current.slice(0, cards.length);
      els.forEach((el, i) => gsap.set(el, { y: i === 0 ? "0%" : "120%", scale: 1 }));

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: pinned.current,
          start: "top top",
          end: () => `+=${window.innerHeight * (cards.length - 1)}`,
          pin: true,
          scrub: 0.5,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 0; i < els.length - 1; i++) {
        timeline.to(els[i], { scale: 0.93, duration: 1, ease: "none" }, i);
        timeline.to(els[i + 1], { y: "0%", duration: 1, ease: "none" }, i);
      }

      // Only this stack's trigger is removed: the stock version killed every ScrollTrigger on the page.
      return () => {
        timeline.scrollTrigger?.kill();
        timeline.kill();
      };
    });
  }, [isStatic, cards.length]);

  if (isStatic) {
    return (
      <div className={cn("mx-auto flex w-full max-w-[1300px] flex-col gap-4 px-3 py-6 lg:px-8", className)}>
        {cards.map((card) => (
          <div key={card.id} className="relative h-[620px] overflow-hidden rounded-[14px] border border-black/10 bg-white">
            <CardBody card={card} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div ref={container} className={cn("relative w-full", className)}>
      <div ref={pinned} className="relative flex h-svh w-full items-center justify-center overflow-hidden px-5 py-6 sm:px-8 lg:px-12">
        <div className="relative h-full max-h-[600px] w-full max-w-[1300px]">
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[i] = el;
              }}
              style={i === 0 ? undefined : { transform: "translateY(120%)" }}
              className="absolute inset-0 overflow-hidden rounded-[14px] border border-black/10 bg-white shadow-xl md:rounded-[18px]"
            >
              <CardBody card={card} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Skiper 17 StickyCard_002
 * Original by Skiper UI (https://skiper-ui.com), author @gurvinder-singh02.
 * Free to use and modify; attribution to Skiper UI is required for the free version.
 */
