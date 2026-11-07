import Image from "next/image";
import Link from "next/link";

const PROOF = [
  ["30–40%", "Lower walling cost per unit with Compressed Earth Brick"],
  ["100", "Housing units built for the Nigerian Navy at Kuje"],
  ["05", "Service lines under one accountable team"],
];

export function ServicesIntro() {
  return (
    <section id="services-intro" className="w-full bg-[#f7f7f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto grid w-full max-w-[1300px] grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col gap-8 lg:col-span-4">
          <p className="max-w-[320px] font-[Urbanist] text-[17px] font-medium leading-[150%] text-black/80">
            One team takes your project from first sketch to handover.
          </p>
          <div className="relative aspect-[4/3] w-full max-w-[440px] overflow-hidden rounded-[14px] bg-[#e9e9e9]">
            <Image
              src="/images/service-photos/intro-crew.webp"
              alt="Ipile crew in orange overalls laying Compressed Earth Brick walls on site"
              fill
              sizes="(max-width: 1024px) 90vw, 440px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-8">
          <p className="font-[Urbanist] text-[28px] font-medium leading-[1.2] tracking-[-0.01em] text-black sm:text-[36px] lg:text-[46px]">
            We design and build to each client&apos;s needs, using locally available resources and our own{" "}
            <Link href="/compressed-earth-bricks" className="text-[#800020] underline underline-offset-4">
              Compressed Earth Bricks
            </Link>{" "}
            to deliver{" "}
            <Link href="/affordable-housing-nigeria" className="text-[#800020] underline underline-offset-4">
              affordable housing in Nigeria
            </Link>
            .
          </p>
          <dl className="mt-12 grid grid-cols-1 gap-8 border-t border-black/10 pt-8 sm:grid-cols-3">
            {PROOF.map(([value, label]) => (
              <div key={label} className="flex flex-col gap-1.5">
                <dt className="font-heading text-3xl font-bold leading-none text-black sm:text-4xl lg:text-[42px]">
                  {value}
                </dt>
                <dd className="max-w-[220px] font-[Urbanist] text-sm font-medium leading-tight text-black/75">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
