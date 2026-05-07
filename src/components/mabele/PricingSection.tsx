import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import { PRICING } from "@/lib/site-content";

export const PricingSection = () => (
  <section id="tarifs" className="bg-background border-t hairline">
    <div className="container-edge py-20 sm:py-28">
      <div className="max-w-2xl">
        <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground inline-flex items-center gap-2">
          <span className="copper-spark" aria-hidden /> Tarifs
        </p>
        <h2 className="mt-5 font-serif text-3xl sm:text-5xl leading-[1.05] tracking-tight text-balance">
          Commencez libre.<br />
          <span className="italic text-primary">Grandissez à votre rythme.</span>
        </h2>
      </div>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4">
        {PRICING.map((p) => {
          const featured = !!p.featured;
          return (
            <div
              key={p.name}
              className={`rounded-3xl p-7 sm:p-8 flex flex-col ${
                featured
                  ? "bg-primary text-primary-foreground shadow-elevated"
                  : "bg-card border hairline"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="font-serif text-2xl">{p.name}</div>
                <span className={`text-[10px] tracking-[0.18em] uppercase rounded-full px-2.5 py-1 ${
                  featured ? "bg-primary-foreground/15 text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>{p.state}</span>
              </div>
              <div className={`mt-5 font-serif text-4xl ${featured ? "" : "text-foreground"}`}>{p.price}</div>
              <p className={`mt-2 text-sm ${featured ? "text-primary-foreground/75" : "text-muted-foreground"}`}>{p.tagline}</p>
              <ul className="mt-6 space-y-2.5 flex-1">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2.5 text-sm ${featured ? "text-primary-foreground/90" : "text-foreground/85"}`}>
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${featured ? "text-primary-foreground" : "text-primary"}`} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to={p.href}
                className={`mt-7 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm transition ${
                  featured
                    ? "bg-primary-foreground text-primary hover:opacity-95"
                    : "bg-primary text-primary-foreground hover:opacity-95"
                }`}
              >
                {p.cta}
              </Link>
            </div>
          );
        })}
      </div>
      <p className="mt-8 text-xs text-center text-muted-foreground">
        Les prix Pro et Business seront annoncés au lancement officiel.
      </p>
    </div>
  </section>
);
