import type { Dictionary } from "../dictionaries";

export function HeroProduct({ t }: { t: Dictionary["heroVisual"] }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-plane absolute inset-0" />
      <div className="hero-glow absolute inset-0" />
      <div className="hero-cinema absolute inset-0" />
      <div className="hero-grain absolute inset-0" />
      <div
        className="hero-grid absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(244,247,247,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(244,247,247,0.12) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="hero-stage absolute inset-y-[12%] right-[-8%] left-[38%] sm:left-[46%]">
        <div className="absolute inset-0 border-l border-white/10 bg-ink-soft/80 backdrop-blur-[2px]">
          <div className="flex h-full flex-col p-6 sm:p-10">
            <div className="mb-8 border-b border-white/10 pb-4">
              <p className="text-[0.65rem] uppercase tracking-[0.22em] text-teal">
                {t.label}
              </p>
              <p className="font-display mt-1 text-xl text-white sm:text-2xl">
                {t.title}
              </p>
            </div>

            <div className="flex flex-1 flex-col gap-3">
              <div className="max-w-[85%] self-start border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs leading-relaxed text-white/70 sm:text-sm">
                {t.prompt}
              </div>
              <div className="max-w-[85%] self-end border border-teal/30 bg-teal/15 px-3 py-2.5 text-xs leading-relaxed text-white sm:text-sm">
                {t.reply}
              </div>
              <div className="mt-2 grid flex-1 grid-cols-3 gap-2 sm:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="rounded-sm border border-white/10 bg-white/[0.03] p-2"
                  >
                    <div
                      className={`mb-2 h-2 w-10 ${
                        i % 2 === 0 ? "bg-teal/80" : "bg-white/20"
                      }`}
                    />
                    <div
                      className={`h-12 ${
                        i % 3 === 0
                          ? "bg-teal/45"
                          : i % 2 === 0
                            ? "bg-white/12"
                            : "bg-white/[0.05]"
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="hero-scan absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-teal/25 to-transparent" />
        </div>
      </div>

      <div className="hero-veil absolute inset-0 bg-[linear-gradient(90deg,rgba(7,21,28,0.92)_0%,rgba(7,21,28,0.78)_38%,rgba(7,21,28,0.35)_62%,rgba(7,21,28,0.55)_100%)] sm:bg-[linear-gradient(90deg,rgba(7,21,28,0.92)_0%,rgba(7,21,28,0.72)_42%,rgba(7,21,28,0.2)_68%,rgba(7,21,28,0.45)_100%)]" />
    </div>
  );
}
