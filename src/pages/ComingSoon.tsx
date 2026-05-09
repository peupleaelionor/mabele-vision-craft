import { ArrowUpRight, ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/mabele/Header";
import { Footer } from "@/components/mabele/Footer";
import { LogoMark } from "@/components/mabele/Logo";

const labels: Record<string, { name: string; line: string }> = {
  "/agents/chat": { name: "Chat", line: "La conversation, simple et claire — déjà disponible." },
  "/agents/docs": { name: "Documents", line: "Analyse, résumé et rédaction de vos documents." },
  "/agents/image": { name: "Image", line: "Visuels et illustrations sur mesure." },
  "/agents/video": { name: "Vidéo", line: "Idées de format, scénarios, montages." },
  "/agents/music": { name: "Musique", line: "Idées sonores, paroles, ambiances." },
  "/agents/slides": { name: "Diapositives", line: "Présentations claires et structurées." },
  "/agents/linkedin": { name: "LinkedIn", line: "Posts, messages, stratégie de présence." },
  "/agents/meeting": { name: "Réunion", line: "Préparation, comptes-rendus, décisions." },
  "/agents/business": { name: "Business", line: "Marché, modèles, P&L, opérations." },
  "/agents/admin-rdc": { name: "Administration RDC", line: "Démarches, documents, conformité." },
  "/agents/learn": { name: "Apprendre", line: "Comprendre n'importe quel sujet, à votre rythme." },
  "/agents/decide": { name: "Décider", line: "Cadrer un choix, peser les options, agir." },
};

const ComingSoon = () => {
  const { pathname } = useLocation();
  const data = labels[pathname] ?? { name: "Bientôt", line: "Cette capacité arrive prochainement." };

  useEffect(() => {
    document.title = `Mabele — ${data.name}`;
  }, [data.name]);

  return (
    <main className="min-h-dvh bg-background flex flex-col">
      <Header />
      <section className="flex-1 flex items-center">
        <div className="container-edge py-24 sm:py-32 text-center">
          <div className="flex justify-center"><LogoMark className="h-12 w-12" /></div>
          <p className="mt-6 text-[11px] tracking-[0.28em] uppercase text-muted-foreground inline-flex items-center gap-2">
            <span className="copper-spark" aria-hidden /> {data.name}
          </p>
          <h1 className="mt-6 font-serif text-5xl sm:text-7xl leading-[0.98] tracking-[-0.02em] text-balance">
            Bientôt <span className="italic text-primary">disponible.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-muted-foreground">
            {data.line} En attendant, posez votre question à Mabele —
            elle vous aide déjà à avancer.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/chat"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm sm:text-base text-primary-foreground shadow-soft hover:shadow-elevated transition"
            >
              Parler à Mabele <ArrowUpRight className="h-4 w-4" />
            </Link>
            <Link
              to="/agents"
              className="inline-flex items-center gap-2 rounded-full border hairline bg-card px-6 py-3.5 text-sm sm:text-base text-foreground hover:border-primary/40 transition"
            >
              <ArrowLeft className="h-4 w-4" /> Voir tous les agents
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ComingSoon;
