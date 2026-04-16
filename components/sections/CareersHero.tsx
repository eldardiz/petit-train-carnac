import Image from 'next/image'
import Link from 'next/link'

type JobPost = {
  title: string
  badge: string
  description: string
  requirement: string
}

const jobPosts: JobPost[] = [
  {
    title: 'Petit Train Driver',
    badge: 'Seasonal position',
    description:
      'Operate the Petit Train safely along the sightseeing route and welcome visitors on board. This role involves driving the train, ensuring passenger comfort, and contributing to a positive atmosphere throughout the tour.',
    requirement: 'A valid driving license is required. Previous experience with tourist vehicles is a plus.',
  },
  {
    title: 'Ticket Office Assistant',
    badge: 'Seasonal position',
    description:
      'Welcome visitors, sell tickets, and provide clear information about schedules, prices, and the tour. This role is ideal for people who enjoy contact with the public and working in a lively tourist environment.',
    requirement:
      'Basic communication skills and a friendly attitude are essential. Knowledge of foreign languages is appreciated.',
  },
  {
    title: 'Tour Assistant',
    badge: 'Seasonal position',
    description:
      'Assist passengers during boarding and throughout the tour, help answer visitor questions, and ensure the smooth flow of departures and arrivals. This role supports both the driver and ticket office team.',
    requirement: 'A positive attitude, reliability, and ease with visitors of all ages are key.',
  },
  {
    title: 'Group and Private Tour Coordinator',
    badge: 'Seasonal / part time position',
    description:
      'Handle group and private booking requests, assist with scheduling, and ensure that special tours run smoothly. This role involves coordination, communication, and attention to detail.',
    requirement: 'Experience in tourism or customer service is a plus.',
  },
]

export default function CareersHero() {
  return (
    <section className="bg-[#f7f7f0] relative overflow-hidden py-[112px] px-5 xl:px-[64px]">
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

      <div className="relative max-w-[1280px] mx-auto flex flex-col xl:flex-row gap-[64px] items-stretch">
        {/* Left: content + job listings */}
        <div className="flex-1 min-w-0 flex flex-col gap-8">
          {/* Heading group */}
          <div className="flex flex-col gap-6">
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
              <p className="font-['Libre_Baskerville',serif] italic text-[#5a4a6e] text-base leading-6 tracking-[-0.48px]">
                Careers
              </p>
            </div>

            {/* Heading */}
            <h1 className="font-['Libre_Baskerville',serif] text-[40px] sm:text-[48px] xl:text-[60px] text-[#181d27] leading-[1.1] tracking-[-3.36px] [text-wrap:balance]">
              Your career with the{' '}
              <em className="font-['Libre_Baskerville',serif] italic text-[#5a4a6e]">
                Petit Train de Carnac
              </em>{' '}
              starts here
            </h1>

            {/* Description */}
            <p className="font-['Roboto',sans-serif] text-[#535862] text-[16px] leading-[1.2] tracking-[-0.48px] max-w-[551px]">
              Our philosophy is simple: offer visitors a warm welcome and a smooth sightseeing
              experience while discovering Carnac and its surroundings. At the Petit Train de
              Carnac, every team member plays an important role in creating a friendly and memorable
              visit for people of all ages and from all over the world.
            </p>

            {/* Apply CTA */}
            <div>
              <Link
                href="mailto:petittrain-lebayon@orange.fr"
                className="inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#5a4a6e] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
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
                Apply Now &amp; Send us your CV
              </Link>
            </div>
          </div>

          {/* Job listings */}
          <div className="flex flex-col gap-0">
            <p className="font-['Libre_Baskerville',serif] text-[20px] text-[#181d27] leading-[1.2] tracking-[-1.4px] mb-6">
              Open Positions:
            </p>

            {jobPosts.map((job) => (
              <div
                key={job.title}
                className="border-t border-[#e9eaeb] pt-6 pb-6 flex flex-col gap-2"
              >
                {/* Title + badge */}
                <div className="flex flex-wrap items-center gap-3">
                  <p className="font-['Roboto',sans-serif] font-medium text-[#181d27] text-[20px] leading-[1.4] tracking-[-0.6px]">
                    {job.title}
                  </p>
                  <span className="inline-flex items-center gap-1.5 pl-2 pr-[10px] py-[2px] bg-[rgba(90,74,110,0.1)] border border-[rgba(90,74,110,0.25)] rounded-[4px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5a4a6e] shrink-0" />
                    <span className="font-['Roboto',sans-serif] text-[#5a4a6e] text-[12px] leading-[1.4] tracking-[-0.36px] uppercase">
                      {job.badge}
                    </span>
                  </span>
                </div>
                {/* Descriptions */}
                <p className="font-['Roboto',sans-serif] text-[#535862] text-base leading-[1.5] tracking-[-0.48px]">
                  {job.description}
                </p>
                <p className="font-['Roboto',sans-serif] text-[#535862] text-base leading-[1.5] tracking-[-0.48px]">
                  {job.requirement}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: tall image — fills the full height of the section content */}
        <div className="hidden xl:flex shrink-0 w-[608px] self-stretch">
          <div className="relative w-full rounded-[8px] overflow-hidden">
            <Image
              src="/figma-assets/CareersHero.jpg"
              alt="Working at the Petit Train de Carnac"
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
