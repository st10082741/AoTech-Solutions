// Language: TypeScript + JSX (TSX) | Purpose: Changes the website language without changing the current page.
import type { Locale } from "@/types/site";

type LanguageSwitcherProps = { locale: Locale; label: string; onChange: (locale: Locale) => void };
export function LanguageSwitcher({ locale, label, onChange }: LanguageSwitcherProps) {
  return (
    <button className="language-pill" type="button" onClick={() => onChange(locale === "pt" ? "en" : "pt")} aria-label={`${label}: ${locale === "pt" ? "EN" : "PT"}`}>
      <span className={locale === "pt" ? "active" : ""}>PT</span>
      <span aria-hidden="true">/</span>
      <span className={locale === "en" ? "active" : ""}>EN</span>
    </button>
  );
}
