import Link from "next/link";
import { copy } from "@/lib/i18n";
import { PocketWall } from "@/components/PocketWall";
import { QuietTable } from "@/components/QuietTable";
import { SectionLink } from "@/components/SectionLink";
import { resolveLocale } from "@/lib/locale";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const locale = resolveLocale((await params).locale);
  const t = copy[locale];
  return (
    <>
      <section className="hero section-dark" id="top">
        <div className="hero-atmosphere" aria-hidden="true"><div className="lamp-glow"/><div className="shelf-lines"/><div className="sea-line"/></div>
        <div className="hero-copy">
          <p className="eyebrow">{t.heroEyebrow}</p>
          <h1>{t.heroTitle}</h1>
          <p className="lede">{t.heroText}</p>
          <Link href={`/${locale}/space`} className="primary-cta">{t.heroCta}<span>→</span></Link>
        </div>
        <div className="hero-quote">{t.manifesto}</div>
        <div className="scroll-cue" aria-hidden="true">SCROLL <span /></div>
      </section>

      <section className="arrival-grid section-paper" aria-label="Ways to arrive">
        {t.come.map(([title, text], i) => <article key={title} className="arrival-card"><span>0{i+1}</span><h2>{title}</h2><p>{text}</p></article>)}
      </section>

      <section className="pockets-section section-forest">
        <div className="section-heading"><p className="kicker">THE POCKETS</p><h2>{t.pocketsTitle}</h2><p>{t.pocketsText}</p><SectionLink href={`/${locale}/space#pockets`}>{locale === "ro" ? "Explorează toate cele opt" : "Explore all eight"}</SectionLink></div>
        <PocketWall />
      </section>

      <section className="quiet-section section-paper">
        <div className="section-heading"><p className="kicker">QUIET COMPANY</p><h2>{t.quietTitle}</h2><p>{t.quietText}</p></div>
        <QuietTable locale={locale} />
      </section>

      <section className="tea-section section-forest">
        <div className="tea-visual" aria-hidden="true"><div className="tea-steam s1"/><div className="tea-steam s2"/><div className="tea-steam s3"/><div className="tea-mug"><div className="mug-message">gentleness<br/>should be ordinary.</div></div><div className="cookie c1">g</div><div className="cookie c2">g</div></div>
        <div className="section-heading"><p className="kicker">CAFÉ & TEA</p><h2>{t.teaTitle}</h2><p>{t.teaText}</p><SectionLink href={`/${locale}/cafe`}>{locale === "ro" ? "La ceai" : "At the café"}</SectionLink></div>
      </section>

      <section className="hard-day section-ink">
        <div className="hard-day-card"><p className="kicker">HARD DAY TEA</p><h2>{t.hardTitle}</h2><p>{t.hardText}</p><span className="no-explanation">NO EXPLANATION REQUIRED.</span></div>
      </section>

      <section className="culture-section section-paper">
        <div className="section-heading"><p className="kicker">CULTURE</p><h2>{t.cultureTitle}</h2><p>{t.cultureText}</p></div>
        <div className="event-strip">
          {["Pocket Goat Talks","Dobrogea Nights","Author’s Table","Quiet Reading Evenings"].map((e,i)=><Link key={e} href={`/${locale}/culture`} className="event-card"><span>0{i+1}</span><strong>{e}</strong><em>{["IDEAS · PEOPLE","HISTORY · PLACE","BOOKS · VOICES","READ · TOGETHER"][i]}</em></Link>)}
        </div>
        <SectionLink href={`/${locale}/culture`}>{locale === "ro" ? "Descoperă programul" : "Explore the programme"}</SectionLink>
      </section>

      <section className="cinematic-section section-cinema">
        <div className="projector-beam" aria-hidden="true"/>
        <div className="film-frame"><span>POCKET GOAT</span><strong>CINEMATIC</strong><small>FILM · DOCUMENTARY · HISTORY · CONVERSATION</small></div>
        <div className="section-heading"><p className="kicker">POCKET GOAT CINEMATIC</p><h2>{t.cinemaTitle}</h2><p>{t.cinemaText}</p><SectionLink href={`/${locale}/cinematic`}>{locale === "ro" ? "Intră în Cinematic" : "Enter Cinematic"}</SectionLink></div>
      </section>

      <section className="dobrogea-section section-paper">
        <div className="archive-map" aria-hidden="true"><span className="coast c-a"/><span className="coast c-b"/><span className="archive-label l1">TOMIS</span><span className="archive-label l2">PORT</span><span className="archive-label l3">DOBROGEA</span></div>
        <div className="section-heading"><p className="kicker">ROOTED HERE</p><h2>{t.rootedTitle}</h2><p>{t.rootedText}</p><SectionLink href={`/${locale}/dobrogea`}>{locale === "ro" ? "Constanța & Dobrogea" : "Constanța & Dobrogea"}</SectionLink></div>
      </section>

      <section className="manifesto-section section-forest"><blockquote>{t.manifesto}</blockquote><p>{locale === "ro" ? "Liniștea este respectată. Oamenii care vin singuri nu sunt tratați ca o problemă de rezolvat. Grija apare în lucruri mici, nu în sloganuri mari." : "Quiet is respected. People who arrive alone are not treated as a problem to solve. Care appears in small things, not large slogans."}</p><SectionLink href={`/${locale}/community`}>{locale === "ro" ? "Kindness la Pocket Goat" : "Kindness at Pocket Goat"}</SectionLink></section>

      <section className="community-section section-paper"><p className="kicker">COMMUNITY</p><h2>{t.communityTitle}</h2><p>{t.communityText}</p><Link href={`/${locale}/community#bring-an-idea`} className="primary-cta dark">{locale === "ro" ? "Propune o masă" : "Propose a table"}<span>→</span></Link></section>

      <section className="closing-door section-dark"><div className="door-frame"><div className="door-glow"/><span>POCKET GOAT</span><small>CONSTANȚA</small></div><div><p className="closing-line">{t.footer}</p><Link href={`/${locale}/contact`} className="section-link light">{locale === "ro" ? "Vizitează Pocket Goat" : "Visit Pocket Goat"}<span>↗</span></Link></div></section>
    </>
  );
}
