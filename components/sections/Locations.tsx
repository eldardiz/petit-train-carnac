import Image from "next/image";
import Link from "next/link";

const locations = [
  {
    id: "vannes",
    name: "Le Petit Train de Vannes",
    tagline: "Discover the historic heart of Vannes",
    description:
      "Step aboard the Petit Train de Vannes and explore one of the most beautiful historic cities in Brittany. The guided tour takes you through medieval streets, along ancient ramparts, and past key landmarks that tell the story of Vannes and its rich past. This sightseeing tour is ideal for visitors who want to understand the city's history while enjoying a relaxed and accessible experience.",
    cta: "Discover the Petit Train de Vannes",
    href: "#",
    image: "https://picsum.photos/seed/vannes/640/550",
    imageAlt: "Vannes historic city centre",
    roundedClass: "rounded-tl-[32px]",
  },
  {
    id: "quiberon",
    name: "Le Petit Train de Quiberon",
    tagline: "Explore the stunning Quiberon peninsula",
    description:
      "Hop aboard the Petit Train de Quiberon for a scenic journey along the iconic peninsula. Enjoy breathtaking views of the Atlantic coast, discover charming seaside villages, and learn about the area's seafaring traditions with informative audio commentary throughout the ride.",
    cta: "Discover the Petit Train de Quiberon",
    href: "#",
    image: "https://picsum.photos/seed/quiberon/640/550",
    imageAlt: "Quiberon peninsula coastal views",
    roundedClass: "rounded-tr-[32px]",
  },
];

export default function Locations() {
  return (
    <section className="bg-[#f7f7f0] flex flex-col gap-16 items-center overflow-hidden px-16 py-28">
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
            Locations
          </p>
        </div>
        <h2 className="font-['Libre_Baskerville',serif] text-[48px] text-[#181d27] text-center leading-[1.1] tracking-[-3.36px] w-[570px]">
          Discover our other Petit Train tours in Morbihan
        </h2>
        <p className="font-['Roboto',sans-serif] text-[#535862] text-[16px] text-center leading-[1.2] tracking-[-0.48px] w-[600px]">
          Extend your visit to Morbihan by discovering other destinations aboard
          our Petit Trains. Each tour offers a different perspective on the
          region, from historic cities to spectacular coastal landscapes, always
          with the same comfortable and guided experience.
        </p>
      </div>

      {/* Location cards */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-3">
        {locations.map((loc) => (
          <div
            key={loc.id}
            className={`relative h-[550px] overflow-hidden ${loc.roundedClass}`}
          >
            {/* Background photo + gradient */}
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <Image
                src={loc.image}
                alt=""
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(88,73,108,0.52)] from-[34%] to-[rgba(88,73,108,0.8)]" />
            </div>

            {/* Content — bottom half */}
            <div className="absolute bottom-0 left-6 right-6 pb-6 flex flex-col gap-2 text-white">
              <div className="flex items-center gap-2.5">
                <p className="font-['Libre_Baskerville',serif] text-[32px] leading-[1.5] tracking-[-2.24px]">
                  {loc.name}
                </p>
                <div className="relative shrink-0 w-6 h-6">
                  <Image
                    src="/figma-assets/icon-link.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <p className="font-['Nunito',sans-serif] font-light italic text-[14px] leading-[1.3] tracking-[-0.42px] w-[271px]">
                {loc.tagline}
              </p>
              <p className="font-['Nunito',sans-serif] text-[14px] leading-[1.3] tracking-[-0.42px]">
                {loc.description}
              </p>
              <Link
                href={loc.href}
                className="mt-2 inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#5a4a6e] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap w-fit"
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
                {loc.cta}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
