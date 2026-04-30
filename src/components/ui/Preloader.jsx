import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const total = reduced ? 300 : 2000;
    const t = setTimeout(() => setShow(false), total);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (show) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [show]);

  const SLIDE = 140;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-navy"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
          aria-hidden="true"
        >
          {/* Ambient coral glow */}
          <motion.div
            className="absolute pointer-events-none"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: [0, 0.55, 0.25, 0], scale: [0.6, 1, 1.4, 2] }}
            transition={{ duration: 2.0, times: [0, 0.25, 0.7, 1], ease: "easeOut" }}
          >
            <div className="w-80 h-80 rounded-full bg-coral/25 blur-3xl" />
          </motion.div>

          <div className="relative flex items-center justify-center">
            {/* Left bracket { */}
            <motion.span
              className="absolute font-mono font-bold text-coral select-none"
              style={{
                fontSize: "9rem",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                textShadow: "0 0 24px rgba(228,73,70,0.45)",
              }}
              initial={{ x: 0, opacity: 0, scale: 0.4 }}
              animate={{
                x: [0, 0, -SLIDE, -SLIDE * 1.2],
                opacity: [0, 1, 1, 0],
                scale: [0.4, 1, 1, 0.85],
              }}
              transition={{
                duration: 1.7,
                times: [0, 0.22, 0.65, 1],
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {"{"}
            </motion.span>

            {/* Right bracket } */}
            <motion.span
              className="absolute font-mono font-bold text-coral select-none"
              style={{
                fontSize: "9rem",
                lineHeight: 1,
                letterSpacing: "-0.04em",
                textShadow: "0 0 24px rgba(228,73,70,0.45)",
              }}
              initial={{ x: 0, opacity: 0, scale: 0.4 }}
              animate={{
                x: [0, 0, SLIDE, SLIDE * 1.2],
                opacity: [0, 1, 1, 0],
                scale: [0.4, 1, 1, 0.85],
              }}
              transition={{
                duration: 1.7,
                times: [0, 0.22, 0.65, 1],
                ease: [0.4, 0, 0.2, 1],
              }}
            >
              {"}"}
            </motion.span>

            {/* Center C */}
            <motion.span
              className="font-mono font-bold text-sky select-none"
              style={{
                fontSize: "8rem",
                lineHeight: 1,
                textShadow: "0 0 32px rgba(208,234,245,0.35)",
              }}
              initial={{ scale: 0.4, opacity: 0 }}
              animate={{
                scale: [0.4, 1, 1, 24],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 1.95,
                times: [0, 0.22, 0.55, 1],
                ease: [0.65, 0, 0.35, 1],
              }}
            >
              C
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
