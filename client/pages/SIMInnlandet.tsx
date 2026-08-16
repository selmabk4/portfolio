import ProjectDetail, { type ProjectDetailData } from "@/components/ProjectDetail";

const project: ProjectDetailData = {
  title: "SIMInnlandet",
  summary: "Design av VR-simulering for opplæring av helsepersonell ved sykehuset i Innlandet.",
  challenge: "Hvordan kan en VR-simulering gjøre det tryggere og mer engasjerende å øve på situasjoner fra helsetjenesten?",
  role: "UX- og XR-design",
  focus: "Opplæring gjennom VR-simulering",
  timeframe: "2025",
  tools: "Figma",
  background: "Sykehuset i Innlandet ønsket en mer praktisk og nærværende måte å trene helsepersonell på før de møter situasjoner i arbeidshverdagen.",
  research: "Arbeidet tok utgangspunkt i behovene til helsepersonell og hvordan en simulering kunne gjøre læringen tydelig, trygg og relevant.",
};

export default function SIMInnlandet() {
  return <ProjectDetail project={project} />;
}
