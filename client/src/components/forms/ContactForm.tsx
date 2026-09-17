// Language: TypeScript + JSX (TSX)
// Purpose: Displays the AoTech contact form and sends procurement requests
// through either WhatsApp or Formspree.

/*
 * CONTACT FORM WORKFLOW
 *
 * WhatsApp button:
 * 1. Reads the completed fields.
 * 2. Creates a formatted procurement message.
 * 3. Opens WhatsApp with the message already prepared.
 *
 * Email button:
 * 1. Reads the completed fields.
 * 2. Sends the information directly to Formspree.
 * 3. Formspree forwards the enquiry to the verified AoTech email.
 * 4. Displays a success or error message without leaving the website.
 */

import { useState, type FormEvent } from "react";
import { Mail, ShieldCheck } from "lucide-react";
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon";
import { createWhatsAppUrl } from "@/config/company";
import type { Locale } from "@/types/site";
import { siteContent } from "@/content/site-content";

/*
 * These values describe the current state of an email submission.
 *
 * idle: Nothing is currently happening.
 * sending: The request is being sent to Formspree.
 * success: Formspree received the request.
 * error: The request could not be sent.
 * not-configured: The Formspree endpoint is missing.
 */
type SubmissionStatus =
  | "idle"
  | "sending"
  | "success"
  | "error"
  | "not-configured";

export function ContactForm({ locale }: { locale: Locale }) {
  /*
   * Loads the Portuguese or English contact-page text according
   * to the language currently selected on the website.
   */
  const copy = siteContent[locale].contact;

  /*
   * Stores the current Formspree submission status.
   * Updating this state automatically updates the button and messages.
   */
  const [submissionStatus, setSubmissionStatus] =
    useState<SubmissionStatus>("idle");

  /**
   * Reads one field from the submitted HTML form.
   *
   * The "—" character is used when an optional field is empty,
   * ensuring the final message remains readable.
   */
  function getFieldValue(form: HTMLFormElement, fieldName: string) {
    const data = new FormData(form);

    return String(data.get(fieldName) || "—").trim() || "—";
  }

  /**
   * Converts the completed form into a professional message.
   *
   * This formatted version is used for WhatsApp and is also included
   * in the Formspree submission for easier reading.
   */
  function buildMessage(form: HTMLFormElement) {
    // Short helper prevents repeating getFieldValue throughout the template.
    const value = (fieldName: string) => getFieldValue(form, fieldName);

    // Return the message in the currently selected website language.
    return locale === "pt"
      ? `PEDIDO DE PROCUREMENT — AoTech Solutions

Nome: ${value("name")}
Email: ${value("email")}
Empresa: ${value("company")}
Materiais / referências: ${value("materials")}
Quantidades: ${value("quantity")}
Destino: ${value("destination")}
Prazo: ${value("deadline")}`
      : `PROCUREMENT REQUEST — AoTech Solutions

Name: ${value("name")}
Email: ${value("email")}
Company: ${value("company")}
Materials / references: ${value("materials")}
Quantities: ${value("quantity")}
Destination: ${value("destination")}
Required date: ${value("deadline")}`;
  }

  /**
   * Handles both form buttons.
   *
   * The button value tells the function whether the visitor selected
   * WhatsApp or email.
   */
  async function send(event: FormEvent<HTMLFormElement>) {
    // Prevent the browser from refreshing after the form is submitted.
    event.preventDefault();

    // Store the form element so it can be read and reset later.
    const form = event.currentTarget;

    /*
     * nativeEvent.submitter identifies which submit button was clicked.
     * Both buttons belong to the same form but perform different actions.
     */
    const submitter = (event.nativeEvent as SubmitEvent)
      .submitter as HTMLButtonElement | null;

    const channel = submitter?.value === "email" ? "email" : "whatsapp";

    // Create the complete readable request from the visitor's information.
    const message = buildMessage(form);

    // Clear any previous success or error message.
    setSubmissionStatus("idle");

    /*
     * WHATSAPP SUBMISSION
     *
     * WhatsApp opens in a separate browser tab with the request
     * already inserted into the message field.
     */
    if (channel === "whatsapp") {
      const whatsappUrl = createWhatsAppUrl(message);

      window.open(whatsappUrl, "_blank", "noopener,noreferrer");

      // Stop here because this is not a Formspree submission.
      return;
    }

    /*
     * EMAIL SUBMISSION
     *
     * Vite loads this endpoint from:
     * client/.env.local
     *
     * Expected environment variable:
     * VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mppwzbok
     */
    const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    // Display a configuration warning when the endpoint cannot be found.
    if (!formspreeEndpoint) {
      setSubmissionStatus("not-configured");
      return;
    }

    // This becomes the subject of the email received by AoTech.
    const subject =
      locale === "pt"
        ? "Novo pedido de procurement — AoTech Solutions"
        : "New procurement request — AoTech Solutions";

    // Disable the buttons and display "Sending..." while awaiting Formspree.
    setSubmissionStatus("sending");

    try {
      /*
       * Send the form information to Formspree as JSON.
       *
       * The visitor's email is included so AoTech can respond
       * directly to the person who submitted the enquiry.
       */
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: getFieldValue(form, "name"),
          email: getFieldValue(form, "email"),
          company: getFieldValue(form, "company"),
          materials: getFieldValue(form, "materials"),
          quantity: getFieldValue(form, "quantity"),
          destination: getFieldValue(form, "destination"),
          deadline: getFieldValue(form, "deadline"),

          // A formatted copy makes the received request easier to read.
          message,

          // Helps identify the language used by the visitor.
          language: locale === "pt" ? "Português" : "English",

          // Formspree uses this value as the received email subject.
          _subject: subject,
        }),
      });

      // Any unsuccessful HTTP response is treated as an error.
      if (!response.ok) {
        throw new Error("Formspree rejected the submission.");
      }

      /*
       * Clear the form only after Formspree confirms that the
       * submission was successfully received.
       */
      form.reset();

      // Display the success confirmation to the visitor.
      setSubmissionStatus("success");
    } catch (error) {
      /*
       * Keep the form fields intact when submission fails so the
       * visitor does not need to enter everything again.
       */
      console.error("Unable to submit the contact form:", error);

      setSubmissionStatus("error");
    }
  }

  return (
    <form
      className="rounded-[28px] border border-line bg-white p-6 shadow-[0_25px_70px_rgba(3,31,61,.08)] md:p-9"
      onSubmit={send}
    >
      {/* Form heading and introductory description */}
      <h2 className="text-2xl font-black text-navy">{copy.formTitle}</h2>

      <p className="mt-3 leading-7 text-slate">{copy.formIntro}</p>

      {/* Main contact and procurement fields */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {/* Visitor's name */}
        <label className="form-label">
          {copy.name}

          <input
            className="form-control"
            name="name"
            autoComplete="name"
            required
          />
        </label>

        {/*
         * Visitor's email.
         * Formspree includes this address in the received submission,
         * allowing AoTech to reply to the visitor.
         */}
        <label className="form-label">
          Email
          <input
            className="form-control"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </label>

        {/* Company is optional because individuals may also request a quote */}
        <label className="form-label sm:col-span-2">
          {copy.company}{" "}
          <span className="font-normal text-slate">({copy.optional})</span>
          <input
            className="form-control"
            name="company"
            autoComplete="organization"
          />
        </label>

        {/* Product names, references or technical specifications */}
        <label className="form-label sm:col-span-2">
          {copy.materials}

          <textarea className="form-control" name="materials" required />
        </label>

        {/* Requested quantities */}
        <label className="form-label">
          {copy.quantity}

          <input className="form-control" name="quantity" required />
        </label>

        {/* Final delivery destination */}
        <label className="form-label">
          {copy.destination}

          <input
            className="form-control"
            name="destination"
            placeholder="Luanda"
            required
          />
        </label>

        {/* Requested delivery date or deadline */}
        <label className="form-label sm:col-span-2">
          {copy.deadline}{" "}
          <span className="font-normal text-slate">({copy.optional})</span>
          <input className="form-control" name="deadline" />
        </label>
      </div>

      {/* Submission buttons */}
      <div className="mt-7 flex flex-wrap gap-3">
        {/* Opens WhatsApp with a prefilled procurement request */}
        <button
          className="button button-primary"
          type="submit"
          name="channel"
          value="whatsapp"
          disabled={submissionStatus === "sending"}
        >
          <WhatsAppIcon className="h-5 w-5" />
          {copy.sendWhatsapp}
        </button>

        {/* Sends the information directly through Formspree */}
        <button
          className="button button-blue"
          type="submit"
          name="channel"
          value="email"
          disabled={submissionStatus === "sending"}
        >
          <Mail className="h-5 w-5" />

          {submissionStatus === "sending"
            ? locale === "pt"
              ? "A enviar..."
              : "Sending..."
            : copy.sendEmail}
        </button>
      </div>

      {/* Confirmation displayed after a successful submission */}
      {submissionStatus === "success" && (
        <p
          className="mt-5 font-semibold text-green-700"
          role="status"
          aria-live="polite"
        >
          {locale === "pt"
            ? "Pedido enviado com sucesso. Entraremos em contacto consigo."
            : "Request sent successfully. We will contact you shortly."}
        </p>
      )}

      {/* Error displayed if Formspree cannot receive the submission */}
      {submissionStatus === "error" && (
        <p
          className="mt-5 font-semibold text-red-700"
          role="alert"
          aria-live="assertive"
        >
          {locale === "pt"
            ? "Não foi possível enviar o pedido. Tente novamente ou utilize o WhatsApp."
            : "The request could not be sent. Please try again or use WhatsApp."}
        </p>
      )}

      {/* Warning displayed when VITE_FORMSPREE_ENDPOINT is unavailable */}
      {submissionStatus === "not-configured" && (
        <p
          className="mt-5 font-semibold text-red-700"
          role="alert"
          aria-live="assertive"
        >
          {locale === "pt"
            ? "O serviço de email ainda não está configurado."
            : "The email service has not been configured yet."}
        </p>
      )}

      {/* Accurate privacy notice for Formspree processing */}
      <p className="mt-6 flex items-start gap-2 text-sm leading-6 text-slate">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue" />

        {locale === "pt"
          ? "Os seus dados são processados com segurança e utilizados exclusivamente para responder ao seu pedido."
          : "Your details are processed securely and used only to respond to your enquiry."}
      </p>
    </form>
  );
}
