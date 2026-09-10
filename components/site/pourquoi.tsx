import { cont, sect, h2, h3, Kicker } from "@/components/site/ui";

const raisons = [
  {
    titre: "Un accompagnement vraiment personnalisé",
    texte: "Un seul interlocuteur pour votre bilan, le choix de vos appareils et votre suivi.",
  },
  {
    titre: "30 jours pour essayer",
    texte: "Prenez le temps de découvrir votre nouvelle audition avant de vous décider.",
  },
  {
    titre: "Un centre indépendant à Cannes",
    texte: "Audioprothésiste diplômé d'État et indépendant, installé boulevard Alexandre III, à deux pas de la Croisette.",
  },
];

/* Trois raisons, juste apres la bande de reperes (demande du client, 09/09).
   Fond sable clair pour separer trois sections blanches d'affilee, sans ombre ni degrade.
   Mobile : trois blocs a filets. Desktop : trois colonnes. */
export function Pourquoi() {
  return (
    <section className={`bg-sable-50 ${sect}`}>
      <div className={cont}>
        <Kicker>Pourquoi nous</Kicker>
        <h2 className={h2}>Pourquoi choisir A+ Audition ?</h2>
        <dl className="mt-10 md:mt-14 md:grid md:grid-cols-3 md:gap-10">
          {raisons.map((r) => (
            <div key={r.titre} className="border-t border-sable-200 py-6 md:border-0 md:py-0">
              <dt className={`${h3} mb-2`}>{r.titre}</dt>
              <dd className="text-[17px] leading-snug text-sable-800 md:text-[18px] md:leading-relaxed">{r.texte}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
