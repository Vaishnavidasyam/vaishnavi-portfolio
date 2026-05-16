import SectionShell from "../components/SectionShell";
import { motion } from "framer-motion";
import { education } from "../data/education";
import React from "react";
export default function Education() {
  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="A grounded academic foundation"
      subtitle="Blending computer science fundamentals with hands‑on, project‑driven learning."
    >
      <div className="relative pl-4 md:pl-6">
        <div className="absolute left-1 top-1 bottom-1 w-px bg-gradient-to-b from-primary via-cyan/60 to-accent/40" />
        <div className="space-y-6">
          {education.map((item, idx) => (
            <motion.div
              key={item.title}
              className="relative flex gap-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: idx * 0.08 }}
            >
              <div className="mt-1">
                <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_12px_rgba(127,90,240,0.9)]" />
              </div>
              <div className="glass-panel rounded-2xl px-4 py-3 text-sm">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-medium text-slate-100">
                    {item.organization}
                  </h3>
                  <span className="rounded-full bg-surfaceSoft/80 px-3 py-1 text-xs text-slate-300">
                    {item.meta}
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-400">{item.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
