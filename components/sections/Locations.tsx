import Image from "next/image";

const locations = [
  {
    id: "vannes",
    name: "Le Petit Train de Vannes",
    tagline: "Découvrez le cœur historique de Vannes",
    description:
      "Montez à bord du Petit Train de Vannes et explorez l'une des plus belles villes historiques de Bretagne. La visite guidée vous emmène dans des ruelles médiévales, le long d'anciens remparts et devant des monuments emblématiques qui racontent l'histoire de Vannes et de son riche passé. Cette excursion est idéale pour les visiteurs qui souhaitent découvrir l'histoire de la ville tout en profitant d'une expérience détendue et accessible.",
    cta: "Découvrir le Petit Train de Vannes",
    href: "https://www.petittrain-morbihan.com/en/vannes/",
    image: "/figma-assets/vannes.jpg",
    imageAlt: "Centre historique de Vannes",
    roundedClass: "rounded-tl-[32px]",
  },
  {
    id: "quiberon",
    name: "Le Petit Train de Quiberon",
    tagline: "Explorez la splendide presqu'île de Quiberon",
    description:
      "Embarquez à bord du Petit Train de Quiberon pour un voyage pittoresque le long de la célèbre presqu'île. Profitez de vues à couper le souffle sur la côte atlantique, découvrez de charmants villages balnéaires et apprenez-en davantage sur les traditions maritimes de la région grâce à un commentaire audio tout au long du trajet.",
    cta: "Découvrir le Petit Train de Quiberon",
    href: "https://www.petittrain-morbihan.com/en/quiberon/",
    image: "/figma-assets/quiberon.jpg",
    imageAlt: "Vues côtières de la presqu'île de Quiberon",
    roundedClass: "rounded-tr-[32px]",
  },
];

export default function Locations() {
  return (
    <section data-anim-section className="bg-[#f5ebdd] py-16 xl:py-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 xl:px-0 w-full flex flex-col gap-16 items-center">
        {/* Header */}
        <div data-anim-item className="flex flex-col gap-6 items-center text-center max-w-[768px]">
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
            <p className="font-['Bricolage_Grotesque',sans-serif] italic text-[#54206d] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
              Destinations
            </p>
          </div>
          <h2 className="font-normal font-['Bricolage_Grotesque',sans-serif] text-[32px] sm:text-[40px] md:text-[48px] text-[#181d27] text-center leading-[1.1] tracking-[-1.5px] sm:tracking-[-2.5px] md:tracking-[-3.36px] max-w-[570px] [text-wrap:balance] break-words">
            Découvrez nos autres circuits en Petit Train en Morbihan
          </h2>
          <p className="font-['Manrope',sans-serif] text-[#535862] text-[16px] text-center leading-[1.2] tracking-[-0.48px] max-w-[600px] w-full">
            Prolongez votre visite du Morbihan en découvrant d&apos;autres
            destinations à bord de nos Petits Trains. Chaque circuit offre une
            perspective différente sur la région, des villes historiques aux
            paysages côtiers spectaculaires, toujours avec la même expérience
            confortable et guidée.
          </p>
        </div>

        {/* Location cards */}
        <div data-anim-item className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
          {locations.map((loc) => (
            <a
              key={loc.id}
              href={loc.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={loc.cta}
              className={`group relative h-[550px] overflow-hidden ${loc.roundedClass} block cursor-pointer`}
            >
              {/* Background photo — zooms on hover */}
              <div className="absolute inset-0">
                <Image
                  src={loc.image}
                  alt={loc.imageAlt}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-[1.05] will-change-transform"
                />
              </div>

              {/* Static gradient */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-[rgba(77,28,100,0.52)] from-[34%] to-[rgba(77,28,100,0.8)]"
              />

              {/* Hover overlay */}
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[rgba(84,32,109,0.78)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-[cubic-bezier(0.625,0.05,0,1)] flex items-center justify-center"
              >
                <div className="flex flex-col items-center gap-3 translate-y-5 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 ease-[cubic-bezier(0.625,0.05,0,1)]">
                  <p className="font-['Bricolage_Grotesque',sans-serif] text-white text-[40px] leading-[1.1] tracking-[-2px]">
                    Découvrir
                  </p>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <path d="M16 6v20M6 16l10 10 10-10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              {/* Bottom content — fades out on hover */}
              <div className="absolute bottom-0 left-6 right-6 pb-6 flex flex-col gap-2 text-white transition-opacity duration-300 ease-[cubic-bezier(0.625,0.05,0,1)] group-hover:opacity-0">
                <div className="flex items-center gap-2.5">
                  <p className="font-['Bricolage_Grotesque',sans-serif] text-[32px] leading-[1.5] tracking-[-2.24px]">
                    {loc.name}
                  </p>
                  <div className="relative shrink-0 w-6 h-6">
                    <Image
                      src="/figma-assets/icon-link.svg"
                      alt=""
                      fill
                      className="object-contain"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <p className="font-['Manrope',sans-serif] font-light italic text-[14px] leading-[1.3] tracking-[-0.42px] w-[271px]">
                  {loc.tagline}
                </p>
                <p className="font-['Manrope',sans-serif] text-[14px] leading-[1.3] tracking-[-0.42px]">
                  {loc.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
