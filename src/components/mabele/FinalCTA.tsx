import { ArrowUpRight } from "lucide-react";
import abstractBg from "@/assets/green-abstract.jpg";
import { Link } from "react-router-dom";

export const FinalCTA = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="container-edge py-24 sm:py-32">
      <div className="relative overflow-hidden rounded-[28px] sm:rounded-[40px] bg-primary text-primary-foreground p-10 sm:p-16 text-center">
        <img src={abstractBg} alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="relative">
          <p className="text-[11px] tracking-[0.22em] uppercase text-primary-foreground/60">Une seule question suffit</p>
          <h2 className="mt-6 font-serif text-4xl sm:text-6xl leading-[1] tracking-tight">
            Commencez avec une question.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-primary-foreground/80">
            Pas besoin de configuration. Posez votre première demande et obtenez une réponse claire.
          </p>
          <Link
            to="/try"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm sm:text-base text-primary shadow-soft hover:shadow-elevated transition"
          >
            Essayer Mabele <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
