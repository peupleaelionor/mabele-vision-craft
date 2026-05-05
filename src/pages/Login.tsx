import { Logo } from "@/components/mabele/Logo";
import { Link } from "react-router-dom";
import { useEffect } from "react";

interface Props {
  title: string;
  subtitle?: string;
  cta: string;
  altText: string;
  altLink: string;
  altLabel: string;
  children: React.ReactNode;
  note?: string;
}

export const AuthShell = ({ title, subtitle, cta, altText, altLink, altLabel, children, note }: Props) => {
  useEffect(() => { document.title = `${title} — MABELE AI`; }, [title]);
  return (
    <main className="min-h-dvh bg-background flex flex-col">
      <header className="container-edge h-16 flex items-center">
        <Link to="/"><Logo className="h-7" /></Link>
      </header>
      <div className="flex-1 flex items-center justify-center px-5 py-10">
        <div className="w-full max-w-sm">
          <h1 className="font-serif text-4xl tracking-tight">{title}</h1>
          {subtitle && <p className="mt-3 text-sm text-muted-foreground">{subtitle}</p>}
          <form className="mt-8 space-y-3" onSubmit={(e) => e.preventDefault()}>
            {children}
            <button className="w-full inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm text-primary-foreground">{cta}</button>
          </form>
          {note && <p className="mt-4 text-xs text-muted-foreground text-center">{note}</p>}
          <p className="mt-8 text-sm text-muted-foreground text-center">
            {altText} <Link to={altLink} className="text-foreground hover:text-primary">{altLabel}</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

const inputCls = "w-full rounded-xl border hairline bg-card px-4 py-3 text-sm outline-none focus:border-primary/40";

export const Login = () => (
  <AuthShell title="Connexion" cta="Se connecter" altText="Pas encore de compte ?" altLink="/signup" altLabel="Créer un compte">
    <input type="email" required placeholder="Email" className={inputCls} />
    <input type="password" required placeholder="Mot de passe" className={inputCls} />
    <Link to="#" className="block text-xs text-muted-foreground hover:text-foreground">Recevoir un lien magique →</Link>
  </AuthShell>
);
export default Login;
