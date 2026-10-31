import * as React from "react";
import Image from "next/image";

export interface TeamMemberItem {
  id: string;
  name: string;
  role: string;
  credentials: string;
  image: string;
}

const TEAM_MEMBERS: TeamMemberItem[] = [
  {
    id: "james-oladapo",
    name: "Rear Admiral James Oladapo (Rtd)",
    role: "Chairman & Chief Executive Officer",
    credentials: "mni, mnse, fnis, fosha",
    image: "/images/team/james-oladapo.webp",
  },
  {
    id: "emmanuel-oluwole",
    name: "Emmanuel Oluwole",
    role: "Managing Director",
    credentials: "B.Sc. Econ | Hydraform Certified",
    image: "/images/team/emmanuel-oluwole.webp",
  },
  {
    id: "engr-seun",
    name: "Engr. Olaniyan Oluwaseun Wole",
    role: "Lead Civil Engineer & Project Manager",
    credentials: "COREN Reg. 42,512 | NEBOSH | ISO 9001:2008",
    image: "/images/team/engr-seun.webp",
  },
];

export function AboutTeam() {
  return (
    <section className="relative w-full bg-[#F7C290] pt-6 pb-24 sm:pb-32 lg:pb-40 px-5 sm:px-8 lg:px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-2 mb-8 sm:mb-10">
          <div className="h-2 w-2 rounded-full bg-[#800020]" />
          <span className="font-[Urbanist] text-xs sm:text-sm font-semibold uppercase tracking-[2px] text-[#800020]">
            Executive Leadership
          </span>
        </div>

        {/* Team Grid: 3 Executive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.id} className="flex flex-col items-start group">
              {/* Member Portrait Card */}
              <div className="relative w-full aspect-[1/1.1] rounded-[16px] md:rounded-[20px] overflow-hidden bg-black/5 shadow-lg border border-black/10">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                />
              </div>

              {/* Member Info Matching Optik Typography */}
              <div className="mt-5 flex flex-col items-start">
                <h3 className="font-heading font-bold uppercase text-[22px] sm:text-[24px] lg:text-[26px] text-black leading-[1.08] tracking-tight">
                  {member.name}
                </h3>
                <p className="font-[Urbanist] text-[15px] sm:text-[16px] font-semibold text-[#800020] mt-2">
                  {member.role}
                </p>
                <p className="font-[Urbanist] text-xs sm:text-[13px] font-medium text-black/60 mt-0.5">
                  {member.credentials}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
