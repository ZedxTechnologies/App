"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Instagram, Twitter, MapPin, Send, CheckCircle } from "lucide-react";

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    service: "",
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.querySelectorAll(".cont-item").forEach((el, i) => {
            setTimeout(() => {
              (el as HTMLElement).style.opacity = "1";
              (el as HTMLElement).style.transform = "translateY(0)";
            }, i * 100);
          });
        }
      },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 96917 73489",
      href: "tel:+919691773489",
    },
    {
      icon: Mail,
      label: "Email",
      value: "connectzedx@gmail.com",
      href: "mailto:connectzedx@gmail.com",
    },
    {
      icon: Instagram,
      label: "Instagram",
      value: "@zedxtechnologies",
      href: "https://www.instagram.com/zedxtechnologies/",
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      value: "@connectzedx",
      href: "https://x.com/connectzedx",
    },
    {
      icon: MapPin,
      label: "Google Business",
      value: "View on Google",
      href: "https://share.google/VXqxlahMjJKbM2KGm",
    },
  ];

  const services = [
    "Web Development",
    "Mobile App",
    "SaaS Development",
    "Custom Software",
    "AI Solutions",
    "UI/UX Design",
    "Business Automation",
    "Tech Consulting",
  ];

  return (
    <section id="contact" ref={ref} className="py-32 px-6 relative">
      <div className="absolute inset-0 bg-white/[0.01]" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div
          className="cont-item text-center mb-16"
          style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease" }}
        >
          <span
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            className="text-xs text-white/30 uppercase tracking-widest"
          >
            Get In Touch
          </span>
          <h2
            style={{ fontFamily: "'Syne', sans-serif" }}
            className="text-4xl md:text-5xl font-bold text-white mt-4 mb-4 leading-tight"
          >
            Ready to Build
            <br />
            <span className="text-white/30">Something Great?</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Left - Contact Info */}
          <div
            className="cont-item lg:col-span-2 flex flex-col gap-4"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.1s" }}
          >
            <p className="text-white/50 text-base leading-relaxed mb-4">
              Drop us a message and we'll get back to you within 24 hours.
              Whether you have a full brief or just an idea — we'd love to hear
              from you.
            </p>

            <div className="space-y-3">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 p-4 rounded-xl border border-white/[0.07] bg-white/[0.02] hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300"
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/[0.06] flex items-center justify-center flex-shrink-0 group-hover:bg-white/[0.1] transition-colors">
                      <Icon size={15} className="text-white/60" />
                    </div>
                    <div>
                      <div
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        className="text-[10px] text-white/25 uppercase tracking-widest"
                      >
                        {item.label}
                      </div>
                      <div className="text-white/70 text-sm group-hover:text-white transition-colors">
                        {item.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right - Form */}
          <div
            className="cont-item lg:col-span-3"
            style={{ opacity: 0, transform: "translateY(30px)", transition: "all 0.7s ease 0.2s" }}
          >
            <div className="p-8 rounded-2xl border border-white/[0.07] bg-[#0d0d0d]">
              {submitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <CheckCircle size={48} className="text-green-400" />
                  <h3
                    style={{ fontFamily: "'Syne', sans-serif" }}
                    className="text-white text-2xl font-bold"
                  >
                    Message Sent!
                  </h3>
                  <p className="text-white/50">
                    Thanks for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-xs text-white/30 uppercase tracking-widest mb-2 block"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/20 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-white/30 uppercase tracking-widest mb-2 block"
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="john@company.com"
                        className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/20 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-white/30 uppercase tracking-widest mb-2 block"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      Company (Optional)
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      placeholder="Your company name"
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-white/30 uppercase tracking-widest mb-2 block"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      Service Needed
                    </label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white/70 text-sm focus:outline-none focus:border-white/20 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#0d0d0d]">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s} className="bg-[#0d0d0d]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-white/30 uppercase tracking-widest mb-2 block"
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}>
                      Tell Us About Your Project
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Describe your project, goals, and timeline..."
                      className="w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-white/20 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 py-4 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-all duration-300 text-base disabled:opacity-50 btn-primary"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
