"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-6 px-8 md:px-12 w-full z-50">
      {/* Logo */}
      <Link href="/" className="heading-display text-2xl tracking-tighter hover:opacity-80 transition-opacity">
        asif®
      </Link>

      {/* Nav Links (Desktop) */}
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/" className="text-sm font-medium hover:text-muted transition-colors">Home</Link>
        <Link href="#about" className="text-sm font-medium hover:text-muted transition-colors">About Me</Link>
        <Link href="#content" className="text-sm font-medium hover:text-muted transition-colors">Work</Link>
        <Link href="#" className="text-sm font-medium hover:text-muted transition-colors">Contact</Link>
      </nav>

      {/* Burger Menu */}
      <button aria-label="Open menu" className="p-2 -mr-2 hover:opacity-70 transition-opacity">
        <Menu size={28} strokeWidth={1.5} />
      </button>
    </header>
  );
}
