import Link from "next/link";
import { notFound } from "next/navigation";
import { events, getEvent } from "@/lib/events";
import { resolveLocale } from "@/lib/locale";

export function generateStaticParams() {
  return events.flatMap((event) => [
    { locale: "ro", slug: event.slug },
    { locale: "en", slug: event.slug },
  ]);
}

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);
  const ro = locale === "ro";
  const event = getEvent(slug);
  if (!event) notFound();

  return (
    <main className={"event-detail-page event-detail-" + event.category}>
      <section className="event-detail-hero">
        <div className="event-detail-meta">
          <p className="eyebrow">{event.eyebrow[locale]}</p>
          <div className="event-detail-langs">
            {event.languages.map((lang) => <span key={lang}>{lang.toUpperCase()}</span>)}
          </div>
        </div>
        <h1>{event.title[locale]}</h1>
        <p className="lede">{event.summary[locale]}</p>
      </section>

      <section className="event-detail-body">
        <div className="event-detail-main">
          <p className="kicker">{ro ? "DESPRE FORMAT" : "ABOUT THE FORMAT"}</p>
          <p className="event-detail-description">{event.description[locale]}</p>
        </div>
        <aside className="event-detail-aside">
          <div>
            <span>{ro ? "Format" : "Format"}</span>
            <strong>{event.format[locale]}</strong>
          </div>
          <div>
            <span>{ro ? "Data" : "Date"}</span>
            <strong>{ro ? "Va fi anunțată" : "To be announced"}</strong>
          </div>
          <div>
            <span>{ro ? "Statut" : "Status"}</span>
            <strong>{ro ? "În pregătire" : "In development"}</strong>
          </div>
        </aside>
      </section>

      <section className="event-detail-note">
        <p>
          {ro
            ? "Nu publicăm o dată, un invitat sau o rezervare până când nu sunt confirmate. Când acest format intră efectiv în calendar, pagina va primi toate detaliile practice."
            : "We do not publish a date, guest or booking link until it is confirmed. Once this format enters the live calendar, this page will carry the practical details."}
        </p>
      </section>

      <section className="event-detail-footer">
        <Link href={`/${locale}/events`}>← {ro ? "Înapoi la program" : "Back to What's On"}</Link>
        <Link href={`/${locale}/culture`}>{ro ? "Vezi arhitectura culturală" : "Explore the cultural programme"} <span>↗</span></Link>
      </section>
    </main>
  );
}
