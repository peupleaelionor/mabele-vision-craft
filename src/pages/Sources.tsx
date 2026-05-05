import { PageShell, PageHeader } from "@/components/mabele/PageShell";

const Sources = () => (
  <PageShell title="Sources" description="Sources et confiance : comment MABELE construit ses réponses.">
    <PageHeader eyebrow="Confiance" title="Sources & vérification." lead="Chaque réponse importante est traçable." />
    <section className="container-edge pb-24 max-w-3xl text-foreground/85 leading-relaxed space-y-4">
      <p>MABELE cite ses sources lorsqu'elle s'appuie sur du contenu vérifiable.</p>
      <p>Quand elle n'est pas certaine, elle l'indique clairement, plutôt que d'inventer.</p>
      <p>Quand elle propose une action, elle explique pourquoi.</p>
    </section>
  </PageShell>
);
export default Sources;
