import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PageEntete } from "@/components/site/page-entete";
import { Bilan } from "@/components/site/bilan";
import { Parcours } from "@/components/site/parcours";
import { Sante } from "@/components/site/sante";

export const metadata: Metadata = {
  title: "Bilan auditif gratuit à Cannes · A+ Audition",
  description:
    "Bilan auditif gratuit et sans engagement à Cannes, boulevard Alexandre III. Test en cabine avec Gabriel, audioprothésiste diplômé d'État. Rendez-vous sur Doctolib ou au 04 22 32 82 31.",
  alternates: { canonical: "/bilan-auditif-cannes/" },
};

export default function BilanAuditifCannes() {
  return (
    <>
      <Header />
      <main id="contenu">
        <PageEntete
          sur="Bilan auditif"
          titre="Le bilan auditif gratuit, à Cannes"
          intro="Un test complet au centre, en cabine, sans engagement et sans rien à payer. Gabriel vous explique le résultat en clair, et vous décidez ensuite."
          photo="/images/cabine.webp"
          alt="La cabine d'audiométrie du centre A+ Audition à Cannes"
          voile="hero-voile-page"
        />
        <Bilan />
        <Parcours />
        <Sante />
      </main>
      <Footer />
    </>
  );
}
