import {
  SITE_DESCRIPTION,
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_URL,
} from "../lib/site";

export function JsonLd() {
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
            availableLanguage: ["Dutch", "English"],
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#organization` },
        inLanguage: "nl-NL",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#service`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}/web-app-manifest-512x512.png`,
        description: SITE_DESCRIPTION,
        email: SITE_EMAIL,
        telephone: SITE_PHONE,
        areaServed: {
          "@type": "Country",
          name: "Netherlands",
        },
        serviceType: [
          "AI software development",
          "Custom software",
          "Web applications",
          "Product development",
        ],
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
