import Link from "next/link";
import { resolveLocale } from "@/lib/locale";

export default async function CinematicPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const ro = locale === "ro";

  const strands = ro ? [
    ["Film & literatură","Adaptări, ecranizări și seri în care filmul intră în dialog cu o carte."],
    ["History on Screen","Filme și documentare istorice puse în context, nu consumate ca fundal."],
    ["Black Sea / Dobrogea","Documentare, arhive vizuale și povești legate de Marea Neagră și locurile din jur."],
    ["European Cinema","Filme care merită văzute împreună chiar dacă nu vin cu marketing de blockbuster."],
    ["One Film / One Question","O proiecție, o întrebare bună și timp real pentru conversația de după."],
    ["Guest Evenings","Regizori, critici, istorici, autori sau cercetători invitați atunci când chiar adaugă ceva."]
  ] : [
    ["Film & literature","Adaptations, screen versions and evenings where film enters a conversation with a book."],
    ["History on Screen","Historical films and documentaries placed in context rather than consumed as background."],
    ["Black Sea / Dobrogea","Documentaries, visual archives and stories connected to the Black Sea and the region around it."],
    ["European Cinema","Films worth seeing together even when they do not arrive with blockbuster marketing."],
    ["One Film / One Question","One screening, one worthwhile question and actual time for the conversation afterwards."],
    ["Guest Evenings","Filmmakers, critics, historians, authors or researchers invited when they genuinely add something."]
  ];

  return (
    <main className="cinematic-page">
      <section className="cinematic-hero">
        <div className="cinematic-beam" aria-hidden="true"/>
        <div className="cinematic-frame" aria-hidden="true"><span>POCKET GOAT</span><strong>CINEMATIC</strong><small>FILM · HISTORY · BOOKS · CONVERSATION</small></div>
        <div className="cinematic-hero-copy">
          <p className="eyebrow">POCKET GOAT CINEMATIC</p>
          <h1>{ro ? "Filme care merită să nu se termine la generic." : "Films worth carrying past the credits."}</h1>
          <p className="lede">{ro ? "Cinematic nu este mini-multiplex și nu are nevoie de recuzită de cinema. Este un salon de film în interiorul Pocket Goat: selecție, context, lumină joasă și conversația care începe după ce se aprind iar lămpile." : "Cinematic is not a mini-multiplex and it does not need cinema props. It is a film salon inside Pocket Goat: selection, context, low light, and the conversation that begins when the lamps come back on."}</p>
        </div>
      </section>

      <section className="cinematic-strands">
        <div className="cinematic-heading">
          <p className="kicker">{ro ? "CE VEZI AICI" : "WHAT LIVES HERE"}</p>
          <h2>{ro ? "Nu doar filme. Legături între ele." : "Not just films. Connections between them."}</h2>
        </div>
        <div className="cinematic-grid">
          {strands.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="cinematic-rights">
        <div><p className="kicker">{ro ? "DREPTURILE CONTEAZĂ" : "RIGHTS MATTER"}</p><h2>{ro ? "Proiecție publică doar când avem voie s-o facem." : "Public screening only when we have the right to show it."}</h2></div>
        <p>{ro ? "Orice proiecție publică va fi organizată numai cu licențele și drepturile necesare. Dacă un titlu nu poate fi proiectat legal, nu-l proiectăm. Putem discuta cartea, contextul sau filmul în alt format, dar nu improvizăm partea juridică." : "Every public screening will take place only with the necessary licences and screening rights. If a title cannot be screened legally, we do not screen it. We can still discuss the book, context or film in another format, but we do not improvise the legal part."}</p>
      </section>

      <section className="cinematic-bridge">
        <p className="kicker">{ro ? "FILMUL INTRĂ ÎN PROGRAMUL MARE" : "FILM BELONGS TO THE WIDER PROGRAMME"}</p>
        <h2>{ro ? "Uneori filmul vine după o carte. Alteori înaintea unei seri de istorie." : "Sometimes the film follows a book. Sometimes it opens a history evening."}</h2>
        <p>{ro ? "Cinematic se leagă de Books, Dobrogea, History, Myths & Legends și invitații Pocket Goat. Nu este o insulă separată, ci una dintre limbile culturale ale casei." : "Cinematic connects to Books, Dobrogea, History, Myths & Legends and Pocket Goat guests. It is not a separate island; it is one of the cultural languages of the house."}</p>
        <Link href={`/${locale}/culture`}>{ro ? "Vezi programul cultural" : "Explore the cultural programme"} <span>↗</span></Link>
      </section>
    </main>
  );
}
