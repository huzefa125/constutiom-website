import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";

export function Introduction() {
  return (
    <section id="about" className="bg-[#f7f7f7] px-[10px] py-[30px] sm:px-5 lg:py-[50px]">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="flex flex-col gap-[40px] lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          {/* Left */}
          <div className="flex w-full flex-col items-start justify-center gap-5 lg:w-[38%] lg:shrink-0">
            <div className="flex items-center gap-[6px]">
              <div className="h-2 w-2 rounded-full bg-black" />
              <div className="font-[Urbanist] text-sm font-semibold uppercase leading-[150%] tracking-[1.92px] text-black">
                About us
              </div>
            </div>

            <h2 className="font-serif max-w-[600px] text-[30px] uppercase leading-[0.98] text-black sm:text-[36px] lg:max-w-[520px] lg:text-[46px] xl:text-[56px]">
              Experts in sustainable <span className="whitespace-nowrap">earth-brick</span> building!
            </h2>

            <p className="mb-3 mt-2 max-w-[411px] font-[Urbanist] text-lg font-medium leading-[145%] text-black/70">
              {COMPANY_DATA.shortName} is a modern construction company established in {COMPANY_DATA.founded}, building{" "}
              <Link href="/affordable-housing-nigeria" className="text-[#800020] underline underline-offset-4">
                affordable homes in Nigeria
              </Link>{" "}
              in a sustainable environment with{" "}
              <Link href="/compressed-earth-bricks" className="text-[#800020] underline underline-offset-4">
                Compressed Earth Brick
              </Link>{" "}
              and locally available resources.
            </p>

            <Link
              href="/about"
              className="group flex items-center gap-[10px] border-b border-black pb-[2px] transition-colors hover:border-[#800020] hover:text-[#800020]"
            >
              <span className="font-serif text-[16px] font-semibold uppercase leading-none lg:text-[18px]">More about us</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Right */}
          <div className="relative flex min-w-0 flex-1 flex-col items-end justify-end gap-[30px] lg:flex-row lg:items-end lg:gap-10 xl:gap-[50px]">
            {/* Decorative ring */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-[100px] hidden aspect-square w-full max-w-[310px] rounded-full border-[64px] border-[#800020]/[0.08] lg:block"
            />

            <div className="relative flex w-full min-w-0 items-end justify-start gap-6 lg:flex-1">
              <div className="relative hidden aspect-[182/227] w-full max-w-[182px] overflow-hidden rounded-lg lg:block">
                <Image
                  src="/images/gallery/navy-barracks-kuje/navy-barracks-kuje-03.jpg"
                  alt="Compressed Earth Brick bungalow with palm, Kuje, Abuja"
                  fill
                  sizes="182px"
                  className="object-cover"
                />
              </div>
              <div className="relative h-[300px] w-full overflow-hidden rounded-lg lg:aspect-[2/3] lg:h-auto lg:max-w-[332px]">
                <Image
                  src="/images/gallery/navy-barracks-kuje/navy-barracks-kuje-06.jpg"
                  alt="Compressed Earth Brick barracks, Kuje, Abuja"
                  fill
                  sizes="(max-width: 1024px) 100vw, 332px"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="relative grid w-full grid-cols-1 gap-[30px] lg:flex lg:w-[150px] lg:shrink-0 lg:flex-col lg:gap-12">
              {COMPANY_DATA.stats.map((stat) => (
                <div key={stat.label} className="flex flex-col gap-3 max-lg:items-center max-lg:rounded-lg max-lg:bg-white max-lg:px-5 max-lg:py-10 max-lg:text-center">
                  <div className="font-serif text-[30px] font-semibold leading-[1.1] text-black sm:text-[35px] xl:text-[40px]">
                    {stat.value}
                  </div>
                  <p className="max-w-none font-[Urbanist] lg:max-w-[110px] text-base font-medium leading-[131%] text-black">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
