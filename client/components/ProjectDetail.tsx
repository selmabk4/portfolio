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
}

export default function ProjectDetail({ project }: { project: ProjectDetailData }) {
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
              <dt className="mb-2 text-xs uppercase tracking-[1.2px] text-muted-foreground">Min rolle</dt>
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
                    className="h-8 w-8 rounded-lg object-contain shadow-sm"
                  />
                ) : null}
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
              {project.background}
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
              {project.research}
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
    </article>
  );
}
