import { NextResponse, type NextRequest } from "next/server";
import {
  defaultLocale,
  hasLocale,
  LOCALE_COOKIE,
  type Locale,
} from "./app/lib/i18n";

const ONE_YEAR = 60 * 60 * 24 * 365;

/** Pick the best supported locale from the Accept-Language header. */
function negotiate(header: string | null): Locale {
  if (!header) return defaultLocale;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, ...rest] = part.trim().split(";");
      const q = rest.find((p) => p.trim().startsWith("q="));
      return { tag: tag.toLowerCase(), q: q ? Number(q.split("=")[1]) : 1 };
    })
    .filter((entry) => entry.tag && !Number.isNaN(entry.q))
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    if (hasLocale(base)) return base;
  }
  return defaultLocale;
}

function remember(response: NextResponse, locale: Locale) {
  response.cookies.set(LOCALE_COOKIE, locale, {
    path: "/",
    maxAge: ONE_YEAR,
    sameSite: "lax",
  });
  return response;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const segment = pathname.split("/")[1] ?? "";

  // Explicit locale in the URL (e.g. via the language switcher).
  if (hasLocale(segment)) {
    if (segment === defaultLocale) {
      // Dutch lives at the root: /nl/... -> /...
      const url = request.nextUrl.clone();
      url.pathname = pathname.slice(`/${defaultLocale}`.length) || "/";
      return remember(NextResponse.redirect(url), defaultLocale);
    }
    return remember(NextResponse.next(), segment);
  }

  // No locale in the URL: use the saved choice, else the browser language.
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  const locale =
    saved && hasLocale(saved)
      ? saved
      : negotiate(request.headers.get("accept-language"));

  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;

  if (locale === defaultLocale) {
    return NextResponse.rewrite(url);
  }
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals, API routes and files with an extension
  // (favicon, robots.txt, sitemap.xml, images, manifest…).
  matcher: ["/((?!_next|api|.*\\..*).*)"],
};
