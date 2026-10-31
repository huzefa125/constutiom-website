"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { ChevronDown, Menu, X } from "lucide-react";
import { SERVICES_DATA } from "@/data/services";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = React.useState(false);

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
                          <span className="font-serif text-[16px] font-semibold uppercase leading-none text-black">
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
                      className="mt-1 flex items-center justify-between rounded-xl bg-[#800020] px-4 py-3 font-serif text-[15px] font-semibold uppercase text-white transition-colors hover:bg-[#FFD700] hover:text-[#800020]"
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

            {/* Right: Phone Us Contact Pill (Interlocking badges matching Optik) */}
            <div className="optik-header-right">
              <a href="tel:+2348033142661" className="optik-call-wrap group">
                <div className="flex items-center">
                  <div className="optik-call-icon-wrap">
                    <Image
                      src="/images/hero/phn-icon.svg"
                      alt="Phone Icon"
                      width={20}
                      height={20}
                      className="w-5 h-5 transition-transform group-hover:scale-110"
                    />
                  </div>
                  <div className="optik-call-icon-wrap _02">
                    <Image
                      src="/images/hero/arrow-02.svg"
                      alt="Arrow"
                      width={16}
                      height={16}
                      className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </div>
                </div>
                <div className="optik-call-text-wrap">
                  <span className="optik-call-text">Phone Us</span>
                  <span className="optik-call-number">+234 (0) 803 314 2661</span>
                </div>
              </a>
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

              <div className="pt-4 border-t border-neutral-100">
                <a href="tel:+2348033142661" className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-black flex items-center justify-center text-white">
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
                    <span className="font-semibold text-sm text-black">+234 (0) 803 314 2661</span>
                  </div>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
