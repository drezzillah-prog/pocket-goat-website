import Image from "next/image";
import Link from "next/link";
import { SectionLink } from "@/components/SectionLink";
import { resolveLocale } from "@/lib/locale";

const genresRo = [
  "Literatură contemporană","Clasici","Poezie","Fantasy","Science-fiction","Mystery & crime",
  "Istorie","Biografii & memorii","Eseu & non-fiction","Filosofie","Artă","Film & cultură",
  "Travel & place writing","Young adult","Copii","Dobrogea & Constanța"
];
const genresEn = [
  "Contemporary fiction","Classics","Poetry","Fantasy","Science fiction","Mystery & crime",
  "History","Biography & memoir","Essays & non-fiction","Philosophy","Art","Film & culture",
  "Travel & place writing","Young adult","Children","Dobrogea & Constanța"
];

export default async function BooksPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const ro = locale === "ro";
  const genres = ro ? genresRo : genresEn;

  const shelves = ro ? [
    ["Fiction","Romane contemporane, clasici și povești în care intri pentru zece pagini și rămâi până uiți de oră."],
    ["Poezie","Pentru serile în care vrei câteva pagini bune, nu neapărat trei sute."],
    ["Fantasy & speculative","Lumi noi, mituri, magie și ficțiune care împinge puțin marginile realității."],
    ["Mystery & crime","Pentru cititorii care spun „încă un capitol” și nu se țin niciodată de cuvânt."],
    ["Science-fiction","Viitoruri posibile, idei mari și întrebări care rămân după ce închizi cartea."],
    ["Istorie","Istorie mare, istorie locală, istorii trăite și felurile în care trecutul continuă să vorbească."],
    ["Eseu & non-fiction","Pentru curiozități, obsesii bune și subiecte în care merită să intri mai adânc."],
    ["Artă · film · cultură","Cărți care îți arată altfel lucrurile pe care credeai că le cunoști."],
    ["Young adult & copii","Cărți bune, alese serios. Fără ideea că cititorii mici merită mai puțină grijă."],
    ["Dobrogea & Constanța","Raftul nostru de acasă: mare, port, comunități, arhitectură, memorie și oraș."]
  ] : [
    ["Fiction","Contemporary novels, classics and stories you open for ten pages and stay with until you lose track of time."],
    ["Poetry","For evenings when a handful of good pages is exactly enough."],
    ["Fantasy & speculative","New worlds, myths, magic and fiction that nudges at the edges of reality."],
    ["Mystery & crime","For readers who say ‘one more chapter’ and never mean it."],
    ["Science fiction","Possible futures, big ideas and questions that stay after the book is closed."],
    ["History","Large histories, local histories, lived histories, and the ways the past keeps speaking."],
    ["Essays & non-fiction","For curiosities, worthwhile obsessions and subjects worth going deeper into."],
    ["Art · film · culture","Books that change how familiar things look."],
    ["Young adult & children","Good books chosen seriously, without treating younger readers as an afterthought."],
    ["Dobrogea & Constanța","Our home shelf: sea, port, communities, architecture, memory and city."]
  ];

  const recommendationModes = ro ? [
    ["Ce citim acum","Titluri pe care le avem efectiv deschise pe noptiere, în geantă sau pe masa din spate."],
    ["Cărți la care ne întoarcem","Nu neapărat noutăți. Doar cărți pe care încă avem chef să le recomandăm."],
    ["Dacă ți-a plăcut…","Spune-ne o carte pe care ai iubit-o și încercăm să-ți găsim următoarea."],
    ["Pentru o anumită stare","Ceva scurt, ceva liniștit, ceva întunecat, ceva care să-ți ocupe mintea complet."],
    ["Descoperiri mici","Titluri care nu au nevoie să fie peste tot ca să merite găsite."],
    ["De aici","Cărți despre Constanța, Dobrogea, Marea Neagră și oamenii care au trecut pe aici."]
  ] : [
    ["What we are reading","Books currently open on our nightstands, in our bags or on the back table."],
    ["Books we return to","Not necessarily new. Just books we still want to put into someone else’s hands."],
    ["If you loved…","Tell us a book you loved and we will try to find your next one."],
    ["For a certain mood","Something short, something quiet, something dark, something that takes over your whole attention."],
    ["Small discoveries","Books that do not need to be everywhere to be worth finding."],
    ["From here","Books about Constanța, Dobrogea, the Black Sea and the people who have passed through here."]
  ];

  return (
    <>
      <section className="books-hero section-dark">
        <Image
          className="books-hero-image"
          src="/images/pocket-goat/books/books-hero.webp"
          alt={ro ? "Biblioteca Pocket Goat, cu rafturi înalte, plante și lumină caldă" : "Pocket Goat library with tall shelves, plants and warm light"}
          width={1000}
          height={750}
          priority
          unoptimized
        />
        <div className="books-hero-shade" />
        <div className="books-hero-copy">
          <p className="eyebrow">POCKET GOAT BOOKS</p>
          <h1>{ro ? "Cărți pentru stat. Și pentru întors încă o pagină." : "Books for staying. And turning one more page."}</h1>
          <p className="lede">
            {ro
              ? "Poți intra pentru un ceai și să ajungi, fără să-ți propui, cu o carte în mână. Biblioteca nu e decorul cafenelei. E una dintre cauzele pentru care locul există."
              : "You can come in for tea and find yourself, without planning to, with a book in your hands. The library is not café décor. It is one of the reasons the place exists."}
          </p>
          <a href="#rafturi" className="primary-cta">{ro ? "Vezi rafturile" : "See the shelves"}<span>↓</span></a>
        </div>
      </section>

      <section className="books-intro section-paper">
        <div>
          <p className="kicker">{ro ? "CUM E GÂNDITĂ BIBLIOTECA" : "HOW THE LIBRARY WORKS"}</p>
          <h2>{ro ? "Nu vrem doar rafturi frumoase." : "We do not just want beautiful shelves."}</h2>
        </div>
        <div className="books-intro-copy">
          <p>
            {ro
              ? "Vrem o bibliotecă în care să ai chef să cauți. Să scoți o carte de pe raft pentru că ți-a atras atenția, să întrebi ce mai avem pe același subiect sau să ne spui ce ți-a plăcut și să vedem unde ajungem de acolo."
              : "We want a library that makes you want to browse. Pull something down because it caught your eye, ask what else we have on the subject, or tell us what you loved and see where we go from there."}
          </p>
          <p>
            {ro
              ? "Vor fi titluri cunoscute, cărți pe care le iubim noi, apariții noi și lucruri puțin mai greu de întâlnit. Nu încercăm să pretindem că fiecare carte din lume încape aici. Încercăm să facem rafturile suficient de bune încât să merite răsfoite."
              : "There will be familiar titles, books we love, new releases and things a little harder to stumble across. We are not pretending every book in the world fits here. We are trying to make the shelves good enough to be worth browsing."}
          </p>
        </div>
      </section>

      <section className="genre-ribbon section-forest" aria-label={ro ? "Genurile din biblioteca Pocket Goat" : "Genres in the Pocket Goat library"}>
        <div className="book-rail">
          <div className="book-rail-track">
            {[...genres, ...genres].map((genre, i) => (
              <span key={`${genre}-${i}`} aria-hidden={i >= genres.length}>{genre}<i>·</i></span>
            ))}
          </div>
        </div>
      </section>

      <section id="rafturi" className="books-shelves section-paper">
        <div className="books-section-heading">
          <p className="kicker">{ro ? "RAFTURILE" : "THE SHELVES"}</p>
          <h2>{ro ? "Găsești câte puțin din aproape toate. Și mult din lucrurile care ne plac." : "A little of almost everything. More of the things we love."}</h2>
          <p>
            {ro
              ? "Genurile nu sunt tratate ca niște cutii închise. Rafturile se întâlnesc între ele, se schimbă, iar selecțiile tematice pot apărea și dispărea pe parcursul anului."
              : "Genres are not treated as sealed boxes. Shelves overlap, change, and thematic selections can appear and disappear throughout the year."}
          </p>
        </div>
        <div className="shelf-grid">
          {shelves.map(([title, text], i) => (
            <article className="shelf-card" key={title}>
              <span className="shelf-index">{String(i + 1).padStart(2, "0")}</span>
              <div className="shelf-spines" aria-hidden="true"><i/><i/><i/><i/><i/></div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="books-recommendations section-forest">
        <figure className="pg-photo books-rec-photo">
          <Image
            src="/images/pocket-goat/books/books-recommendations.webp"
            alt={ro ? "Un raft de recomandări Pocket Goat" : "A Pocket Goat recommendations shelf"}
            width={1000}
            height={750}
            unoptimized
          />
        </figure>
        <div className="books-rec-copy">
          <p className="kicker">RECOMMENDED BY POCKET GOAT</p>
          <h2>{ro ? "Ce ți-am pune noi direct în mână." : "What we would put straight into your hands."}</h2>
          <p>
            {ro
              ? "Nu vrem un raft de «best sellers» pus pe pilot automat. Recomandările se schimbă des și au un motiv să fie acolo: le citim, le-am iubit, ne-au surprins sau credem că se potrivesc foarte bine unui anumit fel de cititor."
              : "We do not want an autopilot best-seller shelf. Recommendations change often and have a reason to be there: we are reading them, loved them, were surprised by them, or think they fit a certain kind of reader beautifully."}
          </p>
          <div className="recommendation-list">
            {recommendationModes.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="book-finds-you section-ink">
        <p className="kicker">{ro ? "FĂRĂ PLAN" : "NO PLAN REQUIRED"}</p>
        <blockquote>
          {ro ? "Unele cărți le cauți. Pe altele le găsești pentru că ai întins mâna după ele." : "Some books you look for. Others you find because you happened to reach for them."}
        </blockquote>
        <p>
          {ro
            ? "E perfect în regulă să nu știi ce vrei să citești. Poți să răsfoiești, să abandonezi o carte după trei pagini, să iei alta și să rămâi cu ea o oră. Asta face parte din idee."
            : "It is perfectly fine not to know what you want to read. Browse, abandon a book after three pages, pick up another and stay with it for an hour. That is part of the idea."}
        </p>
      </section>

      <section className="books-dobrogea section-paper">
        <div className="books-dobrogea-copy">
          <p className="kicker">DOBROGEA · CONSTANȚA · BLACK SEA</p>
          <h2>{ro ? "Un raft care începe chiar de aici." : "A shelf that begins right here."}</h2>
          <p>
            {ro
              ? "Adunăm cărți despre Dobrogea, Constanța, Marea Neagră, port, comunități, arhitectură, patrimoniu și memorie. Nu ca un colț turistic, ci ca o parte vie din biblioteca unui loc care există în Constanța."
              : "We collect books about Dobrogea, Constanța, the Black Sea, the port, communities, architecture, heritage and memory. Not as a tourist corner, but as a living part of a library that exists in Constanța."}
          </p>
          <div className="dobrogea-topics">
            {(ro ? ["Istorie locală","Memorii & document","Arhitectură & patrimoniu","Marea Neagră","Literatură legată de loc"] : ["Local history","Memoir & document","Architecture & heritage","Black Sea","Place-based literature"]).map(t => <span key={t}>{t}</span>)}
          </div>
          <SectionLink href={`/${locale}/dobrogea`}>{ro ? "Mai mult despre Dobrogea la Pocket Goat" : "More about Dobrogea at Pocket Goat"}</SectionLink>
        </div>
        <figure className="pg-photo books-dobrogea-photo">
          <Image
            src="/images/pocket-goat/books/books-dobrogea.webp"
            alt={ro ? "Masă cu hărți și cărți despre Dobrogea și Constanța" : "Table with maps and books about Dobrogea and Constanța"}
            width={1000}
            height={750}
            unoptimized
          />
        </figure>
      </section>

      <section className="read-here section-forest">
        <div>
          <p className="kicker">{ro ? "CITEȘTE AICI" : "READ HERE"}</p>
          <h2>{ro ? "Cartea nu trebuie să plece nicăieri ca să fie citită." : "The book does not have to go anywhere to be read."}</h2>
          <p>
            {ro
              ? "Ia-o din raft, găsește-ți un Pocket, o masă mică sau un loc la masa ovală și stai cu ea. Biblioteca și spațiul au fost gândite împreună tocmai pentru asta."
              : "Take it from the shelf, find a Pocket, a small table or a seat at the oval table and stay with it. The library and the room were designed together for exactly that."}
          </p>
          <div className="read-here-links">
            <SectionLink href={`/${locale}/space#pockets`}>{ro ? "Vezi The Pockets" : "See The Pockets"}</SectionLink>
            <SectionLink href={`/${locale}/space`}>{ro ? "Vezi tot spațiul" : "See the whole space"}</SectionLink>
          </div>
        </div>
        <div className="reading-nook-mini" aria-hidden="true">
          <div className="mini-arch"><span/><div className="mini-seat"/></div>
          <div className="mini-books"><i/><i/><i/><i/><i/><i/></div>
        </div>
      </section>

      <section className="books-culture section-paper">
        <p className="kicker">{ro ? "DIN RAFT, LA MASĂ" : "FROM SHELF TO TABLE"}</p>
        <h2>{ro ? "Uneori, o carte devine motivul pentru care ne strângem." : "Sometimes a book becomes the reason we gather."}</h2>
        <p>
          {ro
            ? "Book Clubs, Author’s Table, Quiet Reading Evenings și întâlnirile cu scriitori pornesc tot de aici. Uneori citim separat. Alteori avem chef să vorbim despre ce am citit."
            : "Book Clubs, Author’s Table, Quiet Reading Evenings and author visits all begin here. Sometimes we read separately. Sometimes we want to talk about what we read."}
        </p>
        <Link className="primary-cta dark" href={`/${locale}/culture`}>{ro ? "Vezi programul cultural" : "See the cultural programme"}<span>→</span></Link>
      </section>

      <section className="page-closing section-ink">
        <p>{ro ? "Vii pentru o carte. E foarte posibil să rămâi pentru încă una." : "Come for one book. There is a fair chance you will stay for another."}</p>
        <SectionLink href={`/${locale}/contact`}>{ro ? "Găsește-ne" : "Come find us"}</SectionLink>
      </section>
    </>
  );
}
