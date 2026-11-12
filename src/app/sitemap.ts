import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SERVICES_DATA } from "@/data/services";
import { LOCATIONS_DATA } from "@/data/locations";
import { GUIDES_DATA } from "@/data/guides";

/** Update when page content changes. A date that changes on every build tells search engines nothing. */
const LAST_UPDATED = new Date("2026-11-12");

const page = (path: string, priority: number, images?: string[]): MetadataRoute.Sitemap[number] => ({
  url: `${SITE_URL}${path}`,
  lastModified: LAST_UPDATED,
  priority,
  images: images?.map((image) => `${SITE_URL}${image}`),
});

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    page("/", 1),
    page("/affordable-housing-nigeria", 0.9, ["/images/service-photos/property-facility-management-1.webp"]),
    page("/compressed-earth-bricks", 0.9, ["/images/service-photos/general-contracts-procurement-1.webp"]),
    page("/services", 0.9),
    ...SERVICES_DATA.map((s) => page(s.link, 0.8, [s.image, ...s.gallery.map((photo) => photo.src)])),
    page("/guides", 0.8),
    ...GUIDES_DATA.map((g) => page(`/guides/${g.slug}`, 0.9, [g.image])),
    ...LOCATIONS_DATA.map((l) => page(`/locations/${l.slug}`, 0.8, [l.image])),
    page("/projects", 0.8),
    page("/about", 0.7),
    page("/press", 0.5),
    page("/contact", 0.7),
  ];
}
