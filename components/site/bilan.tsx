import { Check } from "lucide-react";
import { cont, sect, h2, lead, Kicker } from "@/components/site/ui";

/* Page bilan (10/09). Aucune etape de protocole n'est decrite : le deroule exact du
   premier rendez-vous n'a jamais ete donne par Gabriel (note comme inconnu dans ETAT.md).
   Tout ce qui est affirme ici vient de ce que le site publie deja et que l'operateur a
   valide : test au centre, en cabine, gratuit, sans engagement, resultat explique en clair. */

const signes = [
  "Vous faites répéter, au téléphone ou en famille.",
  "Vous suivez mal une conversation au restaurant ou dans un lieu animé.",
  "On vous dit que le téléviseur est trop fort.",
  "Vous entendez des sifflements ou des bourdonnements.",
  "Vous n'avez jamais fait tester votre audition.",
];

export function Bilan() {
  return (
    <>
      <section className={`bg-white ${sect}`}>
        <div className={cont}>
          <Kicker>Quand consulter</Kicker>
          <h2 className={`${h2} max-w-[760px]`}>Une gêne auditive s&rsquo;installe lentement</h2>
          <p className={`${lead} mt-6 max-w-[640px]`}>
            On s&rsquo;y habitue avant de la remarquer, et ce sont souvent les proches qui la voient en premier.
            Un bilan auditif sert justement à faire le point, sans attendre d&rsquo;en être sûr.
          </p>
          <ul className="mt-10 flex flex-col divide-y divide-sable-200 border-y border-sable-200 md:mt-12">
            {signes.map((s) => (
              <li key={s} className="flex items-start gap-3.5 py-4 text-[17px] leading-snug text-sable-800 md:text-[18px]">
                <Check className="mt-0.5 size-5 shrink-0 text-sable-700" strokeWidth={2} aria-hidden="true" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`bg-sable-50 ${sect}`}>
        <div className={cont}>
          <Kicker>Le bilan</Kicker>
          <h2 className={`${h2} max-w-[760px]`}>Gratuit, en cabine, sans engagement</h2>
          <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-2 md:gap-16">
            <p className={lead}>
              Le bilan est réalisé au centre, boulevard Alexandre III à Cannes, en cabine, par Gabriel,
              audioprothésiste diplômé d&rsquo;État. Il vous explique le résultat en clair. Vous ne payez rien
              et vous ne vous engagez à rien.
            </p>
            <p className={lead}>
              Ce n&rsquo;est pas un diagnostic médical. Si un appareillage est envisagé à la suite du bilan,
              il se fait sur prescription de votre médecin traitant ou d&rsquo;un ORL, comme le prévoit la
              réglementation. Le bilan vous dit simplement où vous en êtes.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
