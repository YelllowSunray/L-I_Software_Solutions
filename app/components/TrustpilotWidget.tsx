import Script from "next/script";
import type { Locale } from "../lib/i18n";
import { SITE_URL } from "../lib/site";

/**
 * Trustpilot TrustBox ("Review Collector"). Renders nothing until
 * NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID is set — find the ID in
 * Trustpilot Business → Integrations → TrustBox.
 */
const businessUnitId = process.env.NEXT_PUBLIC_TRUSTPILOT_BUSINESS_UNIT_ID;
const templateId =
  process.env.NEXT_PUBLIC_TRUSTPILOT_TEMPLATE_ID || "56278e9abfbbba0bdcd568bc";

const domain = new URL(SITE_URL).hostname.replace(/^www\./, "");
export const TRUSTPILOT_URL = `https://www.trustpilot.com/review/${domain}`;
export const trustpilotEnabled = Boolean(businessUnitId);

// Trustpilot has no Chinese widget locale; fall back to English.
const tpLocale: Record<Locale, string> = {
  nl: "nl-NL",
  en: "en-US",
  fr: "fr-FR",
  de: "de-DE",
  zh: "en-US",
};

type TrustpilotWidgetProps = {
  lang: Locale;
  label: string;
};

export function TrustpilotWidget({ lang, label }: TrustpilotWidgetProps) {
  if (!businessUnitId) return null;

  return (
    <div className="mt-8 max-w-md">
      <Script
        src="https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
        strategy="afterInteractive"
      />
      <div
        className="trustpilot-widget"
        data-locale={tpLocale[lang]}
        data-template-id={templateId}
        data-businessunit-id={businessUnitId}
        data-style-height="52px"
        data-style-width="100%"
        data-token=""
      >
        <a href={TRUSTPILOT_URL} target="_blank" rel="noopener noreferrer">
          {label}
        </a>
      </div>
    </div>
  );
}
