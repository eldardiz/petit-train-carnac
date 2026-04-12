import Image from "next/image";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";

type Stop = {
  number: string;
  name: string;
  bullets: string[];
  note?: string;
  image: string;
  imageAlt: string;
  flip: boolean;
};

const stops: Stop[] = [
  {
    number: "01",
    name: "Ménec car park, Carnac",
    bullets: [
      "Located in front of the Maison des Mégalithes",
      "Starting point number 1",
      "Mandatory departure point for individual visitors",
      "Ticket office on site",
    ],
    note: "This is the only guaranteed boarding point for individual tickets.",
    image: "https://picsum.photos/seed/stop-1/592/440",
    imageAlt: "Ménec car park, Carnac — departure point for the Petit Train",
    flip: false,
  },
  {
    number: "02",
    name: "Port en Drô, Carnac plage",
    bullets: [
      "Stop located near Carnac's beach area",
      "Ideal for visitors staying near the seaside",
    ],
    image: "https://picsum.photos/seed/stop-2/592/440",
    imageAlt: "Carnac beach — Port en Drô stop",
    flip: true,
  },
  {
    number: "03",
    name: "La Trinité sur Mer harbour",
    bullets: [
      'Located near the "Cours des Quais" bus stop',
      "Close to the famous marina and sailing area",
    ],
    image: "https://picsum.photos/seed/stop-3/592/440",
    imageAlt: "La Trinité sur Mer harbour",
    flip: false,
  },
];

function StopNumber({ n, active }: { n: string; active: boolean }) {
  return (
    <div
      className={`relative w-[67px] h-[57px] ${active ? "opacity-100" : "opacity-40"}`}
    >
      <div className="absolute inset-0 bg-[#5a4a6e] rounded-[4px]" />
      <p className="absolute font-['Libre_Baskerville',serif] italic text-[#f7f7f0] text-[40px] leading-[1.2] tracking-[-2.8px] left-3 top-1">
        {n}
      </p>
    </div>
  );
}

export default function RoutesTimeline() {
  return (
    <section className="bg-[#f7f7f0] py-28">
      <div className="max-w-[1280px] mx-auto px-[5%] w-full flex flex-col gap-20 items-center">
        {/* Header */}
        <div className="flex flex-col gap-6 items-center text-center max-w-[768px]">
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
              Routes Timeline
            </p>
          </div>
          <h2 className="font-['Libre_Baskerville',serif] text-[48px] text-[#181d27] text-center leading-[1.1] tracking-[-3.36px] w-[518px]">
            Stops and route of the{" "}
            <em className="text-[#58496c]">Petit Train de Carnac</em>
          </h2>
          <p className="font-['Roboto',sans-serif] text-[#535862] text-[16px] text-center leading-[1.2] tracking-[-0.48px] w-[570px]">
            During the guided sightseeing tour, the Petit Train de Carnac passes
            through several key locations, offering a complete overview of
            Carnac and its surroundings.
          </p>
          <p className="font-['Roboto',sans-serif] font-bold text-[#535862] text-[16px] text-center leading-[1.2] tracking-[-0.48px] w-[570px]">
            The Petit Train de Carnac serves the following stops during the
            tour:
          </p>
        </div>

        {/* Timeline stops */}
        <div className="relative w-full flex flex-col items-center">
          <div className="timeline-line" aria-hidden="true" />

          {stops.map((stop, i) => {
            const ImageBlock = (
              <div className="flex-1 py-8">
                <div className="relative h-[440px] rounded-lg overflow-hidden">
                  <Image
                    src={stop.image}
                    alt={stop.imageAlt}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
            );
            const ContentBlock = (
              <div className="flex-1 flex flex-col gap-8 pt-4">
                <div className="flex flex-col gap-6">
                  <StopNumber n={stop.number} active={i === 0} />
                  <p className="font-['Libre_Baskerville',serif] text-[32px] text-[#0d0a06] leading-[1.3] tracking-[-2.24px]">
                    {stop.name}
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  {stop.bullets.map((b) => (
                    <li
                      key={b}
                      className="font-['Roboto',sans-serif] text-[#535862] text-[18px] leading-[1.5] tracking-[-0.54px] list-disc ml-7"
                    >
                      {b}
                    </li>
                  ))}
                  {stop.note && (
                    <p className="font-['Roboto',sans-serif] font-semibold italic text-[#535862] text-[18px] leading-[1.5] tracking-[-0.54px]">
                      {stop.note}
                    </p>
                  )}
                </ul>
                <div className="flex items-center gap-3">
                  <Link
                    href="/book"
                    className="btn-primary inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#5a4a6e] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
                  >
                    <div className="relative shrink-0 w-5 h-5">
                      <Image
                        src="/figma-assets/icon-ticket-white.svg"
                        alt=""
                        fill
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                    Book your tour
                  </Link>
                  <Link
                    href="/prices"
                    className="btn-secondary inline-flex items-center justify-center h-[45px] px-[22px] bg-[#f7f7f0] border border-[rgba(0,0,0,0.2)] rounded-[4px] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
                  >
                    See Pricing
                  </Link>
                </div>
              </div>
            );

            return (
              <ScrollReveal
                key={stop.number}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 100}
                className="w-full"
              >
                <div className="w-full flex flex-col items-center">
                  <div className="w-full flex gap-12 items-center">
                    {stop.flip ? ContentBlock : ImageBlock}

                    {/* Timeline connector dot */}
                    <div className="flex flex-col items-center justify-center self-stretch w-8 relative z-10">
                      <div className="w-3 h-3 rounded-full bg-[#5a4a6e] border-2 border-white ring-1 ring-[#5a4a6e]" />
                    </div>

                    {stop.flip ? ImageBlock : ContentBlock}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
