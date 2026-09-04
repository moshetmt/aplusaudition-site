import type { Metadata } from "next";
import { PageLegale } from "@/components/site/page-legale";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité · A+ Audition",
  description: "Politique de confidentialité du site aplusaudition.fr.",
  robots: { index: false },
};

export default function Confidentialite() {
  return (
    <PageLegale titre="Politique de confidentialité">
      <p>
        Ce site est une vitrine d'information. Il ne comporte aucun formulaire et ne collecte aucune donnée personnelle par lui-même.
      </p>

      <h2>Données que vous nous transmettez</h2>
      <p>
        Lorsque vous nous appelez ou nous écrivez à <a href={`mailto:${site.email}`}>{site.email}</a>, les informations que vous communiquez (nom, coordonnées, objet de votre demande) servent uniquement à vous répondre et à organiser votre rendez-vous. Elles sont conservées le temps nécessaire à ce traitement.
      </p>

      <h2>Prise de rendez-vous en ligne</h2>
      <p>
        La prise de rendez-vous se fait sur Doctolib, un service tiers. Les données saisies sur Doctolib sont traitées par Doctolib selon sa propre <a href="https://www.doctolib.fr/terms/patient-privacy-policy" rel="noopener">politique de confidentialité</a>.
      </p>

      <h2>Cookies</h2>
      <p>
        Ce site ne dépose aucun cookie de mesure d'audience ni de publicité. Seuls des cookies strictement techniques, nécessaires à l'affichage du site, peuvent être utilisés. Aucune carte ni contenu tiers n'est chargé sans votre action.
      </p>

      <h2>Vos droits</h2>
      <p>
        Conformément au Règlement général sur la protection des données (RGPD), vous disposez d'un droit d'accès, de rectification, d'effacement et d'opposition sur les données vous concernant. Pour l'exercer, écrivez à <a href={`mailto:${site.email}`}>{site.email}</a> ou par courrier à A+ Audition, {site.adresse}. Vous pouvez également saisir la CNIL (<a href="https://www.cnil.fr" rel="noopener">cnil.fr</a>).
      </p>

      <h2>Responsable du traitement</h2>
      <p>Gabriel Nabeth, A+ Audition, {site.adresse}.</p>
    </PageLegale>
  );
}
