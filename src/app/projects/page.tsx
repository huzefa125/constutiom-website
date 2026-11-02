import type { Metadata } from "next";
import { ProjectsHero } from "@/components/sections/projects/ProjectsHero";
import { ProjectsRegister } from "@/components/sections/projects/ProjectsRegister";
import { ProjectCaseFiles } from "@/components/sections/projects/ProjectCaseFiles";
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
      <ProjectsRegister />
      <ProjectCaseFiles />
      <Cta />
    </main>
  );
}
