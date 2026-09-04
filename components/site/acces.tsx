import Image from "next/image";
import { CalendarDays, Clock, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function Acces() {
  return (
    <section id="contact" className="bg-white py-14 md:py-24">
      <div className="mx-auto grid w-[min(1200px,100%-48px)] gap-10 md:grid-cols-[6fr_6fr] md:items-center md:gap-16">
        <div>
          <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.08em] text-sable-700">Nous trouver</p>
          <h2 className="mb-6 text-balance text-[clamp(28px,6.5vw,34px)] font-bold leading-[1.15] md:text-[40px]">
            Boulevard Alexandre III, à deux pas de la Croisette
          </h2>

          <dl className="mb-8 flex flex-col gap-5">
            <div className="flex items-start gap-3.5">
              <dt className="sr-only">Adresse</dt>
              <MapPin className="mt-1 size-6 shrink-0 text-sable-700" aria-hidden="true" />
              <dd className="m-0 font-semibold md:text-xl">{site.adresse}</dd>
            </div>
            <div className="flex items-start gap-3.5">
              <dt className="sr-only">Horaires</dt>
              <Clock className="mt-1 size-6 shrink-0 text-sable-700" aria-hidden="true" />
              <dd className="m-0 w-full">
                <table className="w-full max-w-[380px] border-collapse md:text-lg">
                  <tbody>
                    {site.horairesTable.map((h) => (
                      <tr key={h.jours} className="border-b border-sable-200 last:border-0">
                        <th scope="row" className="py-1.5 pr-4 text-left font-semibold">{h.jours}</th>
                        <td className="py-1.5 text-right text-muted-foreground">{h.heures}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </dd>
            </div>
            <div className="flex items-start gap-3.5">
              <dt className="sr-only">Téléphone</dt>
              <Phone className="mt-1 size-6 shrink-0 text-sable-700" aria-hidden="true" />
              <dd className="m-0 font-semibold md:text-xl">
                <a href={site.telephoneHref} className="underline-offset-4 hover:underline">{site.telephone}</a>
              </dd>
            </div>
            <div className="flex items-start gap-3.5">
              <dt className="sr-only">E-mail</dt>
              <Mail className="mt-1 size-6 shrink-0 text-sable-700" aria-hidden="true" />
              <dd className="m-0 md:text-xl">
                <a href={`mailto:${site.email}`} className="underline-offset-4 hover:underline">{site.email}</a>
              </dd>
            </div>
          </dl>

          <div className="flex flex-wrap gap-3">
            <a
              href={site.itineraire}
              target="_blank"
              rel="noopener"
              className={cn(
                buttonVariants({ variant: "default" }),
                "h-[54px] w-full rounded-full px-6 text-lg font-bold hover:bg-sable-500 md:w-auto"
              )}
            >
              <Navigation className="size-5" aria-hidden="true" />
              Itinéraire
            </a>
            <a
              href={site.doctolib}
              className={cn(
                buttonVariants({ variant: "outline" }),
                "h-[54px] w-full rounded-full border-2 border-sable-900 bg-white px-6 text-lg font-bold hover:bg-sable-50 md:w-auto"
              )}
            >
              <CalendarDays className="size-5" aria-hidden="true" />
              Prendre rendez-vous
            </a>
          </div>
        </div>

        <Image
          src="/images/devanture.webp"
          alt="La devanture d'A+ Audition, boulevard Alexandre III à Cannes"
          width={1360}
          height={842}
          sizes="(min-width: 960px) 560px, 100vw"
          className="aspect-[4/3] w-full rounded-lg object-cover object-[50%_20%]"
        />
      </div>
    </section>
  );
}
