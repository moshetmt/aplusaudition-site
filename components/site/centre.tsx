import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cont, sect, h2, lead, lien, photo, Kicker } from "@/components/site/ui";

const photos = [
  { src: "/images/comptoir.webp", alt: "Le comptoir d'accueil du centre A+ Audition" },
  { src: "/images/attente.webp", alt: "L'espace d'attente du centre, canapés beiges" },
  { src: "/images/cabine.webp", alt: "La cabine d'audiométrie du centre" },
  { src: "/images/consultation.webp", alt: "Un bureau de consultation du centre" },
];

export function Centre() {
  return (
    <section id="centre" className={`bg-white ${sect}`}>
      <div className={`${cont} grid gap-12 md:grid-cols-[5fr_7fr] md:items-center md:gap-20`}>
        <div>
          <Kicker>Le centre</Kicker>
          <h2 className={h2}>Un centre de quartier, pensé pour vous recevoir au calme</h2>
          <p className={`${lead} mt-6`}>
            Au 24 boulevard Alexandre III, à deux pas de la Croisette. Une cabine d'audiométrie pour le bilan, des bureaux de consultation pour les essais et les réglages, un espace d'attente au calme.
          </p>
          <p className={`${lead} mt-4`}>Le centre est membre du réseau Total Audition.</p>
          <Link href="/contact/" className={`${lien} mt-8`}>
            Comment venir
            <ArrowRight className="size-5 text-sable-400" strokeWidth={1.75} aria-hidden="true" />
          </Link>
        </div>
        <ul className="grid grid-cols-2 gap-3 md:gap-5">
          {photos.map((p) => (
            <li key={p.src}>
              <Image src={p.src} alt={p.alt} width={765} height={1020} sizes="(min-width: 960px) 350px, 45vw" className={`${photo} aspect-[4/5]`} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
