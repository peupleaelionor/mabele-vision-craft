import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LogoMark } from "./Logo";

export const FinalCTA = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="container-edge py-20 sm:py-28">
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] bg-primary text-primary-foreground p-10 sm:p-20 text-center min-h-[420px] sm:min-h-[520px] flex flex-col justify-center">
        <div
          aria-hidden
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at top, hsl(var(--accent) / 0.25), transparent 55%), radial-gradient(circle at 80% 90%, hsl(var(--primary-foreground) / 0.08), transparent 50%)",
          }}
        />
        <div aria-hidden className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 opacity-[0.07]">
          <LogoMark tone="cream" className="h-[420px] w-[420px] animate-float" />
        </div>
        <div className="relative">
          <div className="flex justify-center mb-6">
            <LogoMark tone="cream" className="h-10 w-10" />
          </div>
          <p className="text-[11px] tracking-[0.22em] uppercase text-primary-foreground/60">Une seule question suffit</p>
          <h2 className="mt-6 font-serif text-4xl sm:text-6xl md:text-8xl leading-[0.98] tracking-[-0.02em]">
            Commencez avec <span className="italic text-accent">une question.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-primary-foreground/80">
            Pas besoin de formation. Mabele vous guide simplement,
            de la première idée à l'action concrète.
          </p>
          <Link
            to="/chat"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm sm:text-base text-primary shadow-soft hover:shadow-elevated transition"
          >
            Parler à Mabele <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
