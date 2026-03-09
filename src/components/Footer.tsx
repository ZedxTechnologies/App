import Link from "next/link";
import { Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    icon: Instagram,
    href: "https://www.instagram.com/zedxtechnologies/",
    label: "Instagram",
  },
  {
    icon: Twitter,
    href: "https://x.com/connectzedx",
    label: "X (Twitter)",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span
                  style={{ fontFamily: "'Syne', sans-serif" }}
                  className="text-black text-sm font-extrabold"
                >
                  Z
                </span>
              </div>
              <span
                style={{ fontFamily: "'Syne', sans-serif" }}
                className="text-white font-semibold text-lg tracking-tight"
              >
                Zedx Technologies
              </span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs mb-6">
              Premium software development agency building digital products that
              scale. Web, mobile, SaaS, AI — crafted with precision.
            </p>

            {/* Social */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-9 h-9 rounded-lg border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-white/40 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-white text-sm font-semibold mb-5"
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/40 hover:text-white text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-white text-sm font-semibold mb-5"
            >
              Contact
            </h4>
            <div className="space-y-3">
              <a
                href="tel:+919691773489"
                className="flex items-center gap-3 text-white/40 hover:text-white text-sm transition-colors"
              >
                <Phone size={13} />
                +91 96917 73489
              </a>
              <a
                href="mailto:connectzedx@gmail.com"
                className="flex items-center gap-3 text-white/40 hover:text-white text-sm transition-colors"
              >
                <Mail size={13} />
                connectzedx@gmail.com
              </a>
              <a
                href="https://share.google/VXqxlahMjJKbM2KGm"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/40 hover:text-white text-sm transition-colors"
              >
                <MapPin size={13} />
                Google Business Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {new Date().getFullYear()} Zedx Technologies. All rights
            reserved.
          </p>
          <div className="flex items-center gap-1">
            <span
              style={{ fontFamily: "'JetBrains Mono', monospace" }}
              className="text-xs text-white/20"
            >
              Built with precision by
            </span>
            <span
              style={{ fontFamily: "'Syne', sans-serif" }}
              className="text-xs text-white/40 font-semibold ml-1"
            >
              Zedx Technologies
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
