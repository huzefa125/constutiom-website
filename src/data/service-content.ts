import type { FaqItem } from "@/components/sections/services/ServiceFaq";

export interface ServiceContent {
  heading: string;
  /** 40 to 60 words answering "What does this service include?". */
  scopeAnswer: string;
  /** 40 to 60 words answering "How does this service work?". */
  processAnswer: string;
  intro: string[];
  sections: { title: string; text: string }[];
  scope: { title: string; text: string }[];
  whoFor: string[];
  faqs: FaqItem[];
}

/** Long-form copy for each service page. Facts come from the company profile and team profile. */
export const SERVICE_CONTENT: Record<string, ServiceContent> = {
  construction: {
    scopeAnswer:
      "Construction Services covers civil construction, building contracting, infrastructure and public works, and the supply of materials and equipment. That means homes, estates, halls and complexes, plus culverts, roads, highways, borehole drilling and sewage works, along with the repair, maintenance and demolition of construction works, all carried out by one contractor.",
    processAnswer:
      "A construction project follows four stages. We assess the site, then set out and build the foundations and structure, raise the walls and superstructure in Compressed Earth Brick or other masonry, and finish services and finishes. We inspect the work with you before handover. Foundations and frameworks are checked at every stage.",
    heading: "A building construction company you can hold to account",
    intro: [
      "Ipile Earth Synergy Construction Limited is an indigenous Nigerian construction company, registered with the Corporate Affairs Commission. We build homes, housing estates, halls and complexes, and we carry out civil works such as culverts, roads, borehole drilling and sewage systems.",
      "Our first major contract was 100 housing units for the Nigerian Navy at Kuje, in Abuja. That work led to a repeat contract at Atimbo in Calabar, and to further housing and institutional projects across the country.",
      "What sets us apart is how we build. Using our own Compressed Earth Bricks reduces the cost of housing by 30 to 40% of the total walling cost per unit, so more of your budget goes into the finished home. We also build in conventional masonry and structural steel where a project calls for it.",
    ],
    sections: [
      {
        title: "Homes and housing estates",
        text: "We build single homes and full estates, from studio apartments to three-bedroom bungalows and luxury apartments. We design and build to the requirement of each client, so the same quality of construction can reach different budgets.",
      },
      {
        title: "Roads, drainage and civil works",
        text: "Our civil construction covers culverts, roads and highways, borehole drilling and sewage works, along with the repair, maintenance and demolition of construction works. On estate projects this means roads, paving and drainage are delivered with the buildings.",
      },
      {
        title: "Finished to client specification",
        text: "We make sure quality products and materials are used on site. Typical finishes include step tile roofing, kitchen cabinets, POP ceilings, Spanish tiles, aluminium windows, ensuite bedrooms and proper landscaping.",
      },
      {
        title: "Quality and site safety",
        text: "Our quality system conforms to the Federal Ministry of Works standard. Safety is an uncompromised policy: qualified personnel are appointed to control it on every project, and adequate medical facilities are kept in place.",
      },
    ],
    scope: [
      { title: "Civil construction", text: "Construction, repair, maintenance and demolition of construction works of every description." },
      { title: "Building contracting", text: "Structural development and the full functions of a general building contractor." },
      { title: "Infrastructure and public works", text: "Residential and commercial buildings, complexes, halls, culverts, roads, highways, borehole drilling and sewage systems." },
      { title: "Materials and equipment", text: "Manufacture, supply, import, export and dealing in building materials, construction equipment and builders' requisites." },
    ],
    whoFor: [
      "Families building their own home",
      "Housing developers and estate owners",
      "Government agencies and the armed forces",
      "Churches, schools and other institutions",
    ],
    faqs: [
      {
        q: "Where in Nigeria do you build?",
        a: "We have delivered projects in Abuja (FCT), Cross River State, Lagos, Nasarawa and Ogun State, including Redemption Camp on the Lagos-Ibadan Expressway. Contact us with your location and we will confirm.",
      },
      {
        q: "Can you build from a plan I already have?",
        a: "Yes. We build to client specification. If you do not have a plan yet, our structural design team can prepare one for you.",
      },
      {
        q: "Do you only build with Compressed Earth Brick?",
        a: "No. CEB is our signature product, but we also work in conventional masonry, reinforced concrete and structural steel, depending on the project.",
      },
      {
        q: "How do you keep a project on budget?",
        a: "A planning officer, quantity surveyor and site engineer are assigned to your contract. Periodic progress reports include cost control charts, so you can see financial status against work done.",
      },
      {
        q: "Who supervises the work on site?",
        a: "Projects are led by our Project Manager and Lead Civil Engineer, a COREN-registered engineer with nearly two decades of experience, supported by section engineers who report on progress regularly.",
      },
    ],
  },

  "building-maintenance": {
    scopeAnswer:
      "Building Maintenance covers comprehensive maintenance, renovation, structural repairs and property refurbishment, interior and exterior decoration and painting, marble and tile installation, plumbing, interlocking paving, fencing and furnishing. One team handles the whole job, so you do not have to manage several separate contractors for a single property.",
    processAnswer:
      "Maintenance work starts with a close survey that identifies defects and risks. We then agree a repair or renovation plan with safety controls, carry out the work with minimum disruption to occupants, and finish with a final inspection. If you wish, we can set up a planned maintenance schedule to catch small problems early.",
    heading: "Building maintenance and renovation services in Nigeria",
    intro: [
      "A building only keeps its value if it is looked after. Ipile Earth Synergy provides building maintenance services of all kinds, from a single repair to a full renovation, for homes, offices, estates and institutions.",
      "Because we are builders first, we understand what sits behind a wall or under a floor. We find the real cause of a defect rather than covering it up, then put it right with crews who do this work every day.",
      "Our maintenance team covers interior and exterior decoration, painting, marble and tile fixing, plumbing, interlocking paving, fencing, renovation and furnishing. That means one team can handle the whole job, instead of you managing several separate contractors.",
    ],
    sections: [
      {
        title: "Renovation and structural repairs",
        text: "We renovate and refurbish existing properties and carry out structural repairs. Every job starts with a close inspection so the scope of work and the risks are clear before anything is opened up.",
      },
      {
        title: "Painting and decoration",
        text: "Our crews handle interior and exterior painting and decoration, whether you are refreshing a single room, repainting a home or preparing a property for new tenants.",
      },
      {
        title: "Tiling and plumbing",
        text: "We fix marble and tiles on floors and walls, and we carry out plumbing work, so kitchens, bathrooms and shared areas can be repaired or upgraded in one visit.",
      },
      {
        title: "Paving, fencing and furnishing",
        text: "Outside the building we lay interlocking paving and build fencing. Inside, we take care of furnishing and allied works to finish the space.",
      },
    ],
    scope: [
      { title: "Comprehensive maintenance", text: "Renovation, structural repairs and full property refurbishment." },
      { title: "Decoration and painting", text: "Interior and exterior decoration and painting for homes and commercial buildings." },
      { title: "Marble, tile and plumbing", text: "Fixing of marble and tiles, plus plumbing repairs and installation." },
      { title: "Paving, fencing and furnishing", text: "Interlocking paving, fencing, furnishing and allied works." },
    ],
    whoFor: [
      "Homeowners and landlords",
      "Estate and facility managers",
      "Offices and commercial buildings",
      "Schools, churches and institutions",
    ],
    faqs: [
      {
        q: "Do you maintain buildings you did not build?",
        a: "Yes. We provide building maintenance services of all kinds, on any type of property.",
      },
      {
        q: "Can you handle one small repair?",
        a: "Yes. Tell us what you need. We inspect the problem first, then agree the right scope of work with you.",
      },
      {
        q: "Will I have to move out during the work?",
        a: "Our crews work to keep disruption to occupants to a minimum. For larger renovations we plan the work with you in advance so you know what to expect.",
      },
      {
        q: "Do you offer planned maintenance?",
        a: "Yes. After the work is finished we can set up a planned maintenance schedule, so small problems are caught before they become expensive.",
      },
    ],
  },

  "structural-design": {
    scopeAnswer:
      "Structural Design and Development covers drafting, planning, design and project management for construction and structural engineering projects. We act as primary building contractor and developer for new builds and structural adaptations, prepare comprehensive site developments, and offer modern Compressed Earth Brick home plans and designs that reduce building cost.",
    processAnswer:
      "Design work begins with a brief and a plan chosen or tailored to your budget, family size and plot. Structural and architectural design follows, using locally available resources. We then manage the build from foundation to completion and hand over a finished home or development that is ready to use.",
    heading: "Structural design and building plans in Nigeria",
    intro: [
      "Good building starts on paper. Ipile Earth Synergy drafts, plans, designs and project-manages all types of construction and structural engineering projects, from a single family home to a complete site development.",
      "Our design work begins with a proper briefing from everyone involved in the project, along with the available funding. The aim is housing that is comfortable, habitable, functional and economical, and that looks good to the people who live in it and those who pass by.",
      "We also offer modern construction plans and designs built around Compressed Earth Brick. Designing for CEB from the start is what allows the 30 to 40% saving on total walling cost per unit, so the design stage is where much of a project's value is decided.",
    ],
    sections: [
      {
        title: "Engineering led by a COREN-registered engineer",
        text: "Structural work is led by Engr. Olaniyan Oluwaseun Wole, a COREN-registered civil engineer and project manager. His experience covers the design and supervision of reinforced concrete structures, structural steel systems, elevated steel tanks, industrial complexes and foundation engineering.",
      },
      {
        title: "Practical design decisions",
        text: "We plan convenient walkways and driveways for the free flow of people and cars, room depths that make the most of natural ventilation and light, and gatehouses for the security of life and property. We use only the design elements that add value.",
      },
      {
        title: "Turnkey development",
        text: "We can act as primary building contractor and developer, taking a project from design through to a finished building. This covers new construction, structural adaptations of existing buildings and comprehensive site developments.",
      },
    ],
    scope: [
      { title: "Design and planning", text: "Drafting, planning, design and project management for all types of construction and structural engineering projects." },
      { title: "Turnkey development", text: "Primary building contractor and developer for new construction and structural adaptations." },
      { title: "Site developments", text: "Layouts for full sites, including roads, walkways, parking, perimeter fencing and gatehouses." },
      { title: "Modern CEB home plans", text: "Model construction plans and designs that use Compressed Earth Brick to reduce building cost." },
    ],
    whoFor: [
      "Landowners planning a new home",
      "Developers planning an estate",
      "Institutions planning a campus or complex",
      "Owners adapting an existing building",
    ],
    faqs: [
      {
        q: "Can you design my house without building it?",
        a: "Yes. We provide engineering consultancy and design as a standalone service, and we can also take the project through to construction if you wish.",
      },
      {
        q: "Who carries out the structural engineering?",
        a: "Our Project Manager and Lead Civil Engineer is registered with the Council for the Regulation of Engineering in Nigeria (COREN Reg. 42,512) and has nearly two decades of experience.",
      },
      {
        q: "Can a CEB home plan be changed to suit me?",
        a: "Yes. Plans are chosen or tailored to your budget, family size and plot.",
      },
      {
        q: "Can you adapt an existing building?",
        a: "Yes. We carry out structural adaptations as well as new construction. We assess the existing structure first, then design the changes.",
      },
    ],
  },

  "property-facility-management": {
    scopeAnswer:
      "Property and Facility Management covers facility management, including cleaning, routine maintenance and operations for office, commercial, residential and industrial properties. It also covers real estate and property development, estate management, real estate agency and brokerage, and real estate investment in Nigeria and internationally, so one company can run a property from day to day.",
    processAnswer:
      "We begin by assessing the property, its condition and how it is used. A management and maintenance plan is then agreed with you. Routine upkeep and operations are carried out and reported on, and over time we recommend upgrades and development opportunities that protect the value of the property.",
    heading: "Property and facility management in Nigeria",
    intro: [
      "Owning a property is one job. Keeping it clean, safe, occupied and earning is another. Ipile Earth Synergy manages the day-to-day running of office, commercial, residential and industrial properties, so owners do not have to.",
      "We bring a builder's eye to property management. Because the same company also handles construction and maintenance, problems found during routine checks can be fixed by our own crews rather than passed to an outside contractor.",
      "Facility management experience runs through our leadership. Our Managing Director has previously worked as a Facility Manager at Naval Building and Construction Company Ltd.",
    ],
    sections: [
      {
        title: "Facility management",
        text: "We provide office management, cleaning, routine maintenance and operational management for offices, commercial buildings, homes and industrial sites. You agree the plan with us, and we carry it out and report back to you.",
      },
      {
        title: "Estate management",
        text: "We look after estates and shared spaces, including the upkeep of roads, paving, drainage and landscaping, so that an estate stays as good as the day it was handed over.",
      },
      {
        title: "Property agency and brokerage",
        text: "We act as property agents and real estate agents, helping owners find the right occupants and helping buyers and tenants find the right property.",
      },
      {
        title: "Property development and investment",
        text: "We engage in property development and real estate investment in Nigeria and internationally, and we recommend upgrades and development opportunities to the owners we work with.",
      },
    ],
    scope: [
      { title: "Facility management", text: "Cleaning, routine maintenance and operational management for office, commercial, residential and industrial properties." },
      { title: "Real estate and property development", text: "Property development through to finished buildings." },
      { title: "Estate management and agency", text: "Estate management, real estate agency and property brokerage." },
      { title: "Real estate investments", text: "Dealing in real estate in Nigeria and internationally." },
    ],
    whoFor: [
      "Landlords and property investors",
      "Estate owners and residents' groups",
      "Offices and commercial buildings",
      "Industrial sites and institutions",
    ],
    faqs: [
      {
        q: "What is the difference between property and facility management?",
        a: "Property management looks after a building as an asset, including occupants and value. Facility management keeps the building running day to day, including cleaning, routine maintenance and operations. We provide both.",
      },
      {
        q: "What types of property do you manage?",
        a: "We manage office, commercial, residential and industrial properties.",
      },
      {
        q: "How do you report to property owners?",
        a: "We start by reviewing the property and agreeing a management and maintenance plan with you. Routine upkeep and operations are then carried out and reported on.",
      },
      {
        q: "Can you handle repairs as well?",
        a: "Yes. We also provide building maintenance, so repairs and renovation can be handled by the same team that manages your property.",
      },
    ],
  },

  "general-contracts-procurement": {
    scopeAnswer:
      "General Contracts and Procurement covers general contracting, trading, importation and exportation, logistics, procurement, marketing, sales and distribution. We act as commission agent and manufacturers’ representative, and supply construction equipment, building requisites and raw materials, so a project can be supplied as well as built by the same company.",
    processAnswer:
      "We agree your requirements and quantities before any sourcing begins, then procure from trusted manufacturers and suppliers. Logistics are coordinated so materials reach site on time, and we follow up after delivery, including repeat supply when you need it. This keeps materials moving so that your build does not stop.",
    heading: "General contractor and building materials supplier in Nigeria",
    intro: [
      "A project stops when materials stop. Ipile Earth Synergy handles general contracts, procurement and supply, so the right materials and equipment reach your site when they are needed.",
      "We carry on business as manufacturers, suppliers, importers, exporters and dealers in all kinds of building materials, construction equipment and builders' requisites. We also take on general contracts, trading, logistics, marketing, sales and distribution of general goods.",
      "Working with a contractor who also builds has one clear benefit: we know what site teams actually need, what specifications matter and what delay costs. As a registered contractor on the National Data Base of Contractors with the Bureau of Public Procurement, we are set up to work with government and its agencies.",
    ],
    sections: [
      {
        title: "Building materials and equipment",
        text: "We supply building materials, construction equipment, builders' requisites and raw materials. This includes our own Compressed Earth Bricks, which are produced from locally available laterite.",
      },
      {
        title: "Procurement and logistics",
        text: "We agree requirements and quantities with you before sourcing begins, procure from trusted manufacturers and suppliers, and coordinate logistics so that deliveries reach site on time.",
      },
      {
        title: "Import, export and trading",
        text: "We handle general trading, importation and exportation, and the marketing, sales and distribution of general goods.",
      },
      {
        title: "Representation",
        text: "We act as commission agents and manufacturers' representatives, giving suppliers a local partner in Nigeria.",
      },
    ],
    scope: [
      { title: "General merchandise and logistics", text: "General contracting, international trading, importation, exportation, procurement and distribution." },
      { title: "Representation and supply", text: "Commission agent and manufacturers' representative." },
      { title: "Construction equipment", text: "Supply of construction equipment and builders' requisites." },
      { title: "Raw materials", text: "Supply of raw materials and building materials for your project." },
    ],
    whoFor: [
      "Contractors who need a reliable supply",
      "Developers buying materials in volume",
      "Government agencies and public bodies",
      "Manufacturers seeking a Nigerian partner",
    ],
    faqs: [
      {
        q: "Do you supply materials if you are not building the project?",
        a: "Yes. Supply and procurement is a service in its own right, and you do not need to hire us for construction.",
      },
      {
        q: "What materials can you supply?",
        a: "We deal in all kinds of building materials, construction equipment, builders' requisites and raw materials. Send us your list and quantities.",
      },
      {
        q: "Are you registered for government contracts?",
        a: "Yes. We are registered on the National Data Base of Contractors with the Bureau of Public Procurement, and we hold tax clearance, PENCOM, NSITF and ITF certificates.",
      },
      {
        q: "Can you deliver to site?",
        a: "Yes. We coordinate logistics to site and follow up after delivery, including repeat supply when you need it.",
      },
    ],
  },
};
