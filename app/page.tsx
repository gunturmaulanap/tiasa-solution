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

export const metadata = {
  title: "Tiasa Solution - Solusi Digital Tepat Guna untuk Bisnis Anda",
  description: "Mitra transformasi digital di Yogyakarta yang fokus pada efisiensi operasional. Kami menggabungkan strategi bisnis dengan rekayasa sistem modern untuk membangun sistem yang kokoh dan tepat guna.",
  keywords: ["solusi digital", "website development", "aplikasi mobile", "sistem POS", "digital transformation", "Yogyakarta", "UMKM", "FnB"],
  authors: [{ name: "Tiasa Solution" }],
  openGraph: {
    title: "Tiasa Solution - Solusi Digital Tepat Guna",
    description: "Mitra transformasi digital di Yogyakarta yang fokus pada efisiensi operasional.",
    type: "website",
    locale: "id_ID",
    siteName: "Tiasa Solution",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tiasa Solution - Solusi Digital Tepat Guna",
    description: "Mitra transformasi digital di Yogyakarta yang fokus pada efisiensi operasional.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="overflow-x-clip pt-[84px] lg:pt-[132px]">
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
