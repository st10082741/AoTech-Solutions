// Language: TypeScript + JSX (TSX) | Purpose: Explains requirements, workflow and commercial safeguards.
import { CheckCircle2, FileCheck2, HandCoins, Scale } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/types/site";

export function ProcurementPage({ locale }: { locale: Locale }) {
  const copy = siteContent[locale].procurement;
  return <><PageHero eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro}/><section className="section-space"><div className="container-shell grid gap-14 lg:grid-cols-[.8fr_1.2fr]"><div><h2 className="section-title text-navy">{copy.requirementTitle}</h2><div className="mt-8 grid gap-4">{copy.requirementItems.map((item)=><div className="flex items-center gap-3 font-bold text-ink" key={item}><CheckCircle2 className="h-5 w-5 text-blue"/>{item}</div>)}</div></div><div className="workflow-panel bg-deep-navy p-7 text-white md:p-10"><h2 className="text-3xl font-black">{copy.processTitle}</h2><div className="mt-9 grid gap-7">{copy.process.map((step)=><div className="process-line flex gap-5" key={step.number}><span className="process-number">{step.number}</span><div><h3 className="text-lg font-black">{step.title}</h3><p className="mt-2 leading-7 text-white/64">{step.description}</p></div></div>)}</div></div></div></section><section className="section-space bg-mist"><div className="container-shell grid gap-5 lg:grid-cols-3">{[[HandCoins,copy.commercialTitle,copy.commercialBody],[FileCheck2,copy.transparencyTitle,copy.transparencyBody],[Scale,copy.scopeTitle,copy.scopeBody]].map(([Icon,title,body])=><article className="service-card" key={String(title)}><span className="icon-box"><Icon className="h-5 w-5"/></span><h2 className="mt-5 text-xl font-black text-navy">{String(title)}</h2><p className="mt-3 leading-7 text-slate">{String(body)}</p></article>)}</div></section></>;
}
