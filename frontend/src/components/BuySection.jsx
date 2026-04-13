import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";

const BUY_LINK = "https://jup.ag/?sell=So11111111111111111111111111111111111111112&buy=pACMKYiCAygMH4UXfQbs86g2Yv5FidV8QytvVEhpump";

export default function BuySection() {
  return (
    <section
      id="buy"
      data-testid="buy-section"
      className="relative z-10 py-20 sm:py-32"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#39FF14]/5 blur-[120px]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <h2 className="font-['Anton'] text-4xl sm:text-6xl lg:text-7xl tracking-tight uppercase text-white mb-4">
            Ready to <span className="gradient-text">Hang</span>?
          </h2>
          <p className="text-[#A1BBAE] text-lg sm:text-xl mb-10 max-w-lg mx-auto" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Grab your $FLASH bag and join the slowest revolution in crypto. Diamond claws only.
          </p>

          <a
            href={BUY_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="buy-button"
            className="glow-green inline-flex items-center gap-3 px-12 py-6 rounded-full bg-[#39FF14] text-[#050B08] font-['Anton'] text-2xl sm:text-3xl uppercase tracking-wider hover:bg-[#4dff33] transition-all duration-300 hover:scale-105"
          >
            <Rocket size={28} />
            BUY $FLASH
          </a>
        </motion.div>
      </div>
    </section>
  );
}
