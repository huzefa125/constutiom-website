import { ServiceHero } from "@/components/sections/services/ServiceHero";
import { HeroContactNumbers } from "@/components/ui/PhoneActions";

/** Same split hero as the About, Projects and Services pages. */
export function ContactHero() {
  return (
    <ServiceHero
      lines={["CONTACT OUR CONSTRUCTION", "COMPANY IN NIGERIA"]}
      compact="small"
      description="Tell us about your project. Call us, visit our office at Redemption Camp, or send a message and we will reply promptly."
      image="/images/contact/contact-hero-featured.webp"
      imageAlt="Modern geometric architectural pavilion with triangular glowing glass windows"
      ctaLabel="SEND A MESSAGE"
      ctaHref="#contact-form"
    >
      <HeroContactNumbers />
    </ServiceHero>
  );
}
