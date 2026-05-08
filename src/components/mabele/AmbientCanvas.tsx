import { useEffect, useRef } from "react";

/**
 * Ambient flow-field canvas — particules cuivre traçant des lignes lentes
 * sur fond crème. Très léger, pause si onglet caché ou prefers-reduced-motion.
 */
export const AmbientCanvas = ({ className = "" }: { className?: string }) => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const { clientWidth: w, clientHeight: h } = canvas;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const count = reduce ? 18 : 60;
    type P = { x: number; y: number; vx: number; vy: number; life: number };
    const particles: P[] = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.clientWidth,
      y: Math.random() * canvas.clientHeight,
      vx: 0, vy: 0,
      life: Math.random() * 200,
    }));

    const noise = (x: number, y: number, t: number) =>
      Math.sin(x * 0.0035 + t) * Math.cos(y * 0.004 - t * 0.7) +
      Math.sin((x + y) * 0.002 + t * 0.5) * 0.5;

    let raf = 0;
    let t = 0;
    let running = true;

    const tick = () => {
      if (!running) return;
      t += 0.0025;
      ctx.fillStyle = "rgba(247, 244, 238, 0.08)";
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);

      for (const p of particles) {
        const a = noise(p.x, p.y, t) * Math.PI * 2;
        p.vx = p.vx * 0.92 + Math.cos(a) * 0.35;
        p.vy = p.vy * 0.92 + Math.sin(a) * 0.35;
        const nx = p.x + p.vx;
        const ny = p.y + p.vy;

        ctx.strokeStyle = "rgba(198, 90, 46, 0.18)";
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        p.x = nx; p.y = ny;
        p.life -= 1;
        if (
          p.life < 0 ||
          p.x < -10 || p.x > canvas.clientWidth + 10 ||
          p.y < -10 || p.y > canvas.clientHeight + 10
        ) {
          p.x = Math.random() * canvas.clientWidth;
          p.y = Math.random() * canvas.clientHeight;
          p.vx = 0; p.vy = 0;
          p.life = 200 + Math.random() * 200;
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onVis = () => {
      running = !document.hidden;
      if (running && !raf) raf = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", onVis);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className={`pointer-events-none ${className}`}
    />
  );
};
