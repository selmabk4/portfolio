import { Link } from "react-router-dom";

const heroImage =
  "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F9ef66eca2f6643048abbbdad416ef009?format=webp&width=800&height=1200";

const focusAreas = [
  {
    title: "Universell utforming",
    text: "Struktur og løsninger med fokus på at flere skal kunne bruke nettsiden.",
  },
  {
    title: "Designsystem",
    text: "Et tydelig visuelt fundament som gjør innholdet lettere å videreutvikle.",
  },
];

export default function EmanuelVigelandMuseum() {
  return (
    <article>
      <div className="mx-auto max-w-[1152px] px-6 pb-16 pt-10 sm:px-8 sm:pb-24 sm:pt-16 lg:pb-32 lg:pt-20">
        <Link
          to="/#prosjekter"
          className="inline-flex items-center gap-3 text-xs uppercase tracking-[1.2px] text-muted-foreground transition-colors hover:text-primary"
        >
          <span aria-hidden="true">←</span>
          Tilbake til prosjekter
        </Link>

        <header className="mt-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-12">
          <div>
            <p className="mb-4 text-xs uppercase tracking-[1.2px] text-primary">
              Tverrfaglig prosjekt, vår 2026
            </p>
            <h1 className="max-w-[760px] font-serif text-4xl font-medium leading-[1.08] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-[76px]">
              Emanuel Vigeland Museum
            </h1>
          </div>
          <p className="max-w-[260px] text-sm leading-7 text-muted-foreground lg:pb-2">
            Universell utforming / Designsystem, vår 2026
          </p>
        </header>

        <div className="mt-12 overflow-hidden border border-border bg-secondary sm:mt-16">
          <img
            src={heroImage}
            alt="Emanuel Vigeland Museum nettsidedesign"
            className="h-[420px] w-full object-cover object-top sm:h-[620px] lg:h-[760px]"
          />
        </div>

        <div className="mt-16 grid gap-12 border-b border-border pb-16 sm:mt-24 sm:grid-cols-[minmax(0,1fr)_minmax(260px,0.7fr)] sm:gap-16 sm:pb-24">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[1.2px] text-primary">
              Om prosjektet
            </p>
            <p className="max-w-[680px] font-serif text-2xl leading-[1.4] text-foreground sm:text-[32px]">
              Et tverrfaglig prosjekt sammen med studenter fra Grafisk design, med
              fokus på universell utforming og utvikling av et designsystem.
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 self-start text-sm sm:grid-cols-1 sm:gap-y-8">
            <div>
              <dt className="mb-1 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Prosjekt
              </dt>
              <dd className="text-foreground">Tverrfaglig prosjekt (med Grafisk designere)</dd>
            </div>
            <div>
              <dt className="mb-1 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Min rolle
              </dt>
              <dd className="text-foreground">Ansvarlig for fungerende betalingsløsning</dd>
            </div>
            <div>
              <dt className="mb-1 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                År
              </dt>
              <dd className="text-foreground">Vår 2026</dd>
            </div>
            <div>
              <dt className="mb-1 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Fokus
              </dt>
              <dd className="text-foreground">Universell utforming og designsystem</dd>
            </div>
          </dl>
        </div>

        <section className="py-16 sm:py-24">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-xs uppercase tracking-[1.2px] text-primary">
                Prosjektfokus
              </p>
              <h2 className="font-serif text-3xl font-medium leading-tight text-foreground sm:text-5xl">
                Fra behov til system
              </h2>
            </div>
            <p className="max-w-[360px] text-sm leading-7 text-muted-foreground">
              Arbeidet med å gjøre museumsnettstedet mer tilgjengelig og helhetlig.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-border bg-border sm:grid-cols-3">
            {focusAreas.map((area) => (
              <div key={area.title} className="bg-background p-6 sm:p-8">
                <h3 className="font-serif text-2xl font-medium text-foreground">
                  {area.title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-muted-foreground">
                  {area.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        <div className="border-t border-border pt-8">
          <Link
            to="/#prosjekter"
            className="inline-flex items-center gap-3 border border-foreground px-[17.6px] py-[8.8px] text-xs uppercase tracking-[1.2px] text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Alle prosjekter
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
