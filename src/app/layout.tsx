import type { Metadata } from "next";
import { Phudu, Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
  title: "Ipile Earth Synergy Construction Limited | Engineering & Sustainable Infrastructure",
  description:
    "Modern Nigerian construction company established in 2017, providing suitable and affordable homes in a sustainable environment using Compressed Earth Brick (CEB).",
  keywords: [
    "Ipile Earth Synergy",
    "Compressed Earth Bricks Nigeria",
    "Affordable Homes Nigeria",
    "Building Maintenance",
    "Property and Facility Management",
    "Green Building Technology",
    "General Contracting Nigeria",
  ],
  authors: [{ name: "Ipile Earth Synergy Construction Limited" }],
  openGraph: {
    title: "Ipile Earth Synergy Construction Limited",
    description:
      "Affordable, sustainable homes and construction services across Nigeria using Compressed Earth Brick (CEB).",
    url: "https://www.ipileearth.com.ng",
    siteName: "Ipile Earth Synergy",
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${phudu.variable} ${urbanist.variable} scroll-smooth antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-[#F7C290] text-[#242424]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
