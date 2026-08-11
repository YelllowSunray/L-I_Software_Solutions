"use client";

import { useForm, ValidationError } from "@formspree/react";
import type { CSSProperties } from "react";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const fieldClass =
  "field-input w-full border border-[var(--line)] bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-teal";

export function ContactForm() {
  const [state, handleSubmit] = useForm(formId || "formspree-missing");

  if (!formId) {
    return (
      <p
        className="text-sm text-slate"
        data-reveal="panel"
        style={{ "--reveal-delay": "120ms" } as CSSProperties}
      >
        Formulier is nog niet gekoppeld. Zet{" "}
        <code className="text-ink">NEXT_PUBLIC_FORMSPREE_ID</code> in{" "}
        <code className="text-ink">.env.local</code>.
      </p>
    );
  }

  if (state.succeeded) {
    return (
      <div
        className="contact-success is-inview space-y-4"
        role="status"
        aria-live="polite"
      >
        <p className="section-label text-sm font-medium uppercase tracking-[0.22em] text-teal-deep">
          Verstuurd
        </p>
        <p className="font-display text-2xl text-ink sm:text-3xl">
          Gelukt — je projectbrief is binnen.
        </p>
        <p className="max-w-md text-base leading-relaxed text-slate">
          Bedankt. We reageren zo snel mogelijk met scope, planning en wat we
          als eerste zouden bouwen.
        </p>
        <p className="text-sm text-slate">
          Liever direct? WhatsApp{" "}
          <a
            className="font-medium text-ink underline decoration-teal/50 underline-offset-4 hover:decoration-teal"
            href="https://wa.me/31687343078"
            target="_blank"
            rel="noopener noreferrer"
          >
            +31 687343078
          </a>
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={handleSubmit}
      data-reveal="panel"
      style={{ "--reveal-delay": "120ms" } as CSSProperties}
    >
      <input type="hidden" name="_subject" value="Nieuwe projectbrief — L&I" />
      {/* Honeypot */}
      <input
        type="text"
        name="_gotcha"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">Naam</span>
        <input
          id="naam"
          name="naam"
          required
          autoComplete="name"
          className={fieldClass}
          placeholder="Alex de Vries"
        />
        <ValidationError
          prefix="Naam"
          field="naam"
          errors={state.errors}
          className="mt-1 block text-sm text-red-600"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">
          Zakelijk e-mailadres
        </span>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          inputMode="email"
          className={fieldClass}
          placeholder="alex@bedrijf.nl"
        />
        <ValidationError
          prefix="E-mail"
          field="email"
          errors={state.errors}
          className="mt-1 block text-sm text-red-600"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">
          Telefoonnummer
        </span>
        <input
          id="telefoon"
          type="tel"
          name="telefoon"
          required
          autoComplete="tel"
          inputMode="tel"
          className={fieldClass}
          placeholder="+31 6 12 34 56 78"
        />
        <ValidationError
          prefix="Telefoon"
          field="telefoon"
          errors={state.errors}
          className="mt-1 block text-sm text-red-600"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">
          Het knelpunt
        </span>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={4}
          className={`${fieldClass} resize-y`}
          placeholder="We plannen diensten nog in spreadsheets en niemand vertrouwt de laatste versie…"
        />
        <ValidationError
          prefix="Bericht"
          field="bericht"
          errors={state.errors}
          className="mt-1 block text-sm text-red-600"
        />
      </label>

      <button
        type="submit"
        disabled={state.submitting}
        className="min-h-12 w-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-deep disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {state.submitting ? "Versturen…" : "Stuur projectbrief"}
      </button>

      <ValidationError
        errors={state.errors}
        className="block text-sm text-red-600"
      />

      <p className="text-sm text-slate">
        Of mail naar{" "}
        <a
          className="break-all font-medium text-ink underline decoration-teal/50 underline-offset-4 hover:decoration-teal"
          href="mailto:hello@landi.software"
        >
          hello@landi.software
        </a>
        {" · "}
        WhatsApp{" "}
        <a
          className="font-medium text-ink underline decoration-teal/50 underline-offset-4 hover:decoration-teal"
          href="https://wa.me/31687343078"
          target="_blank"
          rel="noopener noreferrer"
        >
          +31 687343078
        </a>
      </p>
    </form>
  );
}
