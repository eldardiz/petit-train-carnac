import Image from "next/image";

const months = [
  {
    name: "Avril",
    hours: "De 10h00 à 18h00",
    note: (
      <>
        <span className="text-white">Parking du Ménec</span> — Départs toutes les 30 minutes
        <br />
        <span className="text-white">Carnac plage</span> — Toutes les heures de 10h00 à 12h00 & de 14h00 à 18h00
        <br />
        <span className="text-white">La Trinité-sur-Mer</span> — Arrêt de bus Courqué, côté mer — Toutes les heures de 10h15 à 11h15 & de 14h15 à 17h15
      </>
    ),
  },
  {
    name: "Mai",
    hours: "De 10h00 à 18h00",
    note: (
      <>
        <span className="text-white">Parking du Ménec</span> — Départs toutes les 30 minutes
        <br />
        <span className="text-white">Carnac plage</span> — Toutes les heures de 10h00 à 12h00 & de 14h00 à 18h00
        <br />
        <span className="text-white">La Trinité-sur-Mer</span> — Arrêt de bus Courqué, côté mer — Toutes les heures de 10h15 à 11h15 & de 14h15 à 17h15
      </>
    ),
  },
  {
    name: "Juin",
    hours: "De 10h00 à 18h00",
    note: (
      <>
        <span className="text-white">Parking du Ménec</span> — Départs toutes les 30 minutes
        <br />
        <span className="text-white">Carnac plage</span> — Toutes les heures de 10h00 à 12h00 & de 14h00 à 18h00
        <br />
        <span className="text-white">La Trinité-sur-Mer</span> — Arrêt de bus Courqué, côté mer — Toutes les heures de 10h15 à 11h15 & de 14h15 à 17h15
      </>
    ),
  },
  {
    name: "Juillet & Août",
    hours: "De 9h30 à 18h30",
    note: (
      <>
        <span className="text-white">Parking du Ménec</span> — Départs toutes les 30 minutes
        <br />
        <span className="text-white">Carnac plage</span> — Achetez vos billets sur place — Toutes les heures de 10h00 à 12h00 & de 14h00 à 18h00
        <br />
        <span className="text-white">La Trinité-sur-Mer</span> — Arrêt de bus Courqué, côté mer, juste avant le rond-point Alain Barrière — Toutes les heures de 10h15 à 11h15 & de 14h15 à 17h15
      </>
    ),
  },
];

const monthsBottom = [
  {
    name: "Septembre",
    hours: "De 10h00 à 18h00",
    note: (
      <>
        <span className="text-white">Parking du Ménec</span> — Départs toutes les 30 minutes
        <br />
        <span className="text-white">Carnac plage</span> — Toutes les heures de 10h00 à 12h00 & de 14h00 à 18h00
        <br />
        <span className="text-white">La Trinité-sur-Mer</span> — Arrêt de bus Courqué, côté mer — Toutes les heures de 10h15 à 11h15 & de 14h15 à 17h15
      </>
    ),
  },
  {
    name: "Octobre",
    hours: "De 10h00 à 18h00",
    note: (
      <>
        <span className="text-white">Parking du Ménec</span> — Départs toutes les 30 minutes
        <br />
        <span className="text-white">Carnac plage</span> — Toutes les heures de 10h00 à 12h00 & de 14h00 à 18h00
        <br />
        <span className="text-white">La Trinité-sur-Mer</span> — Arrêt de bus Courqué, côté mer — Toutes les heures de 10h15 à 11h15 & de 14h15 à 17h15
      </>
    ),
  },
  {
    name: "Novembre",
    hours: "De 10h00 à 18h00",
    note: (
      <>
        <span className="text-white">Parking du Ménec</span> — Départs toutes les 30 minutes
        <br />
        <span className="text-white">Carnac plage</span> — Toutes les heures de 10h00 à 12h00 & de 14h00 à 18h00
        <br />
        <span className="text-white">La Trinité-sur-Mer</span> — Arrêt de bus Courqué, côté mer — Toutes les heures de 10h15 à 11h15 & de 14h15 à 17h15
      </>
    ),
  },
  {
    name: "Décembre à Février",
    hours: null,
    note: "Le Petit Train de Carnac ne fonctionne pas pendant cette période.",
  },
];

export default function InformationsSchedule() {
  return (
    <section data-anim-section className="bg-[#f5ebdd] py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 xl:px-0 flex flex-col gap-8">

        {/* Info cards — Operating period + Weather */}
        <div data-anim-item className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Operating period card */}
          <div className="relative rounded-tl-[32px] rounded-bl-[32px] overflow-hidden min-h-[156px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <Image
                src="/figma-assets/practical-1.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(77,28,100,0.9)]" />
            </div>
            <div className="relative z-10 flex items-start gap-4 p-6">
              <div className="shrink-0 w-[65px] h-[65px] rounded-[10px] bg-[#4d1c64] border border-[rgba(233,234,235,0.15)] flex items-center justify-center shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
                <div className="relative w-[41px] h-[41px]">
                  <Image
                    src="/figma-assets/CalendarIconBig.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-normal font-['Bricolage_Grotesque',sans-serif] text-[28px] md:text-[32px] leading-[1.25] text-white tracking-[-2.24px]">
                  Période d&apos;exploitation
                </h3>
                <p className="font-['Manrope',sans-serif] text-[14px] leading-[1.3] tracking-[-0.42px] text-white max-w-[400px]">
                  Le Petit Train de Carnac fonctionne tous les jours d&apos;avril
                  à début novembre, y compris les dimanches et jours fériés.
                </p>
              </div>
            </div>
          </div>

          {/* Weather card */}
          <div className="relative rounded-tr-[32px] rounded-br-[32px] overflow-hidden min-h-[156px]">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <Image
                src="/figma-assets/practical-2.jpg"
                alt=""
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[rgba(77,28,100,0.9)]" />
            </div>
            <div className="relative z-10 flex items-start gap-4 p-6">
              <div className="shrink-0 w-[65px] h-[65px] rounded-[10px] bg-[#4d1c64] border border-[rgba(233,234,235,0.15)] flex items-center justify-center shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]">
                <div className="relative w-[40px] h-[40px]">
                  <Image
                    src="/figma-assets/WeatherIconBig.svg"
                    alt=""
                    fill
                    className="object-contain"
                    aria-hidden="true"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-normal font-['Bricolage_Grotesque',sans-serif] text-[28px] md:text-[32px] leading-[1.25] text-white tracking-[-2.24px]">
                  Météo
                </h3>
                <p className="font-['Manrope',sans-serif] text-[14px] leading-[1.3] tracking-[-0.42px] text-white max-w-[400px]">
                  En cas de pluie ou de grand vent, le train est vitré sur trois
                  côtés, vous permettant de profiter pleinement de votre visite.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timetable grid — purple gradient */}
        <div data-anim-item className="rounded-[32px] overflow-hidden" style={{ background: "linear-gradient(112deg, #4d1c64 23%, #7b3a94 85%)" }}>
          <div className="px-10 py-12 flex flex-col gap-10">
            {/* Timetables heading */}
            <div className="flex items-center gap-4 pb-8 border-b border-[rgba(255,255,255,0.2)]">
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.35)]" />
              <h2 className="font-normal font-['Bricolage_Grotesque',sans-serif] italic text-white text-[28px] tracking-[-1.5px] whitespace-nowrap">
                Horaires
              </h2>
              <div className="flex-1 h-px bg-[rgba(255,255,255,0.35)]" />
            </div>

            {/* Row 1 — Avril à Juillet/Août */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-[rgba(255,255,255,0.4)]">
              {months.map((month) => (
                <div key={month.name} className="flex flex-col gap-3">
                  <p className="font-['Bricolage_Grotesque',sans-serif] italic text-[28px] md:text-[32px] leading-[normal] text-white tracking-[-2.24px]">
                    {month.name}
                  </p>
                  {month.hours && (
                    <div className="flex items-center gap-2">
                      <div className="relative shrink-0 w-5 h-5">
                        <Image
                          src="/figma-assets/timetables-clock.svg"
                          alt=""
                          fill
                          className="object-contain"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="font-['Manrope',sans-serif] text-base text-white leading-[normal]">
                        {month.hours}
                      </p>
                    </div>
                  )}
                  <p className="font-['Manrope',sans-serif] text-[13px] leading-[1.4] text-[rgba(255,255,255,0.75)] tracking-[-0.42px]">
                    {month.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Row 2 — Septembre à Décembre */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {monthsBottom.map((month) => (
                <div key={month.name} className="flex flex-col gap-3">
                  <p className="font-['Bricolage_Grotesque',sans-serif] italic text-[28px] md:text-[32px] leading-[1.1] text-white tracking-[-2.24px]">
                    {month.name}
                  </p>
                  {month.hours && (
                    <div className="flex items-center gap-2">
                      <div className="relative shrink-0 w-5 h-5">
                        <Image
                          src="/figma-assets/timetables-clock.svg"
                          alt=""
                          fill
                          className="object-contain"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="font-['Manrope',sans-serif] text-base text-white leading-[normal]">
                        {month.hours}
                      </p>
                    </div>
                  )}
                  <p className="font-['Manrope',sans-serif] text-[13px] leading-[1.4] text-[rgba(255,255,255,0.75)] tracking-[-0.42px]">
                    {month.note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Holidays & Off-season — standalone cream box */}
        <div data-anim-item className="rounded-[32px] border border-[rgba(0,0,0,0.1)] bg-[#f5ebdd] px-10 py-12 flex flex-col items-center gap-6 text-center">
          {/* Heading */}
          <div className="flex items-center gap-4 w-full">
            <div className="flex-1 h-px bg-[rgba(0,0,0,0.12)]" />
            <h2 className="font-normal font-['Bricolage_Grotesque',sans-serif] italic text-[#4d1c64] text-[28px] tracking-[-1.5px] whitespace-nowrap">
              Jours fériés &amp; Hors-saison
            </h2>
            <div className="flex-1 h-px bg-[rgba(0,0,0,0.12)]" />
          </div>
          <p className="font-['Manrope',sans-serif] text-[#181d27] text-base leading-[normal] max-w-[476px]">
            Les horaires des jours fériés sont identiques aux horaires habituels.
            Le Petit Train fonctionne normalement tous les jours fériés d&apos;avril à début novembre.
          </p>
        </div>

      </div>
    </section>
  );
}
