export const locales = ["ro", "en"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

export const copy = {
  ro: {
    nav: { space: "Spațiul", cafe: "Café & Tea", culture: "Cultură", cinematic: "Cinematic", community: "Community", visit: "Vizitează" },
    heroEyebrow: "BOOKS · TEA · STORIES · CULTURE · QUIET COMPANY",
    heroTitle: "Un loc în care poți veni singur fără să te simți singur.",
    heroText: "Pocket Goat este o bibliotecă vie, tea room și refugiu cultural în Constanța — pentru cărți, ceai, conversații bune și liniște fără explicații.",
    heroCta: "Intră în Pocket Goat",
    manifesto: "Gentleness should be ordinary.",
    come: [
      ["Vino singur.", "Citește trei ore. Nu trebuie să justifici nimic."],
      ["Vino împreună.", "Împarte un ceai, o masă sau doar aceeași liniște."],
      ["Vino curios.", "Rămâi pentru o carte, un film, o poveste sau o întrebare bună."],
      ["Vino într-o zi grea.", "Nu trebuie să pretinzi că nu este una."]
    ],
    pocketsTitle: "Găsește-ți Pocket-ul.",
    pocketsText: "Opt nișe de citit, fiecare cu lumină proprie, charging și suficientă intimitate cât să dispară puțin restul lumii.",
    quietTitle: "Quiet Company / Open to Conversation",
    quietText: "A fi lângă oameni nu trebuie să însemne că trebuie să le oferi ceva. La masa centrală alegi câtă lume vrei în seara ta.",
    teaTitle: "Tea made to stay awhile.",
    teaText: "Ceaiuri, cafea și lucruri mici de mâncat, servite fără grabă și fără un meniu de chain café de șapte pagini.",
    hardTitle: "Ai avut o zi grea?",
    hardText: "Spune doar atât. Un ceai simplu din partea casei, într-o cană mare, fără explicații și fără spectacol.",
    cultureTitle: "Cultura locuiește aici.",
    cultureText: "Talks, cărți, istorie, seri de Dobrogea, mese de limbi străine, scris, profesii și conversații care merită timp.",
    cinemaTitle: "Films worth staying to talk about.",
    cinemaText: "Film, documentar, adaptări literare, istorie și discuția de după — toate în universul Pocket Goat Cinematic.",
    rootedTitle: "Înrădăcinat în Constanța.",
    rootedText: "Nu decor maritim. Ci hărți, memorie, port, arhive, literatură și Marea Neagră spre seară.",
    communityTitle: "You bring the idea. We provide the table.",
    communityText: "Unele seri pot începe de la o idee a comunității. Pocket Goat o curatoriază, îi găsește forma potrivită și păstrează locul fidel propriei lumi.",
    footer: "Come as you are. Stay until the world feels softer."
  },
  en: {
    nav: { space: "The Space", cafe: "Café & Tea", culture: "Culture", cinematic: "Cinematic", community: "Community", visit: "Visit" },
    heroEyebrow: "BOOKS · TEA · STORIES · CULTURE · QUIET COMPANY",
    heroTitle: "A place to come alone without feeling alone.",
    heroText: "Pocket Goat is a living library, tea room and cultural refuge in Constanța — for books, tea, good conversations and quiet that needs no explanation.",
    heroCta: "Enter Pocket Goat",
    manifesto: "Gentleness should be ordinary.",
    come: [
      ["Come alone.", "Read for three hours. No explanation required."],
      ["Come together.", "Share tea, a table, or simply the same quiet."],
      ["Come curious.", "Stay for a book, a film, a story or a good question."],
      ["Come on a hard day.", "You do not have to perform being fine."]
    ],
    pocketsTitle: "Find your Pocket.",
    pocketsText: "Eight reading alcoves, each with its own light, charging and enough privacy for the rest of the world to recede a little.",
    quietTitle: "Quiet Company / Open to Conversation",
    quietText: "Being around people does not mean having to perform for them. At the central table, you choose how much world you want in your evening.",
    teaTitle: "Tea made to stay awhile.",
    teaText: "Tea, coffee and small things to eat, served without hurry and without a seven-page chain-café menu.",
    hardTitle: "Had a hard day?",
    hardText: "That is enough to say. A simple tea on the house, in a generous mug, with no explanation and no spectacle.",
    cultureTitle: "Culture lives here.",
    cultureText: "Talks, books, history, Dobrogea evenings, language tables, writing, professions and conversations worth giving time to.",
    cinemaTitle: "Films worth staying to talk about.",
    cinemaText: "Film, documentary, literary adaptations, history and the conversation afterwards — inside Pocket Goat Cinematic.",
    rootedTitle: "Rooted in Constanța.",
    rootedText: "Not nautical décor. Maps, memory, the port, archives, literature and the Black Sea toward evening.",
    communityTitle: "You bring the idea. We provide the table.",
    communityText: "Some evenings can begin with a community idea. Pocket Goat curates it, gives it the right form and keeps the place true to its own world.",
    footer: "Come as you are. Stay until the world feels softer."
  }
} as const;
