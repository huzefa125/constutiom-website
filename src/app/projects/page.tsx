import type { Metadata } from "next";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";
import { ProjectsIntro } from "@/components/sections/projects/ProjectsIntro";
import { ProjectsWorks } from "@/components/sections/projects/ProjectsWorks";
import { ProjectsFeatured } from "@/components/sections/projects/ProjectsFeatured";
import { Cta } from "@/components/sections/Cta";
import { RelatedLinks } from "@/components/sections/services/RelatedLinks";

export const metadata: Metadata = pageMetadata({
  title: "Our Construction Projects Across Nigeria",
  description:
    "An African construction company pioneering low cost construction in Nigeria. Explore defense quarters, campuses and low cost housing, including residential developments and houses under 20 million naira.",
  path: "/projects",
  image: "/images/projects/navy-barracks-atimbo/navy-barracks-atimbo-01.webp",
  keywords: [
    "Low cost construction in Nigeria",
    "African construction company",
    "low cost housing",
    "House under 20 million naira",
    "construction projects across Nigeria",
    "CEB building projects",
    "sustainable housing Nigeria",
  ],
});

export default function ProjectsPage() {
  return (
    <div className="flex w-full flex-col bg-[#f7f7f7]">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Projects", path: "/projects" },
        ])}
      />
      <ProjectsHero />
      <ProjectsIntro />
      <ProjectsWorks />
      <ProjectsFeatured />
      <RelatedLinks
        heading="Plan a project like these"
        links={[
          { href: "/affordable-housing-nigeria", title: "Affordable housing in Nigeria", text: "How we bring the cost of a quality home down." },
          { href: "/compressed-earth-bricks", title: "Compressed Earth Bricks", text: "The product behind these builds, and why it costs less." },
          { href: "/services/construction", title: "Building construction", text: "How our crews take a project from foundation to handover." },
        ]}
      />
      <Cta />
    </div>
  );
}
