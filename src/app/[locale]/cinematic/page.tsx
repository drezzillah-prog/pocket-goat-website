import { EditorialPage } from "@/components/EditorialPage";
import { resolveLocale } from "@/lib/locale";
export default async function Page({params}:{params:Promise<{locale:string}>}){
 const locale=resolveLocale((await params).locale); const ro=locale==='ro';
 return <EditorialPage locale={locale} kicker="POCKET GOAT CINEMATIC" title="Films worth staying to talk about." intro={ro?"Cinematic este salonul de film al Pocket Goat: proiecții selectate, context, drepturi de difuzare respectate și conversația care începe când ecranul se stinge.":"Cinematic is Pocket Goat’s film salon: selected screenings, context, public performance rights respected, and the conversation that begins when the screen goes dark."} quote={ro?"Nu popcorn și neon. Film, lumină joasă și o întrebare bună după generic.":"Not popcorn and neon. Film, low light and a good question after the credits."} features={[
 {title:ro?"Film & adaptări":"Film & adaptations",meta:"LITERATURE · CINEMA",text:ro?"Filme clasice, europene și adaptări literare care se potrivesc universului cultural Pocket Goat.":"Classic and European film, plus literary adaptations that fit Pocket Goat’s cultural world."},
 {title:ro?"Documentar":"Documentary",meta:"HISTORY · PLACE · PEOPLE",text:ro?"Documentare istorice, culturale și despre locuri, selectate pentru substanță, nu pentru zgomot.":"Historical, cultural and place-based documentaries selected for substance rather than noise."},
 {title:ro?"Seri tematice":"Themed evenings",meta:"CURATED PROGRAMMES",text:ro?"Un film poate sta lângă o carte, un invitat, o arhivă sau o conversație despre Constanța și Dobrogea.":"A film can sit beside a book, a guest, an archive or a conversation about Constanța and Dobrogea."},
 {title:ro?"Drepturi de difuzare":"Screening rights",meta:"NON-NEGOTIABLE",text:ro?"Orice proiecție publică este organizată numai cu drepturile și licențele necesare.":"Every public screening is organised only with the necessary rights and licences."}
 ]}/>
}
