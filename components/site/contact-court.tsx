import { CalendarDays, Clock, MapPin, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export function ContactCourt() {
  return (
    <section id="contact" className="bg-white py-14 md:py-20">
      <div className="mx-auto flex w-[min(1200px,100%-48px)] flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <dl className="flex flex-col gap-3 md:text-lg">
          <div className="flex items-center gap-3">
            <dt className="sr-only">Adresse</dt>
            <MapPin className="size-6 shrink-0 text-sable-700" aria-hidden="true" />
            <dd className="m-0 font-semibold">{site.adresse}</dd>
          </div>
          <div className="flex items-center gap-3">
            <dt className="sr-only">Horaires</dt>
            <Clock className="size-6 shrink-0 text-sable-700" aria-hidden="true" />
            <dd className="m-0 text-muted-foreground">{site.horaires}</dd>
          </div>
        </dl>
        <div className="flex flex-wrap gap-3">
          <a
            href={site.doctolib}
            className={cn(buttonVariants({ variant: "default" }), "h-[54px] w-full rounded-full px-6 text-lg font-bold hover:bg-sable-500 sm:w-auto")}
          >
            <CalendarDays className="size-5" aria-hidden="true" />
            Prendre rendez-vous
          </a>
          <a
            href={site.telephoneHref}
            className={cn(buttonVariants({ variant: "outline" }), "h-[54px] w-full rounded-full border-2 border-sable-900 bg-white px-6 text-lg font-bold hover:bg-sable-50 sm:w-auto")}
          >
            <Phone className="size-5" aria-hidden="true" />
            {site.telephone}
          </a>
        </div>
      </div>
    </section>
  );
}
