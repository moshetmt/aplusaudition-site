import Link from "next/link";
import { PageLegale } from "@/components/site/page-legale";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <PageLegale titre="Cette page n'existe pas">
      <p>L'adresse est peut-être erronée, ou la page a été déplacée.</p>
      <p className="flex flex-wrap gap-3 pt-2">
        <Link href="/" className={cn(buttonVariants({ variant: "default" }), "h-12 rounded-full px-6 text-[17px] font-bold no-underline hover:bg-sable-500")}>
          Retour à l'accueil
        </Link>
        <a href={site.telephoneHref} className={cn(buttonVariants({ variant: "outline" }), "h-12 rounded-full border-2 border-sable-900 bg-white px-6 text-[17px] font-bold no-underline hover:bg-sable-50")}>
          {site.telephone}
        </a>
      </p>
    </PageLegale>
  );
}
