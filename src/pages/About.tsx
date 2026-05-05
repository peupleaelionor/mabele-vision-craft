import { PageShell, PageHeader } from "@/components/mabele/PageShell";

const Prose = ({ children }: { children: React.ReactNode }) => (
  <section className="container-edge pb-24 max-w-3xl">
    <div className="prose prose-neutral max-w-none text-foreground/85 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:mt-10 [&_h2]:mb-3 [&_p]:mt-3 [&_p]:leading-relaxed">
      {children}
    </div>
  </section>
);

export const About = () => (
  <PageShell title="À propos" description="MABELE : intelligence africaine premium, née en RDC.">
    <PageHeader eyebrow="À propos" title="Née en RDC. Utile partout." lead="MABELE est l'intelligence africaine premium pensée pour le continent, l'Europe et la diaspora." />
    <Prose>
      <h2>Notre mission</h2>
      <p>Donner à chacun un allié IA clair, sérieux et culturellement juste. Penser plus clair. Construire plus fort.</p>
      <h2>Notre approche</h2>
      <p>Une expérience simple en surface, puissante en profondeur. Un seul espace pour penser, créer, décider et agir.</p>
      <h2>Notre origine</h2>
      <p>Mabele veut dire "terre" en lingala. Une intelligence enracinée, ouverte au monde.</p>
    </Prose>
  </PageShell>
);
export default About;
