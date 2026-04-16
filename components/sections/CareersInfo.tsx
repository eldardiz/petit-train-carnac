import Image from 'next/image'
import Link from 'next/link'

const panels = [
  {
    heading: 'Who we are looking for',
    paragraphs: [
      'We are looking for motivated and reliable people who enjoy working with the public and contributing to a quality tourist experience.',
      'You are comfortable working with international visitors, available during the tourist season, and able to work weekends and public holidays when needed.',
    ],
  },
  {
    heading: 'Working with us',
    paragraphs: [
      'Positions are mainly seasonal and based in Carnac. Training is provided before starting. Working hours depend on the season and visitor attendance.',
      'You will work outdoors and as part of a small, friendly team focused on visitor satisfaction.',
    ],
  },
  {
    heading: 'How to apply',
    paragraphs: [
      'To apply, please complete the application form and attach your CV. If your profile matches our needs, our team will contact you.',
    ],
  },
  {
    heading: 'Join the Petit Train de Carnac team',
    paragraphs: [
      'Apply now and take part in a local tourism experience that helps visitors discover Carnac in a simple and enjoyable way.',
    ],
    cta: true,
  },
]

export default function CareersInfo() {
  return (
    <section className="bg-[#f7f7f0] py-[112px] px-5 xl:px-[64px]">
      <div className="max-w-[1280px] mx-auto flex flex-col xl:flex-row gap-[80px] items-start">
        {/* Left: image */}
        <div className="hidden xl:block shrink-0 w-[calc(50%-40px)]">
          <div className="relative w-full h-[829px] rounded-[16px] overflow-hidden">
            <Image
              src="/figma-assets/CareersLooking.png"
              alt="Who we are looking for at the Petit Train de Carnac"
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
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
