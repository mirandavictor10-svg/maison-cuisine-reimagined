import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
