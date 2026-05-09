import { CAPABILITIES } from "@/lib/site-content";
import { useReveal } from "@/hooks/use-reveal";
import { useRef, useState } from "react";

const Card = ({
  i, icon: Icon, title, desc, span,
}: {
  i: number;
  icon: any;
  title: string;
  desc: string;
  span: string;
}) => {
  const cardRef = useRef<HTMLElement | null>(null);
  const [pos, setPos] = useState({ x: 50, y: 50, on: false });
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`${span} transition-all duration-700 ${shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${i * 60}ms` }}
    >
      <article
        ref={cardRef as any}
        onMouseMove={(e) => {
          const r = (e.currentTarget as HTMLElement).getBoundingClientRect();
          setPos({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100, on: true });
        }}
        onMouseLeave={() => setPos((p) => ({ ...p, on: false }))}
        className="group relative h-full overflow-hidden rounded-3xl bg-card border hairline p-7 sm:p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1"
        data-cursor
      >
        {/* Spotlight */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: `radial-gradient(420px circle at ${pos.x}% ${pos.y}%, hsl(var(--accent) / 0.10), transparent 45%)`,
          }}
        />
        <div className="relative">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
            <Icon className="h-5 w-5" strokeWidth={1.6} />
          </div>
          <h3 className="mt-7 font-serif text-2xl sm:text-3xl leading-tight tracking-tight">{title}</h3>
          <p className="mt-3 text-sm sm:text-[15px] text-muted-foreground leading-relaxed max-w-md">{desc}</p>
          <div className="mt-6 inline-flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-primary/0 group-hover:text-primary transition-colors">
            En savoir plus →
          </div>
        </div>
      </article>
    </div>
  );
};

// Bento layout pattern (mobile = simple, desktop = asymmetric, 8 cards)
const SPANS = [
  "lg:col-span-3 lg:row-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-2",
  "lg:col-span-3",
  "lg:col-span-3",
];

export const CapabilityGrid = () => (
  <section id="capacites" className="relative bg-background border-t hairline">
    <div className="container-edge py-24 sm:py-32">
      <div className="max-w-3xl">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground inline-flex items-center gap-2">
          <span className="copper-spark" aria-hidden /> Capacités
        </p>
        <h2 className="mt-5 font-serif text-4xl sm:text-6xl md:text-7xl leading-[1.0] tracking-[-0.02em] text-balance">
          Comprendre. Créer.<br />
          <span className="italic text-primary">Décider. Agir.</span>
        </h2>
        <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl">
          Une seule interface. Toutes les capacités dont vous avez besoin pour avancer vraiment.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-6 lg:auto-rows-[minmax(220px,auto)] gap-4">
        {CAPABILITIES.map((c, i) => (
          <Card key={c.title} i={i} {...c} span={SPANS[i] || "lg:col-span-2"} />
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="/agents"
          className="inline-flex items-center gap-2 rounded-full border hairline bg-card px-6 py-3 text-sm text-foreground hover:border-primary/40 transition"
        >
          Voir tous les agents →
        </a>
      </div>
    </div>
  </section>
);
