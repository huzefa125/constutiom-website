export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  eyebrow: string;
  description: string;
  details: string[];
  image: string;
  link: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "construction",
    title: "Construction Services",
    category: "Sustainable & Civil Engineering",
    eyebrow: "PRECISION EXECUTION",
    description:
      "Specialized in sustainable building methodologies, including Hydraform Compressed Earth Brick (CEB) interlocking systems, reinforced concrete superstructures, and turnkey commercial developments.",
    details: [
      "Compressed Earth Brick (CEB) Eco-Housing",
      "Reinforced Concrete Frameworks & Foundations",
      "Institutional, Commercial & Residential Construction",
      "Deep Foundation & Bored Pile Engineering",
    ],
    image: "/images/gallery/navy-barracks-atimbo/navy-barracks-atimbo-10.jpg",
    link: "/services#construction",
  },
  {
    id: "general-contracting",
    title: "General Contracting",
    category: "Full-Scale Project Management",
    eyebrow: "RIGOROUS OVERSIGHT",
    description:
      "End-to-end procurement, site logistics, safety compliance, and disciplined engineering project management under ISO 9001 and COREN oversight guidelines.",
    details: [
      "Turnkey Design-Build Project Delivery",
      "Quality Assurance & Inspection Test Plans (ITP)",
      "NEBOSH-Standard Occupational Health & Safety",
      "Subcontractor Coordination & Material Sourcing",
    ],
    image: "/images/gallery/navy-school-akpabuyo/navy-school-akpabuyo-01.jpg",
    link: "/services#general-contracting",
  },
  {
    id: "affordable-housing",
    title: "Affordable Housing",
    category: "Homes For Every Class Of Society",
    eyebrow: "BUILT FOR EVERYONE",
    description:
      "Suitable, affordable homes in a sustainable environment, designed around locally available resources and Compressed Earth Brick (CEB) construction that significantly reduces building cost.",
    details: [
      "Modern CEB Home Plans & Designs",
      "Locally Sourced, Low-Carbon Materials",
      "Faster Build Times, Lower Cost Per Unit",
      "Estate & Mass-Housing Delivery",
    ],
    image: "/images/gallery/navy-barracks-atimbo/navy-barracks-atimbo-12.jpg",
    link: "/services#affordable-housing",
  },
  {
    id: "civil-works",
    title: "Civil Works & Renovation",
    category: "Repair, Maintenance & Demolition",
    eyebrow: "RESTORE & RENEW",
    description:
      "Civil construction services of every description, including repair, maintenance and demolition of existing works, delivered with the same disciplined engineering standards as our new builds.",
    details: [
      "Structural Repair & Rehabilitation",
      "Building Renovation & Refurbishment",
      "Planned & Preventative Maintenance",
      "Safe Controlled Demolition",
    ],
    image: "/images/gallery/other-projects/other-projects-134.jpg",
    link: "/services#civil-works",
  },
];
