// Language: TypeScript + JSX (TSX) | Purpose: Persistent mobile-friendly WhatsApp contact shortcut.
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { createWhatsAppUrl } from "@/config/company";
import type { Locale } from "@/types/site";

export function WhatsAppFloat({ locale }: { locale: Locale }) {
  const message = locale === "pt"
    ? "Olá, gostaria de solicitar informações sobre os serviços de procurement da AoTech Solutions."
    : "Hello, I would like information about AoTech Solutions procurement services.";

  return (
    <a className="whatsapp-float" href={createWhatsAppUrl(message)} target="_blank" rel="noreferrer" aria-label="WhatsApp AoTech Solutions">
      <WhatsAppIcon className="h-7 w-7" />
      <span>WhatsApp</span>
    </a>
  );
}

