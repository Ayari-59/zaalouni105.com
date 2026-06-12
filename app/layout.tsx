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
  // "./" = canonique propre à chaque page, résolue sur metadataBase
  // (l'apex sans www) — évite le contenu dupliqué www / sans-www.
  alternates: {
    canonical: "./",
  },
  title: "Zaalouni 105′ — Le but du sacre · 10 mai 2026",
  description:
    "Mémorial du but de Ghaith Zaalouni à la 105ᵉ minute (90+14) du derby EST 0 – 1 Club Africain, le 10 mai 2026 à Radès. Le but du 14ᵉ titre de champion de Tunisie, onze ans après.",
  // fb:admins = modération du mur pour le compte 1199644816, SANS app.
  // ATTENTION : ne PAS remettre fb:app_id tant que l'app n'est pas en mode
  // Live — un fil de commentaires associé à une app en développement bloque
  // la publication (constaté le 12/06/2026). L'avertissement « fb:app_id
  // manquant » du débogueur de partage est cosmétique et sans conséquence.
  facebook: {
    admins: ["1199644816"],
  },
  openGraph: {
    title: "Zaalouni 105′ — Le but du sacre",
    description:
      "90+14. Un contre assassin, un tir foudroyant, un penalty check interminable… et le Club Africain champion de Tunisie, onze ans après.",
    url: "https://zaalouni105.com",
    siteName: "Zaalouni105.com",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ghaith Zaalouni célèbre son but de la 105ᵉ minute — EST 0-1 Club Africain, 10 mai 2026 à Radès",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zaalouni 105′ — Le but du sacre",
    description:
      "90+14. Un contre assassin, un tir foudroyant… et le Club Africain champion de Tunisie, onze ans après.",
    images: ["/og-image.jpg"],
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
