const items = [
  "Comprendre", "Créer", "Décider", "Agir",
  "Née en RDC", "Utile partout", "Souveraine", "Mobile-first",
];

export const Marquee = () => (
  <section aria-hidden className="relative bg-primary text-primary-foreground overflow-hidden border-y hairline">
    <div className="flex gap-12 py-5 sm:py-6 whitespace-nowrap animate-marquee will-change-transform">
      {[...items, ...items, ...items].map((t, i) => (
        <span key={i} className="inline-flex items-center gap-12 font-serif text-2xl sm:text-3xl tracking-tight">
          {t}
          <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
        </span>
      ))}
    </div>
  </section>
);
