import { PageShell, PageHeader } from "@/components/mabele/PageShell";
import { Logo } from "@/components/mabele/Logo";

const swatches = [
  { name: "Crème", hex: "#F8F6F1", text: "#0E0E0E" },
  { name: "Noir profond", hex: "#0E0E0E", text: "#F8F6F1" },
  { name: "Vert forêt", hex: "#0F3D32", text: "#F8F6F1" },
  { name: "Vert profond", hex: "#082820", text: "#F8F6F1" },
  { name: "Cuivre", hex: "#C85C20", text: "#F8F6F1" },
  { name: "Bordure", hex: "#DED7CD", text: "#0E0E0E" },
];

const Identity = () => (
  <PageShell title="Identité" description="Identité visuelle MABELE : logo, palette, typographie.">
    <PageHeader eyebrow="Identité" title="Une marque calme et sérieuse." />
    <section className="container-edge pb-12">
      <div className="rounded-2xl border hairline bg-card p-10 flex items-center justify-center">
        <Logo className="h-16" />
      </div>
    </section>
    <section className="container-edge pb-12">
      <h2 className="font-serif text-2xl mb-4">Palette</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {swatches.map((s) => (
          <div key={s.name} className="rounded-2xl overflow-hidden border hairline">
            <div className="h-24" style={{ background: s.hex }} />
            <div className="p-3">
              <div className="font-serif text-sm">{s.name}</div>
              <div className="text-xs text-muted-foreground">{s.hex}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
    <section className="container-edge pb-24">
      <h2 className="font-serif text-2xl mb-4">Typographie</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="rounded-2xl border hairline bg-card p-8">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Titres</div>
          <div className="mt-3 font-serif text-5xl">Cormorant Garamond</div>
        </div>
        <div className="rounded-2xl border hairline bg-card p-8">
          <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Texte</div>
          <div className="mt-3 font-sans text-2xl">Inter — clair, neutre, fonctionnel.</div>
        </div>
      </div>
    </section>
  </PageShell>
);
export default Identity;
