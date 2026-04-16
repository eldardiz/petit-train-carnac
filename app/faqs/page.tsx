import FAQsHero from '@/components/sections/FAQsHero'
import FAQsSection from '@/components/sections/FAQsSection'

export const metadata = {
  title: 'FAQs — Petit Train de Carnac',
  description:
    'Frequently asked questions about the Petit Train de Carnac — tour duration, departure point, prices, booking, languages, groups, and privatisation.',
}

export default function FAQsPage() {
  return (
    <main>
      <FAQsHero />
      <FAQsSection />
    </main>
  )
}
