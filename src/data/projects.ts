export interface ProjectItem {
  id: string;
  name: string;
  category: "Residential" | "Infrastructure" | "Commercial";
  location: string;
  description: string;
  image: string;
  highlight: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "navy-barracks-kuje",
    name: "Nigerian Navy Barracks",
    category: "Infrastructure",
    location: "Kuje, Abuja, Nigeria",
    description:
      "Large-scale defense residential quarters constructed with interlocking Compressed Earth Bricks (CEB), achieving superior thermal comfort and structural resilience.",
    image: "/images/gallery/navy-barracks-kuje/navy-barracks-kuje-05.jpg",
    highlight: "CEB Interlocking Block Technology",
  },
  {
    id: "rccg-mission-house",
    name: "RCCG Mission House",
    category: "Residential",
    location: "Nigeria",
    description:
      "A multi-story institutional and residential facility engineered for exceptional durability, energy efficiency, and low-maintenance operational performance.",
    image: "/images/projects/rccg-mission-house.jpg",
    highlight: "Reinforced Masonry & Structural Framing",
  },
  {
    id: "rccg-multipurpose-pavilion",
    name: "RCCG 2&24 Multi-Purpose Project",
    category: "Commercial",
    location: "Nigeria",
    description:
      "Extensive civil works and structural steel framework for a high-capacity multi-purpose auditorium and institutional gathering space.",
    image: "/images/projects/rccg-pavilion.jpg",
    highlight: "Structural Steel & Concrete Framing",
  },
  {
    id: "karu-housing-development",
    name: "Karu Residential Development",
    category: "Residential",
    location: "Karu, Abuja Corridor",
    description:
      "Modern sustainable residential blocks featuring precision-pressed earth brick masonry and passive microclimate cooling design.",
    image: "/images/projects/karu-estate.jpg",
    highlight: "Passive Thermal Architecture",
  },
];

