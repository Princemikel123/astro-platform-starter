import React, { useState } from "react";
import { motion } from "framer-motion";
import { Copy, Check, Coins, Tag, Database } from "lucide-react";
import { toast } from "sonner";

const CONTRACT = "pACMKYiCAygMH4UXfQbs86g2Yv5FidV8QytvVEhpump";

const tokenData = [
  { icon: Coins, label: "Token Name", value: "Little Flash", color: "#39FF14" },
  { icon: Tag, label: "Ticker", value: "$FLASH", color: "#FF6B00" },
  { icon: Database, label: "Total Supply", value: "998,853,603", color: "#00E5FF" },
];

export default function TokenInfo() {
  const [copied, setCopied] = useState(false);

  const copyCA = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT);
      setCopied(true);
      toast.success("Contract address copied!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy");
    }
  };

  return (
    <section
      id="tokenomics"
      data-testid="token-info-section"
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
            Token <span className="text-[#00E5FF]">Info</span>
          </h2>
        </motion.div>

        {/* Token Data Cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-10">
          {tokenData.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl border bg-[rgba(10,31,20,0.6)] p-6 sm:p-8 text-center backdrop-blur-sm hover:scale-[1.03] transition-transform duration-300"
              style={{ borderColor: `${item.color}30` }}
            >
              <item.icon size={36} style={{ color: item.color }} className="mx-auto mb-4" />
              <p className="text-sm text-[#A1BBAE] uppercase tracking-[0.15em] mb-2 font-medium" style={{ fontFamily: "'Outfit', sans-serif" }}>
                {item.label}
              </p>
              <p className="text-2xl sm:text-3xl font-['Anton'] uppercase tracking-tight" style={{ color: item.color }}>
                {item.value}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Contract Address */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="rounded-3xl border border-[#39FF14]/20 bg-[rgba(10,31,20,0.6)] p-6 sm:p-8 backdrop-blur-sm"
        >
          <p className="text-sm text-[#A1BBAE] uppercase tracking-[0.15em] mb-4 text-center font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>
            Contract Address
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex-1 w-full bg-[#050B08] rounded-2xl px-5 py-4 border border-[#39FF14]/10 overflow-hidden">
              <p
                data-testid="contract-address"
                className="text-[#39FF14] font-mono text-sm sm:text-base break-all text-center sm:text-left"
              >
                {CONTRACT}
              </p>
            </div>
            <button
              onClick={copyCA}
              data-testid="copy-ca-button"
              className="glow-green flex items-center gap-2 px-6 py-4 rounded-2xl bg-[#39FF14] text-[#050B08] font-bold text-sm uppercase tracking-wider hover:bg-[#4dff33] transition-all duration-300 flex-shrink-0"
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
