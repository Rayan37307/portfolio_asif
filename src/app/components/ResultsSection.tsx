"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import { FaYoutube, FaFacebook } from "react-icons/fa6";
import { Reveal } from "./animations";

const PLATFORMS = {
  YouTube: { icon: FaYoutube, color: "text-red-500" },
  Facebook: { icon: FaFacebook, color: "text-blue-500" },
  Follower: { icon: CheckCircle2, color: "text-blue-400" },
  Viewer: { icon: CheckCircle2, color: "text-blue-400" },
  Student: { icon: CheckCircle2, color: "text-green-400" },
  Supporter: { icon: CheckCircle2, color: "text-blue-400" },
  "Video Editor": { icon: CheckCircle2, color: "text-purple-400" },
};

export default function ResultsSection({ testimonials }: { testimonials: any[] }) {
  // Split testimonials for two rows
  const row1 = testimonials.slice(0, Math.ceil(testimonials.length / 2));
  const row2 = testimonials.slice(Math.ceil(testimonials.length / 2));

  return (
    <section className="py-24 w-full overflow-hidden relative">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="px-4 md:px-8 max-w-[1400px] mx-auto w-full mb-16 relative z-10">
        <Reveal>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
            <div className="max-w-[600px]">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-8 h-[1px] bg-blue-500" />
                <span className="text-blue-400 text-xs font-black uppercase tracking-[0.4em]">Community Impact</span>
              </div>
              <h2 className="heading-display text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-none tracking-tighter">
                Real Results.
              </h2>
            </div>
            <div className="flex flex-col items-start md:items-end text-left md:text-right">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">Active Community</span>
              </div>
              <p className="heading text-2xl text-white">430K+ Combined Reach</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Row 1: Left to Right */}
      <div className="flex gap-6 mb-8 group">
        <motion.div 
          animate={{ x: [0, -2000] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 pr-6"
        >
          {[...row1, ...row1, ...row1].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>

      {/* Row 2: Right to Left */}
      <div className="flex gap-6 group">
        <motion.div 
          animate={{ x: [-2000, 0] }}
          transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          className="flex gap-6 pr-6"
        >
          {[...row2, ...row2, ...row2].map((t, i) => (
            <TestimonialCard key={i} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function TestimonialCard({ t }: { t: any }) {
  const Platform = (PLATFORMS as any)[t.role] || { icon: CheckCircle2, color: "text-blue-400" };

  return (
    <div className="bg-white/[0.02] backdrop-blur-xl border border-white/5 p-10 rounded-[40px] w-[350px] md:w-[450px] shrink-0 h-[280px] flex flex-col justify-between hover:bg-white/[0.05] hover:border-blue-500/30 transition-all duration-500 group/card relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute -right-8 -top-8 w-24 h-24 bg-blue-500/5 rounded-full blur-2xl group-hover/card:bg-blue-500/10 transition-colors" />
      
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(star => (
              <Star key={star} size={14} className="fill-blue-500 text-blue-500 group-hover/card:scale-110 transition-transform duration-300" style={{ transitionDelay: `${star * 50}ms` }} />
            ))}
          </div>
          <Platform.icon size={18} className={`${Platform.color} opacity-40 group-hover/card:opacity-100 transition-all duration-500`} />
        </div>
        <p className="text-white/60 leading-relaxed text-base group-hover/card:text-white transition-colors italic">"{t.text}"</p>
      </div>
      
      <div className="flex items-center gap-4 pt-6 border-t border-white/5">
        <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-blue-400 font-bold text-xs">
          {t.name.charAt(1).toUpperCase()}
        </div>
        <div>
          <div className="heading text-sm !text-white group-hover/card:!text-blue-300 transition-colors">{t.name}</div>
          <div className="flex items-center gap-2 mt-1">
            <CheckCircle2 size={10} className="text-blue-400" />
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 font-black">{t.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
