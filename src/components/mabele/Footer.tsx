import { Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Footer = () => (
  <footer className="bg-background border-t hairline">
    <div className="container-edge py-14 sm:py-16">
      <div className="flex flex-col items-start gap-6 sm:gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Logo className="h-7" />
          <p className="mt-4 font-serif text-xl text-foreground">Née en RDC, utile partout.</p>
          <a href="mailto:contact@imabele.com" className="mt-2 inline-block text-sm text-muted-foreground hover:text-foreground">
            contact@imabele.com
          </a>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-foreground/80">
          <Link to="/privacy" className="hover:text-foreground">Confidentialité</Link>
          <Link to="/terms" className="hover:text-foreground">Conditions</Link>
          <Link to="/sources" className="hover:text-foreground">Sources</Link>
          <Link to="/contact" className="hover:text-foreground">Contact</Link>
        </nav>
      </div>
      <div className="mt-10 pt-6 border-t hairline text-xs text-muted-foreground flex flex-col sm:flex-row gap-2 justify-between">
        <span>© 2026 MABELE</span>
        <span>Comprendre · Créer · Décider · Agir</span>
      </div>
    </div>
  </footer>
);
