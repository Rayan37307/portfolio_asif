"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Home, FileText, User, BookOpen, Menu, X } from "lucide-react";

const LINKS = [
  { href: "/",        label: "Home",    icon: Home },
  { href: "#about",   label: "About",   icon: User },
  { href: "#content", label: "Content", icon: BookOpen },
  { href: "/blog",    label: "Blog",    icon: FileText },
];

export default function FloatingNav() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobile,     setMobile]     = useState(false);
  const [active,     setActive]     = useState("/");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobile]);

  return (
    <>
      <nav
        aria-label="Main navigation"
        style={{
          position: "fixed",
          top: "1.25rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 50,
          display: "flex",
          alignItems: "center",
          gap: "0.25rem",
          padding: "0.5rem 0.6rem",
          borderRadius: "8px",
          background: scrolled ? "rgba(10,10,10,0.95)" : "rgba(15,15,15,0.6)",
          border: "1px solid var(--border)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.5)" : "none",
          transition: "background 0.3s, box-shadow 0.3s",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          onClick={() => setActive("/")}
          className="heading"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "6px",
            background: "var(--accent)",
            color: "#fff",
            textDecoration: "none",
            flexShrink: 0,
            marginRight: "0.25rem",
            overflow: "hidden",
            position: "relative"
          }}
        >
          <Image src="/bu_logo.jpg" alt="Logo" fill style={{ objectFit: "cover" }} />
        </Link>

        <span style={{ width:"1px", height:"1rem", background:"var(--border)", margin:"0 0.25rem", flexShrink:0 }} />

        {/* Desktop links */}
        {LINKS.map(({ href, label, icon: Icon }) => {
          const isActive = active === href;
          return (
            <Link
              key={href}
              href={href}
              id={`nav-${label.toLowerCase()}`}
              onClick={() => setActive(href)}
              className="heading"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.5rem 1rem",
                borderRadius: "6px",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textDecoration: "none",
                color: isActive ? "#fff" : "rgba(255,255,255,0.4)",
                background: isActive ? "rgba(82,113,255,0.12)" : "transparent",
                border: `1px solid ${isActive ? "rgba(82,113,255,0.25)" : "transparent"}`,
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
            >
              <Icon style={{ width:"14px", height:"14px", color: isActive ? "var(--accent)" : "inherit", flexShrink:0 }} />
              <span style={{ display: "none" }} className="sm-inline">{label}</span>
            </Link>
          );
        })}

        <span style={{ width:"1px", height:"1rem", background:"var(--border)", margin:"0 0.25rem", flexShrink:0 }} />

        {/* Subscribe */}
        <a
          href="https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g"
          target="_blank"
          rel="noopener noreferrer"
          id="nav-subscribe"
          className="heading"
          style={{
            display: "none",
            alignItems: "center",
            padding: "0.5rem 1.2rem",
            borderRadius: "6px",
            background: "var(--accent)",
            fontSize: "0.8rem",
            letterSpacing: "0.12em",
            color: "#fff",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
        >
          Subscribe
        </a>

        {/* Burger */}
        <button
          id="nav-burger"
          aria-label={mobile ? "Close menu" : "Open menu"}
          onClick={() => setMobile(v => !v)}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "6px",
            background: mobile ? "rgba(82,113,255,0.12)" : "rgba(255,255,255,0.04)",
            border: `1px solid ${mobile ? "rgba(82,113,255,0.25)" : "var(--border)"}`,
            color: "rgba(255,255,255,0.7)",
            cursor: "pointer",
            flexShrink: 0,
          }}
        >
          {mobile ? <X style={{ width:"1.2rem", height:"1.2rem" }} /> : <Menu style={{ width:"1.2rem", height:"1.2rem" }} />}
        </button>
      </nav>

      {/* ── Inline responsive overrides ── */}
      <style>{`
        @media (min-width: 640px) {
          #nav-subscribe { display: flex !important; }
          #nav-burger    { display: none !important; }
          .sm-inline     { display: inline !important; }
        }
        @keyframes cta-sweep {
          0%   { transform: translateX(-100%); }
          60%  { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes shimmer-spin {
          from { --angle: 0deg; }
          to   { --angle: 360deg; }
        }
        @keyframes slide-in-bar {
          from { transform: translateX(-50%) scaleX(0); opacity: 0; }
          to   { transform: translateX(-50%) scaleX(1); opacity: 1; }
        }
      `}</style>

      {/* Mobile backdrop */}
      <div
        aria-hidden
        onClick={() => setMobile(false)}
        style={{
          position: "fixed", inset: 0, zIndex: 40,
          background: "rgba(0,0,0,0.65)", backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)",
          opacity: mobile ? 1 : 0, pointerEvents: mobile ? "auto" : "none",
          transition: "opacity 0.25s",
        }}
      />

      {/* Mobile drawer */}
      <div
        style={{
          position: "fixed", top: "4.25rem", left: "50%", zIndex: 50,
          width: "calc(100vw - 2rem)", maxWidth: "340px",
          transform: `translateX(-50%) translateY(${mobile ? "0" : "-8px"})`,
          opacity: mobile ? 1 : 0, pointerEvents: mobile ? "auto" : "none",
          transition: "opacity 0.25s, transform 0.3s cubic-bezier(.16,1,.3,1)",
        }}
      >
        <div style={{
          borderRadius: "8px", overflow: "hidden",
          background: "rgba(12,12,12,0.98)", border: "1px solid var(--border)",
          backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)",
          boxShadow: "0 20px 60px rgba(0,0,0,0.7)",
        }}>
          <div style={{ padding: "0.6rem 0.75rem 0.4rem", borderBottom: "1px solid var(--border)" }}>
            <p style={{ fontSize:"0.55rem", fontWeight:700, letterSpacing:"0.2em", color:"rgba(255,255,255,0.2)", textTransform:"uppercase" }}>Navigation</p>
          </div>
          <div style={{ display:"flex", flexDirection:"column", padding:"0.4rem" }}>
            {LINKS.map(({ href, label, icon: Icon }) => {
              const isActive = active === href;
              return (
                <Link
                  key={href}
                  href={href}
                  id={`nav-m-${label.toLowerCase()}`}
                  onClick={() => { setMobile(false); setActive(href); }}
                  className="heading"
                  style={{
                    display: "flex", alignItems: "center", gap: "0.65rem",
                    padding: "0.7rem 0.9rem", borderRadius: "5px", textDecoration: "none",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.45)",
                    background: isActive ? "rgba(82,113,255,0.1)" : "transparent",
                    fontSize: "0.85rem", letterSpacing: "0.1em", transition: "all 0.15s",
                  }}
                >
                  <Icon style={{ width:"0.85rem", height:"0.85rem", color: isActive ? "var(--accent)" : "inherit", flexShrink:0 }} />
                  {label}
                  {isActive && <span style={{ marginLeft:"auto", width:"5px", height:"5px", borderRadius:"50%", background:"var(--accent)" }} />}
                </Link>
              );
            })}
          </div>
          <div style={{ padding:"0.4rem 0.75rem 0.75rem" }}>
            <a
              href="https://youtube.com/channel/UCE6hrW3g0K_sj3XLvBxIC0g"
              target="_blank" rel="noopener noreferrer"
              onClick={() => setMobile(false)}
              className="heading"
              style={{
                display:"flex", alignItems:"center", justifyContent:"center",
                width:"100%", padding:"0.75rem", borderRadius:"5px",
                background:"var(--accent)", color:"#fff", textDecoration:"none",
                fontSize:"0.85rem", letterSpacing:"0.12em",
              }}
            >
              Subscribe on YouTube
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
