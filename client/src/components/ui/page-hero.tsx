// Language: TypeScript + JSX (TSX) | Purpose: Consistent introduction block for internal pages.
type PageHeroProps = { eyebrow: string; title: string; intro: string };

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-navy pt-36 pb-20 text-white md:pt-44 md:pb-28">
      <div
        className="absolute inset-0 blueprint-grid opacity-25"
        aria-hidden="true"
      />
      <div className="orb orb-blue -right-20 top-0" aria-hidden="true" />
      <div className="container-shell relative">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-3xl font-black tracking-[-0.035em] text-balance sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 md:text-xl">
          {intro}
        </p>
      </div>
    </section>
  );
}
