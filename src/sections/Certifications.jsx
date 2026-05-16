import SectionShell from "../components/SectionShell";
import { motion } from "framer-motion";
import React from "react";
const certs = [
  { title: "Cyber Security" },
  { title: "Digital Marketing" },
  { title: "AutoCAD Project" },
];

export default function Certifications() {
  return (
    <SectionShell
      id="certifications"
      eyebrow="Certifications"
      title="Continuous upskilling, beyond the classroom"
    >
      <div className="grid gap-5 md:grid-cols-3">
        {certs.map((cert, idx) => (
          <motion.div
            key={cert.title}
            className="glass-panel group relative overflow-hidden rounded-2xl p-4 text-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: idx * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-cyan/15 opacity-0 transition group-hover:opacity-100" />
            <h3 className="font-medium text-slate-100">{cert.title}</h3>
            <p className="mt-2 text-xs text-slate-400">
              Credential demonstrating focused exploration and practical
              application in this domain.
            </p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
