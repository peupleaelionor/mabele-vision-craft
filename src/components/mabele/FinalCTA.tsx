import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export const FinalCTA = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="container-edge py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] bg-primary text-primary-foreground p-10 sm:p-16 text-center">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, hsl(var(--accent) / 0.25), transparent 55%), radial-gradient(circle at 80% 90%, hsl(var(--primary-foreground) / 0.08), transparent 50%)",
          }}
        />
        <div className="relative">
          <p className="text-[11px] tracking-[0.22em] uppercase text-primary-foreground/60">Une seule question suffit</p>
          <h2 className="mt-6 font-serif text-3xl sm:text-5xl md:text-6xl leading-[1.02] tracking-tight">
            Construire avec lucidité.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
            Pour les idées, les documents, les décisions et les projets qui méritent
            mieux qu'une réponse approximative.
          </p>
          <Link
            to="/chat"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm sm:text-base text-primary shadow-soft hover:shadow-elevated transition"
          >
            Essayer MABELE <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
