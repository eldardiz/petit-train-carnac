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
      "Oui. Le Petit Train fonctionne par tous les temps. Les trains sont équipés pour accueillir les visiteurs qu'il fasse soleil, nuageux ou pluvieux.",
  },
  {
    question: "Que vais-je voir pendant la visite ?",
    answer:
      "Pendant la visite, vous passerez à proximité des menhirs de Carnac, dont les alignements du Ménec, de Kermario et de Kerlescan. Vous découvrirez également la plage de Carnac, ses plages de sable blanc et le port de La Trinité-sur-Mer.",
  },
  {
    question: "Dans quelles langues le commentaire audio est-il disponible ?",
    answer:
      "Le commentaire audio guidé est disponible en français, anglais, allemand, espagnol, italien, portugais, néerlandais, polonais, russe, suédois, danois, tchèque, chinois et japonais. Une version adaptée aux enfants est également disponible.",
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
        <TransitionLink href="/prices" className="underline hover:text-[#5a4a6e] transition-colors">
          page Tarifs et Billets
        </TransitionLink>
        .
      </>
    ),
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
        <TransitionLink href="/privatisation" className="underline hover:text-[#5a4a6e] transition-colors">
          page Privatisation
        </TransitionLink>
        .
      </>
    ),
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
        <p className="font-['Libre_Baskerville',serif] text-[20px] text-[#181d27] leading-[1.1] tracking-[-1.4px]">
          {question}
        </p>
        <span
          className="shrink-0 mt-0.5 w-6 h-6 flex items-center justify-center rounded-full border border-[rgba(0,0,0,0.15)] text-[#5a4a6e] transition-all duration-300"
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
          <p className="font-['Roboto',sans-serif] text-[#535862] text-base leading-6 tracking-[-0.48px] pt-3 pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="bg-[#f7f7f0] py-24">
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
