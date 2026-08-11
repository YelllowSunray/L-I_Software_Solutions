import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "L&I Software Solutions",
    template: "%s · L&I Software Solutions",
  },
  description:
    "L&I Software Solutions bouwt apps, websites en maatwerk enterprise software die echte knelpunten oplossen — snel opgeleverd voor startups en groeiende teams.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "L&I Software Solutions",
    description:
      "Maatwerksoftware die frictie wegneemt. Apps, websites en enterprise systemen — snel gebouwd.",
    type: "website",
    siteName: "L&I Software Solutions",
    locale: "nl_NL",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="nl"
      className={`${figtree.variable} ${syne.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
