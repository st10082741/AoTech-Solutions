// Language: TypeScript | Purpose: Shared website types used across pages and content.

export type Locale = "pt" | "en";

export type NavItem = {
  label: string;
  href: string;
};

export type ServiceItem = {
  title: string;
  description: string;
};

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export type SiteContent = {
  localeName: string;
  meta: { title: string; description: string };
  nav: {
    items: NavItem[];
    quote: string;
    menu: string;
    language: string;
  };
  common: {
    whatsapp: string;
    email: string;
    calls: string;
    learnMore: string;
    requestQuote: string;
    download: string;
  };
  home: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    trust: string[];
    servicesEyebrow: string;
    servicesTitle: string;
    servicesIntro: string;
    services: ServiceItem[];
    processEyebrow: string;
    processTitle: string;
    processIntro: string;
    process: ProcessStep[];
    corridorEyebrow: string;
    corridorTitle: string;
    corridorBody: string;
    corridorPoints: string[];
    sectorsEyebrow: string;
    sectorsTitle: string;
    sectors: string[];
    paymentEyebrow: string;
    paymentTitle: string;
    paymentBody: string;
    paymentNote: string;
    documentsEyebrow: string;
    documentsTitle: string;
    documentsIntro: string;
    finalTitle: string;
    finalBody: string;
  };
  about: {
    eyebrow: string;
    title: string;
    intro: string;
    storyTitle: string;
    storyBody: string;
    purposeTitle: string;
    purposeBody: string;
    missionTitle: string;
    missionBody: string;
    visionTitle: string;
    visionBody: string;
    valuesTitle: string;
    values: ServiceItem[];
  };
  services: {
    eyebrow: string;
    title: string;
    intro: string;
    items: ServiceItem[];
    notSureTitle: string;
    notSureBody: string;
  };
  procurement: {
    eyebrow: string;
    title: string;
    intro: string;
    requirementTitle: string;
    requirementItems: string[];
    processTitle: string;
    process: ProcessStep[];
    commercialTitle: string;
    commercialBody: string;
    transparencyTitle: string;
    transparencyBody: string;
    scopeTitle: string;
    scopeBody: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    formTitle: string;
    formIntro: string;
    name: string;
    company: string;
    materials: string;
    quantity: string;
    destination: string;
    deadline: string;
    optional: string;
    sendWhatsapp: string;
    sendEmail: string;
    privacy: string;
    directTitle: string;
    saLabel: string;
    aoLabel: string;
    emailLabel: string;
  };
  footer: {
    summary: string;
    navigation: string;
    contact: string;
    legal: string;
  };
};
