import { PageShell, PageHeader } from "@/components/mabele/PageShell";
import {
  MessageSquare, FileText, Presentation, Sheet, Users,
  Image as ImageIcon, Video, Music, Linkedin, Sparkles, ArrowUpRight
} from "lucide-react";
import { Link } from "react-router-dom";

const tools = [
  { icon: MessageSquare, name: "Chat IA", desc: "Conversation Mayele instantanée.", status: "Disponible", to: "/try" },
  { icon: FileText, name: "Docs IA", desc: "Rédaction guidée et structurée.", status: "Disponible", to: "/try" },
  { icon: Presentation, name: "Diapositives IA", desc: "Decks éditoriaux prêts à présenter.", status: "Bêta", to: "/try" },
  { icon: Sheet, name: "AI Sheets", desc: "Tableurs intelligents et calculs.", status: "Bêta", to: "/try" },
  { icon: Users, name: "Réunion IA", desc: "Notes, comptes-rendus, décisions.", status: "Bêta", to: "/try" },
  { icon: ImageIcon, name: "Image IA", desc: "Visuels sur-mesure, identité claire.", status: "Disponible", to: "/try" },
  { icon: Video, name: "Vidéo IA", desc: "Clips et montages courts.", status: "Bientôt", to: "/try" },
  { icon: Music, name: "Musique IA", desc: "Compositions originales.", status: "Bientôt", to: "/try" },
  { icon: Linkedin, name: "LinkedIn IA", desc: "Posts qui résonnent vraiment.", status: "Disponible", to: "/try" },
  { icon: Sparkles, name: "Tous les agents", desc: "Catalogue Mayele complet.", status: "Disponible", to: "/agents" },
];

const Confection = () => (
  <PageShell title="Confection" description="Documents, images, vidéos, présentations, feuilles, réunions et contenus sociaux.">
    <PageHeader
      eyebrow="Confection"
      title="Tout créer depuis un seul espace."
      lead="Documents, images, vidéos, présentations, feuilles, réunions et contenus sociaux."
    />
    <section className="container-edge pb-24">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tools.map(({ icon: Icon, name, desc, status, to }) => (
          <div key={name} className="rounded-2xl border hairline bg-card p-6 flex flex-col">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/5 text-primary">
                <Icon className="h-4 w-4" />
              </div>
              <span className={`text-[10px] tracking-[0.18em] uppercase ${status === "Disponible" ? "text-primary" : status === "Bêta" ? "text-accent" : "text-muted-foreground"}`}>{status}</span>
            </div>
            <div className="mt-5 font-serif text-2xl">{name}</div>
            <p className="mt-2 text-sm text-muted-foreground flex-1">{desc}</p>
            <Link to={to} className="mt-6 inline-flex items-center gap-1.5 text-sm text-foreground hover:text-primary">
              Ouvrir <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  </PageShell>
);
export default Confection;
