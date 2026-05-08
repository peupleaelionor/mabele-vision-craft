/**
 * MABELE — Identité officielle
 * Mark : fleur 5 pétales, cœur cuivre rayonnant.
 * Wordmark : MABELE en serif, tracking large.
 *
 * Deux fichiers transparents pour s'adapter à tous les fonds :
 *   - mabele-flower-dark.png  : pétales sombres, cœur cuivre (fonds clairs)
 *   - mabele-flower-cream.png : pétales crème, cœur cuivre (fonds sombres)
 */
import flowerDark from "@/assets/mabele-flower-dark.png";
import flowerCream from "@/assets/mabele-flower-cream.png";

type Tone = "ink" | "cream";
type Variant = "mark" | "lockup" | "stacked";

type LogoProps = {
  className?: string;
  variant?: Variant;
  tone?: Tone;
};

export const LogoMark = ({
  className = "h-8 w-8",
  tone = "ink",
}: { className?: string; tone?: Tone }) => {
  const src = tone === "cream" ? flowerCream : flowerDark;
  return (
    <img
      src={src}
      alt=""
      aria-hidden
      width={64}
      height={64}
      loading="lazy"
      decoding="async"
      draggable={false}
      className={`select-none object-contain ${className}`}
    />
  );
};

export const Logo = ({
  className = "h-7",
  variant = "lockup",
  tone = "ink",
}: LogoProps) => {
  const text = tone === "cream" ? "text-background" : "text-foreground";

  if (variant === "mark") return <LogoMark className={className} tone={tone} />;

  if (variant === "stacked") {
    return (
      <div className={`inline-flex flex-col items-center gap-3 ${text}`}>
        <LogoMark className="h-14 w-14" tone={tone} />
        <span className="font-serif tracking-[0.34em] text-sm uppercase">MABELE</span>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2.5 ${text}`} aria-label="MABELE">
      <LogoMark className={className} tone={tone} />
      <span
        className="font-serif tracking-[0.26em] uppercase leading-none"
        style={{ fontSize: "0.95em" }}
      >
        MABELE
      </span>
    </div>
  );
};
