import Link from "next/link";
import { Check } from "lucide-react";
import { site } from "@/lib/site";
import { cont, sect, h2, lead, lien, Kicker, BtnDoctolib } from "@/components/site/ui";

const gammes = [
  {
    nom: "Silver",
    classe: "Classe I · 100 % santé",
    resume: "Pris en charge à 100 %, sans reste à charge.",
    points: ["Pris en charge à 100 %", "Performance fiable", "Simplicité d'utilisation", "Compréhension dans le calme"],
    mise: true,
  },
  {
    nom: "Platinum",
    classe: "Classe II · sur devis",
    resume: "Devis détaillé gratuit, sans engagement.",
    points: ["Technologie avancée", "Rechargeable", "Confort et discrétion", "Compréhension dans le bruit"],
  },
  {
    nom: "Gold",
    classe: "Classe II · sur devis",
    resume: "Devis détaillé gratuit, sans engagement.",
    points: ["Haute performance", "Rechargeable", "Qualité sonore supérieure", "Réducteur de bruit"],
  },
];

export function Gammes() {
  return (
    <section className={`bg-white ${sect}`}>
      <div className={cont}>
        <Kicker>Trois gammes</Kicker>
        <h2 className={`${h2} max-w-[760px]`}>Du 100 % santé au haut de gamme, choisi avec vous après le bilan</h2>
        <p className={`${lead} mt-6 max-w-[640px]`}>
          Le <Link href="/bilan-auditif-cannes/" className="underline decoration-sable-400 decoration-2 underline-offset-[6px] hover:decoration-sable-700">bilan auditif gratuit</Link> vient d'abord, au centre, à Cannes. Ensuite seulement, Gabriel vous propose la gamme adaptée à votre audition et à votre quotidien, à essayer 30 jours.
        </p>

        <ul className="mt-12 grid md:mt-16 md:grid-cols-3">
          {gammes.map((g, i) => (
            <li
              key={g.nom}
              className={`flex flex-col border-t border-sable-200 py-8 md:border-t-0 md:py-2 ${i > 0 ? "md:border-l md:border-sable-200 md:pl-10" : ""} ${i < 2 ? "md:pr-10" : ""}`}
            >
              <p className="text-[13px] font-semibold uppercase tracking-[0.2em] text-sable-700">{g.classe}</p>
              <h3 className="mt-3 text-[32px] font-semibold leading-none tracking-[-0.02em] text-sable-950 md:text-[36px]">{g.nom}</h3>
              <p className="mt-3 text-[17px] text-sable-800 md:text-[18px]">{g.resume}</p>
              <ul className="mt-6 flex flex-col gap-3">
                {g.points.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-[17px] leading-snug text-sable-800">
                    <Check className="mt-0.5 size-[18px] shrink-0 text-sable-700" strokeWidth={2} aria-hidden="true" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-8 md:mt-auto md:pt-8">
                {g.mise ? (
                  <BtnDoctolib className="w-full max-w-[360px] md:w-auto" />
                ) : (
                  <a href={site.doctolib} className={lien}>Demander un devis gratuit</a>
                )}
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-10 max-w-[760px] text-[15px] leading-relaxed text-sable-700">
          Aides auditives : dispositifs médicaux délivrés sur prescription médicale. Garantie 4 ans sur les appareils. Aucun prix affiché en ligne : un devis détaillé et gratuit vous est remis au centre.
        </p>
      </div>
    </section>
  );
}
