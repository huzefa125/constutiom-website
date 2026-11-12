import type { Metadata } from "next";
import { Phudu, Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TimedPopupForm } from "@/components/ui/TimedPopupForm";
import { JsonLd } from "@/components/ui/JsonLd";
import { DEFAULT_OG_IMAGE, ORGANIZATION_SCHEMA, SITE_URL, WEBSITE_SCHEMA } from "@/lib/seo";

const phudu = Phudu({
  subsets: ["latin"],
  variable: "--font-phudu",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Affordable Homes & Construction in Nigeria | Ipile Earth",
    template: "%s | Ipile Earth",
  },
  description:
    "Ipile Earth Synergy Construction Limited builds affordable homes in Nigeria using Compressed Earth Brick (CEB). Construction, building maintenance, structural design and property management since 2017.",
  keywords: [
    "Low cost construction in Nigeria",
    "African construction company",
    "low cost housing",
    "House under 20 million naira",
    "construction company in Nigeria",
    "affordable homes in Nigeria",
    "compressed earth brick Nigeria",
    "interlocking brick houses",
    "building contractors Lagos Ogun",
    "building maintenance company",
    "property and facility management Nigeria",
    "Ipile Earth Synergy",
  ],
  authors: [{ name: "Ipile Earth Synergy Construction Limited" }],
  creator: "Ipile Earth Synergy Construction Limited",
  publisher: "Ipile Earth Synergy Construction Limited",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    title: "Ipile Earth Synergy Construction Limited | Affordable Homes in Nigeria",
    description:
      "Affordable, sustainable homes and construction services across Nigeria using Compressed Earth Brick (CEB).",
    url: SITE_URL,
    siteName: "Ipile Earth Synergy",
    locale: "en_NG",
    type: "website",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "Compressed Earth Brick homes built by Ipile Earth Synergy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ipile Earth Synergy Construction Limited",
    description: "Affordable, sustainable homes and construction services across Nigeria.",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-NG"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${phudu.variable} ${urbanist.variable} scroll-smooth antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-[#F7C290] text-[#242424]">
        <JsonLd data={[ORGANIZATION_SCHEMA, WEBSITE_SCHEMA]} />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <TimedPopupForm />
      </body>
    </html>
  );
}
