import type { GuideItem } from "./guide-types";
import { COST_GUIDE } from "./guides/cost-of-building-a-house-in-nigeria";
import { BRICKS_GUIDE } from "./guides/earth-bricks-vs-sandcrete-vs-burnt-bricks";
import { BUILD_GUIDE } from "./guides/how-to-build-with-interlocking-earth-bricks";
import { OLUWOLE_AFRICA_HOUSING_GUIDE } from "./guides/making-affordable-housing-possible-in-africa";
import { MOFI_DEAL_GUIDE } from "./guides/mofi-shelter-afrique-100bn-housing-deal";

export const GUIDES_DATA: GuideItem[] = [
  COST_GUIDE,
  BRICKS_GUIDE,
  BUILD_GUIDE,
  OLUWOLE_AFRICA_HOUSING_GUIDE,
  MOFI_DEAL_GUIDE,
];

export function getGuideBySlug(slug: string) {
  return GUIDES_DATA.find((guide) => guide.slug === slug);
}
