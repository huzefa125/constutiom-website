"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

export type HoverExpandItem = {
  src: string;
  alt: string;
  /** Large caption shown on the open panel. */
  title?: string;
  /** Small label above the title (e.g. "01"). */
  label?: string;
  /** When set, the open panel shows a link button. */
  href?: string;
  linkText?: string;
};

/**
 * Hover-expand image accordion, adapted from Skiper UI 52 (HoverExpand_001).
 * Desktop: horizontal panels that expand on hover. Mobile: vertical panels that expand on tap.
 * The motion is plain CSS, which keeps a whole animation library out of the page.
 */
export function HoverExpand_001({
  items,
  className,
  defaultActive = 0,
}: {
  items: HoverExpandItem[];
  className?: string;
  defaultActive?: number;
}) {
  const [active, setActive] = React.useState(defaultActive);

  return (
    <div
      className={cn(
        "flex h-[620px] w-full flex-col gap-2 sm:h-[680px] lg:h-[560px] lg:flex-row lg:gap-3",
        className,
      )}
    >
      {items.map((item, index) => {
        const isActive = active === index;
        return (
          <div
            key={`${item.src}-${index}`}
            className="relative min-h-0 min-w-0 cursor-pointer overflow-hidden rounded-[14px] bg-[#e9e9e9] transition-[flex-grow] duration-500 ease-in-out"
            style={{ flexGrow: isActive ? 6 : 1, flexBasis: 0 }}
            onClick={() => setActive(index)}
            onMouseEnter={() => setActive(index)}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className={cn(
                "object-cover transition-all duration-700",
                isActive ? "scale-100" : "scale-110 brightness-[0.65]",
              )}
            />

            <div
              className={cn(
                "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent transition-opacity duration-500",
                isActive ? "opacity-100" : "opacity-60",
              )}
            />

            {/* Collapsed state: number only */}
            {item.label && (
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-5 top-5 font-[Urbanist] text-sm font-bold tabular-nums text-white transition-opacity duration-300",
                  isActive ? "opacity-0" : "opacity-100",
                )}
              >
                {item.label}
              </span>
            )}

            {(item.title || item.href) && (
              <div
                className={cn(
                  "absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 transition-opacity duration-300 sm:p-7",
                  isActive ? "opacity-100 delay-150" : "pointer-events-none opacity-0",
                )}
              >
                <div className="min-w-0">
                  {item.title && (
                    item.href ? (
                      <Link href={item.href} className="group/title block">
                        <h3 className="font-heading text-[24px] font-bold uppercase leading-[0.98] text-white transition-colors group-hover/title:text-[#FFD700] sm:text-[30px] lg:text-[34px]">
                          {item.title}
                        </h3>
                      </Link>
                    ) : (
                      <h3 className="font-heading text-[24px] font-bold uppercase leading-[0.98] text-white sm:text-[30px] lg:text-[34px]">
                        {item.title}
                      </h3>
                    )
                  )}
                </div>
                {item.href && (
                  <Link
                    href={item.href}
                    onFocus={() => setActive(index)}
                    aria-label={`${item.linkText ?? "View"}: ${item.title ?? item.alt}`}
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FCC995] text-black transition-colors duration-300 hover:bg-[#FFD700]"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/**
 * Skiper 52 HoverExpand_001
 * Original by Skiper UI (https://skiper-ui.com), author @gurvinder-singh02.
 * Free to use and modify; attribution to Skiper UI is required for the free version.
 */
