import Image from "next/image";
import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "The Route", href: "/routes" },
  { label: "Practical information", href: "/informations" },
  { label: "Prices", href: "/prices" },
  { label: "FAQ", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const otherLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
  { label: "Prices", href: "/prices" },
  { label: "FAQ", href: "/faqs" },
  { label: "Contact", href: "/contact" },
];

const socialIcons = [
  { src: "/figma-assets/icon-facebook.svg", alt: "Facebook", href: "#" },
  { src: "/figma-assets/icon-twitter.svg", alt: "Twitter / X", href: "#" },
  { src: "/figma-assets/icon-instagram.svg", alt: "Instagram", href: "#" },
  { src: "/figma-assets/icon-linkedin.svg", alt: "LinkedIn", href: "#" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#58496c] flex flex-col items-center gap-16 pt-16 pb-12 overflow-hidden">
      {/* Background image with overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Image
          src="https://picsum.photos/seed/footer-bg/1440/468"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.25)]" />
      </div>

      {/* CTA Block */}
      <div className="relative w-full max-w-[1280px] px-[5%]">
        <div className="flex flex-col lg:flex-row gap-8 items-start py-8">
          <div className="flex flex-col gap-8 max-w-[570px]">
            <p className="font-['Libre_Baskerville',serif] text-[#f7f7f0] text-[40px] leading-[1.15] tracking-[-2.8px]">
              Ready to discover Carnac in a simple and enjoyable way?
            </p>
            <div className="flex flex-col gap-8 items-start">
              <p className="font-['Roboto',sans-serif] font-light text-white text-[18px] leading-[1.5] tracking-[-0.54px] w-full">
                Join the Petit Train de Carnac for a guided sightseeing tour that combines history, landscapes, and comfort. Discover the famous Carnac menhirs, white sand beaches, and the harbour of La Trinité sur Mer without long walks and with clear audio commentary throughout the journey.
              </p>
              <div className="flex gap-3 items-center flex-wrap">
                {/* Cream CTA button */}
                <Link
                  href="/book"
                  className="btn-primary inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#f7f7f0] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
                >
                  <div className="relative shrink-0 w-5 h-5">
                    <Image
                      src="/figma-assets/icon-ticket.svg"
                      alt=""
                      fill
                      className="object-contain"
                      aria-hidden="true"
                    />
                  </div>
                  Book your tour
                </Link>
                {/* Outline button */}
                <Link
                  href="/prices"
                  className="btn-secondary inline-flex items-center justify-center h-[45px] px-[22px] bg-[#58496c] border border-[rgba(247,247,240,0.2)] rounded-[4px] text-[#f7f7f0] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
                >
                  See Pricing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Links Block */}
      <div className="relative w-full max-w-[1280px] px-[5%] pt-12">
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
              The Petit Train de Carnac offers a guided sightseeing tour through one of the most remarkable areas of Southern Brittany. Comfortably seated aboard a tourist train, visitors can discover Carnac, its famous megaliths, beaches, and nearby harbour in a relaxed and accessible way.
            </p>
          </div>

          {/* Footer link columns */}
          <div className="flex gap-12 flex-wrap">
            {/* Quick Links */}
            <div className="flex flex-col gap-1 w-[156px]">
              <p className="font-['Inter',sans-serif] font-semibold text-[#f7f7f0] text-base leading-6 mb-1">
                Quick Links
              </p>
              {quickLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="footer-link font-['Roboto',sans-serif] font-light text-[#f7f7f0] text-base leading-6"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Contact Us */}
            <div className="flex flex-col gap-1 w-[222px]">
              <p className="font-['Inter',sans-serif] font-semibold text-[#f7f7f0] text-base leading-6 mb-1">
                Contact Us
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
                Other
              </p>
              {otherLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="footer-link font-['Roboto',sans-serif] font-light text-[#f7f7f0] text-base leading-6"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative w-full max-w-[1280px] px-[5%]">
        <div className="border-t border-[rgba(233,234,235,0.2)] pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 flex-wrap">
          <p className="font-['Inter',sans-serif] text-white text-base leading-6 whitespace-nowrap">
            © 2026 Built by Softbird. All rights reserved.
          </p>
          <div className="flex gap-6 items-center">
            {socialIcons.map((icon) => (
              <a
                key={icon.alt}
                href={icon.href}
                aria-label={icon.alt}
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
