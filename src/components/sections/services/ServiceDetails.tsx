import type { ServiceContent } from "@/data/service-content";
import { SectionHeading } from "./SectionHeading";

/** Main written content of a service page: the in-depth sections and who the service is for. */
export function ServiceDetails({ content, eyebrow }: { content: ServiceContent; eyebrow: string }) {
  return (
    <section className="w-full px-5 pb-20 sm:px-8 sm:pb-28 lg:px-12 lg:pb-36">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <SectionHeading eyebrow={eyebrow}>{content.heading}</SectionHeading>
            <div className="mt-8 border-t border-black/10 pt-6">
              <h3 className="font-[Urbanist] text-xs font-semibold uppercase tracking-[2px] text-[#800020] sm:text-sm">
                Who this is for
              </h3>
              <ul className="mt-4">
                {content.whoFor.map((item) => (
                  <li
                    key={item}
                    className="border-b border-black/10 py-3 font-[Urbanist] text-base font-semibold text-black/85"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="flex flex-col gap-5">
            {content.intro.map((paragraph) => (
              <p key={paragraph} className="font-[Urbanist] text-[17px] font-medium leading-[160%] text-black/80 sm:text-[18px]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-8">
            {content.sections.map((section) => (
              <div key={section.title} className="border-t border-black/10 pt-6">
                <h3 className="font-heading text-[22px] font-bold uppercase leading-[1.05] text-black sm:text-[26px]">
                  {section.title}
                </h3>
                <p className="mt-3 font-[Urbanist] text-[17px] font-medium leading-[160%] text-black/75">{section.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
