import Link from "next/link";
import { Locale } from "@/lib/i18n";

export type Feature = { title: string; text: string; meta?: string };
export function EditorialPage({
  locale, kicker, title, intro, quote, features, closing, children
}: {
  locale: Locale; kicker: string; title: string; intro: string; quote?: string; features: Feature[]; closing?: string; children?: React.ReactNode
}) {
  return (
    <>
      <section className="subhero section-dark">
        <p className="eyebrow">{kicker}</p>
        <h1>{title}</h1>
        <p className="lede">{intro}</p>
        <span className="subhero-index">POCKET GOAT · CONSTANȚA</span>
      </section>
      {quote && <section className="editorial-quote section-forest"><blockquote>{quote}</blockquote></section>}
      <section className="editorial-grid section-paper">
        {features.map((f,i)=><article className="editorial-card" key={f.title}><span className="card-index">{String(i+1).padStart(2,"0")}</span>{f.meta && <small>{f.meta}</small>}<h2>{f.title}</h2><p>{f.text}</p></article>)}
      </section>
      {children}
      <section className="page-closing section-ink"><p>{closing ?? (locale === "ro" ? "Vino așa cum ești." : "Come as you are.")}</p><Link className="section-link light" href={`/${locale}/contact`}>{locale === "ro" ? "Planifică o vizită" : "Plan a visit"}<span>↗</span></Link></section>
    </>
  );
}
