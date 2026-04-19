import type { Metadata } from "next";
import { Libre_Baskerville, Roboto, Inter, Nunito, Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import PageTransitionProvider from "@/components/providers/PageTransitionProvider";
import TransitionOverlay from "@/components/ui/TransitionOverlay";
import ScrollToTop from "@/components/ui/ScrollToTop";
import AnimationInit from "@/components/providers/AnimationInit";

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-libre-baskerville",
  display: "swap",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Petit Train de Carnac — Visite guidée de Carnac et ses menhirs",
    template: "%s — Petit Train de Carnac",
  },
  description:
    "Découvrez Carnac, ses célèbres mégalithes, ses plages et le port de La Trinité-sur-Mer à bord du Petit Train de Carnac. Une visite guidée de 55 minutes avec commentaire audio multilingue.",
  icons: {
    icon: "/figma-assets/logo.svg",
    apple: "/figma-assets/Webclip.png",
    shortcut: "/figma-assets/logo.svg",
  },
  openGraph: {
    title: "Petit Train de Carnac — Visite guidée touristique",
    description:
      "Une façon confortable et accessible de découvrir les menhirs, les plages et les paysages de Carnac avec un commentaire audio multilingue.",
    type: "website",
    locale: "fr_FR",
    images: [
      {
        url: "/figma-assets/OpenGraph.png",
        width: 1200,
        height: 630,
        alt: "Petit Train de Carnac — Visite guidée touristique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Petit Train de Carnac — Visite guidée touristique",
    description:
      "Une façon confortable et accessible de découvrir les menhirs, les plages et les paysages de Carnac avec un commentaire audio multilingue.",
    images: ["/figma-assets/OpenGraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${libreBaskerville.variable} ${roboto.variable} ${inter.variable} ${nunito.variable} ${raleway.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["TouristAttraction", "LocalBusiness"],
              "name": "Petit Train de Carnac",
              "description": "Visite guidée touristique de Carnac et ses menhirs à bord d'un petit train confortable. Commentaire audio multilingue en 16 langues. Durée : 55 minutes.",
              "telephone": "+33297240629",
              "email": "petittrain-lebayon@orange.fr",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Parking du Ménec",
                "addressLocality": "Carnac",
                "postalCode": "56340",
                "addressRegion": "Morbihan",
                "addressCountry": "FR"
              },
              "url": "https://petit-train-carnac.vercel.app",
              "priceRange": "€",
              "image": "/figma-assets/hero-image.jpg",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.7",
                "reviewCount": "6000",
                "bestRating": "5",
                "worstRating": "1"
              }
            }),
          }}
        />
        <Script
          id="cookie-consent-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `window.CookieConsentConfig = {
  companyName: 'Petit Train Carnac',
  privacyPolicyUrl: '/mentions-legales',
  accentColor: '#1a1a1a',
  accentText: '#ffffff',
  position: 'bottom',
  bannerDelay: 5000,
};`,
          }}
        />
        <Script
          src="https://cdn.jsdelivr.net/gh/eldardiz/cookie-consent-softbird@main/cookie-consent.js"
          strategy="afterInteractive"
        />
        <LenisProvider>
          <PageTransitionProvider>
            <AnimationInit />
            <TransitionOverlay />
            <ScrollToTop />
            <Navbar />
            {/* Spacer for fixed header: announcement banner + nav 80px (banner can wrap on mobile) */}
            <div aria-hidden="true" className="h-[152px] sm:h-[116px]" />
            <div data-transition-content>
              {children}
              <Footer />
            </div>
          </PageTransitionProvider>
        </LenisProvider>
      </body>
    </html>
  );
}
