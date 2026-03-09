"use client";

import { useEffect, useRef } from "react";
import {
  Globe,
  Smartphone,
  Cloud,
  Code2,
  Brain,
  Palette,
  Zap,
  LineChart,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    desc: "High-performance web applications built with Next.js, React, and modern frameworks. From marketing sites to complex web platforms.",
    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Native and cross-platform mobile apps for iOS and Android. Beautiful, fast, and intuitive user experiences.",
    tags: ["React Native", "Flutter", "iOS/Android"],
  },
  {
    icon: Cloud,
    title: "SaaS Development",
    desc: "End-to-end SaaS product development — from architecture to multi-tenant systems, billing, and analytics dashboards.",
    tags: ["SaaS", "Multi-tenant", "Subscriptions"],
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Tailor-made software engineered to your exact business needs. Robust, maintainable, and built for scale.",
    tags: ["Node.js", "Python", "Microservices"],
  },
  {
    icon: Brain,
    title: "AI Solutions",
    desc: "AI-powered features, LLM integrations, computer vision, and intelligent automation that gives your product a competitive edge.",
    tags: ["OpenAI", "LangChain", "ML"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "Pixel-perfect interface design crafted for conversion and delight. We design experiences that users love to use.",
    tags: ["Figma", "Prototyping", "Design Systems"],
  },
  {
    icon: Zap,
    title: "Business Automation",
    desc: "Eliminate repetitive workflows with intelligent automation. Save time, reduce errors, and scale your operations effortlessly.",
    tags: ["n8n", "Zapier", "Custom APIs"],
  },
  {
    icon: LineChart,
    title: "Tech Consulting",
    desc: "Strategic technology guidance for startups and enterprises. Architecture reviews, tech stack selection, and CTO advisory services.",
    tags: ["Strategy", "Architecture", "Advisory"],
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".srv-item").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * 80);
          });
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" ref={ref} className="py-32 px-6 relative">
      {/* Section bg */}
      <div className="absolute inset-0 bg-white/[0.015]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="srv-item text-center mb-16" style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease" }}>
          <span
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-xs text-white/30 uppercase tracking-widest"
          >
            What We Do
          </span>
          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 leading-tight"
          >
            Services Built for
            <br />
            <span className="text-white/30">Modern Business</span>
          </h2>
          <p className="text-white/40 text-lg max-w-xl mx-auto">
            From idea to production, we cover the full stack of digital product
            development.
          </p>
        </div>

        {/* Service grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="srv-item group p-6 rounded-2xl border border-white/[0.07] bg-[#0d0d0d] card-hover cursor-default"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.7s ease ${i * 0.05}s`,
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.06] flex items-center justify-center mb-4 group-hover:bg-white/[0.1] transition-colors">
                  <Icon size={18} className="text-white/70" />
                </div>
                <h3
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  className="text-white font-semibold mb-2 text-sm"
                >
                  {service.title}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      className="text-[10px] text-white/30 px-2 py-0.5 rounded-md border border-white/[0.06] bg-white/[0.03]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
