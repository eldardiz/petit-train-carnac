import Image from "next/image";

const individualRows = [
  { label: "Adultes", price: "8,50€" },
  { label: "Enfants de moins de 12 ans", price: "5€" },
];

const bonsPlansRows = [
  { label: "Adultes", price: "7,00€" },
  { label: "Enfants de moins de 12 ans", price: "3,50€" },
];

export default function Prices() {
  return (
    <section data-anim-section className="relative bg-[#4d1c64] py-20 overflow-hidden">
      {/* Decorative hexagonal pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
      >
        <Image
          src="/figma-assets/hexagonal-pattern.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 xl:px-0 w-full flex flex-col gap-20 items-center">
        {/* Header */}
        <div data-anim-item className="relative flex flex-col gap-6 items-center text-center max-w-[623px]">
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
            <p className="font-['Bricolage_Grotesque',sans-serif] italic text-[#f5ebdd] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
              Tarifs
            </p>
          </div>
          <h2 className="font-normal font-['Bricolage_Grotesque',sans-serif] text-[32px] sm:text-[40px] md:text-[48px] text-[#f5ebdd] leading-[1.1] tracking-[-1.5px] sm:tracking-[-2.5px] md:tracking-[-3.36px] max-w-[581px] w-full [text-wrap:balance] break-words">
            Une aventure abordable pour toute la famille
          </h2>
          <p className="font-['Manrope',sans-serif] text-[#f5ebdd] text-[16px] leading-[1.2] tracking-[-0.48px] max-w-[551px] w-full">
            Des explorateurs solitaires aux grandes familles, trouvez le tarif
            idéal pour votre visite. Profitez de nos tarifs spéciaux pour les
            enfants et les familles.
          </p>
        </div>

        {/* Pricing Cards */}
        <div data-anim-item className="relative flex flex-col lg:flex-row gap-8 items-start justify-center">
          {/* Individual Tickets */}
          <div className="bg-[#f5ebdd] flex flex-col w-full max-w-[371px] min-h-[317px] p-6 relative rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="relative shrink-0 w-6 h-6">
                  <Image
                    src="/figma-assets/PurpleCashIcon.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-['Bricolage_Grotesque',sans-serif] italic text-[#4d1c64] text-[24px] leading-normal tracking-[-0.72px] whitespace-nowrap">
                  Billets Individuels
                </p>
              </div>
              <div className="border-b border-[rgba(0,0,0,0.15)] mb-2" />
              <div className="flex flex-col mt-2">
                {individualRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-2 border-b border-[rgba(0,0,0,0.15)]"
                  >
                    <p className="font-['Manrope',sans-serif] text-[#232323] text-[16px]">
                      {row.label}
                    </p>
                    <p className="font-['Manrope',sans-serif] font-extrabold text-[#4d1c64] text-[18px] text-right">
                      {row.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-2.5 mt-auto pt-4">
                <div className="relative shrink-0 w-6 h-6">
                  <Image
                    src="/figma-assets/icon-info.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-['Manrope',sans-serif] text-[11px] text-[rgba(35,35,35,0.7)] leading-[1.4] tracking-[-0.5px]">
                  <strong>Pour les individuels :</strong> le point de rendez-vous
                  est au point de départ ; guichet sur place.
                </p>
              </div>
          </div>

          {/* Bons Plans — Premiers départs du matin */}
          <div className="bg-[#f5ebdd] border-2 border-[#4d1c64] flex flex-col w-full max-w-[371px] min-h-[317px] p-6 relative rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className="absolute top-0 right-0 bg-[#4d1c64] px-3 py-1">
                <p className="font-['Manrope',sans-serif] text-white text-[11px] font-medium tracking-[0.5px] uppercase">
                  Bon Plan
                </p>
              </div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="relative shrink-0 w-6 h-6">
                  <Image
                    src="/figma-assets/PurpleCashIcon.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-['Bricolage_Grotesque',sans-serif] italic text-[#4d1c64] text-[24px] leading-normal tracking-[-0.72px]">
                  Premiers départs du matin
                </p>
              </div>
              <div className="border-b border-[rgba(0,0,0,0.15)] mb-2" />
              <div className="flex flex-col mt-2">
                {bonsPlansRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between py-2 border-b border-[rgba(0,0,0,0.15)]"
                  >
                    <p className="font-['Manrope',sans-serif] text-[#232323] text-[16px]">
                      {row.label}
                    </p>
                    <p className="font-['Manrope',sans-serif] font-extrabold text-[#4d1c64] text-[18px] text-right">
                      {row.price}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-2.5 mt-auto pt-4">
                <div className="relative shrink-0 w-6 h-6">
                  <Image
                    src="/figma-assets/icon-info.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-['Manrope',sans-serif] text-[11px] text-[rgba(35,35,35,0.7)] leading-[1.4] tracking-[-0.5px]">
                  <strong>Tarif réduit :</strong> -1,50€ de réduction par ticket, applicable uniquement aux premiers départs du matin (avant 10H20 ou 10H30 selon la destination). Billets disponibles au guichet sur place.
                </p>
              </div>
          </div>

          {/* Group Booking */}
          <div className="bg-[#4d1c64] border border-[rgba(247,247,240,0.15)] flex flex-col w-full max-w-[371px] min-h-[317px] p-6 relative rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="relative shrink-0 w-6 h-6">
                  <Image
                    src="/figma-assets/icon-group.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-['Bricolage_Grotesque',sans-serif] italic text-white text-[24px] leading-normal tracking-[-0.72px] whitespace-nowrap">
                  Réservation de Groupe
                </p>
              </div>
              <div className="border-b border-[rgba(255,255,255,0.15)] mb-2" />
              <div className="flex flex-col gap-4 mt-4">
                <p className="font-['Manrope',sans-serif] text-white text-[16px] leading-[1.4]">
                  Pour connaître les tarifs groupes, contactez-nous directement :
                </p>
                <div className="flex flex-col gap-2">
                  <a
                    href="mailto:petittrain-lebayon@orange.fr"
                    className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
                  >
                    <div className="relative shrink-0 w-5 h-5">
                      <Image src="/figma-assets/icon-email.svg" alt="" fill className="object-contain" aria-hidden="true" />
                    </div>
                    <span className="font-['Manrope',sans-serif] text-[15px] underline underline-offset-2">
                      petittrain-lebayon@orange.fr
                    </span>
                  </a>
                  <a
                    href="tel:+33297240629"
                    className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
                  >
                    <div className="relative shrink-0 w-5 h-5">
                      <Image src="/figma-assets/icon-phone.svg" alt="" fill className="object-contain" aria-hidden="true" />
                    </div>
                    <span className="font-['Manrope',sans-serif] text-[15px]">
                      02 97 24 06 29
                    </span>
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-2.5 mt-auto pt-4">
                <div className="relative shrink-0 w-6 h-6">
                  <Image
                    src="/figma-assets/icon-info-white.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
                <p className="font-['Manrope',sans-serif] text-[11px] text-[rgba(255,255,255,0.7)] leading-[1.4] tracking-[-0.5px]">
                  <strong>Pour les groupes :</strong> tarif réduit à partir de 20 personnes embarquant. La réservation à l&rsquo;avance est recommandée.
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
