"use client";

import * as React from "react";
import Image from "next/image";

export function ContactFormSection() {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section className="relative w-full bg-[#f7f7f7]">
      {/* 1. Full-bleed Sunset Curved Villa with Circular Glass Pool (Natural Aspect Ratio) */}
      <div className="w-full relative">
        <Image
          src="/images/contact/contact-form-villa.webp"
          alt="Modern curved luxury architectural villa with circular glass swimming pool at sunset"
          width={2880}
          height={1564}
          priority
          sizes="100vw"
          className="w-full h-auto block"
        />
      </div>

      {/* 2. Overlaid Floating Form Card with Negative Top Margin (Matches Images 2 & 3) */}
      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-5 sm:px-8 -mt-20 sm:-mt-28 md:-mt-36 lg:-mt-44 pb-20 sm:pb-28 lg:pb-36">
        <div className="w-full max-w-[856px] mx-auto bg-white rounded-[8px] sm:rounded-[12px] p-8 sm:p-12 lg:p-16 shadow-[0_16px_40px_rgba(0,0,0,0.08)]">
          {/* Header Tag */}
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-[#800020]" />
            <span className="font-heading font-semibold text-xs sm:text-[13px] uppercase tracking-[2px] text-black">
              CONTACT FORM
            </span>
          </div>

          {/* Form Title */}
          <h2 className="font-heading font-bold uppercase tracking-tight text-[36px] sm:text-[48px] md:text-[54px] text-black leading-none mb-10 sm:mb-12">
            SEND US A MESSAGE
          </h2>

          {isSubmitted ? (
            <div className="bg-black text-[#FCC995] rounded-[8px] p-8 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-[#800020] text-white flex items-center justify-center mb-4">
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3 className="font-heading font-bold text-2xl uppercase tracking-tight text-white mb-2">
                Thank you!
              </h3>
              <p className="font-[Urbanist] text-[15px] sm:text-[16px] text-[#FCC995]/80 max-w-[420px] leading-[150%]">
                Your message has been received. Our team will review your project requirements and get back to you shortly.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", phone: "", comment: "" });
                }}
                className="mt-6 font-[Urbanist] text-xs uppercase tracking-widest text-[#FCC995] underline hover:text-white transition-colors cursor-pointer"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 sm:gap-9 w-full">
              {/* Field 1: Full name */}
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name *"
                  className="w-full bg-transparent border-b border-black text-black placeholder:text-black focus:outline-none pb-2.5 font-[Urbanist] text-[15px] sm:text-[16px]"
                />
              </div>

              {/* Field 2: Email */}
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email *"
                  className="w-full bg-transparent border-b border-black text-black placeholder:text-black focus:outline-none pb-2.5 font-[Urbanist] text-[15px] sm:text-[16px]"
                />
              </div>

              {/* Field 3: Phone number */}
              <div className="flex flex-col">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone number *"
                  className="w-full bg-transparent border-b border-black text-black placeholder:text-black focus:outline-none pb-2.5 font-[Urbanist] text-[15px] sm:text-[16px]"
                />
              </div>

              {/* Field 4: Your comment */}
              <div className="flex flex-col">
                <textarea
                  name="comment"
                  id="comment"
                  required
                  rows={3}
                  value={formData.comment}
                  onChange={handleChange}
                  placeholder="Your comment *"
                  className="w-full bg-transparent border-b border-black text-black placeholder:text-black focus:outline-none pb-2.5 font-[Urbanist] text-[15px] sm:text-[16px] resize-y min-h-[80px]"
                />
              </div>

              {/* Submit Button (Black background, white/peach text, rounded-[8px]) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center bg-black hover:bg-[#800020] text-white rounded-[8px] px-8 py-3.5 font-heading font-bold text-sm tracking-[1.5px] uppercase transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer disabled:opacity-60"
                >
                  {isSubmitting ? "SENDING..." : "SEND MY MESSAGE"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
