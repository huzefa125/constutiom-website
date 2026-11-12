import * as React from "react";
import { Phone } from "lucide-react";
import { COMPANY_DATA } from "@/data/company";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function telHref(number: string) {
  return `tel:${number.replace(/\s+/g, "")}`;
}

export function whatsappHref(number: string) {
  return `https://wa.me/${number.replace(/\D/g, "")}`;
}

interface WhatsAppRowProps {
  number?: string;
  size?: "sm" | "md";
  align?: "start" | "end" | "center";
  numberClassName?: string;
  className?: string;
  showCall?: boolean;
  showWhatsApp?: boolean;
}

/** Displays a phone or WhatsApp number alongside a dedicated action button. */
export function CallWhatsAppRow({
  number = COMPANY_DATA.contact.whatsappPhone,
  size = "md",
  align = "start",
  numberClassName = "font-semibold text-black transition-colors hover:text-[#800020]",
  className = "",
  showCall,
  showWhatsApp,
}: WhatsAppRowProps) {
  const isWhatsappNumber = number === COMPANY_DATA.contact.whatsappPhone;
  const shouldShowCall = showCall !== undefined ? showCall : !isWhatsappNumber;
  const shouldShowWhatsApp = showWhatsApp !== undefined ? showWhatsApp : isWhatsappNumber;

  const btnSize = size === "sm" ? "h-5 w-5" : "h-7 w-7";
  const phoneIconSize = size === "sm" ? "h-2.5 w-2.5" : "h-3.5 w-3.5";
  const waIconSize = size === "sm" ? "h-3 w-3" : "h-4 w-4";
  const alignClass =
    align === "end"
      ? "justify-start lg:justify-end"
      : align === "center"
      ? "justify-center"
      : "justify-start";

  // If this number is purely for WhatsApp, clicking the text opens WhatsApp directly
  const href = shouldShowCall ? telHref(number) : whatsappHref(number);
  const isExternal = !shouldShowCall && shouldShowWhatsApp;

  return (
    <div className={`inline-flex flex-wrap items-center gap-2 ${alignClass} ${className}`}>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noopener noreferrer" : undefined}
        className={numberClassName}
      >
        {number}
      </a>
      <span className="inline-flex items-center gap-1.5 shrink-0">
        {shouldShowCall && (
          <a
            href={telHref(number)}
            aria-label={`Call ${number}`}
            title={`Call ${number}`}
            className={`inline-flex ${btnSize} items-center justify-center rounded-full border border-black/20 bg-white/85 text-black transition-colors hover:border-[#800020] hover:bg-[#800020] hover:text-white`}
          >
            <Phone className={phoneIconSize} />
          </a>
        )}
        {shouldShowWhatsApp && (
          <a
            href={whatsappHref(number)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Chat on WhatsApp ${number}`}
            title={`WhatsApp ${number}`}
            className={`inline-flex ${btnSize} items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-105 hover:bg-[#1ebe57]`}
          >
            <WhatsAppIcon className={waIconSize} />
          </a>
        )}
      </span>
    </div>
  );
}

/** Stacked pair of primary Call number and dedicated WhatsApp number for hero sections and CTAs. */
export function HeroContactNumbers({
  size = "md",
  align = "start",
  className = "",
  numberClassName,
}: {
  size?: "sm" | "md";
  align?: "start" | "end" | "center";
  className?: string;
  numberClassName?: string;
} = {}) {
  const { phone, whatsappPhone } = COMPANY_DATA.contact;
  const numCls =
    numberClassName ??
    "font-[Urbanist] text-base font-semibold text-black transition-colors hover:text-[#800020]";

  return (
    <div className={`flex flex-col items-start gap-1.5 ${className}`}>
      <CallWhatsAppRow
        number={phone}
        size={size}
        align={align}
        showCall={true}
        showWhatsApp={false}
        numberClassName={numCls}
      />
      <CallWhatsAppRow
        number={whatsappPhone}
        size={size}
        align={align}
        showCall={false}
        showWhatsApp={true}
        numberClassName={numCls}
      />
    </div>
  );
}
