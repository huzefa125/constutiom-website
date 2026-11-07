export interface ServiceProcessStep {
  title: string;
  text: string;
}

export interface ServicePhoto {
  src: string;
  caption: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  eyebrow: string;
  description: string;
  overview: string;
  details: string[];
  process: ServiceProcessStep[];
  image: string;
  imageAlt: string;
  overviewImage: string;
  overviewAlt: string;
  gallery: ServicePhoto[];
  link: string;
  seoTitle: string;
  seoDescription: string;
  related: string[];
  projects: string[];
}

const S = "/images/service-photos";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "construction",
    title: "Construction Services",
    category: "Civil, Building & Public Works",
    eyebrow: "PRECISION EXECUTION",
    description:
      "Civil construction services of every description, building contracting, infrastructure and public works, plus the supply of building materials and equipment.",
    overview:
      "We are authorised to carry out construction operations in line with our Memorandum of Association: from civil works and general building contracting to residential and commercial buildings, roads and drainage, and the supply of the materials and equipment that go into them.",
    details: [
      "Civil Construction: construction, repair, maintenance and demolition of works",
      "Building Contracting: structural development and general building contractor functions",
      "Infrastructure & Public Works: residential and commercial buildings, complexes, halls, culverts, roads, highways, borehole drilling and sewage systems",
      "Materials & Equipment: manufacture, supply, import, export and dealing in building materials, equipment and builders' requisites",
    ],
    process: [
      { title: "Site assessment", text: "Soil, access and services are reviewed so the design fits the ground it will stand on." },
      { title: "Foundations & structure", text: "Foundations and frameworks are set out and checked at every stage." },
      { title: "Walling & superstructure", text: "Compressed Earth Brick walling and structural elements go up to programme." },
      { title: "Finishing & handover", text: "Services, finishes and a full snag inspection before handover." },
    ],
    image: `${S}/construction-hero.webp`,
    imageAlt: "Ipile crew in orange overalls laying Compressed Earth Brick walls on site",
    overviewImage: `${S}/construction-overview.webp`,
    overviewAlt: "Bricklayers on wooden trestles raising earth-brick walls",
    gallery: [
      { src: `${S}/construction-1.webp`, caption: "Roof trusses going up on an earth-brick shell" },
      { src: `${S}/construction-2.webp`, caption: "Roof tiles being fixed by our crew" },
      { src: `${S}/construction-3.webp`, caption: "A completed terrace of earth-brick homes" },
    ],
    link: "/services/construction",
    seoTitle: "Building Construction Company in Nigeria",
    seoDescription:
      "Building construction company in Nigeria. Homes, estates, institutions, roads and civil works built with Compressed Earth Brick by one accountable team.",
    related: ["structural-design", "building-maintenance"],
    projects: ["navy-barracks-kuje", "navy-barracks-atimbo"],
  },
  {
    id: "building-maintenance",
    title: "Building Maintenance",
    category: "Renovation, Repair & Property Enhancement",
    eyebrow: "RESTORE & RENEW",
    description:
      "Building maintenance and allied property enhancement services, including renovation, structural repairs, refurbishment, finishing and decorative works.",
    overview:
      "Existing buildings need care too. We provide maintenance of all kinds, from renovation and structural repair to interior and exterior finishing, so properties stay safe, comfortable and presentable.",
    details: [
      "Comprehensive Maintenance: renovation, structural repairs and property refurbishment",
      "Interior & Exterior Decoration and Painting",
      "Marble & Tile Installation, Plumbing",
      "Interlocking Paving, Fencing, Furnishing and Allied Works",
    ],
    process: [
      { title: "Survey", text: "A close inspection identifies defects, risks and the right scope of work." },
      { title: "Method & plan", text: "A clear repair or renovation plan with safety controls." },
      { title: "Execution", text: "Skilled crews carry out the work with minimum disruption to occupants." },
      { title: "Inspection & care", text: "Final checks and, if you wish, a planned maintenance schedule." },
    ],
    image: `${S}/building-maintenance-hero.webp`,
    imageAlt: "Worker on a ladder at the entrance of a two-storey home at Brickville Court",
    overviewImage: `${S}/building-maintenance-overview.webp`,
    overviewAlt: "Painter in blue overalls with a roller at a freshly painted yellow wall",
    gallery: [
      { src: `${S}/building-maintenance-1.webp`, caption: "Polished tile flooring in a finished hall" },
      { src: `${S}/building-maintenance-2.webp`, caption: "Wall tiling and fitted kitchen cabinets" },
      { src: `${S}/building-maintenance-3.webp`, caption: "Interlocking paving being laid between homes" },
    ],
    link: "/services/building-maintenance",
    seoTitle: "Building Maintenance Company in Nigeria",
    seoDescription:
      "Building maintenance services in Nigeria: renovation, structural repairs, painting, tiling, plumbing, interlocking paving and fencing for any property.",
    related: ["property-facility-management", "construction"],
    projects: ["brickville-court", "rccg-mission-house"],
  },
  {
    id: "structural-design",
    title: "Structural Design & Development",
    category: "Design, Planning & Consultancy",
    eyebrow: "DESIGN-LED BUILDING",
    description:
      "Structural design, project development and engineering consultancy: we draft, plan, design and project-manage construction and structural engineering projects.",
    overview:
      "We offer modern construction plans and designs using Compressed Earth Brick (CEB), which reduces building cost significantly, and act as primary building contractor and developer for new builds, structural adaptations and full site developments.",
    details: [
      "Design & Planning: draft, plan, design and project-manage all types of construction and structural engineering projects",
      "Turnkey Development: primary building contractor and developer for new construction and structural adaptations",
      "Comprehensive Site Developments",
      "Modern CEB Home Plans & Designs",
    ],
    process: [
      { title: "Brief & plan", text: "Plans chosen or tailored to your budget, family size and plot." },
      { title: "Design", text: "Structural and architectural design using locally available resources." },
      { title: "Develop", text: "Project-managed delivery from foundation to completion." },
      { title: "Handover", text: "Finished homes or developments delivered ready to use." },
    ],
    image: `${S}/structural-design-hero.webp`,
    imageAlt: "Two engineers in high-visibility vests reviewing a drawing together",
    overviewImage: `${S}/structural-design-overview.webp`,
    overviewAlt: "Structural drawings on a drafting board",
    gallery: [
      { src: `${S}/structural-design-1.webp`, caption: "A window opening framed in earth-brick walling" },
      { src: `${S}/structural-design-2.webp`, caption: "Crew on scaffolding as the roof structure goes up" },
      { src: `${S}/structural-design-3.webp`, caption: "Aerial view of a completed housing development" },
    ],
    link: "/services/structural-design",
    seoTitle: "Structural Design & Building Plans in Nigeria",
    seoDescription:
      "Structural design and building plans in Nigeria. We draft, design and project-manage new builds, modern CEB home plans and full site developments.",
    related: ["construction", "general-contracts-procurement"],
    projects: ["navy-school-akpabuyo", "karu-housing-development"],
  },
  {
    id: "property-facility-management",
    title: "Property & Facility Management",
    category: "Real Estate & Facilities",
    eyebrow: "LONG-TERM CARE",
    description:
      "Real estate and property management services, including facility management, property development, estate management, agency and brokerage.",
    overview:
      "From office and commercial to residential and industrial properties, we manage the day-to-day running of facilities and engage in property development and real estate investment within Nigeria and internationally.",
    details: [
      "Facility Management: cleaning, routine maintenance and operational management for office, commercial, residential and industrial properties",
      "Real Estate & Property Development",
      "Estate Management, Real Estate Agency and Property Brokerage",
      "Real Estate Investments, Nigeria and Internationally",
    ],
    process: [
      { title: "Assess", text: "We review the property, its condition and how it is used." },
      { title: "Plan", text: "A management and maintenance plan is agreed with you." },
      { title: "Operate", text: "Routine upkeep and operations are carried out and reported on." },
      { title: "Improve", text: "We recommend upgrades and development opportunities over time." },
    ],
    image: `${S}/property-facility-management-hero.webp`,
    imageAlt: "Keys left in the lock of an open front door",
    overviewImage: `${S}/property-facility-management-overview.webp`,
    overviewAlt: "Mop cleaning a polished wooden floor",
    gallery: [
      { src: `${S}/property-facility-management-1.webp`, caption: "Aerial view of a housing estate built by Ipile" },
      { src: `${S}/property-facility-management-2.webp`, caption: "Exterior lighting and paved access at dusk" },
      { src: `${S}/property-facility-management-3.webp`, caption: "A finished interior, ready to occupy" },
    ],
    link: "/services/property-facility-management",
    seoTitle: "Property & Facility Management in Nigeria",
    seoDescription:
      "Property and facility management in Nigeria: cleaning, routine maintenance, estate management and agency for offices, homes and industrial sites.",
    related: ["building-maintenance", "structural-design"],
    projects: ["brickville-court", "rccg-multipurpose-pavilion"],
  },
  {
    id: "general-contracts-procurement",
    title: "General Contracts & Procurement",
    category: "Trade, Logistics & Supply",
    eyebrow: "ONE ACCOUNTABLE PARTNER",
    description:
      "General commercial, trade and procurement operations: general contracting, importation and exportation, logistics, product supply, marketing, sales and distribution.",
    overview:
      "We also act as commission agents, manufacturers' representatives and general suppliers of construction equipment, building requisites and raw materials, so your project is supplied as well as built.",
    details: [
      "General Merchandise & Logistics: general contracting, international trading, importation, exportation, procurement and distribution",
      "Representation & Supply: commission agent and manufacturers' representative",
      "Supply of Construction Equipment and Building Requisites",
      "Raw Materials Supply",
    ],
    process: [
      { title: "Scope", text: "Requirements and quantities are agreed before sourcing begins." },
      { title: "Source", text: "We procure from trusted manufacturers and suppliers." },
      { title: "Deliver", text: "Logistics are coordinated to site on time." },
      { title: "Support", text: "After-delivery follow-up and repeat supply as needed." },
    ],
    image: `${S}/general-contracts-procurement-hero.webp`,
    imageAlt: "Wheel loader and tipper truck working on a building site",
    overviewImage: `${S}/general-contracts-procurement-overview.webp`,
    overviewAlt: "Truck loaded with bags of cement",
    gallery: [
      { src: `${S}/general-contracts-procurement-1.webp`, caption: "Earth bricks being cured on site" },
      { src: `${S}/general-contracts-procurement-2.webp`, caption: "A grader levelling ground for access roads" },
      { src: `${S}/general-contracts-procurement-3.webp`, caption: "Bricks stacked and ready for the walls" },
    ],
    link: "/services/general-contracts-procurement",
    seoTitle: "General Contractor & Building Supplies Nigeria",
    seoDescription:
      "General contractor and building materials supplier in Nigeria: procurement, logistics, construction equipment, raw materials and builders' requisites.",
    related: ["construction", "building-maintenance"],
    projects: ["navy-barracks-atimbo", "rccg-multipurpose-pavilion"],
  },
];

export function getServiceById(id: string) {
  return SERVICES_DATA.find((service) => service.id === id);
}


