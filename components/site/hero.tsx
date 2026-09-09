import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Doctolib } from "@/components/site/marques";

/* Banniere d'accueil (v8, 09/09).
   Mobile : la photo en bandeau 4:3, entiere et sans voile, puis le titre sur un aplat encre.
   Meme regle que les pages interieures : aucun texte ne passe sur une photo, les photos
   lumineuses ne laissent pas assez de contraste sous un voile plat (mesure du 09/09).
   Desktop : deux colonnes, texte sur blanc a gauche, photo entiere a droite. */
export function Hero() {
  return (
    <section
      id="haut"
      className="relative flex flex-col bg-sable-950 text-white md:grid md:h-[calc(100vh-88px)] md:max-h-[760px] md:min-h-[600px] md:grid-cols-2 md:overflow-hidden md:bg-white md:text-sable-950"
    >
      <div className="relative aspect-[4/3] w-full md:order-2 md:aspect-auto md:h-full">
        <Image
          src="/images/couple-50-60.webp"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-[54%_18%] md:object-[50%_25%]"
        />
      </div>

      <div className="mx-auto w-[min(760px,100%-40px)] py-11 md:order-1 md:flex md:h-full md:w-full md:flex-col md:justify-center md:px-[clamp(40px,7vw,112px)] md:py-0">
        <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-sable-300 md:text-[15px] md:text-sable-700">
          Audioprothésiste à Cannes
        </p>
        <span className="my-5 block h-px w-8 bg-sable-400 md:my-6" aria-hidden="true" />
        <h1 className="text-balance leading-[1.05] tracking-[-0.02em]">
          <span className="block text-[clamp(38px,10vw,48px)] font-semibold md:text-[clamp(48px,4.6vw,64px)]">
            A<span className="text-sable-400 md:text-sable-700">+</span> Audition
          </span>
          <span className="mt-3 block text-[clamp(20px,5vw,24px)] font-normal tracking-[-0.01em] text-white/90 md:mt-4 md:text-[clamp(24px,2.1vw,30px)] md:text-sable-800">
            le petit plus qui s&apos;entend
          </span>
        </h1>
        <p className="mt-5 max-w-[520px] text-[18px] leading-snug text-white/90 md:mt-6 md:text-[21px] md:text-sable-800">
          Bilan gratuit, essai 30 jours, appareils 100 % santé sans reste à charge.
        </p>

        <div className="mt-8 flex flex-col gap-5 md:mt-10 md:flex-row md:flex-wrap md:items-center md:gap-x-8 md:gap-y-5">
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
