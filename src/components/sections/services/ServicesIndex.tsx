"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { ServiceItem } from "@/data/services";

/**
 * Editorial service list. Desktop: big numbered rows, hovering a row swaps the
 * sticky preview image on the right. Mobile: stacked image cards.
 */
export function ServicesIndex({ services }: { services: ServiceItem[] }) {
  const [active, setActive] = React.useState(0);

  return (
    <section className="w-full bg-[#f7f7f7] px-5 py-16 sm:px-8 sm:py-24 lg:px-12 lg:py-28">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Rows */}
        <ul className="lg:col-span-7" onMouseLeave={() => setActive(0)}>
          {services.map((s, i) => (
            <li key={s.id} className="border-t border-black/15 last:border-b">
              <Link
                href={s.link}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className="group block py-7 lg:py-10"
              >
                <div className="flex items-start gap-5 lg:gap-8">
                  <span className="pt-2 font-[Urbanist] text-sm font-bold tabular-nums text-[#800020]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2
                      className={`font-serif text-[28px] uppercase leading-[1] transition-colors duration-300 sm:text-[34px] lg:text-[44px] ${
                        active === i ? "text-[#800020]" : "text-black lg:text-black/45"
                      }`}
                    >
                      {s.title}
                    </h2>
                    <p className="mt-2 font-[Urbanist] text-xs font-bold uppercase tracking-[0.16em] text-black/50">
                      {s.category}
                    </p>

                    {/* Mobile image */}
                    <div className="relative mt-5 aspect-[16/10] w-full overflow-hidden rounded-[14px] bg-[#e9e9e9] lg:hidden">
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="(max-width: 1024px) 90vw, 0px"
                        className="object-cover"
                      />
                    </div>

                    <p
                      className={`mt-4 max-w-[560px] font-[Urbanist] text-base font-medium leading-[150%] text-black/65 transition-all duration-500 lg:overflow-hidden ${
                        active === i ? "lg:max-h-40 lg:opacity-100" : "lg:max-h-0 lg:opacity-0"
                      }`}
                    >
                      {s.description}
                    </p>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 lg:h-14 lg:w-14 ${
                      active === i
                        ? "border-[#800020] bg-[#800020] text-white"
                        : "border-black/20 text-black group-hover:border-[#800020]"
                    }`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        {/* Sticky preview (desktop) */}
        <div className="hidden lg:col-span-5 lg:block">
          <div className="sticky top-28">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px] bg-[#e9e9e9]">
              {services.map((s, i) => (
                <Image
                  key={s.id}
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="480px"
                  className={`object-cover transition-all duration-700 ease-out ${
                    active === i ? "scale-100 opacity-100" : "scale-105 opacity-0"
                  }`}
                />
              ))}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 pt-24">
                <span className="rounded-full bg-[#FFD700] px-4 py-1.5 font-[Urbanist] text-xs font-bold uppercase tracking-[0.14em] text-[#800020]">
                  {services[active].eyebrow}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
