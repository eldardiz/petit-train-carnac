import BookingHero from '@/components/sections/BookingHero'
import BeforeYouBook from '@/components/sections/BeforeYouBook'
import Features from '@/components/sections/Features'
import PracticalInfo from '@/components/sections/PracticalInfo'
import GroupBookingCTA from '@/components/sections/GroupBookingCTA'
import Locations from '@/components/sections/Locations'

export const metadata = {
  title: 'Book your tour — Petit Train de Carnac',
  description:
    'Reserve your seats on the Petit Train de Carnac. Individual and group bookings available online.',
}

export default function BookPage() {
  return (
    <main>
      <BookingHero />
      <BeforeYouBook />
      <Features />
      <PracticalInfo />
      <GroupBookingCTA />
      <Locations />
    </main>
  )
}
