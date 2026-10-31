"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header className="optik-header-section">
      <div className="optik-header-container">
        <div className="optik-header-wrap">
          <nav className="optik-navbar" role="banner">
            {/* Left: Official Brand Logo */}
            <div className="optik-header-left">
              <Link href="/" className="flex items-center" aria-label="Home">
                <BrandLogo size="sm" />
              </Link>
            </div>

            {/* Center: Navigation Menu */}
            <div className="optik-nav-menu">
              <Link href="/" className="optik-navigation">
                Home
              </Link>
              <Link href="/about" className="optik-navigation">
                About
              </Link>
              <Link href="/services" className="optik-navigation">
                Services
              </Link>
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
                <Link
                  href="/services"
                  onClick={() => setMobileOpen(false)}
                  className="font-medium text-base text-neutral-800 hover:text-[#800020]"
                >
                  Services
                </Link>
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
