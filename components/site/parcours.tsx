import { cont, sect, h2, h3, Kicker } from "@/components/site/ui";

const etapes = [
  { titre: "Bilan auditif gratuit", texte: "Un test complet au centre, en cabine, sans engagement. Gabriel vous explique le résultat en clair." },
  { titre: "Essai 30 jours", texte: "Si un appareil est conseillé, vous l'essayez chez vous pendant 30 jours avant toute décision." },
  { titre: "Suivi et réglages", texte: "Des rendez-vous réguliers pour ajuster vos appareils à votre quotidien, aussi longtemps que nécessaire." },
];

export function Parcours() {
  return (
    <section id="parcours" className={`border-t border-sable-200 bg-white ${sect}`}>
      <div className={cont}>
        <Kicker>Votre parcours</Kicker>
        <h2 className={`${h2} max-w-[640px]`}>Trois étapes, toujours avec la même personne</h2>
        <ol className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-10">
          {etapes.map((e, i) => (
            <li key={e.titre} className="border-t border-sable-200 pt-6">
              <p className="text-[13px] font-semibold tracking-[0.2em] text-sable-700" aria-hidden="true">0{i + 1}</p>
              <h3 className={`${h3} mt-4`}>{e.titre}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-sable-800 md:text-[18px]">{e.texte}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
