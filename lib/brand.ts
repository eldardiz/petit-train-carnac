// Single source of truth for all city-specific values.
// When cloning this project for a new Petit Train site, only edit this file.
export const brand = {
  city: "Carnac",
  regiondoWidgetId: "5712cb43-2e72-445b-956b-947f1f624735",
  contact: {
    email: "petittrain-lebayon@orange.fr",
    phone: "+33297240629",
    phoneDisplay: "02 97 24 06 29",
  },
  social: {
    facebook: "https://www.facebook.com/lespetitstrainsdumorbihan",
  },
  prices: {
    individual: { adult: "8,50€", child: "5€" },
    earlyBird: { adult: "7,00€", child: "3,50€" },
  },
} as const
