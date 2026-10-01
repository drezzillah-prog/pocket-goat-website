import Link from "next/link";
import { resolveLocale } from "@/lib/locale";

export default async function CafePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const ro = locale === "ro";

  const teaFamilies = ro ? [
    ["Ceai negru","Pentru dimineți lente, seri lungi și cărți care mai cer un capitol."],
    ["Ceai verde","Curat, vegetal, uneori floral — fără să-l îngropăm sub siropuri."],
    ["Infuzii","Plante, fructe, mirodenii și amestecuri simple, ușor de înțeles."],
    ["Sezoniere","Câteva lucruri care apar când are sens și dispar înainte să devină decor permanent."]
  ] : [
    ["Black tea","For slow mornings, long evenings and books that ask for one more chapter."],
    ["Green tea","Clean, vegetal, sometimes floral — without burying it under syrup."],
    ["Infusions","Herbs, fruit, spices and straightforward blends that tell you what you are drinking."],
    ["Seasonal","A few things that appear when the season calls for them and leave before they become permanent décor."]
  ];

  const smallThings = ro ? [
    "Biscuiți și cookies","Prăjituri simple","Unu-două lucruri sărate","Opțiuni vegetariene","Câteva opțiuni fără lactoză / gluten, unde rețeta permite"
  ] : [
    "Biscuits and cookies","Simple cakes","One or two savoury things","Vegetarian options","A few lactose-free / gluten-free options where the recipe genuinely allows it"
  ];

  return (
    <main className="cafe-page">
      <section className="cafe-hero">
        <div className="cafe-steam" aria-hidden="true"><i/><i/><i/></div>
        <div className="cafe-hero-copy">
          <p className="eyebrow">CAFÉ · TEA ROOM</p>
          <h1>{ro ? "Ceai bun. Cafea bună. Nimic care să strige peste carte." : "Good tea. Good coffee. Nothing shouting over the book."}</h1>
          <p className="lede">
            {ro
              ? "Meniul nu trebuie să fie imens ca să fie bun. La Pocket Goat, ceaiul are locul principal, cafeaua rămâne serioasă, iar mâncarea e mică, simplă și potrivită unui loc în care oamenii chiar stau."
              : "A menu does not need to be enormous to be good. Tea takes the lead at Pocket Goat, coffee stays serious, and the food is small, simple and suited to a place where people actually linger."}
          </p>
        </div>
      </section>

      <section className="cafe-tea">
        <div className="cafe-section-heading">
          <p className="kicker">{ro ? "CEAIUL ÎN FAȚĂ" : "TEA TAKES THE LEAD"}</p>
          <h2>{ro ? "Alegi după ce bei, nu după o poveste inventată despre cană." : "Choose by what is in the cup, not by a made-up story around it."}</h2>
          <p>{ro ? "Numele rămân clare, ingredientele la vedere, iar selecția suficient de largă cât să găsești ceva bun fără să răsfoiești un roman înainte de roman." : "Names stay clear, ingredients stay visible, and the selection is broad enough to find something good without reading a novel before the novel."}</p>
        </div>
        <div className="tea-family-grid">
          {teaFamilies.map(([title,text],i)=><article key={title}><span>{String(i+1).padStart(2,"0")}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="cafe-coffee">
        <div>
          <p className="kicker">COFFEE</p>
          <h2>{ro ? "Cafea fără spectacol obligatoriu." : "Coffee without compulsory theatre."}</h2>
        </div>
        <div>
          <p>{ro ? "Espresso, americano, cappuccino, flat white și câteva opțiuni reci atunci când are sens. Făcute bine, servite frumos, fără să pretindem că fiecare ceașcă trebuie să fie o demonstrație." : "Espresso, americano, cappuccino, flat white and a few cold options when they make sense. Made well, served beautifully, without pretending every cup has to be a performance."}</p>
        </div>
      </section>

      <section className="cafe-small-things">
        <div className="cafe-section-heading">
          <p className="kicker">{ro ? "LUCRURI MICI DE MÂNCAT" : "SMALL THINGS TO EAT"}</p>
          <h2>{ro ? "Cât să meargă cu locul. Nu cât să devină restaurant." : "Enough to belong here. Not enough to turn into a restaurant."}</h2>
        </div>
        <div className="small-things-list">
          {smallThings.map((item,i)=><div key={item}><span>{String(i+1).padStart(2,"0")}</span><strong>{item}</strong></div>)}
        </div>
      </section>

      <section className="hard-day-tea-page">
        <div className="hard-day-cup" aria-hidden="true"><span>PG</span></div>
        <div>
          <p className="kicker">HARD DAY TEA</p>
          <h2>{ro ? "„Am avut o zi grea.” E suficient." : "“I had a hard day.” That is enough."}</h2>
          <p>{ro ? "Primești un ceai simplu din partea casei. Fără explicații, fără dovadă, fără formular, fără fotografie pentru social media. Poate veni într-o cană mare și, dacă avem, cu doi biscuiți mici. Atât." : "You get a simple house tea. No explanation, no proof, no form, no social-media moment. It may come in a large mug and, when we have them, with two small biscuits. That is all."}</p>
          <p className="hard-day-note-copy">{ro ? "Nu este produs premium și nu este campanie. Este doar una dintre formele în care „Gentleness should be ordinary” devine ceva concret." : "It is not a premium product and it is not a campaign. It is simply one of the ways “Gentleness should be ordinary” becomes concrete."}</p>
        </div>
      </section>

      <section className="cafe-ritual">
        <blockquote>{ro ? "O carte deschisă. O lampă aprinsă. Ceva cald în cană." : "An open book. A lamp on. Something warm in the cup."}</blockquote>
        <Link href={`/${locale}/books`}>{ro ? "Răsfoiește biblioteca" : "Browse the library"} <span>↗</span></Link>
      </section>
    </main>
  );
}
