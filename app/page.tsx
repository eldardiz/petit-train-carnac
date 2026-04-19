import Hero from '@/components/sections/Hero'
import Souvenirs from '@/components/sections/Souvenirs'
import GroupBookingCTA from '@/components/sections/GroupBookingCTA'
import Features from '@/components/sections/Features'
import PracticalInfo from '@/components/sections/PracticalInfo'
import Prices from '@/components/sections/Prices'
import Reviews from '@/components/sections/Reviews'
import FAQ from '@/components/sections/FAQ'
import OurLocation from '@/components/sections/OurLocation'
import RoutesTimeline from '@/components/sections/RoutesTimeline'
import Locations from '@/components/sections/Locations'

export default function Page() {
  return (
    <main>
      <Hero rightVideoSrc="/figma-assets/carnac-hero.mp4" />
      <Souvenirs />
      <Features />
      <PracticalInfo />
      <Prices />
      <OurLocation />
      <RoutesTimeline />
      <Reviews />
      <GroupBookingCTA />
      <Locations />
      <FAQ />
    </main>
  )
}
