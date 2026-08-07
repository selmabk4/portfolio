export default function Placeholder({ title }: { title: string }) {
  return (
    <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-[1024px] flex-col items-center justify-center px-6 py-16 text-center sm:px-8">
      <h1 className="font-serif text-4xl font-medium tracking-[-0.02em] text-foreground sm:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-md font-light leading-[1.75] text-muted-foreground">
        Denne siden er ikke ferdig ennå. Fortsett å chatte for å fylle ut
        innholdet her.
      </p>
    </div>
  );
}
