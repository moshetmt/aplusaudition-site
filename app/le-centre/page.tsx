import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PageEntete } from "@/components/site/page-entete";
import { Centre } from "@/components/site/centre";
import { Parcours } from "@/components/site/parcours";
import { Gabriel } from "@/components/site/gabriel";
import { Avis } from "@/components/site/avis";

export const metadata: Metadata = {
  title: "Le centre A+ Audition, boulevard Alexandre III à Cannes",
  description:
    "Découvrez le centre A+ Audition à Cannes : cabine d'audiométrie, bureaux de consultation, espace d'attente, et Gabriel, audioprothésiste diplômé d'État qui vous reçoit lui-même.",
  alternates: { canonical: "/le-centre/" },
};

export default function LeCentre() {
  return (
    <>
      <Header />
      <main id="contenu">
        <PageEntete
          sur="Le centre"
          titre="Un centre de quartier, à deux pas de la Croisette"
          intro="Au 24 boulevard Alexandre III. Un lieu calme, une cabine de test, des bureaux de consultation, et une seule personne qui vous suit du bilan au dernier réglage."
          photo="/images/comptoir.webp"
          alt="Le comptoir d'accueil du centre A+ Audition"
          voile="hero-voile-fort"
        />
        <Centre />
        <Parcours />
        <Gabriel />
        <Avis />
      </main>
      <Footer />
    </>
  );
}
