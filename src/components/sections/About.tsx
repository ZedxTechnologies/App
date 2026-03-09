"use client";

import { useEffect, useRef } from "react";

export default function About() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".animate-item").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * 150);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left */}
        <div>
          <div
            className="animate-item"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "all 0.7s ease",
            }}
          >
            <span
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              className="text-xs text-white/30 uppercase tracking-widest"
            >
              About Us
            </span>
          </div>
          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="animate-item text-4xl md:text-5xl font-bold text-white mt-4 mb-6 leading-tight"
            style2={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.15s" }}
          >
            Built by engineers.
            <br />
            <span className="text-white/30">Driven by purpose.</span>
          </h2>
          <p
            className="animate-item text-white/50 text-lg leading-relaxed"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.3s" }}
          >
            Zedx Technologies is a premium software development agency built for
            startups and businesses that refuse to settle. We combine deep
            technical expertise with product thinking to deliver digital
            solutions that are fast, scalable, and beautiful.
          </p>
          <p
            className="animate-item text-white/40 text-base leading-relaxed mt-4"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.45s" }}
          >
            From idea to deployment, we partner with you at every step —
            bringing Silicon Valley-grade engineering to ambitious teams
            worldwide.
          </p>
        </div>

        {/* Right - Cards */}
        <div className="grid grid-cols-2 gap-4">
          {[
            {
              title: "Our Mission",
              desc: "To empower businesses with software that solves real problems and creates lasting impact.",
              icon: "⚡",
            },
            {
              title: "Our Vision",
              desc: "A world where every great idea has the engineering muscle to become a great product.",
              icon: "🎯",
            },
            {
              title: "Our Values",
              desc: "Quality, transparency, and relentless iteration. We treat your product like it's our own.",
              icon: "✦",
            },
            {
              title: "Our Promise",
              desc: "On-time delivery, clean code, and a partnership that doesn't end at launch.",
              icon: "🤝",
            },
          ].map((item, i) => (
            <div
              key={item.title}
              className="animate-item p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] card-hover"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `all 0.7s ease ${0.1 + i * 0.1}s`,
              }}
            >
              <div className="text-2xl mb-3">{item.icon}</div>
              <h3
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-white font-semibold mb-2 text-sm"
              >
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
