import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zaalouni105.com"),
  title: "Zaalouni 105′ — Le but du sacre · 10 mai 2026",
  description:
    "Mémorial du but de Ghaith Zaalouni à la 105ᵉ minute (90+14) du derby EST 0 – 1 Club Africain, le 10 mai 2026 à Radès. Le but du 14ᵉ titre de champion de Tunisie, onze ans après.",
  openGraph: {
    title: "Zaalouni 105′ — Le but du sacre",
    description:
      "90+14. Un contre assassin, un tir foudroyant, un penalty check interminable… et le Club Africain champion de Tunisie, onze ans après.",
    url: "https://zaalouni105.com",
    siteName: "Zaalouni105.com",
    locale: "fr_FR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#07070a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${anton.variable} ${inter.variable}`}>
      <body className="bg-night font-sans text-cream antialiased">
        {children}
      </body>
    </html>
  );
}
