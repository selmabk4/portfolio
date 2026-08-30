import ProjectDetail, { type ProjectDetailData } from "@/components/ProjectDetail";

const project: ProjectDetailData = {
  title: "PayoutPartner",
  summary: "UX-arbeid for PayoutPartner med fokus på innsikt, faktureringsforslag og en tydeligere markedsføringsside.",
  challenge: "Hvordan kan innsikt fra brukere bli til enklere fakturering og en mer relevant markedsføringsside?",
  role: "Brukerintervjuer, Konseptutvikling, design av ny markedsføringsside",
  focus: "UX research",
  timeframe: "8 uker",
  tools: "",
  toolIcon:
    "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fb49189c71da34c50ac1983c08b682755?format=webp&width=800&height=1200",
  toolIconAlt: "Figma",
  secondaryToolIcon:
    "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fdce94a2e998d41109ccddc40b423ee8d?format=webp&width=800&height=1200",
  secondaryToolIconAlt: "Claude",
  introHeading: "Praksisplass 2026",
  hideIdeation: true,
  hideIterations: true,
  background: "PayoutPartner hadde behov for å forstå brukernes utfordringer bedre og gjøre verdien av tjenesten enklere å kommunisere.",
  research: "Innsiktsarbeid ga retning for nye faktureringsforslag og redesign av markedsføringssiden.",
};

export default function PayoutPartner() {
  return <ProjectDetail project={project} />;
}
