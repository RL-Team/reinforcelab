// --- Section: Imports ---
import { Footer } from "@/components/Footer";
import { AboutVisionSection } from "@/components/AboutVisionSection";
import { ContactSection } from "@/components/ContactSection";
import { HeroSection } from "@/components/HeroSection";
import { NavBar } from "@/components/NavBar";
import { ResearchSection } from "@/components/ResearchSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SolutionsGallery } from "@/components/SolutionsGallery";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { WhyRLSection } from "@/components/WhyRLSection";

export function HomePage() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <NavBar />
      <div className="tech-grid" aria-hidden="true" />
      <main>
        {/* --- Section: Hero --- */}
        <HeroSection />
        {/* --- Section: Why RL --- */}
        <WhyRLSection />
        {/* --- Section: Core Services --- */}
        <ServicesSection />
        {/* --- Section: Solutions Gallery --- */}
        <SolutionsGallery />
        {/* --- Section: RL Frontier Research --- */}
        <ResearchSection />
        {/* --- Section: Why Choose ReinforceLab --- */}
        <WhyChooseSection />
        {/* --- Section: About & Vision --- */}
        <AboutVisionSection />
        {/* --- Section: Contact --- */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
