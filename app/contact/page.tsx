import type { Metadata } from "next";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { PageEntete } from "@/components/site/page-entete";
import { Acces } from "@/components/site/acces";

export const metadata: Metadata = {
  title: "Contact et accès · A+ Audition, audioprothésiste à Cannes",
  description:
    "Contactez A+ Audition à Cannes : 04 22 32 82 31, contact@aplusaudition.fr, 24 boulevard Alexandre III. Horaires, itinéraire et prise de rendez-vous sur Doctolib.",
  alternates: { canonical: "/contact/" },
};

export default function Contact() {
  return (
    <>
      <Header />
      <main id="contenu">
        <PageEntete
          sur="Contact"
          titre="Appelez, écrivez ou réservez en ligne"
          intro="Le plus simple : un appel au 04 22 32 82 31 aux heures d'ouverture, ou un rendez-vous sur Doctolib à toute heure. Aucun formulaire à remplir."
          photo="/images/devanture.webp"
          alt="La devanture du centre A+ Audition, 24 boulevard Alexandre III à Cannes"
        />
        <Acces />
      </main>
      <Footer contact={false} />
    </>
  );
}
