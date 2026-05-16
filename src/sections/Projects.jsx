// src/sections/Projects.jsx

import SectionShell from "../components/SectionShell";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import MagneticButton from "../components/MagneticButton";
// Import images
import swiggyImg from "../assets/images/projects/swiggy-clone.png";
import universityImg from "../assets/images/projects/university-system.png";
import spotifyImg from "../assets/images/projects/spotify-ai.png";
import React from "react";
const projects = [
  {
    name: "Swiggy Frontend Clone",
    tagline: "Modern Swiggy-inspired food delivery UI",
    tech: "React.js • Tailwind CSS • Framer Motion",
    description:
      "A Swiggy-inspired food delivery interface featuring dynamic menus, cart flow, and smooth micro-interactions.",
    image: swiggyImg,
    liveUrl: "",
    githubUrl: "",
  },
  {
    name: "University Management System",
    tagline: "Timetable & Attendance Management System",
    tech: "PHP • MySQL • JavaScript",
    description:
      "Streamlined management of timetables and attendance for academic workflows, focused on clarity and reliability.",
    image: universityImg,
    liveUrl: "",
    githubUrl: "",
  },
  {
    name: "Spotify AI Redesign",
    tagline: "AI-powered personalized music experience redesign",
    tech: "React.js • UI/UX",
    description:
      "Concept UX and React implementation exploring AI-driven discovery and mood-aware playlists in a Spotify-style UI.",
    image: spotifyImg,
    liveUrl: "",
    githubUrl: "",
  },
];

export default function Projects() {
  return (
    <SectionShell
      id="projects"
      eyebrow="Projects"
      title="Selected Work"
      subtitle="Projects that combine modern frontend engineering, thoughtful UI/UX, and real-world problem solving."
    >
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <ProjectCard key={project.name} project={project} delay={idx * 0.1} />
        ))}
      </div>
    </SectionShell>
  );
}

function ProjectCard({ project, delay }) {
  return (
    <motion.article
      className="group gradient-border glass-panel relative flex h-full flex-col overflow-hidden rounded-3xl p-4 transition-all duration-500"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay, duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      {/* Image Section */}
      <div className="relative h-52 overflow-hidden rounded-2xl bg-surfaceSoft">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Badge */}
        <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-slate-200 backdrop-blur-md">
          Featured Project
        </div>
      </div>

      {/* Content */}
      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-lg font-semibold tracking-wide text-white">
          {project.name}
        </h3>

        <p className="mt-1 text-sm font-medium text-primary">
          {project.tagline}
        </p>

        <p className="mt-3 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <p className="mt-4 text-xs uppercase tracking-wider text-slate-500">
          {project.tech}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex items-center gap-3">
          {project.liveUrl && (
            <IconButton label="Live Preview" href={project.liveUrl}>
              <ExternalLink size={14} />
            </IconButton>
          )}

          {project.githubUrl && (
            <IconButton label="GitHub" href={project.githubUrl}>
              <Github size={14} />
            </IconButton>
          )}
        </div>
      </div>

      {/* Glow Effect */}
      <div className="pointer-events-none absolute inset-0 rounded-3xl border border-primary/10 opacity-0 transition duration-500 group-hover:opacity-100" />
    </motion.article>
  );
}

function IconButton({ children, label, href }) {
  const Tag = href ? "a" : "button";
  const MotionTag = motion(Tag);

  return (
    <MotionTag
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2, scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-surfaceSoft/80 px-4 py-2 text-xs font-medium text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-primary/70 hover:bg-primary/10 hover:text-primary"
    >
      {children}
      <span>{label}</span>
    </MotionTag>
  );
}
