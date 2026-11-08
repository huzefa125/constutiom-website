import type { GuideItem } from "./guide-types";
import { COST_GUIDE } from "./guides/cost-of-building-a-house-in-nigeria";
import { BRICKS_GUIDE } from "./guides/earth-bricks-vs-sandcrete-vs-burnt-bricks";
import { BUILD_GUIDE } from "./guides/how-to-build-with-interlocking-earth-bricks";

export const GUIDES_DATA: GuideItem[] = [COST_GUIDE, BRICKS_GUIDE, BUILD_GUIDE];

export function getGuideBySlug(slug: string) {
  return GUIDES_DATA.find((guide) => guide.slug === slug);
}
