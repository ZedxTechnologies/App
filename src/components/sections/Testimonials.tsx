"use client";

import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Arjun Mehta",
    role: "Founder, TechStartup",
    quote:
      "Zedx Technologies delivered our MVP in just 6 weeks. The code quality was exceptional and the team's communication was outstanding throughout. Highly recommended for any startup.",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "Priya Sharma",
    role: "CTO, FinTech Co.",
    quote:
      "Working with Zedx felt like having an in-house engineering team. They understood our product deeply and built exactly what we needed — fast, clean, and scalable.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Rohit Kapoor",
    role: "CEO, E-commerce Brand",
    quote:
      "The mobile app they built has transformed our business. 40% increase in customer engagement within the first month. The UI/UX work is simply world-class.",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Sarah Johnson",
    role: "Product Manager, SaaS Company",
    quote:
      "Zedx Technologies are true professionals. They brought technical depth and creative thinking to every sprint. Our platform is now handling 10x the traffic seamlessly.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Vikram Nair",
    role: "Entrepreneur",
    quote:
      "The AI solution Zedx built saved us 20+ hours of manual work per week. Their understanding of the technology stack is impressive and the ROI was immediate.",
    rating: 5,
    avatar: "VN",
  },
  {
    name: "Aisha Patel",
    role: "Co-Founder, EdTech",
    quote:
      "From design to deployment, the team at Zedx never missed a deadline. Our platform is faster, more reliable, and our users love the new experience.",
    rating: 5,
    avatar: "AP",
  },
];

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".test-item").forEach((el, i) => {
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
    <section id="testimonials" ref={ref} className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-white/[0.01]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="test-item text-center mb-16"
          style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease" }}
        >
          <span
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-xs text-white/30 uppercase tracking-widest"
          >
            Client Love
          </span>
          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 leading-tight"
          >
            Trusted by
            <br />
            <span className="text-white/30">Builders & Founders</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="test-item group p-7 rounded-2xl border border-white/[0.07] bg-[#0d0d0d] card-hover"
              style={{
                opacity: 0,
                transform: "translateY(30px)",
                transition: `all 0.7s ease ${0.05 + i * 0.08}s`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star
                    key={s}
                    size={14}
                    className="text-white/50 fill-white/50"
                  />
                ))}
              </div>

              <blockquote className="text-white/60 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/10 flex items-center justify-center">
                  <span
                    style={{ fontFamily: "'Syne', sans-serif" }}
                    className="text-xs text-white font-bold"
                  >
                    {t.avatar}
                  </span>
                </div>
                <div>
                  <div
                    style={{ fontFamily: "'Syne', sans-serif" }}
                    className="text-white text-sm font-semibold"
                  >
                    {t.name}
                  </div>
                  <div className="text-white/30 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
