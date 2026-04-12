import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const infoCards: { id: string; photo: string; title: string; description: ReactNode }[] = [
  {
    id: "duration",
    photo: "https://picsum.photos/seed/practical-1/319/423",
    title: "Duration",
    description: (
      <>
        The sightseeing tour lasts approximately{" "}
        <strong>55 minutes.</strong> This duration allows you to discover
        Carnac at a relaxed pace while enjoying commentary and views,
        without feeling rushed or tired.
      </>
    ),
  },
  {
    id: "departure",
    photo: "https://picsum.photos/seed/practical-2/319/423",
    title: "Departure",
    description: (
      <>
        Tours depart from the <strong>Place de l&apos;Église</strong> in
        Carnac-Ville. The stop is clearly signposted and easy to find in
        the centre of town. No pre-booking required for individual
        visitors.
      </>
    ),
  },
  {
    id: "schedule",
    photo: "https://picsum.photos/seed/practical-3/319/423",
    title: "Schedule",
    description: (
      <>
        Departures run from <strong>April to September</strong>, several
        times a day. The train operates daily during peak season. Please
        check the current timetable for exact departure times and
        seasonal adjustments.
      </>
    ),
  },
  {
    id: "accessibility",
    photo: "https://picsum.photos/seed/practical-4/319/423",
    title: "Accessibility",
    description: (
      <>
        The Petit Train is <strong>accessible to all</strong>. It is
        ideal for families with young children, elderly visitors, and
        anyone who prefers to avoid long walks while still enjoying the
        best of Carnac.
      </>
    ),
  },
];

export default function PracticalInfo() {
  return (
    <section className="bg-[#f7f7f0] py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-[5%] w-full flex flex-col gap-12 items-start">
        {/* Header */}
        <div className="flex flex-col gap-3 max-w-[615px]">
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
            <p className="font-['Libre_Baskerville',serif] italic text-[#111] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
              Information
            </p>
          </div>
          <h2 className="font-['Libre_Baskerville',serif] text-[48px] text-[#181d27] leading-[1.15] tracking-[-3.36px] w-[575px]">
            Practical Information
          </h2>
          <p className="font-['Inter',sans-serif] text-[18px] text-[#535862] leading-[1.2] tracking-[-0.54px]">
            To help you plan your tourist train tour in Carnac, here are the
            essential details to know before booking.
          </p>
        </div>

        {/* Cards grid */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Row 1: 4 photo cards */}
          {infoCards.map((card, index) => (
            <ScrollReveal key={card.id} delay={index * 70}>
              <div className="relative h-[423px] rounded-xl overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                >
                  <Image
                    src={card.photo}
                    alt=""
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-[rgba(88,73,108,0.52)] from-[34%] to-[rgba(88,73,108,0.8)]" />
                </div>
                <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 text-white">
                  <p className="font-['Libre_Baskerville',serif] text-[24px] leading-[1.5] tracking-[-1.68px]">
                    {card.title}
                  </p>
                  <p className="font-['Inter',sans-serif] text-[14px] leading-[1.3] tracking-[-0.42px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}

          {/* Row 2 col 1-2: wide photo card */}
          <ScrollReveal delay={280} className="col-span-2">
            <div className="relative h-[423px] rounded-xl overflow-hidden">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
              >
                <Image
                  src="https://picsum.photos/seed/practical-5/650/423"
                  alt=""
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[rgba(88,73,108,0.52)] from-[34%] to-[rgba(88,73,108,0.8)]" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-2 text-white">
                <p className="font-['Libre_Baskerville',serif] text-[24px] leading-[1.5] tracking-[-1.68px]">
                  Payment
                </p>
                <p className="font-['Inter',sans-serif] text-[14px] leading-[1.3] tracking-[-0.42px]">
                  Tickets can be purchased{" "}
                  <strong>directly on board</strong> or at the departure
                  point. Payment by cash or card is accepted. Group and school
                  rates are available — contact us for a quote.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Row 2 col 3-4: purple CTA card */}
          <ScrollReveal delay={350} className="col-span-2">
            <div className="relative h-[423px] rounded-xl overflow-hidden bg-[#58496c]">
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none opacity-40"
              >
                <Image
                  src="/figma-assets/train-illustration.png"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute top-8 left-8 right-8 flex flex-col gap-2 text-white">
                <p className="font-['Libre_Baskerville',serif] text-[32px] leading-[1.5] tracking-[-2.24px]">
                  More Details
                </p>
                <p className="font-['Inter',sans-serif] text-[16px] leading-[1.3] tracking-[-0.48px] max-w-[357px]">
                  Consult our full guide for ticket prices, payment methods,
                  and additional tips to make the most of your journey through
                  the megaliths.
                </p>
              </div>
              <div className="absolute bottom-6 right-6">
                <Link
                  href="/informations"
                  className="btn-primary inline-flex items-center justify-center h-[45px] px-[22px] bg-[#f7f7f0] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-[#58496c] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
                >
                  Discover More
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
