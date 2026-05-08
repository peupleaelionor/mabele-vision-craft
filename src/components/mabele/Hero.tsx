import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LogoMark } from "./Logo";
import { AmbientCanvas } from "./AmbientCanvas";
import { useMagnetic } from "@/hooks/use-reveal";

export const Hero = () => {
  const cta = useMagnetic<HTMLAnchorElement>(0.25);

  return (
    <section className="relative overflow-hidden topo-bg">
      {/* Halo */}
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 h-[640px] w-[640px] rounded-full bg-primary/10 blur-3xl" />
      {/* Canvas vivant */}
      <AmbientCanvas className="absolute inset-0 w-full h-full opacity-70" />

      <div className="container-edge relative pt-12 sm:pt-24 pb-20 sm:pb-28 text-center">
        <div className="animate-fade-up flex justify-center">
          <LogoMark className="h-12 w-12 sm:h-14 sm:w-14" />
        </div>

        <p className="mt-6 inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.28em] uppercase text-muted-foreground animate-fade-up delay-100">
          <span className="copper-spark" aria-hidden /> Née en RDC · utile partout
        </p>

        <h1 className="mt-8 font-serif text-[2.75rem] leading-[0.98] sm:text-[5.5rem] md:text-[7rem] tracking-[-0.02em] text-balance">
          <span className="block animate-fade-up delay-200">L'intelligence</span>
          <span className="block italic text-primary animate-fade-up delay-300">africaine</span>
          <span className="block animate-fade-up delay-400">
            qui <span className="relative inline-block">
              <span className="relative z-10">comprend.</span>
              <svg aria-hidden viewBox="0 0 200 14" className="absolute left-0 right-0 -bottom-1 w-full h-3" preserveAspectRatio="none">
                <path d="M2 8 Q 50 2, 100 7 T 198 6" fill="none" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
          </span>
        </h1>

        <p className="mx-auto mt-8 max-w-xl text-base sm:text-lg text-muted-foreground text-pretty animate-fade-up delay-400">
          MABELE transforme une question en réponse claire, documentée et actionnable.
          Pour les citoyens, entrepreneurs, étudiants et organisations.
        </p>

        {/* Prompt box */}
        <form
          action="/chat"
          className="mx-auto mt-10 max-w-2xl text-left rounded-3xl border hairline bg-card/90 backdrop-blur p-2 shadow-elevated animate-fade-up delay-400 hover:shadow-copper transition-shadow"
        >
          <div className="flex items-end gap-2">
            <input
              type="text"
              name="q"
              placeholder="Demandez à MABELE de vous aider…"
              className="flex-1 bg-transparent outline-none text-[15px] px-4 py-3.5 placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-primary text-primary-foreground hover:bg-accent transition-colors shrink-0"
              aria-label="Envoyer"
            >
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </form>

        <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            ref={cta}
            to="/chat"
            data-cursor
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm sm:text-base text-primary-foreground shadow-soft hover:shadow-elevated transition-all will-change-transform"
          >
            Essayer MABELE
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="#capacites"
            className="inline-flex items-center gap-2 rounded-full border hairline bg-card px-7 py-4 text-sm sm:text-base text-foreground hover:border-primary/40 transition"
          >
            Voir les capacités
          </a>
        </div>

        <p className="mt-10 text-[10px] sm:text-xs text-muted-foreground tracking-[0.32em] uppercase">
          Comprendre · Créer · Décider · Agir
        </p>

        {/* Scroll indicator */}
        <div aria-hidden className="hidden sm:flex mt-16 flex-col items-center gap-2 text-[10px] tracking-[0.28em] uppercase text-muted-foreground/70">
          <span>Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-muted-foreground/60 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};
