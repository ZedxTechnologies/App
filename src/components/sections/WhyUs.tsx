"use client";

import { useEffect, useRef } from "react";
import { Rocket, Scale, Cpu, Heart, Shield } from "lucide-react";

const reasons = [
  {
    icon: Rocket,
    title: "Fast Delivery",
    desc: "We move with urgency. Rapid prototyping, agile sprints, and clear timelines — from MVP to launch in record time.",
    metric: "2x faster",
  },
  {
    icon: Scale,
    title: "Scalable Solutions",
    desc: "Every system we build is architected to grow. Handle 1K or 1M users without rewriting your codebase.",
    metric: "∞ scale",
  },
  {
    icon: Cpu,
    title: "Modern Technologies",
    desc: "We use the latest proven tech stack — no legacy, no bloat. Your product stays ahead of the curve.",
    metric: "2025 stack",
  },
  {
    icon: Heart,
    title: "Startup Friendly",
    desc: "We understand bootstrapped budgets and fast pivots. Flexible engagement models that adapt to your stage.",
    metric: "Flexible",
  },
  {
    icon: Shield,
    title: "Reliable Support",
    desc: "Post-launch care, monitoring, and ongoing maintenance. We don't disappear after delivery.",
    metric: "Always on",
  },
];

const techStack = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "React Native",
  "Flutter", "PostgreSQL", "MongoDB", "Redis", "AWS", "Vercel",
  "Docker", "Kubernetes", "OpenAI", "Tailwind CSS", "GraphQL", "Figma",
];

export default function WhyUs() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".why-item").forEach((el, i) => {
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
    <section id="why-us" ref={ref} className="py-32 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div
        className="why-item text-center mb-20"
        style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease" }}
      >
        <span
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
          className="text-xs text-white/30 uppercase tracking-widest"
        >
          Why Zedx
        </span>
        <h2
          style={{ fontFamily: "'Syne', sans-serif" }}
          className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 leading-tight"
        >
          The Zedx
          <br />
          <span className="text-white/30">Difference</span>
        </h2>
      </div>

      {/* Reasons */}
      <div className="grid md:grid-cols-5 gap-4 mb-24">
        {reasons.map((reason, i) => {
          const Icon = reason.icon;
          return (
            <div
              key={reason.title}
              className="why-item group p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02] card-hover text-center"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `all 0.7s ease ${0.1 + i * 0.1}s`,
              }}
            >
              <div className="w-12 h-12 rounded-xl border border-white/[0.08] bg-white/[0.04] flex items-center justify-center mx-auto mb-4 group-hover:border-white/20 transition-colors">
                <Icon size={20} className="text-white/60" />
              </div>
              <div
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-xs font-bold text-white/20 mb-2 uppercase tracking-widest"
              >
                {reason.metric}
              </div>
              <h3
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-white font-semibold mb-2 text-sm"
              >
                {reason.title}
              </h3>
              <p className="text-white/40 text-xs leading-relaxed">{reason.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Tech Stack Marquee */}
      <div
        className="why-item"
        style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.6s" }}
      >
        <div className="text-center mb-8">
          <span
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-xs text-white/20 uppercase tracking-widest"
          >
            Technologies we work with
          </span>
        </div>
        <div className="relative overflow-hidden">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#050505] to-transparent z-10" />

          <div className="flex overflow-hidden">
            <div className="marquee-track">
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  className="whitespace-nowrap text-sm text-white/20 px-4 py-2 rounded-full border border-white/[0.06] bg-white/[0.02] hover:text-white/50 hover:border-white/[0.12] transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
