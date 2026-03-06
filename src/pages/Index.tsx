import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredibilitySection from "@/components/CredibilitySection";
import ServicesSection from "@/components/ServicesSection";
import ApproachSection from "@/components/ApproachSection";
import BenefitsSection from "@/components/BenefitsSection";
import NetworkSection from "@/components/NetworkSection";
import CapabilitiesGrid from "@/components/CapabilitiesGrid";
import SocialMetrics from "@/components/SocialMetrics";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <CredibilitySection />
      <ServicesSection />
      <ApproachSection />
      <BenefitsSection />
      <NetworkSection />
      <CapabilitiesGrid />
      <SocialMetrics />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
