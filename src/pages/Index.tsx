import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HomeHero from "@/components/HomeHero";
import ExperienceSection from "@/components/ExperienceSection";
import WeddingsSection from "@/components/WeddingsSection";
import EventsSection from "@/components/EventsSection";
import CorporateSection from "@/components/CorporateSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle hash navigation when coming from another page
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <div className="min-h-screen">
      <Navbar />
      <HomeHero />
      <ExperienceSection />
      <WeddingsSection />
      <EventsSection />
      <CorporateSection />
      <PortfolioPreview />
      <AboutSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
