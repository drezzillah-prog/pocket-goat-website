import Link from "next/link";
import { CultureProgramme } from "@/components/CultureProgramme";
import { resolveLocale } from "@/lib/locale";

export default async function CulturePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const ro = locale === "ro";

  return (
    <main className="culture-page">
      <section className="culture-hero">
        <div className="culture-hero-orbit" aria-hidden="true">
          <span>DOBROGEA</span><span>HISTORY</span><span>MYTHS</span><span>BOOKS</span><span>FILM</span><span>LANGUAGES</span>
        </div>
        <div className="culture-hero-copy">
          <p className="eyebrow">POCKET GOAT CULTURE</p>
          <h1>{ro ? "Rădăcini aici. Curiozitate peste tot." : "Rooted here. Curious everywhere."}</h1>
          <p className="lede">
            {ro
              ? "Dobrogea este axa culturală a Pocket Goat. De aici pornim spre istorie, mituri, legende, cărți, film și conversații din alte locuri și alte timpuri — uneori în română, alteori în engleză sau franceză."
              : "Dobrogea is Pocket Goat’s cultural anchor. From here we travel into history, myths, legends, books, film and conversations from other places and times — sometimes in Romanian, sometimes in English or French."}
          </p>
          <div className="culture-hero-actions"><a className="primary-cta" href="#programme">{ro ? "Explorează arhitectura" : "Explore the programme"}<span>↓</span></a><Link className="secondary-cta" href={`/${locale}/events`}>{ro ? "Vezi programul / calendarul" : "See What’s On"}<span>↗</span></Link></div>
        </div>
      </section>

      <section className="culture-principle">
        <div>
          <p className="kicker">{ro ? "PRINCIPIUL" : "THE PRINCIPLE"}</p>
          <h2>{ro ? "Dobrogea ne dă rădăcini. Nu ne pune granițe." : "Dobrogea gives us roots, not boundaries."}</h2>
        </div>
        <div className="culture-principle-copy">
          <p>
            {ro
              ? "Istoria locală rămâne firul cel mai recognoscibil al programului: Constanța, Tomis, portul, comunitățile Dobrogei, Marea Neagră, patrimoniul, arhitectura și memoria orașului."
              : "Local history remains the programme’s most recognisable thread: Constanța, Tomis, the port, Dobrogea’s communities, the Black Sea, heritage, architecture and city memory."}
          </p>
          <p>
            {ro
              ? "Dar Pocket Goat nu devine un muzeu tematic. În aceeași casă pot încăpea Roma antică, miturile Balcanilor, istoria medicinei, orașe pierdute, o adaptare literară, un autor contemporan sau o seară de istorie în engleză."
              : "But Pocket Goat does not become a themed museum. The same house can hold Ancient Rome, Balkan myths, the history of medicine, lost cities, a literary adaptation, a contemporary author or a history evening in English."}
          </p>
        </div>
      </section>

      <section id="programme" className="culture-programme-section">
        <div className="culture-section-heading">
          <p className="kicker">{ro ? "PROGRAMUL CULTURAL" : "THE CULTURAL PROGRAMME"}</p>
          <h2>{ro ? "Mai multe uși. Aceeași casă." : "Several doors. One house."}</h2>
          <p>
            {ro
              ? "Alege o direcție. Formatele sunt familii de evenimente, nu promisiuni de date sau invitați înainte să fie confirmați."
              : "Choose a direction. These are event families, not promises of dates or guests before they are confirmed."}
          </p>
        </div>
        <CultureProgramme locale={locale} />
      </section>

      <section className="culture-languages">
        <div className="language-ledger">
          <span>RO</span><span>EN</span><span>FR</span>
        </div>
        <div className="culture-languages-copy">
          <p className="kicker">{ro ? "LIMBA FACE PARTE DIN FORMAT" : "LANGUAGE IS PART OF THE FORMAT"}</p>
          <h2>{ro ? "Nu traducem tot. Alegem limba potrivită serii." : "We do not translate everything. We choose the right language for the evening."}</h2>
          <p>
            {ro
              ? "O seară despre Constanța poate fi în română. O ediție pentru vizitatori sau expați poate fi în engleză. O conversație literară poate avea o ediție în franceză. Limba este aleasă cu sens, nu bifată mecanic."
              : "A Constanța evening may be in Romanian. An edition for visitors or expats may be in English. A literary conversation may have a French edition. Language is chosen with purpose, not ticked off mechanically."}
          </p>
        </div>
      </section>

      <section className="culture-architecture">
        <article>
          <span>01</span>
          <p className="kicker">POCKET GOAT CURATED</p>
          <h3>{ro ? "Programul principal" : "The core programme"}</h3>
          <p>{ro ? "Majoritatea serilor sunt concepute și curatoriate de Pocket Goat." : "Most evenings are conceived and curated by Pocket Goat."}</p>
        </article>
        <article>
          <span>02</span>
          <p className="kicker">POCKET GOAT GUEST</p>
          <h3>{ro ? "Voci invitate" : "Invited voices"}</h3>
          <p>{ro ? "Istorici, autori, artiști, cercetători și profesioniști cu ceva substanțial de adus." : "Historians, authors, artists, researchers and professionals with something substantial to bring."}</p>
        </article>
        <article>
          <span>03</span>
          <p className="kicker">POCKET GOAT COMMUNITY</p>
          <h3>{ro ? "O parte mai mică, deschisă ideilor" : "A smaller share, open to ideas"}</h3>
          <p>{ro ? "Propunerile comunității sunt binevenite, dar rămân atent curate ca potrivire și formă." : "Community proposals are welcome, but carefully curated for fit and format."}</p>
        </article>
      </section>

      <section className="culture-closing">
        <p>{ro ? "Istoria Dobrogei este punctul nostru de plecare. Nu punctul final." : "Dobrogea’s history is our starting point. Not our final stop."}</p>
        <Link href={`/${locale}/dobrogea`}>{ro ? "Intră în Dobrogea" : "Enter Dobrogea"} <span>↗</span></Link>
      </section>
    </main>
  );
}
