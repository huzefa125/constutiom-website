export interface ServiceProcessStep {
  title: string;
  text: string;
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
  gallery: string[];
  link: string;
}

const G = "/images/gallery";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "construction",
    title: "Construction Services",
    category: "Sustainable & Civil Engineering",
    eyebrow: "PRECISION EXECUTION",
    description:
      "Specialized in sustainable building methodologies, including Hydraform Compressed Earth Brick (CEB) interlocking systems, reinforced concrete superstructures, and turnkey commercial developments.",
    overview:
      "From foundations to finishes, we build residential, commercial and institutional structures that balance strength, speed and cost. Our teams combine COREN-certified engineering with Hydraform Compressed Earth Brick technology, so every building is durable, thermally comfortable and kinder to the environment.",
    details: [
      "Compressed Earth Brick (CEB) Eco-Housing",
      "Reinforced Concrete Frameworks & Foundations",
      "Institutional, Commercial & Residential Construction",
      "Deep Foundation & Bored Pile Engineering",
    ],
    process: [
      { title: "Site assessment", text: "Soil, access and services are reviewed so the design fits the ground it will stand on." },
      { title: "Foundations & structure", text: "Engineer-designed foundations and reinforced frameworks set out and checked at every stage." },
      { title: "Walling & superstructure", text: "CEB walling and concrete elements go up to programme with continuous quality checks." },
      { title: "Finishing & handover", text: "Services, finishes and a full snag inspection before the keys are handed over." },
    ],
    image: `${G}/navy-barracks-atimbo/navy-barracks-atimbo-10.jpg`,
    gallery: [
      `${G}/navy-barracks-atimbo/navy-barracks-atimbo-09.jpg`,
      `${G}/navy-barracks-kuje/navy-barracks-kuje-06.jpg`,
      `${G}/navy-barracks-kuje/navy-barracks-kuje-05.jpg`,
    ],
    link: "/services/construction",
  },
  {
    id: "general-contracting",
    title: "General Contracting",
    category: "Full-Scale Project Management",
    eyebrow: "RIGOROUS OVERSIGHT",
    description:
      "End-to-end procurement, site logistics, safety compliance, and disciplined engineering project management under ISO 9001 and COREN oversight guidelines.",
    overview:
      "One accountable partner for the whole job. We manage procurement, subcontractors, site logistics and safety so your project stays on programme and on budget, under ISO 9001 quality systems and COREN engineering oversight.",
    details: [
      "Turnkey Design-Build Project Delivery",
      "Quality Assurance & Inspection Test Plans (ITP)",
      "NEBOSH-Standard Occupational Health & Safety",
      "Subcontractor Coordination & Material Sourcing",
    ],
    process: [
      { title: "Planning & procurement", text: "Scope, programme and material sourcing are agreed before work starts on site." },
      { title: "Mobilisation", text: "Site set-up, logistics and safety plans are put in place and briefed to every crew." },
      { title: "Controlled delivery", text: "Inspection test plans and regular reporting keep quality and progress visible." },
      { title: "Close-out", text: "Final inspections, documentation and a clean, orderly handover." },
    ],
    image: `${G}/navy-school-akpabuyo/navy-school-akpabuyo-01.jpg`,
    gallery: [
      `${G}/navy-barracks-kuje/navy-barracks-kuje-03.jpg`,
      `${G}/navy-barracks-atimbo/navy-barracks-atimbo-10.jpg`,
      `${G}/navy-barracks-kuje/navy-barracks-kuje-05.jpg`,
    ],
    link: "/services/general-contracting",
  },
  {
    id: "affordable-housing",
    title: "Affordable Housing",
    category: "Homes For Every Class Of Society",
    eyebrow: "BUILT FOR EVERYONE",
    description:
      "Suitable, affordable homes in a sustainable environment, designed around locally available resources and Compressed Earth Brick (CEB) construction that significantly reduces building cost.",
    overview:
      "Our mission is to become the leading provider of affordable homes in Nigeria. By pressing Compressed Earth Bricks from locally available soil, we cut material and transport costs, build faster and deliver comfortable homes for every class of society.",
    details: [
      "Modern CEB Home Plans & Designs",
      "Locally Sourced, Low-Carbon Materials",
      "Faster Build Times, Lower Cost Per Unit",
      "Estate & Mass-Housing Delivery",
    ],
    process: [
      { title: "Plan & design", text: "Home plans chosen or tailored to your budget, family size and plot." },
      { title: "Make the bricks", text: "Bricks are pressed on or near site from local soil, reducing cost and haulage." },
      { title: "Build", text: "Interlocking blocks go up quickly with less cement and less waste." },
      { title: "Handover", text: "Finished homes or whole estates delivered ready to live in." },
    ],
    image: `${G}/navy-barracks-atimbo/navy-barracks-atimbo-12.jpg`,
    gallery: [
      `${G}/navy-barracks-kuje/navy-barracks-kuje-03.jpg`,
      `${G}/navy-barracks-atimbo/navy-barracks-atimbo-09.jpg`,
      `${G}/navy-barracks-kuje/navy-barracks-kuje-06.jpg`,
    ],
    link: "/services/affordable-housing",
  },
  {
    id: "civil-works",
    title: "Civil Works & Renovation",
    category: "Repair, Maintenance & Demolition",
    eyebrow: "RESTORE & RENEW",
    description:
      "Civil construction services of every description, including repair, maintenance and demolition of existing works, delivered with the same disciplined engineering standards as our new builds.",
    overview:
      "Existing buildings and infrastructure need care too. We repair, maintain, refurbish and, where needed, safely demolish construction works, applying the same engineering discipline we bring to new builds.",
    details: [
      "Structural Repair & Rehabilitation",
      "Building Renovation & Refurbishment",
      "Planned & Preventative Maintenance",
      "Safe Controlled Demolition",
    ],
    process: [
      { title: "Survey", text: "A close inspection identifies defects, risks and the right scope of work." },
      { title: "Method & plan", text: "A clear repair, renovation or demolition method statement with safety controls." },
      { title: "Execution", text: "Skilled crews carry out the work with minimum disruption to occupants." },
      { title: "Inspection & care", text: "Final checks and, if you wish, a planned maintenance schedule." },
    ],
    image: `${G}/other-projects/other-projects-134.jpg`,
    gallery: [
      `${G}/navy-barracks-kuje/navy-barracks-kuje-06.jpg`,
      `${G}/navy-barracks-atimbo/navy-barracks-atimbo-10.jpg`,
      `${G}/navy-barracks-kuje/navy-barracks-kuje-03.jpg`,
    ],
    link: "/services/civil-works",
  },
];

export function getServiceById(id: string) {
  return SERVICES_DATA.find((service) => service.id === id);
}
