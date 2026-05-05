import { PageShell, PageHeader } from "@/components/mabele/PageShell";

const Terms = () => (
  <PageShell title="Conditions" description="Conditions d'utilisation MABELE AI">
    <PageHeader eyebrow="Légal" title="Conditions d'utilisation" />
    <section className="container-edge pb-24 max-w-3xl text-foreground/85 leading-relaxed space-y-4">
      <p>En utilisant MABELE AI, vous acceptez les présentes conditions. MABELE est fournie "telle quelle".</p>
      <p>Vous êtes responsable de l'usage que vous faites des réponses produites. Vérifiez toujours les informations importantes.</p>
      <p>Tout usage abusif ou illégal entraînera la suspension du compte.</p>
    </section>
  </PageShell>
);
export default Terms;
