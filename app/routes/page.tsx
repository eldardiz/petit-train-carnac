export const metadata = {
  title: 'Parcours & Itinéraire',
  description:
    'Découvrez le parcours du Petit Train de Carnac : menhirs de Carnac, Carnac-Plage et port de La Trinité-sur-Mer. Une visite guidée de 55 minutes avec commentaire audio en 16 langues.',
  alternates: { canonical: '/routes' },
}

import RoutesHero from '@/components/sections/RoutesHero'
import Gallery from '@/components/sections/Gallery'
import RoutesTimeline from '@/components/sections/RoutesTimeline'
import FAQ from '@/components/sections/FAQ'
import Locations from '@/components/sections/Locations'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'

const routeFaqs = [
  {
    question: 'Quel est le parcours du Petit Train de Carnac ?',
    answer:
      'Le parcours du Petit Train de Carnac est une visite guidée qui débute et se termine au parking du Ménec. Pendant le trajet, le train passe près des menhirs de Carnac, de Carnac-Plage et du port de La Trinité-sur-Mer, offrant un aperçu complet de la région.',
  },
  {
    question: 'Quelle est la durée du parcours du Petit Train de Carnac ?',
    answer:
      'Le parcours complet dure environ 55 minutes. Cette durée permet aux visiteurs de découvrir les principaux sites de Carnac à un rythme tranquille, accompagnés d\'un commentaire audio tout au long du trajet.',
  },
  {
    question: 'Où commence et se termine le parcours ?',
    answer:
      'Le parcours commence et se termine au parking du Ménec à Carnac, situé en face de la Maison des Mégalithes. C\'est le principal point de départ et d\'arrivée pour les visiteurs individuels.',
  },
  {
    question: 'Le Petit Train fait-il des arrêts pendant le parcours ?',
    answer:
      'Le Petit Train dessert plusieurs sites le long du parcours, notamment Carnac-Plage et le port de La Trinité-sur-Mer. Ces étapes font partie de la visite. Les visiteurs individuels embarquent et débarquent au point de départ du Ménec.',
  },
  {
    question: 'Verra-t-on les menhirs de Carnac pendant la visite ?',
    answer:
      'Oui. Le parcours passe près des plus célèbres alignements de menhirs de Carnac, notamment ceux du Ménec, de Kermario et de Kerlescan. Le commentaire audio explique l\'histoire et la signification de ces monuments préhistoriques tout au long du trajet.',
  },
  {
    question: 'Le parcours inclut-il le tumulus Saint-Michel et les dolmens ?',
    answer:
      'Oui. Le parcours met en valeur le tumulus Saint-Michel et les dolmens environnants. Ces sites sont présentés via le commentaire audio dans le cadre de la visite guidée.',
  },
  {
    question: 'Que verra-t-on à Carnac-Plage pendant le parcours ?',
    answer:
      'Pendant le parcours, le Petit Train traverse Carnac-Plage, permettant aux visiteurs de profiter de la vue sur les plages de sable blanc et l\'ambiance balnéaire. Cette partie de la visite offre un contraste saisissant entre patrimoine préhistorique et paysages côtiers.',
  },
  {
    question: 'Le parcours va-t-il jusqu\'à La Trinité-sur-Mer ?',
    answer:
      'Oui. Le parcours inclut le port de La Trinité-sur-Mer, destination réputée pour la voile. Les visiteurs peuvent observer la marina, les bateaux et la zone portuaire, accompagnés d\'un commentaire sur la ville et son histoire maritime.',
  },
]

export default function RoutesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: 'Accueil', path: '/' }, { name: 'Le Parcours', path: '/routes' }]} />
      <main>
      {/* Section 1: Hero with lightbox route map */}
      <RoutesHero
        headingLevel="h1"
        label="Le Parcours"
        heading={
          <>
            Le parcours du{' '}
            <em className="font-['Bricolage_Grotesque',sans-serif] italic text-[#54206d] not-italic">
              Petit Train de Carnac
            </em>
          </>
        }
        description={
          <p>
            Découvrez le parcours complet du Petit Train de Carnac et les principaux lieux que vous
            visiterez lors de cette visite guidée. Le trajet offre un aperçu complet de Carnac,
            alliant patrimoine préhistorique, paysages côtiers et atmosphère locale, depuis le
            confort du Petit Train.
          </p>
        }
        imageSrc="/figma-assets/RoutesHero.jpg"
        imageAlt="Carte du parcours du Petit Train de Carnac — cliquer pour agrandir"
        lightbox
      />

      {/* Section 2: Gallery masonry */}
      <Gallery />

      {/* Section 3: Timeline of stops */}
      <RoutesTimeline />

      {/* Section 5: Route-specific FAQ */}
      <FAQ
        label="Questions Fréquentes"
        heading={
          <>
            Questions Fréquemment Posées sur le{' '}
            <em className="text-[#4d1c64]">parcours</em>
          </>
        }
        description="Trouvez des réponses claires aux questions les plus fréquentes sur le parcours du Petit Train de Carnac."
        faqs={routeFaqs}
      />

      {/* Section 6: Other Petit Train locations */}
      <Locations />
      </main>
    </>
  )
}
