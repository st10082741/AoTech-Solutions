// Language: TypeScript + JSX (TSX) | Purpose: Scalable AoTech logo drawn as inline SVG.
import type { SVGProps } from "react";

type BrandLogoProps = SVGProps<SVGSVGElement> & {
  showWordmark?: boolean;
  inverted?: boolean;
};

export function BrandLogo({
  showWordmark = true,
  inverted = false,
  className,
  ...props
}: BrandLogoProps) {
  const primary = inverted ? "#9adcf5" : "#063c73";

  return (
    <svg
      viewBox={showWordmark ? "0 0 310 82" : "0 0 136 82"}
      role="img"
      aria-label="AoTech Solutions"
      className={className}
      {...props}
    >
      <g
        fill="none"
        stroke={primary}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="5"
      >
        <path d="M12 16h28l22 18h23" />
        <path d="M12 32h35l17 10h21" />
        <path d="M12 48h48l24 0" />
        <path d="M22 64h25l18-12h20" />
      </g>
      {[16, 32, 48].map((cy) => (
        <g key={cy}>
          <circle cx="12" cy={cy} r="8" fill={primary} />
          <circle cx="12" cy={cy} r="3.5" fill="#18a5d8" />
        </g>
      ))}
      <circle cx="22" cy="64" r="8" fill={primary} />
      <circle cx="22" cy="64" r="3.5" fill="#18a5d8" />
      <path d="M80 20v56l43-28z" fill={primary} />
      <path d="m69 38 11 6v17l-11 7-11-7V44z" fill="#f4b400" />
      <path d="m58 44 11 6 11-6-11-6z" fill="#ffd15c" />
      {showWordmark && (
        <g fill={inverted ? "#ffffff" : "#063c73"}>
          <text
            x="151"
            y="39"
            fontFamily="Arial, sans-serif"
            fontSize="24"
            fontWeight="800"
          >
            AoTech
          </text>
          <text
            x="151"
            y="62"
            fontFamily="Arial, sans-serif"
            fontSize="15"
            fontWeight="600"
            letterSpacing="3"
          >
            SOLUTIONS
          </text>
        </g>
      )}
    </svg>
  );
}
