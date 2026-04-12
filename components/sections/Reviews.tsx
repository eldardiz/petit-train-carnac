import Image from "next/image";

const reviews = [
  {
    id: "walter",
    name: "Walter H.",
    text: "The Menhirs are much more impressive than anticipated and the area is lovely. The audio is well put together and informative. More than an hour well spent.",
  },
  {
    id: "dom",
    name: "Dom L.",
    text: "It was existential and out of body. All was pretty so so until we reached the megaliths at which I was overtaken by a spirit of wonder and wellness. At some point I was bathed in a bright white light and I felt my spirit leave my body. I became aware of 1000's of beings surrounding me, asking questions in tongues I'd never heard of. Then I woke up in the back of the train on its way back to the car park. Didn't expect all that for 8 euros. Well worth it I'd say.",
  },
  {
    id: "carine",
    name: "Carine V.",
    text: "We took a wonderful tour with the Petit Train des Menhirs. To our surprise, the audio guide was also available in Dutch, spoken by a Flemish voice — which made listening so much more pleasant!",
  },
  {
    id: "marc",
    name: "Marc G.",
    text: "A great way to see the megaliths, and also the added wonderfulness of having some English audio commentary, so that it all makes sense…. very good value and totally worthwhile.",
  },
  {
    id: "judit",
    name: "Judit Benard M.",
    text: "Very nice people operating the little train, we got separated and they wanted and helped my husband join us. The tour is interesting, the train is comfortable and there are plenty of language options.",
  },
  {
    id: "bked",
    name: "B Ked.",
    text: "I think this was a beautiful trip around Carnac. I definitely recommend this to people who are coming to Carnac and want to learn about it!",
  },
];

const galleryImages = [
  {
    src: "https://picsum.photos/seed/review-gallery-1/427/265",
    alt: "Petit Train de Carnac on the route",
  },
  {
    src: "https://picsum.photos/seed/review-gallery-2/427/265",
    alt: "Carnac menhirs landscape",
  },
];

function StarRating() {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="#F5A623"
          aria-hidden="true"
        >
          <path d="M7 0l1.796 5.528H14l-4.702 3.416 1.796 5.528L7 11.056l-4.095 3.416 1.796-5.528L0 5.528h5.204z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="card-hover bg-[#fffcf9] rounded-[6px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)] p-5 flex flex-col justify-between gap-6">
      <p className="font-['Roboto',sans-serif] text-[#021538] text-[16px] leading-[1.3] tracking-[-0.5px]">
        {text}
      </p>
      <div className="flex items-center justify-between">
        <p className="font-['Inter',sans-serif] font-bold text-[#021538] text-[16px] leading-[1.4] tracking-[-0.5px]">
          {name}
        </p>
        <StarRating />
      </div>
    </div>
  );
}

type TrackItem =
  | { kind: "review"; index: number }
  | { kind: "gallery"; index: number };

function TrackCard({ item }: { item: TrackItem }) {
  if (item.kind === "gallery") {
    return (
      <div className="rounded-[6px] overflow-hidden h-[265px] relative flex-shrink-0">
        <Image
          src={galleryImages[item.index].src}
          alt={galleryImages[item.index].alt}
          fill
          className="object-cover"
          unoptimized
        />
      </div>
    );
  }
  const r = reviews[item.index];
  return <ReviewCard name={r.name} text={r.text} />;
}

interface ColumnProps {
  items: TrackItem[];
  direction: "down" | "up";
  duration: string;
  className?: string;
}

function Column({ items, direction, duration, className = "" }: ColumnProps) {
  return (
    <div className={`overflow-hidden h-[560px] ${className}`}>
      <div
        className={`flex flex-col gap-3 ${
          direction === "down" ? "reviews-track-down" : "reviews-track-up"
        }`}
        style={{ animationDuration: duration }}
      >
        {items.map((item, i) => (
          <TrackCard key={`a-${i}`} item={item} />
        ))}
        {items.map((item, i) => (
          <TrackCard key={`b-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

// Col 1: Walter + gallery-1 + Marc  (~609px per half, direction down)
const col1: TrackItem[] = [
  { kind: "review", index: 0 },
  { kind: "gallery", index: 0 },
  { kind: "review", index: 3 },
];

// Col 2: Dom (tall) + Carine + Judit  (~724px per half, direction up)
const col2: TrackItem[] = [
  { kind: "review", index: 1 },
  { kind: "review", index: 2 },
  { kind: "review", index: 4 },
];

// Col 3: BKed + gallery-2 + Marc  (~631px per half, direction down)
const col3: TrackItem[] = [
  { kind: "review", index: 5 },
  { kind: "gallery", index: 1 },
  { kind: "review", index: 3 },
];

export default function Reviews() {
  return (
    <section className="bg-[#58496c] flex flex-col gap-20 items-center py-28 overflow-hidden">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-[5%] w-full flex justify-center">
        <div className="flex flex-col gap-6 items-center text-center max-w-[623px]">
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
              Reviews
            </p>
          </div>

          <h2 className="font-['Libre_Baskerville',serif] text-[#f7f7f0] text-[48px] text-center leading-[1.1] tracking-[-3.36px] w-[410px]">
            What visitors say about <em>the train?</em>
          </h2>

          <p className="font-['Roboto',sans-serif] text-[#f7f7f0] text-[16px] text-center leading-[1.2] tracking-[-0.48px] w-[570px]">
            <strong>The Petit Train de Carnac</strong> has a rating over{" "}
            <span className="text-[#d8b800] underline">4.7 on Google</span>,
            with over 6,000 reviews, making it one of the most popular touristic
            attractions in Carnac.
          </p>

          {/* Google badge */}
          <div className="bg-white rounded-[8px] flex items-center gap-2.5 px-2 py-1 rotate-[0.54deg]">
            <div className="relative shrink-0 w-6 h-6">
              <Image
                src="/figma-assets/google-icon.svg"
                alt="Google"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col gap-0.5">
              <div className="flex items-center gap-1">
                <span className="font-['Nunito',sans-serif] font-bold text-[14px] text-black tracking-[-0.42px]">
                  4,7
                </span>
                <StarRating />
              </div>
              <p className="font-['Nunito',sans-serif] text-[11px] text-black opacity-60 tracking-[-0.33px]">
                6,000+ reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Infinite scroll columns */}
      <div
        className="reviews-container w-full max-w-[1320px] px-[5%]"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          <Column items={col1} direction="down" duration="28s" />
          <Column
            items={col2}
            direction="up"
            duration="22s"
            className="hidden md:block"
          />
          <Column
            items={col3}
            direction="down"
            duration="32s"
            className="hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
