// src/sections/Hero.jsx
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/images/profile-vaishnavi.jpg";
// Optional hero background blur (delete if you don’t use it)
// import heroBg from '../assets/images/hero-bg-blur.png';
import React from "react";
//import MagneticButton from "../components/MagneticButton";
const titles = [
  "AI & Web Development Intern",
  "React.js Developer",
  "Frontend Engineer",
  "AI Enthusiast",
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="grid items-center gap-10 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)]"
    >
      {/* LEFT SIDE – TEXT */}
      <div className="space-y-8">
        <motion.p
          className="inline-flex items-center gap-2 rounded-full bg-surface/70 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-400 backdrop-blur-xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Open to internships
        </motion.p>

        <motion.h1
          className="font-display text-3xl leading-tight md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Building{" "}
          <span className="bg-gradient-to-br from-primary via-cyan to-accent bg-clip-text text-transparent">
            AI‑driven web experiences
          </span>{" "}
          that feel like the future.
        </motion.h1>

        <motion.p
          className="max-w-xl text-sm text-slate-400 md:text-base"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          I&apos;m <span className="text-slate-100">Vaishnavi Dasyam</span>, a
          Computer Science Engineering student and frontend‑focused developer
          crafting interfaces that blend premium product design with AI‑assisted
          workflows.
        </motion.p>

        {/* Rotating title */}
        <motion.div
          className="glass-panel inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-sm"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.45 }}
        >
          <span className="h-8 w-8 rounded-xl bg-gradient-to-br from-primary to-cyan" />
          <div className="flex flex-col">
            <span className="text-xs uppercase tracking-[0.2em] text-slate-400">
              Currently evolving as
            </span>
            <TitleRotator />
          </div>
        </motion.div>

        {/* CTAs + Socials */}
        <motion.div
          className="flex flex-wrap items-center gap-4"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.45 }}
        >
          <MagneticButton onClick={() => scrollToSection("projects")}>
            View Projects
          </MagneticButton>

          <MagneticButton
            variant="secondary"
            as="a"
            href="/Vaishnavi_Dasyam_Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Download Resume
          </MagneticButton>

          <div className="flex items-center gap-3 text-slate-400">
            <SocialIcon href="mailto:dasyam.vaishnavi12@gmail.com">
              <FaEnvelope />
            </SocialIcon>
            <SocialIcon href="https://github.com" ariaLabel="GitHub">
              <FaGithub />
            </SocialIcon>
            <SocialIcon
              href="https://www.linkedin.com/in/dasyam-vaishnavi-02a309273"
              ariaLabel="LinkedIn"
            >
              <FaLinkedin />
            </SocialIcon>
          </div>
        </motion.div>
      </div>

      {/* RIGHT SIDE – PROFILE CARD */}
      <motion.div
        className="relative flex justify-center md:justify-end"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="gradient-border glass-panel relative flex h-72 w-72 items-center justify-center rounded-3xl md:h-80 md:w-80">
          {/* OPTIONAL hero background blur image behind profile */}
          {/* <div className="absolute inset-0 -z-10 overflow-hidden rounded-3xl">
            <img
              src={heroBg}
              alt=""
              className="h-full w-full object-cover opacity-60 mix-blend-screen"
            />
          </div> */}

          <div className="relative h-40 w-40 overflow-hidden rounded-3xl bg-surfaceSoft shadow-soft">
            <img
              src={profileImg}
              alt="Vaishnavi Dasyam"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="pointer-events-none absolute -top-5 -right-4 rounded-2xl bg-surfaceSoft/90 px-3 py-2 text-xs text-slate-200 shadow-soft">
            React‑first • AI‑curious
          </div>
          <div className="pointer-events-none absolute -bottom-6 -left-4 rounded-2xl bg-surfaceSoft/90 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-slate-400 shadow-soft">
            JNTUH • CSE IDP
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function TitleRotator() {
  const index = Math.floor(Date.now() / 2500) % titles.length;
  const title = titles[index];

  return (
    <motion.span
      key={title}
      className="text-sm md:text-base"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.35 }}
    >
      {title}
    </motion.span>
  );
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.scrollY - 80;
  window.scrollTo({ top: y, behavior: "smooth" });
}

function MagneticButton({
  children,
  variant = "primary",
  as: Tag = "button",
  ...rest
}) {
  return (
    <motion.div
      className="magnetic inline-flex"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <Tag
        className={`relative overflow-hidden rounded-full px-5 py-2.5 text-xs font-medium uppercase tracking-[0.22em] ${
          variant === "primary"
            ? "bg-gradient-to-r from-primary via-cyan to-accent text-slate-900"
            : "border border-slate-700/60 bg-surface/80 text-slate-100"
        }`}
        {...rest}
      >
        <span className="relative z-10">{children}</span>
        <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0_0,rgba(255,255,255,0.22),transparent_60%)] opacity-0 transition-opacity duration-200 hover:opacity-100" />
      </Tag>
    </motion.div>
  );
}

function SocialIcon({ href, children, ariaLabel }) {
  return (
    <motion.a
      href={href}
      aria-label={ariaLabel}
      className="magnetic flex h-9 w-9 items-center justify-center rounded-full bg-surface/80 text-slate-300 shadow-soft backdrop-blur-xl transition hover:text-primary"
      whileHover={{ y: -2 }}
    >
      {children}
    </motion.a>
  );
}
