import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative w-full bg-[#FAF9F6] py-24 lg:py-32 border-b border-[#E9E5DF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 border-l-2 border-[#800020] pl-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#800020]">
                WHAT WE DO
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#242424]">
              Our Expertise
            </h2>
            <p className="text-base text-[#666666] font-light">
              End-to-end technical capabilities from pioneering earth-brick engineering and structural frameworks to asset lifecycle management.
            </p>
          </div>
          <Link
            href="/#contact"
            className="group hidden md:inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#800020] hover:text-[#630018]"
          >
            <span>Discuss A Custom Scope</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between border border-[#E9E5DF] bg-white transition-all duration-300 hover:border-[#800020]/40 hover:shadow-sm"
            >
              {/* Card Image */}
              <div
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#F4F1EA]"
                style={{ position: "relative" }}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-[#FAF9F6]/90 backdrop-blur-sm px-3 py-1 border border-[#E9E5DF]">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#800020]">
                    0{index + 1}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-8 space-y-6">
                <div className="space-y-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#777777]">
                    {service.category}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#242424] group-hover:text-[#800020] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#666666]">
                    {service.description}
                  </p>

                  {/* Bullet Highlights */}
                  <ul className="pt-2 space-y-1.5 border-t border-[#E9E5DF] text-[11px] text-[#555555]">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#FFD700]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Explore Service Link */}
                <div className="pt-4 border-t border-[#E9E5DF]">
                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#800020] transition-colors group-hover:text-[#630018]"
                  >
                    <span>Explore Service</span>
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

