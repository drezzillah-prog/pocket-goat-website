import Link from "next/link";
import { resolveLocale } from "@/lib/locale";

export default async function DobrogeaPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const ro = locale === "ro";

  const strands = ro ? [
    ["Dobrogea Nights","Istorie, geografie, comunități și cultură locală, cu invitați care pot ține împreună rigoarea și povestea."],
    ["Constanța Then & Now","Fotografii, hărți, arhive și fragmente urbane puse lângă orașul de astăzi."],
    ["History Café / Ask a Historian","O temă bine delimitată, un specialist și loc pentru întrebări reale, nu doar pentru o prelegere."],
    ["Object Stories","Un obiect, un document sau un detaliu aparent mic ca intrare într-o istorie mult mai mare."],
    ["Black Sea Worlds","Porturi, drumuri, imperii, comerț, migrații și comunități legate de Marea Neagră."],
    ["Myths of the Black Sea","Mituri, legende și folclor local discutate cu context: ce știm, ce s-a transmis și ce s-a adăugat mai târziu."]
  ] : [
    ["Dobrogea Nights","Local history, geography, communities and culture with guests able to hold rigour and storytelling together."],
    ["Constanța Then & Now","Photographs, maps, archives and urban fragments placed beside today’s city."],
    ["History Café / Ask a Historian","One well-framed subject, one specialist, and room for real questions rather than a lecture alone."],
    ["Object Stories","An object, document or apparently small detail used as an entry into a much larger history."],
    ["Black Sea Worlds","Ports, routes, empires, trade, migration and communities connected by the Black Sea."],
    ["Myths of the Black Sea","Local myths, legends and folklore discussed with context: what is documented, what was transmitted and what came later."]
  ];

  return (
    <main className="dobrogea-page">
      <section className="dobrogea-hero">
        <div className="dobrogea-map-ghost" aria-hidden="true">
          <span>TOMIS</span><span>CONSTANȚA</span><span>DOBROGEA</span><span>BLACK SEA</span>
        </div>
        <div className="dobrogea-hero-copy">
          <p className="eyebrow">CONSTANȚA · DOBROGEA · BLACK SEA</p>
          <h1>{ro ? "Aici începe programul cultural Pocket Goat." : "This is where Pocket Goat’s cultural programme begins."}</h1>
          <p className="lede">
            {ro
              ? "Nu folosim Dobrogea ca decor. Istoria, portul, comunitățile, arheologia, arhitectura, literatura și memoria locului sunt una dintre cele mai importante surse de program, cărți și conversații."
              : "Dobrogea is not décor here. Its history, port, communities, archaeology, architecture, literature and memory are among our most important sources for programmes, books and conversations."}
          </p>
        </div>
      </section>

      <section className="dobrogea-strands">
        <div className="dobrogea-strands-heading">
          <p className="kicker">{ro ? "FIRE RECURENTE" : "RECURRING THREADS"}</p>
          <h2>{ro ? "Istoria locală, în mai multe forme." : "Local history, in more than one form."}</h2>
          <p>{ro ? "Nu vrem aceeași seară repetată cu alt titlu. Fiecare format deschide locul dintr-un unghi diferit." : "We do not want the same evening repeated under a different title. Each format opens the place from a different angle."}</p>
        </div>
        <div className="dobrogea-strand-grid">
          {strands.map(([title,text],index)=>(
            <article key={title}>
              <span>{String(index+1).padStart(2,"0")}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dobrogea-not-theme-park">
        <div>
          <p className="kicker">{ro ? "ATMOSFERĂ, NU RECUZITĂ" : "ATMOSPHERE, NOT PROPS"}</p>
          <h2>{ro ? "Marea apare în lumină, memorie și geografie." : "The sea appears as light, memory and geography."}</h2>
        </div>
        <p>
          {ro
            ? "Fără ancore, plase, scoici și decor marin pus cu lopata. Black Sea at dusk înseamnă culoare, ritm, hărți, fotografii, trasee, port și felul în care un oraș de coastă își poartă istoria."
            : "No anchors, nets, shells or piles of nautical décor. Black Sea at dusk means colour, rhythm, maps, photographs, routes, the port, and the way a coastal city carries its history."}
        </p>
      </section>

      <section className="dobrogea-outward">
        <p className="kicker">{ro ? "DE AICI, SPRE LUME" : "FROM HERE, OUTWARD"}</p>
        <h2>{ro ? "Dobrogea e rădăcina, nu limita." : "Dobrogea is the root, not the limit."}</h2>
        <p>
          {ro
            ? "Programul mai larg poate merge spre istorie mondială, mituri și legende din alte culturi, cărți, film și seri în alte limbi. Tocmai pentru că știm de unde pornim, ne putem permite să fim curioși în toate direcțiile."
            : "The wider programme can travel into world history, myths and legends from other cultures, books, film and evenings in other languages. Knowing where we begin gives us the freedom to be curious in every direction."}
        </p>
        <Link href={`/${locale}/culture`}>{ro ? "Vezi întregul program cultural" : "Explore the full cultural programme"} <span>↗</span></Link>
      </section>
    </main>
  );
}
