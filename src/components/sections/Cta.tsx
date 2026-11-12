import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { CallWhatsAppRow } from "@/components/ui/PhoneActions";

export function Cta() {
  return (
    <section id="contact" className="overflow-hidden bg-[#f7f7f7] py-[30px] lg:py-[50px]">
      <div className="mx-auto w-full max-w-[1300px] px-[10px] sm:px-5">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-[6px]">
            <div className="h-2 w-2 rounded-full bg-black" />
            <div className="font-[Urbanist] text-sm font-semibold uppercase leading-[150%] tracking-[1.92px] text-black">
              Partner with us
            </div>
          </div>

          <h2 className="font-serif text-[40px] uppercase leading-[0.95] text-black sm:text-[64px] lg:text-[96px] xl:text-[120px]">
            Let&apos;s build
            <br />
            something <span className="text-[#800020]">that lasts</span>
          </h2>

          <p className="max-w-[520px] font-[Urbanist] text-lg font-medium leading-[145%] text-black/65">
            Have a construction or property development project in mind? Tell us about it and we will show how
            sustainable earth-brick engineering can bring it to life.
          </p>

          <div className="mt-2 flex flex-col items-center gap-6 sm:flex-row sm:gap-10">
            <Link
              href="/contact#contact-form"
              className="group relative flex h-[150px] w-[150px] items-center justify-center rounded-full bg-[#800020] text-center font-serif text-[18px] font-semibold uppercase leading-none text-white transition-all duration-500 hover:scale-105 hover:bg-[#FFD700] hover:text-[#800020] lg:h-[180px] lg:w-[180px]"
            >
              <span className="flex flex-col items-center gap-2">
                Get in
                <br />
                touch
                <ArrowUpRight className="h-6 w-6 transition-transform duration-500 group-hover:rotate-45" />
              </span>
            </Link>

            <div className="flex flex-col items-center gap-2 font-[Urbanist] text-xl font-semibold text-black sm:items-start">
              <CallWhatsAppRow
                number={COMPANY_DATA.contact.phone}
                size="md"
                align="center"
                className="sm:justify-start"
                showCall={true}
                showWhatsApp={false}
                numberClassName="border-b border-black/30 transition-colors hover:border-[#800020] hover:text-[#800020]"
              />
              <CallWhatsAppRow
                number={COMPANY_DATA.contact.whatsappPhone}
                size="md"
                align="center"
                className="sm:justify-start"
                showCall={false}
                showWhatsApp={true}
                numberClassName="border-b border-black/30 transition-colors hover:border-[#800020] hover:text-[#800020]"
              />
              <a
                href={`mailto:${COMPANY_DATA.contact.email}`}
                className="border-b border-black/30 transition-colors hover:border-[#800020] hover:text-[#800020]"
              >
                {COMPANY_DATA.contact.email}
              </a>
              <Link href="/projects" className="text-base font-medium text-black/55 transition-colors hover:text-[#800020]">
                or browse our projects →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
