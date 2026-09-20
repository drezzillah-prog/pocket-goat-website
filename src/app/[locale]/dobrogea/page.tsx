import { EditorialPage } from "@/components/EditorialPage";
import { resolveLocale } from "@/lib/locale";
export default async function Page({params}:{params:Promise<{locale:string}>}){
 const locale=resolveLocale((await params).locale); const ro=locale==='ro';
 return <EditorialPage locale={locale} kicker="CONSTANȚA · DOBROGEA" title={ro?"Un loc care știe unde se află.":"A place that knows where it is."} intro={ro?"Pocket Goat nu folosește Constanța ca adresă și Dobrogea ca decor. Istoria, portul, comunitățile, literatura, arhitectura, hărțile și memoria locului intră în program și în limbajul editorial.":"Pocket Goat does not use Constanța as an address and Dobrogea as décor. History, the port, communities, literature, architecture, maps and local memory enter both the programme and editorial language."} quote="Black Sea at dusk, not nautical kitsch." features={[
 {title:"Dobrogea Nights",meta:"HISTORY · GEOGRAPHY · CULTURE",text:ro?"Seri în română și engleză cu istorici, geografi și invitați care pot vorbi despre Dobrogea cu rigoare și poveste.":"Evenings in Romanian and English with historians, geographers and guests who can speak about Dobrogea with both rigour and narrative."},
 {title:"Constanța Then & Now",meta:"CITY MEMORY",text:ro?"Arhive, fotografii, hărți și fragmente urbane care pun orașul de azi lângă straturile lui istorice.":"Archives, photographs, maps and urban fragments placing today’s city beside its historical layers."},
 {title:"Object Stories",meta:"SMALL OBJECTS · LARGE HISTORIES",text:ro?"Obiecte, documente și detalii aparent mici folosite ca intrări în istorii mai mari.":"Objects, documents and seemingly small details used as entries into larger histories."},
 {title:ro?"Marea, fără recuzită marină":"The sea, without nautical props",meta:"ATMOSPHERE",text:ro?"Marea Neagră apare ca lumină, culoare, memorie și geografie — nu ca ancore, scoici și plase.":"The Black Sea appears as light, colour, memory and geography — not anchors, shells and nets."}
 ]}/>
}
