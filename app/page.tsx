import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Bande } from "@/components/site/bande";
import { Portes } from "@/components/site/portes";
import { Avis } from "@/components/site/avis";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="contenu">
        <Hero />
        <Bande />
        <Portes />
        <Avis />
      </main>
      <Footer />
    </>
  );
}
