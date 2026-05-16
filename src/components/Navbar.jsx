import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import React from "react";
const sections = [
  "hero",
  "about",
  "education",
  "experience",
  "skills",
  "projects",
  "certifications",
  "achievements",
  "contact",
];

const labelMap = {
  hero: "Home",
  about: "About",
  education: "Education",
  experience: "Experience",
  skills: "Skills",
  projects: "Projects",
  certifications: "Certifications",
  achievements: "Activities",
  contact: "Contact",
};

export default function Navbar() {
  const [active, setActive] = useState("hero");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => {
      let current = "hero";
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = id;
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top: y, behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <motion.button
          className="gradient-border rounded-full bg-surface/70 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-slate-200 backdrop-blur-xl"
          whileHover={{ scale: 1.03 }}
        >
          <span className="text-primary">Vaishnavi</span> Dasyam
        </motion.button>

        <nav className="hidden items-center gap-2 rounded-full bg-surface/70 px-3 py-1.5 text-xs font-medium text-slate-300 backdrop-blur-xl md:flex">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`relative rounded-full px-3 py-1 transition-colors ${
                active === id ? "text-slate-50" : "text-slate-400"
              }`}
            >
              {active === id && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-surfaceSoft"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              {labelMap[id]}
            </button>
          ))}
        </nav>

        <button
          className="inline-flex items-center justify-center rounded-full bg-surface/70 p-2 text-slate-200 backdrop-blur-xl md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl bg-surface/95 p-3 text-sm text-slate-200 backdrop-blur-xl md:hidden">
          {sections.map((id) => (
            <button
              key={id}
              onClick={() => handleScroll(id)}
              className={`block w-full rounded-xl px-3 py-2 text-left ${
                active === id ? "bg-surfaceSoft text-slate-50" : ""
              }`}
            >
              {labelMap[id]}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
