import React from "react";
export default function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-bg/80 py-4 text-xs text-slate-500 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4">
        <p>© {new Date().getFullYear()} Vaishnavi Dasyam.</p>
        <p className="text-[10px] uppercase tracking-[0.25em]">
          Building AI‑driven web experiences
        </p>
      </div>
    </footer>
  );
}
