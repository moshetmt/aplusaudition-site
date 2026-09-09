import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export function PageLegale({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main id="contenu" className="bg-white py-16 md:py-24">
        <article className="mx-auto w-[min(760px,100%-40px)] [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-[24px] [&_h2]:font-semibold [&_h2]:text-sable-950 [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-sable-800 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-sable-800 [&_a]:underline [&_a]:decoration-sable-400 [&_a]:underline-offset-4">
          <h1 className="mb-8 text-[clamp(32px,7vw,40px)] font-semibold leading-tight tracking-[-0.02em] text-sable-950 md:text-[48px]">{titre}</h1>
          {children}
        </article>
      </main>
      <Footer contact={false} />
    </>
  );
}
