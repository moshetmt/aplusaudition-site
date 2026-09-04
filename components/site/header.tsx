"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";

const btnOr = cn(
  buttonVariants({ variant: "default" }),
  "h-12 px-5 text-[17px] font-bold rounded-full hover:bg-sable-500"
);
const btnContour = cn(
  buttonVariants({ variant: "outline" }),
  "h-12 px-5 text-[17px] font-bold rounded-full border-2 border-sable-900 bg-white hover:bg-sable-50"
);

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-sable-200 bg-white">
      <div className="mx-auto flex h-[68px] w-[min(1200px,100%-48px)] items-center gap-3 md:h-[84px] md:gap-8">
        <Link href="/#haut" aria-label="A+ Audition, retour à l'accueil" className="flex shrink-0 items-center gap-3.5">
          <Image src="/images/logo.png" alt="" width={58} height={58} className="size-[46px] md:size-[58px]" priority />
          <span className="flex flex-col">
            <span className="text-[21px] font-bold leading-none md:text-2xl">{site.nom}</span>
            <span className="mt-1 hidden text-sm text-muted-foreground md:block">Audioprothésiste diplômé d'État · Cannes</span>
          </span>
        </Link>

        <nav aria-label="Menu principal" className="ml-auto hidden md:block">
          <ul className="flex gap-6 lg:gap-8">
            {site.nav.map((item, i) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={i === 0 ? "page" : undefined}
                  className="relative inline-block py-2.5 font-semibold after:absolute after:inset-x-0 after:bottom-0.5 after:h-[3px] after:origin-left after:scale-x-0 after:bg-sable-400 after:transition-transform after:duration-200 hover:after:scale-x-100 aria-[current]:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2.5 md:ml-0 md:gap-3.5">
          <a href={site.telephoneHref} className={cn(btnContour, "hidden md:inline-flex")}>
            <Phone className="size-5" aria-hidden="true" />
            {site.telephone}
          </a>
          <a href={site.doctolib} className={cn(btnOr, "hidden md:inline-flex")}>
            Prendre rendez-vous
          </a>

          <a
            href={site.telephoneHref}
            aria-label={`Appeler le ${site.telephone}`}
            className="grid size-12 place-items-center rounded-full bg-sable-400 text-sable-900 md:hidden"
          >
            <Phone className="size-[22px]" aria-hidden="true" />
          </a>

          <Sheet>
            <SheetTrigger
              aria-label="Ouvrir le menu"
              className="grid size-12 place-items-center rounded-full border-2 border-sable-900 bg-white text-sable-900 md:hidden"
            >
              <Menu className="size-6" aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[min(340px,85vw)] bg-white p-6 sm:max-w-none">
              <SheetTitle className="text-xl font-bold">Menu</SheetTitle>
              <nav aria-label="Menu mobile" className="mt-2 flex flex-col">
                {site.nav.map((item) => (
                  <SheetClose
                    key={item.href}
                    render={<Link href={item.href} />}
                    className="border-b border-sable-200 py-3.5 text-xl font-semibold"
                  >
                    {item.label}
                  </SheetClose>
                ))}
              </nav>
              <Separator className="my-2 bg-sable-200" />
              <a href={site.doctolib} className={cn(btnOr, "w-full")}>
                Prendre rendez-vous
              </a>
              <a href={site.telephoneHref} className={cn(btnContour, "w-full")}>
                <Phone className="size-5" aria-hidden="true" />
                {site.telephone}
              </a>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
