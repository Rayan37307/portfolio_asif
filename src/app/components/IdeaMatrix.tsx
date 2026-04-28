"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Zap, Target, Eye, Rocket, Users, Lightbulb, TrendingUp } from "lucide-react";

const PILLARS = [
  {
    icon: Brain,
    title: "Mindset Engineering",
    desc: "Rewiring mental models for peak performance. Breaking limiting beliefs with systems thinking.",
    accent: "from-blue-500/20 to-blue-600/5",
    border: "hover:border-blue-500/40",
    iconBg: "bg-blue-500/15 border-blue-500/25",
    iconColor: "text-blue-400",
    span: "md:col-span-2 md:row-span-2", // Large featured card
    featured: true,
  },
  {
    icon: Zap,
    title: "Daily Execution",
    desc: "Compound actions that build unstoppable momentum.",
    accent: "from-indigo-500/15 to-indigo-600/5",
    border: "hover:border-indigo-500/40",
    iconBg: "bg-indigo-500/15 border-indigo-500/25",
    iconColor: "text-indigo-400",
    span: "",
    featured: false,
  },
  {
    icon: Target,
    title: "Content Strategy",
    desc: "Creating viral, high-impact content that converts.",
    accent: "from-violet-500/15 to-violet-600/5",
    border: "hover:border-violet-500/40",
    iconBg: "bg-violet-500/15 border-violet-500/25",
    iconColor: "text-violet-400",
    span: "",
    featured: false,
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    desc: "Monetization frameworks that scale.",
    accent: "from-emerald-500/15 to-emerald-600/5",
    border: "hover:border-emerald-500/40",
    iconBg: "bg-emerald-500/15 border-emerald-500/25",
    iconColor: "text-emerald-400",
    span: "",
    featured: false,
  },
  {
    icon: Lightbulb,
    title: "AI & Automation",
    desc: "Leveraging cutting-edge tools to 10x output.",
    accent: "from-amber-500/15 to-amber-600/5",
    border: "hover:border-amber-500/40",
    iconBg: "bg-amber-500/15 border-amber-500/25",
    iconColor: "text-amber-400",
    span: "",
    featured: false,
  },
  {
    icon: Users,
    title: "Community Building",
    desc: "Growing engaged, loyal audiences that drive real impact and change lives.",
    accent: "from-cyan-500/15 to-cyan-600/5",
    border: "hover:border-cyan-500/40",
    iconBg: "bg-cyan-500/15 border-cyan-500/25",
    iconColor: "text-cyan-400",
    span: "md:col-span-2",
    featured: false,
  },
];

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof PILLARS)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30, scale: 0.95 },
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, ease: "easeOut" },
        },
      }}
      className={`group relative bg-white/[0.03] backdrop-blur-xl rounded-[28px] border border-white/[0.06] ${pillar.border} transition-all duration-500 overflow-hidden ${pillar.span} ${pillar.featured ? "p-10 md:p-14" : "p-8"}`}
    >
      {/* Gradient hover glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[28px]`}
      />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #fff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div
          className={`w-14 h-14 rounded-2xl ${pillar.iconBg} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
        >
          <pillar.icon className={`w-7 h-7 ${pillar.iconColor}`} />
        </div>

        {/* Content */}
        <h3
          className={`heading !text-white mb-3 group-hover:!text-blue-200 transition-colors ${pillar.featured ? "text-2xl md:text-3xl" : "text-lg"}`}
        >
          {pillar.title}
        </h3>
        <p
          className={`text-white/50 leading-relaxed group-hover:text-white/80 transition-colors ${pillar.featured ? "text-base md:text-lg max-w-[400px]" : "text-sm"}`}
        >
          {pillar.desc}
        </p>

        {/* Featured card extras */}
        {pillar.featured && (
          <div className="mt-auto pt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-white/10 border-2 border-[#0a0f1e] flex items-center justify-center"
                >
                  <span className="text-[9px] text-white/60 font-bold">
                    {["🧠", "⚡", "🎯"][i - 1]}
                  </span>
                </div>
              ))}
            </div>
            <span className="text-white/30 text-xs font-bold uppercase tracking-wider">
              Core Philosophy
            </span>
          </div>
        )}
      </div>

      {/* Corner decoration */}
      <div
        className={`absolute -right-12 -bottom-12 w-40 h-40 ${pillar.iconColor} opacity-[0.03] group-hover:opacity-[0.06] transition-opacity`}
      >
        <pillar.icon className="w-full h-full" strokeWidth={0.5} />
      </div>
    </motion.div>
  );
}

export default function IdeaMatrix() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: 0.08 } },
        hidden: {},
      }}
      className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5"
    >
      {PILLARS.map((pillar, i) => (
        <PillarCard key={pillar.title} pillar={pillar} index={i} />
      ))}
    </motion.div>
  );
}