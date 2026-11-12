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

const photos = (folder: string, count: number) =>
  Array.from({ length: count }, (_, i) => `/images/projects/${folder}/${folder}-${String(i + 1).padStart(2, "0")}.webp`);

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "navy-barracks-kuje",
    name: "Nigerian Navy Barracks",
    category: "Infrastructure",
    location: "Kuje, Abuja, Nigeria",
    description:
      "Large-scale defense residential quarters constructed with interlocking Compressed Earth Bricks (CEB), achieving superior thermal comfort and structural resilience.",
    image: "/images/projects/navy-barracks-kuje/navy-barracks-kuje-01.webp",
    highlight: "CEB Interlocking Block Technology",
    client: "Nigerian Navy",
    photos: photos("navy-barracks-kuje", 5),
  },
  {
    id: "rccg-mission-house",
    name: "RCCG Mission House",
    category: "Residential",
    location: "Redemption Camp, Ogun State",
    description:
      "A detached earth-brick residence with a hipped tile roof, steel balustrades and a landscaped approach of interlocking paving, set among mature trees.",
    image: "/images/projects/rccg-mission-house/rccg-mission-house-01.webp",
    highlight: "Earth Brick Masonry & Landscaping",
    photos: photos("rccg-mission-house", 5),
  },
  {
    id: "rccg-multipurpose-pavilion",
    name: "RCCG 2&24 Mini Estate",
    category: "Residential",
    location: "Redemption Camp, Ogun State",
    description:
      "A gated mini estate of single-storey earth-brick homes with exposed brick walls inside and out, paved forecourts, perimeter walls and drainage.",
    image: "/images/projects/rccg-multipurpose-pavilion/rccg-multipurpose-pavilion-01.webp",
    highlight: "Exposed CEB Walls Inside & Out",
    photos: photos("rccg-multipurpose-pavilion", 6),
  },
  {
    id: "karu-housing-development",
    name: "Karu Residential Development",
    category: "Residential",
    location: "Karu, Abuja Corridor",
    description:
      "Modern sustainable residential blocks featuring precision-pressed earth brick masonry and passive microclimate cooling design.",
    image: "/images/projects/karu-housing-development/karu-housing-development-01.webp",
    highlight: "Passive Thermal Architecture",
    photos: photos("karu-housing-development", 6),
  },
  {
    id: "navy-barracks-atimbo",
    name: "Navy Barracks, Atimbo",
    category: "Infrastructure",
    location: "Atimbo, Cross River State",
    description:
      "Rows of single-storey quarters in exposed Compressed Earth Brick, finished with blue hip roofs, terraced retaining walls and paved access.",
    image: "/images/projects/navy-barracks-atimbo/navy-barracks-atimbo-01.webp",
    highlight: "Exposed CEB Masonry",
    client: "Nigerian Navy",
    photos: photos("navy-barracks-atimbo", 6),
  },
  {
    id: "navy-school-akpabuyo",
    name: "Navy School, Akpabuyo",
    category: "Infrastructure",
    location: "Akpabuyo, Cross River State",
    description:
      "A campus of colonnaded single-storey blocks in earth brick, with deep covered walkways that keep classrooms cool in a humid coastal climate.",
    image: "/images/projects/navy-school-akpabuyo/navy-school-akpabuyo-01.webp",
    highlight: "Covered Walkways & Passive Cooling",
    client: "Nigerian Navy",
    photos: photos("navy-school-akpabuyo", 6),
  },
  {
    id: "brickville-court",
    name: "Brickville Court",
    category: "Residential",
    location: "Redemption Camp, Ogun State",
    description:
      "Two-storey residences in textured brick-effect masonry, finished in grey and green with stepped entrances, steel railings, fitted canopies and patterned paving.",
    image: "/images/projects/brickville-court/brickville-court-01.webp",
    highlight: "Textured Masonry Finish",
    photos: photos("brickville-court", 7),
  },
];

