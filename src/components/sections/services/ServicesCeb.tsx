import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

const STEPS = [
  ["Laterite soil", "Bricks start from laterite, a composite soil and a locally available resource."],
  ["Stabilised", "The soil is stabilised with a small percentage of cement and water."],
  ["Compressed", "It is manually compressed at high pressure to form bricks, using very little energy."],
];

export function ServicesCeb() {
  return (
    <section className="w-full bg-[#f7f7f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-[#e9e9e9] lg:col-span-6">
          <Image
            src="/images/service-photos/ceb-press.webp"
            alt="Ipile crew pressing Compressed Earth Bricks on a manual block press"
            fill
            sizes="(max-width: 1024px) 100vw, 640px"
            className="object-cover"
          />
        </div>
        <div className="lg:col-span-6">
          <SectionHeading eyebrow="Our signature product">
            How are our <span className="text-[#800020]">Compressed Earth Bricks</span> made?
          </SectionHeading>
          <p className="mt-6 font-[Urbanist] text-[17px] font-medium leading-[150%] text-black/80">
            Compressed Earth Bricks are made from laterite soil, stabilised with a small percentage of cement and water, then
            manually compressed at high pressure into uniform blocks. They use very little energy to produce, rely on locally
            available soil, and cut the total walling cost of a building by 30–40%.
          </p>
          <ol className="mt-8 border-t border-black/10">
            {STEPS.map(([title, text], i) => (
              <li key={title} className="grid grid-cols-[40px_1fr] gap-x-2 border-b border-black/10 py-5">
                <span className="pt-0.5 font-[Urbanist] text-sm font-bold tabular-nums text-[#800020]">0{i + 1}</span>
                <div>
                  <h3 className="font-heading text-[20px] font-bold uppercase leading-none text-black sm:text-[22px]">{title}</h3>
                  <p className="mt-2 font-[Urbanist] text-base font-medium leading-[150%] text-black/70">{text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-6 font-[Urbanist] text-[17px] font-semibold leading-[150%] text-black">
            The result: housing cost comes down by 30–40% of the total walling cost per unit.
          </p>
        </div>
      </div>
    </section>
  );
}
