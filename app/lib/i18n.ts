export const locales = ["nl", "en", "fr", "de", "zh"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "nl";

export const LOCALE_COOKIE = "NEXT_LOCALE";

export const hasLocale = (value: string): value is Locale =>
  (locales as readonly string[]).includes(value);

/** Label shown in the language switcher (in the language itself). */
export const localeNames: Record<Locale, string> = {
  nl: "Nederlands",
  en: "English",
  fr: "Français",
  de: "Deutsch",
  zh: "中文",
};

/** Short code shown in the header. */
export const localeShort: Record<Locale, string> = {
  nl: "NL",
  en: "EN",
  fr: "FR",
  de: "DE",
  zh: "中文",
};

/** Value for <html lang> and hreflang. */
export const htmlLang: Record<Locale, string> = {
  nl: "nl-NL",
  en: "en",
  fr: "fr",
  de: "de",
  zh: "zh-Hans",
};

export const ogLocale: Record<Locale, string> = {
  nl: "nl_NL",
  en: "en_US",
  fr: "fr_FR",
  de: "de_DE",
  zh: "zh_CN",
};

/** Public path for a locale: Dutch lives at the root, others under /{locale}. */
export const localePath = (locale: Locale) =>
  locale === defaultLocale ? "/" : `/${locale}`;
