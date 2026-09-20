import Link from "next/link";
import { resolveLocale } from "@/lib/locale";
export default async function Page({params}:{params:Promise<{locale:string}>}){
 const locale=resolveLocale((await params).locale); const ro=locale==='ro';
 return <>
  <section className="subhero section-dark"><p className="eyebrow">VISIT POCKET GOAT</p><h1>{ro?"Ne vedem în Constanța.":"See you in Constanța."}</h1><p className="lede">{ro?"Adresa exactă, programul și data deschiderii vor apărea aici când spațiul este confirmat. Nu inventăm detalii înainte să existe.":"The exact address, opening hours and opening date will appear here once the space is confirmed. We do not invent details before they exist."}</p></section>
  <section className="contact-grid section-paper">
   <article><span>01</span><h2>{ro?"Vizită":"Visit"}</h2><p>Constanța, România</p><small>{ro?"ADRESĂ ÎN CURS DE CONFIRMARE":"ADDRESS TO BE CONFIRMED"}</small></article>
   <article><span>02</span><h2>{ro?"Program cultural":"Cultural programme"}</h2><p>{ro?"Calendarul public va avea înscrieri și detalii pentru fiecare eveniment.":"The public calendar will include registration and details for each event."}</p></article>
   <article><span>03</span><h2>{ro?"Scrie-ne":"Write to us"}</h2><p>{ro?"Canalele oficiale vor fi adăugate înainte de lansare.":"Official contact channels will be added before launch."}</p></article>
  </section>
  <section className="newsletter section-forest"><p className="kicker">LETTERS FROM POCKET GOAT</p><h2>{ro?"Un newsletter care nu te urmărește prin internet.":"A newsletter that does not follow you around the internet."}</h2><p>{ro?"Evenimente, cărți, seri noi și lucruri care chiar merită trimise. Formularul va fi activat în staging după alegerea furnizorului de newsletter.":"Events, books, new evenings and things actually worth sending. The form will be enabled in staging after the newsletter provider is selected."}</p><Link href={`/${locale}/culture`} className="section-link light">{ro?"Vezi lumea culturală":"Explore the cultural world"}<span>↗</span></Link></section>
 </>
}
