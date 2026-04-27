"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Sparkles } from "lucide-react";

export default function StickyBottomCTA() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~60% of viewport height (past hero)
      if (window.scrollY > window.innerHeight * 0.6) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[100] pointer-events-none"
        >
          <div className="max-w-[1600px] mx-auto px-4 pb-4 pointer-events-auto">
            <div className="sticky-cta-bar">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                  <span className="font-bold text-white text-sm">
                    Backbenchers University
                  </span>
                  <span className="text-blue-200/70 text-xs font-medium hidden sm:inline">
                    — Enrollment Open · Limited Spots
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="#pricing"
                  className="btn bg-white text-[#0a0f1a] text-xs font-bold px-5 py-2.5 hover:scale-105 transition-transform shadow-lg"
                >
                  Apply Now <ArrowRight className="w-3.5 h-3.5" />
                </a>
                <button
                  onClick={() => setDismissed(true)}
                  className="text-white/40 hover:text-white/80 transition-colors p-1"
                  aria-label="Dismiss"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
