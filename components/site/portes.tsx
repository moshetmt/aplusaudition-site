import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cont, sect, h3, photo } from "@/components/site/ui";

const portes = [
  {
    href: "/le-centre/",
    photo: "/images/comptoir.webp",
    alt: "Le comptoir d'accueil du centre A+ Audition",
    titre: "Le centre",
    texte: "Un lieu calme, boulevard Alexandre III, avec sa cabine de test et ses bureaux de consultation.",
    court: "Boulevard Alexandre III, cabine de test et bureaux.",
  },
  {
    href: "/nos-offres/",
    photo: "/images/bureau.webp",
    alt: "Un bureau de consultation du centre",
    titre: "Nos offres",
    texte: "Bilan gratuit, essai 30 jours, appareils 100 % santé sans reste à charge ou haut de gamme sur devis.",
    court: "Bilan gratuit, essai 30 jours, 100 % santé.",
  },
  {
    href: "/le-centre/#gabriel",
    photo: "/images/gabriel.jpg",
    alt: "Gabriel Nabeth, audioprothésiste",
    titre: "Gabriel",
    texte: "Audioprothésiste diplômé d'État, il vous reçoit lui-même du bilan au dernier réglage.",
    court: "Audioprothésiste diplômé d'État, il vous reçoit lui-même.",
  },
];

const fleche = "size-5 shrink-0 text-sable-400 transition-transform duration-200 group-hover:translate-x-1";

/* Trois portes vers les pages interieures (v7, 09/09).
   Mobile : trois lignes, vignette carree a gauche, phrase courte, fleche en bout de ligne.
   Desktop : trois colonnes, photo 4:5, titre puis texte long. */
export function Portes() {
  return (
    <section className={`bg-white ${sect}`}>
      <ul className={`${cont} md:grid md:grid-cols-3 md:gap-10`}>
        {portes.map((p) => (
          <li key={p.href} className="border-t border-sable-200 first:border-t-0 md:border-0">
            <Link href={p.href} className="group grid grid-cols-[92px_1fr_auto] items-center gap-5 py-6 md:block md:py-0">
              <Image
                src={p.photo}
                alt={p.alt}
                width={765}
                height={1020}
                sizes="(min-width: 960px) 380px, 90vw"
                className={`${photo} aspect-square md:mb-6 md:aspect-[4/5]`}
              />
              <div>
                <h2 className={`${h3} mb-2 flex items-center gap-2`}>
                  {p.titre}
                  <ArrowRight className={`${fleche} hidden md:block`} strokeWidth={1.75} aria-hidden="true" />
                </h2>
                <p className="text-[17px] leading-snug text-sable-800 md:hidden">{p.court}</p>
                <p className="hidden text-[18px] leading-relaxed text-sable-800 md:block">{p.texte}</p>
              </div>
              <ArrowRight className={`${fleche} md:hidden`} strokeWidth={1.75} aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
