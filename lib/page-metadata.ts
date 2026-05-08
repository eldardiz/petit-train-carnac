import type { Locale } from '@/i18n/routing'
import { routing } from '@/i18n/routing'
import { getPathname } from '@/i18n/navigation'

export function buildPageMetadata(
  locale: string,
  title: string,
  description: string,
  href: string
) {
  const loc = locale as Locale
  return {
    title,
    description,
    alternates: {
      canonical: getPathname({ locale: loc, href }),
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, getPathname({ locale: l, href })])
      ),
    },
    openGraph: {
      title,
      description,
      type: 'website' as const,
      images: [
        {
          url: '/figma-assets/OpenGraph.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
    },
  }
}
