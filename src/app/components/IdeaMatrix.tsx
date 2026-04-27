"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface BubbleData {
  label: string;
  size: number;
  delay: number;
  duration: number;
  x: number;
  y: number;
  color: string;
}

const BUBBLES: BubbleData[] = [
  { label: "Mindset Shifts", size: 140, delay: 0, duration: 8, x: 15, y: 20, color: "blue" },
  { label: "Daily Execution", size: 120, delay: 0.5, duration: 10, x: 75, y: 15, color: "blue" },
  { label: "Content Strategy", size: 130, delay: 1, duration: 9, x: 10, y: 65, color: "indigo" },
  { label: "Brand Building", size: 110, delay: 0.3, duration: 7, x: 80, y: 70, color: "indigo" },
  { label: "AI & Automation", size: 100, delay: 0.8, duration: 11, x: 50, y: 10, color: "blue" },
  { label: "Community", size: 90, delay: 0.2, duration: 8, x: 5, y: 45, color: "indigo" },
  { label: "Revenue Growth", size: 95, delay: 0.6, duration: 9, x: 85, y: 45, color: "blue" },
];

function Bubble({ data, scale }: { data: BubbleData; scale: number }) {
  const colorClasses: Record<string, string> = {
    blue: "bg-blue-500/10 border-blue-500/30 text-blue-300 hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    indigo: "bg-indigo-500/10 border-indigo-500/30 text-indigo-300 hover:bg-indigo-500/20 hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]",
  };

  return (
    <motion.div
      className={`absolute flex items-center justify-center rounded-full border backdrop-blur-xl shadow-lg cursor-pointer transition-all duration-500 ${colorClasses[data.color]}`}
      style={{
        width: data.size * scale,
        height: data.size * scale,
        left: `${data.x}%`,
        top: `${data.y}%`,
        fontSize: 12 * scale,
      }}
      animate={{
        x: [0, 15, -10, 5, 0],
        y: [0, -12, 8, -5, 0],
        rotate: [0, 3, -2, 1, 0],
      }}
      transition={{
        duration: data.duration,
        delay: data.delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.1, zIndex: 50 }}
    >
      <span className="text-center px-4 font-bold tracking-tight uppercase leading-tight">{data.label}</span>
    </motion.div>
  );
}

function FloatingParticles() {
  const [particles, setParticles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      bottom: `-20px`,
      animationDuration: `${10 + Math.random() * 15}s`,
      animationDelay: `${Math.random() * 10}s`,
      width: `${1 + Math.random() * 3}px`,
      height: `${1 + Math.random() * 3}px`,
      opacity: 0.1 + Math.random() * 0.4,
      background: Math.random() > 0.5 ? '#3b82f6' : '#6366f1',
      boxShadow: '0 0 10px currentColor',
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((style, i) => (
        <div key={i} className="matrix-particle" style={style} />
      ))}
    </div>
  );
}

export default function IdeaMatrix() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      if (width < 640) setScale(0.5);
      else if (width < 768) setScale(0.65);
      else if (width < 1024) setScale(0.8);
      else setScale(1);
    };

    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="relative w-full aspect-[2/1] min-h-[550px] bg-[#050910] rounded-[48px] overflow-hidden border border-white/5 shadow-2xl">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-blue-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <FloatingParticles />

      <div className="relative z-10 w-full h-full">
        {BUBBLES.map((bubble) => (
          <Bubble key={bubble.label} data={bubble} scale={scale} />
        ))}
      </div>
    </div>
  );
}