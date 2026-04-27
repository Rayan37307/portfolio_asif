"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

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
        ease: [0.16, 1, 0.3, 1],
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
          transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
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
  const value = motion.useMotionValue(0);

  motion.useAnimationFrame(() => {
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
