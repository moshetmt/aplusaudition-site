import { Header } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Bande } from "@/components/site/bande";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Bande />
        <p className="px-6 py-14 text-center text-base text-muted-foreground">
          Suite de la page après validation de cette première section.
        </p>
      </main>
    </>
  );
}
