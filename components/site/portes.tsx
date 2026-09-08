import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const portes = [
  {
    href: "/le-centre/",
    photo: "/images/comptoir.webp",
    alt: "Le comptoir d'accueil du centre A+ Audition",
    titre: "Le centre",
    texte: "Un lieu calme, boulevard Alexandre III, avec sa cabine de test et ses bureaux de consultation.",
  },
  {
    href: "/nos-offres/",
    photo: "/images/bureau.webp",
    alt: "Un bureau de consultation du centre",
    titre: "Nos offres",
    texte: "Bilan gratuit, essai 30 jours, appareils 100 % santé sans reste à charge ou haut de gamme sur devis.",
  },
  {
    href: "/le-centre/#gabriel",
    photo: "/images/gabriel.jpg",
    alt: "Gabriel Nabeth, audioprothésiste",
    titre: "Gabriel",
    texte: "Audioprothésiste diplômé d'État, il vous reçoit lui-même du bilan au dernier réglage.",
  },
];

export function Portes() {
  return (
    <section className="bg-white py-14 md:py-20">
      <ul className="mx-auto grid w-[min(1200px,100%-48px)] gap-8 md:grid-cols-3 md:gap-6">
        {portes.map((p) => (
          <li key={p.href}>
            <Link href={p.href} className="group grid grid-cols-[2fr_3fr] items-center gap-4 md:block">
              <Image
                src={p.photo}
                alt={p.alt}
                width={765}
                height={1020}
                sizes="(min-width: 960px) 380px, 100vw"
                className="aspect-[4/5] w-full rounded-lg object-cover object-center md:mb-4"
              />
              <div>
              <h2 className="mb-1.5 flex items-center gap-2 text-2xl font-bold">
                {p.titre}
                <ArrowRight className="size-6 text-sable-700 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true" />
              </h2>
              <p className="text-muted-foreground">{p.texte}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
