import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Logo } from "./Logo";
import { Link, useLocation } from "react-router-dom";
import { NAV } from "@/lib/site-content";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-md border-b hairline">
      <div className="container-edge flex h-14 sm:h-16 items-center justify-between">
        <Link to="/" aria-label="MABELE accueil" className="flex items-center">
          <Logo className="h-6 sm:h-7" />
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm text-foreground/80">
          {NAV.map((n) => (
            <Link key={n.label} to={n.to} className="hover:text-foreground transition-colors">{n.label}</Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-sm text-foreground/80 hover:text-foreground">Connexion</Link>
          <Link to="/chat" className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-95 transition">
            Essayer MABELE <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <button
          className="md:hidden p-2 -mr-2 text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-x-0 top-14 bottom-0 z-40 bg-background flex flex-col animate-fade-in">
          <div className="flex-1 overflow-y-auto px-6 pt-6 pb-4">
            <ul className="flex flex-col divide-y divide-border">
              {NAV.map((n) => (
                <li key={n.label}>
                  <Link to={n.to} className="flex items-center justify-between py-4 font-serif text-2xl text-foreground">
                    {n.label}
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/login" className="flex items-center justify-between py-4 font-serif text-2xl text-foreground/70">
                  Connexion
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
                </Link>
              </li>
            </ul>
            <Link to="/chat" className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-base text-primary-foreground">
              Essayer MABELE <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="border-t hairline px-6 py-4 safe-bottom text-xs text-muted-foreground flex items-center justify-between">
            <span>© 2026 MABELE</span>
            <a href="mailto:contact@imabele.com" className="hover:text-foreground">contact@imabele.com</a>
          </div>
        </div>
      )}
    </header>
  );
};
