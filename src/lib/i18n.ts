export const locales = ["ro", "en"] as const;
export type Locale = (typeof locales)[number];
export const isLocale = (value: string): value is Locale => locales.includes(value as Locale);

export const copy = {
  ro: {
    nav: { space: "Spațiul", books: "Cărți", cafe: "Ceai & cafea", culture: "Cultură", cinematic: "Cinematic", community: "Comunitate", visit: "Vizitează" },
    heroEyebrow: "CĂRȚI · CEAI · POVEȘTI · LINIȘTE · OAMENI",
    heroTitle: "Un loc în care poți să stai în pace.",
    heroText: "Vii cu o carte, cu cineva drag sau pur și simplu cu tine. Bei ceva bun, stai cât vrei și, dacă ai chef, mai prinzi și o seară de film, istorie sau povești.",
    heroCta: "Vezi cum e înăuntru",
    manifesto: "Gentleness should be ordinary.",
    welcomeTitle: "Nu trebuie să vii cu un plan.",
    welcomeText: "Poți să intri pentru un ceai și să rămâi cu o carte. Poți să vii singur, fără să fii tratat ca și cum aștepți pe cineva. Poți să stai de vorbă sau să nu vorbești cu nimeni. Pocket Goat e făcut pentru toate variantele astea.",
    come: [
      ["Doar tu și o carte.", "Îți găsești un colț, îți aprinzi lampa și restul poate să mai aștepte."],
      ["Cu cineva drag.", "O masă mică, ceva bun de băut și timp fără grabă."],
      ["Printre oameni.", "Poți să fii în aceeași încăpere cu alții fără să simți că trebuie să socializezi."],
      ["Într-o zi proastă.", "Nu trebuie să pari mai bine decât te simți. Poți doar să stai."]
    ],
    pocketsTitle: "Când vrei să te retragi puțin.",
    pocketsText: "Cele opt Pockets sunt niște nișe de citit în care chiar poți să te așezi bine: lumină bună, loc pentru carte și ceai, priză la îndemână și suficientă intimitate cât să uiți puțin de restul încăperii.",
    quietTitle: "Când vrei oameni în jur, dar nu neapărat conversație.",
    quietText: "La masa mare alegi singur cum vrei să fie seara. Quiet Company înseamnă că poți sta liniștit printre oameni. Open to Conversation e doar un semn discret că, dacă se leagă o discuție, e binevenită.",
    teaTitle: "Ceai bun, cafea bună și nimeni nu te grăbește.",
    teaText: "Meniul rămâne mic și ales cu grijă: ceaiuri, cafea și câteva lucruri bune de mâncat lângă o carte. Fără zeci de pagini și fără presiunea de a comanda din nou ca să mai poți sta.",
    hardTitle: "Ai avut o zi proastă?",
    hardText: "Spui doar atât. Primești un ceai simplu din partea casei, într-o cană mare. Nu trebuie să povestești ce s-a întâmplat și nu transformăm gestul într-un spectacol.",
    cultureTitle: "Uneori, liniștea se transformă în conversație.",
    cultureText: "În alte seri, Pocket Goat se umple de cărți discutate împreună, povești despre Dobrogea, autori, istorici, limbi străine, profesii, scris și tot felul de întrebări bune.",
    cinemaTitle: "Unele seri se văd pe ecran.",
    cinemaText: "Pocket Goat Cinematic adună filme, documentare și adaptări literare care merită văzute împreună — iar după generic, dacă avem ce spune, mai stăm puțin.",
    rootedTitle: "Suntem în Constanța. Se simte.",
    rootedText: "Dobrogea intră firesc în Pocket Goat prin povești, hărți, arhive, literatură, clădiri, oameni și Marea Neagră. Nu ca temă decorativă, ci ca locul din care pornim.",
    kindnessText: "La noi, grija ar trebui să se vadă în lucrurile mici: în felul în care ești primit, în faptul că liniștea ta e respectată și în gesturile care nu cer nimic în schimb.",
    communityTitle: "Ai o idee bună? S-ar putea să-i găsim o masă.",
    communityText: "Din când în când, lăsăm și comunitatea să propună o seară, un club sau o discuție. Dacă ideea se potrivește cu locul, o construim împreună. Pocket Goat rămâne curatoriat, dar nu vrem să vorbească doar cu vocea noastră.",
    footer: "Vino cum ești. Rămâi cât vrei."
  },
  en: {
    nav: { space: "The Space", books: "Books", cafe: "Tea & Coffee", culture: "Culture", cinematic: "Cinematic", community: "Community", visit: "Visit" },
    heroEyebrow: "BOOKS · TEA · STORIES · QUIET · PEOPLE",
    heroTitle: "A place to settle in.",
    heroText: "Come with a book, with someone you love, or simply by yourself. Have something good, stay as long as you like, and maybe catch an evening of film, history or stories while you’re here.",
    heroCta: "See what it feels like",
    manifesto: "Gentleness should be ordinary.",
    welcomeTitle: "You do not need a plan.",
    welcomeText: "Come in for tea and end up staying with a book. Come alone without being treated as though you must be waiting for someone. Talk if you feel like it, or do not talk to anyone at all. Pocket Goat is built for all of those versions of an evening.",
    come: [
      ["Just you and a book.", "Find a corner, switch on your lamp and let everything else wait for a while."],
      ["With someone you love.", "A small table, something good to drink and nowhere you need to rush off to."],
      ["Around other people.", "Share a room without having to turn it into a social performance."],
      ["On a bad day.", "You do not have to look better than you feel. You can simply be here."]
    ],
    pocketsTitle: "For when you want to tuck yourself away.",
    pocketsText: "The eight Pockets are proper reading alcoves: good light, room for a book and a cup, charging within reach and enough privacy for the rest of the room to fade a little.",
    quietTitle: "For when you want people nearby, but not necessarily conversation.",
    quietText: "At the long table, you choose the mood. Quiet Company means you can sit among people and keep to yourself. Open to Conversation is simply a discreet sign that a chat would be welcome if one happens naturally.",
    teaTitle: "Good tea, good coffee, and no one rushing you.",
    teaText: "The menu stays small and considered: tea, coffee and a few things that belong beside a book. No endless menu, and no pressure to keep ordering just because you want to stay.",
    hardTitle: "Had a bad day?",
    hardText: "That is enough to say. You get a simple tea on the house in a generous mug. You do not have to tell the story, and we do not turn the gesture into a performance.",
    cultureTitle: "Sometimes the quiet turns into conversation.",
    cultureText: "On other evenings, Pocket Goat fills with shared books, Dobrogea stories, authors, historians, languages, professions, writing and all kinds of good questions.",
    cinemaTitle: "Some evenings happen on a screen.",
    cinemaText: "Pocket Goat Cinematic brings together films, documentaries and literary adaptations worth watching in company — and if there is something to say after the credits, we stay a little longer.",
    rootedTitle: "We are in Constanța. You should be able to feel it.",
    rootedText: "Dobrogea enters Pocket Goat through stories, maps, archives, literature, buildings, people and the Black Sea. Not as themed décor, but as the place we begin from.",
    kindnessText: "Care should show up in small things: how you are welcomed, whether your quiet is respected, and gestures that ask for nothing in return.",
    communityTitle: "Have a good idea? We might find it a table.",
    communityText: "Every so often, the community can propose an evening, a club or a conversation. If it belongs here, we shape it together. Pocket Goat stays curated, but we do not want it to speak only in our own voice.",
    footer: "Come as you are. Stay as long as you like."
  }
} as const;
