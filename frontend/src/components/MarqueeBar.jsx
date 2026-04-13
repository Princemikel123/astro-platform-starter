import React from "react";
import Marquee from "react-fast-marquee";

const items = [
  "$FLASH",
  "LITTLE FLASH",
  "THE FASTEST FLASH IN CRYPTO",
  "SLOW AND STEADY WINS THE MOON",
  "DIAMOND CLAWS",
  "$FLASH",
  "SOLANA MEME TOKEN",
  "BORN IN KHAO KHEOW",
];

export default function MarqueeBar() {
  return (
    <div
      data-testid="marquee-bar"
      className="relative z-10 py-4 border-y border-[#39FF14]/20 bg-[#050B08]/80 backdrop-blur-sm overflow-hidden"
    >
      <Marquee speed={60} gradient={false} pauseOnHover>
        {items.map((item, i) => (
          <span
            key={i}
            className="mx-8 text-sm sm:text-base tracking-[0.2em] uppercase font-bold"
            style={{
              color: i % 3 === 0 ? "#39FF14" : i % 3 === 1 ? "#FF6B00" : "#00E5FF",
            }}
          >
            {item} &bull;
          </span>
        ))}
      </Marquee>
    </div>
  );
}
