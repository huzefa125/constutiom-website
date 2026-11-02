import * as React from "react";
import Image from "next/image";
import { Camera } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";

export function ProjectCaseFiles() {
  return (
    <section className="w-full bg-[#F7C290] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1300px] flex-col gap-20 lg:gap-32">
        {PROJECTS_DATA.map((p, i) => {
          const [lead, ...rest] = p.photos;
          const specs: [string, string][] = [
            ["Location", p.location],
            ["Type", p.category],
            ...(p.client ? ([["Client", p.client]] as [string, string][]) : []),
            ["Method", p.highlight],
          ];
          return (
            <article key={p.id} id={p.id} className="scroll-mt-28">
              <div className="mb-6 flex items-end justify-between gap-6 border-b-2 border-black pb-4">
                <h3 className="font-heading text-[30px] font-semibold uppercase leading-[0.95] text-black sm:text-[44px] lg:text-[60px]">
                  {p.name}
                </h3>
                <span className="font-heading text-[44px] font-semibold leading-none text-[#800020] sm:text-[64px] lg:text-[88px]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                <div className={`lg:col-span-4 ${i % 2 ? "lg:order-2" : ""}`}>
                  <p className="font-[Urbanist] text-[17px] font-medium leading-[150%] text-black/80">
                    {p.description}
                  </p>
                  <dl className="mt-7 divide-y divide-black/15 border-y border-black/15">
                    {specs.map(([k, v]) => (
                      <div key={k} className="flex items-baseline justify-between gap-6 py-3">
                        <dt className="font-[Urbanist] text-xs font-bold uppercase tracking-[0.16em] text-[#800020]">
                          {k}
                        </dt>
                        <dd className="text-right font-[Urbanist] text-[15px] font-semibold text-black">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-5 flex items-center gap-2 font-[Urbanist] text-sm font-semibold text-black/60">
                    <Camera className="h-4 w-4 text-[#800020]" />
                    {p.photos.length} site photo{p.photos.length > 1 ? "s" : ""}
                  </p>
                </div>

                <div className={`grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-8 ${i % 2 ? "lg:order-1" : ""}`}>
                  <div className="relative col-span-2 aspect-[16/10] overflow-hidden rounded-[16px] bg-black/5 shadow-xl">
                    <Image
                      src={lead}
                      alt={p.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 820px"
                      className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                  </div>
                  {rest.slice(0, 4).map((src, n) => (
                    <div
                      key={src}
                      className="relative aspect-[4/3] overflow-hidden rounded-[12px] bg-black/5 shadow-md"
                    >
                      <Image
                        src={src}
                        alt={`${p.name} site photo ${n + 2}`}
                        fill
                        sizes="(max-width: 1024px) 50vw, 400px"
                        className="object-cover transition-transform duration-700 hover:scale-[1.05]"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
