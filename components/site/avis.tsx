import { Star } from "lucide-react";
import { site } from "@/lib/site";
import { cont, sect, btnOr, lien, Kicker } from "@/components/site/ui";
import { GoogleG } from "@/components/site/marques";

export function Avis() {
  return (
    <section id="avis" className={`border-t border-sable-200 bg-white ${sect}`}>
      <div className={`${cont} flex flex-col items-center text-center`}>
        <Kicker centre>Ce que disent les patients</Kicker>
        <div className="mb-4 flex gap-1.5" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-7 fill-sable-400 text-sable-400 md:size-8" strokeWidth={1} />
          ))}
        </div>
        <p className="text-[72px] font-semibold leading-none tracking-[-0.03em] text-sable-950 md:text-[104px]">
          {site.noteGoogle}
          <span className="text-[26px] font-normal tracking-normal text-sable-700 md:text-[32px]"> / 5</span>
        </p>
        <p className="mt-5 flex items-center justify-center gap-2.5 text-[18px] text-sable-800 md:text-[20px]">
          <GoogleG className="size-6" />
          {site.nbAvis} avis de patients sur Google
        </p>
        <div className="mt-10 flex w-full flex-col items-center gap-5 md:flex-row md:justify-center md:gap-10">
          <a href={site.laisserAvis} target="_blank" rel="noopener" className={`${btnOr} w-full max-w-[360px] md:w-auto`}>
            Laisser un avis
          </a>
          <a href={site.avisGoogle} target="_blank" rel="noopener" className={lien}>
            Lire les avis sur Google
          </a>
        </div>
      </div>
    </section>
  );
}
