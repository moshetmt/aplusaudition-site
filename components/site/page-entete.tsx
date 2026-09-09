import Image from "next/image";

/* Banniere des pages interieures (v10, 09/09) : meme mise en page que la banniere d'accueil.
   Mobile : photo plein ecran, voile plat, texte centre en bas.
   Desktop : deux colonnes, texte sur blanc a gauche, photo entiere a droite sans voile.
   Le voile est reglable par page : les photos du cabinet n'ont pas toutes la meme luminance
   dans la zone du texte, c'est la seule variable ajustee pour garder le titre lisible. */
export function PageEntete({
  sur,
  titre,
  intro,
  photo,
  alt,
  position = "object-center",
  voile = "hero-voile",
}: {
  sur: string;
  titre: string;
  intro: string;
  photo: string;
  alt: string;
  position?: string;
  voile?: string;
}) {
  return (
    <section className="relative flex h-[62svh] max-h-[560px] min-h-[420px] flex-col justify-end overflow-hidden border-b border-sable-200 bg-sable-950 text-white md:grid md:h-auto md:max-h-none md:min-h-[440px] md:grid-cols-2 md:bg-white md:text-sable-950">
      <div className="absolute inset-0 md:relative md:order-2">
        <Image src={photo} alt={alt} fill priority sizes="(min-width: 768px) 50vw, 100vw" className={`object-cover ${position}`} />
        <div className={`${voile} absolute inset-0 md:hidden`} aria-hidden="true" />
      </div>

      <div className="relative mx-auto w-[min(760px,100%-48px)] pb-10 text-center md:order-1 md:flex md:h-full md:w-full md:flex-col md:justify-center md:px-[clamp(40px,7vw,112px)] md:py-16 md:text-left">
        <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-sable-300 md:text-[15px] md:text-sable-700">{sur}</p>
        <span className="mx-auto my-5 block h-px w-8 bg-sable-400 md:mx-0 md:my-6" aria-hidden="true" />
        <h1 className="text-balance text-[clamp(30px,7.5vw,38px)] font-semibold leading-[1.08] tracking-[-0.02em] md:text-[clamp(36px,3.4vw,50px)]">{titre}</h1>
        <p className="mx-auto mt-5 max-w-[560px] text-[17px] leading-snug text-white/90 md:mx-0 md:mt-6 md:text-[19px] md:leading-relaxed md:text-sable-800">{intro}</p>
      </div>
    </section>
  );
}
