import Image from "next/image";
import { useTranslations } from "next-intl";
import { brand } from "@/lib/brand";

export default function Prices() {
  const t = useTranslations("sections.prices");

  const individualPrices = [brand.prices.individual.adult, brand.prices.individual.child]
  const earlyBirdPrices = [brand.prices.earlyBird.adult, brand.prices.earlyBird.child]
  const rowLabels = [t("rowAdults"), t("rowChildren")] as const;

  return (
    <section data-anim-section className="relative bg-[#4d1c64] py-20 overflow-hidden">
      {/* Decorative hexagonal pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
      >
        <Image
          src="/figma-assets/hexagonal-pattern.svg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="max-w-[1280px] mx-auto px-5 xl:px-0 w-full flex flex-col gap-20 items-center">
        {/* Header */}
        <div data-anim-item className="relative flex flex-col gap-6 items-center text-center max-w-[623px]">
          <div className="flex items-center gap-2">
            <div className="relative shrink-0 w-[19px] h-[19px]">
              <Image src="/figma-assets/icon-train.svg" alt="" fill sizes="64px" className="object-contain" aria-hidden="true" />
            </div>
            <p className="font-['Bricolage_Grotesque',sans-serif] italic text-[#f5ebdd] text-base leading-6 tracking-[-0.48px] whitespace-nowrap">
              {t("label")}
            </p>
          </div>
          <h2 className="font-normal font-['Bricolage_Grotesque',sans-serif] text-[32px] sm:text-[40px] md:text-[48px] text-[#f5ebdd] leading-[1.2] tracking-[-1.5px] sm:tracking-[-2.5px] md:tracking-[-3.36px] max-w-[581px] w-full [text-wrap:balance] break-words">
            {t("heading")}
          </h2>
          <p className="font-['Manrope',sans-serif] text-[#f5ebdd] text-[16px] leading-[1.2] tracking-[-0.48px] max-w-[551px] w-full">
            {t("description")}
          </p>
        </div>

        {/* EarlyBird — full-width hero deal card at the top */}
        <div data-anim-item className="w-full bg-[#f5ebdd] border-2 border-[#4d1c64] rounded-[20px] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.10)] p-6 md:p-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 md:gap-12 items-center">
          <div className="flex flex-col gap-4">
            <span className="self-start inline-flex items-center px-3 py-1.5 rounded-full bg-[#4d1c64] font-['Manrope',sans-serif] text-white text-[12px] font-medium tracking-[0.5px] uppercase">
              {t("earlyBird.badge")}
            </span>
            <div className="flex items-center gap-3">
              <div className="relative shrink-0 w-8 h-8">
                <Image src="/figma-assets/PurpleCashIcon.svg" alt="" fill sizes="64px" className="object-contain" aria-hidden="true" />
              </div>
              <p className="font-['Bricolage_Grotesque',sans-serif] italic text-[#4d1c64] text-[28px] md:text-[36px] leading-tight tracking-[-1px]">
                {t("earlyBird.title")}
              </p>
            </div>
            <p className="font-['Manrope',sans-serif] text-[14px] text-[rgba(35,35,35,0.75)] leading-[1.5] tracking-[-0.3px] max-w-[520px]">
              {t.rich("earlyBird.note", {
                strong: (chunks) => <strong>{chunks}</strong>,
              })}
            </p>
          </div>
          <div className="flex flex-col gap-2 w-full md:min-w-[280px]">
            {rowLabels.map((label, i) => (
              <div key={label} className="flex items-center justify-between gap-8 py-3 border-b border-[rgba(0,0,0,0.15)] last:border-b-0">
                <p className="font-['Manrope',sans-serif] text-[#232323] text-[16px]">{label}</p>
                <p className="font-['Manrope',sans-serif] font-extrabold text-[#4d1c64] text-[28px] md:text-[32px] text-right">
                  {earlyBirdPrices[i]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Individual + Group — 2-col below */}
        <div data-anim-item className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Individual Tickets */}
          <div className="bg-[#f5ebdd] flex flex-col w-full min-h-[317px] p-6 relative rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="relative shrink-0 w-6 h-6">
                <Image src="/figma-assets/PurpleCashIcon.svg" alt="" fill sizes="64px" className="object-contain" aria-hidden="true" />
              </div>
              <p className="font-['Bricolage_Grotesque',sans-serif] italic text-[#4d1c64] text-[24px] leading-normal tracking-[-0.72px] whitespace-nowrap">
                {t("individual.title")}
              </p>
            </div>
            <div className="border-b border-[rgba(0,0,0,0.15)] mb-2" />
            <div className="flex flex-col mt-2">
              {rowLabels.map((label, i) => (
                <div key={label} className="flex items-center justify-between py-2 border-b border-[rgba(0,0,0,0.15)]">
                  <p className="font-['Manrope',sans-serif] text-[#232323] text-[16px]">{label}</p>
                  <p className="font-['Manrope',sans-serif] font-extrabold text-[#4d1c64] text-[18px] text-right">
                    {individualPrices[i]}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex items-start gap-2.5 mt-auto pt-4">
              <div className="relative shrink-0 w-6 h-6">
                <Image src="/figma-assets/icon-info.svg" alt="" fill sizes="64px" className="object-contain" aria-hidden="true" />
              </div>
              <p className="font-['Manrope',sans-serif] text-[11px] text-[rgba(35,35,35,0.7)] leading-[1.4] tracking-[-0.5px]">
                {t.rich("individual.note", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>
          </div>

          {/* Group Booking */}
          <div className="bg-[#4d1c64] border border-[rgba(247,247,240,0.15)] flex flex-col w-full min-h-[317px] p-6 relative rounded-[16px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="relative shrink-0 w-6 h-6">
                <Image src="/figma-assets/icon-group.svg" alt="" fill sizes="64px" className="object-contain" aria-hidden="true" />
              </div>
              <p className="font-['Bricolage_Grotesque',sans-serif] italic text-white text-[24px] leading-normal tracking-[-0.72px] whitespace-nowrap">
                {t("group.title")}
              </p>
            </div>
            <div className="border-b border-[rgba(255,255,255,0.15)] mb-2" />
            <div className="flex flex-col gap-4 mt-4">
              <p className="font-['Manrope',sans-serif] text-white text-[16px] leading-[1.4]">
                {t("group.text")}
              </p>
              <div className="flex flex-col gap-2">
                <a
                  href={`mailto:${brand.contact.email}`}
                  className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
                >
                  <div className="relative shrink-0 w-5 h-5">
                    <Image src="/figma-assets/icon-email.svg" alt="" fill sizes="64px" className="object-contain" aria-hidden="true" />
                  </div>
                  <span className="font-['Manrope',sans-serif] text-[15px] underline underline-offset-2">
                    {brand.contact.email}
                  </span>
                </a>
                <a
                  href={`tel:${brand.contact.phone}`}
                  className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity"
                >
                  <div className="relative shrink-0 w-5 h-5">
                    <Image src="/figma-assets/icon-phone.svg" alt="" fill sizes="64px" className="object-contain" aria-hidden="true" />
                  </div>
                  <span className="font-['Manrope',sans-serif] text-[15px]">{brand.contact.phoneDisplay}</span>
                </a>
              </div>
            </div>
            <div className="flex items-start gap-2.5 mt-auto pt-4">
              <div className="relative shrink-0 w-6 h-6">
                <Image src="/figma-assets/icon-info-white.svg" alt="" fill sizes="64px" className="object-contain" aria-hidden="true" />
              </div>
              <p className="font-['Manrope',sans-serif] text-[11px] text-[rgba(255,255,255,0.7)] leading-[1.4] tracking-[-0.5px]">
                {t.rich("group.note", {
                  strong: (chunks) => <strong>{chunks}</strong>,
                })}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
