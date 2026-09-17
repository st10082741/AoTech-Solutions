// Language: TypeScript + JSX (TSX) | Purpose: Responsive primary navigation and conversion CTA.
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { LanguageSwitcher } from "@/components/layout/language-switcher";
import type { Locale, SiteContent } from "@/types/site";

type SiteHeaderProps = { locale: Locale; content: SiteContent; onLanguageChange: (locale: Locale) => void };
export function SiteHeader({ locale, content, onLanguageChange }: SiteHeaderProps) {
  return (
    <header className="site-header">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <Link to="/" aria-label="AoTech Solutions home" className="shrink-0">
          <BrandLogo className="h-12 w-auto" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary navigation">
          {content.nav.items.map((item) => (
            <Link key={item.href} className="nav-link" to={item.href || "/"}>{item.label}</Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher locale={locale} label={content.nav.language} onChange={onLanguageChange} />
          <Link to="/contact" className="button button-primary button-small">{content.nav.quote}</Link>
        </div>

        {/* Native details/summary keeps the mobile menu reliable without JavaScript state. */}
        <details className="mobile-menu lg:hidden">
          <summary aria-label={content.nav.menu}>
            <Menu className="menu-open" size={24} />
            <X className="menu-close" size={24} />
          </summary>
          <div className="mobile-menu-panel">
            <nav className="flex flex-col" aria-label="Mobile navigation">
              {content.nav.items.map((item) => (
                <Link key={item.href} to={item.href || "/"}>{item.label}</Link>
              ))}
            </nav>
            <div className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-5">
              <LanguageSwitcher locale={locale} label={content.nav.language} onChange={onLanguageChange} />
              <Link to="/contact" className="button button-primary button-small">{content.nav.quote}</Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
