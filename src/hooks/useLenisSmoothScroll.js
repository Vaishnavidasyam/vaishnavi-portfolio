// src/hooks/useLenisSmoothScroll.js
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function useLenisSmoothScroll(options = {}) {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      ...options, // allow overrides
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, [options]);
}
