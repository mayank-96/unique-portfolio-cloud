import { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: number; // seconds per cycle
}

export const Marquee = ({ children, className = "", reverse = false, speed = 40 }: MarqueeProps) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div
        className="marquee-track flex w-max gap-16 whitespace-nowrap"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex items-center gap-16">{children}</div>
        <div aria-hidden className="flex items-center gap-16">
          {children}
        </div>
      </div>
    </div>
  );
};
