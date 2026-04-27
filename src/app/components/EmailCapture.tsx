"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Check, Zap } from "lucide-react";

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="email-capture-section">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-[640px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full border border-blue-500/20 mb-6">
            <Zap className="w-3.5 h-3.5" /> Free Resource
          </div>

          <h2 className="heading-display text-white text-[clamp(2rem,5vw,3rem)] mb-4">
            Get the 7-Day<br />
            <span className="gradient-text">Execution Blueprint.</span>
          </h2>

          <p className="text-white/60 text-sm md:text-base mb-8 max-w-[440px] mx-auto leading-relaxed">
            The exact framework I used to build a 450K+ audience. 
            Delivered to your inbox — no fluff, pure signal.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-[480px] mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="email-input flex-1"
              />
              <button type="submit" className="btn email-submit-btn">
                Get Free Access <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-3 bg-green-500/10 border border-green-500/20 rounded-full py-3 px-6 mx-auto max-w-max"
            >
              <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center">
                <Check className="w-4 h-4 text-white" />
              </div>
              <span className="text-green-300 font-semibold text-sm">
                Check your inbox — blueprint incoming! 🚀
              </span>
            </motion.div>
          )}

          <p className="text-white/30 text-xs mt-4">
            Join 12,000+ creators. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
