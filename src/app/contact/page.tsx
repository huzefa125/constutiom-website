import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactOffices } from "@/components/sections/contact/ContactOffices";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us: Redemption Camp, Lagos-Ibadan Expressway",
  description:
    "Visit Ipile Earth Synergy at Abba Father Estate, Redemption Camp, Lagos-Ibadan Expressway, or call +234 812 686 8754 for construction, building maintenance, design and property management.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#f7f7f7]">
      <ContactHero />
      <ContactOffices />
      <ContactFormSection />
    </main>
  );
}
