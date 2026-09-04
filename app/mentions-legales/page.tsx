import type { Metadata } from "next";
import { PageLegale } from "@/components/site/page-legale";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales · A+ Audition",
  description: "Mentions légales du site aplusaudition.fr.",
  robots: { index: false },
};

export default function MentionsLegales() {
  return (
    <PageLegale titre="Mentions légales">
      <h2>Éditeur du site</h2>
      <p>
        A+ Audition, centre d'audioprothèse, {site.adresse}.<br />
        Téléphone : <a href={site.telephoneHref}>{site.telephone}</a> · E-mail : <a href={`mailto:${site.email}`}>{site.email}</a>
      </p>
      <p>Directeur de la publication : Gabriel Nabeth, audioprothésiste diplômé d'État.</p>
      <p>Numéro SIRET : [à compléter] · Numéro RPPS : [à compléter]</p>

      <h2>Hébergement</h2>
      <p>Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. <a href="https://vercel.com" rel="noopener">vercel.com</a></p>

      <h2>Conception</h2>
      <p>Site conçu et réalisé par <a href="https://123digital.fr" rel="noopener">123digital</a>, Lyon.</p>

      <h2>Propriété intellectuelle</h2>
      <p>
        L'ensemble des contenus de ce site (textes, photographies, logo) est la propriété d'A+ Audition. Toute reproduction, même partielle, est interdite sans autorisation écrite préalable.
      </p>

      <h2>Information réglementaire</h2>
      <p>
        Les aides auditives sont des dispositifs médicaux. Leur délivrance s'effectue sur prescription médicale. Les informations présentées sur ce site relatives à l'offre 100 % santé ont un caractère informatif et ne constituent pas une offre commerciale.
      </p>

      <h2>Prise de rendez-vous</h2>
      <p>
        La prise de rendez-vous en ligne est assurée par Doctolib, service tiers soumis à ses propres conditions d'utilisation et à sa propre politique de confidentialité.
      </p>
    </PageLegale>
  );
}
