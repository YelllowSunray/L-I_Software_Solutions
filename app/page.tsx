import type { CSSProperties } from "react";
import { DisplayTitle } from "./components/DisplayTitle";
import { HeroProduct } from "./components/HeroProduct";
import { Logo } from "./components/Logo";
import { LogoMark } from "./components/LogoMark";
import { StyleSwitcher } from "./components/StyleSwitcher";

const work = [
  {
    name: "Madhu Tattoo — AI Design",
    type: "AI-product",
    summary:
      "Een AI-gedreven ontwerptool: beschrijf je idee in een gesprek, en het systeem genereert een passend tattoo-ontwerp.",
    href: "https://madhutattoo.nl",
  },
  {
    name: "Sue's Tattoo Studio",
    type: "AI-product",
    summary:
      "AI-studio waarmee klanten unieke tattoo-ontwerpen genereren en hun creatieve richting verkennen.",
    href: "https://sujathascompass.com",
  },
  {
    name: "Study Center",
    type: "Realtime platform",
    summary:
      "Studieplatform met groepsvideogesprekken, gesynchroniseerde Pomodoro, ambient audio en gedeelde documenten.",
    href: "https://studycenter-liart.vercel.app",
  },
  {
    name: "Wild Me",
    type: "AI + social app",
    summary:
      "Sociale app met geïntegreerde AI-beeldediting — van creatieve tools tot challenges die mensen in beweging zetten.",
    href: "https://www.wild-me.com",
  },
  {
    name: "Wink — Group Calls",
    type: "Realtime video",
    summary:
      "Videobelplatform voor groepen met LiveKit-integratie en rijkere, meer betrokken communicatie.",
    href: "https://wink.fit",
  },
  {
    name: "Backpackers United",
    type: "Community platform",
    summary:
      "Platform dat backpackers wereldwijd verbindt: ervaringen delen, reisgenoten vinden en tips ontdekken.",
    href: "https://www.backpackerunited.com",
  },
  {
    name: "Tapestry",
    type: "Social product",
    summary:
      "Social journaling-platform waarin gebruikers gedachten, ervaringen en herinneringen tot één digitaal verhaal weven.",
    href: "https://www.tapestry.today",
  },
  {
    name: "Doeklus",
    type: "Marketplace",
    summary:
      "Platform voor klussen en taken — boodschappen, bezorging, montage — een tool die in Nederland nog ontbrak.",
    href: "https://www.doeklus.nl",
  },
  {
    name: "Delicacies Europe",
    type: "E-commerce",
    summary:
      "Platform voor geïmporteerde Europese delicatessen — curatie, bestellen en bezorgen van specialty foods.",
    href: "https://www.delicacies.eu",
  },
];

const capabilities = [
  {
    title: "AI-gedreven software",
    copy: "Producten met AI waar het telt: generatie, automatisering, beeldtools en slimme workflows die tijd besparen.",
  },
  {
    title: "Apps & platforms",
    copy: "Web- en productapps met realtime features, sterke UX en een stack die meegroeit met je bedrijf.",
  },
  {
    title: "Websites & systemen",
    copy: "Van conversiegerichte sites tot interne tools — gebouwd rond het knelpunt van jouw operatie.",
  },
];

const steps = [
  {
    n: "01",
    title: "Benoem de pijn",
    copy: "We brengen de knelpunten in kaart — gemiste diensten, rommelige onboarding, trage processen — vóór we één regel code schrijven.",
  },
  {
    n: "02",
    title: "Vorm het product",
    copy: "Strakke scope, heldere UX en een bouwplan dat waarde oplevert in weken, niet in kwartalen.",
  },
  {
    n: "03",
    title: "Opleveren & verfijnen",
    copy: "Je krijgt een werkend product, daarna itereren we op basis van echt gebruik — geen eindeloze discovery-trajecten.",
  },
];

export default function Home() {
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
          <nav className="flex shrink-0 items-center gap-3 text-sm text-white/75 sm:gap-6">
            <a
              href="#work"
              className="px-1 py-2 transition-colors hover:text-white"
            >
              Werk
            </a>
            <a
              href="#contact"
              className="cta-secondary border border-white/25 px-3 py-2 text-white transition-colors hover:border-teal hover:bg-teal/10 sm:px-4"
            >
              <span className="sm:hidden">Start</span>
              <span className="hidden sm:inline">Start een project</span>
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <div className="hero-band relative overflow-hidden text-white">
          <HeroProduct />

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
                  lines={[
                    "Wij bouwen",
                    "AI-gedreven software",
                    "die knelpunten oplost.",
                  ]}
                />
                <p className="reveal reveal-delay-3 mt-4 max-w-md text-[0.95rem] leading-relaxed text-white/75 sm:mt-5 sm:text-lg">
                  Slimme apps, platforms en maatwerksystemen voor bedrijven die
                  willen doorpakken — AI waar het waarde toevoegt, snel
                  opgeleverd.
                </p>
                <div className="hero-actions reveal reveal-delay-3 mt-7 flex w-full flex-col gap-3 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
                  <a
                    href="#contact"
                    className="cta-primary inline-flex w-full items-center justify-center bg-teal px-6 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-white sm:w-auto sm:py-3"
                  >
                    Vertel ons het knelpunt
                  </a>
                  <a
                    href="#work"
                    className="cta-secondary inline-flex w-full items-center justify-center border border-white/30 px-6 py-3.5 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5 sm:w-auto sm:py-3"
                  >
                    Bekijk wat we bouwen
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
                Positionering
              </p>
              <DisplayTitle
                className="mt-4 max-w-3xl text-[1.85rem] text-white sm:text-5xl"
                lines={["AI als voorsprong.", "Software die meewerkt."]}
                reveal="lines"
              />
              <p
                className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:mt-6 sm:text-lg"
                data-reveal="copy"
                style={{ "--reveal-delay": "160ms" } as CSSProperties}
              >
                Wij combineren moderne AI met stevige productontwikkeling: van
                conversatie-interfaces en beeldgeneratie tot realtime platforms.
                Geen hype — wel werkende software die frictie wegneemt.
              </p>
            </div>
          </section>
        </div>

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
                Geselecteerd werk
              </p>
              <DisplayTitle
                className="mt-4 text-[1.85rem] text-ink sm:text-4xl"
                lines={["Werk dat onze", "stack laat zien."]}
                reveal="lines"
              />
              <p
                className="mt-4 text-base text-slate sm:text-lg"
                data-reveal="copy"
                style={{ "--reveal-delay": "140ms" } as CSSProperties}
              >
                AI-producten, realtime platforms en apps met serieuze
                technische diepgang — elk project linkt door naar de live
                omgeving.
              </p>
            </div>

            <ul className="work-list mt-10 border-y border-[var(--line)] sm:mt-14">
              {work.map((item, index) => (
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
                      Bekijk project
                      <span aria-hidden>↗</span>
                    </a>
                  </div>
                  <p className="max-w-xl text-base leading-relaxed text-slate sm:pt-6">
                    {item.summary}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-[var(--line)] px-4 py-16 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p
              className="section-label text-sm font-medium uppercase tracking-[0.22em] text-teal-deep"
              data-reveal="fade"
            >
              Wat we bouwen
            </p>
            <DisplayTitle
              className="mt-4 max-w-2xl text-[1.85rem] text-ink sm:text-4xl"
              lines={["AI-first producten", "— en alles eromheen."]}
              reveal="lines"
            />
            <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 md:grid-cols-3 md:gap-12">
              {capabilities.map((item, index) => (
                <div
                  key={item.title}
                  data-reveal="card"
                  style={
                    {
                      "--reveal-delay": `${index * 100}ms`,
                    } as CSSProperties
                  }
                >
                  <h3 className="font-display text-xl font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-slate">
                    {item.copy}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] bg-ink px-4 py-16 text-white sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p
              className="section-label text-sm font-medium uppercase tracking-[0.22em] text-teal"
              data-reveal="fade"
            >
              Hoe we werken
            </p>
            <DisplayTitle
              className="mt-4 max-w-2xl text-[1.85rem] sm:text-4xl"
              lines={["Vind de pijn.", "Bouw de oplossing.", "Lever op."]}
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
          id="contact"
          className="border-t border-[var(--line)] px-4 py-16 sm:px-8 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-12">
            <div
              data-reveal="fade"
            >
              <p className="section-label text-sm font-medium uppercase tracking-[0.22em] text-teal-deep">
                Begin hier
              </p>
              <DisplayTitle
                className="mt-4 text-[1.85rem] text-ink sm:text-5xl"
                lines={["Wat remt", "jullie bedrijf af?"]}
                reveal="lines"
                delay={40}
              />
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate sm:text-lg">
                Stuur het knelpunt. Wij komen terug met een duidelijk pad —
                scope, planning en wat we als eerste zouden bouwen.
              </p>
              <div className="mt-8">
                <Logo />
              </div>
            </div>

            <form
              className="space-y-4"
              action="mailto:hello@landi.software"
              method="post"
              encType="text/plain"
              data-reveal="panel"
              style={{ "--reveal-delay": "120ms" } as CSSProperties}
            >
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">
                  Naam
                </span>
                <input
                  name="naam"
                  required
                  autoComplete="name"
                  className="field-input w-full border border-[var(--line)] bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-teal"
                  placeholder="Alex de Vries"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">
                  Zakelijk e-mailadres
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  autoComplete="email"
                  inputMode="email"
                  className="field-input w-full border border-[var(--line)] bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-teal"
                  placeholder="alex@bedrijf.nl"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">
                  Het knelpunt
                </span>
                <textarea
                  name="bericht"
                  required
                  rows={4}
                  className="field-input w-full resize-y border border-[var(--line)] bg-white px-4 py-3 text-base text-ink outline-none transition focus:border-teal"
                  placeholder="We plannen diensten nog in spreadsheets en niemand vertrouwt de laatste versie…"
                />
              </label>
              <button
                type="submit"
                className="min-h-12 w-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-deep sm:w-auto"
              >
                Stuur projectbrief
              </button>
              <p className="text-sm text-slate">
                Of mail naar{" "}
                <a
                  className="break-all font-medium text-ink underline decoration-teal/50 underline-offset-4 hover:decoration-teal"
                  href="mailto:hello@landi.software"
                >
                  hello@landi.software
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-4 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate">
            © {new Date().getFullYear()} {"L&I"} Software Solutions
          </p>
          <p className="text-sm text-slate">
            AI-software · Apps · Platforms · Maatwerk
          </p>
        </div>
      </footer>

      <StyleSwitcher />
    </div>
  );
}
