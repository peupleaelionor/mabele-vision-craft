import { Logo } from "@/components/mabele/Logo";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { LayoutDashboard, CreditCard, Settings as SettingsIcon, MessageSquare, LogOut } from "lucide-react";

const items = [
  { to: "/dashboard", label: "Tableau de bord", icon: LayoutDashboard },
  { to: "/billing", label: "Facturation", icon: CreditCard },
  { to: "/settings", label: "Paramètres", icon: SettingsIcon },
];

export const AppShell = ({ title, children }: { title: string; children: React.ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => { document.title = `${title} — MABELE AI`; }, [title, pathname]);
  return (
    <div className="min-h-dvh flex bg-background">
      <aside className="hidden lg:flex w-64 flex-col border-r hairline p-6">
        <Link to="/"><Logo className="h-7" /></Link>
        <Link to="/try" className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm text-primary-foreground">
          <MessageSquare className="h-4 w-4" /> Ouvrir le chat
        </Link>
        <nav className="mt-8 space-y-1">
          {items.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end className={({ isActive }) => `flex items-center gap-3 rounded-lg px-3 py-2 text-sm ${isActive ? "bg-primary/5 text-primary" : "text-foreground/75 hover:bg-muted/40"}`}>
              <Icon className="h-4 w-4" /> {label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t hairline">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
            <LogOut className="h-4 w-4" /> Quitter
          </Link>
        </div>
      </aside>
      <main className="flex-1 min-w-0">
        <header className="lg:hidden border-b hairline">
          <div className="container-edge h-14 flex items-center justify-between">
            <Link to="/"><Logo className="h-6" /></Link>
            <Link to="/try" className="text-sm text-primary">Chat</Link>
          </div>
        </header>
        <div className="container-edge py-10 sm:py-14">
          <h1 className="font-serif text-4xl sm:text-5xl tracking-tight">{title}</h1>
          <div className="mt-10">{children}</div>
        </div>
      </main>
    </div>
  );
};

const recents = [
  "Stratégie de lancement Kinshasa",
  "Synthèse contrat fournisseur",
  "Idées de posts LinkedIn",
];

const Dashboard = () => (
  <AppShell title="Bienvenue.">
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 rounded-2xl border hairline bg-card p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Conversations récentes</div>
        <ul className="mt-5 divide-y divide-border">
          {recents.map((r) => (
            <li key={r}><Link to="/try" className="block py-3 text-sm hover:text-primary">{r}</Link></li>
          ))}
        </ul>
      </div>
      <div className="rounded-2xl border hairline bg-card p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Plan actuel</div>
        <div className="mt-4 font-serif text-3xl">Plus</div>
        <p className="mt-2 text-sm text-muted-foreground">Renouvellement automatique le 1er du mois.</p>
        <Link to="/billing" className="mt-6 inline-flex text-sm text-primary">Gérer →</Link>
      </div>
      <div className="lg:col-span-3 rounded-2xl border hairline bg-card p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Outils rapides</div>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {["Chat IA", "Docs IA", "Image IA", "Agents"].map((t) => (
            <Link key={t} to="/try" className="rounded-xl border hairline p-4 text-sm hover:border-primary/40">{t}</Link>
          ))}
        </div>
      </div>
    </div>
  </AppShell>
);
export default Dashboard;
