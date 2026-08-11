import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces, Syne } from "next/font/google";
import { MotionRoot } from "./components/MotionRoot";
import { StyleProvider } from "./components/StyleProvider";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: {
    default: "L&I Software Solutions",
    template: "%s · L&I Software Solutions",
  },
  description:
    "L&I Software Solutions bouwt AI-gedreven software, apps en maatwerksystemen die echte knelpunten oplossen — snel opgeleverd voor startups en groeiende teams.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "L&I Software Solutions",
    description:
      "AI-gedreven software die frictie wegneemt. Apps, platforms en enterprise systemen — snel gebouwd.",
    type: "website",
    siteName: "L&I Software Solutions",
    locale: "nl_NL",
  },
};

const styleInitScript = `
(function () {
  try {
    var key = "li-ui-style";
    var allowed = ["atelier", "modern"];
    var stored = localStorage.getItem(key);
    if (stored === "celebration") stored = "modern";
    var style = allowed.indexOf(stored) !== -1 ? stored : "modern";
    document.documentElement.setAttribute("data-style", style);
    localStorage.setItem(key, style);
  } catch (e) {
    document.documentElement.setAttribute("data-style", "modern");
  }
})();
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      data-style="modern"
      className={`${figtree.variable} ${syne.variable} ${fraunces.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: styleInitScript }} />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <StyleProvider>
          <MotionRoot />
          {children}
        </StyleProvider>
      </body>
    </html>
  );
}
