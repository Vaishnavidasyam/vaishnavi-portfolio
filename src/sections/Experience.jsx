import SectionShell from "../components/SectionShell";
import { motion } from "framer-motion";
import React from "react";
const experiences = [
  {
    role: "AI Annotation Intern",
    company: "Student Tribe",
    points: [
      "Executed AI data annotation workflows for structured datasets",
      "Improved dataset quality with consistent labeling standards",
      "Supported AI validation processes and review loops",
    ],
  },
  {
    role: "Web Development & AI Intern",
    company: "Ten",
    points: [
      "Built responsive web interfaces with modern UX patterns",
      "Prototyped AI‑assisted workflows within web applications",
      "Developed React.js frontends aligned with design systems",
    ],
  },
];

export default function Experience() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="Hands‑on, internship‑driven learning"
      subtitle="Applying skills in real environments with a focus on AI and modern web development."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, idx) => (
          <motion.article
            key={exp.company}
            className="glass-panel relative overflow-hidden rounded-2xl p-5"
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition-delay={idx * 0.08}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-cyan/12 opacity-0 transition group-hover:opacity-100" />
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-semibold text-slate-100">
                {exp.role}
              </h3>
              <span className="rounded-full bg-surfaceSoft/90 px-3 py-1 text-xs text-slate-300">
                {exp.company}
              </span>
            </div>
            <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
              {exp.points.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
