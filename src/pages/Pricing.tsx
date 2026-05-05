import { PageShell, PageHeader } from "@/components/mabele/PageShell";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  { name: "Gratuit", price: "0", period: "à vie", features: ["Chat Mayele essentiel", "3 agents", "Sans carte"], cta: "Commencer", highlight: false },
  { name: "Plus", price: "9", period: "/mois", features: ["Tous les agents", "Docs & Images IA", "Historique étendu"], cta: "Choisir Plus", highlight: false },
  { name: "Pro", price: "24", period: "/mois", features: ["Réflexion longue illimitée", "Vidéo, Musique, Sheets", "Priorité serveur"], cta: "Choisir Pro", highlight: true },
  { name: "Business", price: "49", period: "/utilisateur/mois", features: ["Espaces partagés", "Sécurité avancée", "Support prioritaire"], cta: "Choisir Business", highlight: false },
  { name: "Enterprise", price: "Sur mesure", period: "", features: ["SSO, SCIM, audit", "Déploiement dédié", "SLA & DPA"], cta: "Nous contacter", highlight: false },
];

const faqs = [
  ["Faut-il une carte bancaire pour commencer ?", "Non. Le plan Gratuit est sans carte."],
  ["Puis-je changer de plan ?", "Oui, à tout moment. Les changements sont au prorata."],
  ["Mes données sont-elles utilisées pour entraîner vos modèles ?", "Jamais. Vos données restent privées par défaut."],
];

const Pricing = () => (
  <PageShell title="Tarifs" description="Plans clairs, sans surprise. Sans carte pour commencer.">
    <PageHeader eyebrow="Tarifs" title="Des plans simples, à votre échelle." lead="Sans carte pour commencer. Annulable à tout moment." />
    <section className="container-edge pb-16">
      <div className="grid lg:grid-cols-5 gap-4">
        {plans.map((p) => (
          <div key={p.name} className={`rounded-2xl border p-6 flex flex-col ${p.highlight ? "border-primary bg-primary text-primary-foreground" : "hairline bg-card"}`}>
            <div className="font-serif text-2xl">{p.name}</div>
            <div className="mt-4 flex items-baseline gap-1">
              <span className="font-serif text-4xl">{p.price === "Sur mesure" ? p.price : `${p.price}€`}</span>
              <span className={`text-xs ${p.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{p.period}</span>
            </div>
            <ul className="mt-6 space-y-2.5 flex-1">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className={`h-4 w-4 mt-0.5 ${p.highlight ? "text-primary-foreground" : "text-primary"}`} />
                  <span className={p.highlight ? "text-primary-foreground/90" : "text-foreground/85"}>{f}</span>
                </li>
              ))}
            </ul>
            <Link
              to={p.name === "Enterprise" ? "/contact" : "/signup"}
              className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm transition ${p.highlight ? "bg-primary-foreground text-primary" : "bg-primary text-primary-foreground"}`}
            >
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
      <p className="mt-6 text-xs text-center text-muted-foreground">Sans carte pour commencer.</p>
    </section>
    <section className="container-edge pb-24">
      <h2 className="font-serif text-3xl sm:text-4xl">Questions fréquentes</h2>
      <div className="mt-8 divide-y divide-border border-y hairline">
        {faqs.map(([q, a]) => (
          <details key={q} className="group py-5">
            <summary className="cursor-pointer flex justify-between items-center font-serif text-lg">{q}<span className="text-muted-foreground group-open:rotate-45 transition">+</span></summary>
            <p className="mt-3 text-sm text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>
    </section>
  </PageShell>
);
export default Pricing;
