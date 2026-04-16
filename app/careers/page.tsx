import CareersHero from '@/components/sections/CareersHero'
import CareersInfo from '@/components/sections/CareersInfo'
import Locations from '@/components/sections/Locations'

export default function CareersPage() {
  return (
    <main>
      {/* Section 1: Careers hero with job listings */}
      <CareersHero />

      {/* Section 2: Who we are looking for + how to apply */}
      <CareersInfo />

      {/* Section 3: Other Petit Train locations */}
      <Locations />
    </main>
  )
}
