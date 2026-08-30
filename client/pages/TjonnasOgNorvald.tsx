import ProjectDetail, { type ProjectDetailData } from "@/components/ProjectDetail";

const project: ProjectDetailData = {
  title: "Tjønnås & Norvald",
  summary: "Redesign og ny informasjonsarkitektur med bestillingssystem basert på kundebehov.",
  challenge:
    "Gjennom emnet Informasjonsarkitektur jobbet vi med Tjønnås delikatesser som oppdragsgiver. Dette var et tverrfaglig prosjekt der jeg samarbeidet med studenter fra både webutvikling og grafisk design. Oppgaven gikk ut på å forbedre informasjonsflyten på nettsiden med utgangspunkt i kundebehov",
  role: "UX-design og sitemap",
  focus: "Informasjonsarkitektur",
  timeframe: "10 uker",
  tools: "Figma",
  toolIcon:
    "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fb49189c71da34c50ac1983c08b682755?format=webp&width=800&height=1200",
  background: "Tjønnås & Norvald trengte en samlet digital løsning som presenterte stedet tydelig og gjorde booking og bestilling mer tilgjengelig.",
  research: "Kundebehov og innhold dannet grunnlaget for en løsning som fungerer på både desktop og mobil.",
};

export default function TjonnasOgNorvald() {
  return <ProjectDetail project={project} />;
}
