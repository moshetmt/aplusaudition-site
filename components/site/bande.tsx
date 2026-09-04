import { CalendarCheck, CircleCheck, ShieldCheck, Star } from "lucide-react";

const reperes = [
  { Icon: CircleCheck, titre: "Bilan auditif gratuit", sous: "Sans engagement" },
  { Icon: CalendarCheck, titre: "Essai 30 jours", sous: "Avant toute décision" },
  { Icon: ShieldCheck, titre: "100 % santé", sous: "0 € de reste à charge en classe I" },
  { Icon: Star, titre: "5,0 sur Google", sous: "18 avis de patients", plein: true },
];

export function Bande() {
  return (
    <section aria-label="En bref" className="hidden border-b border-sable-200 bg-sable-100 md:block">
      <ul className="mx-auto flex w-[min(1200px,100%-48px)] flex-col divide-y divide-sable-200 md:grid md:grid-cols-4 md:divide-x md:divide-y-0">
        {reperes.map(({ Icon, titre, sous, plein }) => (
          <li
            key={titre}
            className="flex items-center gap-3.5 py-3.5 text-[17px] font-semibold leading-tight md:px-6 md:py-[22px] md:first:pl-0 md:last:pr-0"
          >
            <Icon
              className={`size-6 shrink-0 text-sable-700 md:size-7 ${plein ? "fill-sable-400" : ""}`}
              aria-hidden="true"
            />
            <span className="flex flex-wrap items-baseline gap-x-2 md:flex-col md:gap-0">
              {titre}
              <small className="text-[15px] font-normal text-muted-foreground">{sous}</small>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
