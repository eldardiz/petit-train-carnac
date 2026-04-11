import Image from "next/image";

const features = [
  {
    icon: "/figma-assets/icon-train-seat.svg",
    title: "Comfortable sightseeing train",
    description:
      "Discover Carnac's best sites seated comfortably aboard our tourist train, designed for visitors who want to explore without effort.",
  },
  {
    icon: "/figma-assets/icon-audio-guide.svg",
    title: "Guided commentary during the tour",
    description:
      "Audio commentary provides clear and accessible information about the places you pass, bringing Carnac's history and atmosphere to life.",
  },
  {
    icon: "/figma-assets/icon-landmark.svg",
    title: "Discovery of Carnac's heritage and landscapes",
    description:
      "Visit the famous menhirs, white sand beaches, and the harbour of La Trinité sur Mer in a single relaxed and scenic journey.",
  },
  {
    icon: "/figma-assets/icon-family.svg",
    title: "Suitable for families, seniors, and groups",
    description:
      "Our train is welcoming for all ages and group sizes — no long walks, no effort, just a comfortable and enjoyable experience for everyone.",
  },
];

export default function Features() {
  return (
    <section className="bg-[#f7f7f0] flex flex-col items-center gap-16 py-24">
      {/* Header row */}
      <div className="w-full max-w-[1280px] px-8">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          {/* Left: label + heading */}
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
                Tour Overview
              </p>
            </div>
            <h2 className="font-['Libre_Baskerville',serif] text-[48px] text-[#181d27] leading-[1.15] tracking-[-3.36px] w-[575px]">
              A simple and enjoyable way to explore Carnac
            </h2>
          </div>

          {/* Right: body text */}
          <div className="flex flex-col gap-5 max-w-[603px] font-['Inter',sans-serif] text-[18px] text-[#535862] leading-[1.2] tracking-[-0.54px]">
            <p>
              The Petit Train de Carnac invites you to discover the town at a relaxed pace, comfortably seated aboard a sightseeing train designed for visitors who want to enjoy Carnac without effort.
            </p>
            <p>
              During the tour, audio commentary provides clear and accessible information about the places you pass, helping you understand Carnac's history, landmarks, and atmosphere. This tourist train is ideal for visitors looking for a pleasant introduction to Carnac and its surroundings.
            </p>
          </div>
        </div>
      </div>

      {/* Features grid + photo */}
      <div className="w-full max-w-[1280px] px-8 flex flex-col lg:flex-row gap-16 items-center">
        {/* 2×2 feature grid */}
        <div className="flex flex-wrap gap-x-8 gap-y-12 flex-1">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col gap-5 items-start flex-1 min-w-[240px]"
            >
              {/* Icon box */}
              <div className="relative shrink-0 w-16 h-16 rounded-[10px] border border-[#e9eaeb] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] overflow-hidden">
                <div aria-hidden="true" className="absolute inset-0 bg-[#58496c] pointer-events-none rounded-[10px]" />
                <div className="absolute inset-[15px]">
                  <Image
                    src={feature.icon}
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
                <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_0px_0px_1px_rgba(10,13,18,0.18),inset_0px_-2px_0px_0px_rgba(10,13,18,0.05)]" />
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <p className="font-['Inter',sans-serif] font-semibold text-[20px] text-[#181d27] leading-[1.5] tracking-[-0.8px]">
                  {feature.title}
                </p>
                <p className="font-['Inter',sans-serif] text-base text-[#535862] leading-6">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Large photo */}
        <div className="relative flex-1 h-[560px] min-w-[320px] rounded-tl-2xl rounded-bl-2xl overflow-hidden">
          <Image
            src="https://picsum.photos/seed/features-photo/768/560"
            alt="Scenic view from the Petit Train de Carnac"
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      </div>
    </section>
  );
}
