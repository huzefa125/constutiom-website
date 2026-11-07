import * as React from "react";

/** Eyebrow + heading, matching the "Our Philosophy" block on the About page. */
export function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-start">
      <div className="mb-4 flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-[#800020]" />
        <span className="font-[Urbanist] text-xs font-semibold uppercase tracking-[2px] text-[#800020] sm:text-sm">
          {eyebrow}
        </span>
      </div>
      <h2 className="font-heading text-[32px] font-bold uppercase leading-[0.98] tracking-tight text-black sm:text-[42px] lg:text-[46px] xl:text-[52px]">
        {children}
      </h2>
    </div>
  );
}
