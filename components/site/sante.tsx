import Image from "next/image";
import { CalendarDays, Check, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const points = [
  "Classe I : 0 € de reste à charge, pris en charge par l'Assurance maladie et votre complémentaire santé",
  "Classe II, haut de gamme : devis détaillé gratuit, sans engagement",
  "Garantie 4 ans sur les appareils",
];

export function Sante() {
  return (
    <section id="offres" className="bg-sable-100 py-14 md:py-24">
      <div className="mx-auto grid w-[min(1200px,100%-48px)] gap-10 md:grid-cols-[7fr_5fr] md:items-center md:gap-16">
        <div>
          <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.08em] text-sable-700">100 % santé</p>
          <h2 className="mb-5 text-balance text-[clamp(28px,6.5vw,34px)] font-bold leading-[1.15] md:text-[40px]">
            Des appareils auditifs sans reste à charge
          </h2>
          <p className="mb-6 text-muted-foreground md:text-xl">
            Sur ordonnance de votre médecin ou de votre ORL, le 100 % santé permet d'être appareillé sans rien payer : les aides auditives de classe I sont intégralement prises en charge.
          </p>
          <ul className="mb-8 flex flex-col gap-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 md:text-lg">
                <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-full bg-sable-400 text-sable-900" aria-hidden="true">
                  <Check className="size-4" strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3">
            <a
              href={site.doctolib}
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-[54px] w-full rounded-full px-6 text-lg font-bold hover:bg-sable-500 md:w-auto"
              )}
            >
              <CalendarDays className="size-5" aria-hidden="true" />
              Prendre rendez-vous
            </a>
            <a
              href={site.telephoneHref}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-[54px] w-full rounded-full border-2 border-sable-900 bg-white px-6 text-lg font-bold hover:bg-sable-50 md:w-auto"
              )}
            >
              <Phone className="size-5" aria-hidden="true" />
              {site.telephone}
            </a>
          </div>
        </div>

        <Image
          src="/images/bureau.webp"
          alt="Un bureau de consultation du centre A+ Audition, mur végétal"
          width={765}
          height={1020}
          sizes="(min-width: 960px) 460px, 100vw"
          className="aspect-[4/5] w-full rounded-lg object-cover md:aspect-[4/5]"
        />
      </div>
    </section>
  );
}
