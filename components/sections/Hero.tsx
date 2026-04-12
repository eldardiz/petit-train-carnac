import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-[#f7f7f0] overflow-hidden">
      {/* Main hero section: left text + right image */}
      <div className="flex flex-col lg:flex-row lg:items-stretch min-h-[721px] relative">
        {/* Left panel */}
        <div className="flex-1 flex items-center justify-end py-24 bg-[#f7f7f0] relative z-10">
          <div className="w-full max-w-[640px] px-[5%]">
            <div className="pr-8 flex flex-col gap-10">
              {/* Heading block */}
              <div className="flex flex-col gap-6">
                {/* Section label */}
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
                    Le Petit Trains de Morbihan · Carnac
                  </p>
                </div>

                {/* Main heading */}
                <h1 className="font-['Libre_Baskerville',serif] text-[60px] leading-[1.1] tracking-[-4.2px] text-[#181d27] not-italic w-full">
                  Discover{" "}
                  <em className="italic text-[#5a4a6e] not-[font-style:normal]">
                    Carnac
                  </em>{" "}
                  aboard the Petit Train
                </h1>

                {/* Description */}
                <p className="font-['Roboto',sans-serif] text-[#535862] text-base leading-[1.2] tracking-[-0.48px]">
                  The Petit Train de Carnac offers a guided sightseeing tour
                  through the town and its surroundings. Discover the
                  world&apos;s most beautiful Neolithic site on this{" "}
                  <strong className="font-bold">50-minute guided tour.</strong>{" "}
                  It is an easy and comfortable way to discover Carnac, its
                  heritage, and its iconic landscapes, without the need for long
                  walks.
                </p>

                {/* Tagline */}
                <p className="font-['Roboto',sans-serif] font-semibold text-[#535862] text-base leading-[1.2] tracking-[-0.48px]">
                  Perfect for families, couples, seniors, and visitors of all
                  ages.
                </p>
              </div>

              {/* CTA buttons */}
              <div className="flex items-center gap-3">
                <Link
                  href="/book"
                  className="btn-primary bg-[#5a4a6e] h-[45px] px-[22px] rounded-[4px] text-white text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap inline-flex items-center gap-2 shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] ring-1 ring-inset ring-[rgba(10,13,18,0.18)]"
                >
                  <div className="relative shrink-0 size-5">
                    <Image
                      src="/figma-assets/icon-ticket.svg"
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
                  className="btn-secondary bg-[#f7f7f0] border border-[rgba(0,0,0,0.2)] h-[45px] px-[22px] rounded-[4px] text-[#414651] text-base font-medium font-['Roboto',sans-serif] tracking-[-0.64px] whitespace-nowrap inline-flex items-center"
                >
                  See Pricing
                </Link>
              </div>

              {/* Divider */}
              <hr className="border-t border-[rgba(0,0,0,0.12)] w-[554px] max-w-full" />

              {/* Google rating block */}
              <div className="flex flex-col gap-4">
                <div className="bg-white flex items-center gap-[10px] px-2 py-1 rounded-lg w-fit">
                  <div className="relative size-6 shrink-0">
                    <Image
                      src="/figma-assets/google-icon.svg"
                      alt="Google"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-[2px]">
                    <div className="flex items-center gap-1">
                      <span className="font-['Nunito',sans-serif] font-bold text-[14px] leading-normal text-black tracking-[-0.42px]">
                        4,7
                      </span>
                      <div className="relative h-3 w-[76px] shrink-0">
                        <Image
                          src="/figma-assets/stars.svg"
                          alt="4.7 out of 5 stars"
                          fill
                          className="object-contain object-left"
                        />
                      </div>
                    </div>
                    <p className="font-['Nunito',sans-serif] font-normal text-[11px] leading-normal text-black tracking-[-0.33px] opacity-60">
                      6,000+ reviews
                    </p>
                  </div>
                </div>

                <p className="font-['Roboto',sans-serif] text-[#535862] text-base leading-[1.2] tracking-[-0.48px] max-w-[499px]">
                  <strong className="font-bold">
                    The Petit Train de Carnac
                  </strong>{" "}
                  has a rating over 4.7 on Google, with over 6,000 reviews,
                  making it one of the most popular touristic in Carnac
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right panel: image + diagonal split overlay */}
        <div className="flex-1 relative min-h-[480px] lg:min-h-0 overflow-hidden">
          {/* Diagonal left edge overlay to create the angled split */}
          <div
            className="absolute inset-y-0 left-0 w-24 bg-[#f7f7f0] z-10 origin-top-left [clip-path:polygon(0_0,100%_0,0_100%)]"
            aria-hidden="true"
          />

          {/* Hero image */}
          <div className="absolute inset-0">
            <Image
              src="/figma-assets/hero-image.jpg"
              alt="Le Petit Train de Carnac on a scenic route"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Info card overlay */}
          <div className="absolute bottom-[514px] lg:bottom-[30px] left-1/2 -translate-x-1/2 lg:left-[189px] lg:translate-x-0 bg-[rgba(90,74,110,0.65)] border border-[rgba(255,255,255,0.2)] rounded-xl p-6 w-[499px] max-w-[calc(100%-32px)] flex flex-col gap-4 z-20">
            <div className="flex items-start justify-between gap-4">
              <p className="font-['Roboto',sans-serif] font-semibold text-[20px] leading-[1.1] text-white tracking-[-0.8px] w-[312px]">
                Guided sightseeing tour with audio commentary in 16 languages
              </p>
              <div className="relative h-[43px] w-[83px] shrink-0 overflow-hidden rounded">
                <Image
                  src="/figma-assets/languages-flags.png"
                  alt="Language flags"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="font-['Roboto',sans-serif] font-normal text-[14px] leading-[1.4] text-white tracking-[-0.56px] w-[312px]">
              French, English, German, Spanish, Italian, Portuguese, Dutch,
              Russian, Chinese, Japanese, Swedish, Danish, Polish, Arabic,
              Croatian, and Slovenian.
            </p>
          </div>
        </div>
      </div>

      {/* HeroBanner: Online Booking section */}
      <div className="bg-[#f7f7f0] border-t border-[rgba(0,0,0,0.15)] pt-[34px] pb-16">
        <div className="max-w-[1280px] mx-auto px-[5%] flex flex-col gap-10">
          {/* Section label */}
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
            <p className="font-['Libre_Baskerville',serif] italic text-[#5a4a6e] text-base leading-6 tracking-[-0.48px]">
              Important Note
            </p>
          </div>

          {/* Content row */}
          <div className="flex flex-col lg:flex-row lg:items-start gap-8">
            {/* Heading */}
            <div className="lg:w-[559px] shrink-0">
              <h2 className="font-['Libre_Baskerville',serif] text-[48px] leading-[1.1] tracking-[-3.36px] text-[#181d27] not-italic">
                Online Booking
              </h2>
            </div>
            {/* Supporting text */}
            <div className="flex-1">
              <p className="font-['Inter',sans-serif] font-normal text-[20px] leading-[30px] text-[#535862]">
                Booking is possible but not mandatory. You can book up to{" "}
                <strong className="font-bold">2 hours</strong> before the
                desired service. Don&apos;t forget to consider travel time and
                parking at the site. After this deadline, go directly to the
                departure point and purchase your tickets at the ticket office
                or from the driver.
                <br />
                Not all seats are available for online sale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
