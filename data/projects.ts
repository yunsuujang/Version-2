export type ProjectStat = {
  value: string;
  label: string;
};

export type ProjectReport = {
  label: string;
  href?: string;
  restricted?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  year: string;
  summary: string;
  overview: string;
  image: string;
  imageAlt: string;
  tools: string[];
  stats: ProjectStat[];
  report?: ProjectReport;
};

export const projects: Project[] = [
  {
    slug: "zaanstad-green-infrastructure",
    title: "Green Infrastructure for Healthier Neighbourhoods",
    shortTitle: "Zaanstad Green Infrastructure",
    eyebrow: "Urban planning · Public health",
    year: "2026",
    summary:
      "A GIS-supported strategy linking health vulnerability, green-space quality and corridor accessibility around the planned HOV ZaanIJ line.",
    overview:
      "This Metropolitan Solutions project used spatial analysis, field assessment, resident input and expert interviews to identify where neighbourhood-scale green infrastructure could create the greatest public-health value. The final strategy combined priority intervention sites with an accessible green-corridor scenario.",
    image: "/images/project-zaanstad.jpg",
    imageAlt: "Zaanstad vulnerability map identifying overlapping urban health and green-infrastructure deficiencies",
    tools: ["Python", "GeoPandas", "QGIS", "OSMnx", "Spatial MCA", "Survey research"],
    stats: [
      { value: "970", label: "trees in the selected 300 m corridor scenario" },
      { value: "5", label: "priority intervention sites" },
      { value: "21.5–86.5%", label: "Health Benefit Score range" },
    ],
    report: {
      label: "Full report available on request",
      restricted: true,
    },
  },
  {
    slug: "zero-energy-villa-solheim",
    title: "Zero-Energy Renovation of Villa Solheim",
    shortTitle: "Zero-Energy Villa Solheim",
    eyebrow: "Building energy · Passive design",
    year: "2026",
    summary:
      "A passive-first renovation proposal combining demand reduction, heat recovery, climate-responsive ventilation and building-integrated photovoltaics.",
    overview:
      "The project transformed a low-performing student residence in Delft into a calculated zero-energy and zero-carbon design. Envelope improvements and passive systems reduced demand before renewable production was added to the roof and façades.",
    image: "/images/project-zero-energy.jpg",
    imageAlt: "Final energy-balance results for the Villa Solheim zero-energy renovation",
    tools: ["ZED Tool", "Passive design", "Energy balance", "BiPV", "Heat recovery", "Embodied carbon"],
    stats: [
      { value: "67,375 kWh", label: "annual calculated demand" },
      { value: "74,772 kWh", label: "annual PV production" },
      { value: "824 kWh", label: "annual heating demand" },
    ],
    report: {
      label: "Download report",
      href: "/reports/zero-energy-villa-solheim.pdf",
    },
  },
  {
    slug: "gangnam-green-corridor-gvi",
    title: "Gangnam Green Corridor Using Street-View GVI",
    shortTitle: "Gangnam Street-View Green Corridor",
    eyebrow: "Urban planning · Computer vision",
    year: "2026",
    summary:
      "A street-level corridor method using semantic segmentation, Green View Index values and network optimisation to connect fragmented green areas in Seoul.",
    overview:
      "Street-view images were segmented to calculate visible greenery along Gangnam's road network. Those values were then integrated into an optimal-path model to identify corridor alternatives and priority streets for greening.",
    image: "/images/project-gangnam-gvi.jpg",
    imageAlt: "Map of Green View Index classifications across Gangnam's street network",
    tools: ["Python", "OpenStreetMap", "Street View", "Mask2Former", "Green View Index", "Network optimisation"],
    stats: [
      { value: "20,037", label: "initial street-view sampling points" },
      { value: "59%", label: "low or very-low vegetation locations" },
      { value: "0.140–0.180", label: "average GVI across route scenarios" },
    ],
    report: {
      label: "Download presentation",
      href: "/reports/gangnam-green-corridor-gvi.pdf",
    },
  },
  {
    slug: "extreme-heat-amsterdam-trams",
    title: "Extreme Heat and the Experience of Amsterdam Trams",
    shortTitle: "Heat-Resilient Amsterdam Trams",
    eyebrow: "Urban mobility · Climate resilience",
    year: "2025",
    summary:
      "A mixed-method study of how extreme heat affects passenger comfort, stress and travel behaviour in Amsterdam's tram system.",
    overview:
      "The research combined literature, two GVB interviews and a survey at four contrasting tram stops. It connected passenger experience with the design of trams and stops, including shade, ventilation, greenery and material choices.",
    image: "/images/project-tram-heat.jpg",
    imageAlt: "Survey results on alternative travel modes and willingness to switch from trams during heat",
    tools: ["Mixed methods", "Survey design", "Expert interviews", "Python", "Regression", "Thermal comfort"],
    stats: [
      { value: "60", label: "survey respondents" },
      { value: "4", label: "Amsterdam tram stops studied" },
      { value: "47%", label: "considering another mode during heat" },
    ],
    report: {
      label: "Download report",
      href: "/reports/extreme-heat-amsterdam-trams.pdf",
    },
  },
  {
    slug: "solar-farms-honam",
    title: "When Solar Farms Become a Nuisance",
    shortTitle: "Solar-Farm Planning in Honam",
    eyebrow: "Sustainability · Energy governance",
    year: "2025",
    summary:
      "A critical review of rapid utility-scale solar expansion through spatial-justice, socio-technical and ecosystem perspectives.",
    overview:
      "The essay examined South Korea's Renewable Energy 3020 programme in the Honam region and asked why technically successful renewable projects can still create social and ecological conflict. Dutch solar-park approaches were used for comparison.",
    image: "/images/project-solar-farms.jpg",
    imageAlt: "Diagrams comparing narrow and integrated understandings of sustainability",
    tools: ["Policy analysis", "Spatial justice", "Socio-technical systems", "Ecosystem thinking", "Comparative research"],
    stats: [
      { value: "2017–2025", label: "policy period examined" },
      { value: "3", label: "integrated analytical perspectives" },
      { value: "4.4×", label: "increase in regional solar generation" },
    ],
    report: {
      label: "Download essay",
      href: "/reports/solar-farms-honam.pdf",
    },
  },
  {
    slug: "gropius-bau-energy-model",
    title: "Energy and Humidity Modelling for Gropius Bau",
    shortTitle: "Gropius Bau Energy Model",
    eyebrow: "Building energy · Simulation",
    year: "2024",
    summary:
      "A simulation study comparing integrated humidity-control HVAC with additional rooftop photovoltaics for a historic Berlin museum.",
    overview:
      "A simplified whole-building model was developed to test energy and humidity-control strategies while preserving exhibition conditions. The analysis compared an integrated HVAC proposal with the marginal benefit of adding panels to the remaining roof area.",
    image: "/images/project-gropius-bau.jpg",
    imageAlt: "Gropius Bau satellite view and OpenStudio model summary",
    tools: ["FloorspaceJS", "OpenStudio", "EnergyPlus", "Radiance", "HVAC modelling", "Solar simulation"],
    stats: [
      { value: "3.35%", label: "annual energy reduction from HVAC scenario" },
      { value: "18", label: "additional PV panels tested" },
      { value: "0.31%", label: "estimated saving from added PV" },
    ],
    report: {
      label: "Download report",
      href: "/reports/gropius-bau-energy-model.pdf",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
