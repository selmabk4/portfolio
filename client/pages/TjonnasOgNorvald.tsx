import ProjectDetail, { type ProjectDetailData } from "@/components/ProjectDetail";

const project: ProjectDetailData = {
  title: "Tjønnås & Norvald",
  summary: "Redesign og ny informasjonsarkitektur med bestillingssystem basert på kundebehov.",
  challenge:
    "Gjennom emnet Informasjonsarkitektur jobbet vi med Tjønnås delikatesser som oppdragsgiver. Dette var et tverrfaglig prosjekt der jeg samarbeidet med studenter fra både webutvikling og grafisk design. Oppgaven gikk ut på å forbedre informasjonsflyten på nettsiden med utgangspunkt i kundebehov.",
  role: "UX-design og sitemap",
  focus: "Informasjonsarkitektur",
  timeframe: "10 uker",
  tools: "Figma",
  toolIcon:
    "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fb49189c71da34c50ac1983c08b682755?format=webp&width=800&height=1200",
  background: "Tjønnås & Norvald trengte en samlet digital løsning som presenterte stedet tydelig og gjorde booking og bestilling mer tilgjengelig.",
  research: "Kundebehov og innhold dannet grunnlaget for en løsning som fungerer på både desktop og mobil.",
  insights:
    "Vi gjennomførte grundig innsiktsarbeid basert på 20 intervjuer med både kunder og ansatte hos Tjønnås og Norvald. Gjennom analyse i et affinity map avdekket vi fire sentrale problemområder: manglende informasjon, vanskelig bestilling og booking, lav produktsynlighet og interne kommunikasjonsutfordringer.",
  insightsImage:
    "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fadd3e4e8803a43d2958aa85ec71fbee4?format=webp&width=800&height=1200",
  insightsImageAlt: "Affinity map med organiserte intervjufunn",
  insightsSummary:
    "Affinity mappet hjalp oss med å sortere funnene og få en oversikt over alle problemområdene.",
  iterationsImage:
    "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F1988f3e9d7394e538415e13f48711223?format=webp&width=800&height=1200",
  iterationsImageAlt: "Før- og etterbilder av nettsiden",
};

export default function TjonnasOgNorvald() {
  return <ProjectDetail project={project} />;
}
