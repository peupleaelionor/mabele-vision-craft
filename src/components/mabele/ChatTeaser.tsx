import { ArrowUpRight } from "lucide-react";
import leaves from "@/assets/dark-leaves.jpg";
import { Link } from "react-router-dom";

const suggestions = ["Générer une stratégie", "Analyser un marché", "Rédiger un plan", "Synthèse de document"];

export const ChatTeaser = () => (
  <section className="relative overflow-hidden bg-secondary text-primary-foreground mt-16 sm:mt-24">
    <img src={leaves} alt="" aria-hidden loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-25" />
    <div className="absolute inset-0 bg-gradient-to-b from-secondary/70 via-secondary/85 to-secondary" />
    <div className="container-edge relative py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-[11px] tracking-[0.22em] uppercase text-primary-foreground/60 inline-flex items-center gap-2">
          <span className="copper-spark" aria-hidden /> Bonjour
        </p>
        <h2 className="mt-6 font-serif text-4xl sm:text-6xl leading-[1] tracking-tight">
          Comment puis-je vous aider aujourd'hui ?
        </h2>
        <p className="mt-6 text-base sm:text-lg text-primary-foreground/75 max-w-xl">
          Posez une question, décrivez ce dont vous avez besoin. MABELE répond clairement et vous aide à passer à l'action.
        </p>

        <div className="mt-10 rounded-2xl bg-background/[0.06] backdrop-blur border border-primary-foreground/15 p-2 flex items-center gap-2">
          <div className="flex-1 px-4 py-3 text-sm text-primary-foreground/70">Demandez à Mabele…</div>
          <Link to="/try" className="inline-flex items-center gap-2 rounded-xl bg-primary-foreground px-4 py-3 text-sm text-primary hover:opacity-95">
            Ouvrir <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          {suggestions.map((s) => (
            <Link key={s} to="/try" className="rounded-full border border-primary-foreground/20 px-4 py-2 text-xs text-primary-foreground/85 hover:bg-primary-foreground/5 transition">
              {s}
            </Link>
          ))}
        </div>
      </div>
    </div>
  </section>
);
