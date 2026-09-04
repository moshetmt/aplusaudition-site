const etapes = [
  {
    titre: "Bilan auditif gratuit",
    texte: "Un test complet au centre, en cabine, sans engagement. Gabriel vous explique le résultat en clair.",
  },
  {
    titre: "Essai 30 jours",
    texte: "Si un appareil est conseillé, vous l'essayez chez vous pendant 30 jours avant toute décision.",
  },
  {
    titre: "Suivi et réglages",
    texte: "Des rendez-vous réguliers pour ajuster vos appareils à votre quotidien, aussi longtemps que nécessaire.",
  },
];

export function Parcours() {
  return (
    <section id="parcours" className="border-t border-sable-200 bg-white py-14 md:py-24">
      <div className="mx-auto w-[min(1200px,100%-48px)]">
        <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.08em] text-sable-700">Votre parcours</p>
        <h2 className="mb-10 max-w-[640px] text-balance text-[clamp(28px,6.5vw,34px)] font-bold leading-[1.15] md:mb-14 md:text-[40px]">
          Trois étapes, toujours avec la même personne
        </h2>

        <ol className="grid gap-8 md:grid-cols-3 md:gap-10">
          {etapes.map((e, i) => (
            <li key={e.titre} className="flex gap-5 md:block">
              <span
                className="grid size-12 shrink-0 place-items-center rounded-full bg-sable-400 text-xl font-bold text-sable-900 md:mb-5 md:size-14 md:text-2xl"
                aria-hidden="true"
              >
                {i + 1}
              </span>
              <div>
                <h3 className="mb-1.5 text-xl font-bold md:text-2xl">{e.titre}</h3>
                <p className="text-muted-foreground md:text-lg">{e.texte}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
