import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { Doctolib } from "@/components/site/marques";

/* Vocabulaire commun du site (09/09) : blanc porte tout, encre pour les titres,
   or rare (un bouton par ecran, un mot, les filets), zero ombre, zero degrade. */
export const cont = "mx-auto w-[min(1200px,100%-40px)] md:w-[min(1200px,100%-64px)]";
export const sect = "py-20 md:py-32";
export const h2 = "text-balance text-[clamp(30px,7vw,36px)] font-semibold leading-[1.1] tracking-[-0.02em] text-sable-950 md:text-[46px]";
export const h3 = "text-[22px] font-semibold leading-tight tracking-[-0.01em] text-sable-950 md:text-[24px]";
export const lead = "text-[18px] leading-relaxed text-sable-800 md:text-[20px]";
export const btnOr = "inline-flex h-[54px] items-center justify-center gap-2.5 rounded-full bg-sable-400 px-8 text-[18px] font-semibold text-sable-950 transition-colors hover:bg-sable-500";
export const btnBlanc = "inline-flex h-[54px] items-center justify-center gap-2.5 rounded-full bg-white px-8 text-[18px] font-semibold text-sable-950 transition-colors hover:bg-sable-50";
export const lien = "inline-flex min-h-12 items-center gap-2 text-[18px] font-semibold text-sable-950 underline decoration-sable-400 decoration-2 underline-offset-[6px] hover:decoration-sable-700";
export const lienClair = "inline-flex min-h-12 items-center gap-2 text-[18px] font-semibold text-white underline decoration-sable-400 decoration-2 underline-offset-[6px] hover:decoration-white";
export const photo = "w-full rounded-[4px] object-cover";

export function Kicker({ children, sombre, centre }: { children: React.ReactNode; sombre?: boolean; centre?: boolean }) {
  return (
    <>
      <p className={cn("text-[13px] font-semibold uppercase tracking-[0.2em]", sombre ? "text-sable-300" : "text-sable-700")}>{children}</p>
      <span className={cn("my-5 block h-px w-8 bg-sable-400 md:my-6", centre && "mx-auto")} aria-hidden="true" />
    </>
  );
}

/* Le bouton de rendez-vous, toujours avec le logo Doctolib : les patients le connaissent. */
export function BtnDoctolib({ className, blanc, texte = "Rendez-vous sur" }: { className?: string; blanc?: boolean; texte?: string }) {
  return (
    <a href={site.doctolib} className={cn(blanc ? btnBlanc : btnOr, "whitespace-nowrap", className)}>
      {texte}
      <Doctolib className="h-[17px]" />
    </a>
  );
}
