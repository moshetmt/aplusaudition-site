export function PageEntete({ sur, titre, intro }: { sur: string; titre: string; intro: string }) {
  return (
    <section className="border-b border-sable-200 bg-sable-100 py-12 md:py-16">
      <div className="mx-auto w-[min(1200px,100%-48px)]">
        <p className="mb-3 text-[15px] font-bold uppercase tracking-[0.08em] text-sable-700">{sur}</p>
        <h1 className="mb-4 max-w-[760px] text-balance text-[clamp(30px,7vw,40px)] font-bold leading-[1.12] md:text-[48px]">{titre}</h1>
        <p className="max-w-[640px] text-muted-foreground md:text-xl">{intro}</p>
      </div>
    </section>
  );
}
