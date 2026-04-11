import Image from "next/image";

const locationItems = [
  {
    icon: "/figma-assets/icon-map-pin.svg",
    title: "Main departure point",
    description:
      "The main departure point for individual visitors is located at the Ménec car park in Carnac, directly in front of the Maison des Mégalithes. This location is clearly signposted and easy to reach on foot from nearby attractions.",
  },
  {
    icon: "/figma-assets/icon-car.svg",
    title: "By car",
    description:
      "If you are arriving by car, leave the Nantes to Brest road at Auray, then follow the signs towards Carnac and La Trinité sur Mer. Once in Carnac, follow the signs for the Maison des Mégalithes. The Petit Train departure point is located on the Ménec car park. Parking is available nearby.",
  },
  {
    icon: "/figma-assets/icon-train-sm.svg",
    title: "By train",
    description:
      "The nearest train station is Auray, served by TGV trains on the Paris to Quimper and Bordeaux to Brest lines. From Auray station, you can reach Carnac by car, taxi, or local transport. The Ménec departure point is then easy to access once you arrive in Carnac.",
  },
];

export default function OurLocation() {
  return (
    <section className="bg-[#f7f7f0] flex items-center gap-20 px-16 py-28">
      {/* Left: photo */}
      <div className="flex-1 flex items-center justify-center relative h-[845px]">
        <div className="relative w-full h-full rounded-2xl overflow-hidden">
          <Image
            src="https://picsum.photos/seed/our-location/656/845"
            alt="Carnac menhirs area — departure point for the Petit Train"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
        {/* Decorative rotated band */}
        <div
          aria-hidden="true"
          className="absolute -left-10 top-0 w-[73px] h-full bg-[#58496c] opacity-20 pointer-events-none"
          style={{ transform: "rotate(8.21deg)" }}
        />
      </div>

      {/* Right: content */}
      <div className="flex-1 flex flex-col gap-6 max-w-[623px]">
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
          <p className="font-['Libre_Baskerville',serif] italic text-[#5a4a6e] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
            Our Location
          </p>
        </div>

        {/* Heading */}
        <h2 className="font-['Libre_Baskerville',serif] text-[48px] text-[#181d27] leading-[1.1] tracking-[-3.36px] w-[472px]">
          How to access the{" "}
          <em className="text-[#58496c]">Petit Train de Carnac</em>
        </h2>

        {/* Subtext */}
        <p className="font-['Roboto',sans-serif] text-[#535862] text-[16px] leading-[1.2] tracking-[-0.48px] w-[570px]">
          The Petit Train de Carnac is easy to access whether you are arriving
          by car or by train. The main departure point is located close to the
          Carnac menhirs and the town's main tourist areas.
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
                <p className="font-['Libre_Baskerville',serif] text-[24px] text-[#181d27] leading-[1.1] tracking-[-1.68px]">
                  {item.title}
                </p>
                <p className="font-['Inter',sans-serif] text-[#535862] text-base leading-6">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Arrival recommendation */}
        <div className="flex flex-col gap-2 pl-16">
          <p className="font-['Roboto',sans-serif] font-semibold text-[#5a4a6e] text-[20px] leading-[1.2] tracking-[-0.6px] w-[570px]">
            Arrival recommendation
          </p>
          <p className="font-['Roboto',sans-serif] text-[#535862] text-[16px] leading-[1.2] tracking-[-0.48px] w-[435px]">
            Please arrive at least 15 minutes before departure to allow enough
            time for ticket check in and boarding.
          </p>
        </div>
      </div>
    </section>
  );
}
