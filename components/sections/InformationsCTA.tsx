import Image from "next/image";
import Link from "next/link";

export default function InformationsCTA() {
  return (
    <section className="relative overflow-hidden py-28">
      {/* Background image + overlay */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <Image
          src="/figma-assets/group-booking-bg.jpg"
          alt=""
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-start">
          {/* Left: section label + heading */}
          <div className="flex-1 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <div className="relative shrink-0 w-[19px] h-[19px]">
                <Image
                  src="/figma-assets/icon-train-white.svg"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <p className="font-['Libre_Baskerville',serif] italic text-[#f7f7f0] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
                Group Booking — Privatization
              </p>
            </div>
            <h2 className="font-['Libre_Baskerville',serif] text-[clamp(36px,4vw,48px)] leading-[1.15] tracking-[-3.36px] text-[#f7f7f0] max-w-[575px]">
              Booking for private tours
            </h2>
          </div>

          {/* Right: body text + CTA */}
          <div className="flex-1 flex flex-col gap-8">
            <p className="font-['Inter',sans-serif] text-[18px] leading-[1.2] tracking-[-0.54px] text-[#e5e5e5]">
              If you are travelling as a group or planning a private tour, we
              recommend using our dedicated request form. This allows our team
              to confirm availability and propose the best option for your
              visit.
            </p>
            <div>
              <Link
                href="/privatization"
                className="btn-primary inline-flex items-center h-[45px] px-[22px] bg-[#f7f7f0] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
              >
                Privatization booking
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
