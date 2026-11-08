import type { FaqItem } from "@/components/sections/services/ServiceFaq";

export interface LocationItem {
  slug: string;
  /** Place name used in headings and schema, e.g. "Abuja". */
  place: string;
  /** Wider region for schema areaServed, e.g. "Federal Capital Territory". */
  region: string;
  seoTitle: string;
  seoDescription: string;
  heroLines: [string, string];
  heroText: string;
  image: string;
  imageAlt: string;
  /** Answer-first paragraph, 40 to 60 words. */
  answer: string;
  /** IDs from PROJECTS_DATA that Ipile actually built here. */
  projects: string[];
  facts: string[];
  faqs: FaqItem[];
}

/** Only places with real Ipile work are listed. Facts come from the company profile. */
export const LOCATIONS_DATA: LocationItem[] = [
  {
    slug: "abuja",
    place: "Abuja",
    region: "Federal Capital Territory",
    seoTitle: "Construction Company in Abuja (FCT)",
    seoDescription:
      "Construction company in Abuja building homes and housing estates in Compressed Earth Brick. Our work includes 100 housing units for the Nigerian Navy at Kuje.",
    heroLines: ["Construction Company", "in Abuja"],
    heroText:
      "Homes, estates and institutional housing in Abuja (FCT), built with Compressed Earth Brick and delivered by our own crews.",
    image: "/images/gallery/navy-barracks-kuje/navy-barracks-kuje-05.jpg",
    imageAlt: "Completed Compressed Earth Brick bungalows at Nigerian Navy Barracks, Kuje, Abuja",
    answer:
      "Ipile Earth Synergy is a Nigerian construction company that has built in Abuja since its first major contract: 100 housing units for the Nigerian Navy at Kuje Area Council. We build homes, estates and institutional buildings in Compressed Earth Brick, and we also handle design, maintenance and procurement.",
    projects: ["navy-barracks-kuje", "karu-housing-development"],
    facts: [
      "Our first major contract was 100 housing units for Nigerian Navy personnel at Kuje.",
      "The Kuje units were 20 two-bedroom, 30 three-bedroom, 20 single-room and 30 studio apartments.",
      "The Chief of the Naval Staff then awarded us a second contract, which led to our work in Cross River State.",
      "All of this work uses our own Compressed Earth Bricks.",
    ],
    faqs: [
      {
        q: "Do you build homes in Abuja?",
        a: "Yes. We have built housing for the Nigerian Navy at Kuje and a residential development at Karu in the Abuja corridor. Contact us with your plot and requirements for a quote.",
      },
      {
        q: "What have you built in Abuja?",
        a: "Our main Abuja project is 100 housing units at Nigerian Navy Barracks, Kuje, in Compressed Earth Brick. We have also built the Karu Residential Development in the Abuja corridor.",
      },
      {
        q: "Can you build to my own plan in Abuja?",
        a: "Yes. We build to client specification. If you do not have a plan, our structural design team can prepare one for your budget and plot.",
      },
    ],
  },
  {
    slug: "cross-river",
    place: "Cross River State",
    region: "Cross River State",
    seoTitle: "Construction Company in Cross River State",
    seoDescription:
      "Construction company in Cross River State, Nigeria. We built the Nigerian Navy barracks at Atimbo, Calabar, and the Navy school at Akpabuyo in Compressed Earth Brick.",
    heroLines: ["Construction Company", "in Cross River"],
    heroText:
      "Barracks, housing and a school campus in Cross River State, built with Compressed Earth Brick for a wet coastal climate.",
    image: "/images/gallery/navy-barracks-atimbo/navy-barracks-atimbo-03.jpg",
    imageAlt: "Rows of Compressed Earth Brick quarters with blue roofs at Navy Barracks, Atimbo, Cross River State",
    answer:
      "Ipile Earth Synergy has built in Cross River State for the Nigerian Navy: housing units at Atimbo barracks in Calabar, and a school campus at Akpabuyo. Both projects use our Compressed Earth Bricks, and the Atimbo contract was a repeat award after the Navy saw our completed work at Kuje.",
    projects: ["navy-barracks-atimbo", "navy-school-akpabuyo"],
    facts: [
      "The Atimbo contract was awarded after the handover of our Kuje housing units.",
      "Building at Atimbo meant working in heavier rainfall than at Kuje, which tested our method in a wetter climate.",
      "The Akpabuyo school uses colonnaded blocks with covered walkways that keep classrooms cool.",
      "Both projects were built for the Nigerian Navy.",
    ],
    faqs: [
      {
        q: "Do you build in Cross River State?",
        a: "Yes. We have built the Nigerian Navy barracks at Atimbo in Calabar and the Navy school at Akpabuyo, both in Compressed Earth Brick.",
      },
      {
        q: "Do earth bricks work in a wet climate?",
        a: "We built the Atimbo barracks in Cross River, which has heavier rainfall than Abuja. At Akpabuyo, the school uses deep covered walkways that keep classrooms cool in a humid coastal climate.",
      },
      {
        q: "Can you build schools and institutional buildings?",
        a: "Yes. The Akpabuyo school campus is an example, and we also build barracks, churches and homes.",
      },
    ],
  },
  {
    slug: "ogun",
    place: "Ogun State",
    region: "Ogun State",
    seoTitle: "Home Builders at Redemption Camp, Ogun State",
    seoDescription:
      "Home builders at Redemption Camp on the Lagos-Ibadan Expressway, Ogun State. Luxury, deluxe, standard and basic homes in Compressed Earth Brick by Ipile Earth Synergy.",
    heroLines: ["Home Builders", "in Ogun State"],
    heroText:
      "Our site office is at Redemption Camp on the Lagos-Ibadan Expressway, where we design and build homes for different budgets.",
    image: "/images/service-photos/property-facility-management-2.webp",
    imageAlt: "Homes built by Ipile Earth Synergy with paved access, lit at dusk",
    answer:
      "Ipile Earth Synergy has a site office at Estate 15, Redemption Camp, on the Lagos-Ibadan Expressway in Ogun State. There we have designed and built luxury, deluxe, standard and basic apartments to client demand, using Compressed Earth Brick to keep the cost of each level of home lower.",
    projects: [],
    facts: [
      "Our site office is at Estate 15, Redemption Camp, Lagos-Ibadan Expressway.",
      "We have built four levels of home there: luxury, deluxe, standard and basic apartments.",
      "Homes are designed and built to the requirements of each customer.",
      "We also provide building maintenance and property management for homes in the area.",
    ],
    faqs: [
      {
        q: "Where is your office in Ogun State?",
        a: "Our site office is at Abba Father Estate off Estate 15, Redemption Camp, Lagos-Ibadan Expressway, Ogun State.",
      },
      {
        q: "What types of home have you built at Redemption Camp?",
        a: "We have built luxury, deluxe, standard and basic apartments, designed to the requirements of our customers.",
      },
      {
        q: "Can you maintain or manage a property I already own there?",
        a: "Yes. We provide building maintenance and property and facility management, as well as new construction.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string) {
  return LOCATIONS_DATA.find((location) => location.slug === slug);
}
