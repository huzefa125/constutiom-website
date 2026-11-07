import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS_DATA } from "@/data/projects";
import { HoverExpand_001 } from "@/components/ui/skiper-ui/skiper52";
import { SectionHeading } from "./SectionHeading";

const FEATURED = [
  "navy-barracks-kuje",
  "navy-barracks-atimbo",
  "navy-school-akpabuyo",
  "brickville-court",
  "rccg-mission-house",
];

const CREDENTIALS = [
  ["FIRS", "Tax clearance"],
  ["PENCOM", "Registered"],
  ["NSITF", "Registered"],
  ["ITF", "Registered"],
  ["BPP", "National contractor database"],
  ["Trademark", "Signature CEB"],
];

export function ServicesProjects() {
  const projects = FEATURED.flatMap((id) => PROJECTS_DATA.filter((p) => p.id === id));

  return (
    <section className="w-full bg-[#f7f7f7] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
      <div className="mx-auto w-full max-w-[1300px]">
        <div className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:mb-12">
          <SectionHeading eyebrow="Proof on the ground">
            Work we have <span className="text-[#800020]">delivered</span>
          </SectionHeading>
          <Link
            href="/projects"
            className="group inline-flex shrink-0 items-center gap-2 font-[Urbanist] text-sm font-bold uppercase tracking-wider text-[#800020]"
          >
            All projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
        </div>

        <HoverExpand_001
          items={projects.map((p, i) => ({
            src: p.image,
            alt: `${p.name}, ${p.location}`,
            title: p.name,
            label: String(i + 1).padStart(2, "0"),
            href: "/projects",
            linkText: "View projects",
          }))}
        />

        <ul className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-black/10 pt-8 sm:grid-cols-3 lg:grid-cols-6">
          {CREDENTIALS.map(([name, detail]) => (
            <li key={name}>
              <span className="block font-heading text-[18px] font-bold uppercase leading-none text-black">{name}</span>
              <span className="mt-1.5 block font-[Urbanist] text-sm font-medium leading-tight text-black/70">{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
