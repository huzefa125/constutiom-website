"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { telHref, whatsappHref } from "@/components/ui/PhoneActions";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { COMPANY_DATA } from "@/data/company";
import { ChevronDown, Menu, X } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);
  const { phone, whatsappPhone } = COMPANY_DATA.contact;

  return (
    <header className="optik-header-section">
      <div className="optik-header-container">
        <div className="optik-header-wrap">
          <nav className="optik-navbar" role="banner">
            {/* Left: Official Brand Logo */}
            <div className="optik-header-left">
              <BrandLogo size="sm" priority={true} />
            </div>

            {/* Center: Navigation Menu */}
            <div className="optik-nav-menu">
              <Link href="/" className="optik-navigation">
                Home
              </Link>
              <Link href="/about" className="optik-navigation">
                About
              </Link>
              <div className="group relative">
                <Link href="/services" className="optik-navigation inline-flex items-center gap-1">
                  Services
                  <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180" />
                </Link>

                {/* Dropdown */}
                <div className="invisible absolute left-1/2 top-full z-50 w-[380px] -translate-x-1/2 translate-y-2 pt-4 opacity-0 transition-all duration-300 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="rounded-2xl border border-black/10 bg-white p-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.25)]">
                    {SERVICES_DATA.map((service) => (
                      <Link
                        key={service.id}
                        href={service.link}
                        className="flex items-center gap-4 rounded-xl p-3 transition-colors hover:bg-[#f7f7f7]"
                      >
                        <span className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-[#e9e9e9]">
                          <Image src={service.image} alt="" fill sizes="56px" className="object-cover" />
                        </span>
                        <span className="flex flex-col gap-1">
                          <span className="font-[Urbanist] text-[15px] font-bold uppercase tracking-[0.04em] leading-none text-black">
                            {service.title}
                          </span>
                          <span className="font-[Urbanist] text-sm font-medium leading-tight text-black/55">
                            {service.category}
                          </span>
                        </span>
                      </Link>
                    ))}
                    <Link
                      href="/services"
                      className="mt-1 flex items-center justify-between rounded-xl bg-[#800020] px-4 py-3 font-[Urbanist] text-[14px] font-bold uppercase tracking-[0.06em] text-white transition-colors hover:bg-[#FFD700] hover:text-[#800020]"
                    >
                      View all services
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
              <Link href="/projects" className="optik-navigation">
                Projects
              </Link>
              <Link href="/contact" className="optik-navigation">
                Contact
              </Link>
            </div>

            {/* Right: Call & WhatsApp Contact Pill */}
            <div className="optik-header-right">
              <div className="optik-call-wrap">
                <div className="flex items-center">
                  <a
                    href={telHref(phone)}
                    aria-label={`Call ${phone}`}
                    title={`Call ${phone}`}
                    className="optik-call-icon-wrap group"
                  >
                    <Image
                      src="/images/hero/phn-icon.svg"
                      alt="Phone Icon"
                      width={20}
                      height={20}
                      className="w-5 h-5 transition-transform group-hover:scale-110"
                    />
                  </a>
                  <a
                    href={whatsappHref(whatsappPhone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat on WhatsApp ${whatsappPhone}`}
                    title={`WhatsApp ${whatsappPhone}`}
                    className="optik-call-icon-wrap _02"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                  </a>
                </div>
                <div className="optik-call-text-wrap">
                  <span className="optik-call-text">Call / WhatsApp</span>
                  <a href={telHref(phone)} title={`Call ${phone}`} className="optik-call-number">
                    {phone}
                  </a>
                  <a
                    href={whatsappHref(whatsappPhone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`Chat on WhatsApp ${whatsappPhone}`}
                    className="optik-call-number hover:text-[#25D366]"
                  >
                    {whatsappPhone}
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2.5 rounded-lg bg-black text-white hover:bg-[#800020] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </nav>

          {/* Mobile Dropdown Panel */}
          {mobileOpen && (
            <div className="lg:hidden mt-4 rounded-2xl bg-white p-6 shadow-2xl space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col space-y-3">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-base text-neutral-800 hover:text-[#800020]"
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-base text-neutral-800 hover:text-[#800020]"
                >
                  About
                </Link>
                <div>
                  <div className="flex items-center justify-between">
                    <Link
                      href="/services"
                      onClick={() => setMobileOpen(false)}
                      className="font-medium text-base text-neutral-800 hover:text-[#800020]"
                    >
                      Services
                    </Link>
                    <button
                      type="button"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      aria-label="Toggle services list"
                      aria-expanded={mobileServicesOpen}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f7f7] text-neutral-800"
                    >
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <div className="mt-3 flex flex-col gap-3 border-l-2 border-[#FFD700] pl-4">
                      {SERVICES_DATA.map((service) => (
                        <Link
                          key={service.id}
                          href={service.link}
                          onClick={() => setMobileOpen(false)}
                          className="text-sm font-medium text-neutral-600 hover:text-[#800020]"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
                <Link
                  href="/projects"
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-base text-neutral-800 hover:text-[#800020]"
                >
                  Projects
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-base text-neutral-800 hover:text-[#800020]"
                >
                  Contact
                </Link>
              </div>

              <div className="flex flex-col gap-3 pt-4 border-t border-neutral-100">
                <a href={telHref(phone)} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white shrink-0">
                    <Image
                      src="/images/hero/phn-icon.svg"
                      alt="Phone Icon"
                      width={18}
                      height={18}
                      className="filter brightness-0 invert"
                    />
                  </div>
                  <div>
                    <span className="block text-xs text-neutral-500">Phone Us</span>
                    <span className="font-semibold text-sm text-black">{phone}</span>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <a
                    href={whatsappHref(whatsappPhone)}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Chat on WhatsApp ${whatsappPhone}`}
                    className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                  </a>
                  <div>
                    <span className="block text-xs text-neutral-500">WhatsApp Only</span>
                    <a
                      href={whatsappHref(whatsappPhone)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-sm text-black hover:text-[#25D366]"
                    >
                      {whatsappPhone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
