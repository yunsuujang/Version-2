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
  challenge: string;
  approach: string[];
  outcomes: string[];
  reflection: string;
  report?: ProjectReport;
  externalLinks?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    slug: "zaanstad-green-infrastructure",
    title: "Green Infrastructure for Healthier Neighbourhoods",
    shortTitle: "Zaanstad Green Infrastructure",
    eyebrow: "Featured case study · Urban planning",
    year: "2026",
    summary:
      "A mixed-method planning strategy that connects health vulnerability, green-space quality and corridor accessibility around the planned HOV ZaanIJ line.",
    overview:
      "This Metropolitan Solutions project investigated how urban green infrastructure could improve residents’ physical and mental health in Rosmolenbuurt, Burgemeesterbuurt and Bomenbuurt. The HOV ZaanIJ development was treated not only as a transport investment, but as a potential catalyst for a more accessible and connected neighbourhood-scale green network.",
    image: "/project-zaanstad.svg",
    imageAlt: "Abstract map of neighbourhoods, green corridors and proposed planting locations",
    tools: ["Python", "GeoPandas", "QGIS", "OSMnx", "Spatial MCA", "Health Benefit Score", "Survey research", "Expert interviews"],
    stats: [
      { value: "970", label: "trees required for the selected 300 m corridor scenario" },
      { value: "5", label: "priority intervention sites identified through vulnerability mapping" },
      { value: "21.5–86.5%", label: "range of Health Benefit Scores across assessed green spaces" },
    ],
    challenge:
      "Although Zaanstad is surrounded by ecologically valuable landscapes, neighbourhood green spaces remain fragmented, uneven in quality and insufficiently connected. The planning challenge was therefore not simply to add more greenery, but to identify where interventions could produce the greatest health benefit and how those interventions could be connected to future infrastructure investment.",
    approach: [
      "Combined environmental and health-related indicators in a weighted GIS multi-criteria analysis to locate overlapping vulnerabilities and select five priority sites.",
      "Assessed the selected spaces through a Health Benefit Score structured around access and movement, nature and restoration, safety and comfort, and social health.",
      "Integrated resident-survey findings, field observations and expert interviews to interpret mapped deficiencies and formulate short-, medium- and long-term design principles.",
      "Built green-corridor scenarios on a combined walking and cycling network using 50 m, 100 m and 300 m residential entrance buffers, then integrated the corridor with the vulnerability map to prioritise planting.",
    ],
    outcomes: [
      "A decision-support framework linking neighbourhood vulnerability, site-scale quality and green-network connectivity.",
      "A 300 m access scenario that provides full residential coverage with 970 proposed trees and identifies HOV ZaanIJ intersections as implementation opportunities.",
      "Targeted planning guidance that prioritises quality and connectivity, while recognising maintenance, underground utilities, stakeholder coordination and political support as implementation conditions.",
    ],
    reflection:
      "The project showed why regional abundance of green space does not automatically translate into a healthy neighbourhood environment. Combining GIS with field and stakeholder evidence produced more useful recommendations than any single method, while also making the limits of strategic analysis explicit. The full report contains original confidential material and is therefore not published on this website.",
    report: {
      label: "Full report available on request",
      restricted: true,
    },
  },
  {
    slug: "zero-energy-villa-solheim",
    title: "Zero-Energy Renovation of Villa Solheim",
    shortTitle: "Zero-Energy Villa Solheim",
    eyebrow: "Building energy · Passive renovation",
    year: "2026",
    summary:
      "A passive-first renovation strategy for DUWO student housing in Delft, combining demand reduction, heat recovery, climate-responsive ventilation and building-integrated photovoltaics.",
    overview:
      "The project transformed the low-performing Villa Solheim into a zero-energy and zero-carbon design proposal. Climate and site analysis informed a passive strategy that reduced heating and domestic-hot-water demand before renewable generation was added to the roof and façades.",
    image: "/images/project-zero-energy.jpg",
    imageAlt: "Exploded axonometric view of the Villa Solheim zero-energy renovation design",
    tools: ["ZED Tool", "Passive design", "Energy balance", "BiPV", "Heat recovery", "Ground-duct ventilation", "Embodied carbon"],
    stats: [
      { value: "67,375 kWh", label: "calculated annual energy demand including material-related energy" },
      { value: "74,772 kWh", label: "annual photovoltaic production in the final design" },
      { value: "824 kWh", label: "annual heating demand after passive renovation measures" },
    ],
    challenge:
      "Villa Solheim is an architecturally distinctive 1932 building converted into housing for 24 students. The design had to reduce a heating-dominated energy load while maintaining architectural character, thermal comfort, daylight and realistic occupant needs.",
    approach: [
      "Analysed Delft’s climate, surrounding urban conditions, solar potential and the existing building-energy balance.",
      "Reduced demand through increased insulation, triple glazing, airtightness, heat recovery, passive summer shading and night ventilation.",
      "Used waste heat from an on-site bakery with a heat exchanger and heat pump for domestic hot water, and combined a solar chimney with ground-duct ventilation.",
      "Integrated adjustable photovoltaic façade elements and rooftop PV, while accounting for embodied-carbon compensation in the final energy balance.",
    ],
    outcomes: [
      "Reduced heating demand to 824 kWh per year, with ground-duct ventilation alone contributing an estimated 970.9 kWh annual reduction.",
      "Achieved a calculated annual surplus of approximately 7,397 kWh, with PV production exceeding total demand.",
      "Developed façade-integrated PV elements that simultaneously generate electricity, provide summer shading and admit winter sun.",
    ],
    reflection:
      "The project reinforced the value of a demand-first sequence: passive envelope and ventilation measures should reduce loads before renewable systems are sized. The final balance is a design-stage estimate and would require detailed dynamic simulation, cost analysis and heritage review before implementation.",
    report: {
      label: "Download final report",
      href: "/reports/zero-energy-villa-solheim.pdf",
    },
  },
  {
    slug: "gangnam-green-corridor-gvi",
    title: "Gangnam Green Corridor Using Street-View GVI",
    shortTitle: "Gangnam Street-View Green Corridor",
    eyebrow: "Urban planning · Computer vision & GIS",
    year: "2026",
    summary:
      "A street-level green-corridor method using semantic segmentation, Green View Index values and network optimisation to connect fragmented green areas in Gangnam, Seoul.",
    overview:
      "This Digital City Design project combined Google Street View imagery with Mask2Former semantic segmentation to measure visible greenery across Gangnam’s road network. The resulting Green View Index was used as a cost factor in an optimal-path model connecting existing parks, woodland and grassland.",
    image: "/images/project-gangnam-gvi.jpg",
    imageAlt: "Map showing Green View Index classifications across the Gangnam street network",
    tools: ["Python", "OpenStreetMap", "Google Street View", "Mask2Former", "Semantic segmentation", "Green View Index", "Network optimisation", "GIS"],
    stats: [
      { value: "20,037", label: "street-view sampling points initially generated at 25 m intervals" },
      { value: "59%", label: "sampled locations classified as low or very-low visible vegetation" },
      { value: "0.140–0.180", label: "average GVI range across alternative corridor-weight scenarios" },
    ],
    challenge:
      "Gangnam contains major green assets, including the Han River corridor and Daemo Mountain, but many streets between them provide little visible greenery. A conventional land-cover map cannot fully represent what pedestrians experience at eye level, so the analysis needed to combine streetscape perception with ecological connectivity.",
    approach: [
      "Generated points every 25 metres along OpenStreetMap roads and downloaded four-direction Street View imagery for the closest available locations.",
      "Applied Mask2Former semantic segmentation to extract pixel-level proportions of trees, grass, flowers, plants and palm trees, then averaged four images into a point-level GVI.",
      "Merged parks, woodland and grassland polygons larger than 300 m², represented each green area as a network target and assigned average GVI values to road segments.",
      "Tested route-cost weights that balance path length against visible greenery, producing multiple corridor alternatives and low-GVI priority intervention segments.",
    ],
    outcomes: [
      "Mapped strong spatial inequality in visible greenery: 28% of points were very low and 31% were low vegetation.",
      "Produced corridor alternatives from 66.1 km to 76.5 km, with higher greenery weighting increasing average route GVI from 0.140 to 0.180.",
      "Recommended street trees, sidewalk green buffers, pocket parks, planters and façade greening on consistently low-GVI links along the selected corridor.",
    ],
    reflection:
      "Street-view analysis adds an important human-scale layer to green-infrastructure planning, but image date, season, traffic occlusion and incomplete Street View coverage affect accuracy. Biodiversity planning would also require ecological variables beyond visible greenery, including habitat quality, disturbance and terrain.",
    report: {
      label: "Download final presentation",
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
      "A mixed-method study of how extreme heat affects passenger comfort, stress and travel behaviour in Amsterdam’s tram system.",
    overview:
      "The research examined heat exposure both inside trams and at tram stops, connecting infrastructure characteristics with passenger experience and behavioural adaptation. It combined literature, two GVB interviews and a survey of tram users at four contrasting stops.",
    image: "/images/project-tram-heat.jpg",
    imageAlt: "Cover of the research paper on extreme heat and Amsterdam tram use",
    tools: ["Mixed methods", "Survey design", "Expert interviews", "Python", "Regression analysis", "Urban mobility", "Thermal comfort"],
    stats: [
      { value: "60", label: "tram users included in the survey" },
      { value: "4", label: "contrasting Amsterdam tram stops used for field sampling" },
      { value: "47%", label: "respondents preferring another transport mode because of heat" },
    ],
    challenge:
      "Amsterdam’s tram network is central to sustainable mobility, yet increasingly hot summers can reduce comfort and alter travel behaviour. Evidence on Dutch tram systems was limited, and the study needed to distinguish physical heat exposure from psychological stress, perceived control and behavioural responses.",
    approach: [
      "Developed a theoretical framework combining thermal comfort, environmental stress, crowding and travel-experience concepts.",
      "Conducted semi-structured interviews with a GVB tram driver and a public-transport policy/data expert.",
      "Surveyed 60 users at IJburg, Zuiderzeeweg, Vijzelgracht and Frederiksplein, selected for different combinations of heat, wind, shade and greenery.",
      "Analysed closed and open responses with descriptive statistics, correlation and exploratory regression in Python, then integrated qualitative and quantitative findings.",
    ],
    outcomes: [
      "Found that insufficient cooling and airflow contribute to sweating, fatigue, dry mouth, headache, irritation and reduced perceived control.",
      "Identified shade, non-glass shelters, greenery, reflective materials, wind flow and reduced waiting time as important stop-level interventions.",
      "Recommended improved cabin cooling and ventilation, heat-resilient stop design and stronger integration of passenger feedback with operational data.",
    ],
    reflection:
      "The study provides a useful exploratory evidence base, but retrospective autumn data collection, a sample of 60 and unavailable operational ridership data limit causal interpretation. Future research should combine real-time microclimate measurements, objective stop audits and passenger-use data during heat events.",
    report: {
      label: "Download group paper",
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
      "A critical analysis of rapid utility-scale solar expansion in South Korea through spatial-justice, socio-technical and ecosystem perspectives.",
    overview:
      "The essay examined solar-farm development in the Honam region under South Korea’s 2017–2025 Renewable Energy 3020 implementation programme. It questioned the assumption that rapid renewable deployment is automatically sustainable and compared Korean conflicts with emerging approaches in Dutch solar parks.",
    image: "/images/project-solar-farms.jpg",
    imageAlt: "Cover page of an essay on solar-farm planning in South Korea",
    tools: ["Policy analysis", "Spatial justice", "Socio-technical systems", "Ecosystem thinking", "Comparative research", "Academic writing"],
    stats: [
      { value: "2017–2025", label: "policy and development period examined" },
      { value: "3", label: "integrated analytical perspectives" },
      { value: "4.4×", label: "approximate increase in Honam solar generation from 2017 to 2023" },
    ],
    challenge:
      "Renewable-energy targets can privilege speed, scale and measurable output while excluding local knowledge, land-use conflicts and ecological effects. The task was to identify why well-intentioned policy produced opposition and side effects, rather than evaluating solar technology only through generation capacity.",
    approach: [
      "Reviewed Korean news sources, policy studies and academic literature on the Renewable Energy 3020 programme and Honam solar development.",
      "Used spatial justice to examine who participated, who carried land-use burdens and whose knowledge was excluded.",
      "Applied a socio-technical lens to identify how planning simplified complex places into standardised technical inputs and outputs.",
      "Used ecosystem thinking to connect project-level conflicts with broader political, institutional and growth-oriented pressures, then compared mitigation approaches in Dutch solar parks.",
    ],
    outcomes: [
      "Showed that rapid solar expansion is not inherently sustainable when social, spatial and ecological dimensions are externalised.",
      "Argued for slower, more inclusive and context-sensitive planning that broadens both stakeholder input and the definition of project performance.",
      "Identified community consultation, benefit sharing, multifunctional land use and landscape-sensitive configurations as relevant directions for further research and practice.",
    ],
    reflection:
      "The essay prioritised diagnosis over a detailed implementation framework. Its main contribution is a transferable way to question narrow performance metrics and examine who benefits, who bears costs and which system incentives shape renewable-energy development.",
    report: {
      label: "Download final essay",
      href: "/reports/solar-farms-honam.pdf",
    },
  },
  {
    slug: "gropius-bau-energy-model",
    title: "Energy and Humidity Modelling for Gropius Bau",
    shortTitle: "Gropius Bau Energy Model",
    eyebrow: "Building energy · Multi-physics modelling",
    year: "2024",
    summary:
      "A simulation study testing integrated humidity-control HVAC and additional rooftop photovoltaics for Berlin’s historic Gropius Bau museum.",
    overview:
      "The group modelled the Gropius Bau to compare an integrated ventilation and humidity-control strategy with existing individual dehumidifiers, while also testing the marginal generation potential of additional rooftop solar panels. The study balanced environmental control, energy use and preservation of the museum experience.",
    image: "/images/project-gropius-bau.jpg",
    imageAlt: "Satellite and OpenStudio modelling results for the Gropius Bau museum",
    tools: ["FloorspaceJS", "OpenStudio", "EnergyPlus", "Radiance", "HVAC modelling", "Solar simulation", "Building-energy analysis"],
    stats: [
      { value: "3.35%", label: "annual energy reduction from the proposed humidity-control HVAC scenario" },
      { value: "18", label: "additional south-facing rooftop PV panels tested" },
      { value: "0.31%", label: "estimated annual energy saving from the additional PV scenario" },
    ],
    challenge:
      "The museum requires stable temperature and humidity for collections, but individual dehumidifiers disrupt exhibition spaces. At the same time, much of the roof already carries photovoltaics, leaving limited potential for straightforward renewable expansion.",
    approach: [
      "Created a simplified geometry in FloorspaceJS after detailed IFC-based modelling proved computationally impractical.",
      "Configured occupancy, lighting, equipment, temperature and airflow schedules in OpenStudio and EnergyPlus using Berlin weather data.",
      "Compared the baseline with an integrated HVAC system capable of temperature and humidity control.",
      "Used OpenStudio and Radiance to test 18 additional panels at a 36-degree south-facing angle on the remaining roof area.",
    ],
    outcomes: [
      "Reduced simulated annual energy use from 4,706.04 GJ to 4,548.67 GJ in the proposed HVAC scenario.",
      "Demonstrated that the remaining PV opportunity produces only limited savings because most favourable roof space is already occupied.",
      "Highlighted operational setpoints and wider acceptable museum temperature and humidity bands as potentially more influential future research directions.",
    ],
    reflection:
      "The simplified geometry enabled simulation but limits precision. The results suggest that system integration and operating criteria may offer greater value than adding a small number of panels, but financial feasibility, conservation requirements and a calibrated model are necessary before implementation.",
    report: {
      label: "Download assignment report",
      href: "/reports/gropius-bau-energy-model.pdf",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
