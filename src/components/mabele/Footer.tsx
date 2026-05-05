import { Logo } from "./Logo";
import { Link } from "react-router-dom";

const cols = [
  { title: "Produit", links: [["Tarifs", "/pricing"], ["Capacités", "/confection"], ["Agents", "/agents"], ["Sécurité", "/security"]] },
  { title: "Société", links: [["À propos", "/about"], ["Identité", "/identity"], ["Contact", "/contact"]] },
  { title: "Légal", links: [["Confidentialité", "/privacy"], ["Conditions", "/terms"], ["Sources", "/sources"]] },
];

export const Footer = () => (
  <footer className="bg-background border-t hairline">
    <div className="container-edge py-16">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Logo className="h-7" />
          <p className="mt-5 text-sm text-muted-foreground max-w-xs">
            Née en RDC, utile partout · Intelligence africaine.
          </p>
          <a href="mailto:contact@imabele.com" className="mt-4 inline-block text-sm text-foreground hover:text-primary">
            contact@imabele.com
          </a>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{c.title}</div>
            <ul className="mt-4 space-y-2.5">
              {c.links.map(([l, to]) => (
                <li key={l}><Link to={to} className="text-sm text-foreground/80 hover:text-foreground">{l}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mt-14 pt-6 border-t hairline flex flex-col sm:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} MABELE. Tous droits réservés.</span>
        <span>Moteur Mayele · Made with care</span>
      </div>
    </div>
  </footer>
);
