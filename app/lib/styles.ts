export const STYLE_IDS = ["atelier", "modern"] as const;

export type StyleId = (typeof STYLE_IDS)[number];

export const STYLES: {
  id: StyleId;
  label: string;
  blurb: string;
}[] = [
  {
    id: "atelier",
    label: "Atelier",
    blurb: "Huidige look — navy, teal, rustig",
  },
  {
    id: "modern",
    label: "Modern",
    blurb: "Cinematic — bold type, zwart-wit",
  },
];

export const DEFAULT_STYLE: StyleId = "modern";
export const STYLE_STORAGE_KEY = "li-ui-style";

export function isStyleId(value: string | null): value is StyleId {
  return STYLE_IDS.includes(value as StyleId);
}

/** Migrate legacy style id from localStorage. */
export function normalizeStyleId(value: string | null): StyleId {
  if (value === "celebration") return "modern";
  if (isStyleId(value)) return value;
  return DEFAULT_STYLE;
}
