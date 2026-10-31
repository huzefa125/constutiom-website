import * as React from "react";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { SERVICES_DATA } from "@/data/services";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { CurrentYear } from "@/components/ui/CurrentYear";

const linkClass =
  "font-serif text-[16px] font-semibold uppercase leading-none text-black transition-colors hover:text-[#800020]";
const headingClass = "font-serif text-[24px] font-semibold uppercase leading-none text-black";

export function Footer() {
  const phone = COMPANY_DATA.contact.phone;
  const email = COMPANY_DATA.contact.email;

  return (
    <footer className="relative overflow-hidden bg-[#f7f7f7]">
      <div className="mx-auto w-full max-w-[1300px] px-[10px] py-[50px] sm:px-5 lg:py-[80px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-8">
          {/* Left: link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-4 lg:gap-x-16">
            <div className="flex flex-col gap-5">
              <h4 className={headingClass}>Visit</h4>
              <p className="max-w-[200px] font-[Urbanist] text-base font-medium leading-[162%] text-black/75">
                {COMPANY_DATA.headquarters}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className={headingClass}>Quick links</h4>
              <ul className="flex flex-col gap-4">
                {MAIN_NAV_ITEMS.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className={linkClass}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className={headingClass}>Services</h4>
              <ul className="flex flex-col gap-4">
                {SERVICES_DATA.map((service) => (
                  <li key={service.id}>
                    <Link href={service.link} className={linkClass}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h4 className={headingClass}>Connect</h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <a href={`tel:${phone.replace(/\s+/g, "")}`} className={linkClass}>
                    Call us
                  </a>
                </li>
                <li>
                  <a href={`mailto:${email}`} className={linkClass}>
                    Email us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: brand + contact */}
          <div className="flex flex-col items-start gap-5 lg:items-start">
            <BrandLogo size="md" />
            <div className="flex flex-col gap-3 font-[Urbanist] text-base font-semibold text-black">
              <a href={`tel:${phone.replace(/\s+/g, "")}`} className="transition-colors hover:text-[#800020]">
                {phone}
              </a>
              <a href={`mailto:${email}`} className="uppercase transition-colors hover:text-[#800020]">
                {email}
              </a>
            </div>
            <p className="pt-2 font-[Urbanist] text-base font-medium text-black/70">
              © <CurrentYear /> {COMPANY_DATA.shortName}, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
