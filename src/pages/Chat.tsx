import { useState, useRef, useEffect } from "react";
import {
  ArrowUp, Plus, ArrowLeft, Mic, PanelLeft, X,
  MessageSquarePlus, Search, Sparkles, Settings as SettingsIcon,
  BookOpen, Wrench, Image as ImageIcon, FileText, Globe,
} from "lucide-react";
import { Logo, LogoMark } from "@/components/mabele/Logo";
import { Link } from "react-router-dom";

type Msg = { role: "user" | "assistant"; content: string };
type Thread = { id: string; title: string; updated: string };

const seedThreads: Thread[] = [
  { id: "t1", title: "Lancer ma marque à Kinshasa", updated: "Aujourd'hui" },
  { id: "t2", title: "Plan financier — boutique en ligne", updated: "Hier" },
  { id: "t3", title: "Message client diplomatique", updated: "Lun." },
  { id: "t4", title: "Synthèse contrat fournisseur", updated: "23 avr." },
];

const tools = [
  { icon: FileText, label: "Documents" },
  { icon: ImageIcon, label: "Image" },
  { icon: Globe, label: "Recherche" },
  { icon: Wrench, label: "Agents" },
];

const groups: { label: string; items: string[] }[] = [
  { label: "Penser", items: ["Aide-moi à clarifier ma vision à 3 ans.", "Compare 3 stratégies de lancement."] },
  { label: "Construire", items: ["Trouve une idée rentable cette semaine.", "Construis-moi un P&L mensuel simple."] },
  { label: "Écrire", items: ["Écris un message WhatsApp clair et chaleureux.", "Rédige une mise en demeure polie mais ferme."] },
];

const reply = (q: string) => {
  if (/là|salut|bonjour|hello|t'es/i.test(q))
    return "Oui, je suis là. Dis-moi ce que tu veux construire, vendre, comprendre ou rédiger — je te réponds clairement, avec une action concrète à la fin.";
  return "Voici comment je le vois : commençons par clarifier l'objectif, puis isolons les deux ou trois leviers qui comptent vraiment. Donne-moi le contexte précis et je te propose une première version concrète, prête à utiliser.";
};

const Chat = () => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeThread, setActiveThread] = useState<string | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => { document.title = "MABELE AI — Chat"; }, []);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { role: "user", content: t }, { role: "assistant", content: reply(t) }]);
    setInput("");
    if (taRef.current) taRef.current.style.height = "auto";
  };

  const newChat = () => {
    setMessages([]);
    setActiveThread(null);
    setSidebarOpen(false);
  };

  const isEmpty = messages.length === 0;
  const hour = new Date().getHours();
  const greet = hour < 6 ? "Bonne nuit." : hour < 12 ? "Bonjour." : hour < 18 ? "Bon après-midi." : "Bonsoir.";

  return (
    <div className="min-h-dvh flex bg-background text-foreground">
      {/* ───── Sidebar (desktop persistent / mobile drawer) ───── */}
      <aside
        className={`
          fixed lg:sticky inset-y-0 left-0 z-40 w-[290px] shrink-0
          bg-background border-r hairline flex flex-col
          transition-transform duration-300 ease-out
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
          lg:top-0 lg:h-dvh
        `}
        aria-label="Conversations"
      >
        <div className="h-14 px-4 flex items-center justify-between border-b hairline">
          <Link to="/" className="flex items-center" aria-label="Accueil">
            <Logo className="h-6" />
          </Link>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 -mr-2 text-muted-foreground"
            aria-label="Fermer"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="p-3 space-y-1.5">
          <button
            onClick={newChat}
            className="w-full inline-flex items-center gap-2.5 rounded-xl bg-primary text-primary-foreground px-3.5 py-2.5 text-sm hover:opacity-95 transition"
          >
            <MessageSquarePlus className="h-4 w-4" /> Nouvelle conversation
          </button>
          <div className="relative">
            <Search className="h-3.5 w-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Rechercher…"
              className="w-full rounded-xl border hairline bg-card pl-8 pr-3 py-2 text-[13px] outline-none focus:border-primary/40"
            />
          </div>
        </div>

        <div className="px-3 mt-2">
          <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground px-2 pb-2">Historique</div>
          <ul className="space-y-0.5">
            {seedThreads.map((t) => (
              <li key={t.id}>
                <button
                  onClick={() => { setActiveThread(t.id); setSidebarOpen(false); }}
                  className={`w-full text-left rounded-lg px-2.5 py-2 text-[13px] truncate transition
                    ${activeThread === t.id ? "bg-primary/5 text-primary" : "text-foreground/80 hover:bg-muted/40"}`}
                >
                  {t.title}
                  <div className="text-[10px] text-muted-foreground/80 mt-0.5">{t.updated}</div>
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-3 mt-6">
          <div className="text-[10px] tracking-[0.22em] uppercase text-muted-foreground px-2 pb-2">Outils</div>
          <div className="grid grid-cols-2 gap-1.5">
            {tools.map((t) => (
              <button
                key={t.label}
                className="inline-flex items-center gap-2 rounded-lg border hairline bg-card px-2.5 py-2 text-[12px] text-foreground/80 hover:border-primary/40 hover:text-foreground transition"
              >
                <t.icon className="h-3.5 w-3.5 text-muted-foreground" /> {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto p-3 border-t hairline">
          <button className="w-full inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] text-foreground/80 hover:bg-muted/40 transition">
            <BookOpen className="h-4 w-4 text-muted-foreground" /> Mémoire
            <span className="ml-auto text-[10px] text-muted-foreground">12</span>
          </button>
          <Link
            to="/settings"
            className="w-full inline-flex items-center gap-2 rounded-lg px-2.5 py-2 text-[13px] text-foreground/80 hover:bg-muted/40 transition"
          >
            <SettingsIcon className="h-4 w-4 text-muted-foreground" /> Paramètres
          </Link>
          <div className="mt-2 flex items-center gap-2 px-2.5 py-2">
            <div className="h-7 w-7 rounded-full bg-primary text-primary-foreground inline-flex items-center justify-center text-[11px] font-medium">M</div>
            <div className="min-w-0">
              <div className="text-[12px] truncate">Invité</div>
              <Link to="/login" className="text-[10px] text-primary">Se connecter</Link>
            </div>
          </div>
        </div>
      </aside>

      {/* backdrop */}
      {sidebarOpen && (
        <button
          aria-label="Fermer le panneau"
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-30 bg-foreground/30 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* ───── Main column ───── */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Topbar */}
        <header className="sticky top-0 z-20 bg-background/85 backdrop-blur-md border-b hairline">
          <div className="h-14 px-4 sm:px-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 -ml-2 text-muted-foreground hover:text-foreground"
                aria-label="Ouvrir le panneau"
              >
                <PanelLeft className="h-4 w-4" />
              </button>
              <Link to="/" className="lg:hidden flex items-center text-muted-foreground hover:text-foreground" aria-label="Retour">
                <ArrowLeft className="h-4 w-4" />
              </Link>
              <div className="flex items-center gap-2">
                <LogoMark className="h-5 w-5" />
                <span className="text-[13px] font-medium">Mayele</span>
                <span className="hidden sm:inline text-[11px] tracking-[0.18em] uppercase text-muted-foreground">· Instantané</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="hidden sm:inline-flex items-center gap-1.5 text-[12px] text-foreground/80 border hairline rounded-full px-3 py-1.5 hover:border-primary/40 transition">
                <Sparkles className="h-3.5 w-3.5" /> Changer d'agent
              </button>
              <Link to="/signup" className="text-[12px] bg-primary text-primary-foreground rounded-full px-3.5 py-1.5">
                Compte
              </Link>
            </div>
          </div>
        </header>

        {/* Conversation surface */}
        <div className="flex-1 overflow-y-auto">
          <div className="mx-auto w-full max-w-3xl px-5 sm:px-8 py-10 sm:py-16">
            {isEmpty ? (
              <div className="pt-2 sm:pt-8">
                <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground inline-flex items-center gap-2">
                  <span className="copper-spark" aria-hidden /> {greet}
                </p>
                <h1 className="mt-6 font-serif text-5xl sm:text-7xl leading-[0.95] tracking-tight text-balance">
                  Que veux-tu<br />
                  <span className="italic text-primary">penser</span>
                  <span className="text-muted-foreground"> · </span>
                  <span className="italic text-primary">construire</span>
                  <span className="text-muted-foreground"> · </span>
                  <span className="italic text-primary">écrire</span> ?
                </h1>
                <p className="mt-6 max-w-xl text-base sm:text-lg text-muted-foreground text-pretty">
                  Écris simplement. Mabele te répond clairement et t'aide à passer à l'action.
                </p>

                <div className="mt-12 space-y-10">
                  {groups.map((g) => (
                    <div key={g.label}>
                      <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">{g.label}</div>
                      <ul className="mt-4 divide-y divide-border border-y hairline">
                        {g.items.map((s) => (
                          <li key={s}>
                            <button
                              onClick={() => send(s)}
                              className="group w-full text-left flex items-center justify-between gap-4 py-4 hover:text-primary transition"
                            >
                              <span className="font-serif text-xl sm:text-2xl leading-snug text-balance">{s}</span>
                              <span aria-hidden className="text-muted-foreground group-hover:text-primary transition">→</span>
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-8">
                {messages.map((m, i) =>
                  m.role === "user" ? (
                    <div key={i} className="flex justify-end">
                      <div className="max-w-[85%] rounded-2xl rounded-br-md bg-primary text-primary-foreground px-5 py-3.5 text-[15px] leading-relaxed shadow-soft">
                        {m.content}
                      </div>
                    </div>
                  ) : (
                    <article key={i} className="max-w-[92%]">
                      <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground inline-flex items-center gap-2">
                        <span className="copper-spark" aria-hidden /> Mabele
                      </div>
                      <p className="mt-3 font-serif text-[22px] sm:text-[26px] leading-[1.25] text-foreground text-pretty">
                        {m.content}
                      </p>
                    </article>
                  )
                )}
                <div ref={endRef} />
              </div>
            )}
          </div>
        </div>

        {/* Composer */}
        <div className="sticky bottom-0 bg-gradient-to-t from-background via-background to-background/0 pt-6 pb-5">
          <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
            <form
              onSubmit={(e) => { e.preventDefault(); send(input); }}
              className="flex items-end gap-2 rounded-3xl border hairline bg-card p-2 shadow-soft focus-within:border-primary/40 transition"
            >
              <button type="button" className="p-2.5 text-muted-foreground hover:text-foreground transition" aria-label="Joindre">
                <Plus className="h-4 w-4" />
              </button>
              <textarea
                ref={taRef}
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  const t = e.currentTarget;
                  t.style.height = "auto";
                  t.style.height = Math.min(t.scrollHeight, 200) + "px";
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(input); }
                }}
                rows={1}
                placeholder="Demandez à Mabele…"
                className="flex-1 resize-none bg-transparent outline-none text-[15px] py-2.5 px-1 placeholder:text-muted-foreground max-h-[200px]"
              />
              <button type="button" className="p-2.5 text-muted-foreground hover:text-foreground transition" aria-label="Dicter">
                <Mic className="h-4 w-4" />
              </button>
              <button
                type="submit"
                disabled={!input.trim()}
                className="inline-flex items-center justify-center h-10 w-10 rounded-2xl bg-primary text-primary-foreground disabled:opacity-30 hover:opacity-95 transition"
                aria-label="Envoyer"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </form>
            <p className="mt-3 text-center text-[11px] text-muted-foreground tracking-wide">
              Mabele peut se tromper · Vérifie les informations importantes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
