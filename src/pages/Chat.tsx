import { useState, useRef, useEffect } from "react";
import { ArrowUp, Plus, Sparkles, ArrowLeft } from "lucide-react";
import { Logo } from "@/components/mabele/Logo";
import { Link } from "react-router-dom";

type Msg = { role: "user" | "assistant"; content: string };

const suggestions = [
  "Trouve-moi une idée rentable cette semaine.",
  "Écris un message WhatsApp clair.",
  "Comment investir au pays sans me faire arnaquer ?",
];

const reply = (q: string) => {
  if (/là|salut|bonjour|hello|t'es/i.test(q)) {
    return "Oui. Dis-moi ce que tu veux construire, vendre, comprendre ou rédiger. Je te réponds clairement, avec une action concrète.";
  }
  return "Voici comment je vois les choses : commençons par clarifier l'objectif, puis identifions les deux ou trois leviers qui comptent vraiment. Dites-moi le contexte précis et je vous propose une première version concrète.";
};

const Chat = () => {
  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => { document.title = "MABELE AI — Chat"; }, []);
  useEffect(() => { endRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  const send = (text: string) => {
    const t = text.trim();
    if (!t) return;
    setMessages((m) => [...m, { role: "user", content: t }, { role: "assistant", content: reply(t) }]);
    setInput("");
  };

  const isEmpty = messages.length === 0;

  return (
    <div className="min-h-dvh flex flex-col bg-background">
      <header className="border-b hairline">
        <div className="container-edge h-14 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            <Logo className="h-6" />
          </Link>
          <span className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground">MABELE AI</span>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto">
        <div className="container-edge max-w-3xl py-10 sm:py-16">
          {isEmpty ? (
            <div className="text-center pt-6 sm:pt-12">
              <Sparkles className="h-5 w-5 text-accent mx-auto" />
              <h1 className="mt-6 font-serif text-4xl sm:text-5xl tracking-tight">
                Que veux-tu créer ?
              </h1>
              <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                Écris simplement. Mabele répond clairement et t'aide à passer à l'action.
              </p>
              <div className="mt-10 flex flex-col gap-2 max-w-xl mx-auto">
                {suggestions.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-left rounded-xl border hairline px-4 py-3 text-sm text-foreground/85 hover:border-primary/30 hover:bg-primary/[0.02] transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "flex justify-end" : "flex justify-start"}>
                  <div className={
                    m.role === "user"
                      ? "max-w-[85%] rounded-2xl rounded-br-md bg-primary text-primary-foreground px-4 py-3 text-[15px] leading-relaxed"
                      : "max-w-[90%] rounded-2xl rounded-bl-md bg-card border hairline px-4 py-3 text-[15px] leading-relaxed text-foreground"
                  }>
                    {m.content}
                  </div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
          )}
        </div>
      </div>

      <div className="sticky bottom-0 bg-gradient-to-t from-background via-background to-background/0 pt-6 pb-4">
        <div className="container-edge max-w-3xl">
          <form
            onSubmit={(e) => { e.preventDefault(); send(input); }}
            className="flex items-center gap-2 rounded-2xl border hairline bg-card p-2 shadow-soft focus-within:border-primary/40"
          >
            <button type="button" className="p-2.5 text-muted-foreground hover:text-foreground" aria-label="Joindre">
              <Plus className="h-4 w-4" />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Demandez à Mabele…"
              className="flex-1 bg-transparent outline-none text-[15px] py-2 placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="inline-flex items-center justify-center h-10 w-10 rounded-xl bg-primary text-primary-foreground disabled:opacity-40"
              aria-label="Envoyer"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </form>
          <p className="mt-3 text-center text-[11px] text-muted-foreground">
            Mabele peut se tromper. Vérifiez les informations importantes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chat;
