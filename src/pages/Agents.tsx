import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/mabele/Header";
import { Footer } from "@/components/mabele/Footer";
import { LogoMark } from "@/components/mabele/Logo";
import { AGENTS } from "@/lib/site-content";
import { useEffect } from "react";

const Agents = () => {
  useEffect(() => { document.title = "Mabele — Agents"; }, []);

  return (
    <main className="min-h-dvh bg-background">
      <Header />

      <section className="container-edge pt-16 sm:pt-24 pb-10">
        <div className="flex flex-col items-start gap-6 sm:gap-8 max-w-3xl">
          <LogoMark className="h-10 w-10" />
          <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground inline-flex items-center gap-2">
            <span className="copper-spark" aria-hidden /> Tous les agents
          </p>
          <h1 className="font-serif text-5xl sm:text-7xl leading-[0.98] tracking-[-0.02em] text-balance">
            Une intelligence,<br />
            <span className="italic text-primary">douze manières d'avancer.</span>
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl">
            Chaque agent ouvre une porte. Mabele reste la même —
            simple en surface, puissante en profondeur.
          </p>
        </div>
      </section>

      <section className="container-edge pb-24 sm:pb-32">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {AGENTS.map((a) => (
            <Link
              key={a.slug}
              to={`/agents/${a.slug}`}
              className="group rounded-3xl border hairline bg-card p-7 flex flex-col hover:border-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div className="font-serif text-2xl sm:text-3xl">{a.name}</div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              <span className="mt-6 text-[10px] tracking-[0.22em] uppercase text-muted-foreground/80">
                {a.slug === "chat" ? "Disponible" : "Bientôt"}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
};
export default Agents;
