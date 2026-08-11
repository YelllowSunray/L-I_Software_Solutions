"use client";

import { STYLES } from "../lib/styles";
import { useStyle } from "./StyleProvider";

export function StyleSwitcher() {
  const { style, setStyle } = useStyle();

  return (
    <div className="style-switcher fixed inset-x-0 bottom-0 z-40 border-t border-[var(--line)] bg-[var(--paper)]/95 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-2.5 px-4 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:px-8 sm:py-4">
        <div className="min-w-0">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-teal-deep">
            UI-stijl
          </p>
          <p className="mt-0.5 hidden text-sm text-slate sm:block">
            Kies hoe de site eruitziet — je keuze wordt onthouden.
          </p>
        </div>
        <div
          className="style-switcher-options grid w-full grid-cols-2 gap-2 sm:flex sm:w-auto"
          role="radiogroup"
          aria-label="UI-stijl"
        >
          {STYLES.map((item) => {
            const active = style === item.id;
            return (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setStyle(item.id)}
                className={`style-switcher-btn min-h-12 min-w-0 px-3 py-2.5 text-left transition-colors sm:min-w-[9.5rem] ${
                  active ? "is-active" : ""
                }`}
              >
                <span className="style-switcher-label block text-sm font-semibold">
                  {item.label}
                </span>
                <span className="style-switcher-blurb mt-0.5 block truncate text-[0.65rem] leading-snug sm:text-[0.7rem] sm:whitespace-normal">
                  {item.blurb}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
