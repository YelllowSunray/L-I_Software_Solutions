import type { CSSProperties } from "react";

type DisplayTitleProps = {
  as?: "h1" | "h2";
  lines: string[];
  className?: string;
  /** Scroll-triggered reveal: whole title, or each line staggered */
  reveal?: boolean | "lines";
  delay?: number;
};

export function DisplayTitle({
  as: Tag = "h2",
  lines,
  className = "",
  reveal = false,
  delay = 0,
}: DisplayTitleProps) {
  if (reveal === "lines") {
    return (
      <Tag
        className={`display-title font-display reveal-lines ${className}`}
        data-reveal="title"
        style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
      >
        {lines.map((line, index) => (
          <span
            key={line}
            className="display-title-line reveal-line"
            style={{ "--line-index": index } as CSSProperties}
          >
            {line}
            {index < lines.length - 1 ? " " : ""}
          </span>
        ))}
      </Tag>
    );
  }

  return (
    <Tag
      className={`display-title font-display ${className}`}
      {...(reveal
        ? {
            "data-reveal": "title",
            style: { "--reveal-delay": `${delay}ms` } as CSSProperties,
          }
        : {})}
    >
      {lines.map((line, index) => (
        <span key={line} className="display-title-line">
          {line}
          {index < lines.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
