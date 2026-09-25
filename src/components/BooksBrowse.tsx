"use client";

import Image from "next/image";
import { useState } from "react";

type Locale = "ro" | "en";

const groups = {
  ro: [
    {
      id: "fiction",
      label: "Ficțiune",
      note: "De la romane clasice la lumi complet inventate.",
      genres: ["Literatură contemporană","Literatură clasică","Literary fiction","Ficțiune istorică","Fantasy","Dark fantasy","Science-fiction","Speculative fiction","Dystopian","Mystery","Crime","Thriller","Horror","Gothic","Romance","Short stories","Dramaturgie"]
    },
    {
      id: "ideas",
      label: "Idei & societate",
      note: "Cărți care explică, contrazic, pun întrebări sau schimbă perspectiva.",
      genres: ["Istorie","Arheologie","Filosofie","Psihologie","Sociologie","Antropologie","Politică & societate","Economie","Business","Știință","Tehnologie","Natură & mediu","Religie & spiritualitate"]
    },
    {
      id: "arts",
      label: "Arte & cultură",
      note: "Pentru ochi, urechi și minți curioase.",
      genres: ["Artă","Istoria artei","Design","Arhitectură","Fotografie","Film","Teatru","Muzică","Cultură vizuală","Eseu cultural","Mitologie","Folclor"]
    },
    {
      id: "lives",
      label: "Vieți & memorii",
      note: "Oameni reali, vieți reale și felul în care sunt povestite.",
      genres: ["Biografii","Autobiografii","Memorii","Jurnale","Scrisori","Reportaj","True crime","Eseu personal"]
    },
    {
      id: "places",
      label: "Locuri & limbi",
      note: "Cărți care te poartă undeva — geografic sau lingvistic.",
      genres: ["Travel writing","Geografie","Istorie locală","Constanța","Dobrogea","Marea Neagră","Europa","Limbi & lingvistică","Literatură în limba originală"]
    },
    {
      id: "young",
      label: "Tineri & copii",
      note: "Alese cu aceeași grijă ca orice alt raft.",
      genres: ["Young adult","Middle grade","Copii","Albume ilustrate","Basme","Aventură","Fantasy pentru tineri","Istorie pentru tineri","Știință pentru copii"]
    },
    {
      id: "special",
      label: "Rafturi speciale",
      note: "Selecții care se schimbă odată cu noi, anotimpul și conversațiile din casă.",
      genres: ["Ce citim acum","Pocket Goat recomandă","Cărți la care ne întoarcem","Dacă ți-a plăcut…","Pentru o zi grea","Pentru o minte prea activă","Descoperiri mici","Autori locali","Raftul Dobrogea","One strange little shelf"]
    }
  ],
  en: [
    {
      id: "fiction",
      label: "Fiction",
      note: "From familiar classics to entirely invented worlds.",
      genres: ["Contemporary fiction","Classics","Literary fiction","Historical fiction","Fantasy","Dark fantasy","Science fiction","Speculative fiction","Dystopian","Mystery","Crime","Thriller","Horror","Gothic","Romance","Short stories","Drama"]
    },
    {
      id: "ideas",
      label: "Ideas & society",
      note: "Books that explain, challenge, question or shift the view.",
      genres: ["History","Archaeology","Philosophy","Psychology","Sociology","Anthropology","Politics & society","Economics","Business","Science","Technology","Nature & environment","Religion & spirituality"]
    },
    {
      id: "arts",
      label: "Arts & culture",
      note: "For curious eyes, ears and minds.",
      genres: ["Art","Art history","Design","Architecture","Photography","Film","Theatre","Music","Visual culture","Cultural essays","Mythology","Folklore"]
    },
    {
      id: "lives",
      label: "Lives & memoir",
      note: "Real people, real lives, and the ways we tell them.",
      genres: ["Biography","Autobiography","Memoir","Diaries","Letters","Long-form journalism","True crime","Personal essays"]
    },
    {
      id: "places",
      label: "Places & languages",
      note: "Books that take you somewhere — geographically or linguistically.",
      genres: ["Travel writing","Geography","Local history","Constanța","Dobrogea","Black Sea","Europe","Languages & linguistics","Books in the original language"]
    },
    {
      id: "young",
      label: "Young readers",
      note: "Chosen with the same care as every other shelf.",
      genres: ["Young adult","Middle grade","Children","Picture books","Fairy tales","Adventure","Young fantasy","History for younger readers","Science for children"]
    },
    {
      id: "special",
      label: "Special shelves",
      note: "Selections that change with us, the season and the conversations in the room.",
      genres: ["What we're reading","Pocket Goat recommends","Books we return to","If you loved…","For a hard day","For a busy mind","Small discoveries","Local authors","The Dobrogea shelf","One strange little shelf"]
    }
  ]
} as const;

export function BooksBrowse({ locale }: { locale: Locale }) {
  const data = groups[locale];
  const [active, setActive] = useState<string>(data[0].id);
  const current = data.find(group => group.id === active) ?? data[0];

  return (
    <div className="books-browser">
      <div className="books-browser-tabs" role="tablist" aria-label={locale === "ro" ? "Categorii de cărți" : "Book categories"}>
        {data.map(group => (
          <button
            key={group.id}
            type="button"
            role="tab"
            aria-selected={current.id === group.id}
            className={current.id === group.id ? "active" : ""}
            onClick={() => setActive(group.id)}
          >
            {group.label}
          </button>
        ))}
      </div>

      <div className="books-browser-panel" role="tabpanel">
        <div className="books-browser-copy">
          <p className="kicker">{locale === "ro" ? "ALEGE UN PUNCT DE PORNIRE" : "PICK A WAY IN"}</p>
          <h3>{current.label}</h3>
          <p>{current.note}</p>
          <div className="genre-chips">
            {current.genres.map(genre => <span key={genre}>{genre}</span>)}
          </div>
        </div>

        <figure className="books-stack-photo">
          <Image
            src="/images/pocket-goat/books/book-stack-real.webp"
            alt={locale === "ro" ? "Teanc de cărți reale din domenii diferite" : "A stack of real books from different subjects"}
            width={1000}
            height={750}
            sizes="(max-width: 900px) 100vw, 38vw"
            unoptimized
          />
          <figcaption>
            {locale === "ro"
              ? "Beletristică, istorie, artă, economie, idei — nu există un singur fel de cititor Pocket Goat."
              : "Fiction, history, art, economics, ideas — there is no single kind of Pocket Goat reader."}
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
