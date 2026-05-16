// src/components/layout/PageShell.jsx
import Cursor from "../Cursor";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function PageShell({ children }) {
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
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
}
