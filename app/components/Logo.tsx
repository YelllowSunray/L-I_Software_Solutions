import Image from "next/image";

type LogoProps = {
  className?: string;
  showWordmark?: boolean;
};

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <Image
        src="/logo-mark.svg"
        alt=""
        width={40}
        height={40}
        className="h-10 w-10"
        priority
      />
      {showWordmark ? (
        <span className="leading-tight">
          <span className="font-display block text-[1.15rem] font-semibold tracking-tight text-ink">
            {"L&I"}
          </span>
          <span className="block text-[0.68rem] font-medium uppercase tracking-[0.18em] text-teal-deep">
            Software Solutions
          </span>
        </span>
      ) : null}
    </span>
  );
}
