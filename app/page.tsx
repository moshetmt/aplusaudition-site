import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Bande } from "@/components/site/bande";
import { Centre } from "@/components/site/centre";
import { Parcours } from "@/components/site/parcours";
import { Sante } from "@/components/site/sante";

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
        <p className="px-6 py-14 text-center text-base text-muted-foreground">
          Suite de la page après validation de la section 3.
        </p>
      </main>
    </>
  );
}
