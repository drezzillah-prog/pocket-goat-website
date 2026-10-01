import Link from "next/link";
import { resolveLocale } from "@/lib/locale";

export default async function CommunityPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const ro = locale === "ro";

  const ordinary = ro ? [
    ["Hard Day Tea","Un ceai simplu din partea casei, fără explicații și fără spectacol."],
    ["Quiet Company","Poți sta aproape de oameni fără ca asta să însemne că vrei conversație."],
    ["Leave a Story / Take a Story","Lași ceva mic în urmă. Iei altceva cu tine. Fără obligația de a cunoaște persoana de la celălalt capăt."],
    ["The Things We Leave Behind","O arhivă de texte anonime, atent moderată, nu un zid de traumă."],
    ["Respect pentru liniște","Nu trebuie să fii sociabil ca să fii binevenit."],
    ["Oameni care observă","Hospitality bun înseamnă și să știi când să ajuți și când să lași omul în pace."]
  ] : [
    ["Hard Day Tea","A simple house tea, no explanation required and no spectacle attached."],
    ["Quiet Company","You can sit near people without that automatically meaning you want conversation."],
    ["Leave a Story / Take a Story","Leave something small behind. Take something else with you. No need to know the person at the other end."],
    ["The Things We Leave Behind","A carefully moderated anonymous archive, not a wall of trauma."],
    ["Respect for quiet","You do not have to be sociable to be welcome."],
    ["People who notice","Good hospitality also means knowing when to help and when to leave someone in peace."]
  ];

  return (
    <main className="community-page">
      <section className="community-hero">
        <div className="community-hero-copy">
          <p className="eyebrow">KINDNESS · COMMUNITY</p>
          <h1>Gentleness should be ordinary.</h1>
          <p className="lede">{ro ? "Nu vrem ca bunătatea să fie campanie, decor sau promisiune terapeutică. Vrem să fie pur și simplu felul în care funcționează locul." : "We do not want kindness to become a campaign, décor or therapeutic promise. We want it to be, quite simply, how the place works."}</p>
        </div>
      </section>

      <section className="community-ordinary">
        <div className="community-heading">
          <p className="kicker">{ro ? "CUM ARATĂ ÎN PRACTICĂ" : "WHAT IT LOOKS LIKE IN PRACTICE"}</p>
          <h2>{ro ? "Lucruri mici, făcute normal." : "Small things, done normally."}</h2>
        </div>
        <div className="community-ordinary-grid">
          {ordinary.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section id="bring-an-idea" className="community-table">
        <div className="community-table-copy">
          <p className="kicker">POCKET GOAT COMMUNITY</p>
          <h2>You bring the idea.<br/>We provide the table.</h2>
          <p>{ro ? "Ai o idee culturală care chiar are ce căuta aici — despre cărți, istorie, limbi, artă, profesii, oraș sau cunoaștere? O poți propune. Noi o citim, vedem dacă se potrivește și, dacă da, găsim forma potrivită." : "Have a cultural idea that genuinely belongs here — around books, history, languages, art, professions, city life or knowledge? Propose it. We read it, decide whether it fits and, if it does, find the right form for it."}</p>
        </div>
        <div className="community-rules">
          <div><strong>{ro ? "Curatoriat" : "Curated"}</strong><span>{ro ? "Nu este open booking și nu închiriem pur și simplu o sală." : "This is not open booking and not simple room hire."}</span></div>
          <div><strong>{ro ? "Cultural" : "Cultural"}</strong><span>{ro ? "Propunerea trebuie să aibă o legătură reală cu universul Pocket Goat." : "The proposal needs a real connection to the Pocket Goat world."}</span></div>
          <div><strong>{ro ? "O parte mică" : "A smaller share"}</strong><span>{ro ? "Majoritatea programului rămâne creată de Pocket Goat." : "Most of the programme remains created by Pocket Goat."}</span></div>
        </div>
      </section>

      <section className="community-boundary">
        <p className="kicker">{ro ? "ȘI LIMITELE SUNT HOSPITALITY" : "BOUNDARIES ARE HOSPITALITY TOO"}</p>
        <h2>{ro ? "Un loc cald nu înseamnă un loc fără limite." : "A warm place is not a place without boundaries."}</h2>
        <p>{ro ? "Respectăm liniștea, spațiul personal și faptul că unii oameni vin tocmai ca să nu fie obligați să vorbească. Comunitate nu înseamnă socializare forțată." : "We respect quiet, personal space and the fact that some people come precisely because they do not want to be made to talk. Community does not mean forced socialising."}</p>
      </section>

      <section className="community-culture-bridge">
        <h2>{ro ? "Ai venit pentru oameni? Ai venit pentru liniște? Ambele sunt valide." : "Came for people? Came for quiet? Both count."}</h2>
        <div>
          <Link href={`/${locale}/culture`}>{ro ? "Vezi programul cultural" : "Explore the cultural programme"} <span>↗</span></Link>
          <Link href={`/${locale}/space#pockets`}>{ro ? "Vezi The Pockets" : "See The Pockets"} <span>↗</span></Link>
        </div>
      </section>
    </main>
  );
}
