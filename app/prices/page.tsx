import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/sections/Hero";
import Prices from "@/components/sections/Prices";
import InformationsSchedule from "@/components/sections/InformationsSchedule";
import Reviews from "@/components/sections/Reviews";
import Locations from "@/components/sections/Locations";
import FAQ from "@/components/sections/FAQ";

export const metadata = {
  title: "Prices & Tickets — Petit Train de Carnac",
  description:
    "Discover the ticket prices for the Petit Train de Carnac. Individual and group rates for adults and children, with online booking available.",
};

const pricesRightCard = (
  <div className="absolute bottom-[514px] lg:bottom-[30px] left-1/2 -translate-x-1/2 lg:left-[189px] lg:translate-x-0 bg-[rgba(90,74,110,0.65)] border border-[rgba(255,255,255,0.2)] rounded-xl p-6 w-[499px] max-w-[calc(100%-32px)] flex flex-col gap-4 z-20">
    <div className="flex items-start justify-between gap-4">
      <p className="font-['Roboto',sans-serif] font-semibold text-[20px] leading-[1.1] text-white tracking-[-0.8px] max-w-[312px]">
        &ldquo;Didn&rsquo;t expect all that for 8 euros. Well worth it I&rsquo;d say.&rdquo;
      </p>
      <div className="relative h-[43px] w-[76px] shrink-0">
        <Image
          src="/figma-assets/stars.svg"
          alt="5 stars"
          fill
          className="object-contain object-left"
        />
      </div>
    </div>
    <p className="font-['Roboto',sans-serif] font-normal text-[14px] leading-[1.4] text-white tracking-[-0.56px]">
      Dom L. · Google Review
    </p>
  </div>
);

const pricingFaqs = [
  {
    question: "How much does a ticket for the Petit Train de Carnac cost?",
    answer:
      "Ticket prices depend on age and group size. For individual visitors, the standard adult ticket costs 8 euros. Children under 12 years benefit from a reduced rate of 5 euros. Group rates apply for groups of 20 people or more.",
  },
  {
    question: "Are there reduced prices for children?",
    answer:
      "Yes. Children under 12 years benefit from a reduced ticket price. Children's tickets include the same guided sightseeing tour and access to the audio commentary, including the version adapted for children.",
  },
  {
    question: "Do children need a ticket to ride the Petit Train?",
    answer:
      "Yes. All passengers require a ticket to board the Petit Train de Carnac. Reduced fares apply for children under 12 years.",
  },
  {
    question: "Are there discounts for groups?",
    answer:
      "Yes. Group rates are available for groups of 20 people or more. Reduced group prices apply to both adults and children. Advance reservation is recommended for group visits to ensure availability.",
  },
  {
    question: "What is included in the ticket price?",
    answer:
      "Each ticket includes the full guided sightseeing tour of approximately 55 minutes, multilingual audio commentary, a dedicated children's commentary, and a seated and comfortable sightseeing experience. There are no additional fees.",
  },
  {
    question: "Can I buy tickets on site?",
    answer:
      "Yes. Tickets can be purchased at the ticket office located at the Ménec car park, subject to availability. During busy tourist periods, tickets may sell out, so booking in advance is recommended.",
  },
  {
    question: "Can I book tickets online?",
    answer:
      "Yes. Online booking is available and recommended, especially during peak tourist periods. Online reservations must be completed at least two hours before departure.",
  },
];

export default function PricesPage() {
  return (
    <main>
      <Hero
        label="Prices & Tickets"
        heading={
          <>
            Ticket prices for the{" "}
            <em className="italic text-[#58496c]">Petit Train de Carnac</em>
          </>
        }
        description="Find all ticket prices and booking information for the Petit Train de Carnac. This page explains individual and group rates, reduced fares for children, and how to book your guided sightseeing tour in Carnac with confidence."
        tagline={null}
        buttons={
          <>
            <Link
              href="#"
              className="btn-primary bg-[#5a4a6e] h-[45px] px-[22px] rounded-[4px] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap inline-flex items-center shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)]"
            >
              Individual Flyer
            </Link>
            <Link
              href="#"
              className="btn-secondary bg-[#f7f7f0] border border-[rgba(0,0,0,0.2)] h-[45px] px-[22px] rounded-[4px] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap inline-flex items-center"
            >
              Group Flyer
            </Link>
          </>
        }
        googleBadgeText="The Petit Train de Carnac has a rating over 4.7 on Google, with over 6,000 reviews, making it one of the most popular touristic in Carnac."
        rightImageSrc="/figma-assets/ImagePricesHero.png"
        rightImageAlt="Le Petit Train de Carnac"
        rightCard={pricesRightCard}
        showBottomBanner={false}
      />
      <div id="prices">
        <Prices />
      </div>
      <InformationsSchedule />
      <Reviews />
      <Locations />
      <FAQ
        faqs={pricingFaqs}
        label="Frequently Asked Questions"
        heading={
          <>
            Frequently Asked Questions{" "}
            <em className="text-[#58496c]">about Pricing</em>
          </>
        }
        description="Find clear answers to the most common questions about ticket prices, group rates, and how to book the Petit Train de Carnac."
      />
    </main>
  );
}
