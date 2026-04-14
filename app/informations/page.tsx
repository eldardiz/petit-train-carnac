import InformationsHero from "@/components/sections/InformationsHero";
import InformationsSchedule from "@/components/sections/InformationsSchedule";
import Prices from "@/components/sections/Prices";
import InformationsIntro from "@/components/sections/InformationsIntro";
import Reviews from "@/components/sections/Reviews";
import InformationsCTA from "@/components/sections/InformationsCTA";
import Locations from "@/components/sections/Locations";

export const metadata = {
  title: "Informations Pratiques — Petit Train de Carnac",
  description:
    "Toutes les informations pratiques pour votre visite du Petit Train de Carnac : horaires, tarifs, réservation, accessibilité et points de départ.",
};

export default function InformationsPage() {
  return (
    <main>
      <InformationsHero
        label="Informations"
        heading={
          <>
            Practical information for the{" "}
            <em className="italic text-[#5a4a6e] not-italic font-['Libre_Baskerville',serif] italic">
              Petit Train de Carnac
            </em>
          </>
        }
        description="Here you will find all the practical information you need before joining the Petit Train de Carnac. Learn about the departure point, tour duration, schedules, accessibility, and booking recommendations, so you can plan your visit to Carnac with confidence and enjoy a smooth sightseeing experience."
        imageSrc="/figma-assets/PracticalInformationHero.jpg"
        imageAlt="Le Petit Train de Carnac au bord de la mer"
      />
      <InformationsSchedule />
      <Prices />
      <InformationsIntro />
      <Reviews />
      <InformationsCTA />
      <Locations />
    </main>
  );
}
