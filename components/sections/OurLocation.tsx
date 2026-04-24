"use client";

import Image from "next/image";
import dynamic from "next/dynamic";


const CarnacMap = dynamic(() => import("@/components/ui/CarnacMap"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-2xl bg-[#e9eaeb] animate-pulse" />
  ),
});

const locationItems = [
  {
    icon: "/figma-assets/icon-map-pin.svg",
    title: "Point de départ principal — Parking du Ménec",
    description:
      "Point de départ obligatoire pour les groupes et les réservations individuelles. Situé à Carnac, directement en face de la Maison des Mégalithes. Cet emplacement est clairement indiqué et facile d'accès à pied depuis les attractions voisines.",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Parking+du+M%C3%A9nec+Carnac+France",
  },
  {
    icon: "/figma-assets/icon-map-pin.svg",
    title: "Point 2 — Carnac Plage (Pordro)",
    description:
      "Achetez vos billets sur place au moment du départ (pas de réservation possible). Arrêt directement à la plage de Carnac.",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Carnac+Plage+Pordro+Carnac+France",
  },
  {
    icon: "/figma-assets/icon-map-pin.svg",
    title: "Point 3 — La Trinité-sur-Mer",
    description:
      "Arrêt de bus Courqué, côté mer, juste avant le rond-point Alain Barrière.",
    mapsUrl: "https://www.google.com/maps/dir/?api=1&destination=Arr%C3%AAt+Courqu%C3%A9+La+Trinit%C3%A9-sur-Mer+France",
  },
  {
    icon: "/figma-assets/icon-car.svg",
    title: "En voiture",
    description:
      "Si vous venez en voiture, quittez la route Nantes–Brest à Auray, puis suivez les panneaux vers Carnac et La Trinité-sur-Mer. Une fois à Carnac, suivez les panneaux pour la Maison des Mégalithes. Le point de départ du Petit Train se trouve au parking du Ménec. Des places de stationnement sont disponibles à proximité.",
    mapsUrl: null,
  },
  {
    icon: "/figma-assets/icon-train-sm.svg",
    title: "En train",
    description:
      "La gare la plus proche est Auray, desservie par des TGV sur les lignes Paris–Quimper et Bordeaux–Brest. Depuis la gare d'Auray, vous pouvez rejoindre Carnac en voiture, taxi ou transport local. Le point de départ du Ménec est ensuite facile d'accès une fois arrivé à Carnac.",
    mapsUrl: null,
  },
];

export default function OurLocation() {
  return (
    <section data-anim-section className="bg-[#f5ebdd] py-16 xl:py-28 isolate">
      <div className="max-w-[1280px] mx-auto px-5 xl:px-0 w-full flex flex-col-reverse lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
        {/* Map — bottom on mobile, left on desktop */}
        <div data-anim-item className="w-full h-[400px] lg:flex-1 lg:self-stretch lg:h-auto lg:min-h-[560px] rounded-2xl overflow-hidden shadow-md">
          <CarnacMap />
        </div>

        {/* Content — top on mobile, right on desktop */}
        <div data-anim-item className="flex-1 flex flex-col gap-6 max-w-[623px]">
          {/* Label */}
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
            <p className="font-['Bricolage_Grotesque',sans-serif] italic text-[#54206d] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
              Notre Emplacement
            </p>
          </div>

          {/* Heading */}
          <h2 className="font-normal font-['Bricolage_Grotesque',sans-serif] text-[32px] sm:text-[40px] md:text-[48px] text-[#181d27] leading-[1.1] tracking-[-1.5px] sm:tracking-[-2.5px] md:tracking-[-3.36px] max-w-[472px] break-words">
            Comment accéder au{" "}
            <em className="text-[#4d1c64]">Petit Train de Carnac</em>
          </h2>

          {/* Subtext */}
          <p className="font-['Manrope',sans-serif] text-[#535862] text-[16px] leading-[1.2] tracking-[-0.48px] max-w-[570px]">
            Le Petit Train de Carnac est facilement accessible, que vous arriviez
            en voiture ou en train. Le point de départ principal est situé à
            proximité des menhirs de Carnac et des principales zones touristiques
            de la ville.
          </p>

          {/* Feature items */}
          <div className="flex flex-col gap-8">
            {locationItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                  {/* Icon box */}
                  <div className="relative shrink-0 w-12 h-12 rounded-[10px] border border-[#e9eaeb] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] overflow-hidden bg-white">
                    <div className="absolute inset-[11px]">
                      <Image
                        src={item.icon}
                        alt=""
                        fill
                        className="object-contain"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2 pt-2.5 flex-1">
                    <p className="font-['Bricolage_Grotesque',sans-serif] text-[24px] text-[#181d27] leading-[1.1] tracking-[-1.68px]">
                      {item.title}
                    </p>
                    <p className="font-['Manrope',sans-serif] text-[#535862] text-base leading-6">
                      {item.description}
                    </p>
                    {item.mapsUrl && (
                      <a
                        href={item.mapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[#54206d] text-sm font-['Manrope',sans-serif] font-medium underline underline-offset-2 hover:opacity-70 transition-opacity w-fit"
                      >
                        <div className="relative shrink-0 w-4 h-4">
                          <Image src="/figma-assets/icon-map-pin.svg" alt="" fill className="object-contain" aria-hidden="true" />
                        </div>
                        Voir l&apos;itinéraire
                      </a>
                    )}
                  </div>
              </div>
            ))}
          </div>

          {/* Arrival recommendation */}
          <div className="flex flex-col gap-2 pl-16">
            <p className="font-['Manrope',sans-serif] font-semibold text-[#54206d] text-[20px] leading-[1.2] tracking-[-0.6px]">
              Conseil d&apos;arrivée
            </p>
            <p className="font-['Manrope',sans-serif] text-[#535862] text-[16px] leading-[1.2] tracking-[-0.48px] max-w-[435px]">
              Merci d&apos;arriver au moins 15 minutes avant le départ afin
              d&apos;avoir le temps de valider votre billet et d&apos;embarquer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
