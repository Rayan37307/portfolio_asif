"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Gift } from "lucide-react";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    // Don't show if already shown this session
    if (sessionStorage.getItem("exit_popup_shown")) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("exit_popup_shown", "true");
        // Remove listener after triggering
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    // Delay attaching listener so it doesn't fire immediately
    const timeout = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timeout);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setTimeout(() => setShow(false), 2500);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="exit-popup-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setShow(false);
          }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="exit-popup-card"
          >
            {/* Close */}
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-white/40 hover:text-white/80 transition-colors"
              aria-label="Close popup"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Decorative glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[150px] bg-blue-500/15 rounded-full blur-[80px] pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-blue-500/30">
                <Gift className="w-7 h-7 text-white" />
              </div>

              <h3 className="heading-display text-white text-2xl md:text-3xl text-center mb-3">
                Wait — don&apos;t leave<br />empty-handed.
              </h3>

              <p className="text-white/50 text-sm text-center mb-6 max-w-[340px] mx-auto leading-relaxed">
                Grab the free 7-Day Execution Blueprint used by 12,000+ creators to build unstoppable momentum.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-[360px] mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="email-input text-center"
                  />
                  <button type="submit" className="btn email-submit-btn w-full justify-center">
                    Send Me The Blueprint <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center"
                >
                  <div className="text-3xl mb-2">🚀</div>
                  <p className="text-green-400 font-semibold text-sm">Blueprint on its way!</p>
                </motion.div>
              )}

              <p className="text-white/20 text-[10px] text-center mt-4 uppercase tracking-widest">
                No spam · Unsubscribe anytime
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
