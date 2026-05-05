import { Shield, Lock, Compass } from "lucide-react";

const items = [
  { icon: Shield, title: "Sécurité de bout en bout", desc: "Chiffrement, isolation, et audit. Vos données restent vôtres." },
  { icon: Lock, title: "Confidentialité par défaut", desc: "Aucune donnée client n'entraîne nos modèles. Jamais." },
  { icon: Compass, title: "Conçu pour votre contexte", desc: "Français, anglais, lingala. RDC, Afrique, Europe, diaspora." },
];

export const Trust = () => (
  <section id="confiance" className="bg-background border-t hairline">
    <div className="container-edge py-24 sm:py-28">
      <div className="grid lg:grid-cols-3 gap-12 items-start">
        <div className="lg:col-span-1">
          <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground inline-flex items-center gap-2">
            <span className="copper-spark" aria-hidden /> Confiance
          </p>
          <h2 className="mt-6 font-serif text-4xl sm:text-5xl leading-[1.05] tracking-tight">
            Une intelligence <span className="italic text-primary">à la hauteur</span> de vos décisions.
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md">
            MABELE est pensée pour les équipes qui ne peuvent pas se permettre l'à-peu-près.
          </p>
        </div>
        <div className="lg:col-span-2 grid sm:grid-cols-3 gap-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border hairline p-6 bg-card">
              <Icon className="h-5 w-5 text-accent" />
              <div className="mt-5 font-serif text-xl">{title}</div>
              <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
