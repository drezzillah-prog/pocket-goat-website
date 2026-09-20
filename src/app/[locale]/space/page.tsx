import { EditorialPage } from "@/components/EditorialPage";
import { PocketWall } from "@/components/PocketWall";
import { QuietTable } from "@/components/QuietTable";
import { resolveLocale } from "@/lib/locale";
export default async function Page({params}:{params:Promise<{locale:string}>}){
 const locale=resolveLocale((await params).locale); const ro=locale==='ro';
 return <EditorialPage locale={locale} kicker="THE SPACE" title={ro?"Fă-ți loc în lume, pentru o vreme.":"Make a little room in the world, for a while."} intro={ro?"Pocket Goat este construit în jurul mai multor moduri de a sta: retras, împreună în liniște, deschis unei conversații sau la o masă cu oamenii cu care ai venit.":"Pocket Goat is built around different ways of being: tucked away, together in quiet, open to conversation, or at a table with the people you came with."} quote={ro?"Nu există un singur mod corect de a fi într-un spațiu comunitar.":"There is no single correct way to be in a community space."} features={[
  {title:"The Pockets",meta:"8 READING ALCOVES",text:ro?"Opt nișe individuale sau semi-private, cu lumină de citit, suprafață utilă, charging și intimitate reală.":"Eight individual or semi-private alcoves with reading light, a useful surface, charging and genuine privacy."},
  {title:"The Root Table",meta:"CENTRAL TABLE",text:ro?"O masă ovală din walnut, cu detalii inspirate de rădăcini și semnale discrete pentru Quiet Company sau Open to Conversation.":"An oval walnut table, with root-inspired detailing and discreet signals for Quiet Company or Open to Conversation."},
  {title:ro?"Mese pentru 2–4":"Tables for 2–4",meta:"SMALL GROUPS",text:ro?"Pentru prieteni, întâlniri și grupuri mici care vor să stea împreună fără să transforme locul într-o sală de evenimente.":"For friends, dates and small groups who want to sit together without turning the room into an event hall."},
  {title:ro?"Lumină care te ajută să rămâi":"Light that lets you stay",meta:"LAYERED LIGHT",text:ro?"Lumină ambientală caldă, completată de lămpi individuale. Atmosferă joasă, dar niciodată întuneric decorativ care face cititul imposibil.":"Warm ambient light supported by individual lamps. Low and intimate, but never decorative darkness that makes reading impossible."}
 ]}>
   <section id="pockets" className="deep-dive section-forest"><div className="section-heading"><p className="kicker">THE POCKETS</p><h2>{ro?"Opt locuri. Opt mici retrageri.":"Eight places. Eight small retreats."}</h2><p>{ro?"Fern, Moon, Oak, Fox, Sage, Map, Poet și Dreamer sunt nume de lucru pentru o familie de nișe care nu trebuie să fie identice ca personalitate, dar trebuie să fie egale ca funcționalitate și confort.":"Fern, Moon, Oak, Fox, Sage, Map, Poet and Dreamer are working names for a family of alcoves that need not feel identical, but must be equal in function and comfort."}</p></div><PocketWall/></section>
   <section className="deep-dive section-paper"><div className="section-heading"><p className="kicker">THE ROOT TABLE</p><h2>{ro?"Aproape de oameni, în termenii tăi.":"Near people, on your terms."}</h2></div><QuietTable locale={locale}/></section>
 </EditorialPage>
}
