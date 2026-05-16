import SectionShell from "../components/SectionShell";
import { motion } from "framer-motion";
import React from "react";
export default function Achievements() {
  return (
    <SectionShell
      id="achievements"
      eyebrow="Achievements & Activities"
      title="Beyond coursework"
      subtitle="A snapshot of initiatives, contributions, and explorations that shape how I build."
    >
      <div className="grid grid-cols-6 gap-4">
        <Bento
          className="col-span-6 md:col-span-3"
          title="Academic excellence"
          body="Consistently strong academic performance while exploring side projects, internships, and new technologies."
        />
        <Bento
          className="col-span-6 md:col-span-3"
          title="Hackathons & events"
          body="Engaging in technical events and workshops to refine problem‑solving and collaboration skills."
        />
        <Bento
          className="col-span-6 md:col-span-4"
          title="Self‑driven learning"
          body="From AI‑assisted tooling to modern frontend frameworks, continuously iterating on how I learn and build."
        />
        <Bento
          className="col-span-6 md:col-span-2"
          title="Community"
          body="Sharing knowledge informally with peers and learning in public when possible."
        />
      </div>
    </SectionShell>
  );
}

function Bento({ className, title, body }) {
  return (
    <motion.div
      className={`glass-panel relative overflow-hidden rounded-2xl p-4 text-sm ${className}`}
      whileHover={{ y: -4 }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 transition group-hover:opacity-100" />
      <h3 className="font-medium text-slate-100">{title}</h3>
      <p className="mt-2 text-xs text-slate-400">{body}</p>
    </motion.div>
  );
}
