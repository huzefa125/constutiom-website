import * as React from "react";
import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  variant?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  priority?: boolean;
}

export function BrandLogo({
  className = "",
  variant = "light",
  size = "lg",
  priority = false,
}: BrandLogoProps) {
  const isDark = variant === "dark";

  // Aspect ratio is 925 / 177 (~5.23:1)
  const heightClass =
    size === "lg"
      ? "h-12 md:h-14"
      : size === "sm"
      ? "h-8 md:h-9"
      : "h-9 sm:h-10 md:h-11";

  const logoSrc = isDark ? "/logos/ipile-logo-dark.webp" : "/logos/ipile-logo.webp";

  return (
    <Link
      href="/"
      className={`group relative inline-flex items-center shrink-0 focus:outline-none duration-300 hover:opacity-90 ${className}`}
      aria-label="Ipile Earth Synergy Construction Limited"
    >
      <Image
        src={logoSrc}
        alt="Ipile Earth Synergy Construction Limited"
        width={462}
        height={88}
        loading={priority ? "eager" : "lazy"}
        unoptimized
        className={`${heightClass} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
      />
    </Link>
  );
}
