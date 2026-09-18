// Language: TypeScript + JSX (TSX) | Purpose: Sends procurement requests through WhatsApp or Formspree.
import { useState, type FormEvent } from "react";
import { Mail, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { createWhatsAppUrl } from "@/config/company";
import type { Locale } from "@/types/site";
import { siteContent } from "@/content/site-content";

type SubmissionState = "idle" | "sending" | "success" | "error" | "not-configured";

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = siteContent[locale].contact;
  const [submissionState, setSubmissionState] = useState<SubmissionState>("idle");

  /** Converts the completed form fields into a readable WhatsApp message. */
  function buildMessage(form: HTMLFormElement) {
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || "—").trim() || "—";

    return locale === "pt"
      ? `PEDIDO DE PROCUREMENT — AoTech Solutions\n\nNome: ${value("name")}\nEmail: ${value("email")}\nEmpresa: ${value("company")}\nMateriais / referências: ${value("materials")}\nQuantidades: ${value("quantity")}\nDestino: ${value("destination")}\nPrazo: ${value("deadline")}`
      : `PROCUREMENT REQUEST — AoTech Solutions\n\nName: ${value("name")}\nEmail: ${value("email")}\nCompany: ${value("company")}\nMaterials / references: ${value("materials")}\nQuantities: ${value("quantity")}\nDestination: ${value("destination")}\nRequired date: ${value("deadline")}`;
  }

  /** Opens WhatsApp or securely submits the form to the configured Formspree endpoint. */
  async function send(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
    const channel = submitter?.value === "email" ? "email" : "whatsapp";

    if (channel === "whatsapp") {
      window.open(createWhatsAppUrl(buildMessage(form)), "_blank", "noopener,noreferrer");
      return;
    }

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
    if (!endpoint) {
      setSubmissionState("not-configured");
      return;
    }

    setSubmissionState("sending");
    const data = new FormData(form);
    data.append("_subject", locale === "pt" ? "Novo pedido de procurement" : "New procurement request");
    data.append("language", locale === "pt" ? "Português" : "English");

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!response.ok) throw new Error("Form submission failed");

      form.reset();
      setSubmissionState("success");
    } catch {
      setSubmissionState("error");
    }
  }

  const statusMessage = {
    idle: "",
    sending: locale === "pt" ? "A enviar o pedido…" : "Sending your request…",
    success: locale === "pt"
      ? "Pedido enviado com sucesso. A AoTech Solutions entrará em contacto consigo."
      : "Request sent successfully. AoTech Solutions will contact you.",
    error: locale === "pt"
      ? "Não foi possível enviar o pedido. Tente novamente ou utilize o WhatsApp."
      : "The request could not be sent. Please try again or use WhatsApp.",
    "not-configured": locale === "pt"
      ? "O envio por email ainda não está configurado. Utilize o WhatsApp."
      : "Email submission is not configured yet. Please use WhatsApp.",
  }[submissionState];

  return (
    <form
      className="border border-line bg-white p-6 shadow-[0_18px_45px_rgba(3,31,61,.06)] md:p-9"
      onSubmit={send}
    >
      <h2 className="text-2xl font-black text-navy">{copy.formTitle}</h2>
      <p className="mt-3 leading-7 text-slate">{copy.formIntro}</p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="form-label">
          {copy.name}
          <input className="form-control" name="name" autoComplete="name" required />
        </label>

        <label className="form-label">
          {copy.email}
          <input className="form-control" name="email" type="email" autoComplete="email" required />
        </label>

        <label className="form-label sm:col-span-2">
          {copy.company} <span className="font-normal text-slate">({copy.optional})</span>
          <input className="form-control" name="company" autoComplete="organization" />
        </label>

        <label className="form-label sm:col-span-2">
          {copy.materials}
          <textarea className="form-control" name="materials" required />
        </label>

        <label className="form-label">
          {copy.quantity}
          <input className="form-control" name="quantity" required />
        </label>

        <label className="form-label">
          {copy.destination}
          <input className="form-control" name="destination" placeholder="Luanda" required />
        </label>

        <label className="form-label sm:col-span-2">
          {copy.deadline} <span className="font-normal text-slate">({copy.optional})</span>
          <input className="form-control" name="deadline" />
        </label>
      </div>

      <div className="mt-7 flex flex-wrap gap-3">
        <button className="button button-primary" type="submit" name="channel" value="whatsapp">
          <WhatsAppIcon className="h-5 w-5" />
          {copy.sendWhatsapp}
        </button>

        <button
          className="button button-blue"
          type="submit"
          name="channel"
          value="email"
          disabled={submissionState === "sending"}
        >
          <Mail className="h-5 w-5" />
          {submissionState === "sending" ? copy.sending : copy.sendEmail}
        </button>
      </div>

      {statusMessage && (
        <p
          className={`mt-5 rounded-xl px-4 py-3 text-sm font-semibold ${
            submissionState === "success"
              ? "bg-emerald-50 text-emerald-800"
              : submissionState === "sending"
                ? "bg-blue-50 text-blue"
                : "bg-red-50 text-red-700"
          }`}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      )}

      <p className="mt-6 flex items-start gap-2 text-sm leading-6 text-slate">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue" />
        {copy.privacy}
      </p>
    </form>
  );
}
