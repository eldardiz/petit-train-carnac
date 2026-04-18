import Image from "next/image";
import TransitionLink from "@/components/ui/TransitionLink";

export default function InformationsCTA() {
  return (
    <section className="relative overflow-hidden py-16 xl:py-28">
      {/* Background image + overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Image
          src="/figma-assets/group-booking-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
          {/* Left: section label + heading */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="relative shrink-0 w-[19px] h-[19px]">
                <Image
                  src="/figma-assets/icon-train-white.svg"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <p className="font-['Libre_Baskerville',serif] italic text-[#f7f7f0] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
                Réservation de Groupe — Privatisation
              </p>
            </div>
            <h2 className="font-['Libre_Baskerville',serif] text-[clamp(36px,4vw,48px)] leading-[1.15] tracking-[-3.36px] text-[#f7f7f0] max-w-[575px]">
              Réservation pour visites privées
            </h2>
          </div>

          {/* Right: body text + CTA */}
          <div className="flex-1 flex flex-col gap-8">
            <p className="font-['Inter',sans-serif] text-[18px] leading-[1.2] tracking-[-0.54px] text-[#e5e5e5]">
              Si vous voyagez en groupe ou planifiez une visite privée, nous
              vous recommandons d&apos;utiliser notre formulaire de demande
              dédié. Cela permet à notre équipe de confirmer la disponibilité
              et de vous proposer la meilleure option pour votre visite.
            </p>
            <div>
              <TransitionLink
                href="/privatization"
                className="btn-primary inline-flex items-center h-[45px] px-[22px] bg-[#f7f7f0] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
              >
                Réservation privatisation
              </TransitionLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
