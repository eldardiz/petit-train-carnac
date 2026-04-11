"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start gap-6 text-left cursor-pointer"
        aria-expanded={open}
      >
        <div className="flex-1 flex flex-col gap-4">
          <p className="font-['Libre_Baskerville',serif] text-[20px] text-[#181d27] leading-[1.1] tracking-[-1.4px]">
            {question}
          </p>
          <div
            className={cn(
              "overflow-hidden transition-all duration-300",
              open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
            )}
          >
            <p className="font-['Roboto',sans-serif] text-[#535862] text-[16px] leading-6 tracking-[-0.48px]">
              {answer}
            </p>
          </div>
        </div>
        <div className="relative shrink-0 w-6 h-6 mt-0.5">
          <Image
            src="/figma-assets/icon-minus-circle.svg"
            alt={open ? "Collapse" : "Expand"}
            fill
            className={cn(
              "object-contain transition-transform duration-300",
              open ? "rotate-0" : "rotate-45"
            )}
          />
        </div>
      </button>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-[#f7f7f0] flex items-start flex-wrap gap-16 py-24 max-w-[1280px] mx-auto px-8">
      {/* Left: heading */}
      <div className="flex flex-col gap-6 w-[623px] shrink-0">
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
        <h2 className="font-['Libre_Baskerville',serif] text-[48px] text-[#181d27] leading-[1.1] tracking-[-3.36px] w-[472px]">
          How to access the{" "}
          <em className="text-[#58496c]">Petit Train de Carnac</em>
        </h2>
        <p className="font-['Roboto',sans-serif] text-[#535862] text-[16px] leading-[1.2] tracking-[-0.48px] w-[348px]">
          Find clear answers to the most common questions about the Petit Train
          de Carnac.
        </p>
      </div>

      {/* Right: FAQ items */}
      <div className="flex-1 min-w-[480px] flex flex-col gap-8">
        {faqs.map((faq) => (
          <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
