import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";
import { ProjectsIntro } from "@/components/sections/projects/ProjectsIntro";
import { ProjectsWorks } from "@/components/sections/projects/ProjectsWorks";
import { ProjectsFeatured } from "@/components/sections/projects/ProjectsFeatured";
import { Cta } from "@/components/sections/Cta";

export const metadata: Metadata = pageMetadata({
  title: "Our Projects: Navy Barracks, Schools & Homes in Compressed Earth Brick",
  description:
    "Completed Nigerian Navy barracks, a school campus, churches and residences built by Ipile Earth Synergy in Compressed Earth Brick, masonry and structural steel.",
  path: "/projects",
  image: "/images/gallery/navy-barracks-atimbo/navy-barracks-atimbo-03.jpg",
});

export default function ProjectsPage() {
  return (
    <div className="flex w-full flex-col bg-[#f7f7f7]">
      <ProjectsHero />
      <ProjectsIntro />
      <ProjectsWorks />
      <ProjectsFeatured />
      <Cta />
    </div>
  );
}
