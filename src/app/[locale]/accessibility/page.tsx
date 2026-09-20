import { EditorialPage } from "@/components/EditorialPage";
import { resolveLocale } from "@/lib/locale";
export default async function Page({params}:{params:Promise<{locale:string}>}){
 const locale=resolveLocale((await params).locale); const ro=locale==='ro';
 return <EditorialPage locale={locale} kicker="ACCESSIBILITY" title={ro?"Frumos trebuie să însemne și utilizabil.":"Beautiful must also mean usable."} intro={ro?"Accesibilitatea nu este o pagină de conformitate adăugată la final. Este o cerință pentru spațiul fizic, serviciu și website.":"Accessibility is not a compliance page added at the end. It is a requirement for the physical space, service and website."} features={[
 {title:ro?"Website accesibil":"Accessible website",meta:"WCAG-MINDED",text:ro?"Contrast real, focus vizibil, semantică corectă, tastatură, reduced motion și texte care nu depind de efecte vizuale pentru sens.":"Real contrast, visible focus, correct semantics, keyboard support, reduced motion and text that does not depend on visual effects for meaning."},
 {title:ro?"Informații înainte de vizită":"Know before you visit",meta:"PRACTICAL DETAILS",text:ro?"Vom publica accesul, obstacolele, toaleta, seating-ul, nivelul sonor și orice limitare reală, nu doar formula „suntem accesibili”.":"We will publish access, obstacles, toilet, seating, sound level and any real limitation, not merely say ‘we are accessible’."},
 {title:ro?"Mai multe moduri de a sta":"Different ways to sit",meta:"CHOICE",text:ro?"Pocket-uri, mese obișnuite și masa centrală oferă niveluri diferite de intimitate și socializare.":"Pockets, regular tables and the central table offer different levels of privacy and social contact."},
 {title:ro?"Personal care nu presupune":"Staff who do not assume",meta:"HOSPITALITY",text:ro?"Ajutorul se oferă cu respect și fără infantilizare. Clientul decide ce îi este util.":"Help is offered respectfully and without infantilisation. The guest decides what is useful."}
 ]}/>
}
