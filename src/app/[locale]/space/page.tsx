import Image from "next/image";
import { QuietTable } from "@/components/QuietTable";
import { SectionLink } from "@/components/SectionLink";
import { resolveLocale } from "@/lib/locale";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const ro = locale === "ro";

  return (
    <>
      <section className="subhero section-dark">
        <p className="eyebrow">{ro ? "SPAȚIUL" : "THE SPACE"}</p>
        <h1>{ro ? "Aici alegi singur cât de aproape vrei să fii de lume." : "Here, you choose how close you want to be to the world."}</h1>
        <p className="lede">
          {ro
            ? "Poți să te retragi cu o carte, să stai la masa mare printre oameni sau să vii cu prietenii la una dintre mesele mici. Nu există un singur fel în care trebuie folosit locul."
            : "You can tuck yourself away with a book, sit at the large table among people, or come with friends to one of the smaller tables. There is no single way the room is meant to be used."}
        </p>
      </section>

      <section className="space-master section-paper">
        <figure className="pg-photo pg-photo-wide">
          <Image
            src="/images/pocket-goat/penultimate/master.webp"
            alt={ro ? "Imagine largă a interiorului Pocket Goat" : "Wide view of the Pocket Goat interior"}
            width={280}
            height={210}
            sizes="100vw"
            priority
            unoptimized
          />
          <figcaption>
            {ro
              ? "Biblioteca, Pocket-urile, mesele mici și zona comună fac parte din aceeași încăpere, dar fiecare are puțin spațiu să respire."
              : "The library, Pockets, smaller tables and communal area share one room, while each still has room to breathe."}
          </figcaption>
        </figure>
      </section>

      <section id="pockets" className="space-feature section-forest">
        <div className="section-heading">
          <p className="kicker">THE POCKETS</p>
          <h2>{ro ? "Opt nișe în bibliotecă. Nu opt cabine." : "Eight niches in the library. Not eight booths."}</h2>
          <p>
            {ro
              ? "Pocket-urile sunt construite direct în peretele cu cărți. Au laterale drepte, arcadă doar sus, banchetă din catifea, lumină de citit, o suprafață mică pentru cană și carte și charging discret. Sunt suficient de adânci încât să te simți retras, dar rămâi tot în bibliotecă."
              : "The Pockets are built directly into the book wall. They have straight sides, an arch only at the top, velvet seating, a reading light, a small surface for a cup and book, and discreet charging. They are deep enough to feel private while still being part of the library."}
          </p>
        </div>

        <div className="pg-photo-grid">
          <figure className="pg-photo pg-photo-pockets">
            <Image
              src="/images/pocket-goat/penultimate/pockets-wall.webp"
              alt={ro ? "Peretele cu cele opt Pockets integrate între rafturi" : "Wall of eight Pockets integrated between bookshelves"}
              width={280}
              height={210}
              sizes="(max-width: 900px) 100vw, 60vw"
              unoptimized
            />
            <figcaption>
              {ro ? "Privite împreună, trebuie să pară parte din aceeași bibliotecă, nu opt decoruri diferite." : "Seen together, they belong to one library rather than eight separate sets."}
            </figcaption>
          </figure>

          <figure className="pg-photo pg-photo-detail">
            <Image
              src="/images/pocket-goat/penultimate/pocket-detail.webp"
              alt={ro ? "Un Pocket văzut de aproape, cu banchetă, lampă și rafturi" : "A Pocket seen close up, with bench, lamp and bookshelves"}
              width={280}
              height={210}
              sizes="(max-width: 900px) 100vw, 40vw"
              unoptimized
            />
            <figcaption>
              {ro ? "Înăuntru: loc de stat bine, nu doar de făcut o fotografie." : "Inside: somewhere genuinely comfortable to stay, not just somewhere to take a photo."}
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="space-feature root-table-feature section-paper">
        <div className="section-heading">
          <p className="kicker">{ro ? "MASA OVALĂ" : "THE OVAL TABLE"}</p>
          <h2>{ro ? "Pentru când vrei să stai printre oameni." : "For when you want to be around people."}</h2>
          <p>
            {ro
              ? "Masa mare stă puțin mai încolo, într-o zonă proprie. Este ovală, din lemn masiv, cu detalii de rădăcini lucrate fin în lemn. La fiecare loc poți arăta discret dacă ai chef de conversație sau dacă preferi doar compania liniștită a celorlalți."
              : "The large table sits a little farther away in its own part of the room. It is oval, solid wood, with fine root-inspired detailing worked into the timber. At each seat, you can quietly signal whether conversation is welcome or whether you simply want the quiet company of others."}
          </p>
        </div>

        <div className="root-table-layout">
          <figure className="pg-photo">
            <Image
              src="/images/pocket-goat/penultimate/root-table.webp"
              alt={ro ? "Masa ovală Pocket Goat din lemn masiv" : "Pocket Goat solid-wood oval table"}
              width={280}
              height={210}
              sizes="(max-width: 1050px) 100vw, 62vw"
              unoptimized
            />
            <figcaption>
              {ro ? "Masa nu blochează Pocket-urile; este o zonă separată a aceleiași încăperi." : "The table does not block the Pockets; it is a separate zone within the same room."}
            </figcaption>
          </figure>
          <QuietTable locale={locale} />
        </div>
      </section>

      <section className="page-closing section-ink">
        <p>{ro ? "Singur, împreună sau undeva între cele două." : "Alone, together, or somewhere in between."}</p>
        <SectionLink href={`/${locale}/contact`}>{ro ? "Vizitează Pocket Goat" : "Visit Pocket Goat"}</SectionLink>
      </section>
    </>
  );
}
