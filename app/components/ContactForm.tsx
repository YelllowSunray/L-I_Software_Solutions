"use client";

import { useForm, ValidationError } from "@formspree/react";
import type { CSSProperties } from "react";
import type { Dictionary } from "../dictionaries";
import nl from "../dictionaries/nl";
import type { Locale } from "../lib/i18n";

const formId = process.env.NEXT_PUBLIC_FORMSPREE_ID;

const fieldClass =
  "field-input w-full border border-[var(--line)] bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-teal";

type ContactFormProps = {
  lang: Locale;
  t: Dictionary["form"];
};

/** Option values stay Dutch so submissions are consistent in the inbox. */
const serviceValues = nl.form.serviceOptions;

export function ContactForm({ lang, t }: ContactFormProps) {
  const [state, handleSubmit] = useForm(formId || "formspree-missing");

  if (!formId) {
    return (
      <p
        className="text-sm text-slate"
        data-reveal="panel"
        style={{ "--reveal-delay": "120ms" } as CSSProperties}
      >
        {t.notConfigured}{" "}
        <code className="text-ink">NEXT_PUBLIC_FORMSPREE_ID</code>{" "}
        {t.notConfiguredIn}{" "}
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
          {t.sentLabel}
        </p>
        <p className="font-display text-2xl text-ink sm:text-3xl">
          {t.sentTitle}
        </p>
        <p className="max-w-md text-base leading-relaxed text-slate">
          {t.sentCopy}
        </p>
        <p className="text-sm text-slate">
          {t.direct}{" "}
          <a
            className="font-medium text-ink underline decoration-teal/50 underline-offset-4 hover:decoration-teal"
            href="https://wa.me/31625469412"
            target="_blank"
            rel="noopener noreferrer"
          >
            +31 625469412
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
      <input
        type="hidden"
        name="_subject"
        value={`Nieuwe projectbrief — L&I (${lang.toUpperCase()})`}
      />
      <input type="hidden" name="taal" value={lang} />
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
        <span className="mb-2 block text-sm font-medium text-ink">{t.name}</span>
        <input
          id="naam"
          name="naam"
          required
          autoComplete="name"
          className={fieldClass}
          placeholder={t.namePlaceholder}
        />
        <ValidationError
          prefix={t.name}
          field="naam"
          errors={state.errors}
          className="mt-1 block text-sm text-red-600"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">
          {t.email}
        </span>
        <input
          id="email"
          type="email"
          name="email"
          required
          autoComplete="email"
          inputMode="email"
          className={fieldClass}
          placeholder={t.emailPlaceholder}
        />
        <ValidationError
          prefix={t.email}
          field="email"
          errors={state.errors}
          className="mt-1 block text-sm text-red-600"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">
          {t.phone}
        </span>
        <input
          id="telefoon"
          type="tel"
          name="telefoon"
          required
          autoComplete="tel"
          inputMode="tel"
          className={fieldClass}
          placeholder={t.phonePlaceholder}
        />
        <ValidationError
          prefix={t.phone}
          field="telefoon"
          errors={state.errors}
          className="mt-1 block text-sm text-red-600"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">
          {t.service}
        </span>
        <select
          id="dienst"
          name="dienst"
          defaultValue=""
          className={`${fieldClass} appearance-none`}
        >
          <option value="" disabled>
            {t.servicePlaceholder}
          </option>
          {t.serviceOptions.map((option, index) => (
            <option key={serviceValues[index]} value={serviceValues[index]}>
              {option}
            </option>
          ))}
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-sm font-medium text-ink">
          {t.message}
        </span>
        <textarea
          id="bericht"
          name="bericht"
          required
          rows={4}
          className={`${fieldClass} resize-y`}
          placeholder={t.messagePlaceholder}
        />
        <ValidationError
          prefix={t.message}
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
        {state.submitting ? t.submitting : t.submit}
      </button>

      <ValidationError
        errors={state.errors}
        className="block text-sm text-red-600"
      />

      <p className="text-sm text-slate">
        {t.orMail}{" "}
        <a
          className="break-all font-medium text-ink underline decoration-teal/50 underline-offset-4 hover:decoration-teal"
          href="mailto:info@lenni.nl"
        >
          info@lenni.nl
        </a>
        {" · "}
        WhatsApp{" "}
        <a
          className="font-medium text-ink underline decoration-teal/50 underline-offset-4 hover:decoration-teal"
          href="https://wa.me/31625469412"
          target="_blank"
          rel="noopener noreferrer"
        >
          +31 625469412
        </a>
      </p>
    </form>
  );
}
