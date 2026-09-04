import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-sable-900 text-sable-100">
      <div className="mx-auto grid w-[min(1200px,100%-48px)] gap-10 py-14 md:grid-cols-[5fr_3fr_4fr] md:gap-12 md:py-16">
        <div>
          <Image src="/images/logo-blanc.png" alt="A+ Audition" width={212} height={240} className="mb-5 h-16 w-auto" />
          <p className="mb-1 text-xl font-bold text-white">{site.nom}</p>
          <p className="mb-4">Audioprothésiste indépendant à Cannes, quartier Alexandre III. Membre du réseau Total Audition.</p>
          <p className="text-sable-200">{site.adresse}</p>
        </div>

        <div>
          <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.08em] text-sable-400">Le site</p>
          <ul className="flex flex-col gap-2">
            {site.nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className="underline-offset-4 hover:underline">{n.label}</Link>
              </li>
            ))}
            <li><Link href="/mentions-legales/" className="underline-offset-4 hover:underline">Mentions légales</Link></li>
            <li><Link href="/confidentialite/" className="underline-offset-4 hover:underline">Politique de confidentialité</Link></li>
          </ul>
        </div>

        <div>
          <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.08em] text-sable-400">Contact</p>
          <ul className="flex flex-col gap-2">
            <li><a href={site.telephoneHref} className="text-xl font-bold text-white underline-offset-4 hover:underline">{site.telephone}</a></li>
            <li><a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">{site.email}</a></li>
            <li className="pt-2 text-sable-200">
              {site.horairesTable.map((h) => (
                <span key={h.jours} className="block">{h.jours} : {h.heures}</span>
              ))}
            </li>
            <li className="pt-2"><a href={site.doctolib} className="font-semibold text-white underline-offset-4 hover:underline">Prendre rendez-vous sur Doctolib</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <p className="mx-auto w-[min(1200px,100%-48px)] py-5 text-[15px] text-sable-200">
          © {new Date().getFullYear()} {site.nom}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
