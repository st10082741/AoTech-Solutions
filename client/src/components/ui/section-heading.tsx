// Language: TypeScript + JSX (TSX) | Purpose: Reusable heading hierarchy for every website section.
type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`section-title mt-4 ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg leading-8 ${light ? "text-white/70" : "text-slate"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
