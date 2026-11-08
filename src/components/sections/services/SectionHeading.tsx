import * as React from "react";

/** Eyebrow + heading, matching the "Our Philosophy" block on the About page. */
export function SectionHeading({ eyebrow, children, answer }: { eyebrow: string; children: React.ReactNode; answer?: string }) {
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
      {answer && (
        <p className="mt-6 max-w-[760px] border-l-4 border-[#800020] pl-5 font-[Urbanist] text-[18px] font-semibold leading-[155%] text-black sm:text-[20px]">
          {answer}
        </p>
      )}
    </div>
  );
}
