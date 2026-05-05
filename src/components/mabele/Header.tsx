import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { Link, useLocation } from "react-router-dom";

const primaryNav = [
  { label: "Essayer", to: "/try" },
  { label: "Capacités", to: "/confection" },
  { label: "Agents", to: "/agents" },
  { label: "Tarifs", to: "/pricing" },
  { label: "Sécurité", to: "/security" },
];

const mobileExtra = [
  { label: "À propos", to: "/about" },
  { label: "Connexion", to: "/login" },
  { label: "Créer un compte", to: "/signup" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b hairline">
      <div className="container-edge flex h-16 items-center justify-between">
        <Link to="/" aria-label="MABELE accueil" className="flex items-center">
          <Logo className="h-7" />
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm text-foreground/80">
          {primaryNav.map((n) => (
            <Link key={n.label} to={n.to} className="hover:text-foreground transition-colors">{n.label}</Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm text-foreground/80 hover:text-foreground">Connexion</Link>
          <Link to="/try" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-95 transition">
            Commencer <ArrowUpRight className="h-3.5 w-3.5" />
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
        <div className="md:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-background overflow-y-auto">
          <div className="container-edge py-8 flex flex-col">
            <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">Menu</div>
            <ul className="mt-6 flex flex-col divide-y divide-border">
              {primaryNav.concat(mobileExtra).map((n) => (
                <li key={n.label}>
                  <Link to={n.to} className="flex items-center justify-between py-4 font-serif text-2xl text-foreground">
                    {n.label}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="/try" className="mt-10 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base text-primary-foreground">
              Commencer maintenant <ArrowUpRight className="h-4 w-4" />
            </Link>
            <p className="mt-6 text-xs text-muted-foreground text-center tracking-wide">
              Sécurisé · Confidentiel · Conçu pour vous
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
