import Image from "next/image";
import { ChevronRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="haut"
      className="relative flex min-h-[calc(100svh-72px)] items-center justify-center overflow-hidden bg-sable-900 text-white md:min-h-[640px]"
    >
      <Image
        src="/images/ecoute.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[60%_30%]"
      />
      <div className="hero-voile absolute inset-0" aria-hidden="true" />

      <div className="relative mx-auto w-[min(880px,100%-40px)] py-16 text-center md:py-24">
        <p className="mb-5 text-[19px] font-semibold md:text-[21px]">100 % santé, 0 € de reste à charge</p>
        <h1 className="mb-6 text-balance font-display text-[clamp(38px,10.5vw,44px)] font-normal leading-[1.1] md:text-[clamp(44px,4.6vw,60px)]">
          À Cannes, retrouvez une audition <span className="text-sable-400">claire</span>
        </h1>
        <p className="mx-auto mb-9 max-w-[640px] text-[21px] leading-snug md:text-[24px]">
          Votre audition, notre expertise au cœur de Cannes, à deux pas de la Croisette
        </p>

        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-center">
          <a
            href={site.telephoneHref}
            className="inline-flex h-14 w-full max-w-[400px] items-center justify-center gap-3 rounded-full bg-white px-8 text-[19px] font-semibold text-sable-700 shadow-sm transition-colors hover:bg-sable-50 md:w-auto"
          >
            <Phone className="size-5" aria-hidden="true" />
            Téléphone
          </a>
          <a
            href={site.doctolib}
            className="inline-flex h-14 w-full max-w-[400px] items-center justify-center gap-3 rounded-full border-2 border-white px-8 text-[19px] font-semibold text-white transition-colors hover:bg-white/15 md:w-auto"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
            Prendre rendez-vous
          </a>
        </div>
      </div>
    </section>
  );
}
