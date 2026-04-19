import Image from "next/image";

export default function InformationsIntro() {
  return (
    <section data-anim-section className="bg-[#f7f7f0] py-16">
      <div className="max-w-[1280px] mx-auto px-5 xl:px-0 border-t border-[rgba(0,0,0,0.15)] pt-8 flex flex-col gap-10">
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
            Note Importante
          </p>
        </div>

        {/* Two-column heading + text layout */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="lg:w-[559px] shrink-0">
            <h2 className="font-['Libre_Baskerville',serif] text-[clamp(36px,4vw,48px)] leading-[1.1] tracking-[-3.36px] text-[#181d27]">
              Réservation en Ligne
            </h2>
          </div>
          <div className="flex-1">
            <p className="font-['Inter',sans-serif] text-[18px] md:text-[20px] leading-[1.5] text-[#535862]">
              La réservation est possible mais non obligatoire. Vous pouvez réserver jusqu&apos;à <strong>2 heures</strong> avant le départ souhaité. N&apos;oubliez pas de prévoir le temps de trajet et le stationnement sur place. Passé ce délai, rendez-vous directement au point de départ et achetez vos billets au guichet ou auprès du conducteur.
              <br />
              Toutes les places ne sont pas disponibles à la vente en ligne.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
