// Language: TypeScript + JSX (TSX) | Purpose: Composes the bilingual homepage from reusable content and UI blocks.
import { Link } from "react-router-dom";
import {
  ArrowRight, CheckCircle2, Download, ShieldCheck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { company, createWhatsAppUrl } from "@/config/company";
import type { Locale } from "@/types/site";
import { siteContent } from "@/content/site-content";

export function HomePage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const home = content.home;
  const greeting = locale === "pt"
    ? "Olá, gostaria de solicitar uma cotação de procurement à AoTech Solutions."
    : "Hello, I would like to request a procurement quotation from AoTech Solutions.";

  return (
    <>
      {/* A split hero feels more editorial and keeps the operational image separate from the message. */}
      <section className="home-hero bg-deep-navy text-white">
        <div className="container-shell hero-layout">
          <div className="hero-copy">
            <p className="eyebrow rise-in">{home.eyebrow}</p>
            <h1 className="hero-title mt-6 font-black text-balance rise-in delay-1">
              {home.title} <span>{home.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/72 rise-in delay-2">{home.intro}</p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a className="button button-primary" href={createWhatsAppUrl(greeting)} target="_blank" rel="noreferrer">
                <WhatsAppIcon className="h-5 w-5" /> {home.primaryCta}
              </a>
              <Link className="text-link text-white" to="/procurement">{home.secondaryCta}<ArrowRight className="h-4 w-4" /></Link>
            </div>
          </div>

          <figure className="hero-figure rise-in delay-2">
            <img src="/images/hero-logistics.webp" alt="Logistics operation at a South African port" fetchPriority="high" />
            <figcaption>{locale === "pt" ? "África do Sul → Angola" : "South Africa → Angola"}</figcaption>
          </figure>
        </div>

        {/* A single factual strip replaces floating badges and anchors the promise in clear terms. */}
        <div className="hero-trust">
          <div className="container-shell grid gap-4 md:grid-cols-3">
            {home.trust.map((item) => <span className="flex items-center gap-3" key={item}><CheckCircle2 className="h-4 w-4 text-gold" />{item}</span>)}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
          <SectionHeading eyebrow={home.servicesEyebrow} title={home.servicesTitle} description={home.servicesIntro} />
          <div className="service-ledger">
            {home.services.map((service, index) => (
              <article className="service-row" key={service.title}>
                <span className="service-index">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{service.title}</h3><p>{service.description}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-deep-navy text-white">
        <div className="container-shell grid gap-14 lg:grid-cols-[.72fr_1.28fr] lg:gap-20">
          <SectionHeading eyebrow={home.processEyebrow} title={home.processTitle} description={home.processIntro} light />
          <div className="process-register">
            {home.process.map((step) => <article className="process-entry" key={step.number}><span>{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-shell corridor-layout">
          <figure className="corridor-image"><img src="/images/technical-verification.webp" alt="Procurement team verifying industrial components" loading="lazy" /></figure>
          <div>
            <SectionHeading eyebrow={home.corridorEyebrow} title={home.corridorTitle} description={home.corridorBody} />
            <div className="corridor-points">{home.corridorPoints.map((point, index) => <div key={point}><span>0{index + 1}</span><strong>{point}</strong></div>)}</div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
          <SectionHeading eyebrow={home.sectorsEyebrow} title={home.sectorsTitle} />
          <div className="sector-list">{home.sectors.map((sector) => <div key={sector}>{sector}</div>)}</div>
        </div>
      </section>

      <section className="section-space border-y border-line bg-white">
        <div className="container-shell commercial-layout">
          <SectionHeading eyebrow={home.paymentEyebrow} title={home.paymentTitle} description={home.paymentBody} />
          <aside className="commercial-note"><ShieldCheck className="h-7 w-7" /><p>{home.paymentNote}</p></aside>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading eyebrow={home.documentsEyebrow} title={home.documentsTitle} description={home.documentsIntro} />
          <div className="document-list mt-10">
            {[
              ["Portfolio em Português", company.documents.portfolioPt],
              ["Portfolio in English", company.documents.portfolioEn],
            ].map(([label, href]) => <a href={href} target="_blank" rel="noreferrer" key={href}><strong>{label}</strong><Download className="h-5 w-5" /></a>)}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-shell final-callout bg-deep-navy px-7 py-12 text-white md:px-14 md:py-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center"><div><h2 className="text-3xl font-black tracking-tight md:text-5xl">{home.finalTitle}</h2><p className="mt-4 max-w-2xl text-lg leading-8 text-white/68">{home.finalBody}</p></div><Link className="button button-primary shrink-0" to="/contact">{content.common.requestQuote}<ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </section>
    </>
  );
}
