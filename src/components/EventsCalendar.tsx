"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { events, type EventCategory, type EventLanguage } from "@/lib/events";

type Locale = "ro" | "en";

const languageOptions: Array<{ id: "all" | EventLanguage; ro: string; en: string }> = [
  { id: "all", ro: "Toate", en: "All" },
  { id: "ro", ro: "Română", en: "Romanian" },
  { id: "en", ro: "Engleză", en: "English" },
  { id: "fr", ro: "Franceză", en: "French" },
];

const thematicGroups: Array<{
  eyebrow: { ro: string; en: string };
  title: { ro: string; en: string };
  note: { ro: string; en: string };
  items: Array<{ id: EventCategory; ro: string; en: string }>;
}> = [
  {
    eyebrow: { ro: "RĂDĂCINA", en: "THE ROOT" },
    title: { ro: "De aici", en: "From here" },
    note: {
      ro: "Constanța, Dobrogea și Marea Neagră — punctul de plecare al programului cultural.",
      en: "Constanța, Dobrogea and the Black Sea — the programme’s point of departure.",
    },
    items: [{ id: "dobrogea", ro: "Dobrogea & Marea Neagră", en: "Dobrogea & Black Sea" }],
  },
  {
    eyebrow: { ro: "TRECUT & POVESTE", en: "PAST & STORY" },
    title: { ro: "Istorie, mituri & legende", en: "History, myths & legends" },
    note: {
      ro: "De la surse și viață cotidiană la felul în care poveștile se schimbă când trec dintr-o cultură în alta.",
      en: "From sources and everyday life to the way stories change as they travel between cultures.",
    },
    items: [
      { id: "history", ro: "Istorie", en: "History" },
      { id: "myths", ro: "Mituri & legende", en: "Myths & Legends" },
    ],
  },
  {
    eyebrow: { ro: "PAGINĂ & ECRAN", en: "PAGE & SCREEN" },
    title: { ro: "Cărți & film", en: "Books & film" },
    note: {
      ro: "Lectură, autori, adaptări, documentare și seri în care o idee trece din pagină pe ecran sau invers.",
      en: "Reading, authors, adaptations, documentaries and evenings where an idea moves from page to screen or back again.",
    },
    items: [
      { id: "books", ro: "Cărți", en: "Books" },
      { id: "cinematic", ro: "Cinematic", en: "Cinematic" },
    ],
  },
  {
    eyebrow: { ro: "LIMBĂ & OAMENI", en: "LANGUAGE & PEOPLE" },
    title: { ro: "Limbi & comunitate", en: "Languages & community" },
    note: {
      ro: "Formate în română, engleză sau franceză și o fereastră mică, atent curatoriată, pentru ideile comunității.",
      en: "Formats in Romanian, English or French, plus a small, carefully curated window for community ideas.",
    },
    items: [
      { id: "languages", ro: "Limbi", en: "Languages" },
      { id: "community", ro: "Comunitate", en: "Community" },
    ],
  },
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
      <section className="events-thematic-shell" aria-labelledby="events-thematic-title">
        <div className="events-thematic-head">
          <div>
            <p className="kicker">{locale === "ro" ? "TEMATICI" : "THEMES"}</p>
            <h3 id="events-thematic-title">
              {locale === "ro" ? "Alege firul care te trage de mânecă." : "Choose the thread that pulls you in."}
            </h3>
          </div>
          <button
            type="button"
            className={"events-all-button " + (category === "all" ? "active" : "")}
            aria-pressed={category === "all"}
            onClick={() => setCategory("all")}
          >
            {locale === "ro" ? "Vezi tot programul" : "See everything"}
          </button>
        </div>

        <div className="events-theme-groups">
          {thematicGroups.map((group) => (
            <article className="events-theme-group" key={group.title.en}>
              <p className="theme-group-eyebrow">{group.eyebrow[locale]}</p>
              <h4>{group.title[locale]}</h4>
              <p>{group.note[locale]}</p>
              <div className="theme-group-actions">
                {group.items.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={category === item.id ? "active" : ""}
                    aria-pressed={category === item.id}
                    onClick={() => setCategory(item.id)}
                  >
                    {item[locale]} <span>↗</span>
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="events-language-filter">
        <div>
          <span className="events-filter-label">{locale === "ro" ? "LIMBA SERII" : "EVENT LANGUAGE"}</span>
          <p>
            {locale === "ro"
              ? "Limba este un filtru practic, nu o tematică."
              : "Language is a practical filter, not a theme."}
          </p>
        </div>
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
      </section>

      <div className="events-result-meta">
        <div>
          <span>{String(filtered.length).padStart(2, "0")}</span>
          <p>{locale === "ro" ? "formate găsite" : "formats found"}</p>
        </div>
        {category !== "all" || language !== "all" ? (
          <button
            type="button"
            className="events-clear-filters"
            onClick={() => {
              setCategory("all");
              setLanguage("all");
            }}
          >
            {locale === "ro" ? "Șterge filtrele" : "Clear filters"} ×
          </button>
        ) : null}
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
