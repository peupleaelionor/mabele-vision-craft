import { AppShell } from "./Dashboard";

const history = [
  { date: "01 mai 2026", amount: "9,00 €", status: "Payé" },
  { date: "01 avril 2026", amount: "9,00 €", status: "Payé" },
  { date: "01 mars 2026", amount: "9,00 €", status: "Payé" },
];

const Billing = () => (
  <AppShell title="Facturation">
    <div className="grid lg:grid-cols-3 gap-4">
      <div className="lg:col-span-2 rounded-2xl border hairline bg-card p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Plan actuel</div>
        <div className="mt-3 font-serif text-3xl">Plus — 9 €/mois</div>
        <p className="mt-2 text-sm text-muted-foreground">Prochain renouvellement : 1er juin 2026.</p>
        <div className="mt-6 flex gap-3">
          <button className="rounded-full bg-primary px-5 py-2.5 text-sm text-primary-foreground">Ouvrir le portail Stripe</button>
          <button className="rounded-full border hairline px-5 py-2.5 text-sm">Changer de plan</button>
        </div>
      </div>
      <div className="rounded-2xl border hairline bg-card p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Moyen de paiement</div>
        <div className="mt-4 text-sm">Visa •••• 4242</div>
        <button className="mt-3 text-xs text-primary">Mettre à jour</button>
      </div>
      <div className="lg:col-span-3 rounded-2xl border hairline bg-card p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Historique</div>
        <table className="mt-5 w-full text-sm">
          <thead className="text-xs text-muted-foreground"><tr><th className="text-left font-normal py-2">Date</th><th className="text-left font-normal">Montant</th><th className="text-left font-normal">Statut</th></tr></thead>
          <tbody>
            {history.map((h) => (
              <tr key={h.date} className="border-t hairline"><td className="py-3">{h.date}</td><td>{h.amount}</td><td className="text-primary">{h.status}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </AppShell>
);
export default Billing;
