import Image from "next/image";
import TransitionLink from "@/components/ui/TransitionLink";
import type { ReactNode } from "react";


const infoCards: { id: string; photo: string; title: string; description: ReactNode }[] = [
  {
    id: "duration",
    photo: "/figma-assets/practical-1.jpg",
    title: "Durée",
    description: (
      <>
        La visite touristique dure environ{" "}
        <strong>55 minutes.</strong> Cette durée vous permet de découvrir
        Carnac à un rythme détendu tout en profitant du commentaire et des
        paysages, sans vous sentir pressé ou fatigué.
      </>
    ),
  },
  {
    id: "departure",
    photo: "/figma-assets/practical-2.jpg",
    title: "Départ",
    description: (
      <>
        Les départs se font depuis le <strong>parking du Ménec</strong> à
        Carnac, directement en face de la Maison des Mégalithes. L&apos;arrêt
        est clairement signalisé et facile d&apos;accès. Aucune réservation
        préalable n&apos;est requise pour les visiteurs individuels.
      </>
    ),
  },
  {
    id: "schedule",
    photo: "/figma-assets/practical-3.jpg",
    title: "Horaires",
    description: (
      <>
        Les départs ont lieu <strong>d&apos;avril à septembre</strong>,
        plusieurs fois par jour. Le train fonctionne tous les jours en haute
        saison. Veuillez consulter les horaires actuels pour les heures exactes
        de départ et les ajustements saisonniers.
      </>
    ),
  },
  {
    id: "accessibility",
    photo: "/figma-assets/practical-4.jpg",
    title: "Accessibilité",
    description: (
      <>
        Le Petit Train est <strong>accessible à tous</strong>. Il est idéal
        pour les familles avec jeunes enfants, les visiteurs âgés et toute
        personne préférant éviter les longues marches tout en profitant du
        meilleur de Carnac.
      </>
    ),
  },
];

export default function PracticalInfo() {
  return (
    <section className="bg-[#f7f7f0] py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 xl:px-0 w-full flex flex-col gap-12 items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-[615px]">
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
            <p className="font-['Libre_Baskerville',serif] italic text-[#111] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
              Informations
            </p>
          </div>
          <h2 className="font-['Libre_Baskerville',serif] text-[32px] sm:text-[40px] md:text-[48px] text-[#181d27] leading-[1.15] tracking-[-1.5px] sm:tracking-[-2.5px] md:tracking-[-3.36px] max-w-[575px] w-full break-words">
            Informations Pratiques
          </h2>
          <p className="font-['Inter',sans-serif] text-[18px] text-[#535862] leading-[1.2] tracking-[-0.54px]">
            Pour vous aider à planifier votre visite en train touristique à
            Carnac, voici les informations essentielles à connaître avant de
            réserver.
          </p>
        </div>

        {/* Cards grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Row 1: 4 photo cards */}
          {infoCards.map((card) => (
            <div key={card.id} className="relative h-[423px] rounded-xl overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                >
                  <Image
                    src={card.photo}
                    alt=""
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(88,73,108,0.52)] from-[34%] to-[rgba(88,73,108,0.8)]" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 text-white">
                  <p className="font-['Libre_Baskerville',serif] text-[24px] leading-[1.5] tracking-[-1.68px]">
                    {card.title}
                  </p>
                  <p className="font-['Inter',sans-serif] text-[14px] leading-[1.3] tracking-[-0.42px]">
                    {card.description}
                  </p>
                </div>
              </div>
          ))}

          {/* Row 2 col 1-2: wide photo card */}
          <div className="col-span-2 relative h-[423px] rounded-xl overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
              >
                <Image
                  src="/figma-assets/practical-5.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(88,73,108,0.52)] from-[34%] to-[rgba(88,73,108,0.8)]" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 text-white">
                <p className="font-['Libre_Baskerville',serif] text-[24px] leading-[1.5] tracking-[-1.68px]">
                  Paiement
                </p>
                <p className="font-['Inter',sans-serif] text-[14px] leading-[1.3] tracking-[-0.42px]">
                  Les billets peuvent être achetés{" "}
                  <strong>directement à bord</strong> ou au point de départ.
                  Le paiement en espèces ou par carte est accepté. Des tarifs
                  groupes et scolaires sont disponibles — contactez-nous pour
                  un devis.
                </p>
              </div>
          </div>

          {/* Row 2 col 3-4: purple CTA card */}
          <div className="col-span-2 relative h-[423px] rounded-xl overflow-hidden bg-[#58496c]">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-40"
              >
                <Image
                  src="/figma-assets/train-illustration.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-8 left-8 right-8 flex flex-col gap-2 text-white">
                <p className="font-['Libre_Baskerville',serif] text-[32px] leading-[1.5] tracking-[-2.24px]">
                  Plus d&apos;informations
                </p>
                <p className="font-['Inter',sans-serif] text-[16px] leading-[1.3] tracking-[-0.48px] max-w-[357px]">
                  Consultez notre guide complet pour les tarifs des billets,
                  les modes de paiement et des conseils supplémentaires pour
                  profiter au maximum de votre voyage à travers les mégalithes.
                </p>
              </div>
              <div className="absolute bottom-6 right-6">
                <TransitionLink
                  href="/informations"
                  className="btn-primary inline-flex items-center justify-center h-[45px] px-[22px] bg-[#f7f7f0] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-[#58496c] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
                >
                  En savoir plus
                </TransitionLink>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
