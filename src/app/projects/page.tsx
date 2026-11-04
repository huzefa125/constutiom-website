import type { Metadata } from "next";
import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";
import { ProjectsIntro } from "@/components/sections/projects/ProjectsIntro";
import { ProjectsWorks } from "@/components/sections/projects/ProjectsWorks";
import { ProjectsFeatured } from "@/components/sections/projects/ProjectsFeatured";
import { Cta } from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Projects | Ipile Earth Synergy Construction Limited",
  description:
    "Navy barracks, schools, churches and residences built by Ipile Earth Synergy Construction Limited in Compressed Earth Brick, masonry and structural steel across Nigeria.",
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col bg-[#f7f7f7]">
      <ProjectsHero />
      <ProjectsIntro />
      <ProjectsWorks />
      <ProjectsFeatured />
      <Cta />
    </main>
  );
}
