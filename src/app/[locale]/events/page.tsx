import { EventsCalendar } from "@/components/EventsCalendar";
import { resolveLocale } from "@/lib/locale";

export default async function EventsPage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const ro = locale === "ro";

  return (
    <main className="events-page">
      <section className="events-hero">
        <div className="events-hero-copy">
          <p className="eyebrow">{ro ? "PROGRAM · CALENDAR" : "WHAT'S ON · CALENDAR"}</p>
          <h1>{ro ? "Ce se întâmplă la Pocket Goat." : "What happens at Pocket Goat."}</h1>
          <p className="lede">
            {ro
              ? "Suntem încă înainte de deschidere, așa că nu inventăm date sau invitați doar ca să umplem un calendar. Aici vezi formatele pe care le construim; datele apar abia când sunt confirmate."
              : "We are still pre-opening, so we do not invent dates or guests just to make a calendar look full. Here you can explore the formats we are building; dates appear only once they are confirmed."}
          </p>
        </div>
      </section>

      <section className="events-confirmed">
        <div>
          <p className="kicker">{ro ? "DATE CONFIRMATE" : "CONFIRMED DATES"}</p>
          <h2>{ro ? "Încă nu publicăm nimic înainte să fie real." : "Nothing goes here until it is real."}</h2>
        </div>
        <p>
          {ro
            ? "Când avem prima dată, primul invitat și toate detaliile verificate, această secțiune devine calendarul propriu-zis. Până atunci, preferăm un gol sincer în locul unui program fictiv."
            : "When the first date, guest and practical details are confirmed, this becomes the live calendar. Until then, we would rather show an honest empty space than a fictional programme."}
        </p>
      </section>

      <section className="events-explore">
        <div className="events-heading">
          <p className="kicker">{ro ? "TEMATICI & FORMATE" : "THEMES & FORMATS"}</p>
          <h2>{ro ? "Programul are mai multe fire. Alege de unde vrei să intri." : "The programme has several threads. Choose where you want to enter."}</h2>
          <p>
            {ro
              ? "Dobrogea rămâne axa principală, dar programul merge și spre istorie mondială, mituri, cărți, film, limbi și comunitate."
              : "Dobrogea remains the main cultural anchor, while the programme also travels into world history, myths, books, film, languages and community."}
          </p>
        </div>
        <EventsCalendar locale={locale} />
      </section>
    </main>
  );
}
