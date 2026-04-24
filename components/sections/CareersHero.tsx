import Image from 'next/image'
import TransitionLink from '@/components/ui/TransitionLink'

type JobPost = {
  title: string
  badge: string
  description: string
  requirement: string
}

const jobPosts: JobPost[] = [
  {
    title: 'Conducteur de Petit Train',
    badge: 'Poste saisonnier',
    description:
      "Conduire le Petit Train en toute sécurité sur le parcours touristique et accueillir les visiteurs à bord. Ce poste implique de conduire le train, de veiller au confort des passagers et de contribuer à une atmosphère positive tout au long de la visite.",
    requirement: "Permis D (transport en commun) requis. Une expérience préalable avec des véhicules touristiques est un plus.",
  },
  {
    title: 'Agent de Billetterie',
    badge: 'Poste saisonnier',
    description:
      "Accueillir les visiteurs, vendre les billets et fournir des informations claires sur les horaires, les tarifs et la visite. Ce poste est idéal pour les personnes qui aiment le contact avec le public et le travail dans un environnement touristique animé.",
    requirement:
      "De bonnes aptitudes à la communication et une attitude amicale sont essentielles. La connaissance de langues étrangères est appréciée.",
  },
  {
    title: "Agent de Quai",
    badge: 'Poste saisonnier',
    description:
      "Accompagner les passagers lors de l'embarquement et assurer le bon déroulement des départs et des arrivées. Ce poste soutient à la fois le conducteur et l'équipe de billetterie.",
    requirement: "Une attitude positive, de la fiabilité et une aisance avec les visiteurs de tous âges sont essentielles.",
  },
]

export default function CareersHero() {
  return (
    <section data-anim-section="hero" className="bg-[#f5ebdd] relative overflow-hidden py-16 xl:py-[112px] px-5 xl:px-[64px]">
      {/* Background pattern */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <Image
          src="/figma-assets/CareersHeroBg.png"
          alt=""
          fill
          className="object-cover opacity-30"
          sizes="100vw"
        />
      </div>

      <div className="relative max-w-[1280px] mx-auto flex flex-col lg:flex-row gap-[64px] items-stretch">
        {/* Left: content + job listings */}
        <div className="flex-1 min-w-0 flex flex-col gap-8">
          {/* Heading group */}
          <div className="flex flex-col gap-6">
            {/* Section label */}
            <div data-anim-item className="flex items-center gap-2">
              <div className="relative shrink-0 w-[19px] h-[19px]">
                <Image
                  src="/figma-assets/icon-train.svg"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <p className="font-['Bricolage_Grotesque',sans-serif] italic text-[#54206d] text-base leading-6 tracking-[-0.48px]">
                Carrières
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-normal font-['Bricolage_Grotesque',sans-serif] text-[40px] sm:text-[48px] xl:text-[60px] text-[#181d27] leading-[1.1] tracking-[-3.36px] [text-wrap:balance]">
              Votre carrière au{' '}
              <em className="font-['Bricolage_Grotesque',sans-serif] italic text-[#54206d]">
                Petit Train de Carnac
              </em>{' '}
              commence ici
            </h1>

            {/* Description */}
            <p className="font-['Manrope',sans-serif] text-[#535862] text-[16px] leading-[1.2] tracking-[-0.48px] max-w-[551px]">
              Notre philosophie est simple : offrir aux visiteurs un accueil chaleureux et une
              expérience touristique fluide tout en découvrant Carnac et ses environs. Au Petit Train
              de Carnac, chaque membre de l&apos;équipe joue un rôle important dans la création
              d&apos;une visite conviviale et mémorable pour les personnes de tous âges et du monde
              entier.
            </p>

            {/* Apply CTA */}
            <div>
              <TransitionLink
                href="mailto:petittrain-lebayon@orange.fr"
                className="btn-animate-chars btn-primary inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#54206d] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-white text-base font-medium font-['Manrope',sans-serif] tracking-[-0.64px] whitespace-nowrap"
              >
                <div className="btn-animate-chars__bg" />
                <div className="relative shrink-0 w-5 h-5">
                  <Image
                    src="/figma-assets/icon-email.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
                <span data-button-animate-chars="" className="btn-animate-chars__text">Postulez &amp; Envoyez-nous votre CV</span>
              </TransitionLink>
            </div>
          </div>

          {/* Job listings */}
          <div data-anim-item className="flex flex-col gap-0">
            <p className="font-['Bricolage_Grotesque',sans-serif] text-[20px] text-[#181d27] leading-[1.2] tracking-[-1.4px] mb-6">
              Postes Ouverts :
            </p>

            {jobPosts.map((job) => (
              <div
                key={job.title}
                className="border-t border-[#e9eaeb] pt-6 pb-6 flex flex-col gap-2"
              >
                {/* Title + badge */}
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-['Manrope',sans-serif] font-medium text-[#181d27] text-[20px] leading-[1.4] tracking-[-0.6px]">
                    {job.title}
                  </p>
                  <span className="inline-flex items-center gap-1.5 pl-2 pr-[10px] py-[2px] bg-[rgba(84,32,109,0.1)] border border-[rgba(84,32,109,0.25)] rounded-[4px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#54206d] shrink-0" />
                    <span className="font-['Manrope',sans-serif] text-[#54206d] text-[12px] leading-[1.4] tracking-[-0.36px] uppercase">
                      {job.badge}
                    </span>
                  </span>
                </div>
                {/* Descriptions */}
                <p className="font-['Manrope',sans-serif] text-[#535862] text-base leading-[1.5] tracking-[-0.48px]">
                  {job.description}
                </p>
                <p className="font-['Manrope',sans-serif] text-[#535862] text-base leading-[1.5] tracking-[-0.48px]">
                  {job.requirement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: tall image — fills the full height of the section content */}
        <div data-anim-item className="hidden lg:flex shrink-0 w-[460px] xl:w-[608px] self-stretch">
          <div className="relative w-full rounded-[8px] overflow-hidden">
            <Image
              src="/figma-assets/CareersHero.jpg"
              alt="Travailler au Petit Train de Carnac"
              fill
              className="object-cover"
              sizes="608px"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
