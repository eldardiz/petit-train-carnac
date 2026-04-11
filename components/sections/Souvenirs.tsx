'use client'

import Image from 'next/image'
import ImageTrail, { ImageTrailItem } from '@/components/fancy/image/image-trail'

// Real images will be dropped into public/figma-assets/ as souvenir-1.jpg … souvenir-5.jpg
const souvenirs = [
  { src: '/figma-assets/souvenir-1.jpg', placeholder: 'https://picsum.photos/seed/souvenir-1/342/289', rotate: '-rotate-2' },
  { src: '/figma-assets/souvenir-2.jpg', placeholder: 'https://picsum.photos/seed/souvenir-2/342/289', rotate: 'rotate-1' },
  { src: '/figma-assets/souvenir-3.jpg', placeholder: 'https://picsum.photos/seed/souvenir-3/342/289', rotate: '-rotate-1' },
  { src: '/figma-assets/souvenir-4.jpg', placeholder: 'https://picsum.photos/seed/souvenir-4/342/289', rotate: 'rotate-2' },
  { src: '/figma-assets/souvenir-5.jpg', placeholder: 'https://picsum.photos/seed/souvenir-5/342/289', rotate: '-rotate-3' },
]

export default function Souvenirs() {
  return (
    <section className="bg-[#5a4a6e] relative overflow-hidden min-h-screen">
      {/* Horizontal rule — Figma y=48 */}
      <div className="absolute left-1/2 -translate-x-1/2 top-12 w-[1280px] max-w-full h-px bg-white/10 z-20" />

      {/* Section label — Figma left=80, top=64 */}
      <div className="absolute left-20 top-16 flex items-center gap-[10px] z-20 pointer-events-none">
        <div className="size-[30px] bg-gray-300 rounded shrink-0" aria-hidden="true" />
        <p className="font-['Libre_Baskerville',serif] italic text-white text-[20px] leading-6 tracking-[-0.6px] whitespace-nowrap">
          Petit Train de Carnac Souvenirs
        </p>
      </div>

      {/* ImageTrail — needs an explicit height so onMouseMove fires */}
      <ImageTrail
        threshold={80}
        intensity={0.3}
        repeatChildren={2}
        keyframes={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 0.9] }}
        keyframesOptions={{ duration: 1.5, times: [0, 0.05, 0.85, 1] }}
        className="min-h-screen"
      >
        {souvenirs.map((s, i) => (
          <ImageTrailItem key={i} className={s.rotate}>
            {/* Polaroid frame: cream bg, thick bottom border */}
            <div className="bg-[#fcf8eb] p-[24px] pb-[80px] shadow-2xl">
              <div className="relative overflow-hidden" style={{ width: '342px', height: '289px' }}>
                <Image
                  src={s.placeholder}
                  alt={`Carnac souvenir ${i + 1}`}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            </div>
          </ImageTrailItem>
        ))}
      </ImageTrail>
    </section>
  )
}
