// src/lib/gsapScroll.js
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollAnimations() {
  // Subtle parallax on blobs
  const blobSelectors = [".bg-blob-1", ".bg-blob-2", ".bg-blob-3"];

  blobSelectors.forEach((selector, index) => {
    const elems = gsap.utils.toArray(selector);
    elems.forEach((el) => {
      gsap.to(el, {
        y: index % 2 === 0 ? 60 : -60,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scrub: true,
        },
      });
    });
  });

  // Section fade + slide on scroll (in addition to Framer)
  const sections = gsap.utils.toArray("section");
  sections.forEach((section) => {
    gsap.fromTo(
      section,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      },
    );
  });
}
