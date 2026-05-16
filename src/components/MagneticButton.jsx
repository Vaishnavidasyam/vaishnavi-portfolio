// src/components/MagneticButton.jsx
import { useRef, useState } from "react";
import { motion } from "framer-motion";

// Generic magnetic wrapper – can wrap any child
function Magnetic({ children }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);

    // Limit distance so it doesn't jump too far
    const strength = 0.3;
    setPos({
      x: relX * strength,
      y: relY * strength,
    });
  };

  const handleMouseLeave = () => {
    setPos({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className="inline-flex"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 18, mass: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

// Actual button component
export default function MagneticButton({
  children,
  variant = "primary",
  as: Tag = "button",
  ...rest
}) {
  return (
    <Magnetic>
      <Tag
        className={`relative overflow-hidden rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.22em] ${
          variant === "primary"
            ? "bg-gradient-to-r from-primary via-cyan to-accent text-slate-900"
            : "border border-slate-700/60 bg-surface/80 text-slate-100"
        }`}
        {...rest}
      >
        <span className="relative z-10">{children}</span>
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.22),transparent_60%)] opacity-0 transition-opacity duration-200 hover:opacity-100" />
      </Tag>
    </Magnetic>
  );
}
