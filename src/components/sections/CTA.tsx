"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".cta-item").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * 150);
          });
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] p-12 md:p-20 text-center overflow-hidden">
          {/* Background effect */}
          <div className="absolute inset-0 grid-bg opacity-30" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-white/[0.03] blur-3xl rounded-full" />

          <div className="relative z-10">
            <div
              className="cta-item"
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease" }}
            >
              <span
                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                className="text-xs text-white/30 uppercase tracking-widest"
              >
                Let's create together
              </span>
            </div>

            <h2
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="cta-item text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mt-6 mb-6 leading-tight"
              // @ts-ignore
              style2={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.15s" }}
            >
              Let's build your
              <br />
              <span className="text-white/30">next digital product.</span>
            </h2>

            <p
              className="cta-item text-white/40 text-lg max-w-xl mx-auto mb-10"
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.3s" } as React.CSSProperties}
            >
              From concept to code to customers. We're ready when you are.
              Let's talk about your vision.
            </p>

            <div
              className="cta-item flex flex-col sm:flex-row items-center justify-center gap-4"
              style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.45s" } as React.CSSProperties}
            >
              <Link
                href="#contact"
                className="group flex items-center gap-2 px-10 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all duration-300 text-base btn-primary shadow-xl shadow-black/30"
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="tel:+919691773489"
                className="flex items-center gap-2 px-10 py-4 border border-white/10 text-white/60 hover:text-white hover:border-white/20 rounded-xl transition-all duration-300 text-base"
              >
                Call Us Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
