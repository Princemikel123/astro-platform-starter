import React from "react";
import { motion } from "framer-motion";

const CHART_URL = "https://dexscreener.com/solana/5egthklgbfougwkau2cy7w5osdgdye9dzjb2w18urjwx?embed=1&theme=dark";

export default function ChartSection() {
  return (
    <section
      id="chart"
      data-testid="chart-section"
      className="relative z-10 py-16 sm:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="font-['Anton'] text-4xl sm:text-5xl tracking-tight uppercase text-white">
            Live <span className="text-[#39FF14]">Chart</span>
          </h2>
          <p className="mt-3 text-[#A1BBAE] text-base sm:text-lg" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Track $FLASH price action in real-time
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="rounded-3xl overflow-hidden border border-[#39FF14]/20 bg-[rgba(10,31,20,0.6)] p-1 shadow-[0_0_40px_rgba(57,255,20,0.1)]"
        >
          <iframe
            src={CHART_URL}
            title="Dexscreener Chart"
            data-testid="dexscreener-chart"
            className="w-full rounded-2xl"
            style={{ height: "500px", border: "none" }}
            allow="clipboard-write"
          />
        </motion.div>
      </div>
    </section>
  );
}
