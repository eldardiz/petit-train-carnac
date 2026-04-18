import Image from "next/image";
import TransitionLink from "@/components/ui/TransitionLink";
import type { ReactNode } from "react";

interface HeroProps {
  label?: string;
  heading?: ReactNode;
  description?: ReactNode;
  tagline?: ReactNode;
  buttons?: ReactNode;
  googleBadgeText?: string;
  rightImageSrc?: string;
  rightImageAlt?: string;
  rightCard?: ReactNode;
  showBottomBanner?: boolean;
}

const defaultHeading = (
  <>
    Découvrez{" "}
    <em className="italic text-[#5a4a6e] not-[font-style:normal]">Carnac</em>{" "}
    à bord du Petit Train
  </>
);

const defaultDescription = (
  <>
    Le Petit Train de Carnac propose une visite guidée touristique à travers la
    ville et ses environs. Découvrez le plus beau site néolithique du monde lors
    de cette <strong className="font-bold">visite guidée de 50 minutes.</strong>{" "}
    C&apos;est une façon simple et confortable de découvrir Carnac, son
    patrimoine et ses paysages emblématiques, sans avoir besoin de marcher
    longtemps.
  </>
);

const defaultButtons = (
  <>
    <TransitionLink
      href="/book"
      className="btn-primary bg-[#5a4a6e] h-[45px] px-[22px] rounded-[4px] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap inline-flex items-center shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)]"
    >
      Réservez votre visite
    </TransitionLink>
    <TransitionLink
      href="/prices"
      className="btn-secondary bg-[#f7f7f0] border border-[rgba(0,0,0,0.2)] h-[45px] px-[22px] rounded-[4px] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap inline-flex items-center"
    >
      Voir les Tarifs
    </TransitionLink>
  </>
);

const defaultRightCard = (
  <div className="absolute bottom-[514px] lg:bottom-[30px] left-1/2 -translate-x-1/2 lg:left-[189px] lg:translate-x-0 bg-[rgba(90,74,110,0.65)] border border-[rgba(255,255,255,0.2)] rounded-xl p-6 w-[499px] max-w-[calc(100%-32px)] flex flex-col gap-4 z-20">
    <div className="flex items-start justify-between gap-4">
      <p className="font-['Roboto',sans-serif] font-semibold text-[20px] leading-[1.1] text-white tracking-[-0.8px] max-w-[312px]">
        Visite guidée avec commentaire audio en 16 langues
      </p>
      <div className="relative h-[43px] w-[83px] shrink-0 overflow-hidden rounded">
        <Image
          src="/figma-assets/languages-flags.png"
          alt="Drapeaux des langues"
          fill
          className="object-cover"
        />
      </div>
    </div>
    <p className="font-['Roboto',sans-serif] font-normal text-[14px] leading-[1.4] text-white tracking-[-0.56px] max-w-[312px]">
      Français, anglais, allemand, espagnol, italien, portugais, néerlandais,
      russe, chinois, japonais, suédois, danois, polonais, arabe, croate et
      slovène.
    </p>
  </div>
);

export default function Hero({
  label = "Le Petit Trains de Morbihan · Carnac",
  heading = defaultHeading,
  description = defaultDescription,
  tagline = "Idéal pour les familles, les couples, les seniors et les visiteurs de tous âges.",
  buttons = defaultButtons,
  googleBadgeText = "Le Petit Train de Carnac est noté 4,7 sur Google, avec plus de 6 000 avis, ce qui en fait l'une des attractions touristiques les plus populaires de Carnac.",
  rightImageSrc = "/figma-assets/hero-image.jpg",
  rightImageAlt = "Le Petit Train de Carnac sur un parcours pittoresque",
  rightCard = defaultRightCard,
  showBottomBanner = true,
}: HeroProps) {
  return (
    <section className="bg-[#f7f7f0] overflow-hidden">
      {/* Main hero section: left text + right image */}
      <div className="flex flex-col lg:flex-row lg:items-stretch min-h-[721px] relative">
        {/* Left panel */}
        <div className="flex-1 flex items-center justify-end py-24 bg-[#f7f7f0] relative z-10">
          <div className="w-full max-w-[640px] px-5 xl:px-0">
            <div className="pr-8 flex flex-col gap-10">
              {/* Heading block */}
              <div className="flex flex-col gap-6">
                {/* Section label */}
                <div className="flex items-center gap-2">
                  <div className="relative shrink-0 w-[19px] h-[19px]">
                    <Image
                      src="/figma-assets/icon-train.svg"
                      alt=""
                      fill
                      className="object-contain"
                      aria-hidden="true"
                    />
                  </div>
                  <p className="font-['Libre_Baskerville',serif] italic text-[#5a4a6e] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
                    {label}
                  </p>
                </div>

                {/* Main heading */}
                <h1 className="font-['Libre_Baskerville',serif] text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.1] tracking-[-1.8px] sm:tracking-[-2.4px] md:tracking-[-3.2px] lg:tracking-[-4.2px] text-[#181d27] not-italic w-full break-words">
                  {heading}
                </h1>

                {/* Description */}
                <p className="font-['Roboto',sans-serif] text-[#535862] text-base leading-[1.2] tracking-[-0.48px]">
                  {description}
                </p>

                {/* Tagline */}
                {tagline && (
                  <p className="font-['Roboto',sans-serif] font-semibold text-[#535862] text-base leading-[1.2] tracking-[-0.48px]">
                    {tagline}
                  </p>
                )}
              </div>

              {/* CTA buttons */}
              <div className="flex items-center gap-3">{buttons}</div>

              {/* Divider */}
              <hr className="border-t border-[rgba(0,0,0,0.12)] w-[554px] max-w-full" />

              {/* Google rating block */}
              <div className="flex flex-col gap-4">
                <div className="bg-white flex items-center gap-[10px] px-2 py-1 rounded-lg w-fit">
                  <div className="relative size-6 shrink-0">
                    <Image
                      src="/figma-assets/google-icon.svg"
                      alt="Google"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <div className="flex items-center gap-1">
                      <span className="font-['Nunito',sans-serif] font-bold text-[14px] leading-normal text-black tracking-[-0.42px]">
                        4,7
                      </span>
                      <div className="relative h-3 w-[76px] shrink-0">
                        <Image
                          src="/figma-assets/stars.svg"
                          alt="4,7 sur 5 étoiles"
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                    </div>
                    <p className="font-['Nunito',sans-serif] font-normal text-[11px] leading-normal text-black tracking-[-0.33px] opacity-60">
                      6 000+ avis
                    </p>
                  </div>
                </div>

                <p className="font-['Roboto',sans-serif] text-[#535862] text-base leading-[1.2] tracking-[-0.48px] max-w-[499px]">
                  {googleBadgeText}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel: image + diagonal split overlay */}
        <div className="flex-1 relative min-h-[480px] lg:min-h-0 overflow-hidden">
          {/* Diagonal left edge overlay to create the angled split */}
          <div
            className="absolute inset-y-0 left-0 w-24 bg-[#f7f7f0] z-10 origin-top-left [clip-path:polygon(0_0,100%_0,0_100%)]"
            aria-hidden="true"
          />

          {/* Hero image */}
          <div className="absolute inset-0">
            <Image
              src={rightImageSrc}
              alt={rightImageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Overlay card */}
          {rightCard}
        </div>
      </div>

      {/* HeroBanner: Online Booking section */}
      {showBottomBanner && (
        <div className="bg-[#f7f7f0] border-t border-[rgba(0,0,0,0.15)] pt-[34px] pb-16">
          <div className="max-w-[1280px] mx-auto px-5 xl:px-0 flex flex-col gap-10">
            {/* Section label */}
            <div className="flex items-center gap-2">
              <div className="relative shrink-0 w-[19px] h-[19px]">
                <Image
                  src="/figma-assets/icon-train.svg"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <p className="font-['Libre_Baskerville',serif] italic text-[#5a4a6e] text-base leading-6 tracking-[-0.48px]">
                Note Importante
              </p>
            </div>

            {/* Content row */}
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              {/* Heading */}
              <div className="lg:w-[559px] shrink-0">
                <h2 className="font-['Libre_Baskerville',serif] text-[32px] sm:text-[40px] md:text-[48px] leading-[1.1] tracking-[-1.5px] sm:tracking-[-2.5px] md:tracking-[-3.36px] text-[#181d27] not-italic break-words">
                  Réservation en Ligne
                </h2>
              </div>
              {/* Supporting text */}
              <div className="flex-1">
                <p className="font-['Inter',sans-serif] font-normal text-[20px] leading-[30px] text-[#535862]">
                  La réservation est possible mais non obligatoire. Vous pouvez
                  réserver jusqu&apos;à{" "}
                  <strong className="font-bold">2 heures</strong> avant le
                  départ souhaité. N&apos;oubliez pas de prévoir le temps de
                  trajet et le stationnement sur place. Passé ce délai, rendez-
                  vous directement au point de départ et achetez vos billets au
                  guichet ou auprès du conducteur.
                  <br />
                  Toutes les places ne sont pas disponibles à la vente en ligne.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
