import Image from 'next/image'

const bullets = [
  'Veuillez arriver au moins 15 minutes avant le départ',
  'La réservation en ligne doit être effectuée au moins deux heures avant le départ',
  'Les visiteurs individuels commencent et terminent la visite au point de départ du Ménec',
  'La visite dure environ 55 minutes',
  "Le commentaire audio est disponible en plusieurs langues, dont une version pour enfants",
  'Le Petit Train fonctionne par tous les temps',
]

export default function BeforeYouBook() {
  return (
    <section data-anim-section className="bg-[#f5ebdd] py-16 xl:py-[112px] px-5 xl:px-[64px]">
      <div className="max-w-[1280px] mx-auto flex flex-col xl:flex-row gap-[64px] items-center">
        {/* Content — first in DOM so it appears first on mobile */}
        <div data-anim-item className="flex-1 min-w-0 flex flex-col gap-6">
          <h2 className="font-normal font-['Bricolage_Grotesque',sans-serif] text-[48px] xl:text-[60px] text-[#181d27] leading-[1.1] tracking-[-3.36px]">
            Avant de réserver
          </h2>

          <p className="font-['Manrope',sans-serif] text-[#535862] text-base leading-[1.2] tracking-[-0.48px] max-w-[551px]">
            Avant de confirmer votre réservation, prenez un moment pour consulter
            les informations pratiques sur la visite en Petit Train de Carnac.
            Ces points vous aideront à vivre une expérience fluide le jour de
            votre visite et à éviter toute incertitude concernant les horaires,
            le départ et le déroulement de la visite.
          </p>

          <ul className="flex flex-col gap-3 max-w-[551px]">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 font-['Manrope',sans-serif] text-[#535862] text-base leading-[1.2] tracking-[-0.48px]"
              >
                <span className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#54206d]" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Image — second in DOM = below content on mobile; xl:order-first moves it left on desktop */}
        <div data-anim-item className="xl:order-first shrink-0 w-full xl:w-[608px]">
          <div className="relative w-full h-[260px] sm:h-[360px] xl:h-[487px] rounded-[8px] overflow-hidden">
            <Image
              src="/figma-assets/BeforeYouBook.jpg"
              alt="Mégalithes de Carnac au point de départ"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 608px, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
