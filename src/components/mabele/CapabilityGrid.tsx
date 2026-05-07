import { CAPABILITIES } from "@/lib/site-content";

export const CapabilityGrid = () => (
  <section id="capacites" className="relative bg-background border-t hairline">
    <div className="container-edge py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground inline-flex items-center gap-2">
          <span className="copper-spark" aria-hidden /> Capacités
        </p>
        <h2 className="mt-5 font-serif text-3xl sm:text-5xl leading-[1.05] tracking-tight text-balance">
          Comprendre. Créer.<br />
          <span className="italic text-primary">Décider. Agir.</span>
        </h2>
        <p className="mt-5 text-muted-foreground max-w-lg">
          Une seule interface. Toutes les capacités dont vous avez besoin pour avancer vraiment.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {CAPABILITIES.map(({ icon: Icon, title, desc }) => (
          <article
            key={title}
            className="group rounded-3xl bg-card border hairline p-7 hover:border-primary/30 hover:shadow-soft hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
              <Icon className="h-4.5 w-4.5" strokeWidth={1.6} />
            </div>
            <h3 className="mt-6 font-serif text-2xl leading-tight">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);
