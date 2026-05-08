import type { Metadata } from "next";
import { Bricolage_Grotesque, Manrope } from "next/font/google";
import Script from "next/script";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import "../globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";
import LenisProvider from "@/components/providers/LenisProvider";
import PageTransitionProvider from "@/components/providers/PageTransitionProvider";
import TransitionOverlay from "@/components/ui/TransitionOverlay";
import ScrollToTop from "@/components/ui/ScrollToTop";
import AnimationInit from "@/components/providers/AnimationInit";
import { SITE_URL, absoluteUrl } from "@/lib/site";
import { routing } from "@/i18n/routing";

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Le Petit Train de Carnac / Menhir Tour",
    template: "%s — Petit Train de Carnac Morbihan",
  },
  description:
    "Visite guidée des mégalithes de Carnac à bord du Petit Train — tour de 55 minutes, commentaire audio multilingue, plages et port de La Trinité-sur-Mer.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/figma-assets/logo.svg",
    apple: "/figma-assets/Webclip.png",
    shortcut: "/figma-assets/logo.svg",
  },
  openGraph: {
    title: "Le Petit Train de Carnac / Menhir Tour",
    description:
      "Visite guidée des mégalithes de Carnac à bord du Petit Train — tour de 55 minutes, commentaire audio multilingue, plages et port de La Trinité-sur-Mer.",
    type: "website",
    locale: "fr_FR",
    alternateLocale: ["en_GB", "es_ES", "de_DE", "it_IT", "nl_NL"],
    images: [
      {
        url: "/figma-assets/OpenGraph.png",
        width: 1200,
        height: 630,
        alt: "Le Petit Train de Carnac — Menhir Tour",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Petit Train de Carnac / Menhir Tour",
    description:
      "Visite guidée des mégalithes de Carnac à bord du Petit Train — tour de 55 minutes, commentaire audio multilingue, plages et port de La Trinité-sur-Mer.",
    images: ["/figma-assets/OpenGraph.png"],
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);

  return (
    <html lang={locale} className={`${bricolageGrotesque.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": ["TouristAttraction", "LocalBusiness"],
              "name": "Petit Train de Carnac",
              "description": "Visite guidée touristique de Carnac et ses menhirs à bord d'un petit train confortable. Commentaire audio multilingue en 16 langues. Durée : 55 minutes.",
              "touristType": "CulturalTourist",
              "availableLanguage": [
                "French","English","Spanish","German","Italian","Dutch",
                "Portuguese","Japanese","Chinese","Russian","Korean","Polish",
                "Arabic","Norwegian","Finnish","Czech"
              ],
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
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "47.5914481",
                "longitude": "-3.0825134"
              },
              "url": SITE_URL,
              "priceRange": "€",
              "currenciesAccepted": "EUR",
              "paymentAccepted": "Cash, Credit Card",
              "image": absoluteUrl("/figma-assets/hero-image.jpg"),
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "validFrom": "2025-04-01",
                  "validThrough": "2025-10-08",
                  "opens": "10:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
                  "validFrom": "2025-10-17",
                  "validThrough": "2025-10-31",
                  "opens": "10:00",
                  "closes": "17:00"
                }
              ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "Petit Train de Carnac",
              "url": SITE_URL,
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
        <NextIntlClientProvider>
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
