import ContactCta from "@/components/ContactCta";
import { Link } from "react-router-dom";

export default function EmanuelVigelandMuseum() {
  return (
    <article>
      <section className="border-b border-primary-foreground/20 bg-primary text-primary-foreground">
        <div className="mx-auto flex min-h-[440px] max-w-[1152px] flex-col px-6 pb-12 pt-10 sm:min-h-[520px] sm:px-8 sm:pb-16 sm:pt-14">
          <Link
            to="/#prosjekter"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[1.2px] text-primary-foreground/80 transition-colors hover:text-primary-foreground"
          >
            <span aria-hidden="true">←</span>
            Tilbake til prosjekter
          </Link>

          <div className="mt-auto max-w-[700px] pt-24">
            <h1 className="max-w-[760px] font-serif text-5xl font-medium leading-[1.02] tracking-[-0.03em] sm:text-7xl lg:text-[84px]">
              Emanuel Vigeland Museum
            </h1>
            <p className="mt-6 max-w-[480px] text-sm leading-7 text-primary-foreground/90 sm:text-base">
              Redesign av Emanuel Vigeland Museums nettside med fokus på universell
              utforming og designsystem.
            </p>
          </div>
        </div>
      </section>


      <div className="mx-auto max-w-[896px] px-6 pb-20 sm:px-8 sm:pb-28">
        <section className="border-b border-border py-16 sm:py-24">
          <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
            Om prosjektet
          </p>
          <div className="mb-10 h-1 w-12 bg-primary" />
          <p className="max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
            Gjennom emnet Designsystemer og universell utforming samarbeidet vi
            med Emanuel Vigeland Museum som oppdragsgiver. Dette var et
            tverrfaglig prosjekt der jeg fikk samarbeide med studenter fra
            grafisk design. Oppgaven gikk ut på å modernisere den utdaterte
            nettsiden og å lage et designsystem.
          </p>

          <dl className="mt-12 grid gap-x-6 gap-y-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Min rolle
              </dt>
              <dd className="leading-6 text-foreground">
                Mobil prototype, interaktiv betalingsløsning og kravprioritering
                (MoSCoW)
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Fokus
              </dt>
              <dd className="leading-6 text-foreground">
                Universell utforming og designsystem
              </dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Tidsramme
              </dt>
              <dd className="leading-6 text-foreground">10 uker</dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">
                Verktøy
              </dt>
              <dd className="flex items-center gap-3 leading-6 text-foreground">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fb49189c71da34c50ac1983c08b682755?format=webp&width=800&height=1200"
                  alt="Figma"
                  className="h-8 w-8 rounded-lg object-cover shadow-sm"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F4992bd0e7acb45518dc5ec6d23eb8ba4?format=webp&width=800&height=1200"
                  alt="Adobe Illustrator"
                  className="h-8 w-8 rounded-lg object-cover shadow-sm"
                />
              </dd>
            </div>
          </dl>
        </section>

        <section className="border-b border-border py-16 sm:py-24">
          <div className="grid gap-6 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] sm:gap-16">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[1.2px] text-primary">
              <span className="h-px w-6 bg-primary" aria-hidden="true" />
              Bakgrunn
            </p>
            <p className="max-w-[620px] font-serif text-2xl leading-[1.4] text-foreground sm:text-[32px]">
              Den gamle nettsiden oppfylte ikke WCAG-kravene og var utdatert.
              Nettsiden gjenspeilet heller ikke museets faktiske aktivitetsnivå
              med tanke på alle arrangementene.
            </p>
          </div>
        </section>

        <section className="border-b border-border py-16 sm:py-24">
          <div className="grid gap-6 sm:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] sm:gap-16">
            <p className="flex items-center gap-3 text-xs uppercase tracking-[1.2px] text-primary">
              <span className="h-px w-6 bg-primary" aria-hidden="true" />
              User research
            </p>
            <p className="max-w-[620px] font-serif text-2xl leading-[1.4] text-foreground sm:text-[32px]">
              Ekskursjon og spørreundersøkelse ga oss innsikt i hvordan museet
              kunne formidle arrangementer og gjøre nettsiden enklere å bruke.
            </p>
          </div>
        </section>

        <div className="pt-10">
          <Link
            to="/#prosjekter"
            className="inline-flex items-center gap-3 bg-primary px-[17.6px] py-[10.8px] text-xs uppercase tracking-[1.2px] text-primary-foreground transition-opacity hover:opacity-85"
          >
            Alle prosjekter
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
      <ContactCta />
    </article>
  );
}
