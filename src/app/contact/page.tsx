import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact/ContactHero";
import { ContactOffices } from "@/components/sections/contact/ContactOffices";
import { ContactFormSection } from "@/components/sections/contact/ContactFormSection";

export const metadata: Metadata = {
  title: "Contact Us | Ipile Earth Synergy Construction Limited",
  description:
    "Get in touch with Ipile Earth Synergy Construction Limited. Contact our Abuja headquarters and regional engineering hubs for sustainable construction, compressed earth blocks, and civil engineering projects.",
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[#f7f7f7]">
      <ContactHero />
      <ContactOffices />
      <ContactFormSection />
    </main>
  );
}
