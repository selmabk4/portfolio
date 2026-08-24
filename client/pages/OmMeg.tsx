import { Mail } from "lucide-react";
import { Link } from "react-router-dom";

const photos = {
  hat: "https://api.builder.io/api/v1/image/assets/TEMP/e88c1a2894768f6686d2d654919a50bb1a073373?width=276",
  portrait: "https://api.builder.io/api/v1/image/assets/TEMP/d140ca62b71b966c4f7629dd28c54bb736bb0785?width=286",
};

const tools = ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Adobe InDesign", "Claude Design", "Miro", "Mailjet", "Canva", "Builder.io"];
const other = ["HTML", "CSS", "GitHub"];

function Tags({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <span key={item} className="border border-[#ddd5c8] px-3 py-1 text-[12px] leading-[17px] text-[#6b6456]">
          {item}
        </span>
      ))}
    </div>
  );
}

function Entry({ title, meta, detail }: { title: string; meta: string; detail?: string }) {
  return (
    <div className="space-y-1">
      <h3 className="text-[14px] font-medium text-[#1a1610]">{title}</h3>
      <p className="text-[12px] leading-[18px] text-[#b0a898]">{meta}</p>
      {detail && <p className="text-[12px] leading-[18px] text-[#6b6456]">{detail}</p>}
    </div>
  );
}

export default function OmMeg() {
  return (
    <div className="bg-[#f5f0e8] text-[#1a1610]">
      <section className="mx-auto max-w-[896px] px-6 pb-20 pt-20 sm:px-8 sm:pt-28 lg:pt-36">
        <div className="grid gap-12 lg:grid-cols-[1fr_240px] lg:items-start">
          <div className="max-w-[539px]">
            <h1 className="font-serif text-[30px] font-medium leading-9">Om meg</h1>
            <p className="pt-4 text-[16px] font-light leading-[26px] text-[#6b6456]">
              Jeg studerer interaksjonsdesign ved NTNU i Gjøvik og er nysgjerrig på mennesker, psykologi og hvordan vi samhandler med teknologi.
            </p>
            <p className="pt-4 text-[16px] font-light leading-[26px] text-[#6b6456]">
              Det som driver meg er å forstå <em>hvorfor</em> folk bruker ting slik de gjør — ikke bare hvordan. Det tar meg inn i innsiktsarbeid, prototyping og brukertesting, og til å stille spørsmål ved selvfølgeligheter i designprosessen.
            </p>
          </div>
          <div className="relative mx-auto h-[300px] w-[240px] lg:mx-0">
            <div className="absolute left-0 top-4 w-[150px] rotate-[-4deg] bg-white p-[6px] shadow-[0_2px_12px_rgba(0,0,0,.1)]">
              <img src={photos.hat} alt="Selma med bøttehatt" className="block aspect-square w-full object-cover" />
            </div>
            <div className="absolute left-[82px] top-[136px] w-[155px] rotate-[3deg] bg-white p-[6px] shadow-[0_2px_16px_rgba(0,0,0,.12)]">
              <img src={photos.portrait} alt="Portrett av Selma" className="block aspect-square w-full object-cover" />
            </div>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F5e08590f57fa4764a9a3ed591c19f16a?format=webp&width=800&height=1200"
              alt="Pixelillustrasjon av en gul fugl"
              className="absolute right-0 top-4 h-[79px] w-[72px] rotate-6 object-contain"
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F0258b36459c646e0b4e118e1a31c1074?format=webp&width=800&height=1200"
              alt="Pixelillustrasjon av Selma"
              className="absolute -left-2 bottom-2 h-[106px] w-[80px] -rotate-6 object-contain"
            />
          </div>
        </div>

        <div className="mt-20 grid gap-10 border-t border-[#ddd5c8] py-12 sm:grid-cols-2 sm:gap-12">
          <div>
            <h2 className="mb-4 font-serif text-[22px] font-medium">Verktøy</h2>
            <Tags items={tools} />
          </div>
          <div>
            <h2 className="mb-4 font-serif text-[22px] font-medium">Annet</h2>
            <Tags items={other} />
          </div>
        </div>

        <div className="grid gap-12 border-t border-[#ddd5c8] py-12 sm:grid-cols-2 sm:gap-16">
          <div>
            <p className="mb-6 text-[12px] uppercase tracking-[1.2px] text-[#6e8fa3]">Arbeidserfaring</p>
            <div className="space-y-6">
              <Entry
                title="Skiwo / PayoutPartner"
                meta="Interaksjonsdesigner · Praksisplass · jun. 2026 — aug. 2026"
                detail="Gjennomførte brukerinnsikt og konseptutvikling for nye faktureringsløsninger. Jobbet med hele designprosessen, fra behovskartlegging til ferdige grensesnitt og prototyper. Designet også ny markedsføringsside, nyhetsbrev og presentasjoner til internt bruk."
              />
              <Entry
                title="Lindex CC Gjøvik"
                meta="Selger · Deltid · okt. 2024 — nå · Gjøvik"
                detail="Følger produktene fra de ankommer butikken til de overlates til kundene. Arbeidet inkluderer salg, kampanjearbeid, kundeservice, rydding og stengeansvar."
              />
              <Entry
                title="REMA 1000 Lillestrøm"
                meta="Butikkmedarbeider · apr. 2022 — jul. 2024"
                detail="Arbeidet omfattet kassearbeid, varepåfylling, mersalg, kundeservice og åpningsansvar i ferier. Stillingen ga god erfaring med problemløsning, stressmestring og effektivitet i et hektisk miljø."
              />
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <p className="mb-6 text-[12px] uppercase tracking-[1.2px] text-[#6e8fa3]">Utdanning</p>
              <div className="space-y-6">
                <Entry
                  title="NTNU Gjøvik"
                  meta="Bachelor i interaksjonsdesign · aug. 2024 — jun. 2027"
                  detail="Utdanningen handler om å skape og forbedre digitale produkter, systemer og tjenester med fokus på brukerbehov, bærekraft og samfunnsnytte. Faglig fokus på brukervennlighet, universell utforming, psykologi, kommunikasjon og tverrfaglig samarbeid."
                />
                <Entry
                  title="Fjellhaug Internasjonale Høgskole"
                  meta="Årsstudium i KRLE · aug. 2023 — jun. 2024"
                  detail="Utdanningen ga mangfoldskompetanse og kunnskap om livssyn og religion i det norske samfunnet."
                />
              </div>
            </div>
            <div>
              <p className="mb-6 text-[12px] uppercase tracking-[1.2px] text-[#6e8fa3]">Annen erfaring</p>
              <div className="space-y-6">
                <Entry
                  title="Fugleadvokatene"
                  meta="Frivillig innholdsprodusent · fra aug. 2026"
                  detail="Utformer innhold for å spre kunnskap om byfugler og hjelpe skadde eller nødstilte fugler med å finne trygge for-alltid-hjem."
                />
                <Entry
                  title="NTNU"
                  meta="Referanseassistent · jan. 2025 — mai 2025"
                  detail="Referanseassistent i emnet Farge i grensesnittdesign (IDG1004)."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#1a1610] text-white">
        <div className="mx-auto flex max-w-[896px] flex-col gap-8 px-6 py-20 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-20">
          <h2 className="max-w-[390px] font-serif text-[34px] font-light leading-[1.25] sm:text-[38px]">Gjerne ta kontakt!</h2>
          <div className="flex flex-col gap-3 text-[16px] tracking-[.4px]">
            <a href="mailto:selmake9@gmail.com" className="flex items-center gap-3 transition-opacity hover:opacity-70">
              <Mail aria-hidden="true" className="h-5 w-5" />
              selmake9@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/selma-b-k-239620324/" target="_blank" rel="noreferrer" className="flex items-center gap-3 transition-opacity hover:opacity-70">
              <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.16 3.5a2.16 2.16 0 1 0 0 4.32 2.16 2.16 0 0 0 0-4.32ZM3.3 9.5h3.72V20H3.3V9.5Zm5.98 0h3.57v1.43h.05c.5-.95 1.72-1.95 3.54-1.95 3.79 0 4.49 2.49 4.49 5.74V20h-3.72v-4.68c0-1.12-.02-2.56-1.56-2.56-1.56 0-1.8 1.22-1.8 2.48V20H9.28V9.5Z" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>
      </section>
      <footer className="mx-auto flex h-16 max-w-[896px] items-center px-6 text-[12px] text-[#b0a898] sm:px-8">© 2026 Selma Bjørtomt Keser</footer>
    </div>
  );
}
