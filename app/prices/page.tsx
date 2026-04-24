import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Prices from "@/components/sections/Prices";
import InformationsSchedule from "@/components/sections/InformationsSchedule";
import Reviews from "@/components/sections/Reviews";
import Locations from "@/components/sections/Locations";
import FAQ from "@/components/sections/FAQ";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata = {
  title: "Tarifs & Billets",
  description:
    "Découvrez les tarifs du Petit Train de Carnac. Tarifs individuels et de groupe pour adultes et enfants, avec réservation en ligne disponible.",
  alternates: { canonical: '/prices' },
};

const pricesRightCard = (
  <div className="absolute bottom-[514px] lg:bottom-[30px] left-1/2 -translate-x-1/2 lg:left-[189px] lg:translate-x-0 bg-[rgba(84,32,109,0.65)] border border-[rgba(255,255,255,0.2)] rounded-xl p-6 w-[499px] max-w-[calc(100%-32px)] flex flex-col gap-4 z-20">
    <div className="flex items-start justify-between gap-4">
      <p className="font-['Manrope',sans-serif] font-semibold text-[20px] leading-[1.1] text-white tracking-[-0.8px] max-w-[312px]">
        &ldquo;Je ne m&rsquo;attendais pas à autant pour 8,50 euros. Vraiment une belle expérience.&rdquo;
      </p>
      <div className="relative h-[43px] w-[76px] shrink-0">
        <Image
          src="/figma-assets/stars.svg"
          alt="5 stars"
          fill
          className="object-contain object-left"
        />
      </div>
    </div>
    <p className="font-['Manrope',sans-serif] font-normal text-[14px] leading-[1.4] text-white tracking-[-0.56px]">
      Dom L. · Google Review
    </p>
  </div>
);

const pricingFaqs = [
  {
    question: "Quel est le tarif d'un billet pour le Petit Train de Carnac ?",
    answer:
      "Les tarifs dépendent de l'âge et de la taille du groupe. Pour les visiteurs individuels, le billet adulte standard est à 8,5 euros. Les enfants de moins de 12 ans bénéficient d'un tarif réduit à 5 euros. Les tarifs de groupe s'appliquent à partir de 20 personnes.",
  },
  {
    question: "Y a-t-il des tarifs réduits pour les enfants ?",
    answer:
      "Oui. Les enfants de moins de 12 ans bénéficient d'un tarif réduit. Leur billet donne accès à la même visite guidée et au commentaire audio, dont une version spécialement adaptée aux enfants.",
  },
  {
    question: "Les enfants ont-ils besoin d'un billet pour monter dans le Petit Train ?",
    answer:
      "Oui. Tout passager doit être en possession d'un billet pour embarquer dans le Petit Train de Carnac. Des tarifs réduits sont appliqués pour les enfants de moins de 12 ans.",
  },
  {
    question: "Existe-t-il des réductions pour les groupes ?",
    answer:
      "Oui. Des tarifs de groupe sont disponibles à partir de 20 personnes embarquant. Ces tarifs réduits s'appliquent aux adultes comme aux enfants. La réservation à l'avance est recommandée pour les groupes afin de garantir la disponibilité.",
  },
  {
    question: "Qu'est-ce qui est inclus dans le prix du billet ?",
    answer:
      "Chaque billet comprend la visite guidée complète d'environ 55 minutes, le commentaire audio multilingue, une version adaptée aux enfants, et une expérience confortable à bord. Aucun supplément n'est à prévoir.",
  },
  {
    question: "Peut-on acheter les billets sur place ?",
    answer:
      "Oui. Les billets peuvent être achetés au guichet situé au parking du Ménec, sous réserve de disponibilité. En haute saison touristique, les places peuvent être complètes, il est donc conseillé de réserver à l'avance.",
  },
  {
    question: "Peut-on réserver des billets en ligne ?",
    answer:
      "Oui. La réservation en ligne est disponible et recommandée, notamment en période de pointe. Les réservations en ligne doivent être effectuées au moins deux heures avant le départ.",
  },
];

export default function PricesPage() {
  return (
<>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Tarifs & Billets', path: '/prices' }]} />
          <main>
      <Hero
        label="Tarifs & Billets"
        heading={
          <>
            Tarifs des billets du{" "}
            <em className="italic text-[#4d1c64]">Petit Train de Carnac</em>
          </>
        }
        description="Retrouvez tous les tarifs et informations de réservation pour le Petit Train de Carnac. Cette page présente les tarifs individuels et de groupe, les réductions enfants, et comment réserver votre visite guidée à Carnac en toute confiance."
        tagline={null}
        buttons={
          <>
            <a
              href="/figma-assets/FlyerIndividual.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-animate-chars btn-primary gap-2 bg-[#54206d] h-[45px] px-[22px] rounded-[4px] text-white text-base font-medium font-['Manrope',sans-serif] tracking-[-0.64px] whitespace-nowrap inline-flex items-center shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)]"
            >
              <div className="btn-animate-chars__bg" />
              <div className="relative w-4 h-4 shrink-0">
                <Image
                  src="/figma-assets/DownloadWhite.svg"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <span data-button-animate-chars="" className="btn-animate-chars__text">Flyer individuel</span>
            </a>
            <a
              href="/figma-assets/GroupFlyer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-animate-chars btn-secondary gap-2 bg-[#f5ebdd] border border-[rgba(0,0,0,0.2)] h-[45px] px-[22px] rounded-[4px] text-[#414651] text-base font-medium font-['Manrope',sans-serif] tracking-[-0.64px] whitespace-nowrap inline-flex items-center"
            >
              <div className="btn-animate-chars__bg" />
              <div className="relative w-4 h-4 shrink-0">
                <Image
                  src="/figma-assets/DownloadBlack.svg"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <span data-button-animate-chars="" className="btn-animate-chars__text">Flyer de groupe</span>
            </a>
          </>
        }
        googleBadgeText="Le Petit Train de Carnac est noté 4,7 sur Google, avec plus de 6 000 avis, ce qui en fait l'une des attractions touristiques les plus populaires de Carnac."
        rightImageSrc="/figma-assets/PricesHero.jpg"
        rightImageAlt="Le Petit Train de Carnac"
        rightCard={pricesRightCard}
        showBottomBanner={false}
      />
      <div id="prices">
        <Prices />
      </div>
      <InformationsSchedule />
      <Reviews />
      <Locations />
      <FAQ
        faqs={pricingFaqs}
        label="Questions Fréquentes"
        heading={
          <>
            Questions Fréquemment Posées{" "}
            <em className="text-[#4d1c64]">sur les Tarifs</em>
          </>
        }
        description="Trouvez des réponses claires aux questions les plus fréquentes sur les tarifs, les réductions de groupe et comment réserver le Petit Train de Carnac."
      />
    </main>
  
    </>);
}
