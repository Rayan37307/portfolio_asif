"use client";

import { motion, useInView, useScroll, useTransform, useMotionValue, useAnimationFrame } from "framer-motion";
import { useRef, useState, useEffect, useCallback, type ReactNode } from "react";
import Image from "next/image";

/* ─── Scroll-triggered reveal ─────────────────────── */
export function Reveal({
  children,
  delay = 0,
  direction = "up",
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const offsets = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay,
        ease: "easeOut" as any,
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─── Stagger children on scroll ──────────────────── */
export function StaggerContainer({
  children,
  stagger = 0.08,
  className,
  style,
}: {
  children: ReactNode;
  stagger?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
        hidden: {},
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─── Individual stagger child ────────────────────── */
export function StaggerItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: "easeOut" as any },
        },
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

/* ─── Counter animation ───────────────────────────── */
export function CountUp({
  target,
  suffix = "",
  className,
  style,
}: {
  target: number;
  suffix?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.span
      ref={ref}
      className={className}
      style={style}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      {inView ? (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <MotionNumber target={target} suffix={suffix} />
        </motion.span>
      ) : (
        "0" + suffix
      )}
    </motion.span>
  );
}

function MotionNumber({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const value = useMotionValue(0);

  useAnimationFrame(() => {
    const current = value.get();
    if (current < target) {
      const step = Math.max(1, Math.ceil((target - current) / 20));
      value.set(Math.min(current + step, target));
      if (ref.current) {
        ref.current.textContent = Math.floor(value.get()) + suffix;
      }
    }
  });

  return <span ref={ref}>0{suffix}</span>;
}

/* ─── Parallax Hero Image ─────────────────────────── */
export function ParallaxHeroImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div ref={ref} className="absolute inset-0 w-full h-full">
      <motion.div style={{ y }} className="w-full h-full relative">
        <Image src={src} alt={alt} fill priority className={className} />
      </motion.div>
    </div>
  );
}

/* ─── Animated SVG Lines ──────────────────────────── */
export function AnimatedSVGLines() {
  return (
    <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none">
      <motion.line
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        x1="50%"
        y1="50%"
        x2="20%"
        y2="25%"
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <motion.line
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
        x1="50%"
        y1="50%"
        x2="80%"
        y2="25%"
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <motion.line
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.4 }}
        x1="50%"
        y1="50%"
        x2="20%"
        y2="75%"
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
      <motion.line
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut", delay: 0.6 }}
        x1="50%"
        y1="50%"
        x2="80%"
        y2="75%"
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="1.5"
        strokeDasharray="4 4"
      />
    </svg>
  );
}

/* ─── Split Text Reveal (Hero) ────────────────────── */
export function SplitTextReveal({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const chars = text.split("");

  return (
    <motion.div ref={ref} className={className} aria-label={text}>
      {chars.map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 50, rotateX: -90 }}
          animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: delay + i * 0.04,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          style={{ display: "inline-block", transformOrigin: "bottom" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.div>
  );
}

/* ─── Text Scramble Effect ────────────────────────── */
export function TextScramble({
  text,
  className,
  delay = 0,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [displayText, setDisplayText] = useState(text);
  const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?/~`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  const scramble = useCallback(() => {
    let iteration = 0;
    const maxIterations = text.length;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split("")
          .map((char, idx) => {
            if (idx < iteration) return text[idx];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );
      iteration += 1 / 2;
      if (iteration >= maxIterations) {
        clearInterval(interval);
        setDisplayText(text);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [text]);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(scramble, delay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [inView, delay, scramble]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}

/* ─── Magnetic Button Wrapper ─────────────────────── */
export function MagneticButton({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
