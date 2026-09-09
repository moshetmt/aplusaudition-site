import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { cont, sect, h2, lead, lien, photo, Kicker, BtnDoctolib } from "@/components/site/ui";

const points = [
  "Classe I : 0 € de reste à charge, pris en charge par l'Assurance maladie et votre complémentaire santé",
  "Classe II, haut de gamme : devis détaillé gratuit, sans engagement",
  "Garantie 4 ans sur les appareils",
];

/* La seule section sur fond sable clair de la page (regle : une section sur deux au plus). */
export function Sante() {
  return (
    <section id="offres" className={`bg-sable-100 ${sect}`}>
      <div className={`${cont} grid gap-12 md:grid-cols-[7fr_5fr] md:items-center md:gap-20`}>
        <div>
          <Kicker>100 % santé</Kicker>
          <h2 className={h2}>Des appareils auditifs sans reste à charge</h2>
          <p className={`${lead} mt-6`}>
            Sur ordonnance de votre médecin ou de votre ORL, le 100 % santé permet d'être appareillé sans rien payer : les aides auditives de classe I sont intégralement prises en charge.
          </p>
          <ul className="mt-8 flex flex-col divide-y divide-sable-200 border-y border-sable-200">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3.5 py-4 text-[17px] leading-snug text-sable-800 md:text-[18px]">
                <Check className="mt-0.5 size-5 shrink-0 text-sable-700" strokeWidth={2} aria-hidden="true" />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-10">
            <BtnDoctolib className="w-full max-w-[360px] md:w-auto" />
            <a href={site.telephoneHref} className={lien}>
              <Phone className="size-5" strokeWidth={1.75} aria-hidden="true" />
              {site.telephone}
            </a>
          </div>
        </div>
        <Image
          src="/images/bureau.webp"
          alt="Un bureau de consultation du centre A+ Audition, mur végétal"
          width={765}
          height={1020}
          sizes="(min-width: 960px) 460px, 100vw"
          className={`${photo} aspect-[4/5]`}
        />
      </div>
    </section>
  );
}
