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
    image: "/images/projects/ceb-construction.jpg",
    link: "/services#construction",
  },
  {
    id: "property-management",
    title: "Property Management",
    category: "Asset Lifecycle & Preservation",
    eyebrow: "LONG-TERM STEWARDSHIP",
    description:
      "Comprehensive facility stewardship, preventative structural maintenance, and estate asset optimization to safeguard property longevity and deliver sustainable real estate returns.",
    details: [
      "Facility Infrastructure Operations & Audits",
      "Preventative Structural & MEP Maintenance",
      "Estate & Gated Community Oversight",
      "Energy & Thermal Performance Upgrades",
    ],
    image: "/images/projects/karu-estate.jpg",
    link: "/services#property-management",
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
    image: "/images/projects/ceb-technology.png",
    link: "/services#general-contracting",
  },
];

