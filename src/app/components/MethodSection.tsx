"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, StaggerContainer, StaggerItem } from "./animations";

const STEPS = [
  { 
    n: "01", 
    t: "Awaken", 
    b: "Understanding your goals, fears, and challenges through deep introspection and brutal reality checks.",
    glow: "rgba(37,99,235,0.2)"
  },
  { 
    n: "02", 
    t: "Build", 
    b: "Transforming raw motivation into robust, repeatable systems and unbreakable daily habits.",
    glow: "rgba(99,102,241,0.2)"
  },
  { 
    n: "03", 
    t: "Conquer", 
    b: "Executing with clarity and precision to achieve your ultimate potential in life and business.",
    glow: "rgba(139,92,246,0.2)"
  },
];

export default function MethodSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <section id="method" className="px-4 md:px-8 max-w-[1500px] mx-auto w-full relative">
      <div className="bg-[#0a0f1e] rounded-[48px] p-8 md:p-24 relative overflow-hidden border border-white/5">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[100px] pointer-events-none" />

        <Reveal>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-blue-500" />
              <span className="text-blue-400 text-xs font-black uppercase tracking-[0.4em]">The Framework</span>
            </div>
            <h2 className="heading-display text-white text-[clamp(2.5rem,5vw,4rem)] leading-[1.05] tracking-tighter max-w-[900px]">
              Maximize your growth with a <br />
              <span className="text-blue-400">Method</span> that generates results.
            </h2>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {STEPS.map((step, i) => (
            <StaggerItem key={step.n}>
              <div className="group relative bg-white/[0.03] backdrop-blur-xl p-10 md:p-12 rounded-[40px] h-full border border-white/5 hover:bg-white/[0.06] hover:border-blue-400/30 transition-all duration-700">
                {/* Step Connector Line (Desktop) */}
                {i < STEPS.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-[1px] bg-gradient-to-r from-white/10 to-transparent z-0" />
                )}

                {/* Animated Glow on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[40px]"
                  style={{ background: `radial-gradient(circle at top right, ${step.glow}, transparent)` }}
                />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <div className="heading-display text-[5rem] text-white/5 leading-none group-hover:text-blue-400/20 transition-colors duration-700">
                      {step.n}
                    </div>
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-400/50 group-hover:bg-blue-400/10 transition-all duration-700">
                      <div className="w-2 h-2 rounded-full bg-blue-400 group-hover:scale-150 transition-transform" />
                    </div>
                  </div>

                  <h3 className="heading text-3xl !text-white mb-6 group-hover:!text-blue-300 transition-colors duration-500">
                    {step.t}
                  </h3>
                  <p className="text-white/40 leading-relaxed text-lg group-hover:text-white/80 transition-colors duration-500 font-medium">
                    {step.b}
                  </p>
                </div>

                {/* Bottom Scan Line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-700" />
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* System Status Indicator */}
        <div className="mt-20 flex flex-wrap gap-8 items-center justify-center md:justify-start pt-10 border-t border-white/5 opacity-40">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white">Logic_Core: Active</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white">System_Sync: 100%</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white">Method_v2.6.0</span>
          </div>
        </div>
      </div>
    </section>
  );
}
