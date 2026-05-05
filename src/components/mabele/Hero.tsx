import { ArrowUpRight } from "lucide-react";
import forest from "@/assets/forest-mist.jpg";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container-edge pt-14 sm:pt-24 pb-10 sm:pb-16 text-center">
        <p className="inline-flex items-center gap-2 text-[11px] sm:text-xs tracking-[0.22em] uppercase text-muted-foreground">
          <span className="copper-spark" aria-hidden /> Votre allié IA pour l'excellence
        </p>

        <h1 className="mt-7 sm:mt-10 font-serif text-5xl sm:text-7xl md:text-8xl leading-[0.95] tracking-tight text-balance">
          <span className="block text-foreground">Penser plus clair.</span>
          <span className="block text-primary">Construire plus fort.</span>
        </h1>

        <p className="mx-auto mt-6 sm:mt-8 max-w-xl text-base sm:text-lg text-muted-foreground text-pretty">
          MABELE vous aide à transformer vos idées en actions concrètes,
          avec une clarté immédiate.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/try"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm sm:text-base text-primary-foreground shadow-soft hover:shadow-elevated transition-all"
          >
            Commencer maintenant
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <Link
            to="/confection"
            className="inline-flex items-center gap-2 rounded-full border hairline bg-card px-7 py-3.5 text-sm sm:text-base text-foreground hover:border-primary/40 transition"
          >
            Voir les capacités
          </Link>
        </div>
        <p className="mt-5 text-xs text-muted-foreground tracking-wide">
          Sécurisé · Confidentiel · Conçu pour vous
        </p>
      </div>

      <div className="container-edge pb-0">
        <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] shadow-elevated">
          <img
            src={forest}
            alt="Forêt brumeuse au lever du jour"
            width={1920}
            height={1080}
            className="w-full h-[52vh] sm:h-[68vh] object-cover"
          />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary/40 to-transparent" />
        </div>
      </div>
    </section>
  );
};
