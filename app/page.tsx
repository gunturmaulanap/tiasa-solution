import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LogoCloud from "@/components/LogoCloudSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsAndStatsSection from "@/components/WhyChooseUsAndStatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <LogoCloud />
        <ServicesSection />
        <WhyChooseUsAndStatsSection />
        <PortfolioSection />
        <TestimonialsSection />
        <FeaturesSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
