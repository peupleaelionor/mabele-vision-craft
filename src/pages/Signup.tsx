import { AuthShell } from "./Login";

const inputCls = "w-full rounded-xl border hairline bg-card px-4 py-3 text-sm outline-none focus:border-primary/40";

const Signup = () => (
  <AuthShell
    title="Créer un compte"
    subtitle="Une question. Une réponse claire. Une action concrète."
    cta="Commencer"
    altText="Déjà un compte ?"
    altLink="/login"
    altLabel="Se connecter"
    note="Sans carte pour commencer."
  >
    <input type="email" required placeholder="Email" className={inputCls} />
    <input type="text" placeholder="Votre objectif principal (optionnel)" className={inputCls} />
  </AuthShell>
);
export default Signup;
