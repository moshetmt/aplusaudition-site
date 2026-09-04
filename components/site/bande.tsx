import { CalendarCheck, CircleCheck, ShieldCheck, Star } from "lucide-react";

const reperes = [
  { Icon: CircleCheck, titre: "Bilan auditif gratuit", sous: "Sans engagement" },
  { Icon: CalendarCheck, titre: "Essai 30 jours", sous: "Avant toute décision" },
  { Icon: ShieldCheck, titre: "100 % santé", sous: "0 € de reste à charge en classe I" },
  { Icon: Star, titre: "5,0 sur Google", sous: "18 avis de patients", plein: true },
];

export function Bande() {
  return (
    <section aria-label="En bref" className="border-b border-sable-200 bg-sable-100">
      <ul className="mx-auto grid w-[min(1200px,100%-48px)] grid-cols-2 md:grid-cols-4">
        {reperes.map(({ Icon, titre, sous, plein }, i) => (
          <li
            key={titre}
            className={[
              "flex items-center gap-3.5 py-4 text-base font-semibold leading-tight md:py-[22px] md:text-[17px]",
              i % 2 === 1 ? "border-l border-sable-200 pl-4 md:pl-6" : "pr-4 md:pr-6",
              i < 2 ? "border-b border-sable-200 md:border-b-0" : "",
              i > 0 ? "md:border-l md:border-sable-200 md:pl-6" : "",
            ].join(" ")}
          >
            <Icon
              className={`size-6 shrink-0 text-sable-700 md:size-7 ${plein ? "fill-sable-400" : ""}`}
              aria-hidden="true"
            />
            <span>
              {titre}
              <small className="block text-[15px] font-normal text-muted-foreground">{sous}</small>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
