import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { cont, sect, h2, lead, lien, photo, Kicker, BtnDoctolib } from "@/components/site/ui";

export function Acces() {
  return (
    <section id="contact" className={`bg-white ${sect}`}>
      <div className={`${cont} grid gap-12 md:grid-cols-2 md:items-start md:gap-20`}>
        <div>
          <Kicker>Nous trouver</Kicker>
          <h2 className={h2}>Boulevard Alexandre III, à deux pas de la Croisette</h2>

          {/* Acces (10/09) : uniquement ce qui est verifiable sur la photo de la devanture
             et dans le dossier. Rien sur le stationnement ni les bus, l'operateur n'a pas
             encore donne l'information et l'inventer enverrait les patients au mauvais endroit. */}
          <p className={`${lead} mt-6`}>
            Le centre est de plain-pied, en rez-de-chaussée sur le boulevard : la vitrine donne sur la rue et
            l&rsquo;entrée se fait directement depuis le trottoir, sans marche ni interphone.
          </p>
          <p className={`${lead} mt-4`}>
            Vous êtes dans le quartier Croisette et Alexandre III, à quelques minutes à pied du front de mer.
            Si vous venez pour un <Link href="/bilan-auditif-cannes/" className={lien}>bilan auditif gratuit</Link>,
            prévoyez de quoi patienter quelques minutes : Gabriel reçoit seul et prend le temps avec chaque personne.
          </p>

          <dl className="mt-8 divide-y divide-sable-200 border-y border-sable-200">
            <div className="grid gap-1 py-5 md:grid-cols-[140px_1fr] md:gap-6">
              <dt className="text-[13px] font-semibold uppercase tracking-[0.2em] text-sable-700 md:pt-1.5">Adresse</dt>
              <dd className="m-0 text-[18px] font-semibold text-sable-950 md:text-[20px]">{site.adresse}</dd>
            </div>
            <div className="grid gap-1 py-5 md:grid-cols-[140px_1fr] md:gap-6">
              <dt className="text-[13px] font-semibold uppercase tracking-[0.2em] text-sable-700 md:pt-1.5">Horaires</dt>
              <dd className="m-0">
                <table className="w-full max-w-[380px] border-collapse text-[17px] md:text-[18px]">
                  <tbody>
                    {site.horairesTable.map((h) => (
                      <tr key={h.jours}>
                        <th scope="row" className="py-1 pr-4 text-left font-semibold text-sable-950">{h.jours}</th>
                        <td className="py-1 text-right text-sable-800">{h.heures}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </dd>
            </div>
            <div className="grid gap-1 py-5 md:grid-cols-[140px_1fr] md:gap-6">
              <dt className="text-[13px] font-semibold uppercase tracking-[0.2em] text-sable-700 md:pt-1.5">Téléphone</dt>
              <dd className="m-0">
                <a href={site.telephoneHref} className={lien}>
                  <Phone className="size-5" strokeWidth={1.75} aria-hidden="true" />
                  {site.telephone}
                </a>
              </dd>
            </div>
            <div className="grid gap-1 py-5 md:grid-cols-[140px_1fr] md:gap-6">
              <dt className="text-[13px] font-semibold uppercase tracking-[0.2em] text-sable-700 md:pt-1.5">E-mail</dt>
              <dd className="m-0">
                <a href={`mailto:${site.email}`} className="inline-flex min-h-12 items-center text-[18px] text-sable-800 underline decoration-sable-200 underline-offset-[6px] hover:decoration-sable-400">{site.email}</a>
              </dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-col items-start gap-5 md:flex-row md:items-center md:gap-10">
            <BtnDoctolib className="w-full max-w-[360px] md:w-auto" />
            <a href={site.itineraire} target="_blank" rel="noopener" className={lien}>
              Itinéraire
              <ArrowUpRight className="size-5 text-sable-400" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </div>

        <Image
          src="/images/devanture.webp"
          alt="La devanture d'A+ Audition, boulevard Alexandre III à Cannes"
          width={1360}
          height={842}
          sizes="(min-width: 960px) 560px, 100vw"
          className={`${photo} aspect-[4/3] object-[50%_20%] md:aspect-[4/5]`}
        />
      </div>
    </section>
  );
}
