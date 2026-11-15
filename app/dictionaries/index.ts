import type { Locale } from "../lib/i18n";
import type { Dictionary } from "./nl";

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  nl: () => import("./nl").then((m) => m.default),
  en: () => import("./en").then((m) => m.default),
  fr: () => import("./fr").then((m) => m.default),
  de: () => import("./de").then((m) => m.default),
  zh: () => import("./zh").then((m) => m.default),
};

export type { Dictionary };

export const getDictionary = (locale: Locale) => dictionaries[locale]();
