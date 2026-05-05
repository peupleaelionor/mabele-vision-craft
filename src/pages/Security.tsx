import { PageShell, PageHeader } from "@/components/mabele/PageShell";
import { Shield, Lock, BookOpen, Database, AlertTriangle, Sparkles } from "lucide-react";

const items = [
  { icon: Shield, title: "Chiffrement de bout en bout", desc: "Transport TLS 1.3, stockage chiffré, isolation par client." },
  { icon: Lock, title: "Confidentialité par défaut", desc: "Aucune donnée client n'entraîne nos modèles. Jamais." },
  { icon: BookOpen, title: "Sources et vérification", desc: "Réponses traçables, citations claires lorsque pertinent." },
  { icon: Database, title: "Vos données, votre contrôle", desc: "Export, suppression, rétention configurables." },
  { icon: AlertTriangle, title: "Limites affichées", desc: "Mabele indique quand elle n'est pas certaine." },
  { icon: Sparkles, title: "Audit et conformité", desc: "Journaux d'accès, RGPD, DPA disponibles." },
];

const Security = () => (
  <PageShell title="Sécurité" description="Sécurité de bout en bout, confidentialité par défaut.">
    <PageHeader eyebrow="Sécurité" title="Sérieux par défaut." lead="MABELE protège vos données comme si c'étaient les nôtres." />
    <section className="container-edge pb-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="rounded-2xl border hairline bg-card p-6">
            <Icon className="h-5 w-5 text-accent" />
            <div className="mt-5 font-serif text-xl">{title}</div>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  </PageShell>
);
export default Security;
