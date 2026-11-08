import * as React from "react";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { SERVICES_DATA } from "@/data/services";
import { LOCATIONS_DATA } from "@/data/locations";
import { GUIDES_DATA } from "@/data/guides";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { CurrentYear } from "@/components/ui/CurrentYear";

const linkClass =
  "font-[Urbanist] text-[14px] sm:text-[15px] font-semibold uppercase tracking-wider text-black transition-colors hover:text-[#800020]";
const headingClass =
  "font-heading text-[18px] sm:text-[20px] font-bold uppercase tracking-tight text-black";

export function Footer() {
  const phone = COMPANY_DATA.contact.phone;
  const email = COMPANY_DATA.contact.email;

  return (
    <footer className="relative overflow-hidden bg-[#F7C290] border-t border-black/10">
      <div className="mx-auto w-full max-w-[1300px] px-5 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-8 items-start">
          {/* Left: link columns */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-10 w-full max-w-[860px]">
            {/* Visit */}
            <div className="flex flex-col gap-4">
              <h2 className={headingClass}>Visit</h2>
              <p className="max-w-[200px] font-[Urbanist] text-[14px] sm:text-[15px] font-medium leading-[160%] text-black/75">
                {COMPANY_DATA.headquarters}
              </p>
            </div>

            {/* Quick links */}
            <div className="flex flex-col gap-4">
              <h2 className={headingClass}>Quick links</h2>
              <ul className="flex flex-col gap-3">
                {MAIN_NAV_ITEMS.map((item) => (
                  <li key={item.title}>
                    <Link href={item.href} className={linkClass}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Guides */}
            <div className="flex flex-col gap-4">
              <h2 className={headingClass}>Guides</h2>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link href="/affordable-housing-nigeria" className={linkClass}>
                    Affordable Housing in Nigeria
                  </Link>
                </li>
                <li>
                  <Link href="/compressed-earth-bricks" className={linkClass}>
                    Compressed Earth Bricks
                  </Link>
                </li>
                {GUIDES_DATA.map((guide) => (
                  <li key={guide.slug}>
                    <Link href={`/guides/${guide.slug}`} className={linkClass}>
                      {guide.short}
                    </Link>
                  </li>
                ))}
                {LOCATIONS_DATA.map((location) => (
                  <li key={location.slug}>
                    <Link href={`/locations/${location.slug}`} className={linkClass}>
                      Building in {location.place}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="flex flex-col gap-4">
              <h2 className={headingClass}>Services</h2>
              <ul className="flex flex-col gap-3">
                {SERVICES_DATA.map((service) => (
                  <li key={service.id}>
                    <Link href={service.link} className={linkClass}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="flex flex-col gap-4">
              <h2 className={headingClass}>Connect</h2>
              <ul className="flex flex-col gap-3">
                <li>
                  <a
                    href={`tel:${phone.replace(/\s+/g, "")}`}
                    className={linkClass}
                  >
                    Direct Call
                  </a>
                </li>
                {COMPANY_DATA.social.map((link) => (
                  <li key={link.url}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer me" className={linkClass}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: brand + contact info */}
          <div className="flex flex-col items-start lg:items-end gap-3 text-left lg:text-right shrink-0">
            <BrandLogo size="md" />
            <div className="flex flex-col gap-1.5 font-heading font-bold text-[15px] sm:text-[16px] text-black uppercase mt-2">
              {COMPANY_DATA.contact.phones.map((p) => (
                <a
                  key={p}
                  href={`tel:${p.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-[#800020]"
                >
                  {p}
                </a>
              ))}
              <a
                href={`mailto:${email}`}
                className="uppercase transition-colors hover:text-[#800020]"
              >
                {email}
              </a>
              <a
                href={`https://${COMPANY_DATA.contact.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="lowercase transition-colors hover:text-[#800020]"
              >
                {COMPANY_DATA.contact.website}
              </a>
            </div>
            <p className="pt-2 font-[Urbanist] text-xs sm:text-sm text-black/60">
              © <CurrentYear /> {COMPANY_DATA.shortName}, All Rights Reserved
              <br />
              CAC RC No. {COMPANY_DATA.cacNumber}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
