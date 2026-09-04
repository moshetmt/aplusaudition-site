import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";

export function PageLegale({ titre, children }: { titre: string; children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className="bg-white py-12 md:py-20">
        <article className="mx-auto w-[min(760px,100%-48px)] [&_h2]:mb-3 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-bold [&_p]:mb-4 [&_p]:text-muted-foreground [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-muted-foreground [&_a]:underline [&_a]:underline-offset-4">
          <h1 className="mb-6 text-[clamp(30px,7vw,40px)] font-bold leading-tight">{titre}</h1>
          {children}
        </article>
      </main>
      <Footer />
    </>
  );
}
