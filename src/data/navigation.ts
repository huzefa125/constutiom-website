export interface NavDropdownItem {
  title: string;
  href: string;
  description: string;
}

export interface NavItem {
  title: string;
  href: string;
  dropdown?: NavDropdownItem[];
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Projects",
    href: "/projects",
    dropdown: [
      {
        title: "Residential Developments",
        href: "/projects",
        description: "High-performance homes and defense quarters with earth brick insulation.",
      },
      {
        title: "Commercial & Institutional",
        href: "/projects",
        description: "Multi-purpose pavilions, auditoriums, and community complexes.",
      },
      {
        title: "Infrastructure Projects",
        href: "/projects",
        description: "Military barracks, educational facilities, and civil foundations.",
      },
    ],
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

