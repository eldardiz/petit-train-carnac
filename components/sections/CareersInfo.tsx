import Image from 'next/image'
import TransitionLink from '@/components/ui/TransitionLink'

const panels = [
  {
    heading: 'Qui cherchons-nous',
    paragraphs: [
      'Nous recherchons des personnes motivées et fiables qui aiment travailler avec le public et contribuer à une expérience touristique de qualité.',
      'Vous êtes à l\'aise avec les visiteurs internationaux, disponible pendant la saison touristique et en mesure de travailler les week-ends et jours fériés si nécessaire.',
    ],
  },
  {
    heading: 'Travailler avec nous',
    paragraphs: [
      'Les postes sont principalement saisonniers et basés à Carnac. Une formation est dispensée avant la prise de poste. Les horaires de travail dépendent de la saison et de la fréquentation des visiteurs.',
      'Vous travaillerez en extérieur et au sein d\'une petite équipe conviviale axée sur la satisfaction des visiteurs.',
    ],
  },
  {
    heading: 'Comment postuler',
    paragraphs: [
      'Pour postuler, veuillez remplir le formulaire de candidature et joindre votre CV. Si votre profil correspond à nos besoins, notre équipe vous contactera.',
    ],
  },
  {
    heading: 'Rejoindre l\'équipe du Petit Train de Carnac',
    paragraphs: [
      'Postulez dès maintenant et participez à une expérience touristique locale qui aide les visiteurs à découvrir Carnac de façon simple et agréable.',
    ],
    cta: true,
  },
]

export default function CareersInfo() {
  return (
    <section className="bg-[#f7f7f0] py-16 xl:py-[112px] px-5 xl:px-[64px]">
      <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-[80px] items-start">
        {/* Left: image */}
        <div className="hidden lg:block shrink-0 w-[calc(50%-40px)]">
          <div className="relative w-full h-[829px] rounded-[16px] overflow-hidden">
            <Image
              src="/figma-assets/CareersLooking.png"
              alt="Qui cherchons-nous au Petit Train de Carnac"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 600px"
            />
          </div>
        </div>

        {/* Right: content panels */}
        <div className="flex-1 min-w-0 flex flex-col gap-0">
          {panels.map((panel) => (
            <div
              key={panel.heading}
              className="border-b border-[rgba(0,0,0,0.2)] pb-8 mb-8 last:border-b-0 last:mb-0 flex flex-col gap-6"
            >
              <h2 className="font-['Libre_Baskerville',serif] text-[32px] text-[#181d27] leading-[1.1] tracking-[-2.24px]">
                {panel.heading}
              </h2>
              <div className="flex flex-col gap-3">
                {panel.paragraphs.map((p, i) => (
                  <p
                    key={i}
                    className="font-['Roboto',sans-serif] text-[#535862] text-base leading-[1.2] tracking-[-0.48px] max-w-[551px]"
                  >
                    {p}
                  </p>
                ))}
              </div>
              {panel.cta && (
                <div>
                  <TransitionLink
                    href="mailto:petittrain-lebayon@orange.fr"
                    className="btn-primary inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#5a4a6e] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
                  >
                    <div className="relative shrink-0 w-5 h-5">
                      <Image
                        src="/figma-assets/icon-email.svg"
                        alt=""
                        fill
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                    Postulez &amp; Envoyez-nous votre CV
                  </TransitionLink>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
