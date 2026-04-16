import PrivatisationHero from '@/components/sections/PrivatisationHero'
import Locations from '@/components/sections/Locations'

export const metadata = {
  title: 'Privatisation — Petit Train de Carnac',
  description:
    'Privatize the Petit Train de Carnac for your corporate event, group visit, or special occasion. Submit your request and our team will get back to you.',
}

export default function PrivatisationPage() {
  return (
    <main>
      <PrivatisationHero />
      <Locations />
    </main>
  )
}
