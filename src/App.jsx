import React from "react";
import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Cursor from "./components/Cursor";
import Loader from "./components/Loader";
import { initScrollAnimations } from "./lib/gsapScroll";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);

  // Loader
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(t);
  }, []);

  // Lenis smooth scrolling
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Scroll progress indicator
  useEffect(() => {
    const progressEl = document.getElementById("scroll-progress");

    const update = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const progress = docHeight ? scrollTop / docHeight : 0;
      if (progressEl) {
        progressEl.style.transform = `scaleX(${progress})`;
      }
    };

    window.addEventListener("scroll", update);
    return () => window.removeEventListener("scroll", update);
  }, []);

  // GSAP scroll animations
  useEffect(() => {
    initScrollAnimations();
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <div id="scroll-progress" />
      <Cursor />
      <div className="relative min-h-screen bg-bg text-slate-100 overflow-hidden">
        {/* Background grid + blobs */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid bg-grid opacity-40" />
        <div className="pointer-events-none fixed -top-48 -left-32 h-80 w-80 rounded-full bg-primary/30 blur-3xl bg-blob-1" />
        <div className="pointer-events-none fixed top-1/3 -right-32 h-96 w-96 rounded-full bg-cyan/25 blur-3xl bg-blob-2" />
        <div className="pointer-events-none fixed bottom-0 left-1/4 h-72 w-72 rounded-full bg-accent/20 blur-3xl bg-blob-3" />

        <Navbar />

        <main className="mx-auto max-w-6xl px-4 pb-24 pt-24 md:pt-32 space-y-24 md:space-y-32">
          <Hero />
          <About />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Certifications />
          <Achievements />
          <Contact />
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
