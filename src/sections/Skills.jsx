// src/sections/Skills.jsx

import React from "react";

import SectionShell from "../components/SectionShell";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { SiMysql, SiPhp, SiXampp } from "react-icons/si";

import { skillCategories } from "../data/skills";

const icons = [
  <FaHtml5 key="html" className="text-[#E34F26]" />,
  <FaCss3Alt key="css" className="text-[#1572B6]" />,
  <FaJs key="js" className="text-[#F7DF1E]" />,
  <FaReact key="react" className="text-[#61DAFB]" />,
  <SiPhp key="php" className="text-[#777BB4]" />,
  <SiMysql key="mysql" className="text-[#4479A1]" />,
  <FaGitAlt key="git" className="text-[#F05032]" />,
  <FaGithub key="github" className="text-white" />,
  <SiXampp key="xampp" className="text-[#FB7A24]" />,
];

export default function Skills() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="A stack tuned for modern web experiences"
      subtitle="Comfortable across frontend technologies, backend systems, and full-stack development workflows."
    >
      <div className="relative">
        {/* Floating Tech Icons */}
        <div className="pointer-events-none absolute -top-8 right-4 flex gap-3 opacity-70">
          {icons.slice(0, 5).map((icon, idx) => (
            <motion.div
              key={idx}
              className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/5 bg-surfaceSoft shadow-soft"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3 + idx,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="text-xl">{icon}</div>
            </motion.div>
          ))}
        </div>

        {/* Skill Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className="glass-panel gradient-border rounded-3xl p-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -4 }}
            >
              <h3 className="text-lg font-semibold text-white">
                {category.title}
              </h3>

              <div className="mt-5 space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={skill.name}>
                    {/* Skill Top Row */}
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-slate-400">{skill.level}%</span>
                    </div>

                    {/* Progress Bar */}
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-surfaceSoft">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-primary via-cyan to-accent"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.08,
                          duration: 0.7,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Tech Marquee */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/5 bg-surface/80 py-3">
          <motion.div
            className="flex gap-10 whitespace-nowrap px-6 text-sm text-slate-400"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[
              "React.js",
              "JavaScript",
              "HTML5",
              "CSS3",
              "Responsive Design",
              "PHP",
              "MySQL",
              "Java",
              "Python",
              "C",
              "Git",
              "GitHub",
              "VS Code",
              "XAMPP",
              "Framer Motion",
              "Tailwind CSS",
            ].map((item) => (
              <span key={item} className="tracking-wide text-slate-300">
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </SectionShell>
  );
}
