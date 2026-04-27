"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaYoutube, FaFacebookF, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const menuVariants = {
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linkVariants = {
  closed: { opacity: 0, y: 20 },
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#method", label: "Philosophy" },
  { href: "#masterclass", label: "Masterclass" },
  { href: "#content", label: "Videos" },
  { href: "#journal", label: "Journal" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      exit="closed"
      variants={menuVariants}
      className="fixed inset-0 z-[60] bg-black flex flex-col justify-between p-8 md:p-12 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/10 blur-[100px] rounded-full pointer-events-none" />

      {/* Header inside Menu */}
      <div className="flex items-center justify-between relative z-10">
        <Link href="/" onClick={onClose} className="heading-display text-2xl tracking-tighter">
          asif®
        </Link>
        <button
          onClick={onClose}
          className="p-2 -mr-2 hover:opacity-70 transition-opacity"
          aria-label="Close menu"
        >
          <IoCloseOutline size={40} />
        </button>
      </div>

      {/* Main Links */}
      <nav className="flex flex-col gap-6 mt-12 relative z-10">
        {navLinks.map((link, i) => (
          <motion.div
            key={link.label}
            custom={i}
            variants={linkVariants}
          >
            <Link
              href={link.href}
              onClick={onClose}
              className="heading-display text-5xl md:text-7xl hover:text-accent transition-colors block"
            >
              {link.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      {/* Footer / Socials */}
      <div className="mt-auto relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col gap-8"
        >
          <div className="h-px w-full bg-white/10" />
          
          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors"><FaYoutube size={24} /></a>
              <a href="#" className="hover:text-accent transition-colors"><FaFacebookF size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><FaInstagram size={22} /></a>
              <a href="#" className="hover:text-accent transition-colors"><FaXTwitter size={20} /></a>
            </div>
            <p className="text-xs font-medium text-white/40 uppercase tracking-widest">
              © 2026 Asif Raihan
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
