import type { MetadataRoute } from "next";
import { htmlLang, localePath, locales } from "./lib/i18n";
import { SITE_URL } from "./lib/site";

const url = (path: string) => (path === "/" ? SITE_URL : `${SITE_URL}${path}`);

export default function sitemap(): MetadataRoute.Sitemap {
  const languages = Object.fromEntries(
    locales.map((l) => [htmlLang[l], url(localePath(l))]),
  );

  return locales.map((locale) => ({
    url: url(localePath(locale)),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: locale === "nl" ? 1 : 0.8,
    alternates: { languages },
  }));
}
