import {
  htmlLang,
  localeNames,
  localeShort,
  locales,
  type Locale,
} from "../lib/i18n";

type LanguageSwitcherProps = {
  current: Locale;
  label: string;
};

/**
 * No-JS dropdown. Every option links to /{locale}; the proxy stores the choice
 * in a cookie and sends Dutch back to the root URL.
 */
export function LanguageSwitcher({ current, label }: LanguageSwitcherProps) {
  return (
    <details className="lang-switcher relative shrink-0">
      <summary
        className="flex min-h-9 cursor-pointer list-none items-center gap-1.5 whitespace-nowrap px-1 py-2 text-xs font-semibold uppercase tracking-[0.08em] text-white/75 transition-colors hover:text-white"
        aria-label={`${label}: ${localeNames[current]}`}
      >
        <svg
          aria-hidden
          viewBox="0 0 24 24"
          width={16}
          height={16}
          className="shrink-0"
          style={{ width: 16, height: 16 }}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3z" />
        </svg>
        <span>{localeShort[current]}</span>
      </summary>
      <ul className="absolute right-0 top-full z-40 mt-2 min-w-40 border border-white/15 bg-ink py-1 shadow-xl">
        {locales.map((locale) => (
          <li key={locale}>
            <a
              href={`/${locale}`}
              hrefLang={htmlLang[locale]}
              lang={htmlLang[locale]}
              aria-current={locale === current ? "true" : undefined}
              className={`flex items-center justify-between gap-4 whitespace-nowrap px-4 py-2.5 text-sm normal-case tracking-normal transition-colors hover:bg-white/10 ${
                locale === current ? "text-white" : "text-white/70"
              }`}
            >
              {localeNames[locale]}
              {locale === current ? <span aria-hidden>✓</span> : null}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
