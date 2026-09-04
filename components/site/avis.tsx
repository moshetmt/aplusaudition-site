import { ExternalLink, Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Avis() {
  return (
    <section id="avis" className="border-y border-sable-200 bg-sable-100 py-14 md:py-20">
      <div className="mx-auto flex w-[min(1200px,100%-48px)] flex-col items-center text-center">
        <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.08em] text-sable-700">Ce que disent les patients</p>
        <div className="mb-2 flex gap-1" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-8 fill-sable-400 text-sable-700 md:size-9" />
          ))}
        </div>
        <p className="mb-1 text-[44px] font-bold leading-none md:text-[56px]">
          {site.noteGoogle}
          <span className="text-2xl font-semibold text-muted-foreground md:text-3xl"> / 5</span>
        </p>
        <p className="mb-8 text-muted-foreground md:text-xl">
          Note moyenne sur Google, d'après {site.nbAvis} avis de patients du centre.
        </p>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <a
            href={site.avisGoogle}
            target="_blank"
            rel="noopener"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-[54px] rounded-full border-2 border-sable-900 bg-white px-6 text-lg font-bold hover:bg-sable-50"
            )}
          >
            Lire les avis sur Google
            <ExternalLink className="size-5" aria-hidden="true" />
          </a>
          <a
            href={site.avisGoogle}
            target="_blank"
            rel="noopener"
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-[54px] rounded-full px-6 text-lg font-bold hover:bg-sable-500"
            )}
          >
            Laisser un avis
          </a>
        </div>
      </div>
    </section>
  );
}
