import { CalendarDays, Ear, ShieldCheck } from "lucide-react";
import { cont } from "@/components/site/ui";
import { GoogleG } from "@/components/site/marques";

const reperes = [
  { valeur: "Gratuit", label: "Bilan auditif, sans engagement", Icone: Ear },
  { valeur: "30 jours", label: "d'essai avant toute décision", Icone: CalendarDays },
  { valeur: "0 €", label: "de reste à charge, 100 % santé", Icone: ShieldCheck },
  { valeur: "5,0", label: "18 avis de patients", Icone: null },
];

/* Quatre reperes en chiffres (v7, 09/09).
   Icone en trait fin au-dessus du chiffre, or de l'enseigne ; le G de Google reste en couleurs,
   c'est une marque et pas une icone. Mobile : grille deux par deux, sans filet interieur.
   Desktop : quatre colonnes separees par des filets. */
export function Bande() {
  return (
    <section aria-label="En bref" className="border-b border-sable-200 bg-white">
      <ul className={`${cont} grid grid-cols-2 gap-x-5 gap-y-7 py-8 md:grid-cols-4 md:gap-0 md:py-0`}>
        {reperes.map((r, i) => (
          <li
            key={r.valeur}
            className={["flex flex-col gap-1.5 md:gap-2 md:py-9", i > 0 ? "md:border-l md:border-sable-200 md:pl-8" : "", i < 3 ? "md:pr-8" : ""].join(" ")}
          >
            <span aria-hidden="true" className="flex h-6 items-center md:h-7">
              {r.Icone ? <r.Icone className="size-[22px] text-sable-400 md:size-6" strokeWidth={1.6} /> : <GoogleG className="size-[22px] md:size-6" />}
            </span>
            <span className="text-[22px] font-semibold leading-none tracking-[-0.02em] text-sable-950 md:text-[34px]">{r.valeur}</span>
            <span className="text-[15px] leading-snug text-sable-700 md:text-[16px]">{r.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
