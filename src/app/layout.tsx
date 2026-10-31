import type { Metadata } from "next";
import { Inter, Phudu, Urbanist } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

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
    "Distinguished Nigerian civil engineering, property management, and general contracting company. Leaders in Compressed Earth Brick (CEB) sustainable construction.",
  keywords: [
    "Ipile Earth Synergy",
    "Compressed Earth Bricks Nigeria",
    "Hydraform Sustainable Housing",
    "Abuja Civil Engineering",
    "Nigerian Navy Barracks Construction",
    "Green Building Technology",
    "General Contracting Abuja",
  ],
  authors: [{ name: "Ipile Earth Synergy Construction Limited" }],
  openGraph: {
    title: "Ipile Earth Synergy Construction Limited",
    description:
      "Distinguished Nigerian engineering and sustainable infrastructure firm specializing in Compressed Earth Brick (CEB) technology.",
    url: "https://ipileearth.com",
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
      className={`${inter.variable} ${phudu.variable} ${urbanist.variable} scroll-smooth antialiased`}
    >
      <body suppressHydrationWarning className="min-h-screen flex flex-col bg-[#F7C290] text-[#242424]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
