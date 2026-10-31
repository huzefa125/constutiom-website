"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";

export function Services() {
  const [active, setActive] = React.useState(0);

  return (
    <section id="services" className="bg-[#f7f7f7] px-[10px] py-[30px] sm:px-5 lg:py-[50px]">
      <div className="mx-auto w-full max-w-[1300px]">
        {/* Header */}
        <div className="mb-10 flex flex-col gap-6 lg:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col items-start gap-4">
            <div className="flex items-center gap-[6px]">
              <div className="h-2 w-2 rounded-full bg-black" />
              <div className="font-[Urbanist] text-sm font-semibold uppercase leading-[150%] tracking-[1.92px] text-black">
                What we do
              </div>
            </div>
            <h2 className="font-serif max-w-[640px] text-[30px] uppercase leading-[0.98] text-black sm:text-[36px] lg:text-[46px] xl:text-[56px]">
              Engineering that is built to <span className="text-[#800020]">last</span>
            </h2>
          </div>

          <div className="flex max-w-[420px] flex-col items-start gap-5">
            <p className="font-[Urbanist] text-lg font-medium leading-[145%] text-black/70">
              From pioneering earth-brick construction to long-term asset care, one accountable team takes your project
              from first sketch to handover.
            </p>
            <Link
              href="/#contact"
              className="group flex items-center gap-[10px] border-b border-black pb-[2px] transition-colors hover:border-[#800020] hover:text-[#800020]"
            >
              <span className="font-serif text-[16px] font-semibold uppercase leading-none lg:text-[18px]">
                Discuss a custom scope
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        {/* Accordion rows: image stays contained at a sharp size instead of stretched full-bleed */}
        <div className="flex flex-col gap-3">
          {SERVICES_DATA.map((service, index) => {
            const isActive = active === index;
            return (
              <article
                key={service.id}
                onMouseEnter={() => setActive(index)}
                onFocusCapture={() => setActive(index)}
                onClick={() => setActive(index)}
                className={`group overflow-hidden rounded-[20px] border bg-white transition-colors duration-500 ${
                  isActive ? "border-[#800020]/30 shadow-[0_18px_40px_-24px_rgba(128,0,32,0.35)]" : "border-black/10"
                }`}
              >
                {/* Row header */}
                <div className="flex items-center gap-4 px-5 py-5 sm:gap-6 lg:px-8 lg:py-6">
                  <span
                    className={`font-serif text-[26px] leading-none transition-colors duration-500 lg:text-[34px] ${
                      isActive ? "text-[#800020]" : "text-black/30"
                    }`}
                  >
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-[22px] uppercase leading-[0.98] text-black sm:text-[26px] lg:text-[34px] xl:text-[38px]">
                    {service.title}
                  </h3>
                  <span className="ml-auto hidden font-[Urbanist] text-xs font-semibold uppercase tracking-[0.18em] text-black/50 xl:block">
                    {service.category}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-500 xl:ml-4 ${
                      isActive ? "rotate-0 bg-[#FFD700] text-[#800020]" : "-rotate-45 bg-black text-white"
                    }`}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>

                {/* Expanding body */}
                <div
                  className={`grid transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div
                      className={`grid gap-6 px-5 pb-6 transition-opacity duration-500 lg:grid-cols-[1fr_400px] lg:gap-10 lg:px-8 lg:pb-8 ${
                        isActive ? "opacity-100 delay-150" : "opacity-0"
                      }`}
                    >
                      <div className="flex flex-col gap-5 max-lg:order-2">
                        <p className="max-w-[560px] font-[Urbanist] text-lg font-medium leading-[145%] text-black/70">
                          {service.description}
                        </p>

                        <ul className="grid grid-cols-1 gap-x-6 gap-y-2 border-t border-black/10 pt-5 font-[Urbanist] text-base font-medium text-black/80 sm:grid-cols-2">
                          {service.details.map((detail) => (
                            <li key={detail} className="flex items-start gap-2">
                              <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#FFD700]" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>

                        <Link
                          href={service.link}
                          className="group/btn mt-1 inline-flex w-fit items-center gap-3 rounded-full bg-[#800020] px-6 py-3 font-[Urbanist] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-[#FFD700] hover:text-[#800020]"
                        >
                          Explore service
                          <ArrowUpRight className="h-4 w-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                        </Link>
                      </div>

                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#f0f0f0] max-lg:order-1">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 400px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
