import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const reperes = ["Audioprothésiste diplômé d'État", "Indépendant", "Membre du réseau Total Audition"];

export function Gabriel() {
  return (
    <section id="gabriel" className="bg-white py-14 md:py-24">
      <div className="mx-auto grid w-[min(1200px,100%-48px)] gap-10 md:grid-cols-[5fr_7fr] md:items-center md:gap-16">
        <Image
          src="/images/gabriel.jpg"
          alt="Gabriel Nabeth, audioprothésiste, devant l'enseigne de son centre à Cannes"
          width={846}
          height={1024}
          sizes="(min-width: 960px) 460px, 100vw"
          className="aspect-[4/5] w-full rounded-lg object-cover object-top"
        />

        <div>
          <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.08em] text-sable-700">Gabriel, votre audioprothésiste</p>
          <h2 className="mb-5 text-balance text-[clamp(28px,6.5vw,34px)] font-bold leading-[1.15] md:text-[40px]">
            Je vous reçois moi-même, du bilan au dernier réglage
          </h2>
          <p className="mb-4 text-muted-foreground md:text-xl">
            Je suis Gabriel Nabeth, audioprothésiste diplômé d'État et fondateur d'A+ Audition. Au centre, c'est moi qui réalise votre bilan, vous conseille et règle vos appareils, à chaque rendez-vous.
          </p>
          <p className="mb-6 text-muted-foreground md:text-xl">
            Mon rôle : vous guider vers la solution la plus adaptée à votre audition et à votre quotidien, puis vous accompagner dans la durée.
          </p>
          <ul className="mb-8 flex flex-wrap gap-x-6 gap-y-2 text-[17px] font-semibold">
            {reperes.map((r) => (
              <li key={r} className="flex items-center gap-2">
                <span className="size-2 rounded-full bg-sable-400" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
          <a
            href={site.doctolib}
            className={cn(
              buttonVariants({ variant: "default" }),
              "h-[54px] w-full rounded-full px-6 text-lg font-bold hover:bg-sable-500 md:w-auto"
            )}
          >
            <CalendarDays className="size-5" aria-hidden="true" />
            Prendre rendez-vous avec Gabriel
          </a>
        </div>
      </div>
    </section>
  );
}
