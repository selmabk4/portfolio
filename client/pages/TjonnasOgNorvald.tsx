import ProjectDetail, { type ProjectDetailData } from "@/components/ProjectDetail";

const project: ProjectDetailData = {
  title: "Tjønnås & Norvald",
  summary: "Nettsider for desktop og mobil, med både booking og bestillingssystem basert på kundebehov.",
  challenge: "Hvordan kan en restaurantnettside gjøre det enkelt å utforske stedet, bestille og planlegge et besøk?",
  role: "UX- og webdesign",
  focus: "Booking og bestillingssystem",
  timeframe: "2025",
  tools: "Figma",
  toolIcon:
    "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fb49189c71da34c50ac1983c08b682755?format=webp&width=800&height=1200",
  background: "Tjønnås & Norvald trengte en samlet digital løsning som presenterte stedet tydelig og gjorde booking og bestilling mer tilgjengelig.",
  research: "Kundebehov og innhold dannet grunnlaget for en løsning som fungerer på både desktop og mobil.",
};

export default function TjonnasOgNorvald() {
  return <ProjectDetail project={project} />;
}
