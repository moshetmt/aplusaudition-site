import Image from "next/image";
import { ChevronRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="haut"
      className="relative flex flex-col overflow-hidden bg-sable-950 text-white md:block md:min-h-[760px]"
    >
      {/* Mobile : la photo garde ses proportions (les deux visages entiers), le texte suit sur fond brun.
          Desktop : photo en fond pleine largeur, texte pose dessus. */}
      <div className="relative h-[min(40svh,340px)] md:absolute md:inset-0 md:h-auto">
        <Image
          src="/images/couple-senior.webp"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%] md:object-[50%_25%]"
        />
        <div className="hero-voile absolute inset-0" aria-hidden="true" />
      </div>

      <div className="relative mx-auto -mt-16 w-[min(880px,100%-40px)] pb-8 text-center md:mt-0 md:pb-20 md:pt-[320px]">
        <p className="mb-4 text-[18px] font-semibold md:mb-5 md:text-[21px]">100 % santé, 0 € de reste à charge</p>
        <h1 className="mb-5 text-balance text-[clamp(32px,8.8vw,38px)] md:mb-6 font-bold leading-[1.1] tracking-[-0.01em] md:text-[clamp(44px,4.6vw,60px)]">
          À Cannes, retrouvez une audition <span className="text-sable-400">claire</span>
        </h1>
        <p className="mx-auto mb-7 max-w-[640px] text-[19px] leading-snug md:mb-10 md:text-[24px]">
          Votre audition, notre expertise au cœur de Cannes, à deux pas de la Croisette
        </p>

        <div className="flex flex-col items-center gap-3 md:flex-row md:justify-center md:gap-5">
          <a
            href={site.telephoneHref}
            className="inline-flex h-[52px] w-full max-w-[400px] items-center justify-center gap-3 rounded-full bg-white px-8 text-[19px] font-semibold text-sable-700 shadow-sm transition-colors hover:bg-sable-50 md:w-auto"
          >
            <Phone className="size-5" aria-hidden="true" />
            Téléphone
          </a>
          <a
            href={site.doctolib}
            className="inline-flex h-[52px] w-full max-w-[400px] items-center justify-center gap-3 rounded-full border-2 border-white px-8 text-[19px] font-semibold text-white transition-colors hover:bg-white/15 md:w-auto"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}
