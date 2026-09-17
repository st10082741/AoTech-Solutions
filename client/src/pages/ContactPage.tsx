// Language: TypeScript + JSX (TSX) | Purpose: Contact route with privacy-friendly WhatsApp and email request builder.
import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { PageHero } from "@/components/ui/page-hero";
import { company, createWhatsAppUrl } from "@/config/company";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/types/site";

export function ContactPage({ locale }: { locale: Locale }) {
  const copy = siteContent[locale].contact;
  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />
      <section className="section-space bg-mist">
        <div className="container-shell grid gap-10 lg:grid-cols-[1.15fr_.85fr]">
          <ContactForm locale={locale} />
          <aside>
            <h2 className="text-3xl font-black text-navy">
              {copy.directTitle}
            </h2>
            <div className="mt-7 grid gap-4">
              <a
                className="service-card flex items-center gap-4"
                href={createWhatsAppUrl(
                  locale === "pt"
                    ? "Olá, gostaria de falar com a AoTech Solutions."
                    : "Hello, I would like to speak with AoTech Solutions.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon-box">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <span>
                  <small className="text-slate">{copy.saLabel}</small>
                  <strong className="mt-1 block text-navy">
                    {company.whatsapp.display}
                  </strong>
                </span>
              </a>
              <a
                className="service-card flex items-center gap-4"
                href={`tel:${company.angolaPhone.href}`}
              >
                <span className="icon-box">
                  <Phone className="h-5 w-5" />
                </span>
                <span>
                  <small className="text-slate">{copy.aoLabel}</small>
                  <strong className="mt-1 block text-navy">
                    {company.angolaPhone.display}
                  </strong>
                </span>
              </a>
              <a
                className="service-card flex items-center gap-4"
                href={`mailto:${company.email}`}
              >
                <span className="icon-box">
                  <Mail className="h-5 w-5" />
                </span>
                <span>
                  <small className="text-slate">{copy.emailLabel}</small>
                  <strong className="mt-1 block break-all text-navy">
                    {company.email}
                  </strong>
                </span>
              </a>
              <div className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-slate">
                <MapPin className="h-4 w-4 text-blue" />
                {locale === "pt"
                  ? "África do Sul · Angola"
                  : "South Africa · Angola"}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
