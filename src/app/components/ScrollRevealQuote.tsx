"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const QUOTE_WORDS = [
  "I", "don't", "just", "create", "content.", "I", "engineer", "mindsets,",
  "dissect", "raw", "truths,", "and", "build", "systems", "that", "turn",
  "passive", "observers", "into", "relentless", "executors."
];

const HIGHLIGHT_WORDS = new Set(["engineer", "mindsets,", "relentless", "executors."]);

export default function ScrollRevealQuote() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  return (
    <div ref={containerRef} className="py-16 md:py-28">
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start max-w-[1400px] mx-auto w-full px-4 md:px-8">
        {/* Left Info */}
        <div className="w-full md:w-1/4 pt-2">
          <div className="flex flex-col">
            <h3 className="heading text-lg">Muhammad Asif</h3>
            <p className="text-muted text-sm font-medium">Professional creator</p>
          </div>
        </div>

        {/* Right Quote */}
        <div className="w-full md:w-3/4">
          <p className="heading-display text-[clamp(2rem,5vw,4.5rem)] leading-[1.1] tracking-tight relative">
            <span className="text-blue-500/40 text-[1.2em] leading-none absolute -ml-[0.6em] mt-[-0.1em]">
              &ldquo;
            </span>
            {QUOTE_WORDS.map((word, i) => {
              const start = i / QUOTE_WORDS.length;
              const end = start + 1 / QUOTE_WORDS.length;
              return (
                <Word
                  key={i}
                  word={word}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isHighlight={HIGHLIGHT_WORDS.has(word)}
                />
              );
            })}
            <span className="text-blue-500/40">&rdquo;</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Word({
  word,
  progress,
  range,
  isHighlight,
}: {
  word: string;
  progress: any;
  range: [number, number];
  isHighlight: boolean;
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const color = useTransform(
    progress,
    range,
    isHighlight
      ? ["rgba(37,99,235,0.15)", "rgba(37,99,235,1)"]
      : ["rgba(17,17,17,0.15)", "rgba(17,17,17,1)"]
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className={`inline-block mr-[0.3em] ${isHighlight ? "font-bold" : ""}`}
    >
      {word}
    </motion.span>
  );
}
