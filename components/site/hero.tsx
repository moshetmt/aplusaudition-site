import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Doctolib } from "@/components/site/marques";

/* Mobile : photo plein ecran, voile plat, texte centre en bas (reference de Gabriel, 08/09).
   Desktop : deux colonnes, texte sur blanc a gauche, photo entiere a droite sans voile :
   le texte ne recouvre plus jamais les visages (defaut signale le 08/09). */
export function Hero() {
  return (
    <section
      id="haut"
      className="relative flex h-[calc(100svh-72px)] max-h-[820px] min-h-[560px] flex-col justify-end overflow-hidden bg-sable-950 text-white md:grid md:h-[calc(100vh-88px)] md:max-h-[760px] md:min-h-[600px] md:grid-cols-2 md:bg-white md:text-sable-950"
    >
      <div className="absolute inset-0 md:relative md:order-2">
        <Image
          src="/images/couple-senior.webp"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-[50%_30%] md:object-[45%_0%]"
        />
        <div className="hero-voile absolute inset-0 md:hidden" aria-hidden="true" />
      </div>

      <div className="relative mx-auto w-[min(760px,100%-48px)] pb-12 text-center md:order-1 md:flex md:h-full md:w-full md:flex-col md:justify-center md:px-[clamp(40px,7vw,112px)] md:pb-0 md:text-left">
        <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-sable-300 md:text-[15px] md:text-sable-700">
          Audioprothésiste à Cannes
        </p>
        <span className="mx-auto my-5 block h-px w-8 bg-sable-400 md:mx-0 md:my-6" aria-hidden="true" />
        <h1 className="text-balance text-[clamp(34px,9vw,42px)] font-semibold leading-[1.08] tracking-[-0.02em] md:text-[clamp(44px,4.2vw,58px)]">
          Retrouvez une audition <span className="text-sable-400 md:text-sable-700">claire</span>
        </h1>
        <p className="mx-auto mt-5 max-w-[520px] text-[18px] leading-snug text-white/90 md:mx-0 md:mt-6 md:text-[21px] md:text-sable-800">
          Bilan gratuit, essai 30 jours, appareils 100 % santé sans reste à charge.
        </p>

        <div className="mt-8 flex flex-col items-center gap-5 md:mt-10 md:flex-row md:flex-wrap md:items-center md:gap-x-8 md:gap-y-5">
          <a
            href={site.doctolib}
            className="inline-flex h-[54px] w-full max-w-[360px] items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-white px-9 text-[18px] font-semibold text-sable-950 transition-colors hover:bg-sable-50 md:w-auto md:bg-sable-400 md:hover:bg-sable-500"
          >
            Rendez-vous sur
            <Doctolib className="h-[17px]" />
          </a>
          <a
            href={site.telephoneHref}
            className="inline-flex min-h-12 items-center gap-2.5 whitespace-nowrap text-[19px] font-semibold text-white underline decoration-sable-400 decoration-2 underline-offset-[6px] md:text-sable-950"
          >
            <Phone className="size-5" aria-hidden="true" />
            {site.telephone}
          </a>
        </div>
      </div>
    </section>
  );
}
