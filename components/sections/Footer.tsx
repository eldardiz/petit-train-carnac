import Image from "next/image";
import TransitionLink from "@/components/ui/TransitionLink";

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "Le Parcours", href: "/routes" },
  { label: "Informations Pratiques", href: "/informations" },
  { label: "Tarifs", href: "/prices" },
  { label: "FAQ", href: "/faqs" },
  { label: "Carrières", href: "/careers" },
];

const otherLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de Confidentialité", href: "/politique-de-confidentialite" },
  { label: "Tarifs", href: "/prices" },
  { label: "FAQ", href: "/faqs" },
  { label: "Privatisation", href: "/privatisation" },
];

const socialIcons = [
  { src: "/figma-assets/icon-facebook.svg", alt: "Facebook", href: "https://www.facebook.com/lespetitstrainsdumorbihan" },
];

export default function Footer() {
  return (
    <footer className="bg-[#58496c] flex flex-col items-center gap-16 pb-12 overflow-hidden">
      {/* CTA Block — has background image */}
      <div className="relative w-full overflow-hidden">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
          <Image
            src="/figma-assets/FooterBackground.jpg"
            alt=""
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-5 xl:px-0 py-16">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="flex flex-col gap-8 max-w-[570px]">
              <p className="font-['Libre_Baskerville',serif] text-[#f7f7f0] text-[28px] sm:text-[34px] md:text-[40px] leading-[1.15] tracking-[-1.3px] sm:tracking-[-2px] md:tracking-[-2.8px] break-words">
                Prêt à découvrir Carnac de façon simple et agréable&nbsp;?
              </p>
              <div className="flex flex-col gap-8 items-start">
                <p className="font-['Roboto',sans-serif] font-light text-white text-[18px] leading-[1.5] tracking-[-0.54px] w-full">
                  Embarquez à bord du Petit Train de Carnac pour une visite guidée alliant histoire, paysages et confort. Découvrez les célèbres menhirs de Carnac, les plages de sable blanc et le port de La Trinité-sur-Mer, sans fatigue et avec un commentaire audio clair tout au long du parcours.
                </p>
                <div className="flex gap-3 items-center flex-wrap">
                  <TransitionLink
                    href="/book"
                    className="btn-primary inline-flex items-center h-[45px] px-[22px] bg-[#f7f7f0] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
                  >
                    Réserver
                  </TransitionLink>
                  <TransitionLink
                    href="/prices"
                    className="btn-secondary inline-flex items-center justify-center h-[45px] px-[22px] bg-transparent border border-[rgba(247,247,240,0.4)] rounded-[4px] text-[#f7f7f0] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
                  >
                    Voir les Tarifs
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links Block — solid purple, no bg image */}
      <div className="w-full max-w-[1280px] mx-auto px-5 xl:px-0 pt-4">
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-between">
          {/* Logo + tagline */}
          <div className="flex flex-col gap-8 max-w-[320px]">
            <div className="relative w-[110px] h-11">
              <Image
                src="/figma-assets/logo.svg"
                alt="Petit Train de Carnac"
                fill
                className="object-contain"
              />
            </div>
            <p className="font-['Roboto',sans-serif] font-light text-[12px] leading-[1.4] tracking-[-0.24px] text-[rgba(247,247,240,0.6)]">
              Le Petit Train de Carnac propose une visite guidée à travers l'une des régions les plus remarquables du sud de la Bretagne. Confortablement installés à bord, les visiteurs découvrent Carnac, ses célèbres mégalithes, ses plages et le port voisin, de manière détendue et accessible.
            </p>
          </div>

          {/* Footer link columns */}
          <div className="flex gap-12 flex-wrap">
            {/* Quick Links */}
            <div className="flex flex-col gap-1 w-[156px]">
              <p className="font-['Inter',sans-serif] font-semibold text-[#f7f7f0] text-base leading-6 mb-1">
                Liens Rapides
              </p>
              {quickLinks.map((link) => (
                <TransitionLink
                  key={link.label}
                  href={link.href}
                  className="footer-link font-['Roboto',sans-serif] font-light text-[#f7f7f0] text-base leading-6"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-1 w-[222px]">
              <p className="font-['Inter',sans-serif] font-semibold text-[#f7f7f0] text-base leading-6 mb-1">
                Contactez-nous
              </p>
              <a
                href="mailto:petittrain-lebayon@orange.fr"
                className="flex items-center gap-1.5 font-['Roboto',sans-serif] font-light text-[#f7f7f0] text-base leading-6 hover:text-white transition-colors"
              >
                <div className="relative shrink-0 w-4 h-4">
                  <Image src="/figma-assets/icon-email.svg" alt="" fill className="object-contain" aria-hidden="true" />
                </div>
                petittrain-lebayon@orange.fr
              </a>
              <a
                href="tel:+33297240629"
                className="flex items-center gap-1.5 font-['Roboto',sans-serif] font-light text-[#f7f7f0] text-base leading-6 hover:text-white transition-colors underline"
              >
                <div className="relative shrink-0 w-4 h-4">
                  <Image src="/figma-assets/icon-phone.svg" alt="" fill className="object-contain" aria-hidden="true" />
                </div>
                +33 2 97 24 06 29
              </a>
            </div>

            {/* Other */}
            <div className="flex flex-col gap-1 w-[156px]">
              <p className="font-['Inter',sans-serif] font-semibold text-[#f7f7f0] text-base leading-6 mb-1">
                Autres
              </p>
              {otherLinks.map((link) => (
                <TransitionLink
                  key={link.label}
                  href={link.href}
                  className="footer-link font-['Roboto',sans-serif] font-light text-[#f7f7f0] text-base leading-6"
                >
                  {link.label}
                </TransitionLink>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full max-w-[1280px] mx-auto px-5 xl:px-0">
        <div className="border-t border-[rgba(233,234,235,0.2)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 flex-wrap">
          <p className="font-['Inter',sans-serif] text-white text-base leading-6 whitespace-nowrap">
            © 2026 Built by{" "}
            <a
              href="https://www.softbird.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-white transition-colors"
            >
              Softbird
            </a>
            . Tous droits réservés.
          </p>
          <div className="flex gap-6 items-center">
            {socialIcons.map((icon) => (
              <a
                key={icon.alt}
                href={icon.href}
                aria-label={icon.alt}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon relative w-6 h-6 shrink-0"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  fill
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
