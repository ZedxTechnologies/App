"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    setTimeout(() => {
      el.classList.add("opacity-100");
      el.classList.remove("opacity-0", "translate-y-6");
    }, 100);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden grid-bg">
      {/* Background radial glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-white/[0.03] blur-3xl" />
      </div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-white/[0.02] blur-3xl pointer-events-none" />

      {/* Badge */}
      <div
        ref={heroRef}
        className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto opacity-0 translate-y-6 transition-all duration-1000 ease-out"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] mb-8 backdrop-blur-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          <span
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-xs text-white/50 tracking-widest uppercase"
          >
            Available for new projects
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{ fontFamily: "'Syne', sans-serif" }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-[0.95] mb-8 text-white"
        >
          We Build
          <br />
          <span className="gradient-text text-glow">Software</span>
          <br />
          That Scales.
        </h1>

        <p className="text-lg md:text-xl text-white/40 max-w-2xl leading-relaxed mb-12 font-light">
          Zedx Technologies crafts premium digital products — web apps, mobile
          solutions, SaaS platforms, and AI tools — engineered for performance
          and built to last.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="#contact"
            className="group flex items-center gap-2 px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 text-base btn-primary shadow-lg shadow-black/30"
          >
            Start Your Project
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
          <Link
            href="#services"
            className="flex items-center gap-2 px-8 py-4 border border-white/10 text-white/70 hover:text-white hover:border-white/20 rounded-xl transition-all duration-300 text-base backdrop-blur-sm"
          >
            View Services
          </Link>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-8 md:gap-16 border-t border-white/[0.06] pt-10 w-full max-w-xl">
          {[
            { value: "50+", label: "Projects Delivered" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "5★", label: "Rated Agency" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-2xl md:text-3xl font-bold text-white"
              >
                {stat.value}
              </span>
              <span className="text-xs text-white/30 text-center">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40">
        <ChevronDown size={20} className="text-white" />
      </div>
    </section>
  );
}
