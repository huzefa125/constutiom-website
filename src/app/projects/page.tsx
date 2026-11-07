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
    "Construction projects across Nigeria: Navy barracks, a school campus, churches and homes built by Ipile Earth Synergy in Compressed Earth Brick and steel.",
  path: "/projects",
  image: "/images/gallery/navy-barracks-atimbo/navy-barracks-atimbo-03.jpg",
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
