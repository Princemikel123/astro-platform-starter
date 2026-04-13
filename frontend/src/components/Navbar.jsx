import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_531ec90e-7e8f-4b7a-89cd-33ea431bc5f8/artifacts/2zym3y4u_pfp.jpg";
const BUY_LINK = "https://jup.ag/?sell=So11111111111111111111111111111111111111112&buy=pACMKYiCAygMH4UXfQbs86g2Yv5FidV8QytvVEhpump";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Chart", href: "#chart" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Memes", href: "#memes" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      data-testid="navbar"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050B08]/80 border-b border-[#39FF14]/20 shadow-[0_4px_30px_rgba(57,255,20,0.1)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        <a href="#hero" className="flex items-center gap-3" data-testid="nav-logo">
          <img
            src={LOGO_URL}
            alt="Little Flash Logo"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-[#39FF14]/50"
          />
          <span className="font-['Anton'] text-xl sm:text-2xl tracking-tight text-white uppercase">
            $FLASH
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className="text-sm tracking-[0.15em] uppercase font-medium text-[#A1BBAE] hover:text-[#39FF14] transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BUY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-buy-button"
            className="glow-green px-6 py-2.5 rounded-full bg-[#39FF14] text-[#050B08] font-bold text-sm uppercase tracking-wider hover:bg-[#4dff33] transition-all duration-300"
          >
            Buy $FLASH
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          data-testid="mobile-menu-toggle"
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden backdrop-blur-xl bg-[#050B08]/95 border-b border-[#39FF14]/20 px-6 pb-6"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base tracking-[0.1em] uppercase text-[#A1BBAE] hover:text-[#39FF14] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={BUY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block text-center glow-green px-6 py-3 rounded-full bg-[#39FF14] text-[#050B08] font-bold text-sm uppercase tracking-wider"
          >
            Buy $FLASH
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
}
