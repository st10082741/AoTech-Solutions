// Language: TypeScript + JSX (TSX) | Purpose: Localised overview of AoTech procurement services.
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ClipboardList,
  FileCheck2,
  PackageSearch,
  Search,
  ShoppingCart,
  SlidersHorizontal,
  Truck,
  Waypoints,
} from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/types/site";

const icons = [
  ClipboardList,
  Search,
  SlidersHorizontal,
  FileCheck2,
  PackageSearch,
  ShoppingCart,
  Truck,
  Waypoints,
];
export function ServicesPage({ locale }: { locale: Locale }) {
  const content = siteContent[locale];
  const copy = content.services;
  return (
    <>
      <PageHero eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />
      <section className="section-space">
        <div className="container-shell grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {copy.items.map((item, index) => {
            const Icon = icons[index];
            return (
              <article className="service-card" key={item.title}>
                <span className="icon-box">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-xl font-black text-navy">
                  {item.title}
                </h2>
                <p className="mt-3 leading-7 text-slate">{item.description}</p>
              </article>
            );
          })}
        </div>
      </section>
      <section className="pb-24">
        <div className="container-shell rounded-[32px] bg-deep-navy p-9 text-white md:p-14">
          <h2 className="text-3xl font-black">{copy.notSureTitle}</h2>
          <p className="mt-4 max-w-2xl text-lg leading-8 text-white/70">
            {copy.notSureBody}
          </p>
          <Link className="button button-primary mt-7" to="/contact">
            {content.common.requestQuote}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
