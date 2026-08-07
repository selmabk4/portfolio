import GradientBlob from "@/components/GradientBlob";
import FeaturedProjects from "@/components/FeaturedProjects";

export default function Index() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <GradientBlob
          id="blob-hero"
          className="hero-bubble hero-bubble-large pointer-events-none absolute -right-16 -top-20 hidden w-[220px] rounded-full opacity-50 sm:block sm:w-[280px] lg:-right-6 lg:-top-24 lg:w-[380px]"
        />
        <GradientBlob
          id="blob-hero-sm"
          className="hero-bubble hero-bubble-small pointer-events-none absolute -bottom-10 -left-10 w-[100px] rounded-full opacity-35 sm:w-[120px] lg:-left-7 lg:bottom-10 lg:w-[140px]"
        />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1024px] flex-col items-center justify-start px-6 pb-16 pt-12 sm:px-8 sm:pt-16 lg:pt-[72px]">
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
              className="inline-flex items-center gap-3 bg-primary px-[22.4px] py-[10.4px] text-[12.8px] uppercase tracking-[1.28px] text-primary-foreground transition-opacity hover:opacity-90"
            >
              Se prosjekter
              <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>

      <FeaturedProjects />
    </div>
  );
}
