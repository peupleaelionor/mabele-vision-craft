const items = [
  "Données privées",
  "Sources vérifiables",
  "Réponses actionnables",
  "Pensé mobile-first",
  "FR · EN · Lingala bientôt",
];

export const TrustStrip = () => (
  <section className="bg-background border-y hairline">
    <div className="container-edge py-6">
      <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[12px] tracking-[0.14em] uppercase text-muted-foreground">
        {items.map((t, i) => (
          <li key={t} className="inline-flex items-center gap-3">
            <span className="copper-spark" aria-hidden />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);
