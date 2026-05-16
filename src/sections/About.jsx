import SectionShell from "../components/SectionShell";
import { motion } from "framer-motion";
import React from "react";
export default function About() {
  return (
    <SectionShell
      id="about"
      eyebrow="About"
      title="Engineering interfaces at the intersection of AI and the web"
      subtitle="Computer Science Engineering student in a 5‑Year Integrated Dual Program at JNTUH Hyderabad, focusing on AI‑powered applications and frontend‑centric product experiences."
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)]">
        <p className="text-sm leading-relaxed text-slate-300">
          Vaishnavi is a motivated Computer Science Engineering student
          exploring how AI can augment modern web experiences, from annotation
          pipelines to responsive, production‑ready frontends. She enjoys
          translating complex ideas into interfaces that feel effortless,
          intentional, and delightfully fast.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          {[
            { label: "Years learning & building", value: "3+" },
            { label: "Core focus", value: "Web Development" },
            { label: "CGPA (IDP)", value: "8.4" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              className="glass-panel rounded-2xl px-4 py-3 text-xs"
              whileHover={{ y: -4, boxShadow: "0 18px 45px rgba(0,0,0,0.4)" }}
            >
              <div className="text-slate-400">{stat.label}</div>
              <div className="mt-1 text-lg font-semibold text-slate-50">
                {stat.value}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <InfoCard
          title="AI Annotation • Student Tribe"
          items={[
            "AI data annotation workflows",
            "Dataset quality improvement",
            "AI validation processes",
          ]}
        />
        <InfoCard
          title="Web Dev & AI • Ten"
          items={[
            "Responsive web interfaces",
            "AI‑assisted workflows",
            "React.js‑driven frontends",
          ]}
        />
      </div>
    </SectionShell>
  );
}

function InfoCard({ title, items }) {
  return (
    <motion.div
      className="glass-panel relative overflow-hidden rounded-2xl p-4"
      whileHover={{ y: -3 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-cyan/10 opacity-0 transition group-hover:opacity-100" />
      <h3 className="text-sm font-medium text-slate-100">{title}</h3>
      <ul className="mt-2 space-y-1 text-xs text-slate-400">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </motion.div>
  );
}
