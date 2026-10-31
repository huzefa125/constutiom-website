import * as React from "react";
import Link from "next/link";
import { COMPANY_DATA } from "@/data/company";
import { SERVICES_DATA } from "@/data/services";
import { MAIN_NAV_ITEMS } from "@/data/navigation";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#E9E5DF] bg-[#1a1718] text-[#FAF9F6]">
      {/* Top Footer Banner */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center lg:px-12">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#FFD700]">
              Engineering Excellence
            </span>
            <p className="mt-1 font-serif text-2xl font-light tracking-tight text-white md:text-3xl">
              Ipile Earth Synergy Construction Limited
            </p>
          </div>
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-2 border border-[#FFD700] px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD700] transition-colors hover:bg-[#FFD700] hover:text-[#1a1718]"
          >
            <span>Inquire About A Project</span>
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>

      {/* Main Grid */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Identity & About */}
          <div className="space-y-4">
            <BrandLogo variant="dark" size="md" />
            <p className="text-xs leading-relaxed text-neutral-400">
              Specialized in Compressed Earth Brick (CEB) structural development, sustainable civil engineering, and disciplined general contracting across Nigeria.
            </p>
            <div className="pt-2 text-[11px] text-neutral-400">
              <span className="block font-medium text-[#FFD700]">Leadership:</span>
              <span>Rear Admiral James Oladapo (Rtd) mni, mnse, fnis, fosha</span>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD700]">
              Navigation
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-neutral-400">
              {MAIN_NAV_ITEMS.map((item) => (
                <li key={item.title}>
                  <Link
                    href={item.href}
                    className="transition-colors hover:text-white"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD700]">
              Services
            </h4>
            <ul className="mt-4 space-y-2.5 text-xs text-neutral-400">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.link}
                    className="transition-colors hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-neutral-500">Compressed Earth Brick Systems</span>
              </li>
              <li>
                <span className="text-neutral-500">COREN Structural Audits</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#FFD700]">
              Contact Details
            </h4>
            <div className="space-y-3 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#800020]" />
                <span>{COMPANY_DATA.headquarters}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#800020]" />
                <a
                  href={`tel:${COMPANY_DATA.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-white"
                >
                  {COMPANY_DATA.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#800020]" />
                <a
                  href={`mailto:${COMPANY_DATA.contact.email}`}
                  className="hover:text-white"
                >
                  {COMPANY_DATA.contact.email}
                </a>
              </div>
            </div>
            <div className="pt-2">
              <span className="inline-block border border-[#800020] bg-[#800020]/20 px-2.5 py-1 text-[10px] uppercase tracking-wider text-[#FFD700]">
                Registered Engineering Practice
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-[11px] text-neutral-500 gap-4">
          <p>© {new Date().getFullYear()} {COMPANY_DATA.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Abuja</span>
            <span>Cross River</span>
            <span>Lagos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

