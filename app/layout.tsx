import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { MotionRoot } from "./components/MotionRoot";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${figtree.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <MotionRoot />
        {children}
      </body>
    </html>
  );
}
