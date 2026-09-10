import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { cont, h2, lienClair, Kicker, BtnDoctolib } from "@/components/site/ui";

/* L'unique zone sombre du site : le contact et le pied de page, fusionnes (09/09). */
export function Footer({ contact = true }: { contact?: boolean }) {
  return (
    <footer className="bg-sable-950 text-white">
      {contact && (
        <section id="contact" aria-label="Nous trouver" className={`${cont} grid gap-12 py-20 md:grid-cols-[7fr_5fr] md:gap-16 md:py-32`}>
          <div>
            <Kicker sombre>Nous trouver</Kicker>
            <h2 className={`${h2} text-white`}>Boulevard Alexandre III, à deux pas de la Croisette</h2>
            <p className="mt-6 text-[18px] text-sable-200 md:text-[20px]">{site.adresse}</p>
            <table className="mt-6 w-full max-w-[400px] border-collapse text-[17px] md:text-[18px]">
              <tbody>
                {site.horairesTable.map((h) => (
                  <tr key={h.jours} className="border-b border-white/10 last:border-0">
                    <th scope="row" className="py-2.5 pr-4 text-left font-semibold text-white">{h.jours}</th>
                    <td className="py-2.5 text-right text-sable-200">{h.heures}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-start gap-6 md:justify-center">
            <BtnDoctolib className="w-full max-w-[360px] md:w-auto" />
            <a href={site.telephoneHref} className={lienClair}>
              <Phone className="size-5" strokeWidth={1.75} aria-hidden="true" />
              {site.telephone}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex min-h-12 items-center text-[18px] text-sable-200 underline decoration-white/30 underline-offset-[6px] hover:text-white">{site.email}</a>
            <a href={site.itineraire} target="_blank" rel="noopener" className="inline-flex min-h-12 items-center gap-1.5 text-[18px] text-sable-200 underline decoration-white/30 underline-offset-[6px] hover:text-white">
              Itinéraire
              <ArrowUpRight className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
            </a>
          </div>
        </section>
      )}

      <div className={contact ? "border-t border-white/10" : ""}>
        <div className={`${cont} flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between md:py-12`}>
          <div className="flex items-center gap-4">
            <Image src="/images/logo-marque-blanc.png" alt="" width={240} height={240} className="size-14" />
            <p className="text-[15px] leading-snug text-sable-200">
              Audioprothésiste diplômé d'État<br />Membre du réseau Total Audition
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-1 text-[16px] text-sable-200">
            {site.nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="inline-flex min-h-11 items-center hover:text-white">{n.label}</Link></li>
            ))}
            <li><Link href="/bilan-auditif-cannes/" className="inline-flex min-h-11 items-center hover:text-white">Bilan auditif gratuit</Link></li>
            <li><Link href="/mentions-legales/" className="inline-flex min-h-11 items-center hover:text-white">Mentions légales</Link></li>
            <li><Link href="/confidentialite/" className="inline-flex min-h-11 items-center hover:text-white">Confidentialité</Link></li>
          </ul>
          <p className="text-[15px] text-sable-300">© {new Date().getFullYear()} {site.nom}</p>
        </div>
      </div>
    </footer>
  );
}
