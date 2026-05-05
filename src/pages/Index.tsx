import { Header } from "@/components/mabele/Header";
import { Hero } from "@/components/mabele/Hero";
import { ChatTeaser } from "@/components/mabele/ChatTeaser";
import { Capabilities } from "@/components/mabele/Capabilities";
import { Trust } from "@/components/mabele/Trust";
import { Footer } from "@/components/mabele/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "MABELE AI — Penser plus clair. Construire plus fort.";
    const meta = document.querySelector('meta[name="description"]') || document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'description' }));
    meta.setAttribute('content', "MABELE AI : intelligence africaine premium, née en RDC. Pensez plus clair, construisez plus fort.");
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ChatTeaser />
      <Capabilities />
      <Trust />
      <Footer />
    </main>
  );
};

export default Index;
