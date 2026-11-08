import type { GuideItem } from "../guide-types";

/**
 * Every figure is quoted from the source named beside it and was checked on 8 November 2026.
 * Where we could not open a source or found no Nigerian figure, the text says so instead of guessing.
 */
export const BRICKS_GUIDE: GuideItem = {
  slug: "compressed-earth-bricks-vs-sandcrete-vs-burnt-bricks",
  short: "Earth vs Sandcrete vs Burnt Bricks",
  title: "Compressed Earth Bricks vs Sandcrete Blocks vs Burnt Bricks",
  seoTitle: "Earth Bricks vs Sandcrete vs Burnt Bricks",
  seoDescription:
    "Compare compressed earth bricks, sandcrete blocks and burnt clay bricks in Nigeria on strength, cost, build time and thermal performance, with sources.",
  heroLines: ["EARTH BRICKS VS", "SANDCRETE VS BURNT"],
  heroText:
    "A sourced comparison of strength, cost, build time and thermal performance, including what the evidence does not yet show.",
  image: "/images/service-photos/general-contracts-procurement-1.webp",
  imageAlt: "Compressed Earth Bricks laid out and curing under plastic sheeting on an Ipile site",
  published: "2026-11-08",
  updated: "2026-11-08",
  blocks: [
    {
      type: "p",
      text: "Three materials dominate the question of what to build walls with in Nigeria: sandcrete blocks, which are used in the great majority of buildings; burnt clay bricks, which are common in some regions; and stabilised earth blocks, including the interlocking type we make. People ask us which is best. The honest answer is that it depends on what you need, and that the evidence for each is weaker than the sales pitches suggest. **Sandcrete blocks** are made from cement and sand and are the standard walling unit in Nigeria. **Burnt clay bricks** are clay fired in a kiln. **Compressed earth bricks** are pressed from soil with a few percent of cement.",
    },
    {
      type: "p",
      text: "We make Compressed Earth Bricks, so we are not neutral. To make this comparison useful anyway, every number below is quoted from a named paper or report, and where the evidence is thin or comes from a promoter of one material, we say so. We also say where we could not find a figure. A guide that hides gaps is not worth reading, and you are about to spend a large sum of money.",
    },
    {
      type: "h2",
      id: "which-is-best",
      text: "Which is better: earth bricks, sandcrete blocks or burnt bricks?",
      answer:
        "No material wins on every measure. Well-made earth blocks usually cost less per wall and build faster, because they need little mortar or plaster. Sandcrete is familiar and widely available, but quality varies badly. Burnt bricks suit places with good clay and kilns. Choose by soil, supply and workmanship, not by slogan.",
    },
    {
      type: "table",
      caption: "At a glance: the three materials compared",
      headers: ["Measure", "Compressed earth blocks", "Sandcrete blocks", "Burnt clay bricks"],
      rows: [
        [
          "Strength",
          "Depends on cement share. About 1.6 to 3.1 N/mm² at 5–25% cement in one Nigerian study. Wet strength is lower.",
          "Standard minimum 2.5 or 3.45 N/mm². Surveys of commercial blocks found 0.19 to 3.06.",
          "We could not verify a Nigerian figure from a source we could open. Ask the kiln for test results.",
        ],
        [
          "Cost",
          "Studies found walls about 3.7% to 12.4% cheaper than sandcrete. Ipile’s own figure is 30–40% of walling cost.",
          "Baseline. About ₦3,199 per square metre of wall in a 2020 Edo State study.",
          "No current Nigerian cost figure found.",
        ],
        [
          "Build speed",
          "Faster in principle, because bedding mortar is largely removed. No independent percentage found.",
          "Standard. Needs mortar in every joint and plaster on both faces.",
          "Standard. Needs mortar in every joint.",
        ],
        [
          "Thermal",
          "Published conductivity 0.81–0.93 W/mK for stabilised blocks (promoter data). No measured Nigerian comparison found.",
          "A Nigerian simulation put hollow sandcrete at a U-value near 2 W/m²K.",
          "No Nigerian figure verified.",
        ],
        [
          "Carbon",
          "A Nepal study found 75–78% less CO₂ per kilogram than fired brick. Cement stabiliser reduces the advantage.",
          "Cement-based. No Nigerian figure found.",
          "Fired in kilns, which is energy intensive.",
        ],
        [
          "Main weakness",
          "Needs suitable soil, correct cement dose, curing and quality control.",
          "Widespread failure to meet the standard in factory blocks.",
          "Kiln variability, and fuel and clay supply.",
        ],
      ],
      foot: "Sources are listed at the end of this guide. N/mm² is newtons per square millimetre, the unit for compressive strength. W/mK is a measure of heat conduction: a lower number means better insulation.",
    },
    {
      type: "h2",
      id: "strength",
      text: "How strong are earth bricks compared with sandcrete?",
      answer:
        "Sandcrete is meant to reach 2.5 N/mm² for non-load-bearing blocks and 3.45 for load-bearing, but surveys found many commercial blocks far below that. Stabilised earth blocks reach about 1.6 to 3.1 N/mm² depending on how much cement is added. Both depend more on mix and curing than on the material itself.",
    },
    {
      type: "p",
      text: "Start with sandcrete, because it is the benchmark. The Nigerian Industrial Standard, NIS 87, sets the minimum compressive strength at 2.5 N/mm² for non-load-bearing blocks and 3.45 N/mm² for load-bearing blocks. A 2025 study in the AZOJETE journal tested blocks from ten factories in Kaura District, Abuja. Their 28-day strengths ran from 1.19 to 3.06 N/mm². Only four of the ten reached 2.5, and none reached 3.45. None of them used the mix ratio the standard calls for. The paper also quotes a 2004 estimate that sandcrete is used in over 90% of buildings in Nigeria.",
    },
    {
      type: "p",
      text: "The Abuja result is not unusual. A 2019 study of twelve firms in Akwa Ibom found strengths between 0.19 and 1.32 N/mm², and a 2015 study of six factories in Ikeja, Lagos, found about 0.34 to 0.38 N/mm² against the 2.5 required. The authors of these papers blame poor mixing, too little cement and short curing. In other words, the material can meet the standard, and often does not in practice.",
    },
    {
      type: "table",
      caption: "Strength of stabilised laterite interlocking blocks, 28-day dry",
      headers: ["Cement in the block", "Compressive strength"],
      rows: [
        ["5%", "1.63 N/mm²"],
        ["10%", "2.60 N/mm²"],
        ["15%", "2.78 N/mm²"],
        ["20%", "2.82 N/mm²"],
        ["25%", "3.12 N/mm²"],
      ],
      foot: "Source: Raheem, Bello and Makinde, comparative study of cement and lime stabilised lateritic interlocking blocks, Ogbomoso, 2010. The authors report that 10% and above met the 2 N/mm² 28-day minimum they cite from NBRRI.",
    },
    {
      type: "p",
      text: "For earth blocks, the cement dose changes everything. In the Ogbomoso study, laterite interlocking blocks with 5% cement reached 1.63 N/mm² after 28 days dry, which is below the 2 N/mm² threshold the authors cite from NBRRI. Raise the cement to 10% and the figure becomes 2.60. The gains flatten after that. This is why a good producer tests the soil and sets the dose, instead of using a fixed recipe.",
    },
    {
      type: "p",
      text: "Moisture also matters. The Auroville Earth Institute, which promotes compressed stabilised earth, grades blocks into three classes at 5% cement. Class A blocks reach 5–7 N/mm² dry but 3–4 wet. Class B reaches 4–5 dry and 2–3 wet. Class C reaches 3–4 dry and 1.5–2 wet. Note the drop from dry to wet, which a buyer should always ask about. Auroville is a promoter, so treat its numbers as what is achievable with careful production, not as what every block on the market delivers.",
    },
    {
      type: "p",
      text: "For burnt clay bricks we could not find a strength figure in a source we were able to open in full, so we are not going to quote one. Ask any kiln for test results on the bricks you are buying, and ask how the tested bricks were chosen from the kiln, because bricks fired at the top of a kiln often differ from those at the bottom.",
    },
    {
      type: "h2",
      id: "cost",
      text: "Are earth bricks cheaper than sandcrete blocks?",
      answer:
        "Usually, but by less than the headlines suggest. A 2020 Edo State study priced a sandcrete wall at ₦3,199.40 per square metre against ₦3,079.52 for Hydraform blocks, about 3.7% less. A 2026 paper reports 12.44%. Ipile’s own figure is 30–40% of walling cost, which no independent study yet confirms.",
    },
    {
      type: "table",
      caption: "What the cost evidence says",
      headers: ["Source", "Finding", "Type of source"],
      rows: [
        ["Aligamhe, Alao and Dania, Auchi, 2020", "Wall cost per m²: sandcrete ₦3,199.40, Hydraform ₦3,079.52, about 3.7% lower. Sandcrete needs plaster on both faces. Hydraform only needs external corners rendered.", "Peer-reviewed paper"],
        ["IJISRT, 2026", "12.44% reduction in raw capital cost on one square metre of wall compared with sandcrete, mostly from removing bedding mortar.", "Journal abstract only"],
        ["Ibitoye, Alagbe and Dare-Abel, South-West Nigeria, 2022", "Interlocking stabilised blocks were relatively cheaper than sandcrete, from mortarless walling, no rendering and less cement and steel. No figures on the page.", "Preprint abstract"],
        ["Ipile Earth Synergy company profile", "Reduces the cost of housing by 30–40% of the total walling cost per unit.", "Company figure"],
      ],
      foot: "One 2022 journal paper reports a 46% reduction in production cost for stabilised earth blocks. We do not rely on it because it shows no basis for the figure and sits far from every other result.",
    },
    {
      type: "p",
      text: "The pattern is consistent in direction and inconsistent in size. Every independent source reviewed says interlocking earth blocks come out cheaper than sandcrete, and the reasons are the same: less mortar, less or no plaster, and in some cases less cement and steel. The wall-level saving, though, ranges from under 4% to just over 12%, depending on the study. Our own figure is higher, and it comes from our projects and our production costs, not from a controlled comparison.",
    },
    {
      type: "p",
      text: "Be careful comparing prices per block. A Hydraform brick is a different size from a 225mm hollow sandcrete block, so the cheaper unit price tells you little. The Auchi study found the Hydraform brick at ₦57.85 against ₦168.57 for the sandcrete block, yet the finished wall differed by only a few percent. Always compare cost per square metre of finished wall, including plaster and labour. For what the saving looks like on a whole house, see our guide to the [cost of building a house in Nigeria](/guides/cost-of-building-a-house-in-nigeria).",
    },
    {
      type: "p",
      text: "For burnt clay bricks we did not find a reliable current Nigerian price, so we cannot place them in this comparison. The studies we saw suggested bricks cost more than blocks in some areas, which limits their use, but that evidence was old and regional. Get local quotes.",
    },
    {
      type: "h2",
      id: "speed",
      text: "Do earth bricks build faster than other blocks?",
      answer:
        "In principle yes. Dry-stacked interlocking blocks remove the bedding mortar in most courses, and a Witwatersrand thesis on Hydraform notes that this accelerates construction. No independent measurement of the time saved appears in the sources reviewed. Ipile’s own figure is that a building is usually delivered within six weeks, which is a company claim.",
    },
    {
      type: "p",
      text: "Speed is the hardest claim to test, because it depends on crew size, the machine, curing and weather. The University of the Witwatersrand thesis on dry-stack masonry, which tested Hydraform blocks, says eliminating bedding mortar speeds up construction and that a small pool of skilled labour is enough. It gives no percentage. You will see larger claims on promoter websites, such as 50% faster than burnt brick, but the sources reviewed show no measurement behind them, so we do not repeat them.",
    },
    {
      type: "p",
      text: "What we can say from our own work is limited and clearly ours. Our company profile states that CEB delivers high speed of construction, usually within six weeks for a building, with materials easily sourced locally. That figure comes from our own projects, and it does not replace a schedule for your own house. Earth blocks also need curing time before use, so the production stage has to start early. UN-Habitat and other guides recommend curing for at least seven days and up to 28 for full strength.",
    },
    {
      type: "h2",
      id: "thermal",
      text: "Which material keeps a house cooler?",
      answer:
        "Thick earth walls store heat and release it slowly, which can smooth out daytime temperature swings. Auroville reports a delay of 10–12 hours for a 40 cm earth wall. But the sources reviewed contain no measured Nigerian comparison against sandcrete, and published conductivity values for earth walls vary with moisture and method.",
    },
    {
      type: "p",
      text: "This is where marketing runs furthest ahead of evidence. Auroville reports a thermal conductivity of 0.81 to 0.93 W/mK for compressed stabilised earth blocks and a heat lag of 10 to 12 hours through a 40 cm wall. A lower conductivity means better insulation, and a longer lag means the heat of midday arrives inside the house at night, when it is easier to bear. Those are promoter figures from India.",
    },
    {
      type: "p",
      text: "A simulation study of buildings in Ogbomoso, published in the journal Architecture and Engineering, compared adobe bricks with hollow sandcrete blocks. It found hollow sandcrete walls had a U-value of about 2 W/m²K against 1.8 for adobe, and an annual heat load of about 7,120 kWh for the adobe building against about 8,876 kWh for the sandcrete one. The paper calls that 11% lower, but its own figures work out closer to 20%, so treat the size of the gap with caution. That is a simulation, not a measurement, and it tests adobe, not stabilised blocks. We did not find a measured Nigerian study comparing stabilised earth blocks with sandcrete in occupied buildings. Until one exists, any claim of a precise temperature saving, ours included, is unproven. The qualitative point is safe: earth is dense, and a thick dense wall behaves differently from a thin hollow one.",
    },
    {
      type: "h2",
      id: "environment",
      text: "Which material has the lowest carbon footprint?",
      answer:
        "Earth blocks usually have the lowest, because they are pressed, not fired. A Nepal study found stabilised earth blocks at 0.085 to 0.12 kg of CO₂ per kilogram against 0.35 to 0.55 for fired clay brick, about 75–78% less. Cement stabiliser adds carbon, and long transport can cancel the gain.",
    },
    {
      type: "p",
      text: "The strongest source is a 2021 evaluation by the consultants Max Fordham for Build Up Nepal. It found compressed stabilised earth blocks at 0.085 and 0.12 kg of CO₂e per kilogram on two sites, against 0.35 and 0.55 for fired clay brick, which is 75–78% less. That is Nepal data, from a study commissioned by a promoter of the blocks, and in the second site transport was nearly half the block’s emissions. Researchers at the University of Liège and 2iE note that cement and lime used as stabilisers add embodied energy and carbon, which reduces the advantage of raw earth.",
    },
    {
      type: "p",
      text: "The sources reviewed contain no Nigerian carbon figure for sandcrete. The point to take away is practical: the climate benefit depends on soil being dug close to site and production being close to the building, so that you avoid long supply chains for cement and blocks. Ask any supplier where the soil comes from and how far the blocks travel.",
    },
    {
      type: "h2",
      id: "weaknesses",
      text: "What are the weaknesses of earth bricks?",
      answer:
        "They need suitable soil, the right cement dose, proper curing and quality control. Wet strength is lower than dry, so walls need protection from water. Researchers also warn that very wide spans and tall buildings are hard to build, and one shaking-table test found a plain dry-stack house failed at a lower shaking level than conventional masonry.",
    },
    {
      type: "ul",
      items: [
        "**Soil and testing.** Auroville lists the need for correct soil identification, and notes that poor production practice, such as untrained teams, over- or under-stabilisation and unsuitable equipment, is a main cause of failure.",
        "**Water.** In a laboratory study at the University of Liège, unstabilised earth blocks degraded immediately in water, while blocks stabilised with by-product binders, not cement, resisted erosion. Stabilised blocks are weaker when saturated, so walls need a raised plinth, a damp-proof course and a roof with generous overhangs.",
        "**Curing.** Blocks must be kept damp for at least seven days and left to reach strength over about 28.",
        "**Reinforcement.** The Witwatersrand thesis found in shaking-table tests that a plain dry-stack house failed at 0.3 g against 0.6 g for conventional masonry, and proposes ways to strengthen the system’s lateral capacity. Nigeria is not a high-seismic country, but the finding is a reason to follow an engineer’s detailing.",
        "**Skills and perception.** A 2026 paper lists strict soil requirements, site quality-control problems and negative public perception among the barriers to wider use.",
      ],
    },
    {
      type: "p",
      text: "None of these is a reason to avoid earth blocks. They are reasons to choose a builder who tests soil, controls the cement dose, cures properly and details the damp-proofing and roof correctly. It is the same advice that applies to sandcrete, where the evidence shows that poor production, not the material, is the weakness. See what a good result looks like in our [projects across Nigeria](/projects), including 100 housing units for the Nigerian Navy at [Kuje, Abuja](/locations/abuja).",
    },
    {
      type: "h2",
      id: "how-to-choose",
      text: "How do you choose between the three?",
      answer:
        "Match the material to your soil, supply and builder. If good laterite is near your site and a reputable crew can control the cement dose and curing, earth blocks are worth pricing. If you need speed of supply from a known factory, choose sandcrete but demand test results. Burnt bricks suit areas with good clay and kilns.",
    },
    {
      type: "ol",
      items: [
        "Ask each builder for strength test results for the exact blocks you will use, with the test date and cement content.",
        "Compare cost per square metre of finished wall, including plaster, mortar and labour, not the price per block.",
        "Visit the production site. Check how blocks are mixed, pressed or moulded, stacked and cured.",
        "For earth blocks, ask for the soil test and the cement percentage. Anything near 5% deserves a question.",
        "Check the detailing: plinth height, damp-proof course, roof overhang and where reinforcement is placed.",
        "Get a priced bill of quantities for each option on your own plan, so the comparison is like for like.",
      ],
    },
    {
      type: "p",
      text: "If you would like us to price your plan in earth blocks and in sandcrete, [send us your brief](/contact#contact-form). We will give you both numbers, even if sandcrete comes out ahead for your plot. You can also read how we make our bricks in our [guide to Compressed Earth Bricks](/compressed-earth-bricks).",
    },
  ],
  faqs: [
    {
      q: "Are compressed earth bricks stronger than sandcrete blocks?",
      a: "Not automatically. Sandcrete should reach 2.5 or 3.45 N/mm², but Nigerian surveys found many blocks far below that. Stabilised earth blocks reached 1.63 N/mm² at 5% cement and 2.60 at 10% in a 2010 Ogbomoso study. A well-made block of either type can be adequate. Ask for test results on the exact blocks you will buy.",
    },
    {
      q: "Do earth bricks dissolve in rain?",
      a: "Unstabilised earth does degrade in water, and a university laboratory study confirmed it. Blocks with a stabiliser added resisted erosion in tests; the University of Liège study used by-product binders, and cement-stabilised blocks are widely used in practice. They still lose strength when wet, so walls need a raised plinth, a damp-proof course and roof overhangs, and plaster or a sealer where exposed.",
    },
    {
      q: "Are interlocking bricks cheaper than sandcrete?",
      a: "Independent Nigerian studies say yes, by about 3.7% to 12.4% on the wall, mainly because there is less mortar and plaster. Ipile’s own figure is 30–40% of walling cost, which is a company figure. Compare cost per square metre of finished wall, since unit prices are misleading when block sizes differ.",
    },
    {
      q: "Can you build a two-storey house with earth blocks?",
      a: "Yes, with engineering. Auroville notes that wide spans and tall buildings are difficult, and a Witwatersrand shaking-table test led to proposals for strengthening dry-stack walls. A structural engineer should design the ring beams and reinforcement. Our Project Manager is a COREN-registered civil engineer.",
    },
    {
      q: "How long do earth blocks take to cure?",
      a: "Keep them damp for at least seven days and allow about 28 days for full strength, according to UN-Habitat guidance. Producers usually press blocks well ahead of construction so that the walls go up with blocks that have already cured.",
    },
  ],
  sources: [
    {
      name: "AZOJETE: Quality assessment of commercial sandcrete hollow blocks, Kaura District, Abuja",
      url: "https://azojete.com.ng/index.php/azojete/article/download/1019/588",
      note: "Peer-reviewed, March 2025. NIS 87 minimums, strengths from ten factories, and the share of buildings using sandcrete.",
    },
    {
      name: "Nigerian Journal of Technology: sandcrete block quality in Akwa Ibom",
      url: "https://www.nijotech.com/index.php/nijotech/article/view/2045",
      note: "Peer-reviewed, 2019. Strength of blocks from twelve firms.",
    },
    {
      name: "FUTAJEET: Sandcrete block quality in Ikeja, Lagos",
      url: "https://jeet.futa.edu.ng/index.php/jeet/article/download/23/21/125",
      note: "Peer-reviewed, 2015. Strength of blocks from six factories.",
    },
    {
      name: "Raheem, Bello and Makinde: Comparative study of cement and lime stabilized lateritic interlocking blocks",
      url: "https://repository.run.edu.ng/items/cfdbcbc3-914c-44b3-855d-617927a6af92/full",
      note: "Peer-reviewed, 2010. Strength of Ogbomoso laterite interlocking blocks at 5–25% cement.",
    },
    {
      name: "Auroville Earth Institute: Compressed stabilised earth block",
      url: "https://earth-auroville.com/compressed_stabilised_earth_block_en.php",
      note: "Institution that promotes the technology. Strength classes, cement shares, thermal figures and limitations. Figures date from 2005.",
    },
    {
      name: "Journal of Natural Sciences Research: cost comparison of sandcrete and Hydraform walling, Auchi",
      url: "https://iiste.org/Journals/index.php/JNSR/article/view/54866",
      note: "Peer-reviewed, 2020. Wall cost per square metre and block prices.",
    },
    {
      name: "IJISRT: Interlocking stabilized soil block technology and affordable housing delivery in Nigeria",
      url: "https://ijisrt.com/assessment-of-the-contribution-of-interlocking-stabilized-soil-block-technology-to-affordable-housing-delivery-in-nigeria",
      note: "Journal abstract, 2026. 12.44% capital cost reduction, and barriers to adoption. Abstract only.",
    },
    {
      name: "Ibitoye, Alagbe and Dare-Abel: Interlocking stabilised soil blocks in South-West Nigeria",
      url: "https://zenodo.org/records/7213970",
      note: "Preprint abstract, 2022. Qualitative cost findings.",
    },
    {
      name: "University of the Witwatersrand: Stability of dry-stack masonry",
      url: "https://wiredspace.wits.ac.za/server/api/core/bitstreams/7cac39d9-059f-44e8-ab8a-721fdc79ffa5/content",
      note: "Doctoral thesis, 2005. Hydraform dry-stack testing, speed and shaking-table results.",
    },
    {
      name: "Olaniyan: Adobe bricks to hollow sandcrete block walling in tropical building construction",
      url: "https://cyberleninka.ru/article/n/adobe-bricks-to-hollow-sandcrete-block-walling-in-tropical-building-construction-material-impact-on-sustainable-indoor-thermal",
      note: "Peer-reviewed simulation in Architecture and Engineering. The paper’s annual heat load figures and its stated percentage differ. U-values and annual heat load, Ogbomoso.",
    },
    {
      name: "Max Fordham for Build Up Nepal: Carbon evaluation of compressed stabilised earth blocks",
      url: "https://www.buildupnepal.com/wp-content/uploads/2022/08/carbon-evaluation-of-compressed-stabilised-earth-blocks-cseb-in-nepal-summary.pdf",
      note: "Consultant report, March 2021, commissioned by a promoter. Carbon per kilogram of block, Nepal data.",
    },
    {
      name: "Nshimiyimana, Messan and Courard: Stabilised earth blocks, University of Liège",
      url: "https://orbi.uliege.be/bitstream/2268/256867/1/MTENG-11191-R1.pdf",
      note: "Peer-reviewed. Water erosion tests, and the embodied carbon of binders.",
    },
  ],
  related: [
    {
      href: "/guides/cost-of-building-a-house-in-nigeria",
      title: "Cost of building a house in Nigeria",
      text: "Published 2026 ranges and a worked example of what earth bricks save.",
    },
    {
      href: "/guides/how-to-build-with-interlocking-earth-bricks",
      title: "How to build with interlocking earth bricks",
      text: "A step-by-step guide from site to roof.",
    },
    {
      href: "/compressed-earth-bricks",
      title: "Compressed Earth Bricks in Nigeria",
      text: "How our bricks are made and where we have used them.",
    },
  ],
};
