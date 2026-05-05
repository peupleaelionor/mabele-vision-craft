import { AppShell } from "./Dashboard";

const Settings = () => (
  <AppShell title="Paramètres">
    <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
      <div className="rounded-2xl border hairline bg-card p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Profil</div>
        <input className="mt-4 w-full rounded-xl border hairline bg-background px-4 py-3 text-sm" defaultValue="Votre nom" />
        <input className="mt-3 w-full rounded-xl border hairline bg-background px-4 py-3 text-sm" defaultValue="vous@exemple.com" />
      </div>
      <div className="rounded-2xl border hairline bg-card p-6">
        <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Préférences</div>
        <label className="mt-4 flex items-center justify-between text-sm"><span>Langue</span><select className="rounded-lg border hairline bg-background px-3 py-1.5 text-sm"><option>Français</option><option>English</option><option>Lingala</option></select></label>
        <label className="mt-3 flex items-center justify-between text-sm"><span>Agent par défaut</span><select className="rounded-lg border hairline bg-background px-3 py-1.5 text-sm"><option>Instantané</option><option>Réflexion longue</option><option>Business</option></select></label>
      </div>
    </div>
  </AppShell>
);
export default Settings;
