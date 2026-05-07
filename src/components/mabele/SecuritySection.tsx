import { SECURITY } from "@/lib/site-content";

export const SecuritySection = () => (
  <section id="securite" className="bg-background border-t hairline">
    <div className="container-edge py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground inline-flex items-center gap-2">
          <span className="copper-spark" aria-hidden /> Sécurité
        </p>
        <h2 className="mt-5 font-serif text-3xl sm:text-5xl leading-[1.05] tracking-tight text-balance">
          Une intelligence à la hauteur<br />
          <span className="italic text-primary">de vos décisions.</span>
        </h2>
        <p className="mt-5 text-muted-foreground max-w-lg">
          Sobre, claire, sans promesse exagérée. Voici ce que MABELE garantit aujourd'hui.
        </p>
      </div>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {SECURITY.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-3xl border hairline p-7 bg-card hover:border-primary/30 transition">
            <Icon className="h-5 w-5 text-accent" strokeWidth={1.6} />
            <div className="mt-5 font-serif text-2xl">{title}</div>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
