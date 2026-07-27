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
  heroTitle: "Designing sustainable places across city and building scales.",
  heroDescription:
    "I combine spatial planning, building-energy analysis and engineering judgement to turn sustainability goals into practical decisions.",
  about:
    "With a foundation in civil, environmental and architectural engineering and current graduate study in Metropolitan Analysis, Design and Engineering at AMS Institute, I work across the built environment—from neighbourhood planning and infrastructure to building performance. My approach combines spatial evidence, energy modelling, stakeholder research and structured problem-solving. Academic and professional experience in South Korea, Germany and the Netherlands has shaped an international perspective on how cities and buildings can become lower-carbon, more resilient and better aligned with people’s needs.",
  aboutQuote:
    "I translate spatial, technical and stakeholder evidence into clear, implementable planning and design decisions.",
};

export const aboutFocus = [
  {
    title: "Urban planning",
    description: "Spatial analysis, mobility, green infrastructure and evidence-led planning at neighbourhood and metropolitan scales.",
  },
  {
    title: "Building energy",
    description: "Passive design, whole-building simulation, HVAC analysis and renewable-energy integration.",
  },
  {
    title: "Sustainability",
    description: "Systems thinking that connects environmental performance with implementation, governance and user needs.",
  },
];

export const profileStats = [
  { value: "3", label: "core fields across the built environment" },
  { value: "6", label: "selected research and design projects" },
  { value: "3", label: "countries of academic and professional experience" },
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
      "Project courses in building-energy modelling, multi-physics analysis and life-cycle assessment within the Civil Systems Engineering track.",
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
