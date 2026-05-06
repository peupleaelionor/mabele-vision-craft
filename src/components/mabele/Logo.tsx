/**
 * MABELE — Identité visuelle
 * Mark : monogramme "M" sculpté en feuille / colline (forêt)
 * Wordmark : MABELE en capitales, tracking large, rendu via Cormorant
 */

type Props = {
  className?: string;
  variant?: "mark" | "lockup" | "stacked";
  tone?: "ink" | "cream" | "forest" | "copper";
};

const toneClass: Record<NonNullable<Props["tone"]>, string> = {
  ink: "text-foreground",
  cream: "text-background",
  forest: "text-primary",
  copper: "text-accent",
};

export const LogoMark = ({ className = "h-8 w-8", tone = "forest" }: { className?: string; tone?: Props["tone"] }) => (
  <svg
    viewBox="0 0 64 64"
    className={`${toneClass[tone!]} ${className}`}
    aria-hidden
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* anneau extérieur — terre / horizon */}
    <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="1.25" opacity="0.35" />
    {/* monogramme M — deux collines / feuilles symétriques */}
    <path
      d="M14 46 V22 C14 18.5 18 17 20.5 19.5 L32 31 L43.5 19.5 C46 17 50 18.5 50 22 V46"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* graine / étincelle cuivre au centre */}
    <circle cx="32" cy="42" r="1.6" fill="currentColor" />
  </svg>
);

export const Logo = ({ className = "h-7", variant = "lockup", tone = "ink" }: Props) => {
  if (variant === "mark") return <LogoMark className={className} tone={tone === "ink" ? "forest" : tone} />;

  if (variant === "stacked") {
    return (
      <div className={`inline-flex flex-col items-center gap-2 ${toneClass[tone]}`}>
        <LogoMark className="h-10 w-10" tone={tone === "ink" ? "forest" : tone} />
        <span className="font-serif tracking-[0.34em] text-[13px] uppercase">Mabele</span>
      </div>
    );
  }

  // lockup horizontal — utilisé partout
  return (
    <div className={`inline-flex items-center gap-2.5 ${toneClass[tone]}`} aria-label="MABELE">
      <LogoMark className={className} tone={tone === "ink" ? "forest" : tone} />
      <span className={`font-serif tracking-[0.28em] uppercase leading-none`} style={{ fontSize: "0.95em" }}>
        Mabele
      </span>
    </div>
  );
};
