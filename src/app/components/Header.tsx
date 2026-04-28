"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`sticky top-0 z-50 flex items-center justify-between py-5 px-8 md:px-12 w-full transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="heading-display text-2xl tracking-tighter hover:opacity-80 transition-opacity">
          asif®
        </Link>

        {/* Nav Links (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            ["#method", "Philosophy"],
            ["#masterclass", "Masterclass"],
            ["#content", "Videos"],
            ["#journal", "Journal"],
          ].map(([href, label]) => (
            <Link
              key={href}
              href={href}
              className={`text-sm font-medium transition-colors ${
                scrolled ? "text-white/70 hover:text-white" : "hover:text-muted"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Burger Menu */}
        <button
          aria-label="Open menu"
          className="p-2 -mr-2 hover:opacity-70 transition-opacity"
          onClick={() => setIsOpen(true)}
        >
          <HiMenuAlt3 size={32} />
        </button>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}
