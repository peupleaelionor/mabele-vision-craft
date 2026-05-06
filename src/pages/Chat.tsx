import { useState, useRef, useEffect } from "react";
import { ArrowUp, Plus, ArrowLeft, Mic } from "lucide-react";
import { Logo } from "@/components/mabele/Logo";
import { Link } from "react-router-dom";

type Msg = { role: "user" | "assistant"; content: string };

const groups: { label: string; items: string[] }[] = [
  {
    label: "Penser",
    items: [
      "Aide-moi à clarifier ma vision à 3 ans.",
      "Compare 3 stratégies de lancement.",
    ],
  },
  {
    label: "Construire",
    items: [
      "Trouve une idée rentable cette semaine.",
      "Construis-moi un P&L mensuel simple.",
    ],
  },
  {
    label: "Écrire",
    items: [
      "Écris un message WhatsApp clair et chaleureux.",
      "Rédige une mise en demeure polie mais ferme.",
    ],
  },
];

const reply = (q: string) => {
  if (/là|salut|bonjour|hello|t'es/i.test(q)) {
    return "Oui, je suis là. Dis-moi ce que tu veux construire, vendre, comprendre ou rédiger — je te réponds clairement, avec une action concrète à la fin.";
  }
  return "Voici comment je le vois : commençons par clarifier l'objectif, puis isolons les deux ou trois leviers qui comptent vraiment. Donne-moi le contexte précis et je te propose une première version concrète, prête à utiliser.";
};

const Chat = () => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);
  const taRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    document.title = "MABELE AI — Chat";
  }, []);
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [
      ...m,
      { role: "user", content: t },
      { role: "assistant", content: reply(t) },
    ]);
    setInput("");
    if (taRef.current) taRef.current.style.height = "auto";
  };

  const isEmpty = messages.length === 0;
  const hour = new Date().getHours();
  const greet =
    hour < 6 ? "Bonne nuit." : hour < 12 ? "Bonjour." : hour < 18 ? "Bon après-midi." : "Bonsoir.";

  return (
    <div className="min-h-dvh flex flex-col bg-background">
      {/* Header — minimal, editorial */}
      <header className="sticky top-0 z-30 bg-background/85 backdrop-blur-md border-b hairline">
        <div className="container-edge h-14 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition"
            aria-label="Retour à l'accueil"
          >
            <ArrowLeft className="h-4 w-4" />
            <Logo className="h-6" />
          </Link>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
              Mayele · Instantané
            </span>
            <Link
              to="/agents"
              className="text-xs tracking-wide text-foreground/80 hover:text-foreground border hairline rounded-full px-3 py-1.5"
            >
              Changer d'agent
            </Link>
          </div>
        </div>
      </header>

      {/* Conversation surface */}
      <div className="flex-1 overflow-y-auto">
        <div className="container-edge max-w-3xl py-10 sm:py-16">
          {isEmpty ? (
            <div className="pt-4 sm:pt-10">
              <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground inline-flex items-center gap-2">
                <span className="copper-spark" aria-hidden /> {greet}
              </p>
              <h1 className="mt-6 font-serif text-5xl sm:text-7xl leading-[0.95] tracking-tight text-balance">
                Que veux-tu
                <br />
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
                    <div className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">
                      {g.label}
                    </div>
                    <ul className="mt-4 divide-y divide-border border-y hairline">
                      {g.items.map((s) => (
                        <li key={s}>
                          <button
                            onClick={() => send(s)}
                            className="group w-full text-left flex items-center justify-between gap-4 py-4 hover:text-primary transition"
                          >
                            <span className="font-serif text-xl sm:text-2xl leading-snug text-balance">
                              {s}
                            </span>
                            <span
                              aria-hidden
                              className="text-muted-foreground group-hover:text-primary transition"
                            >
                              →
                            </span>
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
        <div className="container-edge max-w-3xl">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-end gap-2 rounded-3xl border hairline bg-card p-2 shadow-soft focus-within:border-primary/40 transition"
          >
            <button
              type="button"
              className="p-2.5 text-muted-foreground hover:text-foreground transition"
              aria-label="Joindre"
            >
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
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(input);
                }
              }}
              rows={1}
              placeholder="Demandez à Mabele…"
              className="flex-1 resize-none bg-transparent outline-none text-[15px] py-2.5 px-1 placeholder:text-muted-foreground max-h-[200px]"
            />
            <button
              type="button"
              className="p-2.5 text-muted-foreground hover:text-foreground transition"
              aria-label="Dicter"
            >
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
  );
};

export default Chat;
