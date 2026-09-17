// Language: TypeScript + JSX (TSX) | Purpose: Composes the bilingual homepage from reusable content and UI blocks.
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Boxes,
  CheckCircle2,
  ClipboardCheck,
  Download,
  FileText,
  PackageCheck,
  Search,
  ShieldCheck,
  ShoppingCart,
  Truck,
  Wrench,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { company, createWhatsAppUrl } from "@/config/company";
import type { Locale } from "@/types/site";
import { siteContent } from "@/content/site-content";

const serviceIcons = [
  Search,
  ClipboardCheck,
  ShoppingCart,
  Truck,
  FileText,
  PackageCheck,
];

export function HomePage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const home = content.home;
  const greeting =
    locale === "pt"
      ? "Olá, gostaria de solicitar uma cotação de procurement à AoTech Solutions."
      : "Hello, I would like to request a procurement quotation from AoTech Solutions.";

  return (
    <>
      {/* The hero immediately explains the corridor, service and next action. */}
      <section className="hero-media relative flex min-h-[760px] items-end overflow-hidden bg-deep-navy pt-32 text-white">
        <img
          src="/images/hero-logistics.webp"
          alt="Logistics operation at a South African port"
          className="absolute inset-0 h-full w-full object-cover object-center"
          fetchPriority="high"
        />
        <div className="container-shell relative z-10 pb-20 pt-28 md:pb-28">
          <div className="max-w-4xl">
            <p className="eyebrow rise-in">{home.eyebrow}</p>
            <h1 className="hero-title mt-6 max-w-4xl font-black text-balance rise-in delay-1">
              {home.title} <span className="text-cyan">{home.titleAccent}</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/76 md:text-xl rise-in delay-2">
              {home.intro}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                className="button button-primary"
                href={createWhatsAppUrl(greeting)}
                target="_blank"
                rel="noreferrer"
              >
                <WhatsAppIcon className="h-5 w-5" /> {home.primaryCta}
              </a>
              <Link className="button button-secondary" to="/procurement">
                {home.secondaryCta}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-white/72">
              {home.trust.map((item) => (
                <span className="flex items-center gap-2" key={item}>
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow={home.servicesEyebrow}
            title={home.servicesTitle}
            description={home.servicesIntro}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {home.services.map((service, index) => {
              const Icon = serviceIcons[index];
              return (
                <article className="service-card" key={service.title}>
                  <span className="icon-box">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-black text-navy">
                    {service.title}
                  </h3>
                  <p className="mt-3 leading-7 text-slate">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-deep-navy text-white">
        <div
          className="absolute inset-0 blueprint-grid opacity-20"
          aria-hidden="true"
        />
        <div className="container-shell relative grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <SectionHeading
            eyebrow={home.processEyebrow}
            title={home.processTitle}
            description={home.processIntro}
            light
          />
          <div className="grid gap-7 sm:grid-cols-2">
            {home.process.map((step) => (
              <div className="process-line flex gap-5" key={step.number}>
                <span className="process-number">{step.number}</span>
                <div>
                  <h3 className="text-lg font-black">{step.title}</h3>
                  <p className="mt-2 leading-7 text-white/64">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-mist">
        <div className="container-shell grid items-center gap-14 lg:grid-cols-2">
          <div className="image-frame min-h-[470px]">
            <img
              src="/images/technical-verification.webp"
              alt="Procurement team verifying industrial components"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow={home.corridorEyebrow}
              title={home.corridorTitle}
              description={home.corridorBody}
            />
            <div className="route-line mt-11" aria-hidden="true" />
            <div className="mt-7 grid gap-4 sm:grid-cols-3">
              {home.corridorPoints.map((point) => (
                <div className="font-bold text-navy" key={point}>
                  {point}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow={home.sectorsEyebrow}
            title={home.sectorsTitle}
            centered
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {home.sectors.map((sector) => (
              <div
                className="flex items-center gap-4 rounded-2xl border border-line p-5 font-extrabold text-navy"
                key={sector}
              >
                <Wrench className="h-5 w-5 text-blue" />
                {sector}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-navy text-white">
        <div className="container-shell grid gap-12 lg:grid-cols-[1fr_.8fr] lg:items-center">
          <SectionHeading
            eyebrow={home.paymentEyebrow}
            title={home.paymentTitle}
            description={home.paymentBody}
            light
          />
          <aside className="rounded-[28px] border border-white/12 bg-white/7 p-8 backdrop-blur">
            <ShieldCheck className="h-9 w-9 text-gold" />
            <p className="mt-5 text-lg font-bold leading-8">
              {home.paymentNote}
            </p>
          </aside>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow={home.documentsEyebrow}
            title={home.documentsTitle}
            description={home.documentsIntro}
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {[
              ["Portfolio em Português", company.documents.portfolioPt],
              ["Portfolio in English", company.documents.portfolioEn],
            ].map(([label, href]) => (
              <a
                className="service-card flex items-center justify-between gap-5"
                href={href}
                target="_blank"
                rel="noreferrer"
                key={href}
              >
                <span className="flex items-center gap-4">
                  <span className="icon-box">
                    <Boxes className="h-5 w-5" />
                  </span>
                  <strong className="text-lg text-navy">{label}</strong>
                </span>
                <Download className="h-5 w-5 text-blue" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-shell rounded-[34px] bg-deep-navy px-7 py-12 text-white md:px-14 md:py-16">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="text-3xl font-black tracking-tight md:text-5xl">
                {home.finalTitle}
              </h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-white/68">
                {home.finalBody}
              </p>
            </div>
            <Link className="button button-primary shrink-0" to="/contact">
              {content.common.requestQuote}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
