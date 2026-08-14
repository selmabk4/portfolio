import { Link } from "react-router-dom";

export default function EmanuelVigelandMuseum() {
  return (
    <article>
      <section className="bg-[#514750] text-white">
        <div className="mx-auto max-w-[1152px] px-6 pb-20 pt-10 sm:px-8 sm:pb-28 sm:pt-14">
          <Link
            to="/#prosjekter"
            className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[1px] text-white/70 transition-colors hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Portefølje / Emanuel Vigeland Museum
          </Link>

          <div className="mt-20 max-w-[620px] sm:mt-24">
            <p className="mb-5 text-xs uppercase tracking-[1.2px] text-white/70">
              Tverrfaglig prosjekt, vår 2026
            </p>
            <h1 className="font-serif text-4xl font-medium leading-[1.08] tracking-[-0.02em] sm:text-6xl lg:text-[72px]">
              Emanuel Vigeland Museum
            </h1>
            <p className="mt-6 max-w-[480px] text-sm leading-7 text-white/80 sm:text-base">
              Redesign av Emanuel Vigeland Museums nettside med fokus på universell
              utforming og designsystem.
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[896px] px-6 pb-16 sm:px-8 sm:pb-24">
        <section className="border-b border-border py-14 sm:py-20">
          <p className="mb-3 font-serif text-3xl font-medium text-foreground sm:text-4xl">
            Om prosjektet
          </p>
          <div className="mb-10 h-px w-10 bg-primary" />
          <p className="max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
            Hvordan moderniserer en nettside fra 2001 for et museum med 100+
            konserter i året?
          </p>

          <dl className="mt-10 grid gap-8 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Prosjekt
              </dt>
              <dd className="leading-6 text-foreground">
                Tverrfaglig prosjekt med grafisk designere
              </dd>
            </div>
            <div>
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Min rolle
              </dt>
              <dd className="leading-6 text-foreground">
                Mobil prototype, interaktiv betalingsløsning og kravprioritering
                (MoSCoW)
              </dd>
            </div>
            <div>
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                År
              </dt>
              <dd className="leading-6 text-foreground">Vår 2026</dd>
            </div>
            <div>
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Fokus
              </dt>
              <dd className="leading-6 text-foreground">
                Universell utforming og designsystem
              </dd>
            </div>
          </dl>
        </section>

        <section className="border-b border-border py-14 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] sm:gap-16">
            <p className="text-xs uppercase tracking-[1.2px] text-primary">
              Bakgrunn
            </p>
            <p className="max-w-[620px] font-serif text-2xl leading-[1.4] text-foreground sm:text-[32px]">
              Den gamle nettsiden oppfylte ikke WCAG-kravene og var utdatert.
              Nettsiden gjenspeilet heller ikke museets faktiske aktivitetsnivå
              med tanke på alle arrangementene.
            </p>
          </div>
        </section>

        <section className="border-b border-border py-14 sm:py-20">
          <div className="grid gap-6 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] sm:gap-16">
            <p className="text-xs uppercase tracking-[1.2px] text-primary">
              User research
            </p>
            <p className="max-w-[620px] font-serif text-2xl leading-[1.4] text-foreground sm:text-[32px]">
              Ekskursjon og spørreundersøkelse ga oss innsikt i hvordan museet
              kunne formidle arrangementer og gjøre nettsiden enklere å bruke.
            </p>
          </div>
        </section>

        <div className="pt-8">
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
