import { LogoMark } from "./LogoMark";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex min-w-0 items-center gap-3 ${className}`}>
      <LogoMark priority />
      {showWordmark ? (
        <span className="min-w-0 leading-tight">
          <span className="font-display block text-[1.15rem] font-semibold tracking-tight text-ink">
            {"L&I"}
          </span>
          <span className="logo-wordmark block text-[0.62rem] font-medium uppercase tracking-[0.14em] text-teal-deep sm:text-[0.68rem] sm:tracking-[0.18em]">
            Software Solutions
          </span>
        </span>
      ) : null}
    </span>
  );
}
