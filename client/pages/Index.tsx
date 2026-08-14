import GradientBlob from "@/components/GradientBlob";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Index() {
  return (
    <div>
      <div className="relative overflow-hidden border-b border-border">
        <GradientBlob
          id="blob-hero"
          className="hero-bubble hero-bubble-large pointer-events-none absolute -right-16 -top-20 hidden w-[220px] rounded-full opacity-50 sm:block sm:w-[280px] lg:-right-6 lg:-top-24 lg:w-[380px]"
        />
        <GradientBlob
          id="blob-hero-sm"
          className="hero-bubble hero-bubble-small pointer-events-none absolute -bottom-10 -left-10 w-[100px] rounded-full opacity-35 sm:w-[120px] lg:-left-7 lg:bottom-10 lg:w-[140px]"
        />
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1024px] flex-col items-center justify-center px-6 py-16 sm:px-8 sm:py-20 lg:py-24">
          <div className="flex w-full flex-col items-center border border-border px-6 py-8 sm:px-12 sm:py-10">
            <h1 className="text-center font-serif text-[40px] font-light leading-[1] tracking-[-0.02em] text-foreground sm:text-6xl lg:text-[84.675px] lg:leading-[84.675px] lg:tracking-[-1.694px]">
              Selma Bjørtomt Keser
            </h1>
          </div>

          <div className="flex w-full flex-col items-center gap-2 pt-6 sm:flex-row sm:items-center sm:justify-between sm:gap-0">
            <p className="font-serif text-xl font-semibold italic leading-[1.5] tracking-[-0.01em] text-foreground sm:text-[28.225px]">
              UX design student
            </p>
            <span className="text-xs uppercase tracking-[1.2px] text-primary">
              Portefølje 2026
            </span>
          </div>

          <div className="w-full pt-5">
            <p className="max-w-[540px] text-base font-light leading-[1.75] text-muted-foreground sm:text-[16.8px]">
              Nysgjerrig på mennesker, psykologi og hvordan vi samhandler med
              teknologi :)
            </p>
          </div>

          <div className="w-full pt-8">
            <a
              href="#prosjekter"
              className="hero-cta-shake inline-flex items-center gap-3 bg-primary px-[22.4px] py-[10.4px] text-[12.8px] uppercase tracking-[1.28px] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Se prosjekter
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>

      <FeaturedProjects />

      <section className="mx-auto max-w-[1152px] border-t border-border px-6 pb-16 pt-16 sm:px-8 sm:pb-24 sm:pt-20 lg:pt-24">
        <div className="flex items-baseline justify-between">
          <h2 className="font-serif text-2xl font-normal leading-[1.2] text-foreground sm:text-[30px]">
            Andre prosjekter
          </h2>
          <span className="hidden text-xs uppercase tracking-[1.2px] text-[#b0a898] sm:inline">
            Innholdsproduksjon
          </span>
        </div>

        <article className="mt-10 overflow-hidden border-b border-border sm:mt-14">
          <div className="grid gap-8 pb-8 sm:grid-cols-[minmax(220px,0.7fr)_minmax(0,1.3fr)] sm:items-end sm:gap-16 sm:pb-10">
            <div>
              <h3 className="font-serif text-2xl font-medium leading-[1.25] text-foreground sm:text-[30px]">
                Fugleadvokatene
              </h3>
              <p className="mt-2 font-serif text-base font-light italic leading-[1.5] text-muted-foreground">
                Innholdsproduksjon
              </p>
              <p className="mt-4 max-w-[360px] text-base leading-[1.625] text-foreground">
                Som frivillig i SoMe-teamet til Fugleadvokatene utformer jeg
                innhold for å spre informativ kunnskap og hjelpe hjemløse fugler
                med å finne nye hjem.
              </p>
            </div>
            <p className="max-w-[620px] font-serif text-2xl leading-[1.35] text-primary sm:text-[32px]">
              Visuell kommunikasjon for fugler som trenger et hjem.
            </p>
          </div>

          <div className="overflow-x-auto border-t border-border pb-6 pt-6">
            <div className="flex min-w-max snap-x snap-mandatory gap-4">
              <figure className="h-[280px] w-[280px] shrink-0 snap-start overflow-hidden bg-background sm:h-[380px] sm:w-[380px]">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F10ef3bcfaa424a5aa14b34420e10bfaf?format=webp&width=800&height=1200"
                  alt="Innholdsproduksjon for Fugleadvokatene"
                  className="h-full w-full object-cover"
                />
              </figure>
              <div className="flex h-[280px] w-[280px] shrink-0 snap-start items-center justify-center bg-primary px-8 sm:h-[380px] sm:w-[380px]">
                <p className="max-w-[280px] text-center font-serif text-4xl font-medium leading-[1.05] tracking-[-0.03em] text-primary-foreground sm:text-6xl">
                  Fugleadvokatene
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
