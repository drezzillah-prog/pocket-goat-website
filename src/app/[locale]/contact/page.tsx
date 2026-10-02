import Link from "next/link";
import { resolveLocale } from "@/lib/locale";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const ro = locale === "ro";

  return (
    <main className="visit-page">
      <section className="visit-hero">
        <div className="visit-hero-copy">
          <p className="eyebrow">{ro ? "VIZITEAZĂ · CONSTANȚA" : "VISIT · CONSTANȚA"}</p>
          <h1>{ro ? "Vizita începe înainte de ușă." : "Your visit starts before the door."}</h1>
          <p className="lede">
            {ro
              ? "Publicăm doar lucruri confirmate. Adresa exactă, programul de funcționare și data deschiderii vor apărea aici imediat ce există în realitate — nu înainte."
              : "We only publish what is confirmed. The exact address, opening hours and opening date will appear here as soon as they exist in reality — not before."}
          </p>
          <div className="visit-status">
            <span>{ro ? "STATUT" : "STATUS"}</span>
            <strong>{ro ? "PRE-OPENING · SPAȚIU ÎN CURS DE CONFIRMARE" : "PRE-OPENING · SPACE TO BE CONFIRMED"}</strong>
          </div>
        </div>
      </section>

      <section className="visit-practical">
        <div className="visit-section-heading">
          <p className="kicker">{ro ? "ÎNAINTE SĂ VII" : "BEFORE YOU COME"}</p>
          <h2>{ro ? "Detaliile practice, fără ceață de marketing." : "Practical details, without marketing fog."}</h2>
        </div>

        <div className="visit-practical-grid">
          <article>
            <span>01</span>
            <p className="kicker">{ro ? "UNDE" : "WHERE"}</p>
            <h3>Constanța, România</h3>
            <p>{ro ? "Adresa exactă apare după confirmarea spațiului." : "The exact address appears once the space is confirmed."}</p>
          </article>
          <article>
            <span>02</span>
            <p className="kicker">{ro ? "CÂND" : "WHEN"}</p>
            <h3>{ro ? "Program de anunțat" : "Hours to be announced"}</h3>
            <p>{ro ? "Nu publicăm ore provizorii pe care apoi să le schimbăm." : "We do not publish provisional hours only to change them later."}</p>
          </article>
          <article>
            <span>03</span>
            <p className="kicker">{ro ? "ACCES" : "ACCESS"}</p>
            <h3>{ro ? "Date reale înainte de deschidere" : "Real facts before opening"}</h3>
            <p>{ro ? "Intrare, praguri, traseu, toaletă, seating și orice limitare reală vor fi documentate clar." : "Entrance, thresholds, route, toilet, seating and any real limitation will be documented clearly."}</p>
            <Link href={`/${locale}/accessibility`}>{ro ? "Accesibilitate" : "Accessibility"} <span>↗</span></Link>
          </article>
          <article>
            <span>04</span>
            <p className="kicker">{ro ? "EVENIMENTE" : "EVENTS"}</p>
            <h3>{ro ? "Doar date confirmate" : "Confirmed dates only"}</h3>
            <p>{ro ? "Dacă un eveniment cere rezervare, limba sau capacitatea contează, cardul lui va spune clar asta." : "If an event needs booking, has a language requirement or limited capacity, its card will say so clearly."}</p>
            <Link href={`/${locale}/events`}>{ro ? "Vezi programul" : "See what’s on"} <span>↗</span></Link>
          </article>
        </div>
      </section>

      <section className="visit-expect">
        <div className="visit-expect-copy">
          <p className="kicker">{ro ? "CUM E SĂ VII AICI" : "WHAT IT FEELS LIKE TO VISIT"}</p>
          <h2>{ro ? "Poți veni singur fără să fii tratat ca și cum aștepți pe cineva." : "You can come alone without being treated as though you are waiting for someone."}</h2>
          <p>
            {ro
              ? "Poți lua o carte, comanda un ceai, alege un Pocket, o masă mică sau masa comună. Poți vorbi. Poți să nu vorbești. Locul nu cere o performanță socială ca să-l folosești corect."
              : "Take a book, order tea, choose a Pocket, a small table or the communal table. You can talk. You can choose not to. The room does not require a social performance to be used correctly."}
          </p>
          <Link className="visit-text-link" href={`/${locale}/space`}>
            {ro ? "Vezi spațiul" : "Explore the space"} <span>↗</span>
          </Link>
        </div>

        <div className="visit-expect-list">
          <div><span>01</span><strong>{ro ? "Cărți care chiar pot fi luate de pe raft" : "Books you are actually meant to take off the shelf"}</strong></div>
          <div><span>02</span><strong>{ro ? "Ceai, cafea și lucruri mici de mâncat" : "Tea, coffee and small things to eat"}</strong></div>
          <div><span>03</span><strong>{ro ? "Liniște respectată, nu impusă teatral" : "Quiet that is respected, not theatrically enforced"}</strong></div>
          <div><span>04</span><strong>{ro ? "Companie fără obligația conversației" : "Company without an obligation to converse"}</strong></div>
        </div>
      </section>

      <section className="visit-contact">
        <div>
          <p className="kicker">{ro ? "CONTACT" : "CONTACT"}</p>
          <h2>{ro ? "Canalele oficiale vin înainte de lansare." : "Official channels arrive before launch."}</h2>
          <p>
            {ro
              ? "Nu afișăm un e-mail, telefon sau formular fictiv doar ca pagina să pară terminată. Când canalele Pocket Goat sunt active, aici vor sta contactul general, colaborările și informațiile pentru presă."
              : "We will not display a fictional email, phone number or form just to make the page look finished. Once Pocket Goat channels are active, this is where general contact, collaborations and press information will live."}
          </p>
        </div>
        <aside>
          <p className="kicker">{ro ? "AI O IDEE CULTURALĂ?" : "HAVE A CULTURAL IDEA?"}</p>
          <h3>{ro ? "You bring the idea. We provide the table." : "You bring the idea. We provide the table."}</h3>
          <p>{ro ? "Propunerile comunității au un loc al lor — mic, curatoriat și separat de contactul general." : "Community proposals have their own place — small, curated and separate from general contact."}</p>
          <Link href={`/${locale}/community`}>{ro ? "Cum funcționează" : "How it works"} <span>↗</span></Link>
        </aside>
      </section>

      <section className="visit-newsletter">
        <p className="kicker">LETTERS FROM POCKET GOAT</p>
        <h2>{ro ? "Un newsletter trimis doar când avem ceva care merită deschis." : "A newsletter sent only when there is something worth opening."}</h2>
        <p>
          {ro
            ? "Evenimente, cărți, seri noi și vești despre deschidere. Formularul devine activ după alegerea furnizorului și a fluxului de consimțământ."
            : "Events, books, new evenings and opening news. The form becomes active once the provider and consent flow are selected."}
        </p>
      </section>
    </main>
  );
}
