import Image from "next/image";

type LogoMarkProps = {
  className?: string;
  priority?: boolean;
  size?: number;
};

export function LogoMark({
  className = "",
  priority = false,
  size = 40,
}: LogoMarkProps) {
  const sizeClass = className || "h-9 w-9 sm:h-10 sm:w-10";

  return (
    <span className={`logo-mark-wrap relative inline-grid shrink-0 ${sizeClass}`}>
      <Image
        src="/logo-mark.svg"
        alt=""
        width={size}
        height={size}
        className="logo-mark logo-mark--atelier col-start-1 row-start-1 h-full w-full"
        priority={priority}
      />
      <Image
        src="/logo-mark-modern.svg"
        alt=""
        width={size}
        height={size}
        className="logo-mark logo-mark--modern col-start-1 row-start-1 h-full w-full"
        priority={priority}
      />
    </span>
  );
}
