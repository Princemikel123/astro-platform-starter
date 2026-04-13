import React from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, Shield, Rocket, Diamond } from "lucide-react";

const MASCOT_URL = "https://customer-assets.emergentagent.com/job_531ec90e-7e8f-4b7a-89cd-33ea431bc5f8/artifacts/c4fucffe_mascot.jpg";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6 },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="relative z-10 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeUp} className="text-center mb-16">
          <h2 className="font-['Anton'] text-4xl sm:text-5xl tracking-tight uppercase text-white">
            About <span className="text-[#39FF14]">$FLASH</span>
          </h2>
          <p className="mt-2 text-[#FF6B00] text-base sm:text-lg uppercase tracking-[0.15em] font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            The Chill King of Khao Kheow
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Left column - main text */}
          <div className="lg:col-span-3 space-y-8">
            <motion.div
              {...fadeUp}
              className="rounded-3xl border border-[#39FF14]/15 bg-[rgba(10,31,20,0.6)] p-6 sm:p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Leaf className="text-[#39FF14]" size={24} />
                <h3 className="font-['Anton'] text-xl sm:text-2xl uppercase text-white tracking-tight">Welcome to the Slow Lane</h3>
              </div>
              <p className="text-[#A1BBAE] leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                While the rest of the crypto world is screaming, biting, and chasing the next 5-minute pump, $FLASH is here to show you that the biggest gains come to those who know how to hang.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-[#FF6B00]/15 bg-[rgba(10,31,20,0.6)] p-6 sm:p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Heart className="text-[#FF6B00]" size={24} />
                <h3 className="font-['Anton'] text-xl sm:text-2xl uppercase text-white tracking-tight">The Story</h3>
              </div>
              <p className="text-[#A1BBAE] leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                Born in the lush, world-famous Khao Kheow Open Zoo in Thailand, $FLASH is more than just a baby sloth—he's a global icon. Sharing his home with his high-energy sister, Moo Deng, Flash became a viral sensation for his legendary naps, his slow-motion snack sessions, and his absolute refusal to be stressed by the world around him.
              </p>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-[#00E5FF]/15 bg-[rgba(10,31,20,0.6)] p-6 sm:p-8 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Diamond className="text-[#00E5FF]" size={24} />
                <h3 className="font-['Anton'] text-xl sm:text-2xl uppercase text-white tracking-tight">The Philosophy: Slow and Steady Wins the Moon</h3>
              </div>
              <p className="text-[#A1BBAE] leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
                In a market full of dogs and cats, $FLASH introduces the FLASH Meta. We represent a community of Diamond-Claw holders who understand that real wealth is built through patience and a strong ecosystem.
              </p>
            </motion.div>
          </div>

          {/* Right column - highlights + mascot */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl overflow-hidden border border-[#39FF14]/20"
            >
              <img
                src={MASCOT_URL}
                alt="Little Flash"
                className="w-full aspect-square object-cover"
              />
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="rounded-3xl border border-[#39FF14]/15 bg-[rgba(10,31,20,0.6)] p-6 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <Shield className="text-[#39FF14]" size={24} />
                <h3 className="font-['Anton'] text-xl uppercase text-white tracking-tight">Why $FLASH?</h3>
              </div>
              <ul className="space-y-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
                <li className="flex items-center gap-3 text-[#A1BBAE]">
                  <span className="w-2 h-2 rounded-full bg-[#39FF14] flex-shrink-0" />
                  Community First
                </li>
                <li className="flex items-center gap-3 text-[#A1BBAE]">
                  <span className="w-2 h-2 rounded-full bg-[#FF6B00] flex-shrink-0" />
                  Real World Impact
                </li>
                <li className="flex items-center gap-3 text-[#A1BBAE]">
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] flex-shrink-0" />
                  The Sibling Narrative
                </li>
              </ul>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-3xl border border-[#FF6B00]/20 bg-gradient-to-br from-[#FF6B00]/10 to-transparent p-6 backdrop-blur-sm text-center"
            >
              <Rocket className="text-[#FF6B00] mx-auto mb-3" size={32} />
              <p className="text-white font-bold text-lg uppercase tracking-wide" style={{ fontFamily: "'Anton', sans-serif" }}>
                Join the Hang
              </p>
              <p className="text-[#A1BBAE] text-sm mt-2" style={{ fontFamily: "'Outfit', sans-serif" }}>
                We are building a sanctuary for investors who are tired of the chaos. Trust the $FLASH.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
