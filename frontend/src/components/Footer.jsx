import React from "react";

const LOGO_URL = "https://customer-assets.emergentagent.com/job_531ec90e-7e8f-4b7a-89cd-33ea431bc5f8/artifacts/2zym3y4u_pfp.jpg";

export default function Footer() {
  return (
    <footer
      data-testid="footer"
      className="relative z-10 pt-16 pb-8 border-t border-[#39FF14]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <img
            src={LOGO_URL}
            alt="Little Flash Logo"
            className="w-12 h-12 rounded-full border-2 border-[#39FF14]/30"
          />
          <span className="font-['Anton'] text-3xl sm:text-4xl tracking-tight uppercase gradient-text">
            $FLASH
          </span>
        </div>

        <div className="vine-divider max-w-xs mx-auto mb-6" />

        <p className="text-[#A1BBAE] text-sm" style={{ fontFamily: "'Outfit', sans-serif" }}>
          &copy; 2026 Little Flash ($FLASH). All rights reserved.
        </p>
      </div>
    </footer>
  );
}
