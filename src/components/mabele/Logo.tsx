import logo from "@/assets/mabele-logo.png";

export const Logo = ({ className = "h-8" }: { className?: string }) => (
  <img src={logo} alt="MABELE" className={`${className} w-auto select-none`} draggable={false} />
);
