import * as React from "react";
import { COMPANY_DATA } from "@/data/company";
import { CallWhatsAppRow } from "@/components/ui/PhoneActions";

export function ContactOffices() {
  const { phone, whatsappPhone, email, website, address } = COMPANY_DATA.contact;
  const mapQuery = encodeURIComponent("Redemption Camp, Lagos-Ibadan Expressway, Ogun State, Nigeria");

  return (
    <section className="relative w-full bg-[#f7f7f7] py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
      <div className="max-w-[1300px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Title Column */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-2 w-2 rounded-full bg-[#800020]" />
              <span className="font-heading font-semibold text-xs sm:text-[13px] uppercase tracking-[2px] text-black">
                GET TO KNOW US
              </span>
            </div>

            <h2 className="font-heading font-bold uppercase tracking-tight text-[36px] sm:text-[46px] md:text-[54px] leading-[0.98] text-black max-w-[480px]">
              VISIT OUR
              <br />
              OFFICE OR
              <br />
              GET IN TOUCH.
            </h2>
          </div>

          {/* Right: office + contact details */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            <div className="flex flex-col">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-black uppercase tracking-tight mb-2">
                Office address
              </h3>
              <p className="font-[Urbanist] text-[15px] sm:text-[16px] text-black/60 leading-[140%] mb-5 min-h-[44px]">
                {address}
              </p>
              <div className="w-full h-px bg-black/20 mb-5" />
              <p className="mb-3 font-[Urbanist] text-sm font-semibold text-black/70">
                CAC RC No. {COMPANY_DATA.cacNumber}
              </p>
              <a
                href={`https://${website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-heading font-bold text-[15px] sm:text-[16px] text-black transition-colors hover:text-[#800020]"
              >
                {website}
              </a>
            </div>

            <div className="flex flex-col">
              <h3 className="font-heading font-bold text-xl sm:text-2xl text-black uppercase tracking-tight mb-2">
                Phone &amp; email
              </h3>
              <p className="font-[Urbanist] text-[15px] sm:text-[16px] text-black/60 leading-[140%] mb-5 min-h-[44px]">
                Call or write to us, we reply promptly.
              </p>
              <div className="w-full h-px bg-black/20 mb-5" />
              <div className="flex flex-col gap-2 font-heading font-bold text-[15px] sm:text-[16px] text-black">
                <CallWhatsAppRow
                  number={phone}
                  size="sm"
                  showCall={true}
                  showWhatsApp={false}
                  numberClassName="font-heading font-bold text-[15px] sm:text-[16px] text-black transition-colors hover:text-[#800020]"
                />
                <CallWhatsAppRow
                  number={whatsappPhone}
                  size="sm"
                  showCall={false}
                  showWhatsApp={true}
                  numberClassName="font-heading font-bold text-[15px] sm:text-[16px] text-black transition-colors hover:text-[#800020]"
                />
                <a href={`mailto:${email}`} className="break-all hover:text-[#800020] transition-colors mt-1">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 overflow-hidden rounded-[14px] border border-black/10 bg-[#e9e9e9] lg:mt-16">
          <iframe
            title="Map showing the Ipile Earth Synergy office at Redemption Camp, Ogun State"
            src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[320px] w-full border-0 sm:h-[400px]"
          />
        </div>
      </div>
    </section>
  );
}
