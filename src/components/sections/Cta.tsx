import * as React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function Cta() {
  return (
    <section id="contact" className="relative w-full bg-[#800020] text-white py-24 lg:py-32 overflow-hidden">
      {/* Decorative Gold Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#FFD700]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-4xl text-center space-y-8">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-[#FFD700]/30 bg-[#630018]/50 px-4 py-1.5 backdrop-blur-sm">
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FFD700]">
              PARTNER WITH US
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
            Let&apos;s Build Something That Lasts.
          </h2>

          {/* Supporting Text */}
          <p className="mx-auto max-w-2xl text-base sm:text-lg leading-relaxed text-white/80 font-light">
            Have a construction or property development project in mind? Let&apos;s discuss how our sustainable earth-brick engineering and rigorous contracting solutions can bring your vision to life.
          </p>

          {/* CTA Actions */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={`mailto:${COMPANY_DATA.contact.email}`}
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-[#FFD700] bg-[#FFD700] px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#800020] transition-all duration-300 hover:bg-white hover:border-white"
            >
              <span>Get in Touch</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href={`tel:${COMPANY_DATA.contact.phone.replace(/\s+/g, "")}`}
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2.5 border border-white/40 bg-transparent px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-white transition-all duration-300 hover:border-white hover:bg-white/10"
            >
              <Phone className="h-4 w-4 text-[#FFD700]" />
              <span>{COMPANY_DATA.contact.phone}</span>
            </a>
          </div>

          {/* Direct Verification Contacts */}
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 border-t border-white/15 text-xs text-white/70">
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-4 w-4 text-[#FFD700]" />
              <span>Abuja FCT, Nigeria</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail className="h-4 w-4 text-[#FFD700]" />
              <span>{COMPANY_DATA.contact.email}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="font-semibold text-[#FFD700]">COREN Reg. 42,512</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

