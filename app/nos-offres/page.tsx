import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PageEntete } from "@/components/site/page-entete";
import { Gammes } from "@/components/site/gammes";
import { Sante } from "@/components/site/sante";
import { Faq } from "@/components/site/faq";

export const metadata: Metadata = {
  title: "Nos offres : bilan gratuit, 100 % santé, essai 30 jours · A+ Audition Cannes",
  description:
    "Bilan auditif gratuit, appareils 100 % santé sans reste à charge, gammes haut de gamme sur devis, essai 30 jours et suivi. A+ Audition, audioprothésiste à Cannes.",
  alternates: { canonical: "/nos-offres/" },
};

export default function NosOffres() {
  return (
    <>
      <Header />
      <main id="contenu">
        <PageEntete
          sur="Nos offres"
          titre="Bilan gratuit, essai 30 jours, appareils 100 % santé"
          intro="Tout commence par un bilan auditif gratuit au centre. Ensuite, Gabriel vous propose la gamme adaptée, du 100 % santé sans reste à charge au haut de gamme sur devis."
        />
        <Gammes />
        <Sante />
        <Faq />
      </main>
      <Footer />
    </>
  );
}
