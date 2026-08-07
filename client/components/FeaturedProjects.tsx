import { Link } from "react-router-dom";

interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
  imageAlt: string;
}

const projects: Project[] = [
  {
    title: "Emanuel Vigeland Museum",
    category: "UX / Designsystem 2026",
    description:
      "Redesign av nettsiden for Emanuel Vigelands museum, med vektleggelse av designsystem og universell utforming.",
    image:
      "https://api.builder.io/api/v1/image/assets/TEMP/e089481b455e3086b1abe2ee59efb3cc100b12b5?width=1065",
    imageAlt: "Interiør fra Emanuel Vigeland Museum",
  },
  {
    title: "PayoutPartner",
    category: "UX / Fintech 2026",
    description: "Internship 2026 — UX-arbeid for PayoutPartner.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Betaling med kort ved en bærbar datamaskin",
  },
  {
    title: "SIMInnlandet",
    category: "VR / Tjenestedesign 2025",
    description:
      "VR-simulering for opplæring av helsepersonell ved sykehuset i Innlandet.",
    image:
      "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Kode på en skjerm med React-logo",
  },
  {
    title: "Tjønnås & Norvald",
    category: "Webdesign / Booking 2025",
    description:
      "Nettsider for desktop og mobil, med både booking og bestillingssystem basert på kundebehov.",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Interiør fra en restaurant",
  },
  {
    title: "Prosjekt 5",
    category: "UX / Research 2024",
    description:
      "Kort beskrivelse av prosjektet — hva du gjorde og hvilken verdi det skapte.",
    image:
      "https://images.unsplash.com/photo-1587440871875-191322ee64b0?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Skisse tegnet på et nettbrett",
  },
];

export default function FeaturedProjects() {
  return (
    <section
      id="prosjekter"
      className="mx-auto max-w-[1152px] px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
    >
      <div className="flex items-baseline justify-between">
        <h2 className="font-serif text-2xl font-normal leading-[1.2] text-foreground sm:text-[30px]">
          Utvalgte prosjekter
        </h2>
        <span className="hidden text-xs uppercase tracking-[1.2px] text-[#b0a898] sm:inline">
          2024 — 2026
        </span>
      </div>

      <div className="mt-12 sm:mt-16">
        {projects.map((project, index) => {
          const imageFirst = index % 2 === 1;
          return (
            <article
              key={project.title}
              className="grid grid-cols-1 border-b border-border sm:grid-cols-2"
            >
              <div
                className={`flex flex-col justify-center gap-4 px-0 py-8 sm:px-10 sm:py-14 ${
                  imageFirst ? "sm:order-2" : "sm:order-1"
                }`}
              >
                <h3 className="font-serif text-2xl font-medium leading-[1.25] text-foreground sm:text-[30px]">
                  {project.title}
                </h3>
                <p className="-mt-2 font-serif text-base font-light italic leading-[1.5] text-muted-foreground">
                  {project.category}
                </p>
                <p className="max-w-[452px] text-base leading-[1.625] text-foreground">
                  {project.description}
                </p>
                <Link
                  to="/prosjekter"
                  className="mt-2 inline-flex w-fit items-center gap-3 border border-foreground px-[17.6px] py-[8.8px] text-xs uppercase tracking-[1.2px] text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  Se prosjekt →
                </Link>
              </div>
              <div
                className={`min-h-[240px] overflow-hidden sm:min-h-[320px] ${
                  imageFirst ? "sm:order-1" : "sm:order-2"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.imageAlt}
                  className="h-full w-full object-cover"
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
