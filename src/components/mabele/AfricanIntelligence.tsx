export const AfricanIntelligence = () => (
  <section className="relative overflow-hidden bg-background border-t hairline">
    <div className="container-edge py-20 sm:py-28">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground inline-flex items-center gap-2">
            <span className="copper-spark" aria-hidden /> Souveraineté
          </p>
          <h2 className="mt-5 font-serif text-3xl sm:text-5xl leading-[1.05] tracking-tight text-balance">
            Une intelligence enracinée.<br />
            <span className="italic text-primary">Une ambition mondiale.</span>
          </h2>
          <p className="mt-6 text-base text-muted-foreground max-w-md leading-relaxed">
            MABELE comprend les réalités africaines sans se limiter à l'Afrique.
            Pensée pour le continent, la diaspora et le monde.
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs">
            {["Français", "Anglais", "Lingala — bientôt"].map((l) => (
              <span key={l} className="rounded-full border hairline bg-card px-3 py-1.5 text-foreground/80">{l}</span>
            ))}
          </div>
        </div>

        {/* Carte abstraite Afrique */}
        <div className="relative aspect-[4/5] sm:aspect-square rounded-[28px] border hairline bg-card overflow-hidden">
          <svg viewBox="0 0 400 460" className="absolute inset-0 w-full h-full" aria-hidden>
            <defs>
              <radialGradient id="glow" cx="50%" cy="40%" r="55%">
                <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.18" />
                <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="460" fill="url(#glow)" />
            {/* silhouette Afrique très stylisée */}
            <path
              d="M180 40 C 240 50 300 90 305 160 C 310 220 280 260 290 310 C 295 350 270 400 220 425 C 180 445 140 430 120 390 C 100 350 95 310 110 270 C 95 230 80 190 100 140 C 120 90 140 55 180 40 Z"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="1.2"
              opacity="0.6"
            />
            {/* points réseau */}
            {[
              [195, 110], [220, 160], [180, 200], [240, 230], [205, 280],
              [170, 320], [230, 350], [200, 390], [260, 195], [150, 250],
            ].map(([x, y], i) => (
              <g key={i}>
                <circle cx={x} cy={y} r="2.5" fill="hsl(var(--accent))" />
                <circle cx={x} cy={y} r="8" fill="none" stroke="hsl(var(--accent))" strokeWidth="0.5" opacity="0.4" />
              </g>
            ))}
            {/* lignes */}
            <g stroke="hsl(var(--primary))" strokeWidth="0.6" opacity="0.35" fill="none">
              <line x1="195" y1="110" x2="220" y2="160" />
              <line x1="220" y1="160" x2="240" y2="230" />
              <line x1="180" y1="200" x2="205" y2="280" />
              <line x1="205" y1="280" x2="230" y2="350" />
              <line x1="170" y1="320" x2="200" y2="390" />
              <line x1="240" y1="230" x2="260" y2="195" />
              <line x1="150" y1="250" x2="170" y2="320" />
            </g>
          </svg>
          <div className="absolute bottom-5 left-5 right-5 text-xs text-muted-foreground">
            Kinshasa · Dakar · Abidjan · Lagos · Nairobi · Paris · Bruxelles
          </div>
        </div>
      </div>
    </div>
  </section>
);
