import Link from "next/link";
import { resolveLocale } from "@/lib/locale";

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const ro = locale === "ro";

  return (
    <main className="access-page">
      <section className="access-hero">
        <div className="access-hero-copy">
          <p className="eyebrow">{ro ? "ACCESIBILITATE" : "ACCESSIBILITY"}</p>
          <h1>{ro ? "Frumos trebuie să însemne și utilizabil." : "Beautiful must also mean usable."}</h1>
          <p className="lede">
            {ro
              ? "Nu folosim „accesibil” ca adjectiv decorativ. Pentru lucrurile pe care încă nu le putem confirma, spunem clar că sunt de verificat."
              : "We do not use “accessible” as a decorative adjective. For anything we cannot confirm yet, we say clearly that it still needs to be verified."}
          </p>
        </div>
      </section>

      <section className="access-facts">
        <div className="access-heading">
          <p className="kicker">{ro ? "CE VOM PUBLICA" : "WHAT WE WILL PUBLISH"}</p>
          <h2>{ro ? "O fișă de acces reală, nu o bifă." : "A real access sheet, not a checkbox."}</h2>
          <p>
            {ro
              ? "După confirmarea spațiului, măsurăm și publicăm concret ce poate întâmpina o persoană înainte să pornească de acasă."
              : "Once the space is confirmed, we will measure and publish the practical facts someone may need before leaving home."}
          </p>
        </div>

        <div className="access-fact-grid">
          <article><span>01</span><h3>{ro ? "Intrare & traseu" : "Entrance & route"}</h3><p>{ro ? "Trepte, praguri, lățimi, uși, niveluri și traseul real de la intrare până la principalele zone." : "Steps, thresholds, widths, doors, levels and the actual route from the entrance to the main areas."}</p></article>
          <article><span>02</span><h3>{ro ? "Toaletă" : "Toilet"}</h3><p>{ro ? "Nu vom scrie „accesibilă” fără dimensiuni și fără să spunem ce există în realitate." : "We will not write “accessible” without measurements and a factual description of what is actually there."}</p></article>
          <article><span>03</span><h3>{ro ? "Locuri de stat" : "Seating"}</h3><p>{ro ? "Vom specifica tipurile de scaune, banchete și mese și care dintre ele permit abordări diferite." : "We will specify chair, bench and table types and which ones support different access needs."}</p></article>
          <article><span>04</span><h3>{ro ? "Sunet & lumină" : "Sound & light"}</h3><p>{ro ? "Vom descrie zonele mai liniștite, sursele de lumină și momentele în care spațiul poate deveni mai aglomerat sau mai sonor." : "We will describe quieter areas, light sources and the times when the room may become busier or louder."}</p></article>
        </div>
      </section>

      <section className="access-choice">
        <div>
          <p className="kicker">{ro ? "ALEGERE, NU PRESUPUNERE" : "CHOICE, NOT ASSUMPTION"}</p>
          <h2>{ro ? "Nu toată lumea are nevoie de același tip de ajutor." : "Not everyone needs the same kind of help."}</h2>
          <p>
            {ro
              ? "Personalul poate ajuta, dar nu presupune automat ce îți trebuie. Întrebăm înainte, explicăm opțiunile și lăsăm persoana să decidă."
              : "Staff can help, but do not automatically assume what you need. We ask first, explain the options and let the guest decide."}
          </p>
        </div>
        <div className="access-choice-list">
          <div><strong>{ro ? "Mai multe moduri de a sta" : "Different ways to sit"}</strong><span>{ro ? "Pocket-uri, mese mici și masa comună oferă niveluri diferite de intimitate și contact social." : "Pockets, smaller tables and the communal table offer different levels of privacy and social contact."}</span></div>
          <div><strong>{ro ? "Fără socializare obligatorie" : "No compulsory socialising"}</strong><span>{ro ? "Poți veni singur, citi și pleca fără să ți se ceară să participi la conversație." : "You can come alone, read and leave without being expected to join a conversation."}</span></div>
          <div><strong>{ro ? "Ajutor fără infantilizare" : "Help without infantilisation"}</strong><span>{ro ? "Respectul nu înseamnă să vorbești în locul persoanei sau să decizi pentru ea." : "Respect does not mean speaking for someone or deciding on their behalf."}</span></div>
        </div>
      </section>

      <section className="access-digital">
        <div className="access-digital-copy">
          <p className="kicker">{ro ? "WEBSITE" : "WEBSITE"}</p>
          <h2>{ro ? "Accesibilitatea digitală face parte din construcție." : "Digital accessibility is part of the build."}</h2>
          <p>
            {ro
              ? "Site-ul este construit cu semantică, contrast, focus vizibil, navigare la tastatură și respect pentru reduced motion. Asta este direcția de lucru, nu o declarație de certificare."
              : "The site is being built with semantic structure, contrast, visible focus, keyboard navigation and respect for reduced motion. That is the working standard, not a certification claim."}
          </p>
        </div>
        <div className="access-digital-points">
          <span>SEMANTIC HTML</span>
          <span>VISIBLE FOCUS</span>
          <span>KEYBOARD</span>
          <span>REDUCED MOTION</span>
          <span>REAL CONTRAST</span>
          <span>MEANING BEYOND COLOUR</span>
        </div>
      </section>

      <section className="access-honesty">
        <p className="kicker">{ro ? "CE NU ȘTIM ÎNCĂ" : "WHAT WE DO NOT KNOW YET"}</p>
        <h2>{ro ? "Spațiul fizic nu este încă suficient de confirmat ca să pretindem mai mult." : "The physical space is not confirmed enough yet for us to claim more."}</h2>
        <p>
          {ro
            ? "Până la alegerea și măsurarea locației finale, nu afirmăm existența unei rampe, a unei toalete adaptate, a unui traseu fără trepte sau a altor facilități pe care nu le-am verificat."
            : "Until the final location is chosen and measured, we do not claim a ramp, an adapted toilet, a step-free route or any other facility we have not verified."}
        </p>
      </section>

      <section className="access-footer">
        <Link href={`/${locale}/space`}>← {ro ? "Vezi spațiul" : "Explore the space"}</Link>
        <Link href={`/${locale}/contact`}>{ro ? "Planifică vizita" : "Plan your visit"} <span>↗</span></Link>
      </section>
    </main>
  );
}
