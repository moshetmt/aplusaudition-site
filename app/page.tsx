import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Bande } from "@/components/site/bande";
import { Centre } from "@/components/site/centre";
import { Parcours } from "@/components/site/parcours";
import { Sante } from "@/components/site/sante";
import { Gabriel } from "@/components/site/gabriel";
import { Avis } from "@/components/site/avis";
import { Acces } from "@/components/site/acces";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Bande />
        <Centre />
        <Parcours />
        <Sante />
        <Gabriel />
        <Avis />
        <Acces />
        <p className="px-6 py-14 text-center text-base text-muted-foreground">
          Pied de page après validation de la section 5.
        </p>
      </main>
    </>
  );
}
