import { PageShell, PageHeader } from "@/components/mabele/PageShell";

const Contact = () => (
  <PageShell title="Contact" description="Contactez l'équipe MABELE.">
    <PageHeader eyebrow="Contact" title="Parlons." lead="Une question, un projet, un partenariat. Écrivez-nous." />
    <section className="container-edge pb-24 max-w-xl">
      <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
        <input required placeholder="Votre nom" className="w-full rounded-xl border hairline bg-card px-4 py-3 text-sm outline-none focus:border-primary/40" />
        <input required type="email" placeholder="Votre email" className="w-full rounded-xl border hairline bg-card px-4 py-3 text-sm outline-none focus:border-primary/40" />
        <textarea required rows={5} placeholder="Votre message" className="w-full rounded-xl border hairline bg-card px-4 py-3 text-sm outline-none focus:border-primary/40" />
        <button className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm text-primary-foreground">Envoyer</button>
      </form>
      <p className="mt-6 text-sm text-muted-foreground">
        Ou écrivez à <a href="mailto:contact@imabele.com" className="text-foreground hover:text-primary">contact@imabele.com</a>
      </p>
    </section>
  </PageShell>
);
export default Contact;
