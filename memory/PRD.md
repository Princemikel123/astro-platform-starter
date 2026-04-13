# Little Flash ($FLASH) - Meme Coin Landing Page

## Original Problem Statement
Create a modern animated meme coin website for a Solana token called Little Flash ($FLASH) with hero, chart, about, token info, roadmap, meme gallery, buy section, social links, and footer.

## Architecture
- **Frontend**: React (CRA) + Tailwind CSS + Framer Motion + react-fast-marquee
- **Backend**: Minimal FastAPI (health check only - static site)
- **Database**: Not used (static content)

## User Personas
- Crypto investors looking for meme coin info
- Community members checking token details
- New visitors discovering $FLASH

## Core Requirements (Static)
- Animated hero with mascot sloth
- Live Dexscreener chart embed
- Token info with copy-to-clipboard contract address
- 4-phase roadmap (recreated visually, not static image)
- Meme gallery with lightbox
- Social media links (X, Telegram, YouTube, TikTok, Instagram)
- Mobile responsive design

## What's Been Implemented (Dec 2025)
- [x] Full landing page with all 9 sections
- [x] Navbar with glassmorphism, logo, nav links, Buy CTA
- [x] Hero section with mascot, headline, tagline, 3 CTA buttons
- [x] Marquee scrolling ticker
- [x] Dexscreener chart iframe embed
- [x] About section with story, philosophy, highlights
- [x] Token Info with copy-to-clipboard (sonner toast)
- [x] Roadmap: 4 phases (A-D) with vertical timeline, icons, items
- [x] Meme Gallery: 3 images with lightbox popup
- [x] Buy section with glowing CTA button
- [x] Social links: 6 platforms
- [x] Footer with logo and copyright
- [x] Floating leaves background animation
- [x] Mobile responsive with hamburger menu
- [x] Custom scrollbar, selection colors, smooth scroll

## Prioritized Backlog
- P2: Add more meme images to gallery as user provides them
- P2: Animated counter for token supply
- P3: Add audio toggle for background music
