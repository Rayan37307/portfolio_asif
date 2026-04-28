"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function BUVisual() {
  const ref = useRef<HTMLDivElement>(null);
  
  // Mouse movement tracking for 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [-300, 300], [10, -10]);
  const rotateY = useTransform(springX, [-300, 300], [-10, 10]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set(e.clientX - centerX);
    mouseY.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div 
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full aspect-square flex items-center justify-center perspective-1000"
    >
      {/* Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.1),transparent_70%)] animate-pulse" />
      
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full max-w-[500px] aspect-square flex items-center justify-center transition-all duration-300"
      >
        {/* Floating Ring 1 */}
        <motion.div 
          animate={{ 
            rotate: 360,
            scale: [1, 1.05, 1],
          }}
          transition={{ 
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
            scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute inset-0 border border-blue-500/10 rounded-full"
        />
        
        {/* Floating Ring 2 */}
        <motion.div 
          animate={{ 
            rotate: -360,
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute inset-[10%] border border-blue-400/5 rounded-full"
        />

        {/* Main Emblem */}
        <div className="relative w-[70%] h-[70%] z-10 drop-shadow-[0_0_50px_rgba(37,99,235,0.4)] rounded-[32px] overflow-hidden border border-white/20">
          <Image
            src="/bu_logo.jpg"
            alt="Backbenchers University Logo"
            fill
            className="object-cover"
          />
        </div>

        {/* Particles / Highlights */}
        <div className="absolute top-[20%] right-[20%] w-1 h-1 bg-white rounded-full animate-ping" />
        <div className="absolute bottom-[30%] left-[15%] w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-[40%] left-[10%] w-1 h-1 bg-blue-300 rounded-full animate-bounce" />
      </motion.div>

      {/* Decorative Text / Coordinates */}
      <div className="absolute bottom-4 right-4 text-[8px] font-mono text-blue-500/40 uppercase tracking-widest hidden md:block">
        Emblem Core :: v2.0.26 <br />
        Coord :: 51.5074 N, 0.1278 W
      </div>
    </div>
  );
}
