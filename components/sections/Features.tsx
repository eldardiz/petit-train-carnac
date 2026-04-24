import Image from "next/image";

const features = [
  {
    icon: "/figma-assets/icon-train-seat.svg",
    title: "Petit train touristique confortable",
    description:
      "Découvrez les plus beaux sites de Carnac confortablement assis à bord de notre train touristique, conçu pour les visiteurs qui souhaitent explorer sans effort.",
  },
  {
    icon: "/figma-assets/icon-audio-guide.svg",
    title: "Commentaire audio en 16 langues — inclus dans le billet",
    description:
      "Le commentaire audio est disponible en 16 langues, inclus dans le prix du billet. Une version pour les enfants est disponible en français et en anglais.",
  },
  {
    icon: "/figma-assets/icon-landmark.svg",
    title: "Découverte du patrimoine et des paysages de Carnac",
    description:
      "Visitez les célèbres menhirs, les plages de sable blanc et le port de La Trinité-sur-Mer en un seul voyage détendu et pittoresque.",
  },
  {
    icon: "/figma-assets/icon-family.svg",
    title: "Adapté aux familles, seniors et groupes",
    description:
      "Notre train accueille tous les âges et toutes les tailles de groupes — pas de longues marches, pas d'effort, juste une expérience confortable et agréable pour tous.",
  },
];

export default function Features() {
  return (
    <section data-anim-section className="bg-[#f5ebdd] flex flex-col gap-16 py-24 overflow-hidden">
      {/* Header row */}
      <div className="w-full max-w-[1280px] px-5 xl:px-0 mx-auto">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left: label + heading */}
          <div data-anim-item className="flex flex-col gap-3 max-w-[615px]">
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
              <p className="font-['Bricolage_Grotesque',sans-serif] italic text-[#111] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
                Aperçu du Circuit
              </p>
            </div>
            <h2 className="font-normal font-['Bricolage_Grotesque',sans-serif] text-[32px] sm:text-[40px] md:text-[48px] text-[#181d27] leading-[1.15] tracking-[-1.5px] sm:tracking-[-2.5px] md:tracking-[-3.36px] max-w-[575px] [text-wrap:balance] break-words">
              Une façon simple et agréable d&apos;explorer Carnac
            </h2>
          </div>

          {/* Right: body text */}
          <div data-anim-item className="flex flex-col gap-5 max-w-[603px] font-['Manrope',sans-serif] text-[18px] text-[#535862] leading-[1.2] tracking-[-0.54px]">
            <p>
              Le Petit Train de Carnac vous invite à découvrir la ville à un
              rythme détendu, confortablement installé à bord d&apos;un train
              touristique conçu pour les visiteurs qui souhaitent profiter de
              Carnac sans effort.
            </p>
            <p>
              Pendant la visite, le commentaire audio fournit des informations
              claires et accessibles sur les lieux traversés, vous aidant à
              comprendre l&apos;histoire, les monuments et l&apos;atmosphère de
              Carnac. Ce train touristique est idéal pour les visiteurs qui
              recherchent une introduction agréable à Carnac et ses environs.
            </p>
          </div>
        </div>
      </div>

      {/* Features 2×2 grid + photo — inside 1280px container */}
      <div className="w-full max-w-[1280px] mx-auto px-5 xl:px-0 flex flex-col lg:flex-row items-stretch gap-12">
        {/* Left: 2×2 feature grid */}
        <div data-anim-item className="flex-1">
          <div className="grid grid-cols-2 gap-x-8 gap-y-12">
            {features.map((feature, index) => (
              <div key={feature.title} className="flex flex-col gap-5 items-start h-full">
                  {/* Icon box */}
                  <div className="relative shrink-0 w-16 h-16 rounded-[10px] border border-[#e9eaeb] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] overflow-hidden">
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-[#4d1c64] pointer-events-none rounded-[10px]"
                    />
                    <div className="absolute inset-[15px]">
                      <Image
                        src={feature.icon}
                        alt=""
                        fill
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2">
                    <p className="font-['Manrope',sans-serif] font-semibold text-[20px] text-[#181d27] leading-[1.5] tracking-[-0.8px]">
                      {feature.title}
                    </p>
                    <p className="font-['Manrope',sans-serif] text-base text-[#535862] leading-6">
                      {feature.description}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>

        {/* Right: photo — inside container, rounded all corners */}
        <div data-anim-item className="hidden lg:block flex-1 relative min-h-[560px] rounded-2xl overflow-hidden">
          <Image
            src="/figma-assets/features-photo.jpg"
            alt="Vue pittoresque depuis le Petit Train de Carnac"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
