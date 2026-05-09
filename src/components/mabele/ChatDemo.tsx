import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { LogoMark } from "./Logo";

const userMsg = "J'ai 100$ à Kinshasa, quel business réaliste lancer cette semaine ?";
const replyLines = [
  "Vise une vente rapide, pas un gros projet.",
  "Choisis une offre simple : un produit clair, un prix simple, une promesse tenable en 7 jours.",
  "Parle à 30 personnes cette semaine et valide une première commande avant d'acheter trop de stock.",
];

export const ChatDemo = () => {
  const [step, setStep] = useState(0); // 0 user, 1+ reply lines
  useEffect(() => {
    if (step >= replyLines.length + 1) return;
    const t = setTimeout(() => setStep((s) => s + 1), step === 0 ? 900 : 1100);
    return () => clearTimeout(t);
  }, [step]);

  return (
    <section className="relative bg-background">
      <div className="container-edge py-12 sm:py-20">
        <div className="mx-auto max-w-3xl rounded-[28px] border hairline bg-card shadow-soft p-5 sm:p-8">
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              <span className="copper-spark" aria-hidden /> Démo Mabele
            </div>
            <Link to="/chat" className="text-xs text-primary inline-flex items-center gap-1 hover:gap-1.5 transition-all">
              Ouvrir le chat <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <div className="mt-6 space-y-5">
            <div className="flex justify-end animate-fade-up">
              <div className="max-w-[85%] rounded-2xl rounded-br-md bg-primary text-primary-foreground px-4 py-3 text-[14px] sm:text-[15px] leading-relaxed">
                {userMsg}
              </div>
            </div>

            {step >= 1 && (
              <article className="animate-fade-up">
                <div className="flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                  <LogoMark className="h-4 w-4" /> MABELE
                </div>
                <ul className="mt-3 space-y-2.5">
                  {replyLines.slice(0, step).map((line, i) => (
                    <li
                      key={i}
                      className="font-serif text-lg sm:text-xl leading-snug text-foreground animate-fade-up"
                    >
                      {line}
                    </li>
                  ))}
                  {step <= replyLines.length && (
                    <li className="inline-block w-2 h-5 align-middle bg-foreground/70 animate-blink" aria-hidden />
                  )}
                </ul>
              </article>
            )}
          </div>

          {/* Mode selector */}
          <div className="mt-8 pt-5 border-t hairline">
            <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground mb-3">Mode Mabele</div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { k: "Instantané", d: "Réponse rapide" },
                { k: "Réflexion longue", d: "Raisonnement approfondi" },
                { k: "Sources", d: "Réponses citées" },
                { k: "Document", d: "Analyse de fichier" },
              ].map((m, i) => (
                <button
                  key={m.k}
                  className={`text-left rounded-xl border hairline px-3 py-2.5 hover:border-primary/40 transition ${i === 0 ? "bg-primary/5 border-primary/30" : "bg-card"}`}
                >
                  <div className="text-[13px] font-medium text-foreground">{m.k}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{m.d}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
