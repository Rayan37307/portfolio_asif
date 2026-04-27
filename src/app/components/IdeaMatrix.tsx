"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Node {
  label: string;
  position: { x: string; y: string };
  delay?: number;
}

const NODES: Node[] = [
  { label: "Mindset Shifts", position: { x: "20%", y: "25%" }, delay: 0 },
  { label: "Daily Execution", position: { x: "80%", y: "25%" }, delay: 0.1 },
  { label: "Content Strategy", position: { x: "20%", y: "75%" }, delay: 0.2 },
  { label: "Brand Building", position: { x: "80%", y: "75%" }, delay: 0.3 },
  { label: "AI & Automation", position: { x: "50%", y: "15%" }, delay: 0.15 },
  { label: "Community", position: { x: "15%", y: "50%" }, delay: 0.25 },
  { label: "Revenue Growth", position: { x: "85%", y: "50%" }, delay: 0.35 },
];

const CONNECTIONS = [
  { from: { x: 50, y: 50 }, to: { x: 20, y: 25 } },
  { from: { x: 50, y: 50 }, to: { x: 80, y: 25 } },
  { from: { x: 50, y: 50 }, to: { x: 20, y: 75 } },
  { from: { x: 50, y: 50 }, to: { x: 80, y: 75 } },
  { from: { x: 50, y: 50 }, to: { x: 50, y: 15 } },
  { from: { x: 50, y: 50 }, to: { x: 15, y: 50 } },
  { from: { x: 50, y: 50 }, to: { x: 85, y: 50 } },
];

function Particle({ style }: { style: React.CSSProperties }) {
  return <div className="matrix-particle" style={style} />;
}

function FloatingParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; style: React.CSSProperties }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      style: {
        left: `${Math.random() * 100}%`,
        bottom: `-10px`,
        animationDuration: `${8 + Math.random() * 12}s`,
        animationDelay: `${Math.random() * 10}s`,
        width: `${2 + Math.random() * 4}px`,
        height: `${2 + Math.random() * 4}px`,
        opacity: 0.2 + Math.random() * 0.4,
      },
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <Particle key={p.id} style={p.style} />
      ))}
    </div>
  );
}

interface MatrixNodeProps {
  label: string;
  position: { x: string; y: string };
  delay?: number;
  isCenter?: boolean;
  mouseX: ReturnType<typeof useMotionValue<number>>;
  mouseY: ReturnType<typeof useMotionValue<number>>;
}

function MatrixNode({ label, position, delay = 0, isCenter = false, mouseX, mouseY }: MatrixNodeProps) {
  const nodeRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const x = useTransform(mouseX, [0, 100], [-15, 15]);
  const y = useTransform(mouseY, [0, 100], [-15, 15]);
  const springX = useSpring(x, { stiffness: 100, damping: 20 });
  const springY = useSpring(y, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      ref={nodeRef}
      className={`matrix-node ${isCenter ? "matrix-node-center" : ""}`}
      style={{
        left: position.x,
        top: position.y,
        animationDelay: `${delay}s`,
      }}
      initial={{ opacity: 0, scale: 0 }}
      animate={isVisible ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: delay + 0.3, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: isCenter ? 1.2 : 1.25 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.div
        className="node-content"
        style={{ x: springX, y: springY }}
      >
        {label}
      </motion.div>
      {isHovered && (
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{ scale: 1.5, opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            background: `radial-gradient(circle, rgba(37,99,235,0.3) 0%, transparent 70%)`,
          }}
        />
      )}
    </motion.div>
  );
}

function ConnectionLine({ from, to, delay = 0 }: { from: { x: number; y: number }; to: { x: number; y: number }; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const x1 = `${from.x}%`;
  const y1 = `${from.y}%`;
  const x2 = `${to.x}%`;
  const y2 = `${to.y}%`;

  return (
    <motion.line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className="matrix-connection"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={isVisible ? { pathLength: 1, opacity: 1 } : {}}
      transition={{ duration: 1.2, delay: delay + 0.5, ease: "easeInOut" }}
    />
  );
}

function PulsingRing() {
  return (
    <>
      <motion.div
        className="absolute w-[160px] h-[160px] rounded-full border border-blue-400/30"
        style={{ top: "50%", left: "50%" }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0, 0.4],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[220px] h-[220px] rounded-full border border-blue-400/20"
        style={{ top: "50%", left: "50%" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0, 0.3],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute w-[280px] h-[280px] rounded-full border border-blue-400/10"
        style={{ top: "50%", left: "50%" }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0, 0.2],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
    </>
  );
}

export default function IdeaMatrix() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-[2/1] min-h-[500px] bg-gradient-to-br from-blue-50 via-white to-blue-100 rounded-[32px] overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <FloatingParticles />

      <svg className="absolute inset-0 w-full h-full z-0" preserveAspectRatio="none">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {CONNECTIONS.map((conn, i) => (
          <ConnectionLine key={i} from={conn.from} to={conn.to} delay={i * 0.1} />
        ))}
      </svg>

      <PulsingRing />

      <div className="relative z-10 w-full h-full max-w-[800px] mx-auto">
        {NODES.map((node) => (
          <MatrixNode
            key={node.label}
            {...node}
            mouseX={mouseX}
            mouseY={mouseY}
          />
        ))}
      </div>

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 50%, transparent 30%, rgba(37,99,235,0.02) 100%)",
        }}
      />
    </div>
  );
}