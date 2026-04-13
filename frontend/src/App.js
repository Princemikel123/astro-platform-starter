import React from "react";
import "@/App.css";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MarqueeBar from "@/components/MarqueeBar";
import ChartSection from "@/components/ChartSection";
import AboutSection from "@/components/AboutSection";
import TokenInfo from "@/components/TokenInfo";
import Roadmap from "@/components/Roadmap";
import MemeGallery from "@/components/MemeGallery";
import BuySection from "@/components/BuySection";
import SocialLinks from "@/components/SocialLinks";
import Footer from "@/components/Footer";
import FloatingLeaves from "@/components/FloatingLeaves";
import { Toaster } from "sonner";

function App() {
  return (
    <div className="relative min-h-screen" style={{ background: '#050B08' }}>
      <FloatingLeaves />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: 'rgba(10, 31, 20, 0.95)',
            border: '1px solid rgba(57, 255, 20, 0.3)',
            color: '#39FF14',
          },
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <MarqueeBar />
        <ChartSection />
        <AboutSection />
        <TokenInfo />
        <Roadmap />
        <MemeGallery />
        <BuySection />
        <SocialLinks />
      </main>
      <Footer />
    </div>
  );
}

export default App;
