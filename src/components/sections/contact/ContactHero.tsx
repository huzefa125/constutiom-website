import { COMPANY_DATA } from "@/data/company";
import { ServiceHero } from "@/components/sections/services/ServiceHero";

/** Same split hero as the About, Projects and Services pages. */
export function ContactHero() {
  const { phone } = COMPANY_DATA.contact;

  return (
    <ServiceHero
      lines={["CONTACT A BUILDER", "IN NIGERIA"]}
      compact
      description="Tell us about your project. Call us, visit our office at Redemption Camp, or send a message and we will reply promptly."
      image="/images/contact/contact-hero-featured.webp"
      imageAlt="Modern geometric architectural pavilion with triangular glowing glass windows"
      ctaLabel="SEND A MESSAGE"
      ctaHref="#contact-form"
    >
      <a
        href={`tel:${phone.replace(/\s+/g, "")}`}
        className="font-[Urbanist] text-base font-semibold text-black transition-colors hover:text-[#800020]"
      >
        {phone}
      </a>
    </ServiceHero>
  );
}
