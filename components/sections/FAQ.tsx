"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const faqs = [
  {
    question: "What is the Petit Train de Carnac?",
    answer:
      "The Petit Train de Carnac is a guided sightseeing tourist train that allows visitors to discover Carnac and its surroundings in a comfortable and accessible way. The tour includes the famous Carnac menhirs, white sand beaches, and the harbour of La Trinité sur Mer, with audio commentary throughout the journey.",
  },
  {
    question: "How long does the Petit Train tour in Carnac last?",
    answer:
      "The guided sightseeing tour lasts approximately 55 minutes. This duration allows visitors to see the main landmarks of Carnac without rushing and without long walking distances.",
  },
  {
    question: "Where does the Petit Train de Carnac depart from?",
    answer:
      "The main departure and arrival point for individual visitors is located at the Ménec car park in Carnac, in front of the Maison des Mégalithes. This is the only official starting point for individual tickets.",
  },
  {
    question: "What will I see during the Petit Train tour of Carnac?",
    answer:
      "During the tour, you will pass close to the Carnac menhirs, including the alignments of Ménec, Kermario, and Kerlescan. You will also discover Carnac plage, its white sand beaches, and the harbour of La Trinité sur Mer. More than 40 points of interest are explained during the guided tour.",
  },
  {
    question: "Is the Petit Train de Carnac suitable for children and families?",
    answer:
      "Yes, the Petit Train de Carnac is suitable for families with children. A dedicated audio commentary adapted for children is available, making the tour both fun and educational for younger visitors.",
  },
  {
    question: "In which languages is the guided commentary available?",
    answer:
      "The guided audio commentary is available in multiple languages, including French, English, German, Spanish, Italian, Portuguese, Dutch, Polish, Russian, Swedish, Danish, Czech, Chinese, and Japanese. This makes the tour accessible to international visitors.",
  },
  {
    question: "Do I need to book the Petit Train de Carnac in advance?",
    answer:
      "Booking in advance is recommended, especially during busy tourist periods in Carnac. Online booking must be completed at least two hours before departure. Tickets can also be purchased on site, subject to availability.",
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
        aria-expanded={open}
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

export default function FAQ() {
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
              Frequently Asked Questions
            </p>
          </div>
          <h2 className="font-['Libre_Baskerville',serif] text-[48px] text-[#181d27] leading-[1.1] tracking-[-3.36px]">
            How to access the{" "}
            <em className="text-[#58496c]">Petit Train de Carnac</em>
          </h2>
          <p className="font-['Roboto',sans-serif] text-[#535862] text-[16px] leading-[1.2] tracking-[-0.48px]">
            Find clear answers to the most common questions about the Petit
            Train de Carnac.
          </p>
          <Link
            href="/book"
            className="btn-primary inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#5a4a6e] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap w-fit"
          >
            Book your tour
          </Link>
        </div>

        {/* Right: FAQ items */}
        <div className="flex flex-col divide-y divide-[rgba(0,0,0,0.1)]">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 50}>
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                open={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
