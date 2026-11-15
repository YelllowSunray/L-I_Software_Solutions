export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") || "https://lenni.nl";

export const SITE_NAME = "L&I Software Solutions";

export const SITE_EMAIL = "info@lenni.nl";
export const SITE_PHONE = "+31625469412";
export const SITE_PHONE_DISPLAY = "+31 625469412";

/** Anchor ids for the three services, in the same order as the dictionaries. */
export const SERVICE_SLUGS = ["websites", "ai-agents", "ai-klantenservice"] as const;
