import { PageShell, PageHeader } from "@/components/mabele/PageShell";

const Legal = ({ title, eyebrow, children }: { title: string; eyebrow: string; children: React.ReactNode }) => (
  <PageShell title={title} description={`${title} — MABELE AI`}>
    <PageHeader eyebrow={eyebrow} title={title} />
    <section className="container-edge pb-24 max-w-3xl text-foreground/85 leading-relaxed space-y-4">
      {children}
    </section>
  </PageShell>
);

export const Privacy = () => (
  <Legal title="Confidentialité" eyebrow="Légal">
    <p>Vos données vous appartiennent. MABELE traite vos contenus uniquement pour vous fournir le service.</p>
    <p>Nous ne vendons jamais vos données. Nous n'entraînons pas nos modèles sur vos contenus privés.</p>
    <p>Vous pouvez exporter ou supprimer vos données à tout moment depuis vos paramètres.</p>
  </Legal>
);
export default Privacy;
