export interface PressItem {
  outlet: string;
  title: string;
  url: string;
  /** ISO date, only when the page states it. */
  date?: string;
  author?: string;
  /** What the piece says, kept to what the page states. */
  summary: string;
  /** Internal guide or deep-dive article discussing this piece */
  guideUrl?: string;
  guideLabel?: string;
}

/** Coverage of Ipile Earth Synergy. */
export const PRESS_DATA: PressItem[] = [
  {
    outlet: "BusinessDay",
    title: "Oluwole: Naval officer eyes affordable housing in Africa",
    url: "https://businessday.ng/real-estate/article/oluwole-naval-officer-eyes-affordable-housing-in-africa/",
    date: "2020-09-21",
    author: "Odinaka Anudu",
    summary:
      "Profile of founder Rear Admiral James Oluwole. It covers the move to stabilised Compressed Earth Bricks, the 2017 start and the housing built for naval formations at Kuje, Calabar and Lokoja.",
    guideUrl: "/guides/making-affordable-housing-possible-in-africa",
    guideLabel: "Read our guide on Admiral Oluwole's housing roadmap →",
  },
  {
    outlet: "MSME Africa",
    title: "How Retired Admiral James Oluwole Plans To Make Affordable Housing Possible in Africa",
    url: "https://msmeafricaonline.com/how-retired-admiral-james-oluwole-plans-to-make-affordable-housing-possible-in-africa/",
    date: "2020-09-02",
    author: "MSME Africa",
    summary:
      "Interview on how Ipile builds with cement-stabilised laterite bricks, its clients including the Nigerian Navy, RCCG and the Defence Intelligence College, and advice on keeping house designs simple to hold costs down.",
    guideUrl: "/guides/making-affordable-housing-possible-in-africa",
    guideLabel: "Read our full editorial guide on this interview →",
  },
  {
    outlet: "Independent Nigeria",
    title: "Developer adopts CEB technology to reduce housing deficits",
    url: "https://independent.ng/developer-adopts-ceb-technology-to-reduce-housing-deficits/",
    summary: "Coverage of a developer adopting Compressed Earth Brick technology to help reduce the housing deficit.",
    guideUrl: "/guides/compressed-earth-bricks-vs-sandcrete-vs-burnt-bricks",
    guideLabel: "Read our technical bricks comparison guide →",
  },
];

/** Background reading on housing finance. These pieces do not mention Ipile. */
export const CONTEXT_DATA: PressItem[] = [
  {
    outlet: "MOFI (via Vanguard)",
    title: "Housing: MOFI, Shelter Afrique Sign ₦100bn Deal",
    url: "https://mofi.com.ng/housing-mofi-shelter-afrique-sign-%E2%82%A6100bn-deal/",
    date: "2025-05-01",
    summary:
      "The Ministry of Finance Incorporated and Shelter Afrique signed an MoU for a ₦100 billion deal to finance housing projects across Nigeria, under the MOFI Real Estate Investment Fund.",
    guideUrl: "/guides/mofi-shelter-afrique-100bn-housing-deal",
    guideLabel: "Read our detailed analysis of the ₦100bn deal →",
  },
];
