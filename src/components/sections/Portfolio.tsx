"use client";

import { useEffect, useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    label: "Coming Soon",
    title: "Project Alpha",
    desc: "An enterprise SaaS platform for workflow automation and team collaboration.",
    tags: ["SaaS", "Next.js", "AI"],
    gradient: "from-white/[0.04] to-white/[0.01]",
  },
  {
    label: "Coming Soon",
    title: "Project Beta",
    desc: "A mobile-first e-commerce app with real-time inventory and analytics.",
    tags: ["React Native", "Node.js"],
    gradient: "from-white/[0.04] to-white/[0.01]",
  },
  {
    label: "Coming Soon",
    title: "Project Gamma",
    desc: "AI-powered document intelligence and extraction platform for enterprises.",
    tags: ["AI", "Python", "LLM"],
    gradient: "from-white/[0.04] to-white/[0.01]",
  },
];

export default function Portfolio() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".port-item").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      <div
        className="port-item text-center mb-16"
        style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease" }}
      >
        <span
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="text-xs text-white/30 uppercase tracking-widest"
        >
          Our Work
        </span>
        <h2
          style={{ fontFamily: "'Syne', sans-serif" }}
          className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 leading-tight"
        >
          Portfolio
          <br />
          <span className="text-white/30">Coming Soon</span>
        </h2>
        <p className="text-white/40 text-lg max-w-lg mx-auto">
          We're crafting our showcase. In the meantime, here's a glimpse of
          what's in progress.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`port-item group relative p-8 rounded-3xl border border-white/[0.07] bg-gradient-to-br ${project.gradient} overflow-hidden card-hover cursor-default`}
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: `all 0.7s ease ${0.1 + i * 0.1}s`,
            }}
          >
            {/* Placeholder visual */}
            <div className="w-full h-40 rounded-2xl bg-white/[0.03] border border-white/[0.05] mb-6 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 grid-bg opacity-50" />
              <div className="relative z-10 w-12 h-12 rounded-xl bg-white/[0.06] border border-white/[0.08] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white/20" />
              </div>
            </div>

            <div className="flex items-start justify-between mb-3">
              <div>
                <span
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  className="text-[10px] text-white/30 uppercase tracking-widest"
                >
                  {project.label}
                </span>
                <h3
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  className="text-white font-bold text-lg mt-1"
                >
                  {project.title}
                </h3>
              </div>
              <ArrowUpRight
                size={18}
                className="text-white/20 group-hover:text-white/50 transition-colors mt-2"
              />
            </div>

            <p className="text-white/40 text-sm leading-relaxed mb-4">
              {project.desc}
            </p>

            <div className="flex gap-2 flex-wrap">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  className="text-[10px] text-white/30 px-2.5 py-1 rounded-full border border-white/[0.06] bg-white/[0.03]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
