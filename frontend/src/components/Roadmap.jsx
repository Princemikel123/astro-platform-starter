import React from "react";
import { motion } from "framer-motion";
import {
  Sprout, Users, BarChart3, Megaphone,
  TrendingUp, Globe, Handshake, Heart,
  Building2, Newspaper, ImageIcon, ShoppingBag,
  Landmark, Globe2, Zap, Rocket
} from "lucide-react";

const phases = [
  {
    title: "Phase A",
    subtitle: "THE AWAKENING",
    color: "#39FF14",
    bgGrad: "from-[#39FF14]/10 to-transparent",
    borderColor: "#39FF14",
    items: [
      { num: 1, icon: Sprout, text: "Birth of FLASH" },
      { num: 2, icon: Users, text: "The FLASH Squad Gathers" },
      { num: 3, icon: BarChart3, text: "DexTools Crawl" },
      { num: 4, icon: Megaphone, text: "Viral Vine Campaign" },
    ],
  },
  {
    title: "Phase B",
    subtitle: "THE ASCENSION",
    cap: "$1M - $10M Market Cap",
    color: "#FF6B00",
    bgGrad: "from-[#FF6B00]/10 to-transparent",
    borderColor: "#FF6B00",
    items: [
      { num: 5, icon: TrendingUp, text: "CG Listing" },
      { num: 6, icon: Globe, text: "CMC Listing" },
      { num: 7, icon: Handshake, text: "Influencer Drift" },
      { num: 8, icon: Heart, text: "FLASH Conservation Fund" },
    ],
  },
  {
    title: "Phase C",
    subtitle: "THE FLASH TAKEOVER",
    cap: "$10M - $100M Market Cap",
    color: "#00E5FF",
    bgGrad: "from-[#00E5FF]/10 to-transparent",
    borderColor: "#00E5FF",
    items: [
      { num: 9, icon: Building2, text: "First CEX Listings (Tier 2)" },
      { num: 10, icon: Newspaper, text: "Mainstream Media Mentions" },
      { num: 11, icon: ImageIcon, text: "Interactive NFT Collectibles" },
      { num: 12, icon: ShoppingBag, text: "Merchandise Drop" },
    ],
  },
  {
    title: "Phase D",
    subtitle: "FLASH DOMINATION",
    cap: "$100M+ Market Cap",
    color: "#C084FC",
    bgGrad: "from-[#C084FC]/10 to-transparent",
    borderColor: "#C084FC",
    items: [
      { num: 13, icon: Landmark, text: "Tier 1 CEX Listings" },
      { num: 14, icon: Globe2, text: "Digital Metaverse Sanctuary" },
      { num: 15, icon: Zap, text: "The Flippening (Zoo Metas)" },
      { num: 16, icon: Rocket, text: "FLASH on the Moon!" },
    ],
  },
];

export default function Roadmap() {
  return (
    <section
      id="roadmap"
      data-testid="roadmap-section"
      className="relative z-10 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-4"
        >
          <h2 className="font-['Anton'] text-5xl sm:text-7xl tracking-tighter uppercase gradient-text leading-none">
            $FLASH
          </h2>
          <p className="mt-2 font-['Anton'] text-2xl sm:text-3xl tracking-tight uppercase text-white">
            THE OFFICIAL FLASHMAP
          </p>
          <p className="mt-2 text-[#FF6B00] text-sm sm:text-base uppercase tracking-[0.2em] font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Slow & Steady Wins the Race
          </p>
          <p className="mt-1 text-[#00E5FF] text-xs sm:text-sm uppercase tracking-[0.15em]" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Journey to the Moon
          </p>
        </motion.div>

        {/* Vertical Timeline - Desktop */}
        <div className="hidden md:block relative mt-16">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#39FF14] via-[#FF6B00] via-[#00E5FF] to-[#C084FC] rounded-full" />

          {phases.map((phase, pi) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: pi * 0.1 }}
              className={`relative mb-20 flex ${pi % 2 === 0 ? "justify-start" : "justify-end"}`}
            >
              {/* Center dot */}
              <div
                className="absolute left-1/2 top-8 w-5 h-5 rounded-full -translate-x-1/2 z-10 border-2"
                style={{
                  borderColor: phase.color,
                  backgroundColor: phase.color,
                  boxShadow: `0 0 20px ${phase.color}60`,
                }}
              />

              {/* Card */}
              <div
                className={`w-[45%] rounded-3xl border p-6 backdrop-blur-sm bg-gradient-to-br ${phase.bgGrad} bg-[rgba(10,31,20,0.6)]`}
                style={{ borderColor: `${phase.borderColor}30` }}
              >
                <div className="mb-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-2"
                    style={{
                      backgroundColor: `${phase.color}15`,
                      color: phase.color,
                      border: `1px solid ${phase.color}40`,
                    }}
                  >
                    {phase.title}
                  </span>
                  <h3
                    className="font-['Anton'] text-2xl uppercase tracking-tight"
                    style={{ color: phase.color }}
                  >
                    {phase.subtitle}
                  </h3>
                  {phase.cap && (
                    <p className="text-xs text-[#A1BBAE] mt-1" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      {phase.cap}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {phase.items.map((item) => (
                    <div
                      key={item.num}
                      className="flex items-center gap-3 p-3 rounded-2xl bg-[#050B08]/60 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${phase.color}15` }}
                      >
                        <item.icon size={18} style={{ color: phase.color }} />
                      </div>
                      <div>
                        <span className="text-[#A1BBAE] text-[10px] font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>{item.num}.</span>
                        <p className="text-white text-sm leading-tight font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: Stacked cards */}
        <div className="md:hidden mt-10 space-y-8">
          {phases.map((phase, pi) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: pi * 0.08 }}
              className={`rounded-3xl border p-5 backdrop-blur-sm bg-gradient-to-br ${phase.bgGrad} bg-[rgba(10,31,20,0.6)]`}
              style={{ borderColor: `${phase.borderColor}30` }}
            >
              <span
                className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-[0.15em] mb-2"
                style={{
                  backgroundColor: `${phase.color}15`,
                  color: phase.color,
                  border: `1px solid ${phase.color}40`,
                }}
              >
                {phase.title}
              </span>
              <h3
                className="font-['Anton'] text-xl uppercase tracking-tight mb-1"
                style={{ color: phase.color }}
              >
                {phase.subtitle}
              </h3>
              {phase.cap && (
                <p className="text-xs text-[#A1BBAE] mb-4" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  {phase.cap}
                </p>
              )}

              <div className="space-y-2">
                {phase.items.map((item) => (
                  <div
                    key={item.num}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[#050B08]/60 border border-white/5"
                  >
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${phase.color}15` }}
                    >
                      <item.icon size={16} style={{ color: phase.color }} />
                    </div>
                    <p className="text-white text-sm font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>
                      <span className="text-[#A1BBAE] text-xs mr-1">{item.num}.</span>
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
