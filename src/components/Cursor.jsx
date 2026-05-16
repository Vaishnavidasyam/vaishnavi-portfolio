// src/components/Cursor.jsx
import { useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import React from "react";
export default function Cursor() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  useEffect(() => {
    const move = (e) => {
      // center the 24x24px circle on the pointer
      x.set(e.clientX - 12);
      y.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed z-50 h-6 w-6 rounded-full border border-primary/70 bg-primary/10 backdrop-blur-sm"
      style={{ translateX: x, translateY: y }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        mass: 0.2,
      }}
    />
  );
}
