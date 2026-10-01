"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { eventCategories, events, type EventCategory, type EventLanguage } from "@/lib/events";

type Locale = "ro" | "en";

const languageOptions: Array<{ id: "all" | EventLanguage; ro: string; en: string }> = [
  { id: "all", ro: "Toate limbile", en: "All languages" },
  { id: "ro", ro: "Română", en: "Romanian" },
  { id: "en", ro: "Engleză", en: "English" },
  { id: "fr", ro: "Franceză", en: "French" },
];

export function EventsCalendar({ locale }: { locale: Locale }) {
  const [category, setCategory] = useState<"all" | EventCategory>("all");
  const [language, setLanguage] = useState<"all" | EventLanguage>("all");

  const filtered = useMemo(
    () =>
      events.filter(
        (event) =>
          (category === "all" || event.category === category) &&
          (language === "all" || event.languages.includes(language)),
      ),
    [category, language],
  );

  return (
    <div className="events-browser">
      <div className="events-filter-group">
        <span className="events-filter-label">{locale === "ro" ? "Temă" : "Theme"}</span>
        <div className="events-filter-row" role="group" aria-label={locale === "ro" ? "Filtrează după temă" : "Filter by theme"}>
          {eventCategories.map((item) => (
            <button
              key={item.id}
              type="button"
              className={category === item.id ? "active" : ""}
              aria-pressed={category === item.id}
              onClick={() => setCategory(item.id)}
            >
              {item[locale]}
            </button>
          ))}
        </div>
      </div>

      <div className="events-filter-group">
        <span className="events-filter-label">{locale === "ro" ? "Limbă" : "Language"}</span>
        <div className="events-filter-row compact" role="group" aria-label={locale === "ro" ? "Filtrează după limbă" : "Filter by language"}>
          {languageOptions.map((item) => (
            <button
              key={item.id}
              type="button"
              className={language === item.id ? "active" : ""}
              aria-pressed={language === item.id}
              onClick={() => setLanguage(item.id)}
            >
              {item[locale]}
            </button>
          ))}
        </div>
      </div>

      <div className="events-result-meta">
        <span>{String(filtered.length).padStart(2, "0")}</span>
        <p>{locale === "ro" ? "formate găsite" : "formats found"}</p>
      </div>

      <div className="events-grid">
        {filtered.map((event, index) => (
          <article className={"event-preview-card event-" + event.category} key={event.slug}>
            <div className="event-card-top">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div className="event-languages" aria-label={locale === "ro" ? "Limbi" : "Languages"}>
                {event.languages.map((lang) => <i key={lang}>{lang.toUpperCase()}</i>)}
              </div>
            </div>
            <p className="kicker">{event.eyebrow[locale]}</p>
            <h3>{event.title[locale]}</h3>
            <p>{event.summary[locale]}</p>
            <div className="event-card-bottom">
              <strong>{locale === "ro" ? "Data va fi anunțată" : "Date to be announced"}</strong>
              <Link href={`/${locale}/events/${event.slug}`}>
                {locale === "ro" ? "Vezi formatul" : "View format"} <span>↗</span>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="events-empty">
          <p>{locale === "ro" ? "Nu avem încă un format în combinația asta." : "We do not have a format in that combination yet."}</p>
        </div>
      ) : null}
    </div>
  );
}
