import Image from "next/image";
import Link from "next/link";

export default function InformationsPrices() {
  return (
    <section className="bg-[#58496c] relative overflow-hidden py-20">
      {/* Faint background watermark */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-10">
        <Image
          src="/figma-assets/train-illustration.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-5 xl:px-0 flex flex-col items-center gap-12">
        {/* Heading area */}
        <div className="flex flex-col items-center gap-6 text-center max-w-[623px]">
          {/* Section label */}
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
              Prices
            </p>
          </div>

          <h2 className="font-['Libre_Baskerville',serif] text-[clamp(36px,4vw,48px)] leading-[1.1] tracking-[-3.36px] text-[#f7f7f0]">
            An affordable adventure for the whole family
          </h2>

          <p className="font-['Roboto',sans-serif] text-base leading-[1.2] tracking-[-0.48px] text-[#f7f7f0]">
            From solo explorers to large tribes, find the perfect rate for your
            visit. Take advantage of our special pricing for children and
            families.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="flex flex-col md:flex-row gap-8 items-stretch w-full max-w-[774px]">
          {/* Individual Tickets — cream card */}
          <div className="bg-[#f7f7f0] flex-1 p-6 flex flex-col gap-4">
            {/* Card header */}
            <div className="flex items-center gap-2 pb-4 border-b border-[rgba(0,0,0,0.15)]">
              <div className="relative shrink-0 w-6 h-6">
                <Image
                  src="/figma-assets/icon-ticket.svg"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <p className="font-['Libre_Baskerville',serif] italic text-[#58496c] text-[22px] tracking-[-0.72px]">
                Individual Tickets
              </p>
            </div>

            {/* Price rows */}
            <div className="flex flex-col gap-0">
              <div className="flex items-center justify-between py-2 border-b border-[rgba(0,0,0,0.15)]">
                <span className="font-['Roboto',sans-serif] text-base text-[#232323]">Adults</span>
                <span className="font-['Roboto',sans-serif] font-extrabold text-[18px] text-[#58496c]">8,5€</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[rgba(0,0,0,0.15)]">
                <span className="font-['Roboto',sans-serif] text-base text-[#232323]">Children under 12</span>
                <span className="font-['Roboto',sans-serif] font-extrabold text-[18px] text-[#58496c]">5€</span>
              </div>
            </div>

            {/* Info note */}
            <div className="flex items-start gap-2 mt-auto pt-2">
              <div className="relative shrink-0 w-6 h-6 mt-0.5">
                <Image
                  src="/figma-assets/icon-info.svg"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <p className="font-['Nunito',sans-serif] text-[11px] leading-[1.4] tracking-[-0.5px] text-[rgba(35,35,35,0.7)]">
                <strong>For individuals:</strong> the meeting point is at the
                departure point; ticket office on-site.
              </p>
            </div>
          </div>

          {/* Group Booking — purple card */}
          <div className="bg-[#58496c] border border-[rgba(247,247,240,0.15)] flex-1 p-6 flex flex-col gap-4">
            {/* Card header */}
            <div className="flex items-center gap-2 pb-4 border-b border-[rgba(255,255,255,0.15)]">
              <div className="relative shrink-0 w-6 h-6">
                <Image
                  src="/figma-assets/icon-group.svg"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <p className="font-['Libre_Baskerville',serif] italic text-white text-[22px] tracking-[-0.72px]">
                Group Booking
              </p>
            </div>

            {/* Price rows */}
            <div className="flex flex-col gap-0">
              <div className="flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.15)]">
                <span className="font-['Roboto',sans-serif] text-base text-white">Adults</span>
                <span className="font-['Roboto',sans-serif] font-extrabold text-[18px] text-white">7€</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.15)]">
                <span className="font-['Roboto',sans-serif] text-base text-white">Children under 12</span>
                <span className="font-['Roboto',sans-serif] font-extrabold text-[18px] text-white">4€</span>
              </div>
            </div>

            {/* Info note */}
            <div className="flex items-start gap-2 mt-auto pt-2">
              <div className="relative shrink-0 w-6 h-6 mt-0.5">
                <Image
                  src="/figma-assets/icon-info-white.svg"
                  alt=""
                  fill
                  className="object-contain"
                  aria-hidden="true"
                />
              </div>
              <p className="font-['Nunito',sans-serif] text-[11px] leading-[1.4] tracking-[-0.5px] text-[rgba(255,255,255,0.7)]">
                <strong>For groups:</strong> reservation is advised. &ldquo;Group&rdquo; reduced rate
                only applies if there are over 20 people embarking.
              </p>
            </div>
          </div>
        </div>

        {/* Book now CTA */}
        <Link
          href="/book"
          className="btn-primary inline-flex items-center gap-2 h-[45px] px-[22px] bg-[#f7f7f0] rounded-[4px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap"
        >
          Book now
        </Link>
      </div>
    </section>
  );
}
