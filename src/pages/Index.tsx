import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExperienceSection from "@/components/ExperienceSection";
import EventsSection from "@/components/EventsSection";
import CorporateSection from "@/components/CorporateSection";
import WeddingsSection from "@/components/WeddingsSection";
import GallerySection from "@/components/GallerySection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ExperienceSection />
      <EventsSection />
      <CorporateSection />
      <WeddingsSection />
      <GallerySection />
      <AboutSection />
      <ContactSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
