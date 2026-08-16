import ProjectDetail, { type ProjectDetailData } from "@/components/ProjectDetail";

const project: ProjectDetailData = {
  title: "Tjønnås & Norvald",
  summary: "Nettsider for desktop og mobil, med booking og bestillingssystem basert på kundebehov.",
  challenge: "Hvordan kan en restaurantnettside gjøre det enkelt å utforske stedet, bestille og planlegge et besøk?",
  role: "UX- og webdesign",
  focus: "Booking og bestillingssystem",
  timeframe: "2025",
  tools: "Figma",
  background: "Tjønnås & Norvald trengte en samlet digital løsning som presenterte stedet tydelig og gjorde booking og bestilling mer tilgjengelig.",
  research: "Kundebehov og innhold dannet grunnlaget for en løsning som fungerer på både desktop og mobil.",
};

export default function TjonnasOgNorvald() {
  return <ProjectDetail project={project} />;
}
