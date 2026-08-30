import ContactCta from "@/components/ContactCta";
import { ChevronLeft, ChevronRight, GitBranch, ListChecks, Users } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export interface ProjectDetailData {
  title: string;
  summary: string;
  challenge: string;
  role: string;
  focus: string;
  timeframe: string;
  tools: string;
  toolIcon?: string;
  toolIconAlt?: string;
  secondaryToolIcon?: string;
  secondaryToolIconAlt?: string;
  introHeading?: string;
  background: string;
  research: string;
  insights?: string;
  insightsImage?: string;
  insightsImageAlt?: string;
  insightsSummary?: string;
}

const personaImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F743ba3e3b9c5449d9862fdef22fef2d3?format=webp&width=800&height=1200",
    alt: "Persona: studentkunde",
    label: "Studentkunde",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2Fd5b3b6ce21ea44f2b1808b29c6904a96?format=webp&width=800&height=1200",
    alt: "Persona: Norvald kunde",
    label: "Norvald kunde",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F877981ebf27b430089d874ff04ded6b6?format=webp&width=800&height=1200",
    alt: "Persona: Tjønnås kunde",
    label: "Tjønnås kunde",
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F3230d70555e64ce8a747be55dbb08dd5%2F5ef593efd55949198465dce5e23eb94f?format=webp&width=800&height=1200",
    alt: "Persona: ansatt",
    label: "Ansatt",
  },
];

export default function ProjectDetail({ project }: { project: ProjectDetailData }) {
  const [personaIndex, setPersonaIndex] = useState(0);
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
              {project.title}
            </h1>
            <p className="mt-6 max-w-[560px] text-sm leading-7 text-primary-foreground/90 sm:text-base">
              {project.summary}
            </p>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[896px] px-6 pb-20 sm:px-8 sm:pb-28">
        <section className="border-b border-border py-16 sm:py-24">
          <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
            {project.introHeading ?? "Om prosjektet"}
          </p>
          <div className="mb-10 h-1 w-12 bg-primary" />
          <p className="max-w-[680px] text-sm leading-7 text-muted-foreground sm:text-base">
            {project.challenge}
          </p>

          <dl className="mt-12 grid gap-x-6 gap-y-10 text-sm sm:grid-cols-2 lg:grid-cols-4">
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">Ansvarsområde</dt>
              <dd className="leading-6 text-foreground">{project.role}</dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">Fokus</dt>
              <dd className="leading-6 text-foreground">{project.focus}</dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">Tidsramme</dt>
              <dd className="leading-6 text-foreground">{project.timeframe}</dd>
            </div>
            <div className="border-t border-border pt-4">
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">Verktøy</dt>
              <dd className="flex items-center gap-3 leading-6 text-foreground">
                {project.toolIcon ? (
                  <img
                    src={project.toolIcon}
                    alt={project.toolIconAlt ?? "Figma"}
                    className="h-8 w-8 rounded-lg object-contain shadow-sm"
                  />
                ) : null}
                {project.tools ? <span>{project.tools}</span> : null}
                {project.secondaryToolIcon ? (
                  <img
                    src={project.secondaryToolIcon}
                    alt={project.secondaryToolIconAlt ?? "Claude"}
                    className="h-14 w-16 object-contain"
                  />
                ) : null}
              </dd>
            </div>
          </dl>
        </section>

        {project.insights ? (
          <section className="border-b border-border py-16 sm:py-24">
            <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
              Innsiktsarbeid
            </p>
            <div className="mb-10 h-1 w-12 bg-primary" />
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="border border-border p-6">
                <div className="mb-8 flex items-center justify-between text-primary">
                  <p className="text-xs uppercase tracking-[1.2px] text-foreground">
                    Datagrunnlag
                  </p>
                  <Users aria-hidden="true" className="h-5 w-5" />
                </div>
                <p className="font-serif text-6xl leading-none text-foreground">20</p>
                <p className="mt-4 text-sm leading-6 text-muted-foreground">
                  Intervjuer med kunder og ansatte hos Tjønnås og Norvald (1 eget
                  intervju + 19 fra klassen).
                </p>
              </article>

              <article className="border border-border p-6">
                <div className="mb-8 flex items-center justify-between text-primary">
                  <p className="text-xs uppercase tracking-[1.2px] text-foreground">
                    Metode
                  </p>
                  <GitBranch aria-hidden="true" className="h-5 w-5" />
                </div>
                <p className="text-sm leading-6 text-muted-foreground">
                  Analyse og strukturering av funn ved hjelp av Affinity Map og personas.
                </p>
              </article>

              <article className="border border-border p-6">
                <div className="mb-8 flex items-center justify-between text-primary">
                  <p className="text-xs uppercase tracking-[1.2px] text-foreground">
                    Funn
                  </p>
                  <ListChecks aria-hidden="true" className="h-5 w-5" />
                </div>
                <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground">
                  <li>Mangelfull informasjon</li>
                  <li>Vanskelig bestilling/booking</li>
                  <li>Lav synlighet</li>
                  <li>Intern kommunikasjon</li>
                </ul>
              </article>
            </div>
            {project.insightsImage ? (
              <figure className="mt-8 overflow-hidden border border-border bg-white">
                <img
                  src={project.insightsImage}
                  alt={project.insightsImageAlt ?? "Affinity map"}
                  loading="lazy"
                  className="h-auto max-h-[280px] w-full object-contain object-left sm:max-h-[360px]"
                />
                {project.insightsSummary ? (
                  <figcaption className="border-t border-border bg-background px-6 py-5 text-sm leading-7 text-muted-foreground sm:px-8">
                    {project.insightsSummary}
                  </figcaption>
                ) : null}
              </figure>
            ) : null}
            <div className="mt-12">
              <div className="mb-5 flex items-center justify-between gap-4">
                <p className="text-xs uppercase tracking-[1.2px] text-muted-foreground">
                  Personas
                </p>
                <p className="text-xs text-muted-foreground" aria-live="polite">
                  {personaIndex + 1} / {personaImages.length}
                </p>
              </div>
              <div className="relative overflow-hidden border border-border bg-white">
                <img
                  src={personaImages[personaIndex].src}
                  alt={personaImages[personaIndex].alt}
                  loading="lazy"
                  className="mx-auto h-auto max-h-[500px] w-full object-contain"
                />
                <div className="flex items-center justify-between border-t border-border bg-background px-4 py-3 sm:px-6">
                  <p className="text-sm text-foreground">
                    {personaImages[personaIndex].label}
                  </p>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      aria-label="Forrige persona"
                      onClick={() =>
                        setPersonaIndex(
                          (current) =>
                            (current - 1 + personaImages.length) % personaImages.length,
                        )
                      }
                      className="border border-border p-2 text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronLeft aria-hidden="true" className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="Neste persona"
                      onClick={() =>
                        setPersonaIndex((current) => (current + 1) % personaImages.length)
                      }
                      className="border border-border p-2 text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      <ChevronRight aria-hidden="true" className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 bg-primary px-6 py-7 text-primary-foreground sm:px-8 sm:py-9">
              <p className="mb-3 text-xs uppercase tracking-[1.2px]">Hovedfunn</p>
              <p className="text-lg leading-8 sm:text-2xl sm:leading-9">
                Utydelig kobling og ubrukt potensial: Kundene forstår ikke sammenhengen
                mellom Tjønnås i sentrum og Norvald på Gjøvik gård, og etterspør en
                mulighet for å bestille varer.
              </p>
            </div>
          </section>
        ) : null}

        <section className="border-b border-border py-16 sm:py-24">
          <p className="mb-3 font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
            Ideutvikling
          </p>
          <div className="h-1 w-12 bg-primary" />
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
