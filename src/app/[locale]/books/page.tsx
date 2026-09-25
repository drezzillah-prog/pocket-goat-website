import Image from "next/image";
import Link from "next/link";
import { BooksBrowse } from "@/components/BooksBrowse";
import { SectionLink } from "@/components/SectionLink";
import { resolveLocale } from "@/lib/locale";

export default async function BooksPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const ro = locale === "ro";

  const recommendationModes = ro ? [
    ["Ce citim acum","Cărțile pe care le avem chiar acum pe noptieră, în geantă sau pe masa din spate."],
    ["Cărți la care ne întoarcem","Nu trebuie să fie noutăți. Doar cărți pe care încă avem chef să le punem în mâna cuiva."],
    ["Dacă ți-a plăcut…","Spune-ne ce carte ai iubit și încercăm să-ți găsim următoarea."],
    ["Pentru o anumită stare","Ceva scurt, ceva liniștit, ceva întunecat sau ceva care să-ți ocupe mintea complet."],
    ["Descoperiri mici","Titluri care nu trebuie să fie peste tot ca să merite găsite."],
    ["De aici","Constanța, Dobrogea, Marea Neagră și oamenii care au trecut pe aici."]
  ] : [
    ["What we're reading","Books currently open on our nightstands, in our bags or on the back table."],
    ["Books we return to","They do not have to be new. Just books we still want to place in someone else's hands."],
    ["If you loved…","Tell us a book you loved and we'll try to find the next one."],
    ["For a certain mood","Something short, something quiet, something dark, or something that takes over your whole attention."],
    ["Small discoveries","Books that do not need to be everywhere to be worth finding."],
    ["From here","Constanța, Dobrogea, the Black Sea and the people who have passed through here."]
  ];

  return (
    <main className="books-page">
      <section className="books-hero">
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
          <h1>{ro ? "Cărți în care merită să mai stai puțin." : "Books worth lingering over."}</h1>
          <p className="lede">
            {ro
              ? "Poți intra pentru un ceai, să ajungi lângă rafturi și să vezi ce se întâmplă de acolo. Biblioteca nu e decor. E una dintre părțile pentru care există Pocket Goat."
              : "Come in for tea, wander over to the shelves, and see what follows. The library isn't scenery here; it's part of what Pocket Goat is for."}
          </p>
          <a href="#browse-library" className="primary-cta">{ro ? "Răsfoiește biblioteca" : "Browse the library"}<span>↓</span></a>
        </div>
      </section>

      <section className="books-intro books-forest-panel">
        <div>
          <p className="kicker">{ro ? "O BIBLIOTECĂ ÎN CARE SĂ TE PIERZI" : "A LIBRARY TO GET LOST IN"}</p>
          <h2>
            {ro
              ? "Răsfoiește. Răzgândește-te. Ia ceva la care nu te-ai fi gândit."
              : "Browse slowly. Change your mind. Pick up something unexpected."}
          </h2>
        </div>
        <div className="books-intro-copy">
          <p>
            {ro
              ? "Sunt cărți pe care le recunoști, cărți pe care le recomandăm obsesiv, noutăți și descoperiri mai tăcute. Poți scoate una din raft pentru că ți-a plăcut coperta, s-o pui la loc după trei pagini și să alegi alta. Exact pentru asta sunt rafturile."
              : "There are books you'll recognise, books we keep recommending, new releases and quieter discoveries. Pull one down because the cover caught your eye. Put it back after three pages. Ask us for something stranger. That's what the shelves are for."}
          </p>
          <p>
            {ro
              ? "Nu încercăm să înghesuim toate cărțile lumii într-o singură încăpere. Vrem o bibliotecă suficient de variată încât să te surprindă și suficient de personală încât să se simtă ca Pocket Goat."
              : "We're not trying to fit every book in the world into one room. We're building a library with enough range to surprise you and enough character to feel like Pocket Goat."}
          </p>
        </div>
      </section>

      <section id="browse-library" className="books-browse-section">
        <div className="books-section-heading">
          <p className="kicker">{ro ? "RĂSFOIEȘTE BIBLIOTECA" : "BROWSE THE LIBRARY"}</p>
          <h2>{ro ? "Nu trebuie să știi dinainte ce cauți." : "Every kind of reader gets a way in."}</h2>
          <p>
            {ro
              ? "Am grupat biblioteca ca să fie ușor de explorat, nu ca s-o închidem în sertare. Genurile se ating, selecțiile se schimbă, iar unele cărți vor sta foarte bine în mai multe locuri."
              : "The categories are there to help you wander, not to box the books in. Genres overlap, selections change, and some books will happily belong in more than one place."}
          </p>
        </div>
        <BooksBrowse locale={locale} />
      </section>

      <section className="books-recommendations">
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
          <h2>{ro ? "Cărți pe care chiar ți le-am pune în mână." : "Books we'd actually hand you."}</h2>
          <p>
            {ro
              ? "Nu vrem un perete de bestseller-uri lăsat pe pilot automat. Aici intră cărți pe care le citim, la care ne întoarcem, despre care ne contrazicem sau pe care pur și simplu abia așteptăm să le dăm mai departe."
              : "No automatic best-seller wall. These are books we're reading, returning to, arguing about, or simply itching to put in someone else's hands."}
          </p>
          <div className="recommendation-list">
            {recommendationModes.map(([title, text]) => (
              <article key={title}><h3>{title}</h3><p>{text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="book-finds-you">
        <p className="kicker">{ro ? "FĂRĂ PLAN" : "NO PLAN REQUIRED"}</p>
        <blockquote>
          {ro
            ? "Unele cărți le cauți. Altele sunt pur și simplu cele spre care întinzi mâna."
            : "Some books are searched for. Others are simply the one you reach for."}
        </blockquote>
        <p>
          {ro
            ? "Nu trebuie să știi ce vrei înainte să ajungi. Răsfoiește. Răzgândește-te. Citește trei pagini dintr-o carte și o oră din alta."
            : "You don't need to know what you want before you arrive. Browse. Change your mind. Read three pages of one thing and an hour of another."}
        </p>
      </section>

      <section className="books-dobrogea">
        <div className="books-dobrogea-copy">
          <p className="kicker">DOBROGEA · CONSTANȚA · BLACK SEA</p>
          <h2>{ro ? "Un raft care începe chiar de aici." : "A shelf rooted here."}</h2>
          <p>
            {ro
              ? "Adunăm cărți despre Dobrogea, Constanța, Marea Neagră, port, comunități, arhitectură, patrimoniu și memorie. Nu ca un colț turistic, ci ca o parte firească din biblioteca unui loc care trăiește aici."
              : "We collect books about Dobrogea, Constanța, the Black Sea, the port, communities, architecture, heritage and memory. Not as a tourist corner, but as a living part of a library rooted in Constanța."}
          </p>
          <div className="dobrogea-topics">
            {(ro
              ? ["Istorie locală","Memorii & document","Arhitectură & patrimoniu","Marea Neagră","Literatură legată de loc"]
              : ["Local history","Memoir & document","Architecture & heritage","Black Sea","Place-based literature"]
            ).map(t => <span key={t}>{t}</span>)}
          </div>
          <SectionLink href={`/${locale}/dobrogea`}>
            {ro ? "Mai mult despre Dobrogea la Pocket Goat" : "Explore Dobrogea at Pocket Goat"}
          </SectionLink>
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

      <section className="read-here">
        <div>
          <p className="kicker">{ro ? "CITEȘTE AICI" : "READ HERE"}</p>
          <h2>{ro ? "Ia o carte. Găsește-ți locul. Mai stai." : "Take a book. Find a place. Stay awhile."}</h2>
          <p>
            {ro
              ? "Ia cartea din raft, găsește-ți un Pocket, o masă mică sau un loc la masa ovală și stai cu ea. Biblioteca și spațiul au fost gândite împreună tocmai pentru asta."
              : "Take a book from the shelf, find a Pocket, a small table or a seat at the oval table, and stay with it. The library and the room were designed together for exactly that."}
          </p>
          <div className="read-here-links">
            <SectionLink href={`/${locale}/space#pockets`}>{ro ? "Vezi The Pockets" : "See The Pockets"}</SectionLink>
            <SectionLink href={`/${locale}/space`}>{ro ? "Vezi tot spațiul" : "Explore the space"}</SectionLink>
          </div>
        </div>
        <figure className="books-read-photo">
          <Image
            src="/images/pocket-goat/penultimate/pocket-detail.webp"
            alt={ro ? "Un Pocket de lectură integrat în biblioteca Pocket Goat" : "A Pocket reading nook built into the Pocket Goat library"}
            width={1000}
            height={750}
            unoptimized
          />
        </figure>
      </section>

      <section className="books-culture">
        <p className="kicker">{ro ? "DIN RAFT, LA MASĂ" : "FROM SHELF TO TABLE"}</p>
        <h2>{ro ? "Unele cărți sunt mai bune după ce le discuți." : "Some books are better discussed at a table."}</h2>
        <p>
          {ro
            ? "Book Clubs, Author's Table, Quiet Reading Evenings și întâlnirile cu scriitori pornesc tot de aici. Uneori citim separat. Alteori chiar avem chef să vorbim despre ce-am citit."
            : "Book Clubs, Author's Table, Quiet Reading Evenings and author visits all begin here. Sometimes we read separately. Sometimes the best part is talking about it afterwards."}
        </p>
        <Link className="primary-cta" href={`/${locale}/culture`}>
          {ro ? "Vezi programul cultural" : "See the cultural programme"}<span>→</span>
        </Link>
      </section>

      <section className="page-closing books-closing">
        <p>{ro ? "Vii pentru o carte. Pleci cu încă cinci pe listă." : "Come for one book. Leave with five more on your list."}</p>
        <SectionLink href={`/${locale}/contact`}>{ro ? "Găsește-ne" : "Come find us"}</SectionLink>
      </section>
    </main>
  );
}
