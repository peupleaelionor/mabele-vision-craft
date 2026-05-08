import { useEffect, useRef } from "react";

/**
 * Custom cursor — disque cuivre suiveur, désactivé sur tactile.
 * S'élargit sur les éléments interactifs (a, button, [data-cursor]).
 */
export const Cursor = () => {
  const dot = useRef<HTMLDivElement | null>(null);
  const ring = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const d = dot.current; const r = ring.current;
    if (!d || !r) return;

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      d.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      r.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const over = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor], input, textarea")) {
        r.classList.add("cursor-active");
      }
    };
    const out = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t.closest("a, button, [data-cursor], input, textarea")) {
        r.classList.remove("cursor-active");
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    document.documentElement.classList.add("has-custom-cursor");

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={ring}
        aria-hidden
        className="hidden lg:block fixed top-0 left-0 z-[100] pointer-events-none h-9 w-9 rounded-full border border-primary/40 transition-[width,height,border-color,background] duration-200 ease-out"
      />
      <div
        ref={dot}
        aria-hidden
        className="hidden lg:block fixed top-0 left-0 z-[100] pointer-events-none h-1.5 w-1.5 rounded-full bg-accent"
      />
    </>
  );
};
