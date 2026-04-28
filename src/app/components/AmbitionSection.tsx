"use client";

import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef } from "react";
import { Dumbbell, Laptop, Sparkles, Brain, Code, Zap } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "./animations";

const INTERESTS = [
  {
    icon: Dumbbell,
    title: "Fitness & Health",
    desc: "Discipline starts with the body. Early morning workouts aren't optional—they're the foundation.",
    tags: ["Early Riser", "Strength Training", "Mental Clarity"],
    level: 94,
    status: "OPTIMIZED"
  },
  {
    icon: Laptop,
    title: "Tech & Tools",
    desc: "Obsessed with optimizing workflows. The right system can 10x your output overnight.",
    tags: ["Productivity", "Automation", "Workflow Design"],
    level: 88,
    status: "SCALING"
  },
  {
    icon: Sparkles,
    title: "AI Specialist",
    desc: "Living at the edge of what's possible. Exploring AI tools before they go mainstream.",
    tags: ["Machine Learning", "Prompt Engineering", "Future Tech"],
    level: 82,
    status: "ACTIVE"
  },
];

export default function AmbitionSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const xText = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} id="interests" className="px-4 md:px-8 max-w-[1500px] mx-auto w-full relative overflow-hidden">
      {/* Massive Background Text */}
      <motion.div 
        style={{ x: xText }}
        className="absolute top-1/2 left-0 -translate-y-1/2 text-[25vw] font-black text-white/[0.07] whitespace-nowrap pointer-events-none select-none z-0 uppercase tracking-tighter leading-none mix-blend-soft-light"
      >
        AMBITION AMBITION AMBITION
      </motion.div>

      <div className="bg-black rounded-[40px] p-8 md:p-20 relative overflow-hidden border border-white/5 z-10">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div className="max-w-[600px]">
              <p className="eyebrow mb-4">Beyond Work</p>
              <h2 className="heading-display text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1]">
                What Drives <br />
                <span className="text-blue-400">My Ambition.</span>
              </h2>
            </div>
            <p className="text-white/50 text-lg max-w-[300px] font-medium leading-relaxed">
              The core pillars that fuel my consistency and creativity.
            </p>
          </div>
        </Reveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 relative z-10">
          {INTERESTS.map((item) => (
            <StaggerItem key={item.title}>
              <div className="group bg-white/[0.03] backdrop-blur-xl p-10 h-full relative overflow-hidden rounded-[32px] border border-white/5 hover:border-blue-400/30 transition-all duration-500 flex flex-col">
                {/* Large Background Icon Outline */}
                <div className="absolute -right-8 -bottom-8 opacity-[0.03] group-hover:opacity-10 transition-opacity">
                  <item.icon className="w-[12rem] h-[12rem] text-blue-400 stroke-[1px]" />
                </div>

                {/* Scan Line Effect */}
                <div className="absolute inset-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-400/20 to-transparent -translate-y-full group-hover:animate-scan pointer-events-none" />

                <div className="flex justify-between items-start mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <item.icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <span className="text-[10px] font-mono text-blue-400/60 border border-blue-400/20 px-2 py-1 rounded bg-blue-400/5">
                    {item.status}
                  </span>
                </div>

                <h3 className="heading text-2xl !text-white mb-4 relative z-10 group-hover:!text-blue-300 transition-colors">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-10 relative z-10 group-hover:text-white/80 transition-colors">{item.desc}</p>
                
                {/* Intensity Meter */}
                <div className="mt-auto relative z-10 mb-8">
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Intensity Level</span>
                    <span className="text-xs font-mono text-blue-400">{item.level}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                      className="h-full bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 relative z-10">
                  {item.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-bold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 uppercase tracking-wider group-hover:bg-blue-400/10 group-hover:border-blue-400/20 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <Reveal delay={0.2}>
          <div className="bg-black p-8 md:p-12 rounded-[32px] border border-white/5 relative z-10 overflow-hidden group/bar">
            {/* Live Terminal Background */}
            <div className="absolute inset-0 opacity-[0.02] font-mono text-[10px] text-blue-400 pointer-events-none p-4 break-all overflow-hidden leading-none">
              {Array.from({ length: 20 }).map((_, i) => (
                <div key={i}>INIT_SYS_PROT_v4.2.0 :: ACCESSING_CORE_DATA :: {Math.random().toString(16)} :: STATUS_OK</div>
              ))}
            </div>

            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center relative z-10">
              <div className="md:w-1/3 text-left">
                <div className="flex items-center gap-3 mb-2">
                  <div className="relative">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="absolute inset-0 w-2 h-2 rounded-full bg-blue-500 animate-ping" />
                  </div>
                  <h3 className="heading text-2xl !text-white tracking-tight">Currently Exploring</h3>
                </div>
                <p className="text-white/40 text-xs font-mono uppercase tracking-widest">Active Research Feed</p>
              </div>
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8">
                {[
                  { icon: Brain, label: "AI Agents", sub: "Autonomous workflows" },
                  { icon: Code, label: "No-Code Tools", sub: "Building without code" },
                  { icon: Zap, label: "Content Velocity", sub: "Scale without burnout" },
                ].map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="group/item cursor-default text-left relative">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:border-blue-400 group-hover/item:bg-blue-400/10 transition-all duration-300">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <div>
                        <h4 className="heading text-sm !text-white mb-1 group-hover/item:!text-blue-400 transition-colors">{label}</h4>
                        <p className="text-white/30 text-[10px] leading-tight font-mono uppercase tracking-tighter">{sub}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
