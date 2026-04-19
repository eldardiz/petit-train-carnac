import Image from "next/image";

const reviews = [
  {
    id: "walter",
    name: "Walter H.",
    text: "Les menhirs sont bien plus impressionnants qu'on ne le pense, et le cadre est magnifique. Le commentaire audio est bien construit et instructif. Plus d'une heure vraiment bien passée.",
  },
  {
    id: "dom",
    name: "Dom L.",
    text: "C'était une expérience existentielle et hors du commun. Tout était assez banal jusqu'à ce que nous atteignions les mégalithes, où j'ai été envahi par un sentiment d'émerveillement et de bien-être. À un moment, j'ai été baigné d'une lumière blanche et j'ai senti mon âme quitter mon corps. Je me suis retrouvé entouré de milliers d'êtres me posant des questions dans des langues inconnues. Puis je me suis réveillé à l'arrière du train, sur le chemin du retour. Tout ça pour 8 euros, je ne m'y attendais pas. Ça vaut vraiment le coup.",
  },
  {
    id: "carine",
    name: "Carine V.",
    text: "Nous avons effectué une merveilleuse visite avec le Petit Train des Menhirs. À notre grande surprise, le guide audio était également disponible en néerlandais, avec une voix flamande — ce qui rendait l'écoute bien plus agréable !",
  },
  {
    id: "marc",
    name: "Marc G.",
    text: "Une excellente façon de voir les mégalithes, avec en prime un commentaire audio en anglais vraiment apprécié, pour que tout prenne sens... très bon rapport qualité-prix et vraiment incontournable.",
  },
  {
    id: "judit",
    name: "Judit Benard M.",
    text: "Des personnes vraiment chaleureuses à la tête de ce petit train. Nous nous étions séparés et ils ont tout fait pour aider mon mari à nous rejoindre. La visite est intéressante, le train est confortable et les options linguistiques sont nombreuses.",
  },
  {
    id: "bked",
    name: "B Ked.",
    text: "Je pense que c'était un très beau voyage autour de Carnac. Je le recommande vraiment aux personnes qui viennent à Carnac et qui souhaitent en apprendre davantage sur la ville !",
  },
  {
    id: "sophie",
    name: "Sophie M.",
    text: "Une belle expérience en famille. Le train est confortable et le conducteur était très sympathique. Une façon parfaite de découvrir les célèbres menhirs de Carnac sans avoir à marcher !",
  },
  {
    id: "david",
    name: "David R.",
    text: "Nous avons fait la visite par un beau après-midi de juillet — absolument incontournable. Le commentaire multilingue est excellent et le parcours vous emmène à tous les sites clés. Fortement recommandé pour les premiers visiteurs de Carnac.",
  },
  {
    id: "anneclaire",
    name: "Anne-Claire B.",
    text: "Charmant petit train ! Nos enfants ont adoré chaque instant et ont tellement appris sur les pierres levées. Le guide audio est clair et captivant. Nous reviendrons certainement l'été prochain.",
  },
];

const galleryImages = [
  {
    src: "/figma-assets/testimonial-img-3.jpg",
    alt: "Vue pittoresque depuis le Petit Train de Carnac",
  },
  {
    src: "/figma-assets/testimonial-img-2.jpg",
    alt: "Paysage des menhirs de Carnac",
  },
  {
    src: "/figma-assets/testimonial-img-1.jpg",
    alt: "Visiteur à bord du Petit Train de Carnac",
  },
  {
    src: "/figma-assets/testimonial-img-2.jpg",
    alt: "Famille profitant de la visite de Carnac",
  },
  {
    src: "/figma-assets/testimonial-img-3.jpg",
    alt: "Vue pittoresque depuis le Petit Train de Carnac",
  },
  {
    src: "/figma-assets/stop-1.jpg",
    alt: "Arrêt du Petit Train aux menhirs de Carnac",
  },
  {
    src: "/figma-assets/stop-2.jpg",
    alt: "Arrêt du Petit Train à la plage",
  },
  {
    src: "/figma-assets/stop-3.jpg",
    alt: "Arrêt du Petit Train au port de La Trinité",
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
    <div className="bg-[#fffcf9] rounded-[6px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.15)] p-5 flex flex-col justify-between gap-6">
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
      <div className="rounded-[6px] overflow-hidden h-[265px] w-full relative">
        <Image
          src={galleryImages[item.index].src}
          alt={galleryImages[item.index].alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 420px"
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

const col1: TrackItem[] = [
  { kind: "review", index: 0 },
  { kind: "gallery", index: 0 },
  { kind: "review", index: 3 },
  { kind: "gallery", index: 2 },
  { kind: "review", index: 6 },
];

const col2: TrackItem[] = [
  { kind: "review", index: 1 },
  { kind: "gallery", index: 3 },
  { kind: "review", index: 2 },
  { kind: "review", index: 4 },
  { kind: "gallery", index: 5 },
  { kind: "review", index: 7 },
];

const col3: TrackItem[] = [
  { kind: "review", index: 5 },
  { kind: "gallery", index: 1 },
  { kind: "review", index: 8 },
  { kind: "gallery", index: 4 },
  { kind: "gallery", index: 6 },
  { kind: "gallery", index: 7 },
];

export default function Reviews() {
  return (
    <section data-anim-section className="bg-[#58496c] flex flex-col gap-20 items-center py-16 xl:py-28 overflow-hidden">
      {/* Header */}
      <div className="max-w-[1280px] mx-auto px-5 xl:px-0 w-full flex justify-center">
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
              Avis
            </p>
          </div>

          <h2 className="font-['Libre_Baskerville',serif] text-[#f7f7f0] text-[32px] sm:text-[40px] md:text-[48px] text-center leading-[1.1] tracking-[-1.5px] sm:tracking-[-2.5px] md:tracking-[-3.36px] max-w-[410px] w-full [text-wrap:balance] break-words">
            Ce que disent les visiteurs <em>du train&nbsp;?</em>
          </h2>

          <p className="font-['Roboto',sans-serif] text-[#f7f7f0] text-[16px] text-center leading-[1.2] tracking-[-0.48px] max-w-[570px] w-full">
            <strong>Le Petit Train de Carnac</strong> est noté plus de{" "}
            <a href="https://www.google.com/maps/search/Petit+Train+de+Carnac" target="_blank" rel="noopener noreferrer" className="text-[#d8b800] underline">4,7 sur Google</a>,
            avec plus de 6 000 avis, ce qui en fait l&apos;une des attractions
            touristiques les plus populaires de Carnac.
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
                6 000+ avis
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
