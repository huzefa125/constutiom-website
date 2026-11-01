import * as React from "react";
import Image from "next/image";

export function ContactHero() {
  return (
    <section className="relative w-full bg-[#F7C290] pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-20 lg:pb-24 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1300px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 xl:gap-20 items-center">
          {/* Left Column: Heading & Subtitle */}
          <div className="flex flex-col items-start justify-center">
            {/* Title: CONNECT WITH US (Pure Black, bold Phudu, exactly matching template) */}
            <h1 className="font-heading font-bold uppercase tracking-tight leading-[0.9] select-none text-[56px] sm:text-[76px] md:text-[92px] lg:text-[104px] xl:text-[112px] text-black">
              CONNECT
              <br />
              WITH US
            </h1>

            {/* Subtitle */}
            <p className="font-[Urbanist] text-[16px] sm:text-[18px] font-medium leading-[155%] text-black/80 max-w-[430px] mt-6 sm:mt-8">
              We’re here to answer your questions, discuss your ideas, or help you start your next architectural journey.
            </p>
          </div>

          {/* Right Column: Geometric Glass Architecture (Exact Template Showcase) */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[560px] aspect-[1/1.05] rounded-[16px] sm:rounded-[22px] overflow-hidden shadow-2xl bg-black/5">
              <Image
                src="/images/contact/contact-hero-featured.webp"
                alt="Modern geometric architectural pavilion with triangular glowing glass windows"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 560px"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
