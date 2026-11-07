import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export type RelatedLink = { href: string; title: string; text: string };

/** Cross-links between service pages, guides and projects. */
export function RelatedLinks({ heading, links }: { heading: string; links: RelatedLink[] }) {
  return (
    <section className="w-full px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12">
      <div className="mx-auto w-full max-w-[1300px]">
        <SectionHeading eyebrow="Keep exploring">{heading}</SectionHeading>
        <ul className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group flex h-full flex-col justify-between gap-6 rounded-[14px] border border-black/10 p-6 transition-colors hover:border-[#800020] lg:p-8"
              >
                <span>
                  <span className="block font-heading text-[20px] font-bold uppercase leading-[1.05] text-black sm:text-[24px]">
                    {link.title}
                  </span>
                  <span className="mt-3 block font-[Urbanist] text-base font-medium leading-[150%] text-black/70">
                    {link.text}
                  </span>
                </span>
                <span className="inline-flex items-center gap-2 font-[Urbanist] text-sm font-bold uppercase tracking-wider text-[#800020]">
                  Read more
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
