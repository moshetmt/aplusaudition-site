import Image from "next/image";
import { cont, sect, h2, lead, photo, Kicker, BtnDoctolib } from "@/components/site/ui";

export function Gabriel() {
  return (
    <section id="gabriel" className={`border-t border-sable-200 bg-white ${sect}`}>
      <div className={`${cont} grid gap-12 md:grid-cols-[5fr_7fr] md:items-center md:gap-20`}>
        <Image
          src="/images/gabriel.jpg"
          alt="Gabriel Nabeth, audioprothésiste, devant l'enseigne de son centre à Cannes"
          width={846}
          height={1024}
          sizes="(min-width: 960px) 460px, 100vw"
          className={`${photo} aspect-[4/5] object-top`}
        />
        <div>
          <Kicker>Gabriel, votre audioprothésiste</Kicker>
          <h2 className={h2}>Je vous reçois moi-même, du bilan au dernier réglage</h2>
          <p className={`${lead} mt-6`}>
            Je suis Gabriel Nabeth, audioprothésiste diplômé d'État et fondateur d'A+ Audition. Au centre, c'est moi qui réalise votre bilan, vous conseille et règle vos appareils, à chaque rendez-vous.
          </p>
          <p className={`${lead} mt-4`}>
            Mon rôle : vous guider vers la solution la plus adaptée à votre audition et à votre quotidien, puis vous accompagner dans la durée.
          </p>
          <p className="mt-6 text-[16px] text-sable-700">
            Diplômé d'État&nbsp;&nbsp;·&nbsp;&nbsp;Indépendant&nbsp;&nbsp;·&nbsp;&nbsp;Membre du réseau Total Audition
          </p>
          <BtnDoctolib className="mt-8 w-full max-w-[400px] md:w-auto" />
        </div>
      </div>
    </section>
  );
}
