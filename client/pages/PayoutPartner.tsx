import ProjectDetail, { type ProjectDetailData } from "@/components/ProjectDetail";

const project: ProjectDetailData = {
  title: "PayoutPartner",
  summary: "UX-arbeid for PayoutPartner med fokus på innsikt, faktureringsforslag og en tydeligere markedsføringsside.",
  challenge: "I løpet av sommeren 2026 var jeg utplassert hos bedriften Skiwo, der jeg arbeidet med utvikling av PayoutPartner, en faktureringsplattform for frilansere. Her brukte jeg reell brukerinnsikt til å utfordre etablerte antakelser, noe som blant annet drev frem konseptualiseringen av nye, transparente KI-løsninger.",
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
  payoutPartnerContent: true,
  marketingImage:
    "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F7a44ff8f4df74fb28fdae96a17af8c78?format=webp&width=1600&height=2400",
  marketingImageAlt: "PayoutPartner-grensesnitt vist på laptop, mobil og nettbrett",
  background: "PayoutPartner hadde behov for å forstå brukernes utfordringer bedre og gjøre verdien av tjenesten enklere å kommunisere.",
  research: "Innsiktsarbeid ga retning for nye faktureringsforslag og redesign av markedsføringssiden.",
};

export default function PayoutPartner() {
  return <ProjectDetail project={project} />;
}
