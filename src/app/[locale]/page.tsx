import Link from "next/link";
import { copy } from "@/lib/i18n";
import { PocketWall } from "@/components/PocketWall";
import { QuietTable } from "@/components/QuietTable";
import { SectionLink } from "@/components/SectionLink";
import { resolveLocale } from "@/lib/locale";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const t = copy[locale];
  const ro = locale === "ro";

  return (
    <>
      <section className="hero section-dark" id="top">
        <div className="hero-atmosphere" aria-hidden="true">
          <div className="lamp-glow"/>
          <div className="shelf-lines"/>
          <div className="sea-line"/>
          <div className="hero-stamp"><span>CONSTANȚA</span><small>DOBROGEA · BLACK SEA</small></div>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="lede">{t.heroText}</p>
          <Link href={`/${locale}/space`} className="primary-cta">{t.heroCta}<span>→</span></Link>
        </div>
        <div className="hero-quote">{t.manifesto}</div>
        <div className="scroll-cue" aria-hidden="true">SCROLL <span /></div>
      </section>

      <section className="welcome-section section-paper">
        <div className="welcome-copy">
          <p className="kicker">{ro ? "CUM VREI SĂ FIE SEARA TA?" : "WHAT KIND OF EVENING DO YOU NEED?"}</p>
          <h2>{t.welcomeTitle}</h2>
          <p>{t.welcomeText}</p>
        </div>
        <div className="welcome-options">
          {t.come.map(([title, text], i) => (
            <article key={title} className="welcome-card">
              <span>0{i + 1}</span>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="pockets-section section-forest">
        <div className="section-heading">
          <p className="kicker">{ro ? "UN COLȚ DOAR AL TĂU" : "A CORNER OF YOUR OWN"}</p>
          <h2>{t.pocketsTitle}</h2>
          <p>{t.pocketsText}</p>
          <SectionLink href={`/${locale}/space#pockets`}>{ro ? "Vezi toate cele opt Pockets" : "See all eight Pockets"}</SectionLink>
        </div>
        <PocketWall />
      </section>

      <section className="quiet-section section-paper">
        <div className="section-heading">
          <p className="kicker">QUIET COMPANY</p>
          <h2>{t.quietTitle}</h2>
          <p>{t.quietText}</p>
        </div>
        <QuietTable locale={locale} />
      </section>

      <section className="tea-section section-forest">
        <div className="tea-visual" aria-hidden="true">
          <div className="tea-steam s1"/><div className="tea-steam s2"/><div className="tea-steam s3"/>
          <div className="tea-mug"><div className="mug-message">gentleness<br/>should be ordinary.</div></div>
          <div className="cookie c1">g</div><div className="cookie c2">g</div>
        </div>
        <div className="section-heading">
          <p className="kicker">{ro ? "CEAI, CAFEA ȘI LUCRURI MICI" : "TEA, COFFEE & SMALL THINGS"}</p>
          <h2>{t.teaTitle}</h2>
          <p>{t.teaText}</p>
          <SectionLink href={`/${locale}/cafe`}>{ro ? "Vezi ce bem" : "See what we pour"}</SectionLink>

          <aside className="hard-day-note">
            <div className="hard-day-seal" aria-hidden="true"><span>PG</span><small>HOUSE TEA</small></div>
            <div>
              <small>{ro ? "UN GEST MIC" : "A SMALL GESTURE"}</small>
              <h3>{t.hardTitle}</h3>
              <p>{t.hardText}</p>
              <strong>{ro ? "Atât e suficient." : "That is enough."}</strong>
            </div>
          </aside>
        </div>
      </section>

      <section className="culture-section section-paper">
        <div className="section-heading">
          <p className="kicker">{ro ? "CÂND AVEM CHEF SĂ VORBIM" : "WHEN WE FEEL LIKE TALKING"}</p>
          <h2>{t.cultureTitle}</h2>
          <p>{t.cultureText}</p>
        </div>
        <div className="event-strip">
          {["Pocket Goat Talks","Dobrogea Nights","Author’s Table","Quiet Reading Evenings"].map((e,i)=>
            <Link key={e} href={`/${locale}/culture`} className="event-card">
              <span>0{i+1}</span><strong>{e}</strong>
              <em>{["IDEAS · PEOPLE","HISTORY · PLACE","BOOKS · VOICES","READ · TOGETHER"][i]}</em>
            </Link>
          )}
        </div>
        <SectionLink href={`/${locale}/culture`}>{ro ? "Vezi ce se întâmplă aici" : "See what happens here"}</SectionLink>
      </section>

      <section className="cinematic-section section-cinema">
        <div className="projector-beam" aria-hidden="true"/>
        <div className="film-frame"><span>POCKET GOAT</span><strong>CINEMATIC</strong><small>FILM · DOCUMENTARY · HISTORY · CONVERSATION</small></div>
        <div className="section-heading">
          <p className="kicker">POCKET GOAT CINEMATIC</p>
          <h2>{t.cinemaTitle}</h2>
          <p>{t.cinemaText}</p>
          <SectionLink href={`/${locale}/cinematic`}>{ro ? "Vezi Cinematic" : "Explore Cinematic"}</SectionLink>
        </div>
      </section>

      <section className="dobrogea-section section-paper">
        <div className="archive-map" aria-hidden="true">
          <span className="archive-fold f1"/><span className="archive-fold f2"/>
          <span className="coast c-a"/><span className="coast c-b"/>
          <span className="archive-label l1">TOMIS</span><span className="archive-label l2">PORT</span>
          <span className="archive-label l3">DOBROGEA</span><span className="archive-label l4">PONTUS EUXINUS</span>
          <span className="archive-pin">●</span>
          <div className="archive-note"><small>BLACK SEA / MAREA NEAGRĂ</small><strong>Constanța</strong><span>memory · port · city · stories</span></div>
        </div>
        <div className="section-heading">
          <p className="kicker">{ro ? "DE AICI PORNIM" : "THIS IS WHERE WE BEGIN"}</p>
          <h2>{t.rootedTitle}</h2>
          <p>{t.rootedText}</p>
          <SectionLink href={`/${locale}/dobrogea`}>Constanța & Dobrogea</SectionLink>
        </div>
      </section>

      <section className="manifesto-section section-forest">
        <p className="kicker">{ro ? "LUCRURILE MICI CONTEAZĂ" : "SMALL THINGS MATTER"}</p>
        <blockquote>{t.manifesto}</blockquote>
        <p>{t.kindnessText}</p>
        <SectionLink href={`/${locale}/community`}>{ro ? "Cum arată asta la Pocket Goat" : "What that looks like at Pocket Goat"}</SectionLink>
      </section>

      <section className="community-section section-paper">
        <p className="kicker">{ro ? "ȘI LOCUL POATE ASCULTA" : "THE PLACE CAN LISTEN TOO"}</p>
        <h2>{t.communityTitle}</h2>
        <p>{t.communityText}</p>
        <Link href={`/${locale}/community#bring-an-idea`} className="primary-cta dark">{ro ? "Spune-ne ideea" : "Tell us the idea"}<span>→</span></Link>
      </section>

      <section className="closing-door section-dark">
        <div className="door-frame"><div className="door-glow"/><span>POCKET GOAT</span><small>CONSTANȚA</small></div>
        <div><p className="closing-line">{t.footer}</p><Link href={`/${locale}/contact`} className="section-link light">{ro ? "Hai să ne găsești" : "Come find us"}<span>↗</span></Link></div>
      </section>
    </>
  );
}
