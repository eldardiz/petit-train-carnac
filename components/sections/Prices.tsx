import Image from "next/image";

const individualRows = [
  { label: "Adults", price: "8€" },
  { label: "Children under 12", price: "5€" },
];

const groupRows = [
  { label: "Adults", price: "7€" },
  { label: "Children under 12", price: "4€" },
];

export default function Prices() {
  return (
    <section className="relative bg-[#58496c] flex flex-col gap-20 items-center justify-center px-16 py-20 overflow-hidden">
      {/* Decorative background illustration */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none opacity-10">
        <Image
          src="https://picsum.photos/seed/prices-bg/1573/484"
          alt=""
          fill
          className="object-cover"
          unoptimized
        />
      </div>

      {/* Header */}
      <div className="relative flex flex-col gap-6 items-center text-center max-w-[623px]">
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
          <p className="font-['Libre_Baskerville',serif] italic text-[#f7f7f0] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
            Prices
          </p>
        </div>
        <h2 className="font-['Libre_Baskerville',serif] text-[48px] text-[#f7f7f0] leading-[1.1] tracking-[-3.36px] w-[581px]">
          An affordable adventure for the whole family
        </h2>
        <p className="font-['Roboto',sans-serif] text-[#f7f7f0] text-[16px] leading-[1.2] tracking-[-0.48px] w-[551px]">
          From solo explorers to large tribes, find the perfect rate for your
          visit. Take advantage of our special pricing for children and
          families.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="relative flex flex-col lg:flex-row gap-8 items-start">
        {/* Individual Tickets */}
        <div className="bg-[#f7f7f0] flex flex-col w-[371px] h-[317px] p-6 relative">
          {/* Card header */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="relative shrink-0 w-6 h-6">
              <Image
                src="/figma-assets/icon-ticket.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>
            <p className="font-['Libre_Baskerville',serif] italic text-[#58496c] text-[24px] leading-normal tracking-[-0.72px] whitespace-nowrap">
              Individual Tickets
            </p>
          </div>
          <div className="border-b border-[rgba(0,0,0,0.15)] mb-2" />

          {/* Price rows */}
          <div className="flex flex-col mt-2">
            {individualRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between py-2 border-b border-[rgba(0,0,0,0.15)]"
              >
                <p className="font-['Roboto',sans-serif] text-[#232323] text-[16px]">
                  {row.label}
                </p>
                <p className="font-['Roboto',sans-serif] font-extrabold text-[#58496c] text-[18px] text-right">
                  {row.price}
                </p>
              </div>
            ))}
          </div>

          {/* Info note */}
          <div className="flex items-start gap-2.5 mt-auto pt-4">
            <div className="relative shrink-0 w-6 h-6">
              <Image
                src="/figma-assets/icon-info.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>
            <p className="font-['Nunito',sans-serif] text-[11px] text-[rgba(35,35,35,0.7)] leading-[1.4] tracking-[-0.5px]">
              <strong>For individuals:</strong> the meeting point is at the
              departure point; ticket office on-site.
            </p>
          </div>
        </div>

        {/* Group Booking */}
        <div className="bg-[#58496c] border border-[rgba(247,247,240,0.15)] flex flex-col w-[371px] h-[317px] p-6 relative">
          {/* Card header */}
          <div className="flex items-center gap-2.5 mb-3">
            <div className="relative shrink-0 w-6 h-6">
              <Image
                src="/figma-assets/icon-group.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>
            <p className="font-['Libre_Baskerville',serif] italic text-white text-[24px] leading-normal tracking-[-0.72px] whitespace-nowrap">
              Group Booking
            </p>
          </div>
          <div className="border-b border-[rgba(255,255,255,0.15)] mb-2" />

          {/* Price rows */}
          <div className="flex flex-col mt-2">
            {groupRows.map((row) => (
              <div
                key={row.label}
                className="flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.15)]"
              >
                <p className="font-['Roboto',sans-serif] text-white text-[16px]">
                  {row.label}
                </p>
                <p className="font-['Roboto',sans-serif] font-extrabold text-white text-[18px] text-right">
                  {row.price}
                </p>
              </div>
            ))}
          </div>

          {/* Info note */}
          <div className="flex items-start gap-2.5 mt-auto pt-4">
            <div className="relative shrink-0 w-6 h-6">
              <Image
                src="/figma-assets/icon-info-white.svg"
                alt=""
                fill
                className="object-contain"
                aria-hidden="true"
              />
            </div>
            <p className="font-['Nunito',sans-serif] text-[11px] text-[rgba(255,255,255,0.7)] leading-[1.4] tracking-[-0.5px]">
              <strong>For groups:</strong> reservation is advised. &ldquo;Group&rdquo;
              reduced rate only applies if there are over 20 people embarking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
