import { EditorialPage } from "@/components/EditorialPage";
import { resolveLocale } from "@/lib/locale";
export default async function Page({params}:{params:Promise<{locale:string}>}){
 const locale=resolveLocale((await params).locale); const ro=locale==='ro';
 return <EditorialPage locale={locale} kicker="CAFÉ & TEA" title={ro?"Ceai pentru stat. Cafea pentru rămas.":"Tea for staying. Coffee for lingering."} intro={ro?"Nu construim un meniu gigantic. Construim o selecție bună de ceaiuri, cafea și lucruri mici de mâncat care au sens lângă o carte și într-o seară lungă.":"We are not building a giant menu. We are building a considered selection of tea, coffee and small things to eat that make sense beside a book and through a long evening."} quote="Tea made to stay awhile." features={[
 {title:ro?"Ceaiul are locul principal":"Tea takes the lead",meta:"TEA ROOM",text:ro?"Ceaiuri negre, verzi, plante, infuzii și câteva selecții sezoniere. Clar, frumos, fără naming fantasy care ascunde ce bei.":"Black, green and herbal teas, infusions and a small seasonal selection. Clear, beautiful, without fantasy naming that hides what you are drinking."},
 {title:ro?"Cafea fără teatru":"Coffee without theatre",meta:"COFFEE",text:ro?"Un meniu de cafea suficient de bun și suficient de simplu încât să nu concureze cu motivul pentru care ai venit.":"A coffee menu good enough and simple enough not to compete with the reason you came."},
 {title:ro?"Lucruri mici":"Small things",meta:"COOKIES · CAKE · SAVOURY",text:ro?"Biscuiți, prăjituri și câteva lucruri sărate potrivite atmosferei — mai degrabă atent alese decât multe.":"Cookies, cakes and a few savoury things suited to the room — considered rather than numerous."},
 {title:"Hard Day Tea",meta:"GENTLENESS, ORDINARY",text:ro?"Ai avut o zi grea? Un ceai simplu din partea casei. Nu este campanie, nu este produs premium, nu trebuie explicat.":"Had a hard day? A simple tea on the house. Not a campaign, not a premium product, nothing to explain."}
 ]} closing={ro?"O cană bună. O lampă aprinsă. Destul.":"A good mug. A lamp on. Enough."}/>
}
