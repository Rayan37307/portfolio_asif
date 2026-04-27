"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Home, FileText, User, BookOpen, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "#about", label: "About", icon: User },
  { href: "#content", label: "Content", icon: BookOpen },
  { href: "/blog", label: "Blog", icon: FileText },
];

export default function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop floating pill nav */}
      <nav
        aria-label="Main navigation"
        className={`
          fixed top-6 left-1/2 -translate-x-1/2 z-50
          flex items-center gap-1 px-3 py-2.5 rounded-full
          border transition-all duration-500 ease-out
          ${scrolled
            ? "bg-black/70 border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)] backdrop-blur-2xl scale-100"
            : "bg-white/5 border-white/8 shadow-[0_4px_24px_rgba(0,0,0,0.3)] backdrop-blur-xl scale-[0.98]"
          }
        `}
        style={{
          WebkitBackdropFilter: "blur(24px)",
        }}
      >
        {/* Logo dot */}
        <Link
          href="/"
          id="nav-logo"
          aria-label="Home"
          className="flex items-center justify-center w-9 h-9 rounded-full bg-accent/20 border border-accent/30 hover:bg-accent/30 hover:border-accent/60 transition-all duration-300 group mr-1 hover:scale-110 shadow-[0_0_12px_rgba(59,130,246,0.2)]"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-accent group-hover:scale-110 transition-transform duration-300 shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
        </Link>

        {/* Nav links */}
        {navLinks.map((link) => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              id={`nav-${link.label.toLowerCase()}`}
              className={`
                relative flex items-center gap-2 px-4 py-2 rounded-full
                text-sm font-semibold uppercase tracking-widest
                transition-all duration-300 group
                hover:bg-white/10 hover:text-white
                ${activeSection === link.href
                  ? "bg-accent/15 text-accent border border-accent/25 shadow-[0_0_12px_rgba(59,130,246,0.15)]"
                  : "text-white/60 border border-transparent"
                }
              `}
              onClick={() => setActiveSection(link.href)}
            >
              <Icon className="w-3.5 h-3.5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
              <span className="hidden sm:inline">{link.label}</span>

              {/* Active indicator dot */}
              {activeSection === link.href && (
                <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-accent shadow-[0_0_4px_rgba(59,130,246,0.8)]" />
              )}
            </Link>
          );
        })}

        {/* CTA pill */}
        <a
          href="https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g"
          target="_blank"
          rel="noopener noreferrer"
          id="nav-subscribe-cta"
          className="
            ml-1 px-4 py-2 rounded-full
            bg-accent text-white
            text-xs font-bold uppercase tracking-widest
            hover:bg-blue-400 hover:scale-105
            transition-all duration-300
            shadow-[0_0_20px_rgba(59,130,246,0.35)]
            hover:shadow-[0_0_28px_rgba(59,130,246,0.6)]
            hidden sm:block
          "
        >
          Subscribe
        </a>

        {/* Mobile hamburger */}
        <button
          id="nav-mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="sm:hidden ml-1 flex items-center justify-center w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 text-white"
        >
          {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className={`
          fixed top-20 left-1/2 -translate-x-1/2 z-40
          w-[calc(100vw-2rem)] max-w-xs
          rounded-3xl border border-white/10
          bg-black/80 backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.7)]
          transition-all duration-300 origin-top
          ${mobileOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
        `}
        style={{ WebkitBackdropFilter: "blur(24px)" }}
      >
        <div className="flex flex-col p-4 gap-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-mobile-${link.label.toLowerCase()}`}
                className="flex items-center gap-3 px-4 py-3 rounded-2xl text-sm font-semibold uppercase tracking-widest text-white/70 hover:text-white hover:bg-white/8 transition-all duration-200"
                onClick={() => {
                  setMobileOpen(false);
                  setActiveSection(link.href);
                }}
              >
                <Icon className="w-4 h-4 text-accent" />
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center px-4 py-3 rounded-2xl bg-accent text-white text-sm font-bold uppercase tracking-widest hover:bg-blue-400 transition-all duration-200 shadow-[0_0_20px_rgba(59,130,246,0.35)]"
            onClick={() => setMobileOpen(false)}
          >
            Subscribe on YouTube
          </a>
        </div>
      </div>

      {/* Backdrop blur overlay for mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm sm:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}
    </>
  );
}
