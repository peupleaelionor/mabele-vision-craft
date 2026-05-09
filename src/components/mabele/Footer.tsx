import { Link } from "react-router-dom";
import { Logo } from "./Logo";

const cols = [
  {
    title: "Produit",
    links: [
      { to: "/chat", label: "Essayer Mabele" },
      { to: "/agents", label: "Agents" },
      { to: "/#capacites", label: "Capacités" },
      { to: "/#tarifs", label: "Tarifs" },
    ],
  },
  {
    title: "Confiance",
    links: [
      { to: "/security", label: "Sécurité" },
      { to: "/sources", label: "Sources" },
      { to: "/privacy", label: "Confidentialité" },
      { to: "/terms", label: "Conditions" },
    ],
  },
  {
    title: "À propos",
    links: [
      { to: "/about", label: "L'histoire" },
      { to: "/identity", label: "Identité" },
      { to: "/contact", label: "Contact" },
      { to: "/login", label: "Connexion" },
    ],
  },
];

export const Footer = () => (
  <footer className="bg-background border-t hairline">
    <div className="container-edge py-16 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
        <div>
          <Logo className="h-7" />
          <p className="mt-5 font-serif text-2xl sm:text-3xl text-foreground leading-snug max-w-md">
            Née en RDC, <span className="italic text-primary">utile partout.</span>
          </p>
          <a href="mailto:contact@imabele.com" className="mt-4 inline-block text-sm text-muted-foreground hover:text-foreground">
            contact@imabele.com
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground">{c.title}</div>
              <ul className="mt-4 space-y-2.5 text-sm">
                {c.links.map((l) => (
                  <li key={l.to + l.label}>
                    <Link to={l.to} className="text-foreground/80 hover:text-foreground transition">{l.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 pt-6 border-t hairline text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 justify-between">
        <span>© 2026 MABELE — Une intelligence pour comprendre, créer et décider.</span>
        <span className="tracking-[0.2em] uppercase">Comprendre · Créer · Décider · Agir</span>
      </div>
    </div>
  </footer>
);
