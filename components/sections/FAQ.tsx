"use client";

import Image from "next/image";
import { useState } from "react";
import type { ReactNode } from "react";
import TransitionLink from "@/components/ui/TransitionLink";

interface FaqData {
  question: string;
  answer: string;
}

const defaultFaqs: FaqData[] = [
  {
    question: "Qu'est-ce que le Petit Train de Carnac ?",
    answer:
      "Le Petit Train de Carnac est un train touristique guidé qui permet aux visiteurs de découvrir Carnac et ses environs de façon confortable et accessible. La visite inclut les célèbres menhirs de Carnac, la plage de Carnac et le port de La Trinité-sur-Mer, avec un commentaire audio tout au long du parcours.",
  },
  {
    question: "Combien de temps dure la visite en Petit Train de Carnac ?",
    answer:
      "La visite guidée dure environ 55 minutes. Cette durée permet aux visiteurs de voir les principaux monuments de Carnac sans se presser et sans longues distances à parcourir à pied.",
  },
  {
    question: "D'où part le Petit Train de Carnac ?",
    answer:
      "Le point de départ et d'arrivée principal pour les visiteurs individuels est situé au parking du Ménec à Carnac, en face de la Maison des Mégalithes. C'est le seul point de départ officiel pour les billets individuels.",
  },
  {
    question: "Que vais-je voir pendant la visite en Petit Train de Carnac ?",
    answer:
      "Pendant la visite, vous passerez à proximité des menhirs de Carnac, dont les alignements du Ménec, de Kermario et de Kerlescan. Vous découvrirez également la plage de Carnac, ses plages de sable blanc et le port de La Trinité-sur-Mer. Plus de 40 points d'intérêt sont expliqués au cours de la visite guidée.",
  },
  {
    question: "Le Petit Train de Carnac est-il adapté aux enfants et aux familles ?",
    answer:
      "Oui, le Petit Train de Carnac convient aux familles avec enfants. Un commentaire audio dédié adapté aux enfants est disponible, rendant la visite à la fois ludique et éducative pour les jeunes visiteurs.",
  },
  {
    question: "Dans quelles langues le commentaire guidé est-il disponible ?",
    answer:
      "Le commentaire audio guidé est disponible en plusieurs langues, dont le français, l'anglais, l'allemand, l'espagnol, l'italien, le portugais, le néerlandais, le polonais, le russe, le suédois, le danois, le tchèque, le chinois et le japonais. La visite est ainsi accessible aux visiteurs internationaux.",
  },
  {
    question: "Faut-il réserver le Petit Train de Carnac à l'avance ?",
    answer:
      "La réservation à l'avance est recommandée, surtout pendant les périodes touristiques chargées à Carnac. La réservation en ligne doit être effectuée au moins deux heures avant le départ. Les billets peuvent également être achetés sur place, sous réserve de disponibilité.",
  },
];

interface FaqItemProps {
  question: string;
  answer: string;
  open: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, open, onToggle }: FaqItemProps) {
  return (
    <div className="w-full py-6">
      <button
        type="button"
        onClick={onToggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            onToggle();
          }
        }}
        className="w-full flex items-start justify-between gap-6 text-left cursor-pointer"
        aria-expanded={open ? "true" : "false"}
      >
        <p className="font-['Libre_Baskerville',serif] text-[20px] text-[#181d27] leading-[1.1] tracking-[-1.4px]">
          {question}
        </p>
        <span
          className="shrink-0 text-[#5a4a6e] text-[24px] leading-none mt-0.5 transition-transform duration-300 select-none"
          aria-hidden="true"
        >
          {open ? "×" : "+"}
        </span>
      </button>

      <div className={`faq-answer-wrap ${open ? "open" : ""} mt-2`}>
        <div className="faq-answer-inner">
          <p className="font-['Roboto',sans-serif] text-[#535862] text-[16px] leading-6 tracking-[-0.48px] pt-2">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

interface FAQProps {
  faqs?: FaqData[];
  label?: string;
  heading?: ReactNode;
  description?: string;
}

export default function FAQ({
  faqs = defaultFaqs,
  label = "FAQ",
  heading = <>Questions <em className="text-[#58496c]">Fréquemment Posées</em></>,
  description = "Trouvez des réponses claires aux questions les plus fréquentes sur le Petit Train de Carnac.",
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#f7f7f0] py-24">
      <div className="max-w-[1280px] mx-auto px-5 xl:px-0 w-full grid grid-cols-1 lg:grid-cols-[35%_1fr] gap-16 items-start">
        {/* Left: heading */}
        <div className="flex flex-col gap-6 lg:sticky lg:top-28">
          <div className="flex items-center gap-2">
            <div className="relative shrink-0 w-[19px] h-[19px]">
              <Image
                src="/figma-assets/icon-train.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>
            <p className="font-['Libre_Baskerville',serif] italic text-[#5a4a6e] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
              {label}
            </p>
          </div>
          <h2 className="font-['Libre_Baskerville',serif] text-[32px] sm:text-[40px] md:text-[48px] text-[#181d27] leading-[1.1] tracking-[-1.5px] sm:tracking-[-2.5px] md:tracking-[-3.36px] [text-wrap:balance] break-words">
            {heading}
          </h2>
          <p className="font-['Roboto',sans-serif] text-[#535862] text-[16px] leading-[1.2] tracking-[-0.48px]">
            {description}
          </p>
          <TransitionLink
            href="/book"
            className="btn-primary inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#5a4a6e] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap w-fit"
          >
            Réservez votre visite
          </TransitionLink>
        </div>

        {/* Right: FAQ items */}
        <div className="flex flex-col divide-y divide-[rgba(0,0,0,0.1)]">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              open={openIndex === index}
              onToggle={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
