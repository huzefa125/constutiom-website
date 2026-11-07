import { SectionHeading } from "./SectionHeading";

export type DeliveryStep = { title: string; text: string };

const DELIVERY: DeliveryStep[] = [
  {
    title: "Brief & design",
    text: "We take a full briefing from everyone involved, look at the available funding, then handle the design.",
  },
  {
    title: "Plan the works",
    text: "A planning officer, quantity surveyor, site engineer and technical officers are assigned to your contract.",
  },
  {
    title: "Monitor & control",
    text: "Progress is tracked regularly, and periodic reports with cost control charts show spend against work done.",
  },
  {
    title: "Quality & safety",
    text: "We work to Federal Ministry of Works standards, with qualified personnel in charge of site safety.",
  },
];

/** Four-step row. Defaults to the company-wide delivery steps; child pages pass their own. */
export function ServicesDelivery({
  eyebrow = "How we deliver",
  steps = DELIVERY,
  children = (
    <>
      You always know where your <span className="text-[#800020]">project stands</span>
    </>
  ),
}: {
  eyebrow?: string;
  steps?: DeliveryStep[];
  children?: React.ReactNode;
}) {
  return (
    <section className="w-full bg-[#f7f7f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto w-full max-w-[1300px]">
        <SectionHeading eyebrow={eyebrow}>{children}</SectionHeading>
        <ol className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-8">
          {steps.map((step, i) => (
            <li key={step.title} className="flex flex-col gap-3 border-t border-black/10 pt-5">
              <span className="font-heading text-3xl font-bold leading-none text-[#800020] sm:text-4xl lg:text-[42px]">
                0{i + 1}
              </span>
              <h3 className="mt-2 font-heading text-[20px] font-bold uppercase leading-none text-black sm:text-[22px]">
                {step.title}
              </h3>
              <p className="font-[Urbanist] text-base font-medium leading-[150%] text-black/70">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
