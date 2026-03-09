"use client";

import { useEffect, useRef } from "react";

const steps = [
  {
    number: "01",
    title: "Idea & Planning",
    desc: "We dive deep into your vision, goals, and market. Requirements gathering, technical scoping, and a clear roadmap with milestones.",
    duration: "Week 1",
  },
  {
    number: "02",
    title: "Design",
    desc: "UI/UX wireframes, design system creation, and high-fidelity prototypes. Every interaction is crafted for maximum usability.",
    duration: "Weeks 2–3",
  },
  {
    number: "03",
    title: "Development",
    desc: "Agile sprints with daily standups. Clean, documented code with continuous integration and regular demos.",
    duration: "Weeks 4–10",
  },
  {
    number: "04",
    title: "Testing",
    desc: "Comprehensive QA — unit tests, integration tests, performance benchmarking, security audits, and cross-device testing.",
    duration: "Weeks 9–11",
  },
  {
    number: "05",
    title: "Deployment",
    desc: "Seamless launch with CI/CD pipelines, monitoring setup, and zero-downtime deployments. Your product goes live with confidence.",
    duration: "Week 12",
  },
];

export default function Process() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".proc-item").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * 120);
          });
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-white/[0.015]" />
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div
          className="proc-item text-center mb-20"
          style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease" }}
        >
          <span
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-xs text-white/30 uppercase tracking-widest"
          >
            How We Work
          </span>
          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 leading-tight"
          >
            Our Development
            <br />
            <span className="text-white/30">Process</span>
          </h2>
          <p className="text-white/40 text-lg max-w-lg mx-auto">
            A proven workflow that delivers quality products on time, every time.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="proc-item group relative"
                style={{
                  opacity: 0,
                  transform: "translateY(30px)",
                  transition: `all 0.7s ease ${0.1 + i * 0.12}s`,
                }}
              >
                {/* Step circle */}
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 rounded-2xl border border-white/[0.08] bg-[#0d0d0d] flex flex-col items-center justify-center mb-6 group-hover:border-white/20 transition-all duration-300 group-hover:bg-white/[0.04] relative z-10">
                    <span
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                      className="text-xs text-white/20 mb-1"
                    >
                      {step.number}
                    </span>
                    <span
                      style={{ fontFamily: "'Syne', sans-serif" }}
                      className="text-white text-sm font-bold leading-tight text-center px-2"
                    >
                      {step.title.split(" ").slice(0, 1).join(" ")}
                      <br />
                      {step.title.split(" ").slice(1).join(" ")}
                    </span>
                  </div>

                  <p className="text-white/40 text-sm leading-relaxed mb-3">
                    {step.desc}
                  </p>
                  <span
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    className="text-xs text-white/20 border border-white/[0.06] px-3 py-1 rounded-full"
                  >
                    {step.duration}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
