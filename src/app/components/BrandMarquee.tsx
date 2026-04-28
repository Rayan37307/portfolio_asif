"use client";

import { motion } from "framer-motion";

const BRANDS = [
  "STRATEGY", "EXECUTION", "MINDSET", "GROWTH", "SYSTEMS", "DISCIPLINE", "VISION", "IMPACT"
];

export default function BrandMarquee() {
  return (
    <section className="py-12 bg-black border-y border-white/5 overflow-hidden">
      <div className="flex select-none">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex gap-12 items-center whitespace-nowrap pr-12"
        >
          {[...BRANDS, ...BRANDS].map((brand, i) => (
            <div key={i} className="flex items-center gap-12">
              <span className="heading-display text-4xl md:text-6xl text-white/20 hover:text-blue-500 transition-colors cursor-default">
                {brand}
              </span>
              <div className="w-2 h-2 rounded-full bg-blue-500/50" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
