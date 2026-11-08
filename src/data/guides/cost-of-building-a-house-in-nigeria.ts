import type { GuideItem } from "../guide-types";

/**
 * Every figure here is quoted from the source named next to it and checked on 8 November 2026.
 * Derived numbers (shares, savings) are our own arithmetic and are labelled as such.
 */
export const COST_GUIDE: GuideItem = {
  slug: "cost-of-building-a-house-in-nigeria",
  short: "Cost of Building a House",
  title: "Cost of Building a House in Nigeria (2026)",
  seoTitle: "Cost of Building a House in Nigeria (2026)",
  seoDescription:
    "What it costs to build a house in Nigeria in 2026: published price ranges, cost per square metre, where the money goes, and a worked example with earth bricks.",
  heroLines: ["COST OF BUILDING", "A HOUSE IN NIGERIA"],
  heroText:
    "Published 2026 price ranges, cost per square metre, where the money goes, and a worked example of what earth bricks can save.",
  image: "/images/service-photos/structural-design-hero.webp",
  imageAlt: "Two engineers in high-visibility vests reviewing a building drawing together",
  published: "2026-11-08",
  updated: "2026-11-08",
  blocks: [
    {
      type: "p",
      text: "Ask five people what a house costs in Nigeria and you will hear five different numbers. They are not all wrong. Materials, finishes, location and the year all move the total, and prices in 2026 have moved quickly. This guide collects the published figures in one place, shows where they come from, and explains why they disagree.",
    },
    {
      type: "p",
      text: "We build homes for a living, so we have a view, but this is not a price list. Every figure below is quoted from a named source and checked on 8 November 2026. Where a number is our own arithmetic, we say so. None of the sources is an official statistic: we looked for a National Bureau of Statistics or Nigerian Institute of Quantity Surveyors series on construction cost per square metre and did not find one. Treat everything here as a planning range, not a quote.",
    },
    {
      type: "note",
      title: "Read this first",
      text: "These are estimates from property blogs and news sites, excluding land. Your own cost depends on your plot, plan and finishes. A **bill of quantities** is a priced list of every item and quantity in your design, and it is the only reliable number for your own house. Ask us for one, or use any qualified quantity surveyor.",
    },
    {
      type: "h2",
      id: "how-much",
      text: "How much does it cost to build a house in Nigeria in 2026?",
      answer:
        "Published 2026 estimates vary widely. A two-bedroom house is quoted at about ₦20–40 million (Legit.ng, August 2026), and a three-bedroom house in Lagos at ₦11 million to over ₦60 million depending on finish (Ownkey, June 2026). All exclude land. Get a bill of quantities for your own plan.",
    },
    {
      type: "table",
      caption: "Published estimates for the cost of a house, excluding land",
      headers: ["Source and date", "House", "Quoted range", "What to know"],
      rows: [
        ["Legit.ng, 26 August 2026", "Two-bedroom, about 80–120 m²", "₦20 million – ₦40 million", "News article. No method stated."],
        ["Ownkey, 9 June 2026", "Three-bedroom, Lagos", "Economy ₦11–17 million. Mid-market ₦16–28 million. Premium ₦29–60 million and above", "Property marketing blog. Based on about ₦1,600 to the dollar. No floor area given."],
        ["Dutum Group, 10 June 2025", "Three-bedroom bungalow", "₦15 million – ₦25 million", "Contractor blog. Written before the 2026 cement rise."],
        ["Dutum Group, 10 June 2025", "Four-bedroom bungalow", "₦35 million – ₦70 million", "Contractor blog. No floor area given."],
      ],
      foot: "Sources: legit.ng, ownkey.com and dutumgroup.com. Full links are at the end of this guide.",
    },
    {
      type: "p",
      text: "Look at the table and you can already see the problem. The Legit.ng range for a two-bedroom house starts higher than the Ownkey range for a three-bedroom economy house. They are measuring different things: different floor areas, different finishes, and in some cases a contractor’s profit and contingency on top. None of them tells you which finish level it assumes with any precision.",
    },
    {
      type: "h2",
      id: "why-disagree",
      text: "Why do the published figures disagree so much?",
      answer:
        "Most figures come from blogs and news pieces that do not state a method. They assume different floor areas, finishes and locations, and some add contractor profit and contingency. Prices also moved sharply in 2025 and 2026, so a figure from early 2025 is already out of date for materials such as cement.",
    },
    {
      type: "ul",
      items: [
        "**Different floor areas.** A “two-bedroom house” can be 60 square metres or 120.",
        "**Different finishes.** Ceramic tiles, fitted kitchens, POP ceilings and aluminium windows add up quickly.",
        "**Different scope.** Some totals include fencing, a borehole, supervision and contractor profit. Others stop at the building.",
        "**Different dates.** Cement roughly doubled between 2024 and 2026 on some measures, so an older guide understates today’s cost.",
        "**Different places.** The sources disagree about whether Abuja is cheaper or dearer than Lagos, which is a sign that location effects are small compared with the other differences.",
      ],
    },
    {
      type: "h2",
      id: "per-square-metre",
      text: "How much does it cost per square metre?",
      answer:
        "For Lagos in the second quarter of 2026, Ownkey puts structure and finishes at ₦65,000–90,000 per square metre for basic work, ₦95,000–140,000 for standard and ₦160,000 to over ₦220,000 for premium. Multiply by your floor area for a first estimate, then add roofing, services and external works.",
    },
    {
      type: "table",
      caption: "Cost per square metre, structure and finishes",
      headers: ["Level", "Per square metre (Lagos, Q2 2026)", "Source"],
      rows: [
        ["Basic", "₦65,000 – ₦90,000", "Ownkey, 30 July 2026"],
        ["Standard", "₦95,000 – ₦140,000", "Ownkey, 30 July 2026"],
        ["Premium", "₦160,000 – ₦220,000 and above", "Ownkey, 30 July 2026"],
      ],
    },
    {
      type: "p",
      text: "To use these numbers, multiply by your floor area. A 100 square metre house at the standard rate comes to ₦9.5–14 million for structure and finishes alone. The gap between that and the two-bedroom estimate of ₦20–40 million above is the cost of everything outside those rates: roofing, services, kitchen and bathrooms, external works, contingency and the builder’s margin. If you are comparing quotes, make sure you are comparing the same scope.",
    },
    {
      type: "h2",
      id: "where-money-goes",
      text: "Where does the money go in a house?",
      answer:
        "Foundations, blockwork and structure, and the roof take roughly half of a typical budget. In the three breakdowns reviewed, blockwork and structure together make up about 15% to 23% of the total, and foundations 15% to 21%. Finishes, services, kitchens and bathrooms account for most of the remainder.",
    },
    {
      type: "table",
      caption: "Cost breakdown for a two-bedroom house, naira ranges",
      headers: ["Part of the house", "Range", "Share of total (our arithmetic)"],
      rows: [
        ["Foundation and substructure", "₦3 – ₦6 million", "About 15%"],
        ["Blockwork and structure", "₦4 – ₦8 million", "About 20%"],
        ["Roofing", "₦2.5 – ₦5 million", "About 12.5%"],
        ["Doors and windows", "₦1.5 – ₦3.5 million", "About 8%"],
        ["Electrical and plumbing", "₦2 – ₦4 million", "About 10%"],
        ["Tiling and ceilings", "₦2 – ₦4 million", "About 10%"],
        ["Painting", "₦1.5 – ₦3 million", "About 7.5%"],
        ["Kitchen, sanitary and other", "₦3.5 – ₦6.5 million", "About 17%"],
      ],
      foot: "Ranges are from Legit.ng, 26 August 2026. Shares are our arithmetic from the midpoints of each range. Other breakdowns put blockwork and structure at 15.4% (Aboki Forex, 2026, our arithmetic from its naira figures) and about 21–23% (Ownkey, June 2026, from its naira ranges).",
    },
    {
      type: "p",
      text: "Two things stand out. First, walls are not the biggest cost. Money spent on foundations, the roof and finishes together outweighs blockwork by a wide margin. Second, labour is a large share: Ownkey puts labour and contractor margin together at 25–35% of a residential build, and Legit.ng says labour alone is about a quarter to more than a third. That matters for the choice of walling material, because methods that need less mortar and less plastering cut labour as well as materials.",
    },
    {
      type: "h2",
      id: "price-changes",
      text: "How fast are building material prices rising?",
      answer:
        "Quickly. Ownkey reports a 50kg bag of cement at ₦9,000–12,500 in the second quarter of 2026, against ₦4,500–5,500 in 2024. Nairametrics reported a 20% rise in construction costs between December 2025 and May 2026, and 10–16mm steel rods up by as much as 210% from 2023 to 2025.",
    },
    {
      type: "table",
      caption: "Material prices and recent changes",
      headers: ["Item", "Figure", "Source and date"],
      rows: [
        ["Cement, 50kg bag", "₦9,000 – ₦12,500 (2024: ₦4,500 – ₦5,500)", "Ownkey, 30 July 2026"],
        ["Cement, 50kg bag", "₦9,000 – ₦13,000", "Legit.ng, 26 August 2026"],
        ["Construction cost change", "Up 20%, December 2025 to May 2026, averaged across six African markets", "Fortren & Company report, via Nairametrics, 1 June 2026"],
        ["Steel rod prices, 10–16mm", "Up by as much as 210%, 2023 to 2025", "Nairametrics, 21 October 2025"],
      ],
      foot: "The sources reviewed give no reliable, dated 2026 price for a 6-inch sandcrete block, and the 9-inch block prices ranged from ₦120–200 to several hundred naira. Ask your supplier for a current quote.",
    },
    {
      type: "p",
      text: "The practical lesson is to avoid fixing a budget from an old article, including this one in a year’s time. Get written quotes for cement, steel and blocks close to the date you buy, and consider buying in stages rather than all at once, because holding stock exposes you to theft and weather as well as to price risk. Building in phases, foundation first and walls after, is common for the same reason.",
    },
    {
      type: "h2",
      id: "earth-bricks-saving",
      text: "How much can earth bricks save on a house?",
      answer:
        "On a ₦25 million house where walling and structure are 15–23% of cost, Ipile’s 30–40% walling saving works out to roughly ₦1.1–2.3 million, or 4–9% of the total. Independent Nigerian studies report smaller wall-level savings of about 4–12%, so treat the high end as a company figure.",
    },
    {
      type: "p",
      text: "Here is the arithmetic, so you can check it and replace our assumptions with yours. Ipile’s own figure, from our company profile, is that Compressed Earth Brick reduces the cost of housing by 30–40% of the total walling cost per unit. That is a saving on the walls, not on the whole house, so the first step is to decide what share of your budget the walls represent.",
    },
    {
      type: "table",
      caption: "Worked example: a ₦25 million three-bedroom house",
      headers: ["Scenario", "Walling and structure (15–23% of ₦25 million)", "Saving on walling", "Saving on the whole house"],
      rows: [
        ["Ipile company figure, 30–40%", "₦3.75 – ₦5.75 million", "₦1.1 – ₦2.3 million", "About 4.5% – 9.2%"],
        ["IJISRT study, 2026, 12.44%", "₦3.75 – ₦5.75 million", "₦0.47 – ₦0.72 million", "About 1.9% – 2.9%"],
        ["Auchi, Edo State study, 2020, about 3.7%", "₦3.75 – ₦5.75 million", "₦0.14 – ₦0.21 million", "About 0.6% – 0.9%"],
      ],
      foot: "Method: walling cost = house price × 15–23%. Saving = walling cost × saving percentage. All results are our arithmetic. The ₦25 million price is an illustration, not a quote.",
    },
    {
      type: "p",
      text: "The spread is wide, and it is worth being honest about why. The independent figures come from studies that compared specific walls at specific times. The Auchi study of 2020 found a 225mm hollow sandcrete wall at ₦3,199.40 per square metre against ₦3,079.52 for Hydraform blocks, a gap of about 3.7%. The saving came partly from walls that need no plaster on most faces. A 2026 paper in the International Journal of Innovative Science and Research Technology reported a 12.44% reduction on one square metre of wall. Ipile’s 30–40% is a company figure from our company profile and sits above both, and we do not have a published independent study that confirms it.",
    },
    {
      type: "p",
      text: "So what is a fair planning assumption? If you are building with a reputable earth-brick contractor, expect the walls to cost less than sandcrete, and plan on a saving of a few percent to several percent of the whole house. Anyone promising half off the total build is not describing the same thing. Our own claim is about walls, and we say so. For more on the product, read [what makes Compressed Earth Bricks different](/compressed-earth-bricks) and [how we deliver affordable housing in Nigeria](/affordable-housing-nigeria).",
    },
    {
      type: "h2",
      id: "quality-risk",
      text: "Is the cheapest block really the cheapest?",
      answer:
        "No. Field surveys found many commercial sandcrete blocks fall short of the Nigerian standard. In Abuja in 2025 only 4 of 10 factories met the 2.5 N/mm² minimum, and none met 3.45. A weak block that cracks or needs rebuilding costs far more than the saving on the day.",
    },
    {
      type: "p",
      text: "The Nigerian Industrial Standard for sandcrete blocks, NIS 87, sets minimum compressive strengths of 2.5 N/mm² for non-load-bearing and 3.45 N/mm² for load-bearing blocks. A 2025 study of ten factories in Kaura District, Abuja, measured 28-day strengths between 1.19 and 3.06 N/mm². Only 40% reached 2.5, and none reached 3.45. None used the mix the standard calls for. Older studies found worse: blocks in Akwa Ibom between 0.19 and 1.32 N/mm² in 2019, and blocks in Ikeja, Lagos, about 0.34 to 0.38 N/mm² in 2015. These are local studies, not a national survey, but they point the same way.",
    },
    {
      type: "p",
      text: "The same lesson applies to any walling material, earth bricks included. The material is only as good as the mix, the soil and the curing. Whatever you choose, ask for test results, visit the factory or the production site, and do not accept a price that is far below the market without asking what has been left out.",
    },
    {
      type: "h2",
      id: "forgotten-costs",
      text: "Which costs do people forget when they budget?",
      answer:
        "People often leave out land documents and approvals, site survey and soil testing, a borehole and generator, fencing and gate, external works, and a contingency. One 2026 estimate adds 10% contingency and 15% contractor profit on top of the build cost. Budget for these before you start, not after.",
    },
    {
      type: "ul",
      items: [
        "**Land and documents:** the purchase, survey, title and building approval are separate from construction.",
        "**Site work:** clearing, levelling, soil testing and drainage, especially on sloping or wet ground.",
        "**Utilities:** a borehole, septic tank or soakaway, power connection or a generator, and solar if you want it.",
        "**External works:** fencing, a gate, paving and landscaping. One 2026 estimate puts them at about 6% of the total.",
        "**Professional fees:** design, engineering and supervision. One 2026 estimate puts supervision alone at about 5% of the build.",
        "**Contingency:** at least 10%. Ownkey recommends 10–15% and lists professional fees of ₦500,000 to ₦1.8 million separately. Prices and site conditions change while you build.",
      ],
    },
    {
      type: "h2",
      id: "location",
      text: "Does location change the cost of building?",
      answer:
        "Somewhat, but the sources disagree on how much. Ownkey says Ibadan, Enugu and Port Harcourt run 10–25% below Lagos. Two of its pages disagree on whether Abuja is dearer or cheaper than Lagos, by 10–20%. Haulage distance and local block prices matter most, so get quotes for your own plot.",
    },
    {
      type: "p",
      text: "Cost differences between cities come mostly from transport and labour. Block prices lean towards the low end in towns such as Ekiti and Yola and towards the high end in Lagos and Abuja. Sand and stone prices depend on how far the quarry is. For an earth-brick house, soil is usually dug close to the site, which cuts haulage, but cement still has to be delivered to site. If you are weighing a build in Abuja, Cross River or Ogun State, see where we have built: [Abuja](/locations/abuja), [Cross River](/locations/cross-river) and [Ogun State](/locations/ogun).",
    },
    {
      type: "h2",
      id: "next-steps",
      text: "How do you turn these numbers into a budget for your own house?",
      answer:
        "Start with your plan and floor area, pick a finish level, and multiply by the per-square-metre range. Add roofing, services, external works, professional fees and 10% contingency. Then ask two or three qualified builders for a priced bill of quantities and compare like with like.",
    },
    {
      type: "ol",
      items: [
        "Fix your floor area and finish level. Write down what is in and what is out, including kitchen, ceilings and fencing.",
        "Multiply the area by a current per-square-metre rate for your level, and treat the result as a first estimate.",
        "Add services, external works, professional fees and a contingency of at least 10%.",
        "Ask two or three builders for a written bill of quantities for the same plan, so you compare identical scope.",
        "Check blocks and cement against current quotes, and ask for strength test results on the blocks.",
        "Decide the build in phases, so you buy materials close to when you use them.",
      ],
    },
    {
      type: "p",
      text: "If you would like a priced estimate for your own plot and plan, [send us your brief](/contact#contact-form). We will tell you honestly what an earth-brick build would save you against sandcrete, and what it would not.",
    },
  ],
  faqs: [
    {
      q: "What is the cheapest way to build a house in Nigeria?",
      a: "Build small, keep the plan simple, choose standard finishes, and avoid rework. Using a walling system that needs less mortar and plaster, such as interlocking earth blocks, can trim the wall cost, but the biggest savings come from design and scope. A 100 square metre house at the standard rate costs roughly ₦9.5–14 million for structure and finishes alone.",
    },
    {
      q: "How much does a three-bedroom house cost in Nigeria?",
      a: "Ownkey quotes ₦11–17 million for an economy three-bedroom house in Lagos, ₦16–28 million mid-market and ₦29–60 million and above for premium (June 2026). Dutum Group quoted ₦15–25 million for a three-bedroom bungalow in June 2025. All exclude land and are estimates, not quotes.",
    },
    {
      q: "How much does a CEB house cost in Nigeria?",
      a: "A CEB house costs about 4–9% less overall than the same house in sandcrete if Ipile’s 30–40% walling saving holds and walls are 15–23% of the budget. On a ₦25 million house that is roughly ₦1.1–2.3 million. Independent studies report smaller savings of about 4–12% on the wall alone, so ask for a priced quote.",
    },
    {
      q: "Is it cheaper to build in phases?",
      a: "It spreads the cost and lets you buy materials closer to when you use them, which helps when prices are moving. Cement rose from ₦4,500–5,500 in 2024 to ₦9,000–12,500 in 2026. The risk is weather damage to stored materials and unfinished work, so plan each phase to a weather-tight stage.",
    },
    {
      q: "Do I need a bill of quantities?",
      a: "Yes. A bill of quantities lists every item and quantity in your design with a price, so quotes from different builders can be compared like for like. It is the single most useful document for controlling cost. Any qualified quantity surveyor can prepare one, and we can prepare one for builds we construct.",
    },
  ],
  sources: [
    {
      name: "Legit.ng: How much it costs to build a 2-bedroom house in Nigeria (2026)",
      url: "https://www.legit.ng/business-economy/industry/1727359-how-costs-build-a-2-bedroom-house-nigeria-2026/",
      note: "News article, 26 August 2026. Two-bedroom range, cost breakdown by trade, cement price and labour share.",
    },
    {
      name: "Ownkey: Nigeria build cost index per square metre",
      url: "https://ownkey.com/ng/blog/nigeria-build-cost-index-per-square-metre-rates",
      note: "Property marketing blog, 30 July 2026. Per-square-metre rates for Lagos, cement, block and steel prices, location differences.",
    },
    {
      name: "Ownkey: Building a house in Nigeria cost guide",
      url: "https://ownkey.com/ng/blog/building-house-nigeria-cost-guide",
      note: "Property marketing blog, 9 June 2026. Three-bedroom ranges for Lagos by finish level and blockwork share.",
    },
    {
      name: "Dutum Group: Cost of building a house in Nigeria",
      url: "https://dutumgroup.com/cost-of-building-a-house-in-nigeria/",
      note: "Contractor blog, 10 June 2025. Three- and four-bedroom bungalow ranges. Written before the 2026 cement rise.",
    },
    {
      name: "Aboki Forex: Cost of building a single-storey house in Nigeria (2026)",
      url: "https://abokiforex.app/show-news/1729821-cost-building-a-single-storey-house-nigeria-2026",
      note: "News site, 9 September 2026. A single-storey example with 15% contractor profit and a 10% contingency, with supervision and external works listed in naira. Weak source, used only for those cost items.",
    },
    {
      name: "Nairametrics: Nigeria’s construction sector hit by 20% cost increase in five months",
      url: "https://nairametrics.com/2026/06/01/nigerias-construction-sector-hit-by-20-cost-increase-in-five-months-report/",
      note: "News report on a Fortren & Company study, 1 June 2026. Average across six African markets.",
    },
    {
      name: "Nairametrics: Steel rod prices in Nigeria rise by up to 210% in two years",
      url: "https://nairametrics.com/2025/10/21/steel-rod-prices-in-nigeria-rise-by-up-to-210-in-two-years",
      note: "News report, 21 October 2025. Price increases for 10–16mm steel rods, 2023 to 2025.",
    },
    {
      name: "AZOJETE: Quality assessment of commercial sandcrete hollow blocks, Kaura District, Abuja",
      url: "https://azojete.com.ng/index.php/azojete/article/download/1019/588",
      note: "Peer-reviewed paper, March 2025. Strength of blocks from ten factories against NIS 87.",
    },
    {
      name: "Nigerian Journal of Technology: sandcrete block quality in Akwa Ibom",
      url: "https://www.nijotech.com/index.php/nijotech/article/view/2045",
      note: "Peer-reviewed paper, 2019. Strength of blocks from twelve firms.",
    },
    {
      name: "FUTAJEET: Sandcrete block quality in Ikeja, Lagos",
      url: "https://jeet.futa.edu.ng/index.php/jeet/article/download/23/21/125",
      note: "Peer-reviewed paper, 2015. Strength of blocks from six factories.",
    },
    {
      name: "Journal of Natural Sciences Research: cost comparison of sandcrete and Hydraform walling, Auchi",
      url: "https://iiste.org/Journals/index.php/JNSR/article/view/54866",
      note: "Peer-reviewed paper, 2020. Wall cost per square metre for sandcrete and Hydraform blocks.",
    },
    {
      name: "IJISRT: Interlocking stabilized soil block technology and affordable housing delivery in Nigeria",
      url: "https://ijisrt.com/assessment-of-the-contribution-of-interlocking-stabilized-soil-block-technology-to-affordable-housing-delivery-in-nigeria",
      note: "Journal abstract, 2026. A 12.44% capital cost reduction on one square metre of wall. Only the abstract was available to us.",
    },
  ],
  related: [
    {
      href: "/guides/compressed-earth-bricks-vs-sandcrete-vs-burnt-bricks",
      title: "Earth bricks vs sandcrete vs burnt bricks",
      text: "Strength, cost, speed and thermal performance compared, with sources.",
    },
    {
      href: "/guides/how-to-build-with-interlocking-earth-bricks",
      title: "How to build with interlocking earth bricks",
      text: "A step-by-step guide from site to roof.",
    },
    {
      href: "/affordable-housing-nigeria",
      title: "Affordable housing in Nigeria",
      text: "How Compressed Earth Brick brings the cost of a quality home down.",
    },
  ],
};
