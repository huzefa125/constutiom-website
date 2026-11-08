import type { FaqItem } from "@/components/sections/services/ServiceFaq";

/**
 * Text supports inline links written as [label](/path) or [label](https://...).
 * Question headings carry a short answer (40 to 60 words) that is shown directly under the heading.
 */
export type GuideBlock =
  | { type: "h2"; id: string; text: string; answer?: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; title: string; text: string }
  | { type: "table"; caption: string; headers: string[]; rows: string[][]; foot?: string };

export interface GuideSource {
  name: string;
  url: string;
  /** What the source is and what it was used for. */
  note: string;
}

export interface GuideItem {
  slug: string;
  /** Short label for the footer and cards. */
  short: string;
  /** H1. */
  title: string;
  seoTitle: string;
  seoDescription: string;
  heroLines: [string, string];
  heroText: string;
  image: string;
  imageAlt: string;
  published: string;
  updated: string;
  /** Set only after this person has actually reviewed the guide. */
  reviewedBy?: { name: string; credential: string };
  blocks: GuideBlock[];
  faqs: FaqItem[];
  sources: GuideSource[];
  related: { href: string; title: string; text: string }[];
}
