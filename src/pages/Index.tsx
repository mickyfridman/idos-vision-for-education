import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import VisionSection from "@/components/VisionSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <VisionSection />
      <CTASection />
      
      {/* Footer */}
      <footer className="py-8 bg-earth text-center">
        <p className="text-wheat/60 text-sm">
          עידו רייס למנהלת החינוך • להבות חביבה 2025
        </p>
      </footer>
    </main>
  );
};

export default Index;
