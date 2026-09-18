// Language: TypeScript + JSX (TSX) | Purpose: Consistent introduction block for internal pages.
type PageHeroProps = { eyebrow: string; title: string; intro: string };

export function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  return (
    <section className="page-hero bg-deep-navy text-white">
      <div className="container-shell">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-black tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/68">{intro}</p>
      </div>
    </section>
  );
}
