import RoutesHero from '@/components/sections/RoutesHero'
import Souvenirs from '@/components/sections/Souvenirs'
import RoutesTimeline from '@/components/sections/RoutesTimeline'
import FAQ from '@/components/sections/FAQ'
import Locations from '@/components/sections/Locations'

const routeFaqs = [
  {
    question: 'What is the route of the Petit Train de Carnac?',
    answer:
      'The route of the Petit Train de Carnac is a guided sightseeing tour that starts and ends at the Ménec car park. During the journey, the train passes close to the Carnac menhirs, Carnac plage, and the harbour of La Trinité sur Mer, offering a complete overview of the area.',
  },
  {
    question: 'How long is the route of the Petit Train de Carnac?',
    answer:
      'The complete route lasts approximately 55 minutes. This duration allows visitors to discover the main landmarks of Carnac at a calm pace, while listening to audio commentary throughout the tour.',
  },
  {
    question: 'Where does the route start and end?',
    answer:
      'The route starts and ends at the Ménec car park in Carnac, located in front of the Maison des Mégalithes. This is the main departure and arrival point for individual visitors.',
  },
  {
    question: 'Does the Petit Train stop during the route?',
    answer:
      'The Petit Train serves several locations along the route, including Carnac plage and the harbour of La Trinité sur Mer. These are part of the sightseeing route. Individual visitors board and disembark at the Ménec departure point.',
  },
  {
    question: 'Will I see the Carnac menhirs during the tour?',
    answer:
      'Yes. The route passes close to the most famous Carnac menhirs, including the alignments of Ménec, Kermario, and Kerlescan. Audio commentary explains the history and significance of these prehistoric monuments during the tour.',
  },
  {
    question: 'Does the route include the Saint Michel tumulus and dolmens?',
    answer:
      'Yes. The route highlights the Saint Michel tumulus and nearby dolmens. These sites are explained through audio commentary as part of the guided sightseeing experience.',
  },
  {
    question: 'What will I see at Carnac plage during the route?',
    answer:
      'During the route, the Petit Train passes through Carnac plage, allowing visitors to enjoy views of the white sand beaches and the seaside atmosphere. This part of the tour offers a contrast between prehistoric heritage and coastal landscapes.',
  },
  {
    question: 'Does the route go to La Trinité sur Mer?',
    answer:
      'Yes. The route includes the harbour of La Trinité sur Mer, a well known sailing destination. Visitors can observe the marina, boats, and port area while listening to commentary about the town and its maritime history.',
  },
]

export default function RoutesPage() {
  return (
    <main>
      {/* Section 1: Hero with lightbox route map */}
      <RoutesHero
        headingLevel="h1"
        label="The Route"
        heading={
          <>
            The route of the{' '}
            <em className="font-['Libre_Baskerville',serif] italic text-[#5a4a6e] not-italic">
              Petit Train de Carnac
            </em>
          </>
        }
        description={
          <p>
            Discover the full route of the Petit Train de Carnac and the main places you will see
            during this guided sightseeing tour. The journey offers a complete overview of Carnac,
            combining prehistoric heritage, seaside landscapes, and local atmosphere, all from the
            comfort of the Petit Train.
          </p>
        }
        imageSrc="/figma-assets/RoutesHero.jpg"
        imageAlt="Route map of the Petit Train de Carnac — click to enlarge"
        lightbox
      />

      {/* Section 2: Souvenirs image trail */}
      <Souvenirs />

      {/* Section 3: Route description (flipped) */}
      <RoutesHero
        flip
        headingLevel="h2"
        label="Routes"
        heading={
          <>
            A complete sightseeing route through{' '}
            <em className="font-['Libre_Baskerville',serif] italic text-[#5a4a6e]">Carnac</em>
            {' '}and its surroundings
          </>
        }
        description={
          <>
            <p>
              The Petit Train de Carnac follows a carefully designed route that allows visitors to
              discover the most important landmarks of the area in approximately{' '}
              <strong className="font-bold text-[#535862]">55 minutes.</strong>
            </p>
            <p>
              Starting from the Ménec car park, the tour passes close to the famous Carnac menhirs,
              continues towards Carnac plage and its white sand beaches, and reaches the harbour of
              La Trinité sur Mer before returning to the departure point.
            </p>
            <p>
              Throughout the journey, audio commentary explains the history, significance, and
              anecdotes linked to each location.
            </p>
          </>
        }
        imageSrc="/figma-assets/WhiteBridge.png"
        imageAlt="White bridge along the Petit Train de Carnac route"
      />

      {/* Section 4: Timeline of stops */}
      <RoutesTimeline />

      {/* Section 5: Route-specific FAQ */}
      <FAQ
        label="Frequently Asked Questions"
        heading={
          <>
            Frequently Asked Questions about the{' '}
            <em className="text-[#58496c]">route</em>
          </>
        }
        description="Find clear answers to the most common questions about the route of the Petit Train de Carnac."
        faqs={routeFaqs}
      />

      {/* Section 6: Other Petit Train locations */}
      <Locations />
    </main>
  )
}
