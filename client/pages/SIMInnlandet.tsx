import ProjectDetail, { type ProjectDetailData } from "@/components/ProjectDetail";

const project: ProjectDetailData = {
  title: "SIMInnlandet",
  summary: "Design av VR-simulering for opplæring av helsepersonell ved sykehuset i Innlandet.",
  challenge: "Hvordan kan en VR-simulering gjøre det tryggere og mer engasjerende å øve på situasjoner fra helsetjenesten?",
  role: "innsiktsarbeid og idéutvikling",
  focus: "Opplæring gjennom VR-simulering",
  timeframe: "8 uker",
  tools: "Figma",
  toolIcon:
    "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fb49189c71da34c50ac1983c08b682755?format=webp&width=800&height=1200",
  heroImage:
    "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fbcd0aacb96b44b1b8ad0b493767643c7?format=webp&width=800&height=1200",
  heroImageAlt: "Maskot med VR-briller for SIMInnlandet-prosjektet",
  hideIdeation: true,
  hideIterations: true,
  background: "Sykehuset i Innlandet ønsket en mer praktisk og nærværende måte å trene helsepersonell på før de møter situasjoner i arbeidshverdagen.",
  research: "Arbeidet tok utgangspunkt i behovene til helsepersonell og hvordan en simulering kunne gjøre læringen tydelig, trygg og relevant.",
};

export default function SIMInnlandet() {
  return <ProjectDetail project={project} />;
}
