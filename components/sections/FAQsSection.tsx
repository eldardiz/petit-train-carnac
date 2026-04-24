'use client'

import { useState } from 'react'
import TransitionLink from '@/components/ui/TransitionLink'

const faqs = [
  {
    question: "Qu'est-ce que le Petit Train de Carnac ?",
    answer:
      "Le Petit Train de Carnac est un train touristique guidé qui permet aux visiteurs de découvrir Carnac et ses environs de façon confortable et accessible. La visite inclut les menhirs de Carnac, la plage de Carnac et le port de La Trinité-sur-Mer, avec un commentaire audio tout au long du parcours.",
  },
  {
    question: "Combien de temps dure la visite ?",
    answer:
      "La visite guidée dure environ 55 minutes. Cette durée permet aux visiteurs de voir les principaux sites de Carnac sans longues distances à parcourir à pied.",
  },
  {
    question: "D'où part le Petit Train de Carnac ?",
    answer:
      "Le point de départ et d'arrivée principal pour les visiteurs individuels est le parking du Ménec à Carnac, situé en face de la Maison des Mégalithes.",
  },
  {
    question: "Le Petit Train fonctionne-t-il tous les jours ?",
    answer:
      "Oui. Le Petit Train de Carnac fonctionne tous les jours d'avril à début novembre, y compris les dimanches et jours fériés.",
  },
  {
    question: "La visite fonctionne-t-elle par mauvais temps ?",
    answer:
      "Oui. Le Petit Train fonctionne par tous les temps. En cas de pluie ou de grand vent, le train est vitré sur trois côtés, vous permettant de profiter pleinement de votre visite.",
  },
  {
    question: "Que vais-je voir pendant la visite ?",
    answer:
      "Pendant la visite, vous passerez à proximité des menhirs de Carnac, dont les alignements du Ménec, de Kermario et de Kerlescan. Vous découvrirez également la plage de Carnac, ses plages de sable blanc et le port de La Trinité-sur-Mer.",
  },
  {
    question: "Dans quelles langues le commentaire audio est-il disponible ?",
    answer:
      "Le commentaire audio guidé est disponible en 16 langues : français, anglais, allemand, espagnol, italien, portugais, néerlandais, polonais, russe, suédois, danois, tchèque, chinois, japonais et d'autres langues. Le commentaire audio est inclus dans le prix du billet — aucun supplément. Une version spécialement conçue pour les enfants est disponible en français et en anglais.",
  },
  {
    question: "La visite est-elle adaptée aux enfants ?",
    answer:
      "Oui. Le Petit Train de Carnac convient aux enfants et aux familles. Le commentaire audio pour enfants offre une expérience à la fois ludique et éducative.",
  },
  {
    question: "Combien coûte un billet ?",
    answer: (
      <>
        Les tarifs varient en fonction de l&apos;âge et de la taille du groupe. Les adultes et les
        enfants de moins de 12 ans bénéficient de tarifs différents. Les tarifs complets sont
        disponibles sur la{' '}
        <TransitionLink href="/prices" className="underline hover:text-[#54206d] transition-colors">
          page Tarifs et Billets
        </TransitionLink>
        .
      </>
    ),
    plainAnswer:
      "Les tarifs varient en fonction de l'âge et de la taille du groupe. Les adultes et les enfants de moins de 12 ans bénéficient de tarifs différents. Les tarifs complets sont disponibles sur la page Tarifs et Billets.",
  },
  {
    question: "Faut-il réserver à l'avance ?",
    answer:
      "La réservation à l'avance est recommandée, surtout pendant les périodes touristiques chargées. Les réservations en ligne doivent être effectuées au moins deux heures avant le départ.",
  },
  {
    question: "Puis-je acheter des billets sur place ?",
    answer:
      "Oui. Les billets peuvent être achetés au guichet situé au parking du Ménec, sous réserve de disponibilité.",
  },
  {
    question: "Combien de temps à l'avance dois-je arriver avant le départ ?",
    answer:
      "Il est demandé aux visiteurs d'arriver au moins 15 minutes avant le départ pour valider leur billet et embarquer.",
  },
  {
    question: "Les réservations de groupe sont-elles disponibles ?",
    answer:
      "Oui. Les réservations de groupe sont disponibles pour les groupes de 20 personnes ou plus. La réservation à l'avance est recommandée.",
  },
  {
    question: "Puis-je privatiser le Petit Train pour un événement ?",
    answer: (
      <>
        Oui. Le Petit Train de Carnac peut être privatisé pour des événements d&apos;entreprise, des
        associations, des groupes scolaires et des occasions privées. Un formulaire de demande dédié
        est disponible sur la{' '}
        <TransitionLink href="/privatisation" className="underline hover:text-[#54206d] transition-colors">
          page Privatisation
        </TransitionLink>
        .
      </>
    ),
    plainAnswer:
      "Oui. Le Petit Train de Carnac peut être privatisé pour des événements d'entreprise, des associations, des groupes scolaires et des occasions privées. Un formulaire de demande dédié est disponible sur la page Privatisation.",
  },
]

function FaqItem({
  question,
  answer,
  open,
  onToggle,
}: {
  question: string
  answer: React.ReactNode
  open: boolean
  onToggle: () => void
}) {
  return (
    <div className="py-6 border-b border-[rgba(0,0,0,0.08)] last:border-0">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-6 text-left cursor-pointer group"
        aria-expanded={open}
      >
        <h3 className="font-normal font-['Bricolage_Grotesque',sans-serif] text-[20px] text-[#181d27] leading-[1.1] tracking-[-1.4px] m-0">
          {question}
        </h3>
        <span
          className="shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center rounded-full border border-[rgba(0,0,0,0.15)] text-[#54206d] transition-all duration-300"
          aria-hidden="true"
        >
          {open ? (
            <svg width="14" height="2" viewBox="0 0 14 2" fill="none">
              <path d="M1 1H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 1V13M1 7H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </span>
      </button>

      <div className={`faq-answer-wrap ${open ? 'open' : ''} mt-1`}>
        <div className="faq-answer-inner">
          <p className="font-['Manrope',sans-serif] text-[#535862] text-base leading-6 tracking-[-0.48px] pt-3 pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  // FAQPage schema — fed to Google, ChatGPT, Perplexity, etc. for answer extraction
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'plainAnswer' in faq && faq.plainAnswer
          ? faq.plainAnswer
          : (typeof faq.answer === 'string' ? faq.answer : ''),
      },
    })),
  }

  return (
    <section data-anim-section className="bg-[#f5ebdd] py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-[1280px] mx-auto px-5 xl:px-[32px]">
        {faqs.map((faq, index) => (
          <FaqItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            open={openIndex === index}
            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
          />
        ))}
      </div>
    </section>
  )
}
