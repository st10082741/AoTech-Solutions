// Language: TypeScript + JSX (TSX) | Purpose: Company summary, navigation and direct contact details.
import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";
import { BrandLogo } from "@/components/ui/brand-logo";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { company, createWhatsAppUrl } from "@/config/company";
import type { Locale, SiteContent } from "@/types/site";

export function SiteFooter({ locale, content }: { locale: Locale; content: SiteContent }) {
  const message = locale === "pt" ? "Olá, gostaria de falar com a AoTech Solutions." : "Hello, I would like to speak with AoTech Solutions.";

  return (
    <footer className="bg-deep-navy text-white">
      <div className="container-shell grid gap-12 py-16 md:grid-cols-[1.4fr_0.8fr_1fr]">
        <div>
          <BrandLogo inverted className="h-14 w-auto" />
          <p className="mt-6 max-w-sm leading-7 text-white/60">{content.footer.summary}</p>
        </div>
        <div>
          <h2 className="footer-title">{content.footer.navigation}</h2>
          <div className="mt-5 grid gap-3 text-sm text-white/65">
            {content.nav.items.map((item) => <Link key={item.href} className="footer-link" to={item.href || "/"}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <h2 className="footer-title">{content.footer.contact}</h2>
          <div className="mt-5 grid gap-4 text-sm">
            <a className="contact-link" href={createWhatsAppUrl(message)} target="_blank" rel="noreferrer"><WhatsAppIcon className="h-5 w-5" />{company.whatsapp.display}</a>
            <a className="contact-link" href={`tel:${company.angolaPhone.href}`}><Phone size={18} />{company.angolaPhone.display}</a>
            <a className="contact-link" href={`mailto:${company.email}`}><Mail size={18} />{company.email}</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-shell flex flex-col gap-2 py-5 text-xs text-white/45 sm:flex-row sm:justify-between">
          <span>© {new Date().getFullYear()} AoTech Solutions. {content.footer.legal}</span>
          <span>South Africa · Angola</span>
        </div>
      </div>
    </footer>
  );
}
