import React from "react";
import { motion } from "framer-motion";
import { Rocket, BarChart3, Send } from "lucide-react";

const MASCOT_URL = "https://customer-assets.emergentagent.com/job_531ec90e-7e8f-4b7a-89cd-33ea431bc5f8/artifacts/c4fucffe_mascot.jpg";
const BUY_LINK = "https://jup.ag/?sell=So11111111111111111111111111111111111111112&buy=pACMKYiCAygMH4UXfQbs86g2Yv5FidV8QytvVEhpump";
const CHART_LINK = "https://dexscreener.com/solana/5egthklgbfougwkau2cy7w5osdgdye9dzjb2w18urjwx";
const TELEGRAM_LINK = "https://t.me/little_flash";

export default function HeroSection() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-[#39FF14]/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#FF6B00]/5 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-[#00E5FF]/5 blur-[80px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-4 px-4 py-1.5 rounded-full border border-[#39FF14]/30 bg-[#39FF14]/10"
            >
              <span className="text-[#39FF14] text-xs sm:text-sm tracking-[0.2em] uppercase font-bold">
                Solana Meme Token
              </span>
            </motion.div>

            <h1 className="font-['Anton'] text-5xl sm:text-7xl lg:text-8xl tracking-tighter uppercase leading-[0.9]">
              <span className="text-white">Little</span>
              <br />
              <span className="gradient-text">Flash</span>
              <br />
              <span className="text-[#FF6B00] text-3xl sm:text-4xl lg:text-5xl">($FLASH)</span>
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 text-lg sm:text-xl text-[#A1BBAE] font-light max-w-md mx-auto lg:mx-0"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Slow and Steady Wins the Moon
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href={BUY_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-buy-button"
                className="glow-green inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#39FF14] text-[#050B08] font-bold text-base uppercase tracking-wider hover:bg-[#4dff33] transition-all duration-300 hover:scale-105"
              >
                <Rocket size={20} />
                Buy $FLASH
              </a>
              <a
                href={CHART_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-chart-button"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#00E5FF]/50 text-[#00E5FF] font-bold text-base uppercase tracking-wider hover:bg-[#00E5FF]/10 transition-all duration-300 hover:scale-105"
              >
                <BarChart3 size={20} />
                View Chart
              </a>
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-telegram-button"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-[#FF6B00]/50 text-[#FF6B00] font-bold text-base uppercase tracking-wider hover:bg-[#FF6B00]/10 transition-all duration-300 hover:scale-105"
              >
                <Send size={20} />
                Join Telegram
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Mascot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow behind mascot */}
              <div className="absolute inset-0 rounded-full bg-[#39FF14]/10 blur-[60px] scale-110" />
              <div className="absolute inset-0 rounded-full bg-[#FF6B00]/5 blur-[40px] scale-125" />
              <img
                src={MASCOT_URL}
                alt="Little Flash Mascot"
                data-testid="hero-mascot"
                className="mascot-float relative z-10 w-72 h-72 sm:w-96 sm:h-96 lg:w-[450px] lg:h-[450px] object-cover rounded-3xl drop-shadow-[0_0_30px_rgba(57,255,20,0.3)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
