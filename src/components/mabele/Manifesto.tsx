import { useReveal } from "@/hooks/use-reveal";

const lines = [
  { strong: "Comprendre", rest: " sans simplifier à outrance." },
  { strong: "Créer", rest: " sans perdre l'intention." },
  { strong: "Décider", rest: " avec ce qui compte vraiment." },
  { strong: "Agir", rest: ", parce qu'une réponse n'a de valeur qu'utilisée." },
];

export const Manifesto = () => {
  const { ref, shown } = useReveal<HTMLDivElement>(0.2);
  return (
    <section className="relative bg-background border-t hairline overflow-hidden">
      <div ref={ref} className="container-edge py-28 sm:py-40">
        <p className="text-[11px] tracking-[0.28em] uppercase text-muted-foreground inline-flex items-center gap-2">
          <span className="copper-spark" aria-hidden /> Manifeste
        </p>
        <div className="mt-8 max-w-4xl space-y-3 sm:space-y-4">
          {lines.map((l, i) => (
            <p
              key={i}
              className={`font-serif text-3xl sm:text-5xl md:text-6xl leading-[1.05] tracking-[-0.02em] transition-all duration-700`}
              style={{
                opacity: shown ? 1 : 0,
                transform: shown ? "translateY(0)" : "translateY(20px)",
                transitionDelay: `${i * 140}ms`,
              }}
            >
              <span className="italic text-primary">{l.strong}</span>
              <span className="text-foreground/70">{l.rest}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  );
};
