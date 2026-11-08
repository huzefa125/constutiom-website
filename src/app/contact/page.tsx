import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactOffices } from "@/components/sections/contact/ContactOffices";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us: Construction Company in Nigeria",
  description:
    "Contact Ipile Earth Synergy for affordable homes and construction in Nigeria. Visit us at Redemption Camp, Lagos-Ibadan Expressway, or call +234 812 686 8754.",
  path: "/contact",
  image: "/images/contact/contact-hero-featured.webp",
});

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col w-full bg-[#f7f7f7]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
      <ContactHero />
      <ContactOffices />
      <ContactFormSection />
    </div>
  );
}
