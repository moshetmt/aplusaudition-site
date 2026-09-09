import Image from "next/image";

/* Banniere des pages interieures (v7, 09/09).
   Mobile : la photo en bandeau 3:2, entiere et sans voile, puis le titre sur un aplat encre.
   Aucun texte ne passe sur la photo : les photos du cabinet sont trop lumineuses par endroits
   pour qu'un voile plat garantisse la lisibilite (mesure du 09/09, pire zone a 2,6:1 sous voile).
   Desktop : deux colonnes, texte sur blanc a gauche, photo entiere a droite. */
export function PageEntete({
  sur,
  titre,
  intro,
  photo,
  alt,
  position = "object-center",
}: {
  sur: string;
  titre: string;
  intro: string;
  photo: string;
  alt: string;
  position?: string;
}) {
  return (
    <section className="border-b border-sable-200 bg-sable-950 md:grid md:min-h-[440px] md:grid-cols-2 md:bg-white">
      <div className="relative aspect-[3/2] md:order-2 md:aspect-auto md:h-full">
        <Image src={photo} alt={alt} fill priority sizes="(min-width: 768px) 50vw, 100vw" className={`object-cover ${position}`} />
      </div>

      <div className="mx-auto w-[min(760px,100%-40px)] py-10 text-white md:order-1 md:flex md:w-full md:flex-col md:justify-center md:px-[clamp(40px,7vw,112px)] md:py-16 md:text-sable-950">
        <p className="text-[14px] font-semibold uppercase tracking-[0.2em] text-sable-300 md:text-[15px] md:text-sable-700">{sur}</p>
        <span className="my-5 block h-px w-8 bg-sable-400 md:my-6" aria-hidden="true" />
        <h1 className="text-balance text-[clamp(30px,7.5vw,38px)] font-semibold leading-[1.08] tracking-[-0.02em] md:text-[clamp(36px,3.4vw,50px)]">{titre}</h1>
        <p className="mt-5 max-w-[560px] text-[17px] leading-snug text-white/90 md:mt-6 md:text-[19px] md:leading-relaxed md:text-sable-800">{intro}</p>
      </div>
    </section>
  );
}
