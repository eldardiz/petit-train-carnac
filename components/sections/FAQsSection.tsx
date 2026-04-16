'use client'

import { useState } from 'react'
import Link from 'next/link'

const faqs = [
  {
    question: 'What is the Petit Train de Carnac?',
    answer:
      'The Petit Train de Carnac is a guided sightseeing tourist train that allows visitors to discover Carnac and its surroundings in a comfortable and accessible way. The tour includes the Carnac menhirs, Carnac plage, and the harbour of La Trinité sur Mer, with audio commentary throughout the journey.',
  },
  {
    question: 'How long does the tour last?',
    answer:
      'The guided sightseeing tour lasts approximately 55 minutes. This duration allows visitors to see the main highlights of Carnac without long walking distances.',
  },
  {
    question: 'Where does the Petit Train de Carnac depart from?',
    answer:
      'The main departure and arrival point for individual visitors is the Ménec car park in Carnac, located in front of the Maison des Mégalithes.',
  },
  {
    question: 'Does the Petit Train operate every day?',
    answer:
      'Yes. The Petit Train de Carnac operates every day from April to early November, including Sundays and public holidays.',
  },
  {
    question: 'Does the tour operate in bad weather?',
    answer:
      'Yes. The Petit Train operates in all weather conditions. The trains are equipped to welcome visitors whether it is sunny, cloudy, or rainy.',
  },
  {
    question: 'What will I see during the tour?',
    answer:
      'During the tour, you will pass close to the Carnac menhirs, including the Ménec, Kermario, and Kerlescan alignments. You will also discover Carnac plage, its white sand beaches, and the harbour of La Trinité sur Mer.',
  },
  {
    question: 'In which languages is the audio commentary available?',
    answer:
      'The guided audio commentary is available in French, English, German, Spanish, Italian, Portuguese, Dutch, Polish, Russian, Swedish, Danish, Czech, Chinese, and Japanese. A version adapted for children is also available.',
  },
  {
    question: 'Is the tour suitable for children?',
    answer:
      "Yes. The Petit Train de Carnac is suitable for children and families. The children's audio commentary offers a fun and educational experience.",
  },
  {
    question: 'How much does a ticket cost?',
    answer: (
      <>
        Ticket prices vary depending on age and group size. Adults and children under 12 years benefit
        from different rates. Full prices are available on the{' '}
        <Link href="/prices" className="underline hover:text-[#5a4a6e] transition-colors">
          Prices and Tickets page
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Do I need to book in advance?',
    answer:
      'Booking in advance is recommended, especially during busy tourist periods. Online bookings must be made at least two hours before departure.',
  },
  {
    question: 'Can I buy tickets on site?',
    answer:
      'Yes. Tickets can be purchased at the ticket office at the Ménec car park, subject to availability.',
  },
  {
    question: 'How early should I arrive before departure?',
    answer:
      'Visitors are asked to arrive at least 15 minutes before departure to allow time for ticket check in and boarding.',
  },
  {
    question: 'Are group bookings available?',
    answer:
      'Yes. Group bookings are available for groups of 20 people or more. Advance reservation is recommended.',
  },
  {
    question: 'Can I privatize the Petit Train for an event?',
    answer: (
      <>
        Yes. The Petit Train de Carnac can be privatized for corporate events, associations, school
        groups, and private occasions. A dedicated request form is available on the{' '}
        <Link href="/privatisation" className="underline hover:text-[#5a4a6e] transition-colors">
          Privatisation page
        </Link>
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
