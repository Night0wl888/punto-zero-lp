import HeroSection from "@/components/landing/HeroSection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import LegacySection from "@/components/landing/LegacySection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import ComingSoonSection from "@/components/landing/ComingSoonSection";
import AboutSection from "@/components/landing/AboutSection";
import HypeSection from "@/components/landing/HypeSection";
import FooterSection from "@/components/landing/FooterSection";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] overflow-x-hidden">
      <HeroSection />
      <ComingSoonSection />
      <WhatIsSection />
      <LegacySection />
      <PhilosophySection />
      <AboutSection />
      <HypeSection />
      <FooterSection />
    </main>
  );
}