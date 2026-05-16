// src/hooks/useMagnetic.js
import { useRef, useState } from "react";
import { useMotionValue } from "framer-motion";

export default function useMagnetic(strength = 12) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const middleX = e.clientX - (rect.left + rect.width / 2);
    const middleY = e.clientY - (rect.top + rect.height / 2);

    x.set(middleX / strength);
    y.set(middleY / strength);
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovering(false);
  };

  return {
    ref,
    motionProps: {
      style: { x, y },
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        mass: 0.2,
      },
      whileHover: isHovering ? { scale: 1.03 } : {},
    },
  };
}
