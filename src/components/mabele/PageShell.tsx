import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { useEffect } from "react";

interface Props {
  title: string;
  description?: string;
  children: ReactNode;
  hideChrome?: boolean;
}

export const PageShell = ({ title, description, children, hideChrome }: Props) => {
  useEffect(() => {
    document.title = `${title} — MABELE AI`;
    if (description) {
      const meta = document.querySelector('meta[name="description"]') ||
        document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'description' }));
      meta.setAttribute('content', description);
    }
  }, [title, description]);
  return (
    <main className="min-h-dvh bg-background flex flex-col">
      {!hideChrome && <Header />}
      <div className="flex-1">{children}</div>
      {!hideChrome && <Footer />}
    </main>
  );
};

export const PageHeader = ({ eyebrow, title, lead }: { eyebrow?: string; title: string; lead?: string }) => (
  <section className="container-edge pt-16 sm:pt-24 pb-10 sm:pb-14">
    {eyebrow && (
      <p className="text-[11px] tracking-[0.22em] uppercase text-muted-foreground inline-flex items-center gap-2">
        <span className="copper-spark" aria-hidden /> {eyebrow}
      </p>
    )}
    <h1 className="mt-6 font-serif text-5xl sm:text-7xl leading-[0.95] tracking-tight text-balance max-w-4xl">
      {title}
    </h1>
    {lead && <p className="mt-6 max-w-2xl text-base sm:text-lg text-muted-foreground text-pretty">{lead}</p>}
  </section>
);
