"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { site } from "@/lib/site";
import { BtnDoctolib } from "@/components/site/ui";

/* En-tete (v6, 09/09) : la marque dessinee (sans le mot AUDITION, illisible en petit) + le nom,
   menu centre, telephone en texte, un seul bouton or avec le logo Doctolib. */
function Marque() {
  return (
    <Link href="/" aria-label="A+ Audition, retour a l'accueil" className="inline-flex items-center gap-3">
      <Image src="/images/logo-marque.png" alt="" width={240} height={240} className="size-10 md:size-12" priority />
      <span className="text-[21px] font-semibold tracking-[-0.02em] text-sable-950 md:text-[23px]">A<span className="text-sable-400">+</span>&nbsp;Audition</span>
    </Link>
  );
}

export function Header() {
  const chemin = usePathname();
  return (
    <header className="sticky top-0 z-40 border-b border-sable-200 bg-white">
      <div className="relative mx-auto flex h-16 w-[min(1200px,100%-40px)] items-center justify-between gap-8 md:w-[min(1200px,100%-64px)] lg:h-24">
        <Marque />

        <nav aria-label="Menu principal" className="hidden lg:block">
          <ul className="flex gap-7 xl:gap-9">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={chemin === item.href ? "page" : undefined}
                  className="relative inline-block py-3 text-[17px] text-sable-800 after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-sable-400 after:transition-transform after:duration-200 hover:text-sable-950 hover:after:scale-x-100 aria-[current]:text-sable-950 aria-[current]:after:scale-x-100"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-5 lg:flex xl:gap-7">
          <a href={site.telephoneHref} aria-label={`Appeler le ${site.telephone}`} className="inline-flex min-h-12 items-center gap-2 whitespace-nowrap text-[17px] font-semibold text-sable-950 hover:text-sable-700">
            <Phone className="size-[18px]" strokeWidth={1.75} aria-hidden="true" />
            <span className="hidden xl:inline">{site.telephone}</span>
          </a>
          <BtnDoctolib className="h-12 px-5 text-[16px] xl:px-6 xl:text-[17px]" />
        </div>

        <div className="flex items-center lg:hidden">
          <a href={site.telephoneHref} aria-label={`Appeler le ${site.telephone}`} className="grid size-12 place-items-center text-sable-950">
            <Phone className="size-6" strokeWidth={1.75} aria-hidden="true" />
          </a>
          <Sheet>
            <SheetTrigger aria-label="Ouvrir le menu" className="-mr-3 grid size-12 place-items-center text-sable-950">
              <Menu className="size-7" strokeWidth={1.5} aria-hidden="true" />
            </SheetTrigger>
            <SheetContent side="right" className="w-full bg-white p-0 sm:max-w-none">
              <div className="flex h-full flex-col px-6 pb-8 pt-20">
                <SheetTitle className="sr-only">Menu</SheetTitle>
                <nav aria-label="Menu mobile" className="flex flex-col">
                  {site.nav.map((item) => (
                    <SheetClose
                      key={item.href}
                      render={<Link href={item.href} />}
                      className="border-b border-sable-200 py-5 text-[26px] font-semibold tracking-[-0.01em] text-sable-950"
                    >
                      {item.label}
                    </SheetClose>
                  ))}
                </nav>
                <div className="mt-auto flex flex-col gap-5 pt-10">
                  <BtnDoctolib />
                  <a href={site.telephoneHref} className="inline-flex min-h-12 items-center justify-center gap-2.5 text-[19px] font-semibold text-sable-950 underline decoration-sable-400 decoration-2 underline-offset-[6px]">
                    <Phone className="size-5" strokeWidth={1.75} aria-hidden="true" />
                    {site.telephone}
                  </a>
                  <p className="text-center text-[15px] text-sable-700">{site.horaires}</p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
