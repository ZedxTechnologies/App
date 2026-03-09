"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center group-hover:scale-105 transition-transform">
            <span
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-black text-sm font-800 font-extrabold tracking-tight"
            >
              Z
            </span>
          </div>
          <span
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-white font-semibold text-lg tracking-tight"
          >
            Zedx
            <span className="text-white/40 ml-0.5">Technologies</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm text-white/50 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/[0.05]"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            className="px-5 py-2.5 bg-white text-black text-sm font-semibold rounded-lg hover:bg-white/90 transition-all duration-200 btn-primary"
          >
            Start a Project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/70 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0d0d0d] border-t border-white/[0.06] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-white text-base py-1 transition-colors"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="mt-2 px-5 py-3 bg-white text-black text-sm font-semibold rounded-lg text-center"
            onClick={() => setOpen(false)}
          >
            Start a Project
          </Link>
        </div>
      )}
    </nav>
  );
}
