export interface ProjectItem {
  id: string;
  name: string;
  category: "Residential" | "Infrastructure" | "Commercial";
  location: string;
  description: string;
  image: string;
  highlight: string;
  client?: string;
  photos: string[];
}

const photos = (folder: string, ids: number[]) =>
  ids.map((n) => `/images/gallery/${folder}/${folder}-${String(n).padStart(2, "0")}.jpg`);

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
    client: "Nigerian Navy",
    photos: photos("navy-barracks-kuje", [5, 1, 2, 3, 4]),
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
    photos: ["/images/projects/rccg-mission-house.jpg"],
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
    photos: ["/images/projects/rccg-pavilion.jpg"],
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
    photos: ["/images/projects/karu-estate.jpg"],
  },
  {
    id: "navy-barracks-atimbo",
    name: "Navy Barracks, Atimbo",
    category: "Infrastructure",
    location: "Atimbo, Nigeria",
    description:
      "Rows of single-storey quarters in exposed Compressed Earth Brick, finished with blue hip roofs, terraced retaining walls and paved access.",
    image: "/images/gallery/navy-barracks-atimbo/navy-barracks-atimbo-03.jpg",
    highlight: "Exposed CEB Masonry",
    client: "Nigerian Navy",
    photos: photos("navy-barracks-atimbo", [3, 1, 2, 4, 5]),
  },
  {
    id: "navy-school-akpabuyo",
    name: "Navy School, Akpabuyo",
    category: "Infrastructure",
    location: "Akpabuyo, Cross River State",
    description:
      "A campus of colonnaded single-storey blocks in earth brick, with deep covered walkways that keep classrooms cool in a humid coastal climate.",
    image: "/images/gallery/navy-school-akpabuyo/navy-school-akpabuyo-03.jpg",
    highlight: "Covered Walkways & Passive Cooling",
    client: "Nigerian Navy",
    photos: photos("navy-school-akpabuyo", [3, 1, 2, 4, 5]),
  },
  {
    id: "brickville-court",
    name: "Brickville Court",
    category: "Residential",
    location: "Nigeria",
    description:
      "Two-storey residences in textured brick-effect masonry with stepped entrances, steel railings and fitted canopies, finished by our own crews.",
    image: "/images/gallery/brickville-court/brickville-court-02.jpg",
    highlight: "Textured Masonry Finish",
    photos: photos("brickville-court", [2, 1, 3, 4, 5]),
  },
];

