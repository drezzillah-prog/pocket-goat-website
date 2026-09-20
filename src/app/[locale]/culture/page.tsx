import { EditorialPage } from "@/components/EditorialPage";
import { resolveLocale } from "@/lib/locale";
const formats=["Pocket Goat Talks","Dobrogea Nights","Pocket Goat Book Clubs","Author’s Table","Language Tables","Culture Exchange Nights","Quiet Reading Evenings","Write Together","History Café / Ask a Historian","Object Stories","Constanța Then & Now","Mini-exhibitions","Creative Tables","Board Games & Chess","Curated Open Mic","Student Nights","Community Ideas Night","Sunday Slow Culture","After Hours: One Question","Meet the Profession"];
export default async function Page({params}:{params:Promise<{locale:string}>}){
 const locale=resolveLocale((await params).locale); const ro=locale==='ro';
 return <EditorialPage locale={locale} kicker="CULTURE" title={ro?"Nu un calendar lipit de o cafenea. O parte din motivul pentru care există locul.":"Not a calendar attached to a café. Part of the reason the place exists."} intro={ro?"Programul Pocket Goat combină cărți, istorie, film, oraș, limbi, profesii, scris și seri în care oamenii pot sta împreună în jurul unei idei care merită timp.":"Pocket Goat’s programme combines books, history, film, place, languages, professions, writing and evenings where people can gather around an idea worth time."} quote={ro?"Majoritatea programului este curatoriat de Pocket Goat. Comunitatea are o voce, nu preia volanul.":"Most of the programme is curated by Pocket Goat. The community has a voice without taking over the wheel."} features={[
  {title:"Pocket Goat Curated",meta:"THE CORE",text:ro?"Serile și formatele care definesc identitatea culturală Pocket Goat, construite și curatoriate de noi.":"The evenings and formats that define Pocket Goat’s cultural identity, built and curated by us."},
  {title:"Pocket Goat Guest",meta:"INVITED VOICES",text:ro?"Autori, istorici, artiști, geografi, profesioniști și oameni care au ceva substanțial de adus la masă.":"Authors, historians, artists, geographers, professionals and people with something substantial to bring to the table."},
  {title:"Pocket Goat Community",meta:"A SMALLER SHARE",text:ro?"Un spațiu atent curatoriat pentru idei venite de la constănțeni, fără să devenim event hall.":"A carefully curated space for ideas from Constanța locals, without becoming an event hall."}
 ]}>
 <section className="format-section section-paper"><p className="kicker">PROGRAMME LIBRARY</p><div className="format-cloud">{formats.map((f,i)=><div className="format-pill" key={f}><span>{String(i+1).padStart(2,"0")}</span>{f}</div>)}</div></section>
 </EditorialPage>
}
