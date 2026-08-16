import ProjectDetail, { type ProjectDetailData } from "@/components/ProjectDetail";

const project: ProjectDetailData = {
  title: "PayoutPartner",
  summary: "UX-arbeid for PayoutPartner med fokus på innsikt, faktureringsforslag og en tydeligere markedsføringsside.",
  challenge: "Hvordan kan innsikt fra brukere bli til enklere fakturering og en mer relevant markedsføringsside?",
  role: "UX-design og innsiktsarbeid",
  focus: "Faktureringsforslag og markedsføringsside",
  timeframe: "Praksisplass 2026",
  tools: "Figma",
  background: "PayoutPartner hadde behov for å forstå brukernes utfordringer bedre og gjøre verdien av tjenesten enklere å kommunisere.",
  research: "Innsiktsarbeid ga retning for nye faktureringsforslag og redesign av markedsføringssiden.",
};

export default function PayoutPartner() {
  return <ProjectDetail project={project} />;
}
