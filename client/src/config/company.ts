// Language: TypeScript | Purpose: Single source of truth for company details and public links.

export const company = {
  name: "AoTech Solutions",
  taglinePt: "Uma ligação prática entre a procura e o fornecimento.",
  taglineEn: "A practical link between demand and supply.",
  email: "bachisumbo@gmail.com",
  whatsapp: {
    display: "+27 84 284 2365",
    international: "27842842365",
  },
  angolaPhone: {
    display: "+244 956 525 511",
    href: "+244956525511",
  },
  documents: {
    portfolioPt: "/documents/AoTech-Solutions-Portfolio-PT.pdf",
    portfolioEn: "/documents/AoTech-Solutions-Portfolio-EN.pdf",
  },
} as const;

/** Builds a safe WhatsApp deep-link without exposing credentials or using an API. */
export function createWhatsAppUrl(message: string): string {
  return `https://wa.me/${company.whatsapp.international}?text=${encodeURIComponent(message)}`;
}

/** Opens whichever email application the visitor has configured on the device. */
export function createEmailUrl(subject: string, body: string): string {
  return `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

/** Opens Gmail in the browser with the recipient, subject and message prepared. */
export function createGmailUrl(subject: string, body: string): string {
  const params = new URLSearchParams({
    view: "cm",
    fs: "1",
    to: company.email,
    su: subject,
    body,
  });

  return `https://mail.google.com/mail/?${params.toString()}`;
}
