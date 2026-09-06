import Image from "next/image";
import { CalendarDays, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="haut" className="relative flex items-center overflow-hidden bg-sable-900 text-white md:min-h-[600px]">
      <Image
        src="/images/devanture.webp"
        alt="La devanture d'A+ Audition, boulevard Alexandre III à Cannes"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[50%_0] md:object-[64%_30%]"
      />
      <div className="hero-voile absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-[min(1200px,100%-48px)] py-11 md:py-[72px]">
        <div className="md:max-w-[580px]">
          <p className="mb-4 text-[15px] font-bold uppercase tracking-[0.08em] text-sable-400">
            Audioprothésiste indépendant à Cannes
          </p>
          <h1 className="mb-[18px] text-balance text-[clamp(30px,8vw,38px)] font-bold leading-[1.12] tracking-[-0.01em] md:text-[clamp(34px,3.6vw,48px)]">
            L'audioprothésiste du quartier, à deux pas de la Croisette.
          </h1>
          <p className="mb-7 max-w-[540px] text-lg leading-normal text-sable-100 md:text-xl">
            Bilan auditif gratuit, essai de 30 jours, appareils 100 % santé. Gabriel vous reçoit boulevard Alexandre III.
          </p>

          <div className="mb-6 flex flex-wrap gap-3">
            <a
              href={site.doctolib}
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-[58px] w-full rounded-full px-6 text-[19px] font-bold hover:bg-sable-500 md:w-auto"
              )}
            >
              <CalendarDays className="size-5" aria-hidden="true" />
              Prendre rendez-vous
            </a>
            <a
              href={site.telephoneHref}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-[58px] w-full rounded-full border-2 border-white bg-transparent px-6 text-[19px] font-bold text-white hover:bg-white/10 hover:text-white md:w-auto"
              )}
            >
              <Phone className="size-5" aria-hidden="true" />
              {site.telephone}
            </a>
          </div>

          <p className="flex items-start gap-2.5 text-[17px] text-sable-100">
            <MapPin className="mt-1 size-5 shrink-0 text-sable-400" aria-hidden="true" />
            <span>
              <strong className="font-semibold text-white">{site.adresse}</strong>
              <br />
              {site.horaires}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
