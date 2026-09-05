import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Bande } from "@/components/site/bande";
import { Centre } from "@/components/site/centre";
import { Parcours } from "@/components/site/parcours";
import { Sante } from "@/components/site/sante";
import { Gabriel } from "@/components/site/gabriel";
import { Avis } from "@/components/site/avis";
import { Acces } from "@/components/site/acces";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenu">
        <Hero />
        <Bande />
        <Centre />
        <Parcours />
        <Sante />
        <Gabriel />
        <Avis />
        <Acces />
      </main>
      <Footer />
    </>
  );
}
