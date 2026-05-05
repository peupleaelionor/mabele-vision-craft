import topo from "@/assets/topography.jpg";
import {
  Users, Presentation, Sheet, FileText, MessageSquare,
  Image as ImageIcon, Music, Video, Linkedin, Sparkles
} from "lucide-react";

const items = [
  { icon: Users, label: "Réunion IA", desc: "Notes & comptes-rendus" },
  { icon: Presentation, label: "Diapositives IA", desc: "Decks éditoriaux" },
  { icon: Sheet, label: "AI Sheets", desc: "Tableurs intelligents" },
  { icon: FileText, label: "Docs IA", desc: "Rédaction guidée" },
  { icon: MessageSquare, label: "Chat IA", desc: "Conversation Mayele" },
  { icon: ImageIcon, label: "Image IA", desc: "Visuels sur-mesure" },
  { icon: Music, label: "Musique IA", desc: "Compositions originales" },
  { icon: Video, label: "Vidéo IA", desc: "Clips & montages" },
  { icon: Linkedin, label: "LinkedIn IA", desc: "Posts qui résonnent" },
  { icon: Sparkles, label: "Tous les agents", desc: "Catalogue complet" },
];

export const Capabilities = () => (
  <section id="capacites" className="relative bg-background overflow-hidden">
    <img src={topo} alt="" aria-hidden loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-[0.06]" />
    <div className="container-edge relative py-24 sm:py-32">
      <div className="max-w-3xl">
        <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground inline-flex items-center gap-2">
          <span className="copper-spark" aria-hidden /> Capacités
        </p>
        <h2 className="mt-6 font-serif text-4xl sm:text-6xl leading-[1] tracking-tight text-balance">
          Demandez n'importe quoi.<br />
          <span className="italic text-primary">Créez n'importe quoi.</span>
        </h2>
      </div>

      <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {items.map(({ icon: Icon, label, desc }) => (
          <button
            key={label}
            className="group text-left rounded-2xl bg-card border hairline p-5 hover:border-primary/30 hover:shadow-soft transition-all"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/5 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition">
              <Icon className="h-4 w-4" />
            </div>
            <div className="mt-5 font-serif text-xl text-foreground">{label}</div>
            <div className="mt-1 text-xs text-muted-foreground">{desc}</div>
          </button>
        ))}
      </div>
    </div>
  </section>
);
