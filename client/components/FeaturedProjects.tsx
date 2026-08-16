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
      "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F9ef66eca2f6643048abbbdad416ef009?format=webp&width=800&height=1200",
    imageAlt: "Emanuel Vigeland Museum nettsidedesign",
  },
  {
    title: "PayoutPartner",
    category: "UX / Fintech 2026",
    description: "Internship 2026 — UX-arbeid for PayoutPartner.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F7a44ff8f4df74fb28fdae96a17af8c78?format=webp&width=800&height=1200",
    imageAlt: "PayoutPartner-grensesnitt vist på laptop, mobil og nettbrett",
  },
  {
    title: "SIMInnlandet",
    category: "XR design 2025",
    description:
      "Design av VR-simulering for opplæring av helsepersonell ved sykehuset i Innlandet",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Ffa6bcae27bcc4adb903a4ae59ff0abd8?format=webp&width=800&height=1200",
    imageAlt: "Person foran en XR-simulering",
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
];

export default function FeaturedProjects() {
  return (
    <section
      id="prosjekter"
      className="mx-auto max-w-[1152px] border-t border-border px-6 py-16 sm:px-8 sm:py-20 lg:py-24"
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
                className={`order-2 flex flex-col justify-center gap-4 px-0 py-8 sm:px-10 sm:py-14 ${
                  imageFirst ? "sm:order-2" : "sm:order-1"
                }`}
              >
                <h3 className="font-serif text-2xl font-medium leading-[1.25] text-foreground sm:text-[30px]">
                  {project.title}
                </h3>
                <p className="-mt-2 font-serif text-base font-light italic leading-[1.5] text-muted-foreground">
                  {index === 0 ? (
                    <span className="font-sans font-normal not-italic text-muted-foreground">
                      Tverrfaglig prosjekt 2026
                    </span>
                  ) : index === 1 ? (
                    <span className="font-sans font-normal not-italic text-muted-foreground">
                      Praksisplass 2026
                    </span>
                  ) : (
                    project.category
                  )}
                </p>
                <p className="max-w-[452px] text-base leading-[1.625] text-foreground">
                  {index === 0 ? (
                    <>
                      <span className="font-serif font-semibold italic text-primary">Redesign</span> av Emanuel Vigeland museets nettside, med vektleggelse av <span className="font-serif font-semibold italic text-primary">designsystem</span> og <span className="font-serif font-semibold italic text-primary">universell utforming</span>.
                    </>
                  ) : index === 1 ? (
                    <>
                      <span className="font-serif font-semibold italic text-primary">Innsiktsarbeid</span> som førte til nye faktureringsforslag og <span className="font-serif font-semibold italic text-primary">redesign</span> av markedsføringssiden.
                    </>
                  ) : index === 2 ? (
                    <>
                      Design av <span className="font-serif font-semibold italic text-primary">VR-simulering</span> for opplæring av helsepersonell ved sykehuset i Innlandet
                    </>
                  ) : (
                    project.description
                  )}
                </p>
                <Link
                  to={
                    index === 0
                      ? "/prosjekter/emanuel-vigeland-museum"
                      : index === 1
                        ? "/prosjekter/payoutpartner"
                        : index === 2
                          ? "/prosjekter/siminnlandet"
                          : "/prosjekter/tjonnas-og-norvald"
                  }
                  className="mt-2 inline-flex w-fit items-center gap-3 border border-foreground px-[17.6px] py-[8.8px] text-xs uppercase tracking-[1.2px] text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Se prosjekt
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div
                className={`order-1 min-h-[240px] overflow-hidden sm:min-h-[320px] ${
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
