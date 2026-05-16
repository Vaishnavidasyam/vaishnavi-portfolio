// src/hooks/useScrollSectionHighlight.js
import { useEffect, useState } from "react";

export default function useScrollSectionHighlight(sectionIds, offset = 120) {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    const handler = () => {
      let current = sectionIds[0];
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= offset && rect.bottom >= offset) {
          current = id;
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, [sectionIds, offset]);

  return active;
}
