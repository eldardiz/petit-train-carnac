import Image from 'next/image'
import RegiondoWidget from '@/components/ui/RegiondoWidget'

const REGIONDO_WIDGET_ID = '5712cb43-2e72-445b-956b-947f1f624735'

export default function BookingSection() {
  return (
    <section
      data-anim-section="hero"
      className="bg-white pt-12 xl:pt-20 pb-16 xl:pb-24 overflow-hidden"
    >
      <div className="max-w-[1280px] mx-auto px-5 xl:px-0">
        {/* Header */}
        <div className="flex flex-col gap-6 items-center text-center max-w-[768px] mx-auto mb-10 xl:mb-14">
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
            <p className="font-['Bricolage_Grotesque',sans-serif] italic text-[#54206d] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
              Réservation
            </p>
          </div>

          {/* Heading */}
          <h1
            data-anim-item
            className="font-normal font-['Bricolage_Grotesque',sans-serif] text-[36px] sm:text-[44px] md:text-[52px] xl:text-[60px] leading-[1.1] tracking-[-1.8px] sm:tracking-[-2.4px] md:tracking-[-3.2px] xl:tracking-[-4.2px] text-[#181d27] not-italic [text-wrap:balance] break-words"
          >
            Réservez votre visite en <em className="italic text-[#54206d] not-[font-style:normal]">Petit Train</em> à Carnac
          </h1>

          {/* Description */}
          <p
            data-anim-item
            className="font-['Manrope',sans-serif] text-[#535862] text-base leading-[1.4] tracking-[-0.48px] max-w-[620px]"
          >
            Choisissez votre date et votre heure, sélectionnez le nombre de billets et
            confirmez votre réservation en ligne. La visite dure{' '}
            <strong className="text-[#181d27]">55 minutes</strong> avec un commentaire audio
            disponible en 16 langues.
          </p>
        </div>

        {/* Widget card */}
        <div data-anim-item className="w-full">
          <RegiondoWidget widgetId={REGIONDO_WIDGET_ID} />
        </div>
      </div>
    </section>
  )
}
