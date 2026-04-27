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
    blue: "bg-blue-50 border-blue-200/50 text-blue-700",
    indigo: "bg-indigo-50 border-indigo-200/50 text-indigo-700",
  };

  return (
    <motion.div
      className={`absolute flex items-center justify-center rounded-full border backdrop-blur-sm shadow-lg cursor-pointer hover:shadow-xl ${colorClasses[data.color]}`}
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
      whileHover={{ scale: 1.1 }}
    >
      <span className="text-center px-3 font-semibold leading-tight">{data.label}</span>
    </motion.div>
  );
}

function FloatingParticles() {
  const [particles, setParticles] = useState<React.CSSProperties[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 15 }, (_, i) => ({
      left: `${Math.random() * 100}%`,
      bottom: `-20px`,
      animationDuration: `${12 + Math.random() * 10}s`,
      animationDelay: `${Math.random() * 8}s`,
      width: `${2 + Math.random() * 4}px`,
      height: `${2 + Math.random() * 4}px`,
      opacity: 0.2 + Math.random() * 0.3,
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
    <div className="relative w-full aspect-[2/1] min-h-[500px] bg-gradient-to-br from-blue-50 via-white to-indigo-100 rounded-[32px] overflow-hidden">
      <FloatingParticles />

      {BUBBLES.map((bubble) => (
        <Bubble key={bubble.label} data={bubble} scale={scale} />
      ))}
    </div>
  );
}