import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const photos = [
  { src: "/images/comptoir.webp", legende: "L'accueil", alt: "Le comptoir d'accueil du centre A+ Audition" },
  { src: "/images/attente.webp", legende: "L'espace d'attente", alt: "L'espace d'attente du centre, canapés beiges" },
  { src: "/images/cabine.webp", legende: "La cabine de test auditif", alt: "La cabine d'audiométrie du centre" },
  { src: "/images/consultation.webp", legende: "Le bureau de consultation", alt: "Un bureau de consultation du centre" },
];

export function Centre() {
  return (
    <section id="centre" className="bg-white py-14 md:py-24">
      <div className="mx-auto grid w-[min(1200px,100%-48px)] gap-10 md:grid-cols-[5fr_7fr] md:items-center md:gap-16">
        <div>
          <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.08em] text-sable-700">Le centre</p>
          <h2 className="mb-5 text-balance text-[clamp(28px,6.5vw,34px)] font-bold leading-[1.15] md:text-[40px]">
            Un centre de quartier, pensé pour vous recevoir au calme
          </h2>
          <p className="mb-5 text-muted-foreground md:text-xl">
            Au 24 boulevard Alexandre III, à deux pas de la Croisette. Une cabine d'audiométrie pour le bilan, des bureaux de consultation pour les essais et les réglages, un espace d'attente au calme.
          </p>
          <p className="mb-8 text-muted-foreground md:text-xl">
            Le centre est membre du réseau Total Audition.
          </p>
          <a
            href="/contact/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "h-12 rounded-full border-2 border-sable-900 bg-white px-5 text-[17px] font-bold hover:bg-sable-50"
            )}
          >
            Comment venir
            <ArrowRight className="size-5" aria-hidden="true" />
          </a>
        </div>

        <ul className="grid grid-cols-2 gap-3 md:gap-4">
          {photos.map((p) => (
            <li key={p.src}>
              <figure className="m-0">
                <Image
                  src={p.src}
                  alt={p.alt}
                  width={765}
                  height={1020}
                  sizes="(min-width: 960px) 350px, 45vw"
                  className="aspect-[4/5] w-full rounded-lg object-cover"
                />
              </figure>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
