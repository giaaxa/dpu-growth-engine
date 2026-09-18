import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredibilitySection from "@/components/CredibilitySection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import SocialMetrics from "@/components/SocialMetrics";
import WaysToWork from "@/components/WaysToWork";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <CredibilitySection />
      <ApproachSection />
      <ServicesSection />
      <SocialMetrics />
      <WaysToWork />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
