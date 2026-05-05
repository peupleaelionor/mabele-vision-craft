import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

const nav = [
  { label: "Produit", href: "#capacites" },
  { label: "Capacités", href: "#capacites" },
  { label: "Confiance", href: "#confiance" },
  { label: "Tarifs", href: "#tarifs" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b hairline">
      <div className="container-edge flex h-16 items-center justify-between">
        <Link to="/" aria-label="MABELE accueil" className="flex items-center">
          <Logo className="h-7" />
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm text-foreground/80">
          {nav.map((n) => (
            <a key={n.label} href={n.href} className="hover:text-foreground transition-colors">{n.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/chat" className="text-sm text-foreground/80 hover:text-foreground">Se connecter</Link>
          <Link to="/chat" className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-95 transition">
            Essayer Mabele
          </Link>
        </div>
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t hairline bg-background">
          <div className="container-edge py-4 flex flex-col gap-4">
            {nav.map((n) => (
              <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="text-base text-foreground/80">{n.label}</a>
            ))}
            <Link to="/chat" className="mt-2 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm text-primary-foreground">
              Essayer Mabele
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
