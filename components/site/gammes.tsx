import { CalendarDays, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const gammes = [
  {
    nom: "Silver",
    classe: "Classe I · 100 % santé",
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
    <section className="bg-white py-14 md:py-24">
      <div className="mx-auto w-[min(1200px,100%-48px)]">
        <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.08em] text-sable-700">Trois gammes</p>
        <h2 className="mb-4 max-w-[700px] text-balance text-[clamp(28px,6.5vw,34px)] font-bold leading-[1.15] md:text-[40px]">
          Du 100 % santé au haut de gamme, choisi avec vous après le bilan
        </h2>
        <p className="mb-10 max-w-[640px] text-muted-foreground md:text-xl">
          Le bilan gratuit vient d'abord. Ensuite seulement, Gabriel vous propose la gamme adaptée à votre audition et à votre quotidien, à essayer 30 jours.
        </p>

        <ul className="grid gap-5 md:grid-cols-3 md:gap-6">
          {gammes.map((g) => (
            <li
              key={g.nom}
              className={cn(
                "flex flex-col rounded-lg border p-6 md:p-8",
                g.mise ? "border-sable-400 bg-sable-50" : "border-sable-200 bg-white"
              )}
            >
              <p className="mb-1 text-[15px] font-bold uppercase tracking-[0.08em] text-sable-700">{g.classe}</p>
              <h3 className="mb-2 text-3xl font-bold">{g.nom}</h3>
              <p className="mb-5 text-muted-foreground">{g.resume}</p>
              <ul className="mb-7 flex flex-col gap-2.5">
                {g.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-sable-400 text-sable-900" aria-hidden="true">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={site.doctolib}
                className={cn(
                  buttonVariants({ variant: g.mise ? "default" : "outline" }),
                  "mt-auto h-12 rounded-full px-5 text-[17px] font-bold",
                  g.mise ? "hover:bg-sable-500" : "border-2 border-sable-900 bg-white hover:bg-sable-50"
                )}
              >
                <CalendarDays className="size-5" aria-hidden="true" />
                Prendre rendez-vous
              </a>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[15px] text-muted-foreground">
          Aides auditives : dispositifs médicaux délivrés sur prescription médicale. Garantie 4 ans sur les appareils. Aucun prix affiché en ligne : un devis détaillé et gratuit vous est remis au centre.
        </p>
      </div>
    </section>
  );
}
