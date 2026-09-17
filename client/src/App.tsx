// Language: TypeScript + JSX (TSX) | Purpose: Defines the simple routes, shared layout and bilingual state.
import { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsAppFloat } from "@/components/layout/whatsapp-float";
import { siteContent } from "@/content/site-content";
import type { Locale } from "@/types/site";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ProcurementPage } from "@/pages/ProcurementPage";
import { ContactPage } from "@/pages/ContactPage";

/** Keeps navigation natural by returning visitors to the top of every new page. */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This effect intentionally returns nothing.
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
export default function App() {
  // The chosen language is remembered locally; no account or database is needed.
  const [locale, setLocale] = useState<Locale>(() =>
    localStorage.getItem("aotech-language") === "en" ? "en" : "pt",
  );
  const content = siteContent[locale];

  function changeLanguage(nextLocale: Locale) {
    setLocale(nextLocale);
    localStorage.setItem("aotech-language", nextLocale);
    document.documentElement.lang = nextLocale;
  }

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return (
    <>
      <a href="#main-content" className="skip-link">
        {locale === "pt" ? "Saltar para o conteúdo" : "Skip to content"}
      </a>
      <SiteHeader
        locale={locale}
        content={content}
        onLanguageChange={changeLanguage}
      />
      <ScrollToTop />
      <main id="main-content">
        {/* Each URL maps directly to one clearly named file in src/pages. */}
        <Routes>
          <Route path="/" element={<HomePage locale={locale} />} />
          <Route path="/about" element={<AboutPage locale={locale} />} />
          <Route path="/services" element={<ServicesPage locale={locale} />} />
          <Route
            path="/procurement"
            element={<ProcurementPage locale={locale} />}
          />
          <Route path="/contact" element={<ContactPage locale={locale} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <SiteFooter locale={locale} content={content} />
      <WhatsAppFloat locale={locale} />
    </>
  );
}
