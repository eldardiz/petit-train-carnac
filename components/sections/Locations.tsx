import Image from "next/image";
import TransitionLink from "@/components/ui/TransitionLink";

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
    <section data-anim-section className="bg-[#f7f7f0] py-16 xl:py-28 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 xl:px-0 w-full flex flex-col gap-16 items-center">
        {/* Header */}
        <div className="flex flex-col gap-6 items-center text-center max-w-[768px]">
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
              Destinations
            </p>
          </div>
          <h2 className="font-['Libre_Baskerville',serif] text-[32px] sm:text-[40px] md:text-[48px] text-[#181d27] text-center leading-[1.1] tracking-[-1.5px] sm:tracking-[-2.5px] md:tracking-[-3.36px] max-w-[570px] [text-wrap:balance] break-words">
            Découvrez nos autres circuits en Petit Train en Morbihan
          </h2>
          <p className="font-['Roboto',sans-serif] text-[#535862] text-[16px] text-center leading-[1.2] tracking-[-0.48px] max-w-[600px] w-full">
            Prolongez votre visite du Morbihan en découvrant d&apos;autres
            destinations à bord de nos Petits Trains. Chaque circuit offre une
            perspective différente sur la région, des villes historiques aux
            paysages côtiers spectaculaires, toujours avec la même expérience
            confortable et guidée.
          </p>
        </div>

        {/* Location cards */}
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
          {locations.map((loc) => (
            <div
              key={loc.id}
              className={`relative h-[550px] overflow-hidden ${loc.roundedClass}`}
            >
              {/* Background photo + gradient */}
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
              >
                <Image
                  src={loc.image}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(88,73,108,0.52)] from-[34%] to-[rgba(88,73,108,0.8)]" />
              </div>

              {/* Content — bottom half */}
              <div className="absolute bottom-0 left-6 right-6 pb-6 flex flex-col gap-2 text-white">
                <div className="flex items-center gap-2.5">
                  <p className="font-['Libre_Baskerville',serif] text-[32px] leading-[1.5] tracking-[-2.24px]">
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
                <p className="font-['Nunito',sans-serif] font-light italic text-[14px] leading-[1.3] tracking-[-0.42px] w-[271px]">
                  {loc.tagline}
                </p>
                <p className="font-['Nunito',sans-serif] text-[14px] leading-[1.3] tracking-[-0.42px]">
                  {loc.description}
                </p>
                <a
                  href={loc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-2 inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#5a4a6e] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap w-fit"
                >
                  <div className="relative shrink-0 w-5 h-5">
                    <Image
                      src="/figma-assets/icon-ticket-white.svg"
                      alt=""
                      fill
                      className="object-contain"
                      aria-hidden="true"
                    />
                  </div>
                  {loc.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
