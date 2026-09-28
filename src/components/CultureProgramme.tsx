"use client";

import Link from "next/link";
import { useState } from "react";

type Locale = "ro" | "en";

const programme = {
  ro: [
    {
      id: "dobrogea",
      label: "Dobrogea & Marea Neagră",
      eyebrow: "AXA CENTRALĂ",
      title: "Pornim de aici.",
      text: "Istoria Dobrogei și a Constanței este firul cultural principal al Pocket Goat: oraș, port, comunități, arheologie, arhitectură, memorie, Marea Neagră și poveștile locului.",
      items: ["Dobrogea Nights","Constanța Then & Now","History Café / Ask a Historian","Object Stories","Black Sea Worlds","Port Stories","Arheologie la masă","Comunitățile Dobrogei"],
      href: "/dobrogea"
    },
    {
      id: "history",
      label: "History",
      eyebrow: "DE AICI, SPRE LUME",
      title: "Istoria nu se termină la granița Dobrogei.",
      text: "Seri despre epoci, locuri și teme din toată lumea, cu invitați și surse serioase, dar fără ton de curs obligatoriu.",
      items: ["Lost Cities","Everyday Life in…","Women History Forgot","Ports & Empires","History of Food","History of Medicine","Ancient Worlds","Objects that Changed History"]
    },
    {
      id: "myths",
      label: "Myths & Legends",
      eyebrow: "POVEȘTI VECHI · PRIVIRE CRITICĂ",
      title: "Mituri, legende și folclor — fără kitsch.",
      text: "Explorăm povești, credințe și tradiții din Dobrogea, Balcani și din restul lumii, separând cât putem de clar sursa istorică, folclorul și interpretarea modernă.",
      items: ["Myths of the Black Sea","Balkan Legends","Greek & Roman Myth","Folklore & Superstition","Monsters Across Cultures","Saints, Spirits & Local Lore","Urban Legends","How Myths Travel"]
    },
    {
      id: "books",
      label: "Books",
      eyebrow: "DIN RAFT, LA MASĂ",
      title: "Cărțile rămân una dintre porțile principale.",
      text: "Cluburi de carte, autori, lecturi liniștite și seri în care o carte devine pretext pentru o conversație bună.",
      items: ["Pocket Goat Book Clubs","Author’s Table","Quiet Reading Evenings","Write Together","One Book / One Question","Local Authors"]
    },
    {
      id: "cinematic",
      label: "Cinematic",
      eyebrow: "FILM · CONTEXT · CONVERSAȚIE",
      title: "Un film poate deschide aceeași ușă ca o carte.",
      text: "Filme, documentare și adaptări literare selectate pentru contextul lor cultural, cu drepturile de proiecție respectate și timp pentru discuția de după.",
      items: ["History on Screen","Literary Adaptations","Black Sea Documentary","European Cinema","One Film / One Question","Film + Guest"],
      href: "/cinematic"
    },
    {
      id: "languages",
      label: "Languages",
      eyebrow: "RO · EN · FR",
      title: "Nu toate serile trebuie să vorbească aceeași limbă.",
      text: "Unele ediții vor fi în română, altele în engleză sau franceză, în funcție de temă, invitat și public. Nu traducem mecanic fiecare eveniment în trei limbi.",
      items: ["History in English","Histoire en français","Language Tables","Culture Exchange Nights","Bilingual Book Club","Guest Evenings"]
    },
    {
      id: "community",
      label: "Community",
      eyebrow: "O VOCE, NU VOLANUL",
      title: "Comunitatea poate aduce idei. Pocket Goat le curatoriază.",
      text: "Majoritatea programului rămâne creat de Pocket Goat. O parte mai mică este deschisă propunerilor care se potrivesc cu cărțile, istoria, limbile, arta și viața orașului.",
      items: ["You bring the idea, we provide the table","Community Ideas Night","Meet the Profession","Creative Tables","Curated Open Mic","Student Nights"],
      href: "/community"
    }
  ],
  en: [
    {
      id: "dobrogea",
      label: "Dobrogea & Black Sea",
      eyebrow: "THE CULTURAL ANCHOR",
      title: "We begin here.",
      text: "The history of Dobrogea and Constanța is Pocket Goat’s central cultural thread: city, port, communities, archaeology, architecture, memory, the Black Sea and the stories held by this place.",
      items: ["Dobrogea Nights","Constanța Then & Now","History Café / Ask a Historian","Object Stories","Black Sea Worlds","Port Stories","Archaeology at the Table","Communities of Dobrogea"],
      href: "/dobrogea"
    },
    {
      id: "history",
      label: "History",
      eyebrow: "FROM HERE, OUTWARD",
      title: "History does not stop at Dobrogea’s border.",
      text: "Evenings about periods, places and questions from around the world, grounded in serious sources without feeling like compulsory lectures.",
      items: ["Lost Cities","Everyday Life in…","Women History Forgot","Ports & Empires","History of Food","History of Medicine","Ancient Worlds","Objects that Changed History"]
    },
    {
      id: "myths",
      label: "Myths & Legends",
      eyebrow: "OLD STORIES · CAREFUL CONTEXT",
      title: "Myths, legends and folklore — without the theme-park treatment.",
      text: "Stories, beliefs and traditions from Dobrogea, the Balkans and beyond, keeping documented history, folklore and modern interpretation as clear as possible.",
      items: ["Myths of the Black Sea","Balkan Legends","Greek & Roman Myth","Folklore & Superstition","Monsters Across Cultures","Saints, Spirits & Local Lore","Urban Legends","How Myths Travel"]
    },
    {
      id: "books",
      label: "Books",
      eyebrow: "FROM SHELF TO TABLE",
      title: "Books remain one of the main doors in.",
      text: "Book clubs, authors, quiet reading and evenings where a book becomes the reason for a worthwhile conversation.",
      items: ["Pocket Goat Book Clubs","Author’s Table","Quiet Reading Evenings","Write Together","One Book / One Question","Local Authors"]
    },
    {
      id: "cinematic",
      label: "Cinematic",
      eyebrow: "FILM · CONTEXT · CONVERSATION",
      title: "A film can open the same door as a book.",
      text: "Film, documentaries and literary adaptations chosen for cultural context, with screening rights respected and room for the conversation afterwards.",
      items: ["History on Screen","Literary Adaptations","Black Sea Documentary","European Cinema","One Film / One Question","Film + Guest"],
      href: "/cinematic"
    },
    {
      id: "languages",
      label: "Languages",
      eyebrow: "RO · EN · FR",
      title: "Not every evening has to speak the same language.",
      text: "Some editions will be in Romanian, some in English or French, depending on the subject, guest and audience. We will not mechanically translate every event into three languages.",
      items: ["History in English","Histoire en français","Language Tables","Culture Exchange Nights","Bilingual Book Club","Guest Evenings"]
    },
    {
      id: "community",
      label: "Community",
      eyebrow: "A VOICE, NOT THE WHEEL",
      title: "The community can bring ideas. Pocket Goat curates them.",
      text: "Most of the programme remains created by Pocket Goat. A smaller share is open to proposals that belong with books, history, languages, art and city life.",
      items: ["You bring the idea, we provide the table","Community Ideas Night","Meet the Profession","Creative Tables","Curated Open Mic","Student Nights"],
      href: "/community"
    }
  ]
} as const;

export function CultureProgramme({ locale }: { locale: Locale }) {
  const data = programme[locale];
  const [active, setActive] = useState<string>("dobrogea");
  const current = data.find(item => item.id === active) ?? data[0];

  return (
    <div className="culture-programme">
      <div className="culture-tabs" role="tablist" aria-label={locale === "ro" ? "Direcții culturale Pocket Goat" : "Pocket Goat cultural programme"}>
        {data.map(item => (
          <button
            type="button"
            role="tab"
            aria-selected={item.id === current.id}
            className={item.id === current.id ? "active" : ""}
            onClick={() => setActive(item.id)}
            key={item.id}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="culture-panel" role="tabpanel">
        <div className="culture-panel-copy">
          <p className="kicker">{current.eyebrow}</p>
          <h2>{current.title}</h2>
          <p>{current.text}</p>
          {"href" in current && current.href ? (
            <Link className="culture-inline-link" href={`/${locale}${current.href}`}>
              {locale === "ro" ? "Intră mai adânc" : "Go deeper"} <span>↗</span>
            </Link>
          ) : null}
        </div>
        <div className="culture-format-grid">
          {current.items.map((item, index) => (
            <div className="culture-format-card" key={item}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <strong>{item}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
