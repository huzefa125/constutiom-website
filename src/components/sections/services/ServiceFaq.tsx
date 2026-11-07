import { JsonLd } from "@/components/ui/JsonLd";
import { faqSchema } from "@/lib/seo";
import { SectionHeading } from "./SectionHeading";

export type FaqItem = { q: string; a: string };

export const SHARED_FAQS: FaqItem[] = [
  {
    q: "What is Compressed Earth Brick (CEB)?",
    a: "CEB is our signature product. It is made from laterite soil, stabilised with a small percentage of cement and water, then manually compressed at high pressure to form bricks.",
  },
  {
    q: "How much can CEB save me?",
    a: "Using CEB reduces the cost of housing by 30–40% of the total walling cost per unit.",
  },
  {
    q: "Will you build to my own design?",
    a: "Yes. We design and build to each client's requirements, and we also offer model construction plans and designs.",
  },
  {
    q: "How will I track cost and progress?",
    a: "Progress is monitored throughout the contract. Periodic progress reports include cost control charts, so you can see financial status against work done.",
  },
];

export function ServiceFaq({ items }: { items: FaqItem[] }) {
  return (
    <section className="w-full bg-[#f7f7f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <JsonLd data={faqSchema(items)} />
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ">
            Common <span className="text-[#800020]">questions</span>
          </SectionHeading>
        </div>
        <div className="lg:col-span-8">
          {items.map((item, i) => (
            <details key={item.q} open={i === 0} className="group border-t border-black/10 py-5 last:border-b">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-[Urbanist] text-[18px] font-semibold leading-[1.3] text-black transition-colors group-open:text-[#800020] sm:text-[20px] [&::-webkit-details-marker]:hidden">
                {item.q}
                <span
                  aria-hidden="true"
                  className="text-2xl font-medium leading-none transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-[640px] font-[Urbanist] text-base font-medium leading-[150%] text-black/70">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
