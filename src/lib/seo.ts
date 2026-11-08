import type { Metadata } from "next";
import { COMPANY_DATA } from "@/data/company";

export const SITE_URL = "https://www.ipileearth.com.ng";
export const SITE_NAME = "Ipile Earth Synergy";
const TITLE_SUFFIX = "Ipile Earth";
export const DEFAULT_OG_IMAGE = "/images/gallery/navy-barracks-atimbo/navy-barracks-atimbo-10.jpg";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  keywords?: string[];
  /** Set for guides and articles: switches Open Graph to the article type and adds dates. */
  article?: { published: string; modified: string };
}

/** Per-page metadata with canonical URL, Open Graph and Twitter card. */
export function pageMetadata({ title, description, path, image = DEFAULT_OG_IMAGE, keywords, article }: PageMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const fullTitle = `${title} | ${TITLE_SUFFIX}`;
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_NG",
      images: [{ url: image, alt: title }],
      ...(article
        ? { type: "article" as const, publishedTime: article.published, modifiedTime: article.modified, authors: [SITE_NAME] }
        : { type: "website" as const }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
  };
}

const { phones, email } = COMPANY_DATA.contact;

/** Sitewide organisation node, referenced by @id from every other schema node. */
export const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["GeneralContractor", "Organization"],
  "@id": `${SITE_URL}/#organization`,
  name: COMPANY_DATA.name,
  legalName: COMPANY_DATA.name,
  alternateName: [SITE_NAME, "Ipile Earth"],
  identifier: { "@type": "PropertyValue", propertyID: "CAC RC Number", value: COMPANY_DATA.cacNumber },
  ...(COMPANY_DATA.social.length ? { sameAs: COMPANY_DATA.social.map((link) => link.url) } : {}),
  url: SITE_URL,
  logo: `${SITE_URL}/logos/ipile-official-full-logo-transparent.png`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  description: COMPANY_DATA.description,
  foundingDate: COMPANY_DATA.founded,
  slogan: "Suitable and affordable homes in a sustainable environment",
  email,
  telephone: phones[0],
  contactPoint: phones.map((telephone) => ({
    "@type": "ContactPoint",
    telephone,
    email,
    contactType: "customer service",
    areaServed: "NG",
    availableLanguage: "English",
  })),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Abba Father Estate off Estate 15, Redemption Camp, Lagos-Ibadan Expressway",
    addressLocality: "Redemption Camp",
    addressRegion: "Ogun State",
    addressCountry: "NG",
  },
  areaServed: { "@type": "Country", name: "Nigeria" },
  knowsAbout: [
    "Compressed Earth Brick construction",
    "Interlocking bricks",
    "Affordable housing in Nigeria",
    "Low-cost housing",
    "Civil construction",
    "Building maintenance",
    "Structural design",
    "Property and facility management",
  ],
};

export const WEBSITE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: COMPANY_DATA.name,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-NG",
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(service: { title: string; category: string; description: string; id: string; image: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.category,
    description: service.description,
    url: `${SITE_URL}/services/${service.id}`,
    image: `${SITE_URL}${service.image}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "Nigeria" },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: `${SITE_URL}${item.path}`,
    })),
  };
}

export function personSchema(person: { name: string; role: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.role,
    worksFor: { "@id": `${SITE_URL}/#organization` },
  };
}

export function articleSchema(article: { headline: string; description: string; path: string; image: string; datePublished: string; dateModified: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.headline,
    description: article.description,
    image: `${SITE_URL}${article.image}`,
    mainEntityOfPage: `${SITE_URL}${article.path}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    inLanguage: "en-NG",
  };
}

/** Serialise for an inline JSON-LD script (escapes `<` to avoid script injection). */
export function jsonLdString(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
