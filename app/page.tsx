import Image from "next/image";
import { HeroProduct } from "./components/HeroProduct";
import { Logo } from "./components/Logo";

const work = [
  {
    name: "Top Zorg Rooster",
    type: "Enterpriseplanning",
    summary:
      "Een maatwerk roostersysteem dat spreadsheet-chaos vervangt door overzichtelijke bezetting voor zorgteams.",
  },
  {
    name: "Trading Academy",
    type: "Educatieplatform",
    summary:
      "Een branded leeromgeving met cursussen, voortgang en conversiegerichte pagina’s voor groeiende academies.",
  },
  {
    name: "Startup productbuilds",
    type: "Apps & websites",
    summary:
      "Van eerste landingspagina tot productie-app — ontworpen rond de frictie die jouw klanten voelen.",
  },
];

const capabilities = [
  {
    title: "Apps",
    copy: "iOS-, Android- en webproducten die native aanvoelen en onderhoudbaar blijven.",
  },
  {
    title: "Websites",
    copy: "Heldere marketing- en productsites die bezoekers omzetten in gesprekken.",
  },
  {
    title: "Enterprise systemen",
    copy: "Interne tools en workflows — roosters, operations, CRM-achtig — gebouwd rond hoe jullie echt werken.",
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
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#top" className="group">
            <span className="sr-only">L&I Software Solutions</span>
            <span className="inline-flex items-center gap-3">
              <Image
                src="/logo-mark.svg"
                alt=""
                width={36}
                height={36}
                className="h-9 w-9"
                priority
              />
              <span className="leading-tight">
                <span className="font-display block text-base font-semibold tracking-tight text-white">
                  {"L&I"}
                </span>
                <span className="hidden text-[0.65rem] font-medium uppercase tracking-[0.18em] text-teal sm:block">
                  Software Solutions
                </span>
              </span>
            </span>
          </a>
          <nav className="flex items-center gap-6 text-sm text-white/75">
            <a href="#work" className="transition-colors hover:text-white">
              Werk
            </a>
            <a
              href="#contact"
              className="border border-white/25 px-4 py-2 text-white transition-colors hover:border-teal hover:bg-teal/10"
            >
              Start een project
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="relative min-h-[100svh] overflow-hidden text-white">
          <HeroProduct />
          <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-5 pb-16 pt-28 sm:justify-center sm:px-8 sm:pb-24 sm:pt-20">
            <div className="max-w-xl">
              <p className="reveal font-display text-5xl font-semibold tracking-tight sm:text-7xl md:text-8xl">
                {"L&I"}
              </p>
              <p className="reveal reveal-delay-1 mt-2 text-sm font-medium uppercase tracking-[0.28em] text-teal">
                Software Solutions
              </p>
              <h1 className="reveal reveal-delay-2 font-display mt-8 max-w-[16ch] text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem]">
                Wij bouwen software die de frictie wegneemt.
              </h1>
              <p className="reveal reveal-delay-3 mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
                Apps, websites en maatwerksystemen voor bedrijven die willen
                doorpakken — strak afgebakend, snel opgeleverd.
              </p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="bg-teal px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white"
                >
                  Vertel ons het knelpunt
                </a>
                <a
                  href="#work"
                  className="border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors hover:border-white hover:bg-white/5"
                >
                  Bekijk wat we bouwen
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[var(--line)] px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-teal-deep">
              Positionering
            </p>
            <h2 className="font-display mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
              Professionele builds. Startup-snelheid.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate">
              Je hebt geen opgeblazen agency-traject nodig voor serieuze
              software. Wij zetten een duidelijk bedrijfsprobleem om in een
              werkend product — en blijven daarna met jullie itereren.
            </p>
          </div>
        </section>

        <section
          id="work"
          className="border-t border-[var(--line)] bg-mist/60 px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto max-w-6xl">
            <div className="max-w-2xl">
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-teal-deep">
                Geselecteerd werk
              </p>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                Gebouwd voor echte operatie.
              </h2>
              <p className="mt-4 text-lg text-slate">
                Van roosters in de zorg tot educatieplatforms — software
                gevormd rond hoe teams écht werken.
              </p>
            </div>

            <ul className="mt-14 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {work.map((item) => (
                <li
                  key={item.name}
                  className="grid gap-3 py-8 sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1.6fr)] sm:gap-10"
                >
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-deep">
                      {item.type}
                    </p>
                    <h3 className="font-display mt-2 text-2xl font-semibold text-ink">
                      {item.name}
                    </h3>
                  </div>
                  <p className="max-w-xl text-base leading-relaxed text-slate sm:pt-6">
                    {item.summary}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-[var(--line)] px-5 py-20 sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-teal-deep">
              Wat we bouwen
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Zo ongeveer alles wat jouw bedrijf hierna nodig heeft.
            </h2>
            <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-12">
              {capabilities.map((item) => (
                <div key={item.title}>
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

        <section className="border-t border-[var(--line)] bg-ink px-5 py-20 text-white sm:px-8 sm:py-28">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-teal">
              Hoe we werken
            </p>
            <h2 className="font-display mt-4 max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Vind de pijn. Bouw de oplossing. Lever op.
            </h2>
            <ol className="mt-14 grid gap-10 md:grid-cols-3">
              {steps.map((step) => (
                <li key={step.n}>
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
          className="border-t border-[var(--line)] px-5 py-20 sm:px-8 sm:py-28"
        >
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-teal-deep">
                Begin hier
              </p>
              <h2 className="font-display mt-4 text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
                Wat remt jullie bedrijf af?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate">
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
            >
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-ink">
                  Naam
                </span>
                <input
                  name="naam"
                  required
                  className="w-full border border-[var(--line)] bg-white px-4 py-3 text-ink outline-none transition focus:border-teal"
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
                  className="w-full border border-[var(--line)] bg-white px-4 py-3 text-ink outline-none transition focus:border-teal"
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
                  className="w-full resize-y border border-[var(--line)] bg-white px-4 py-3 text-ink outline-none transition focus:border-teal"
                  placeholder="We plannen diensten nog in spreadsheets en niemand vertrouwt de laatste versie…"
                />
              </label>
              <button
                type="submit"
                className="w-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-teal-deep sm:w-auto"
              >
                Stuur projectbrief
              </button>
              <p className="text-sm text-slate">
                Of mail naar{" "}
                <a
                  className="font-medium text-ink underline decoration-teal/50 underline-offset-4 hover:decoration-teal"
                  href="mailto:hello@landi.software"
                >
                  hello@landi.software
                </a>
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-[var(--line)] px-5 py-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate">
            © {new Date().getFullYear()} {"L&I"} Software Solutions
          </p>
          <p className="text-sm text-slate">
            Apps · Websites · Maatwerk bedrijfssoftware
          </p>
        </div>
      </footer>
    </div>
  );
}
