import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const questions = [
  {
    q: "Pourquoi faire un bilan auditif gratuit chez A+ Audition ?",
    r: "Un bilan auditif gratuit permet de détecter tôt une gêne auditive et de bénéficier des conseils d'un audioprothésiste diplômé d'État pour trouver la solution adaptée. Il est réalisé au centre, en cabine, sans engagement.",
  },
  {
    q: "Quels types d'appareils auditifs propose A+ Audition ?",
    r: "Des appareils rechargeables, discrets et performants, adaptés à tous les styles de vie. Les appareils de classe I sont pris en charge à 100 % dans le cadre du 100 % santé ; les appareils de classe II font l'objet d'un devis détaillé gratuit.",
  },
  {
    q: "Comment fonctionne l'essai de 30 jours ?",
    r: "Si un appareil est conseillé après le bilan, vous l'essayez chez vous pendant 30 jours pour vérifier le confort, l'efficacité et l'adaptation à votre quotidien, sans engagement.",
  },
  {
    q: "Pourquoi choisir A+ Audition comme audioprothésiste ?",
    r: "Vous êtes reçu par la même personne du bilan au dernier réglage, dans un centre de quartier à deux pas de la Croisette, avec un suivi sur mesure et des solutions auditives performantes.",
  },
];

export function Faq() {
  return (
    <section className="border-t border-sable-200 bg-white py-14 md:py-24">
      <div className="mx-auto w-[min(860px,100%-48px)]">
        <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.08em] text-sable-700">Questions fréquentes</p>
        <h2 className="mb-8 text-balance text-[clamp(28px,6.5vw,34px)] font-bold leading-[1.15] md:text-[40px]">
          Des questions sur votre audition ?
        </h2>
        <Accordion className="w-full">
          {questions.map((x, i) => (
            <AccordionItem key={x.q} value={`q${i}`} className="border-b border-sable-200">
              <AccordionTrigger className="py-4 text-left text-lg font-semibold md:text-xl">{x.q}</AccordionTrigger>
              <AccordionContent className="pb-5 text-lg text-muted-foreground">{x.r}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
