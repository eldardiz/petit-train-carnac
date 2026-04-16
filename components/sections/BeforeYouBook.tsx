import Image from 'next/image'

const bullets = [
  'Please arrive at least 15 minutes before departure',
  'Online booking must be completed at least two hours before departure',
  'Individual visitors start and end the tour at the Ménec departure point',
  'The tour lasts approximately 55 minutes',
  "Audio commentary is available in multiple languages, including a children\u2019s version",
  'The Petit Train operates in all weather conditions',
]

export default function BeforeYouBook() {
  return (
    <section className="bg-[#f7f7f0] py-[112px] px-5 xl:px-[64px]">
      <div className="max-w-[1280px] mx-auto flex flex-col xl:flex-row gap-[64px] items-center">
        {/* Content — first in DOM so it appears first on mobile */}
        <div className="flex-1 min-w-0 flex flex-col gap-6">
          <h2 className="font-['Libre_Baskerville',serif] text-[48px] xl:text-[60px] text-[#181d27] leading-[1.1] tracking-[-3.36px]">
            Before you book
          </h2>

          <p className="font-['Roboto',sans-serif] text-[#535862] text-base leading-[1.2] tracking-[-0.48px] max-w-[551px]">
            Before confirming your booking, please take a moment to review the practical details of
            the Petit Train de Carnac tour. These points help ensure a smooth experience on the day
            of your visit and avoid any uncertainty regarding timing, departure, and how the tour
            works.
          </p>

          <ul className="flex flex-col gap-3 max-w-[551px]">
            {bullets.map((bullet) => (
              <li
                key={bullet}
                className="flex items-start gap-3 font-['Roboto',sans-serif] text-[#535862] text-base leading-[1.2] tracking-[-0.48px]"
              >
                <span className="mt-[6px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#5a4a6e]" />
                {bullet}
              </li>
            ))}
          </ul>
        </div>

        {/* Image — second in DOM = below content on mobile; xl:order-first moves it left on desktop */}
        <div className="xl:order-first shrink-0 w-full xl:w-[608px]">
          <div className="relative w-full h-[260px] sm:h-[360px] xl:h-[487px] rounded-[8px] overflow-hidden">
            <Image
              src="/figma-assets/BeforeYouBook.png"
              alt="Carnac megaliths at the departure point"
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
