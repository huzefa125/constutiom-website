"use client";

import * as React from "react";
import { X, Phone, CheckCircle2 } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { WhatsAppIcon } from "./WhatsAppIcon";
import { whatsappHref, telHref } from "./PhoneActions";

export function openLeadPopup() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("open-lead-popup"));
  }
}

export function OpenPopupButton({
  className = "",
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => openLeadPopup()}
      className={`cursor-pointer ${className}`}
    >
      {children ?? "Open Quick Quote Form"}
    </button>
  );
}

export function TimedPopupForm() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    phone: "",
    email: "",
    projectType: "Residential Bungalow / Duplex",
    location: "",
    notes: "",
  });

  const { phone, whatsappPhone } = COMPANY_DATA.contact;

  const handleClose = React.useCallback(() => {
    setIsOpen(false);
    if (typeof window !== "undefined") {
      sessionStorage.setItem("ipile_popup_dismissed", "true");
    }
  }, []);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    // Check if dismissed in current browser session
    const isDismissed = sessionStorage.getItem("ipile_popup_dismissed");
    if (isDismissed) return;

    // Trigger popup modal after exactly 20 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 20000);

    const handleCustomTrigger = () => setIsOpen(true);
    window.addEventListener("open-lead-popup", handleCustomTrigger);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("open-lead-popup", handleCustomTrigger);
    };
  }, []);

  // Handle ESC key and body scroll locking
  React.useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen, handleClose]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      if (typeof window !== "undefined") {
        sessionStorage.setItem("ipile_popup_dismissed", "true");
      }
    }, 750);
  };

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="popup-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/60 backdrop-blur-sm transition-opacity duration-300 overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className="relative w-full max-w-[560px] my-auto bg-white rounded-[16px] shadow-[0_25px_60px_rgba(0,0,0,0.3)] border border-black/10 overflow-hidden transform transition-all duration-300 animate-in fade-in zoom-in-95">
        {/* Top burgundy banner strip */}
        <div className="h-2 w-full bg-[#800020]" />

        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          aria-label="Close form"
          className="absolute top-4 right-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-black/70 transition-colors hover:bg-black/10 hover:text-black cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="py-8 px-4 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#800020]/10 text-[#800020] flex items-center justify-center mb-4">
                <CheckCircle2 className="h-8 w-8" />
              </div>
              <h3 className="font-heading font-bold text-2xl uppercase tracking-tight text-black mb-2">
                Consultation Request Received!
              </h3>
              <p className="font-[Urbanist] text-[15px] sm:text-[16px] text-black/75 max-w-[420px] leading-[150%]">
                Thank you, <strong>{formData.name || "friend"}</strong>. Our lead civil engineering team will review your project details and reach out via WhatsApp/phone shortly.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center gap-3 w-full justify-center">
                <a
                  href={whatsappHref(whatsappPhone)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#25D366] px-5 py-3 font-[Urbanist] text-sm font-bold text-white uppercase tracking-wider transition-transform hover:scale-105"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp Now
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="inline-flex items-center justify-center rounded-[8px] border border-black/20 bg-white px-5 py-3 font-[Urbanist] text-sm font-bold text-black uppercase tracking-wider hover:bg-black/5 cursor-pointer"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Header Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[#800020]" />
                <span className="font-heading text-xs font-semibold uppercase tracking-[2px] text-[#800020]">
                  Free Project Consultation
                </span>
              </div>

              {/* Title & Description */}
              <h2
                id="popup-modal-title"
                className="font-heading font-bold text-[26px] sm:text-[30px] uppercase leading-[1.1] text-black tracking-tight"
              >
                Planning to Build in Nigeria?
              </h2>
              <p className="mt-2 font-[Urbanist] text-[14px] sm:text-[15px] font-medium leading-[150%] text-black/70">
                Get an estimated bill of quantities and discover how Compressed Earth Bricks save 30%–40% on walling costs.
              </p>

              {/* Form */}
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                {/* Full Name */}
                <div>
                  <label htmlFor="popup-name" className="block font-[Urbanist] text-xs font-bold uppercase tracking-wider text-black/70 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    id="popup-name"
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Engr. Babatunde Adeleke"
                    className="w-full rounded-[8px] border border-black/20 bg-black/[0.02] px-3.5 py-2.5 font-[Urbanist] text-sm text-black placeholder:text-black/40 focus:border-[#800020] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone / WhatsApp */}
                <div>
                  <label htmlFor="popup-phone" className="block font-[Urbanist] text-xs font-bold uppercase tracking-wider text-black/70 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="popup-phone"
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +234 808 000 0000"
                    className="w-full rounded-[8px] border border-black/20 bg-black/[0.02] px-3.5 py-2.5 font-[Urbanist] text-sm text-black placeholder:text-black/40 focus:border-[#800020] focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                {/* Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="popup-type" className="block font-[Urbanist] text-xs font-bold uppercase tracking-wider text-black/70 mb-1">
                      Project Type
                    </label>
                    <select
                      id="popup-type"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full rounded-[8px] border border-black/20 bg-black/[0.02] px-3.5 py-2.5 font-[Urbanist] text-sm text-black focus:border-[#800020] focus:bg-white focus:outline-none transition-colors"
                    >
                      <option value="Residential Bungalow / Duplex">Residential Bungalow / Duplex</option>
                      <option value="Low Cost Housing Estate">Low Cost Housing Estate</option>
                      <option value="Compressed Earth Bricks Supply">Compressed Earth Bricks Supply</option>
                      <option value="Institutional / Defense Building">Institutional / Defense Building</option>
                      <option value="Building Renovation & Maintenance">Building Renovation & Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="popup-location" className="block font-[Urbanist] text-xs font-bold uppercase tracking-wider text-black/70 mb-1">
                      Project Location / State
                    </label>
                    <input
                      id="popup-location"
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g. Abuja, Ogun, Lagos, Calabar"
                      className="w-full rounded-[8px] border border-black/20 bg-black/[0.02] px-3.5 py-2.5 font-[Urbanist] text-sm text-black placeholder:text-black/40 focus:border-[#800020] focus:bg-white focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Brief Notes */}
                <div>
                  <label htmlFor="popup-notes" className="block font-[Urbanist] text-xs font-bold uppercase tracking-wider text-black/70 mb-1">
                    Estimated Budget / Notes (Optional)
                  </label>
                  <textarea
                    id="popup-notes"
                    name="notes"
                    rows={2}
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="e.g. Looking to build a 3-bedroom bungalow under ₦20 million."
                    className="w-full rounded-[8px] border border-black/20 bg-black/[0.02] px-3.5 py-2 font-[Urbanist] text-sm text-black placeholder:text-black/40 focus:border-[#800020] focus:bg-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full inline-flex items-center justify-center rounded-[8px] bg-black hover:bg-[#800020] text-white py-3.5 px-6 font-heading font-bold text-sm uppercase tracking-[1.5px] transition-colors shadow-md disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? "Submitting Inquiry..." : "Request Free Project Estimate"}
                </button>

                {/* Instant WhatsApp Option */}
                <div className="pt-2 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-[Urbanist] text-black/70">
                  <span>Need an immediate answer?</span>
                  <div className="flex items-center gap-3">
                    <a
                      href={whatsappHref(whatsappPhone)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-bold text-[#1ebe57] hover:underline"
                    >
                      <WhatsAppIcon className="h-3.5 w-3.5" />
                      WhatsApp: {whatsappPhone}
                    </a>
                    <span className="text-black/30">|</span>
                    <a
                      href={telHref(phone)}
                      className="inline-flex items-center gap-1 font-bold text-black hover:text-[#800020]"
                    >
                      <Phone className="h-3 w-3" />
                      Call
                    </a>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
