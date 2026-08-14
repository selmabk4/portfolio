import { Link } from "react-router-dom";

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


        <div className="mt-16 grid gap-12 border-b border-border pb-16 sm:mt-24 sm:grid-cols-[minmax(0,1fr)_minmax(260px,0.7fr)] sm:gap-16 sm:pb-24">
          <div>
            <p className="mb-5 text-xs uppercase tracking-[1.2px] text-primary">
              Utfordring
            </p>
            <p className="max-w-[680px] font-serif text-2xl leading-[1.4] text-foreground sm:text-[32px]">
              Hvordan moderniserer en nettside fra 2001 for et museum med
              100+ konserter i året?
            </p>
          </div>
          <dl className="grid grid-cols-2 gap-x-8 gap-y-6 self-start text-sm sm:grid-cols-1 sm:gap-y-8">
            <div>
              <dt className="mb-1 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Prosjekt
              </dt>
              <dd className="text-foreground">Tverrfaglig prosjekt med grafisk designere</dd>
            </div>
            <div>
              <dt className="mb-1 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Min rolle
              </dt>
              <dd className="text-foreground">Mobil prototype, interaktiv betalingsløsning og kravprioritering (MoSCoW)</dd>
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

        <section className="border-b border-border py-16 sm:py-24">
          <div className="grid gap-8 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] sm:items-start sm:gap-16">
            <p className="text-xs uppercase tracking-[1.2px] text-primary">
              Bakgrunn
            </p>
            <p className="max-w-[620px] font-serif text-2xl leading-[1.4] text-foreground sm:text-[32px]">
              Den gamle nettsiden oppfylte ikke WCAG-kravene og var utdatert. Nettsiden gjenspeilet heller ikke museets faktiske aktivitetsnivå med tanke på alle arrangementene.
            </p>
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
