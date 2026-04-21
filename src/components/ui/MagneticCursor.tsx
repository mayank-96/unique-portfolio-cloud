import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export const MagneticCursor = () => {
  const [variant, setVariant] = useState<"default" | "hover" | "text">("default");
  const [label, setLabel] = useState<string>("");
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 500, damping: 40, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 500, damping: 40, mass: 0.4 });
  const rafRef = useRef<number>();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (coarse) return;

    document.documentElement.classList.add("cursor-enabled");

    const move = (e: MouseEvent) => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        x.set(e.clientX);
        y.set(e.clientY);
      });
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, [data-cursor]"
      ) as HTMLElement | null;
      if (interactive) {
        const forced = interactive.getAttribute("data-cursor");
        if (forced === "text") {
          setVariant("text");
          setLabel(interactive.getAttribute("data-cursor-label") ?? "");
        } else {
          setVariant("hover");
          setLabel(interactive.getAttribute("data-cursor-label") ?? "");
        }
      } else {
        setVariant("default");
        setLabel("");
      }
    };

    window.addEventListener("mousemove", move, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    return () => {
      document.documentElement.classList.remove("cursor-enabled");
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", onOver);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [x, y]);

  const size = variant === "hover" ? 56 : variant === "text" ? 80 : 12;

  return (
    <>
      <motion.div
        className="magnetic-cursor pointer-events-none fixed top-0 left-0 z-[70] rounded-full mix-blend-difference"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: size,
          height: size,
          background: "#F5F1E8",
        }}
        animate={{ width: size, height: size }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      />
      {label && (
        <motion.div
          className="magnetic-cursor pointer-events-none fixed top-0 left-0 z-[71] font-mono text-[10px] uppercase tracking-widest"
          style={{
            x: springX,
            y: springY,
            translateX: "-50%",
            translateY: "-50%",
            color: "#0A0908",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {label}
        </motion.div>
      )}
    </>
  );
};
