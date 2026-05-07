/**
 * MABELE — Identité officielle
 * Mark : fleur sombre 6 pétales avec cœur cuivre (uploadée)
 * Wordmark : MABELE en serif tracking large
 */
import flower from "@/assets/mabele-flower.jpg";

type Props = {
  className?: string;
  variant?: "mark" | "lockup" | "stacked";
  tone?: "ink" | "cream";
};

export const LogoMark = ({ className = "h-8 w-8" }: { className?: string }) => (
  <span
    aria-hidden
    className={`inline-block bg-center bg-no-repeat bg-contain ${className}`}
    style={{
      backgroundImage: `url(${flower})`,
      backgroundBlendMode: "multiply",
      mixBlendMode: "multiply",
    }}
  />
);

export const Logo = ({ className = "h-7", variant = "lockup", tone = "ink" }: Props) => {
  const text = tone === "cream" ? "text-background" : "text-foreground";

  if (variant === "mark") return <LogoMark className={className} />;

  if (variant === "stacked") {
    return (
      <div className={`inline-flex flex-col items-center gap-3 ${text}`}>
        <LogoMark className="h-12 w-12" />
        <span className="font-serif tracking-[0.32em] text-sm uppercase">MABELE</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${text}`} aria-label="MABELE">
      <LogoMark className={className} />
      <span className="font-serif tracking-[0.26em] uppercase leading-none" style={{ fontSize: "0.95em" }}>
        MABELE
      </span>
    </div>
  );
};
