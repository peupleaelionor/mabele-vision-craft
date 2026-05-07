import { useEffect } from "react";
import { Header } from "@/components/mabele/Header";
import { Hero } from "@/components/mabele/Hero";
import { ChatDemo } from "@/components/mabele/ChatDemo";
import { CapabilityGrid } from "@/components/mabele/CapabilityGrid";
import { AfricanIntelligence } from "@/components/mabele/AfricanIntelligence";
import { TrustStrip } from "@/components/mabele/TrustStrip";
import { SecuritySection } from "@/components/mabele/SecuritySection";
import { PricingSection } from "@/components/mabele/PricingSection";
import { FinalCTA } from "@/components/mabele/FinalCTA";
import { Footer } from "@/components/mabele/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "MABELE — L'IA africaine pour comprendre, créer et décider";
    const meta =
      document.querySelector('meta[name="description"]') ||
      document.head.appendChild(Object.assign(document.createElement("meta"), { name: "description" }));
    meta.setAttribute(
      "content",
      "MABELE est l'intelligence artificielle africaine pour comprendre, créer et décider. Née en RDC, utile partout."
    );
  }, []);

  return (
    <main className="min-h-dvh bg-background pb-[env(safe-area-inset-bottom)]">
      <Header />
      <Hero />
      <TrustStrip />
      <ChatDemo />
      <CapabilityGrid />
      <AfricanIntelligence />
      <SecuritySection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </main>
  );
};

export default Index;
