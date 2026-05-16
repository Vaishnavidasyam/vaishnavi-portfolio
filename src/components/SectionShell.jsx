import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import React from "react";
export default function SectionShell({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}) {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) controls.start("visible");
      },
      { threshold: 0.2 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [controls]);

  return (
    <section id={id} ref={ref} className="scroll-mt-28">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-8"
      >
        <header className="space-y-2">
          {eyebrow && (
            <p className="text-xs uppercase tracking-[0.3em] text-primary">
              {eyebrow}
            </p>
          )}
          {title && (
            <h2 className="font-display text-2xl md:text-3xl">
              {title}{" "}
              <span className="bg-gradient-to-r from-primary via-cyan to-accent bg-clip-text text-transparent">
                //
              </span>
            </h2>
          )}
          {subtitle && (
            <p className="max-w-2xl text-sm text-slate-400">{subtitle}</p>
          )}
        </header>
        {children}
      </motion.div>
    </section>
  );
}
