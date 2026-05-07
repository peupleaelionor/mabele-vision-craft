import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { LogoMark } from "./Logo";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden topo-bg">
      {/* halo vert très doux */}
      <div aria-hidden className="absolute -top-40 left-1/2 -translate-x-1/2 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl" />

      <div className="container-edge relative pt-12 sm:pt-20 pb-16 sm:pb-24 text-center">
        <div className="animate-fade-up flex justify-center">
          <LogoMark className="h-12 w-12 sm:h-14 sm:w-14" />
        </div>

        <p className="mt-6 inline-flex items-center gap-2 text-[10px] sm:text-[11px] tracking-[0.24em] uppercase text-muted-foreground animate-fade-up delay-100">
          <span className="copper-spark" aria-hidden /> Née en RDC · utile partout
        </p>

        <h1 className="mt-6 font-serif text-[2.5rem] leading-[1.02] sm:text-6xl md:text-7xl tracking-tight text-balance animate-fade-up delay-200">
          L'IA africaine pour
          <br />
          <span className="italic text-primary">comprendre, créer</span>
          <br className="sm:hidden" /> <span className="italic text-primary">et décider.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-muted-foreground text-pretty animate-fade-up delay-300">
          MABELE aide les citoyens, entrepreneurs, étudiants et organisations à transformer
          une question en réponse claire, documentée et actionnable.
        </p>

        {/* Prompt box premium */}
        <form
          action="/chat"
          className="mx-auto mt-10 max-w-2xl text-left rounded-3xl border hairline bg-card p-2 shadow-elevated animate-fade-up delay-400"
        >
          <div className="flex items-end gap-2">
            <input
              type="text"
              name="q"
              placeholder="Demandez à MABELE de vous aider sur un projet, un document, une décision…"
              className="flex-1 bg-transparent outline-none text-[15px] px-4 py-3.5 placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center h-11 w-11 rounded-2xl bg-primary text-primary-foreground hover:opacity-95 transition shrink-0"
              aria-label="Envoyer"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </form>

        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/chat"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm sm:text-base text-primary-foreground shadow-soft hover:shadow-elevated transition-all"
          >
            Essayer MABELE
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <a
            href="#capacites"
            className="inline-flex items-center gap-2 rounded-full border hairline bg-card px-7 py-3.5 text-sm sm:text-base text-foreground hover:border-primary/40 transition"
          >
            Voir les capacités
          </a>
        </div>

        <p className="mt-6 text-xs text-muted-foreground tracking-wide">
          Comprendre · Créer · Décider · Agir
        </p>
      </div>
    </section>
  );
};
