"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while loading
    document.body.style.overflow = "hidden";

    let currentProgress = 0;
    const interval = setInterval(() => {
      // Randomize the step to make it feel natural
      currentProgress += Math.floor(Math.random() * 15) + 5;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 400); // Pause at 100% for a moment
      }
      
      setProgress(currentProgress);
    }, 80);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[99999] bg-[#111] text-white flex flex-col justify-between p-8 md:p-12 overflow-hidden cursor-wait"
        >
          {/* Top text */}
          <div className="flex justify-between items-start font-medium text-xs md:text-sm tracking-widest uppercase text-white/50">
            <span>Loading Ecosystem</span>
            <span>asif®</span>
          </div>

          {/* Big Number */}
          <div className="flex items-end justify-between w-full">
            <div className="flex items-end">
              <span className="heading-display text-[clamp(6rem,20vw,20rem)] leading-none tracking-tighter">
                {progress}
              </span>
              <span className="heading-display text-[clamp(2rem,6vw,6rem)] leading-none text-white/50 mb-2 md:mb-6 ml-2 md:ml-4">
                %
              </span>
            </div>
            <div className="hidden md:block font-medium text-sm tracking-widest uppercase text-white/50 mb-6">
              Establishing<br/>Mental Models
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
