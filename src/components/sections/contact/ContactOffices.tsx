import * as React from "react";
import { COMPANY_DATA } from "@/data/company";

export function ContactOffices() {
  const phone = COMPANY_DATA.contact.phone;
  const email = COMPANY_DATA.contact.email;

  const offices = [
    {
      city: "ABUJA (HQ)",
      address: COMPANY_DATA.headquarters,
      phone: phone,
      email: email,
    },
    {
      city: "CALABAR",
      address: "Atimbo & Akpabuyo Operational Corridors, Calabar, Cross River State, Nigeria",
      phone: phone,
      email: "PROJECTS@IPILEARTH.COM",
    },
  ];

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
              CONTACT US OUR
              <br />
              OFFICES AROUND
              <br />
              THE WORLD.
            </h2>
          </div>

          {/* Right Offices Column: 2 side-by-side columns matching Image 2 */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-12">
            {offices.map((office) => (
              <div key={office.city} className="flex flex-col">
                <h3 className="font-heading font-bold text-xl sm:text-2xl text-black uppercase tracking-tight mb-2">
                  {office.city}
                </h3>
                <p className="font-[Urbanist] text-[15px] sm:text-[16px] text-black/60 leading-[140%] mb-5 min-h-[44px]">
                  {office.address}
                </p>

                {/* Thin horizontal divider line matching template */}
                <div className="w-full h-px bg-black/20 mb-5" />

                <div className="flex flex-col gap-1 font-heading font-bold text-[15px] sm:text-[16px] text-black uppercase">
                  <a
                    href={`tel:${office.phone.replace(/\s+/g, "")}`}
                    className="hover:text-[#800020] transition-colors"
                  >
                    {office.phone}
                  </a>
                  <a
                    href={`mailto:${office.email}`}
                    className="hover:text-[#800020] transition-colors"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
