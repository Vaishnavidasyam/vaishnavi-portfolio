import { motion } from "framer-motion";
import React from "react";
export default function Loader() {
  return (
    <div className="loader-gradient flex min-h-screen items-center justify-center bg-bg text-slate-100">
      <div className="glass-panel gradient-border relative flex flex-col items-center gap-4 rounded-2xl px-10 py-8 text-center">
        <motion.span
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-surfaceSoft"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        >
          <span className="h-6 w-6 rounded-xl bg-gradient-to-tr from-primary via-cyan to-accent" />
        </motion.span>
        <div className="font-display text-lg tracking-wide">
          Initializing <span className="text-primary">Vaishnavi Dasyam</span>{" "}
          Portfolio
        </div>
        <motion.div className="mt-1 h-1 w-32 overflow-hidden rounded-full bg-surfaceSoft">
          <motion.div
            className="h-full w-1/2 bg-gradient-to-r from-primary via-cyan to-accent"
            initial={{ x: "-50%" }}
            animate={{ x: "150%" }}
            transition={{ repeat: Infinity, duration: 1.0, ease: "easeInOut" }}
          />
        </motion.div>
        <p className="text-xs uppercase tracking-[0.25em] text-slate-400">
          Vaishnavi&nbsp;Dasyam
        </p>
      </div>
    </div>
  );
}
