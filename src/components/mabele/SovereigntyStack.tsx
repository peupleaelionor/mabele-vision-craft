import { Brain, Database, FileSignature, CreditCard, ShieldCheck, Workflow, Search, Bot, LineChart, LockKeyhole } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "Moteur Mayele",
    source: "LMNOX · iKEMA.AI · CLONE-ZEUS",
    desc: "Un noyau multi-providers, agents, mémoire, prompts métier et raisonnement long pour éviter la dépendance à un seul modèle.",
  },
  {
    icon: Database,
    title: "Données privées & RAG",
    source: "AI.NEGOCIATOR · signaturepdf",
    desc: "Ingestion documents, extraction PDF, base vectorielle, citations et scoring de confiance pour des réponses traçables.",
  },
  {
    icon: Workflow,
    title: "Automatisation souveraine",
    source: "Dev-arsenal · Init-SaaS · LMNOX-LinkedIn-Leads",
    desc: "Agents internes pour surveiller le build, relancer les workflows, générer des leads et convertir sans dépendre d'un opérateur manuel.",
  },
  {
    icon: CreditCard,
    title: "Monétisation intégrée",
    source: "stripe-payment-app · LMNOX-AI-Money",
    desc: "Abonnements, crédits, paiement, coupons et offres business pour transformer MABELE en SaaS rentable dès la V1.",
  },
  {
    icon: FileSignature,
    title: "Confiance documentaire",
    source: "signaturepdf · MATTDESIGN.AI",
    desc: "Signature, documents, propositions, contrats, présentations et livrables propres pour entreprises, diaspora et administrations.",
  },
  {
    icon: LineChart,
    title: "Décision & marché",
    source: "erfytrade-ai · freqtrade · AI.NEGOCIATOR",
    desc: "Analyse de marché, signaux, risques, comparaisons et tableaux de décision sans transformer MABELE en simple outil de trading.",
  },
];

const openSource = [
  { name: "LiteLLM", role: "Gateway multi-modèles, routage, fallback, coûts" },
  { name: "Ollama / vLLM", role: "Inférence locale ou serveur privé pour souveraineté" },
  { name: "LlamaIndex / LangChain", role: "RAG, connecteurs, agents documentaires" },
  { name: "Qdrant / pgvector", role: "Mémoire vectorielle et recherche sémantique" },
  { name: "n8n", role: "Automatisations business, leads, alertes, ops" },
  { name: "Open WebUI / LibreChat", role: "Benchmark UX chat auto-hébergée" },
];

export const SovereigntyStack = () => (
  <section id="souverainete" className="relative overflow-hidden bg-forest text-primary-foreground">
    <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_top_left,#F8F6F1,transparent_34%),radial-gradient(circle_at_bottom_right,#C85C20,transparent_28%)]" />
    <div className="container-edge relative py-24 sm:py-32">
      <div className="max-w-4xl">
        <p className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-primary-foreground/60">
          <span className="copper-spark" aria-hidden /> Souveraineté IA
        </p>
        <h2 className="mt-6 font-serif text-4xl sm:text-6xl leading-[1] tracking-tight text-balance">
          Un seul produit. Plusieurs moteurs. Une IA plus indépendante.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/72">
          Les anciens projets ne doivent pas être supprimés brutalement : ils deviennent des modules, des preuves techniques ou des briques internes pour rendre MABELE plus fiable, plus puissant et plus monétisable.
        </p>
      </div>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {pillars.map(({ icon: Icon, title, source, desc }) => (
          <article key={title} className="rounded-3xl border border-white/12 bg-white/[0.055] p-6 backdrop-blur-sm transition hover:bg-white/[0.085]">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-[#DCE6DE]">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-serif text-2xl leading-tight">{title}</h3>
            <p className="mt-2 text-xs uppercase tracking-[0.16em] text-[#C85C20]">{source}</p>
            <p className="mt-4 text-sm leading-6 text-primary-foreground/68">{desc}</p>
          </article>
        ))}
      </div>

      <div className="mt-16 rounded-[2rem] border border-white/12 bg-[#F8F6F1] p-6 text-[#0E0E0E] shadow-elevated sm:p-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">À intégrer avant publicité</p>
            <h3 className="mt-3 font-serif text-3xl leading-tight">Socle open-source conseillé</h3>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-primary/8 px-4 py-2 text-sm text-primary">
            <ShieldCheck className="h-4 w-4" /> Priorité V1 stable
          </div>
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {openSource.map((tool) => (
            <div key={tool.name} className="rounded-2xl border hairline bg-card p-4">
              <div className="flex items-center gap-2 font-medium">
                <LockKeyhole className="h-4 w-4 text-primary" /> {tool.name}
              </div>
              <p className="mt-2 text-sm leading-5 text-muted-foreground">{tool.role}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2 text-xs text-muted-foreground">
          <span className="rounded-full border hairline px-3 py-1">Garder en pause, ne pas supprimer</span>
          <span className="rounded-full border hairline px-3 py-1">Migrer seulement les briques utiles</span>
          <span className="rounded-full border hairline px-3 py-1">Unifier dans MABELE Core</span>
        </div>
      </div>
    </div>
  </section>
);
