import HeroSection from "@/components/landing/HeroSection";
import MemoriesSection from "@/components/landing/MemoriesSection";
import WhatIsSection from "@/components/landing/WhatIsSection";
import PhilosophySection from "@/components/landing/PhilosophySection";
import ComingSoonSection from "@/components/landing/ComingSoonSection";
import AboutSection from "@/components/landing/AboutSection";
import HypeSection from "@/components/landing/HypeSection";
import FooterSection from "@/components/landing/FooterSection";

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] overflow-x-hidden">
      <HeroSection />
      <MemoriesSection />
      <WhatIsSection />
      <PhilosophySection />
      <ComingSoonSection />
      <AboutSection />
      <HypeSection />
      <FooterSection />
    </main>
  );
}