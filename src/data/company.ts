export interface TeamMember {
  name: string;
  role: string;
  credentials: string;
  bio: string;
  training?: string[];
  affiliations?: string[];
}

export interface CompanyInfo {
  name: string;
  shortName: string;
  tagline: string;
  mission: string;
  vision: string;
  description: string;
  headquarters: string;
  operationalRegions: string[];
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  leadership: TeamMember[];
  stats: {
    label: string;
    value: string;
    description: string;
  }[];
}

export const COMPANY_DATA: CompanyInfo = {
  name: "Ipile Earth Synergy Construction Limited",
  shortName: "Ipile Earth Synergy",
  tagline: "Sustainable Building Systems & Infrastructure Engineering",
  mission:
    "To deliver resilient, environmentally responsible, and high-precision civil engineering solutions, driving affordable and sustainable infrastructure development throughout Nigeria.",
  vision:
    "To stand as Nigeria's preeminent engineering and sustainable construction firm, recognized for integrity, structural longevity, and innovative earth-brick technology.",
  description:
    "Ipile Earth Synergy Construction Limited is a distinguished Nigerian engineering, property management, and general contracting enterprise. Founded on the bedrock of disciplined military-grade execution, rigorous COREN-certified engineering standards, and cutting-edge Hydraform Compressed Earth Brick (CEB) technology, we transform visions into enduring landmarks.",
  headquarters: "Abuja, Federal Capital Territory, Nigeria",
  operationalRegions: ["Abuja (FCT)", "Cross River State", "Lagos State", "Nasarawa State"],
  contact: {
    email: "info@ipileearth.com",
    phone: "+234 803 700 8192",
    address: "Federal Capital Territory, Abuja, Nigeria",
  },
  leadership: [
    {
      name: "Rear Admiral James Oladapo (Rtd)",
      role: "Chairman & Chief Executive Officer",
      credentials: "mni, mnse, fnis, fosha",
      bio: "Brings strategic foresight and disciplined operational leadership honed through a distinguished career as a senior naval officer and corporate strategist.",
      affiliations: [
        "Member, National Institute for Policy and Strategic Studies (NIPSS), Kuru",
        "Nigerian Society of Engineers (MNSE)",
        "Fellow, Nigerian Institution of Safety Professionals (FNIS)",
        "Fellow, Occupational Safety and Health Association (FOSHA)",
      ],
      training: [
        "B.Sc. Electrical & Electronics Engineering, Obafemi Awolowo University (OAU)",
        "M.Sc. International Relations & Strategic Studies, LASU",
        "Executive Leadership, Business School Lausanne, Switzerland",
      ],
    },
    {
      name: "Emmanuel Oluwole",
      role: "Managing Director",
      credentials: "B.Sc. Econ | Hydraform Certified",
      bio: "Dynamic economist and corporate leader steering daily operations, capital efficiency, and market expansion across developing Nigerian sectors.",
      training: [
        "B.Sc. Economics & Leadership Development, Covenant University",
        "Interlocking Block & Building Systems Certified, Hydraform Academy (Boksburg, South Africa)",
      ],
    },
    {
      name: "Engr. Olaniyan Oluwaseun Wole",
      role: "Project Manager & Lead Civil Engineer",
      credentials: "COREN Reg. 42,512 | NEBOSH | ISO 9001:2008",
      bio: "Nearly two decades of structural design, foundation engineering, and major civil execution across complex infrastructure and energy facilities.",
      training: [
        "B.Eng. Civil Engineering, University of Ilorin",
        "Bureau Veritas ISO 9001:2008 Certified QMS Lead Auditor",
        "NEBOSH International General Certificate in Occupational Health & Safety",
      ],
    },
  ],
  stats: [
    {
      label: "Thermal Efficiency",
      value: "40%",
      description: "Reduction in ambient heat transfer with Compressed Earth Bricks",
    },
    {
      label: "Structural Integrity",
      value: "COREN",
      description: "Strict certified engineering and ISO 9001 quality audits",
    },
    {
      label: "Cement Reduction",
      value: "30-50%",
      description: "Lower carbon footprint compared to standard sandcrete blocks",
    },
  ],
};

