import type { Metadata } from "next";
import { Libre_Baskerville, Roboto, Inter, Nunito, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

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
  title: "Petit Train de Carnac — Guided sightseeing tour of Carnac and its menhirs",
  description:
    "Discover Carnac, its famous megaliths, beaches, and La Trinité sur Mer harbour aboard the Petit Train de Carnac. A 55-minute guided sightseeing tour with multilingual audio commentary.",
  icons: { icon: "/figma-assets/logo.svg" },
  openGraph: {
    title: "Petit Train de Carnac — Guided sightseeing tour",
    description:
      "A comfortable, accessible way to discover Carnac's menhirs, beaches, and landscapes with multilingual audio commentary.",
    type: "website",
    locale: "en_GB",
    images: ["/figma-assets/hero-image.jpg"],
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
        <Navbar />
        {/* Spacer for fixed header: announcement banner + nav 80px (banner can wrap on mobile) */}
        <div aria-hidden="true" className="h-[152px] sm:h-[116px]" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
