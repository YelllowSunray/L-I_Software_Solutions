import type { Dictionary } from "../dictionaries";
import { htmlLang, localePath, type Locale } from "../lib/i18n";
import {
  SERVICE_SLUGS,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
} from "../lib/site";

type JsonLdProps = {
  lang: Locale;
  dict: Dictionary;
};

export function JsonLd({ lang, dict }: JsonLdProps) {
  const pageUrl = `${SITE_URL}${localePath(lang)}`;

  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        email: SITE_EMAIL,
        telephone: SITE_PHONE,
        logo: `${SITE_URL}/web-app-manifest-512x512.png`,
        image: `${SITE_URL}/web-app-manifest-512x512.png`,
        sameAs: [],
        contactPoint: [
          {
            "@type": "ContactPoint",
            contactType: "sales",
            email: SITE_EMAIL,
            telephone: SITE_PHONE,
            availableLanguage: ["Dutch", "English", "French", "German", "Chinese"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: ["nl-NL", "en", "fr", "de", "zh-Hans"],
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: SITE_NAME,
        url: pageUrl,
        image: `${SITE_URL}/web-app-manifest-512x512.png`,
        description: dict.meta.description,
        email: SITE_EMAIL,
        telephone: SITE_PHONE,
        inLanguage: htmlLang[lang],
        areaServed: {
          "@type": "Country",
          name: "Netherlands",
        },
        serviceType: dict.services.items.map((item) => item.title),
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: dict.services.label,
          itemListElement: dict.services.items.map((item, index) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: item.title,
              description: item.copy,
              url: `${pageUrl}#${SERVICE_SLUGS[index]}`,
              provider: { "@id": `${SITE_URL}/#organization` },
            },
          })),
        },
        provider: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
