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
