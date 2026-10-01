export type EventCategory =
  | "dobrogea"
  | "history"
  | "myths"
  | "books"
  | "cinematic"
  | "languages"
  | "community";

export type EventLanguage = "ro" | "en" | "fr";

export type PocketGoatEvent = {
  slug: string;
  category: EventCategory;
  languages: EventLanguage[];
  title: { ro: string; en: string };
  eyebrow: { ro: string; en: string };
  summary: { ro: string; en: string };
  description: { ro: string; en: string };
  format: { ro: string; en: string };
  status: "preview";
};

export const eventCategories: Array<{
  id: "all" | EventCategory;
  ro: string;
  en: string;
}> = [
  { id: "all", ro: "Toate", en: "All" },
  { id: "dobrogea", ro: "Dobrogea", en: "Dobrogea" },
  { id: "history", ro: "Istorie", en: "History" },
  { id: "myths", ro: "Mituri & legende", en: "Myths & Legends" },
  { id: "books", ro: "Cărți", en: "Books" },
  { id: "cinematic", ro: "Cinematic", en: "Cinematic" },
  { id: "languages", ro: "Limbi", en: "Languages" },
  { id: "community", ro: "Comunitate", en: "Community" },
];

export const events: PocketGoatEvent[] = [
  {
    slug: "constanta-then-and-now",
    category: "dobrogea",
    languages: ["ro"],
    title: { ro: "Constanța Then & Now", en: "Constanța Then & Now" },
    eyebrow: { ro: "DOBROGEA · ORAȘ", en: "DOBROGEA · CITY" },
    summary: {
      ro: "Fotografii, hărți și fragmente de arhivă puse lângă orașul de astăzi.",
      en: "Photographs, maps and archival fragments placed beside the city as it is today.",
    },
    description: {
      ro: "O seară despre felul în care Constanța s-a schimbat și despre lucrurile care au rămas. Pornim de la imagini, hărți și documente și reconstruim împreună o bucată de oraș.",
      en: "An evening about how Constanța changed and what remained. We begin with images, maps and documents and reconstruct a piece of the city together.",
    },
    format: { ro: "Prezentare + conversație", en: "Presentation + conversation" },
    status: "preview",
  },
  {
    slug: "ask-a-historian",
    category: "dobrogea",
    languages: ["ro", "en"],
    title: { ro: "History Café: Ask a Historian", en: "History Café: Ask a Historian" },
    eyebrow: { ro: "DOBROGEA · ÎNTREBĂRI", en: "DOBROGEA · QUESTIONS" },
    summary: {
      ro: "O temă bine delimitată, un specialist și timp real pentru întrebări.",
      en: "One focused subject, one specialist, and actual time for questions.",
    },
    description: {
      ro: "Mai puțin «prelegere de două ore», mai mult context bun și întrebări serioase. Fiecare ediție pornește de la o temă clară din istoria Dobrogei sau a Constanței.",
      en: "Less two-hour lecture, more useful context and serious questions. Each edition starts from one clear subject in the history of Dobrogea or Constanța.",
    },
    format: { ro: "Invitat + Q&A", en: "Guest + Q&A" },
    status: "preview",
  },
  {
    slug: "black-sea-worlds",
    category: "dobrogea",
    languages: ["ro", "en"],
    title: { ro: "Black Sea Worlds", en: "Black Sea Worlds" },
    eyebrow: { ro: "MAREA NEAGRĂ", en: "BLACK SEA" },
    summary: {
      ro: "Porturi, drumuri, imperii, comerț, migrații și comunități legate de aceeași mare.",
      en: "Ports, routes, empires, trade, migration and communities connected by one sea.",
    },
    description: {
      ro: "O serie despre Marea Neagră ca spațiu istoric comun, nu ca fundal decorativ. Urmărim oameni, obiecte, idei și puteri care s-au mișcat de-a lungul coastelor.",
      en: "A series about the Black Sea as a shared historical space rather than decorative scenery, following people, objects, ideas and powers moving along its shores.",
    },
    format: { ro: "Serie tematică", en: "Thematic series" },
    status: "preview",
  },
  {
    slug: "lost-cities",
    category: "history",
    languages: ["ro", "en"],
    title: { ro: "Lost Cities", en: "Lost Cities" },
    eyebrow: { ro: "ISTORIE · ORAȘE", en: "HISTORY · CITIES" },
    summary: {
      ro: "Orașe dispărute, transformate sau abandonate și viețile care au existat în ele.",
      en: "Cities lost, transformed or abandoned, and the lives once lived inside them.",
    },
    description: {
      ro: "Nu doar ruine spectaculoase, ci economie, viață cotidiană, catastrofe, migrații și motivele pentru care unele orașe rămân iar altele dispar.",
      en: "Not just spectacular ruins, but economies, everyday life, disasters, migration and the reasons some cities endure while others disappear.",
    },
    format: { ro: "History Night", en: "History Night" },
    status: "preview",
  },
  {
    slug: "history-of-food",
    category: "history",
    languages: ["ro", "en", "fr"],
    title: { ro: "History of Food", en: "History of Food" },
    eyebrow: { ro: "ISTORIE · VIAȚĂ COTIDIANĂ", en: "HISTORY · EVERYDAY LIFE" },
    summary: {
      ro: "Ce mâncăm spune enorm despre comerț, clasă, război, migrație și tehnologie.",
      en: "What we eat reveals trade, class, war, migration and technology.",
    },
    description: {
      ro: "O serie care folosește hrana ca intrare în istorie: ingrediente, drumuri comerciale, tabuuri, lipsuri, lux și obiceiuri care par banale abia după ce devin familiare.",
      en: "A series that uses food as a way into history: ingredients, trade routes, taboos, scarcity, luxury and habits that only look ordinary once they become familiar.",
    },
    format: { ro: "Istorie tematică", en: "Thematic history" },
    status: "preview",
  },
  {
    slug: "myths-of-the-black-sea",
    category: "myths",
    languages: ["ro", "en"],
    title: { ro: "Myths of the Black Sea", en: "Myths of the Black Sea" },
    eyebrow: { ro: "MITURI · MAREA NEAGRĂ", en: "MYTHS · BLACK SEA" },
    summary: {
      ro: "Mituri și legende ale regiunii, cu diferența clară între sursă, folclor și interpretare.",
      en: "Regional myths and legends, keeping source, folklore and interpretation clearly distinct.",
    },
    description: {
      ro: "Poveștile sunt tratate ca povești care au circulat între oameni și epoci, nu ca «mistere inexplicabile». Urmărim ce știm, de unde vine legenda și cum s-a schimbat.",
      en: "Stories are treated as stories that travelled across people and periods, not as unexplained mysteries. We look at what is documented, where the legend comes from and how it changed.",
    },
    format: { ro: "Myths & Legends Night", en: "Myths & Legends Night" },
    status: "preview",
  },
  {
    slug: "balkan-legends",
    category: "myths",
    languages: ["ro", "en", "fr"],
    title: { ro: "Balkan Legends", en: "Balkan Legends" },
    eyebrow: { ro: "MITURI · BALCANI", en: "MYTHS · BALKANS" },
    summary: {
      ro: "Creaturi, sfinți, spirite, avertismente și povești care trec granițele mai ușor decât oamenii.",
      en: "Creatures, saints, spirits, warnings and stories that cross borders more easily than people do.",
    },
    description: {
      ro: "Comparăm variante, trasee și transformări ale acelorași motive în culturi diferite, fără să le uniformizăm și fără să le transformăm în decor fantasy.",
      en: "We compare variants, routes and transformations of recurring motifs across cultures without flattening them or turning them into fantasy décor.",
    },
    format: { ro: "Folclor comparat", en: "Comparative folklore" },
    status: "preview",
  },
  {
    slug: "authors-table",
    category: "books",
    languages: ["ro", "en"],
    title: { ro: "Author’s Table", en: "Author’s Table" },
    eyebrow: { ro: "CĂRȚI · AUTORI", en: "BOOKS · AUTHORS" },
    summary: {
      ro: "Mai aproape de o masă bună decât de un podium.",
      en: "Closer to a good table than to a stage.",
    },
    description: {
      ro: "Întâlniri cu autori construite ca dialog: despre carte, proces, idei și ce a rămas în afara paginii.",
      en: "Author evenings built as dialogue: about the book, the process, the ideas and what remained outside the page.",
    },
    format: { ro: "Conversație cu autor", en: "Author conversation" },
    status: "preview",
  },
  {
    slug: "quiet-reading-evening",
    category: "books",
    languages: ["ro", "en", "fr"],
    title: { ro: "Quiet Reading Evening", en: "Quiet Reading Evening" },
    eyebrow: { ro: "CĂRȚI · LINIȘTE", en: "BOOKS · QUIET" },
    summary: {
      ro: "Venim împreună ca să citim separat.",
      en: "We come together to read separately.",
    },
    description: {
      ro: "Fără rundă obligatorie de prezentări și fără discuție forțată. Alegi un loc, citești și te bucuri de faptul că și alții fac același lucru în jurul tău.",
      en: "No compulsory introductions and no forced discussion. Pick a place, read, and enjoy the fact that other people are doing the same around you.",
    },
    format: { ro: "Lectură comună, liniștită", en: "Shared quiet reading" },
    status: "preview",
  },
  {
    slug: "history-on-screen",
    category: "cinematic",
    languages: ["ro", "en"],
    title: { ro: "History on Screen", en: "History on Screen" },
    eyebrow: { ro: "CINEMATIC · ISTORIE", en: "CINEMATIC · HISTORY" },
    summary: {
      ro: "Film istoric sau documentar, context înainte și conversație după.",
      en: "Historical film or documentary, context before and conversation after.",
    },
    description: {
      ro: "O proiecție publică are loc doar când există drepturile necesare. Accentul rămâne pe relația dintre film, surse și felul în care trecutul este reconstruit pe ecran.",
      en: "A public screening takes place only when the necessary rights are in place. The focus stays on the relationship between film, sources and the way the past is reconstructed on screen.",
    },
    format: { ro: "Proiecție licențiată + discuție", en: "Licensed screening + discussion" },
    status: "preview",
  },
  {
    slug: "history-in-english",
    category: "languages",
    languages: ["en"],
    title: { ro: "History in English", en: "History in English" },
    eyebrow: { ro: "ISTORIE · ENGLISH", en: "HISTORY · ENGLISH" },
    summary: {
      ro: "O seară de istorie concepută direct în engleză, nu tradusă mecanic din română.",
      en: "A history evening designed in English from the beginning, not mechanically translated from Romanian.",
    },
    description: {
      ro: "Pentru localnici, expați, vizitatori și oricine preferă conversația culturală în engleză. Tema poate fi locală sau internațională.",
      en: "For locals, expats, visitors and anyone who prefers cultural conversation in English. The subject may be local or international.",
    },
    format: { ro: "Eveniment în engleză", en: "English-language event" },
    status: "preview",
  },
  {
    slug: "bring-the-idea",
    category: "community",
    languages: ["ro", "en", "fr"],
    title: { ro: "You Bring the Idea, We Provide the Table", en: "You Bring the Idea, We Provide the Table" },
    eyebrow: { ro: "COMUNITATE · PROPUNERI", en: "COMMUNITY · PROPOSALS" },
    summary: {
      ro: "O fereastră mică și curatoriată pentru idei culturale venite din comunitate.",
      en: "A small, curated window for cultural ideas proposed by the community.",
    },
    description: {
      ro: "Nu este închiriere de sală și nici calendar deschis. Dacă propunerea are sens pentru cărți, istorie, limbi, artă, cunoaștere sau viața orașului, o putem construi împreună.",
      en: "This is not room hire and not an open calendar. If a proposal genuinely belongs with books, history, languages, art, knowledge or city life, we may shape it together.",
    },
    format: { ro: "Format comunitar curatoriat", en: "Curated community format" },
    status: "preview",
  },
];

export function getEvent(slug: string) {
  return events.find((event) => event.slug === slug);
}
