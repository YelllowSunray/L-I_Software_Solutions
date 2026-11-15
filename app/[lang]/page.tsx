import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { ContactForm } from "../components/ContactForm";
import { DisplayTitle } from "../components/DisplayTitle";
import { HeroProduct } from "../components/HeroProduct";
import { LanguageSwitcher } from "../components/LanguageSwitcher";
import { Logo } from "../components/Logo";
import { TrustpilotWidget } from "../components/TrustpilotWidget";
import { LogoMark } from "../components/LogoMark";
import { getDictionary } from "../dictionaries";
import { hasLocale } from "../lib/i18n";
import { SERVICE_SLUGS } from "../lib/site";

/** Language-independent project data; texts live in the dictionaries. */
const work = [
  { name: "Career OS", href: "https://career-os-three-coral.vercel.app/" },
  { name: "Entity_OS", href: "https://www.labentity.com/" },
  { name: "PRJCT 7 Cablepark", href: "https://prjct7-cablepark.vercel.app/" },
  { name: "Hi Taxi Hilversum", href: "https://hi-taxi-delta.vercel.app/" },
  { name: "Madhu Tattoo — AI Design", href: "https://madhutattoo.nl" },
  { name: "Sue's Tattoo Studio", href: "https://sujathascompass.com" },
  { name: "Study Center", href: "https://studycenter-liart.vercel.app" },
  {
    name: "Trading Academy Journal",
    href: "https://issam-trading-academy.vercel.app/",
  },
  { name: "Backpackers United", href: "https://www.backpackerunited.com" },
  { name: "Doeklus", href: "https://www.doeklus.nl" },
  { name: "Delicacies Europe", href: "https://www.delicacies.eu" },
];

/** Unsolicited redesign concepts for existing businesses — not clients. */
const concepts = [
  { name: "Barça", href: "https://barca-de-pijp.vercel.app" },
  { name: "Mangiamore", href: "https://mangiamore-neon.vercel.app" },
  { name: "Ortho Dordt", href: "https://orthodordt.vercel.app" },
  { name: "Clarius", href: "https://clarius-glazenwasserij.vercel.app" },
];

const reviewers = [
  { name: "Madhu", company: "Madhu Tattoo" },
  { name: "Lara Veldman", company: "Study Center" },
  { name: "Thomas de Boer", company: "Doeklus" },
];

const pad = (n: number) => String(n + 1).padStart(2, "0");

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = await getDictionary(lang);

  const services = t.services.items.map((item, i) => ({
    ...item,
    n: pad(i),
    slug: SERVICE_SLUGS[i],
  }));
  const workItems = work.map((item, i) => ({ ...item, ...t.work.items[i] }));
  const conceptItems = concepts.map((item, i) => ({
    ...item,
    type: t.concepts.types[i],
  }));
  const steps = t.process.steps.map((step, i) => ({ ...step, n: pad(i) }));
  const reviews = reviewers.map((r, i) => ({ ...r, ...t.reviews.items[i] }));

  return (
    <div className="site-shell">
      <header className="absolute inset-x-0 top-0 z-30">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-4 sm:px-8 sm:py-5">
          <a href="#top" className="group min-w-0 shrink">
            <span className="sr-only">L&I Software Solutions</span>
            <span className="inline-flex items-center gap-2.5 sm:gap-3">
              <LogoMark
                priority
                size={36}
                className="h-8 w-8 sm:h-9 sm:w-9"
              />
              <span className="leading-tight">
                <span className="font-display block text-base font-semibold tracking-tight text-white">
                  {"L&I"}
                </span>
                <span className="nav-wordmark logo-wordmark hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] text-white/75 sm:block">
                  Software Solutions
                </span>
              </span>
            </span>
          </a>
          <nav
            aria-label={t.nav.label}
            className="flex shrink-0 items-center gap-3 whitespace-nowrap text-sm text-white/75 sm:gap-6"
          >
            <a
              href="#diensten"
              className="px-1 py-2 transition-colors hover:text-white"
            >
              {t.nav.services}
            </a>
            <a
              href="#work"
              className="hidden px-1 py-2 transition-colors hover:text-white sm:inline"
            >
              {t.nav.work}
            </a>
            <a
              href="#contact"
              className="cta-secondary border border-white/25 px-3 py-2 text-white transition-colors hover:border-teal hover:bg-teal/10 sm:px-4"
            >
              <span className="sm:hidden">{t.nav.ctaShort}</span>
              <span className="hidden sm:inline">{t.nav.cta}</span>
            </a>
            <LanguageSwitcher current={lang} label={t.nav.language} />
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="hero-band relative overflow-hidden text-white">
          <HeroProduct t={t.heroVisual} />

          <section className="relative z-10 min-h-[100svh]">
            <div className="hero-frame relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-4 pb-16 pt-24 sm:justify-center sm:px-8 sm:pb-20 sm:pt-20">
              <div className="hero-copy w-full max-w-xl">
                <p className="hero-brand reveal font-display text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
                  {"L&I"}
                </p>
                <p className="hero-kicker reveal reveal-delay-1 section-label mt-2 text-xs font-medium uppercase tracking-[0.22em] text-teal sm:text-sm sm:tracking-[0.28em]">
                  Software Solutions
                </p>
                <DisplayTitle
                  as="h1"
                  className="reveal reveal-delay-2 mt-6 max-w-[18ch] text-[1.75rem] leading-tight sm:mt-8 sm:text-4xl md:text-[2.75rem]"
                  lines={t.hero.title}
                />
                <p className="reveal reveal-delay-3 mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/75 sm:mt-5 sm:text-lg">
                  {t.hero.copy}
                </p>
                <div className="hero-actions reveal reveal-delay-3 mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <a
                    href="#contact"
                    className="cta-primary inline-flex w-full items-center justify-center bg-teal px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white sm:w-auto sm:py-3"
                  >
                    {t.hero.ctaPrimary}
                  </a>
                  <a
                    href="#diensten"
                    className="cta-secondary inline-flex w-full items-center justify-center border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5 sm:w-auto sm:py-3"
                  >
                    {t.hero.ctaSecondary}
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="section-hero-continue relative z-10 px-4 py-16 sm:px-8 sm:py-28">
            <div className="mx-auto max-w-6xl">
              <p
                className="section-label text-sm font-medium uppercase tracking-[0.22em] text-white/55"
                data-reveal="fade"
              >
                {t.positioning.label}
              </p>
              <DisplayTitle
                className="mt-4 max-w-3xl text-[1.85rem] text-white sm:text-5xl"
                lines={t.positioning.title}
                reveal="lines"
              />
              <p
                className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg"
                data-reveal="copy"
                style={{ "--reveal-delay": "160ms" } as CSSProperties}
              >
                {t.positioning.copy}
              </p>
            </div>
          </section>
        </div>

        <section
          id="diensten"
          className="scroll-mt-4 border-t border-[var(--line)] px-4 py-16 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p
                className="section-label text-sm font-medium uppercase tracking-[0.22em] text-teal-deep"
                data-reveal="fade"
              >
                {t.services.label}
              </p>
              <DisplayTitle
                className="mt-4 text-[1.85rem] text-ink sm:text-4xl"
                lines={t.services.title}
                reveal="lines"
              />
              <p
                className="mt-4 text-base text-slate sm:text-lg"
                data-reveal="copy"
                style={{ "--reveal-delay": "140ms" } as CSSProperties}
              >
                {t.services.copy}
              </p>
            </div>

            <ul className="mt-10 grid gap-px border border-[var(--line)] bg-[var(--line)] sm:mt-14 md:grid-cols-3">
              {services.map((service, index) => (
                <li
                  key={service.slug}
                  id={service.slug}
                  className="flex flex-col bg-paper p-6 sm:p-8"
                  data-reveal="card"
                  style={
                    {
                      "--reveal-delay": `${index * 100}ms`,
                    } as CSSProperties
                  }
                >
                  <p className="font-display text-sm text-slate">
                    {service.n}
                  </p>
                  <h3 className="font-display mt-3 text-2xl font-semibold text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-ink">
                    {service.tagline}
                  </p>
                  <p className="mt-4 text-base leading-relaxed text-slate">
                    {service.copy}
                  </p>
                  <ul className="mt-6 space-y-2.5 border-t border-[var(--line)] pt-6">
                    {service.includes.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-relaxed text-ink"
                      >
                        <span
                          aria-hidden
                          className="mt-[0.55em] h-1.5 w-1.5 shrink-0 rounded-full bg-ink"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-8 text-sm font-semibold text-teal-deep transition-colors hover:text-slate"
                  >
                    {service.cta}
                    <span aria-hidden>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="work"
          className="border-t border-[var(--line)] bg-mist/60 px-4 py-16 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p
                className="section-label text-sm font-medium uppercase tracking-[0.22em] text-teal-deep"
                data-reveal="fade"
              >
                {t.work.label}
              </p>
              <DisplayTitle
                className="mt-4 text-[1.85rem] text-ink sm:text-4xl"
                lines={t.work.title}
                reveal="lines"
              />
              <p
                className="mt-4 text-base text-slate sm:text-lg"
                data-reveal="copy"
                style={{ "--reveal-delay": "140ms" } as CSSProperties}
              >
                {t.work.copy}
              </p>
            </div>

            <ul className="work-list mt-10 border-y border-[var(--line)] sm:mt-14">
              {workItems.map((item, index) => (
                <li
                  key={item.name}
                  className="work-item relative grid gap-3 py-7 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] sm:gap-10 sm:py-8"
                  data-reveal="work"
                  style={
                    {
                      "--reveal-delay": `${index * 70}ms`,
                    } as CSSProperties
                  }
                >
                  <span
                    aria-hidden
                    className="work-rule pointer-events-none absolute inset-x-0 top-0 h-px bg-current opacity-25"
                  />
                  <span
                    aria-hidden
                    className="work-accent pointer-events-none absolute bottom-3 left-0 top-3 hidden w-0.5 bg-teal sm:block"
                  />
                  <div className="min-w-0 sm:pl-4">
                    <p className="section-label text-xs font-medium uppercase tracking-[0.18em] text-teal-deep">
                      {item.type}
                    </p>
                    <h3 className="font-display mt-2 break-words text-xl font-semibold text-ink sm:text-2xl">
                      {item.name}
                    </h3>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-teal-deep transition-colors hover:text-ink"
                    >
                      {t.work.viewProject}
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                  <p className="max-w-xl text-base leading-relaxed text-slate sm:pt-6">
                    {item.summary}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-16 sm:mt-24">
              <div className="max-w-2xl">
                <p
                  className="section-label text-sm font-medium uppercase tracking-[0.22em] text-teal-deep"
                  data-reveal="fade"
                >
                  {t.concepts.label}
                </p>
                <h3
                  className="font-display mt-4 text-2xl font-semibold text-ink sm:text-3xl"
                  data-reveal="copy"
                >
                  {t.concepts.title}
                </h3>
                <p
                  className="mt-4 text-base leading-relaxed text-slate"
                  data-reveal="copy"
                  style={{ "--reveal-delay": "120ms" } as CSSProperties}
                >
                  {t.concepts.copy}
                </p>
              </div>

              <ul className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 lg:grid-cols-4">
                {conceptItems.map((item, index) => (
                  <li
                    key={item.name}
                    className="flex flex-col border border-current/15 p-6 transition-colors hover:border-current/40"
                    data-reveal="card"
                    style={
                      {
                        "--reveal-delay": `${index * 80}ms`,
                      } as CSSProperties
                    }
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate">
                        {item.type}
                      </p>
                      <span className="shrink-0 border border-current/30 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-slate">
                        {t.concepts.badge}
                      </span>
                    </div>
                    <h4 className="font-display mt-3 text-xl font-semibold text-ink">
                      {item.name}
                    </h4>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex min-h-11 items-center gap-1.5 pt-4 text-sm font-semibold text-teal-deep transition-colors hover:text-slate"
                    >
                      {t.concepts.view}
                      <span aria-hidden>↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] bg-ink px-4 py-16 text-white sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p
              className="section-label text-sm font-medium uppercase tracking-[0.22em] text-teal"
              data-reveal="fade"
            >
              {t.process.label}
            </p>
            <DisplayTitle
              className="mt-4 max-w-2xl text-[1.85rem] sm:text-4xl"
              lines={t.process.title}
              reveal="lines"
            />
            <ol className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 md:grid-cols-3">
              {steps.map((step, index) => (
                <li
                  key={step.n}
                  data-reveal="step"
                  style={
                    {
                      "--reveal-delay": `${index * 110}ms`,
                    } as CSSProperties
                  }
                >
                  <p className="font-display text-sm text-teal">{step.n}</p>
                  <h3 className="font-display mt-3 text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-white/70">
                    {step.copy}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="reviews"
          className="reviews-section border-t border-[var(--line)] px-4 py-16 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <p
              className="section-label text-sm font-medium uppercase tracking-[0.22em] text-teal-deep"
              data-reveal="fade"
            >
              {t.reviews.label}
            </p>
            <DisplayTitle
              className="mt-4 max-w-3xl text-[1.85rem] text-ink sm:text-5xl"
              lines={t.reviews.title}
              reveal="lines"
            />
            <TrustpilotWidget lang={lang} label={t.reviews.trustpilot} />

            <figure
              className="review-feature mt-12 sm:mt-16"
              data-reveal="copy"
              style={{ "--reveal-delay": "80ms" } as CSSProperties}
            >
              <blockquote className="font-display text-[1.65rem] leading-[1.15] tracking-tight text-ink sm:text-4xl sm:leading-[1.1]">
                <span className="review-mark" aria-hidden>
                  “
                </span>
                {reviews[0].quote}
              </blockquote>
              <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="font-display text-lg text-ink">
                  {reviews[0].name}
                </span>
                <span className="text-sm text-slate">
                  {reviews[0].role} · {reviews[0].company}
                </span>
              </figcaption>
            </figure>

            <ul className="review-list mt-14 border-t border-[var(--line)] sm:mt-20">
              {reviews.slice(1).map((review, index) => (
                <li
                  key={review.name}
                  className="review-item grid gap-4 border-b border-[var(--line)] py-8 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)] sm:gap-12 sm:py-10"
                  data-reveal="work"
                  style={
                    {
                      "--reveal-delay": `${index * 90}ms`,
                    } as CSSProperties
                  }
                >
                  <blockquote className="text-lg leading-relaxed text-ink sm:text-xl">
                    “{review.quote}”
                  </blockquote>
                  <div className="sm:pt-1">
                    <p className="font-display text-base text-ink">
                      {review.name}
                    </p>
                    <p className="mt-1 text-sm text-slate">
                      {review.role} · {review.company}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="contact"
          className="border-t border-[var(--line)] px-4 py-16 sm:px-8 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
            <div
              data-reveal="fade"
            >
              <p className="section-label text-sm font-medium uppercase tracking-[0.22em] text-teal-deep">
                {t.contact.label}
              </p>
              <DisplayTitle
                className="mt-4 text-[1.85rem] text-ink sm:text-5xl"
                lines={t.contact.title}
                reveal="lines"
                delay={40}
              />
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
                {t.contact.copy}
              </p>
              <div className="mt-8">
                <Logo />
              </div>
            </div>

            <ContactForm lang={lang} t={t.form} />
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-4 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate">
            © {new Date().getFullYear()} {"L&I"} Software Solutions
          </p>
          <p className="text-sm text-slate">
            {t.footer.tagline}
          </p>
        </div>
      </footer>

    </div>
  );
}
