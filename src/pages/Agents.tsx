import { PageShell, PageHeader } from "@/components/mabele/PageShell";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const agents = [
  { name: "Instantané", use: "Réponses rapides et précises.", ex: "Résume ce mail en 3 lignes." },
  { name: "Réflexion longue", use: "Analyses profondes et structurées.", ex: "Compare 3 stratégies de lancement." },
  { name: "Terrain", use: "Conseils ancrés dans le réel africain.", ex: "Comment ouvrir une boutique à Kinshasa ?" },
  { name: "Business", use: "Décisions, modèles, opérations.", ex: "Construis-moi un P&L mensuel simple." },
  { name: "Investisseur", use: "Lecture financière et risques.", ex: "Analyse cette opportunité immobilière." },
  { name: "Admin & Droit", use: "Démarches, contrats, conformité.", ex: "Rédige une mise en demeure claire." },
  { name: "Créatif", use: "Idées, naming, narration.", ex: "Trouve un nom pour ma marque de café." },
  { name: "Tech", use: "Code, architecture, debug.", ex: "Refactore cette fonction TypeScript." },
  { name: "Langues", use: "Français, anglais, lingala, et plus.", ex: "Traduis ce message en lingala chaleureux." },
  { name: "Philosophe", use: "Cadrage, recul, sens.", ex: "Aide-moi à clarifier ma vision à 3 ans." },
  { name: "Max Univers", use: "Le tout-en-un sans limite.", ex: "Ouvre un mode large multi-disciplinaire." },
];

const Agents = () => (
  <PageShell title="Agents" description="Choisis ton Mayele : agents IA spécialisés pour chaque besoin.">
    <PageHeader eyebrow="Agents" title="Choisis ton Mayele." lead="Onze agents spécialisés. Une seule intelligence." />
    <section className="container-edge pb-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((a) => (
          <div key={a.name} className="rounded-2xl border hairline bg-card p-6 flex flex-col">
            <div className="font-serif text-2xl">{a.name}</div>
            <p className="mt-2 text-sm text-muted-foreground">{a.use}</p>
            <p className="mt-5 text-sm italic text-foreground/70 border-l-2 border-accent/40 pl-3">"{a.ex}"</p>
            <Link to="/try" className="mt-6 inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-80">
              Utiliser <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  </PageShell>
);
export default Agents;
