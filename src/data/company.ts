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
  founded: string;
  coreValues: string[];
  operationalRegions: string[];
  contact: {
    email: string;
    phone: string;
    phones: string[];
    website: string;
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
  mission: "To become the leading provider of affordable homes in Nigeria.",
  vision: "Provide suitable and affordable homes in a sustainable environment for every class of society.",
  description:
    "Ipile Earth Synergy Construction Limited is a modern construction company established in 2017 that aims to provide suitable and affordable homes in a sustainable environment using locally available resources for every class of society. We offer modern construction plans and designs using Compressed Earth Brick (CEB), which reduces building cost significantly.",
  headquarters: "Abba Father Estate off Estate 15, Estate 15, Redemption Camp, Lagos-Ibadan Expressway",
  founded: "2017",
  coreValues: ["Innovation", "Speed", "Cost Effectiveness", "Teamwork"],
  operationalRegions: ["Abuja (FCT)", "Cross River State", "Lagos State", "Nasarawa State"],
  contact: {
    email: "ipileearth1@gmail.com",
    phone: "+234 812 686 8754",
    phones: ["+234 812 686 8754", "+234 808 932 1462"],
    website: "www.ipileearth.com.ng",
    address: "Abba Father Estate off Estate 15, Estate 15, Redemption Camp, Lagos-Ibadan Expressway",
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
      label: "Established",
      value: "2017",
      description: "Building affordable, sustainable homes across Nigeria",
    },
    {
      label: "Cement Reduction",
      value: "30-50%",
      description: "Lower carbon footprint compared to standard sandcrete blocks",
    },
  ],
};

