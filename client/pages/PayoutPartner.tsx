import ProjectDetail, { type ProjectDetailData } from "@/components/ProjectDetail";

const project: ProjectDetailData = {
  title: "PayoutPartner",
  summary: "UX-arbeid for PayoutPartner med fokus på innsikt, faktureringsforslag og en tydeligere markedsføringsside.",
  challenge: "Hvordan kan innsikt fra brukere bli til enklere fakturering og en mer relevant markedsføringsside?",
  role: "UX-design og innsiktsarbeid",
  focus: "Faktureringsforslag og markedsføringsside",
  timeframe: "8 uker",
  tools: "",
  toolIcon:
    "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F0327dca671904d729d5cde79428fe511?format=webp&width=800&height=1200",
  toolIconAlt: "Claude",
  introHeading: "Praksisplass 2026",
  background: "PayoutPartner hadde behov for å forstå brukernes utfordringer bedre og gjøre verdien av tjenesten enklere å kommunisere.",
  research: "Innsiktsarbeid ga retning for nye faktureringsforslag og redesign av markedsføringssiden.",
};

export default function PayoutPartner() {
  return <ProjectDetail project={project} />;
}
