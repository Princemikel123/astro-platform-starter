import React from "react";
import { motion } from "framer-motion";
import { Send, Youtube } from "lucide-react";

const socials = [
  {
    name: "X (Twitter)",
    href: "https://x.com/littleflash_og",
    color: "#FFFFFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "X Community",
    href: "https://twitter.com/i/communities/2036157887429722278",
    color: "#FFFFFF",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Telegram",
    href: "https://t.me/little_flash",
    color: "#26A5E4",
    icon: <Send className="w-6 h-6" />,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@LittleFlash2026",
    color: "#FF0000",
    icon: <Youtube className="w-6 h-6" />,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/@littleflash2026",
    color: "#FF004F",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.83a8.26 8.26 0 004.76 1.5V6.87a4.84 4.84 0 01-1-.18z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/littleflash2026",
    color: "#E4405F",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
];

export default function SocialLinks() {
  return (
    <section
      data-testid="social-links-section"
      className="relative z-10 py-16 sm:py-20"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2 className="font-['Anton'] text-4xl sm:text-5xl tracking-tight uppercase text-white">
            Join the <span className="text-[#00E5FF]">Community</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {socials.map((social, i) => (
            <motion.a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              data-testid={`social-${social.name.toLowerCase().replace(/[^a-z]/g, '-')}`}
              className="flex flex-col items-center gap-3 p-5 rounded-3xl border border-white/10 bg-[rgba(10,31,20,0.5)] backdrop-blur-sm hover:border-white/25 hover:scale-105 transition-all duration-300 group"
            >
              <div
                className="transition-colors duration-300"
                style={{ color: "#A1BBAE" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = social.color)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#A1BBAE")}
              >
                {social.icon}
              </div>
              <span className="text-xs text-[#A1BBAE] group-hover:text-white transition-colors font-medium text-center" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {social.name}
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
