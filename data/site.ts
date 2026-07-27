export type ReferenceLetter = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  period: string;
  title: string;
  organization: string;
  location: string;
  description: string;
  bullets: string[];
  referenceLetter?: ReferenceLetter;
};

export const siteConfig = {
  name: "Yunsu Jang",
  initials: "YJ",
  title: "Urban Planning · Building Energy · Sustainability",
  location: "Amsterdam, Netherlands",
  email: "yunsu.jang@outlook.com",
  phones: [
    { label: "+31 (0)6 5357 7684", href: "tel:+31653577684" },
    { label: "+82 10 5543 7413", href: "tel:+821055437413" },
  ],
  linkedin: "https://www.linkedin.com/in/yunsu-jang--",
  linkedinLabel: "linkedin.com/in/yunsu-jang--",
  siteUrl: "https://yunsu-4ahp.vercel.app",
  resumeUrl: "/downloads/yunsu-jang-resume.pdf",
  heroEyebrow: "Urban planning · Building energy · Sustainability",
  heroTitle: "Planning sustainable cities and energy-efficient buildings through evidence-based design.",
  heroDescription:
    "I am an MSc MADE student at AMS Institute with a background in civil, environmental and architectural engineering. My work connects urban planning, building energy and sustainability through spatial analysis, building simulation and interdisciplinary research.",
  about:
    "My work sits at the intersection of urban planning, building performance and sustainability. In the MSc Metropolitan Analysis, Design and Engineering programme, I combine GIS, urban research, building-energy simulation and implementation-oriented design to address metropolitan challenges across multiple scales. My engineering education at Korea University, exchange studies at TU Berlin, and professional experience in mobility consulting, energy systems and construction support a practical approach that connects analysis with delivery.",
  aboutQuote:
    "I translate spatial, technical and stakeholder evidence into clear planning and design decisions.",
};

export const profileStats = [
  { value: "3", label: "core fields: urban planning, building energy and sustainability" },
  { value: "6", label: "research and design projects presented in this portfolio" },
  { value: "3", label: "professional roles across mobility, energy and construction" },
];

export const skillGroups = [
  {
    title: "Urban Planning & Spatial Analysis",
    skills: ["QGIS", "ArcGIS", "Python", "GeoPandas", "OSMnx", "Network analysis", "Green View Index", "Multi-criteria analysis"],
  },
  {
    title: "Building Energy & Simulation",
    skills: ["EnergyPlus", "OpenStudio", "ZED Tool", "Dynamo", "Passive design", "HVAC analysis", "BiPV design", "Thermal performance"],
  },
  {
    title: "Engineering & Technical Design",
    skills: ["AutoCAD", "SAP2000", "Construction processes", "Technical documentation", "Life-cycle assessment", "Microsoft Office"],
  },
  {
    title: "Research & Collaboration",
    skills: ["R", "Survey design", "Expert interviews", "Stakeholder engagement", "Technical reporting", "Project coordination", "Korean", "English", "German (B1)", "Dutch (basic)"],
  },
];

export const education = [
  {
    period: "Sep. 2025 — Aug. 2027 (Expected)",
    title: "MSc Metropolitan Analysis, Design and Engineering (MADE)",
    organization: "AMS Institute · TU Delft · Wageningen University & Research",
    description:
      "Joint interdisciplinary degree focused on metropolitan analysis, spatial design, engineering, entrepreneurship and implementation.",
  },
  {
    period: "Mar. 2019 — Feb. 2025",
    title: "BSc Civil, Environmental and Architectural Engineering",
    organization: "Korea University",
    description:
      "Engineering education covering building systems, structures, environmental performance, construction and quantitative analysis.",
  },
  {
    period: "Aug. 2023 — Aug. 2024",
    title: "Exchange Studies in Civil Engineering",
    organization: "Technische Universität Berlin",
    description:
      "Completed project courses in the Civil Systems Engineering track, including building-energy modelling, multi-physics analysis and life-cycle assessment.",
  },
];

export const experience: ExperienceItem[] = [
  {
    period: "Mar. 2025 — Jul. 2025",
    title: "Research Analyst Intern",
    organization: "P3 Korea",
    location: "Seoul, South Korea",
    description:
      "Mobility and battery-technology consulting supporting automotive clients and pre-launch electric-vehicle programmes.",
    bullets: [
      "Designed an EV interoperability test framework, planned drive-route scenarios and authored a compatibility report for pre-launch vehicles.",
      "Mapped domestic and international EV and charging-infrastructure markets and built Excel- and PowerPoint-based dashboards.",
      "Supported battery-technology consulting through market analysis and component-level cost modelling.",
    ],
    referenceLetter: {
      label: "Download P3 Korea reference letter",
      href: "/reference-letters/p3-korea-reference-letter.pdf",
    },
  },
  {
    period: "May 2024 — Aug. 2024",
    title: "Working Student",
    organization: "Siemens Energy",
    location: "Kirchheim unter Teck, Germany",
    description:
      "Project-management and sales support within a transformer manufacturing environment.",
    bullets: [
      "Supported project management and sales activities, including clarification of technical specifications and process documentation.",
      "Revised customer-specific documentation in AutoCAD and maintained reports and customer-programme records.",
      "Coordinated requirements across sales, engineering and transformer-casing production teams.",
    ],
    referenceLetter: {
      label: "Download Siemens Energy reference letter",
      href: "/reference-letters/siemens-energy-reference-letter.pdf",
    },
  },
  {
    period: "Jan. 2023 — Feb. 2023",
    title: "Construction Intern",
    organization: "Hyundai Engineering & Construction",
    location: "Seoul, South Korea",
    description:
      "Site-based internship on a pedestrian bridge and ramp construction project.",
    bullets: [
      "Supported the foundation phase and developed practical knowledge of construction sequencing and site coordination.",
      "Observed and documented major construction activities and field implementation processes.",
      "Participated in concrete compressive-strength and rock-identification tests used to evaluate material performance.",
    ],
  },
];

export const activities = [
  {
    period: "Sep. 2025 — Present",
    title: "Career Committee",
    organization: "MADE-IT · Amsterdam",
    description:
      "Conduct company research, manage external outreach and coordinate the planning and delivery of the MADE career market.",
  },
];
