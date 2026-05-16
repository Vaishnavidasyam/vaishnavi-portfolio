import SectionShell from "../components/SectionShell";
import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import React from "react";
export default function Contact() {
  return (
    <SectionShell
      id="contact"
      eyebrow="Contact"
      title="Let’s build something thoughtful"
      subtitle="Whether it’s an internship, collaboration, or idea you’d like to explore, I’d love to hear from you."
    >
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)]">
        <motion.form
          className="glass-panel gradient-border space-y-4 rounded-2xl p-5"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Name" placeholder="Your name" />
            <Field label="Email" placeholder="your@email.com" />
          </div>
          <Field
            label="Project / Message"
            multiline
            placeholder="Share a short brief or idea..."
          />
          <motion.button
            type="submit"
            className="magnetic w-full rounded-full bg-gradient-to-r from-primary via-cyan to-accent px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.22em] text-slate-900"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
          >
            Send message
          </motion.button>
        </motion.form>

        <div className="space-y-4 text-sm">
          <ContactCard
            icon={<Mail size={16} />}
            label="Email"
            value="dasyam.vaishnavi12@gmail.com"
            href="mailto:dasyam.vaishnavi12@gmail.com"
          />
          <ContactCard
            icon={<Linkedin size={16} />}
            label="LinkedIn"
            value="dasyam-vaishnavi-02a309273"
            href="https://www.linkedin.com/in/dasyam-vaishnavi-02a309273"
          />
        </div>
      </div>
    </SectionShell>
  );
}

function Field({ label, placeholder, multiline = false }) {
  const Tag = multiline ? "textarea" : "input";

  return (
    <label className="block text-xs text-slate-300">
      {label}
      <Tag
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl border border-slate-700/60 bg-surfaceSoft/80 px-3 py-2 text-xs text-slate-100 outline-none ring-primary/40 transition placeholder:text-slate-500 focus:border-primary/70 focus:ring-1"
        rows={multiline ? 4 : undefined}
      />
    </label>
  );
}

function ContactCard({ icon, label, value, href }) {
  return (
    <motion.a
      href={href}
      className="glass-panel flex items-center justify-between rounded-2xl px-4 py-3 text-xs"
      whileHover={{ y: -3 }}
    >
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-surfaceSoft text-primary">
          {icon}
        </span>
        <div>
          <p className="text-slate-400">{label}</p>
          <p className="text-slate-100">{value}</p>
        </div>
      </div>
      <span className="text-slate-400">Contact</span>
    </motion.a>
  );
}
