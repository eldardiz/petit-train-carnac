'use client'

import Image from 'next/image'
import TransitionLink from '@/components/ui/TransitionLink'
import { useState, useEffect, type ReactNode } from 'react'

interface RoutesHeroProps {
  label: string
  heading: ReactNode
  description: ReactNode
  imageSrc: string
  imageAlt: string
  flip?: boolean
  lightbox?: boolean
  headingLevel?: 'h1' | 'h2'
  primaryButton?: { label: string; href: string }
  secondaryButton?: { label: string; href: string }
}

export default function RoutesHero({
  label,
  heading,
  description,
  imageSrc,
  imageAlt,
  flip = false,
  lightbox = false,
  headingLevel: Heading = 'h1',
  primaryButton = { label: 'Flyer individuel', href: '#' },
  secondaryButton = { label: 'Flyer de groupe', href: '#' },
}: RoutesHeroProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [open])

  const imageBlock = (
    <div className="w-full xl:flex-1 xl:min-w-0">
      <div
        className={`relative h-[400px] md:h-[520px] xl:h-[640px] rounded-[16px] border-[5px] border-[#5a4a6e] overflow-hidden${
          lightbox ? ' cursor-zoom-in' : ''
        }`}
        onClick={() => lightbox && setOpen(true)}
        role={lightbox ? 'button' : undefined}
        aria-label={lightbox ? `Agrandir : ${imageAlt}` : undefined}
        tabIndex={lightbox ? 0 : undefined}
        onKeyDown={(e) => {
          if (lightbox && (e.key === 'Enter' || e.key === ' ')) setOpen(true)
        }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover pointer-events-none"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  )

  const contentBlock = (
    <div className="w-full xl:flex-1 xl:min-w-0 flex flex-col gap-10 pr-0 xl:pr-8">
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
          <p className="font-['Libre_Baskerville',serif] italic text-[#5a4a6e] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
            {label}
          </p>
        </div>

        {/* Heading */}
        <Heading className="font-['Libre_Baskerville',serif] text-[40px] sm:text-[48px] xl:text-[60px] text-[#181d27] leading-[1.1] tracking-[-3.36px] [text-wrap:balance]">
          {heading}
        </Heading>

        {/* Description */}
        <div className="font-['Roboto',sans-serif] text-[#535862] text-[16px] leading-[1.2] tracking-[-0.48px] flex flex-col gap-4 max-w-[551px]">
          {description}
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex items-center gap-3 flex-wrap">
        <TransitionLink
          href={primaryButton.href}
          className="btn-primary inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#5a4a6e] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
        >
          <div className="relative w-4 h-4 shrink-0">
            <Image
              src="/figma-assets/DownloadWhite.svg"
              alt=""
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
          {primaryButton.label}
        </TransitionLink>
        <TransitionLink
          href={secondaryButton.href}
          className="btn-secondary inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#f7f7f0] rounded-[4px] border border-[rgba(0,0,0,0.2)] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
        >
          <div className="relative w-4 h-4 shrink-0">
            <Image
              src="/figma-assets/DownloadBlack.svg"
              alt=""
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
          {secondaryButton.label}
        </TransitionLink>
      </div>

      {/* Divider */}
      <div className="border-t border-[rgba(0,0,0,0.1)] w-full max-w-[554px]" />

      {/* Google badge */}
      <div className="flex flex-col gap-4">
        <div className="bg-white rounded-[8px] inline-flex items-center gap-2.5 px-2 py-1 self-start">
          <div className="relative w-6 h-6 shrink-0">
            <Image
              src="/figma-assets/google-icon.svg"
              alt="Google"
              fill
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-0.5">
            <div className="flex items-center gap-1">
              <span className="font-['Nunito',sans-serif] font-bold text-[14px] text-black tracking-[-0.42px]">
                4,7
              </span>
              <div className="relative w-[76px] h-[12px]">
                <Image
                  src="/figma-assets/stars.svg"
                  alt="5 stars"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="font-['Nunito',sans-serif] text-[11px] text-black/60 tracking-[-0.33px]">
              6 000+ avis
            </span>
          </div>
        </div>
        <p className="font-['Roboto',sans-serif] text-[#535862] text-[16px] leading-[1.2] tracking-[-0.48px] max-w-[499px]">
          <strong className="font-bold text-[#535862]">Le Petit Train de Carnac</strong>{' '}
          est noté plus de 4,7 sur Google, avec plus de 6 000 avis, ce qui en fait l&apos;une des
          attractions touristiques les plus populaires de Carnac.
        </p>
      </div>
    </div>
  )

  return (
    <>
      <section className="bg-[#f7f7f0] py-16 xl:py-[112px] px-5 xl:px-[64px]">
        <div className="max-w-[1312px] mx-auto flex flex-col xl:flex-row items-center gap-[80px]">
          {flip ? (
            <>
              {contentBlock}
              {imageBlock}
            </>
          ) : (
            <>
              {imageBlock}
              {contentBlock}
            </>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Enlarged view: ${imageAlt}`}
        >
          <div
            className="relative w-full max-w-[1200px] max-h-[90vh] aspect-[3/2]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-[32px] leading-none hover:text-white/70 transition-colors"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            ×
          </button>
        </div>
      )}
    </>
  )
}
