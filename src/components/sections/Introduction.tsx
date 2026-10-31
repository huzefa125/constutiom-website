import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function Introduction() {
  return (
    <section id="about" className="relative w-full bg-[#FAF9F6] py-24 lg:py-32 border-b border-[#E9E5DF]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Left Column: Heading, Description & CTA */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 border-l-2 border-[#800020] pl-3">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#800020]">
                WHO WE ARE
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#242424] leading-[1.15]">
              Built on Trust. <br />
              <span className="italic font-serif text-[#800020]">Driven by Excellence.</span>
            </h2>

            <div className="space-y-4 text-base leading-relaxed text-[#555555]">
              <p>
                <strong className="text-[#242424] font-medium">{COMPANY_DATA.name}</strong> is a foremost Nigerian engineering, infrastructure development, and property management consultancy headquartered in Abuja. We combine time-honored construction integrity with modern low-carbon building technologies.
              </p>
              <p>
                Guided by the disciplined leadership of former naval executive Rear Admiral James Oladapo (Rtd) alongside COREN-certified civil engineers and Hydraform-certified building specialists, we champion sustainable Compressed Earth Brick (CEB) architecture that reduces embodied carbon while delivering superior thermal performance in tropical climates.
              </p>
            </div>

            {/* Key Verified Competencies */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#800020]" />
                <span className="text-xs font-medium text-[#242424]">
                  Hydraform Interlocking Earth Block Systems
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#800020]" />
                <span className="text-xs font-medium text-[#242424]">
                  COREN-Certified Civil & Structural Engineering
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#800020]" />
                <span className="text-xs font-medium text-[#242424]">
                  ISO 9001:2008 Quality Management Auditing
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#800020]" />
                <span className="text-xs font-medium text-[#242424]">
                  NEBOSH International Site Safety Compliance
                </span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-3 border-b-2 border-[#800020] pb-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#800020] transition-all hover:border-[#FFD700] hover:text-[#242424]"
              >
                <span>Consult Our Engineering Team</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Large Architectural Photograph */}
          <div className="lg:col-span-6">
            <div
              className="relative aspect-[4/3] sm:aspect-[5/4] w-full overflow-hidden border border-[#E9E5DF] bg-[#F4F1EA] shadow-sm"
              style={{ position: "relative" }}
            >
              <Image
                src="/images/projects/ceb-technology.png"
                alt="Ipile Earth Synergy Compressed Earth Brick Technology"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              {/* Architectural Caption Box */}
              <div className="absolute bottom-0 left-0 right-0 border-t border-[#E9E5DF] bg-[#FAF9F6]/95 backdrop-blur-sm p-4 sm:p-6">
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#800020]">
                  Sustainable Building Innovation
                </span>
                <p className="mt-1 font-serif text-sm font-medium text-[#242424]">
                  Interlocking Compressed Earth Bricks (CEB) — Providing 40% higher thermal insulation and structural longevity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

