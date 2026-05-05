import { Shield, Lock, BookOpen, Database, AlertTriangle, Sparkles } from "lucide-react";

const items = [
  { icon: Shield, title: "Sécurité de bout en bout", desc: "Chiffrement, isolation, audit. Vos données restent vôtres." },
  { icon: Lock, title: "Confidentialité par défaut", desc: "Aucune donnée client n'entraîne nos modèles. Jamais." },
  { icon: BookOpen, title: "Sources & vérification", desc: "Réponses traçables, citations claires lorsque pertinent." },
  { icon: Database, title: "Données privées", desc: "Vos documents restent dans votre espace, sous votre contrôle." },
  { icon: AlertTriangle, title: "Limites affichées", desc: "Mabele indique quand elle n'est pas certaine." },
  { icon: Sparkles, title: "Action recommandée", desc: "Une réponse claire, une prochaine étape concrète." },
];

export const Trust = () => (
  <section id="confiance" className="bg-background border-t hairline">
    <div className="container-edge py-24 sm:py-28">
      <div className="max-w-3xl">
        <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground inline-flex items-center gap-2">
          <span className="copper-spark" aria-hidden /> Confiance
        </p>
        <h2 className="mt-6 font-serif text-4xl sm:text-6xl leading-[1] tracking-tight text-balance">
          Une intelligence à la hauteur de vos décisions.
        </h2>
        <p className="mt-6 text-muted-foreground max-w-xl">
          MABELE est pensée pour les équipes, entrepreneurs et particuliers qui ne peuvent pas se permettre l'à-peu-près.
        </p>
      </div>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border hairline p-6 bg-card">
            <Icon className="h-5 w-5 text-accent" />
            <div className="mt-5 font-serif text-xl">{title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
