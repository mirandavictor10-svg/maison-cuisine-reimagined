import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import eventsHero from "@/assets/events-hero.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";
import fairlie1 from "@/assets/fairlie-1.jpg";
import fairlie2 from "@/assets/fairlie-2.jpg";
import fairlie3 from "@/assets/fairlie-3.jpg";
import loftLucia1 from "@/assets/loft-lucia-1.avif";
import loftLucia2 from "@/assets/loft-lucia-2.webp";
import sarabande1 from "@/assets/sarabande-1.jpg";
import sarabande2 from "@/assets/sarabande-2.jpeg";
import sarabande3 from "@/assets/sarabande-3.jpg";
import greenhouse1 from "@/assets/greenhouse-1.jpg";
import greenhouse2 from "@/assets/greenhouse-2.webp";
import greenhouse3 from "@/assets/greenhouse-3.jpg";

interface PortfolioItem {
  id: number;
  src: string;
  alt: string;
  category: "events" | "cuisine" | "venues";
  caption: string;
  size: string;
  gallery?: string[];
}

const portfolioItems: PortfolioItem[] = [
  { id: 1, src: heroWedding, alt: "Wedding reception", category: "events", caption: "Black-tie wedding — 220 guests", size: "col-span-12 md:col-span-8 aspect-[16/9]", gallery: [heroWedding, gallery1, gallery4] },
  { id: 2, src: gallery1, alt: "Gourmet appetizers", category: "cuisine", caption: "Artisanal passed appetizers", size: "col-span-12 md:col-span-4 aspect-square", gallery: [gallery1, gallery3] },
  { id: 3, src: eventsHero, alt: "Corporate gala", category: "events", caption: "Corporate gala — Downtown Chicago", size: "col-span-12 md:col-span-4 aspect-square", gallery: [eventsHero, gallery2] },
  { id: 7, src: fairlie1, alt: "The Fairlie venue", category: "venues", caption: "The Fairlie", size: "col-span-12 md:col-span-8 aspect-[16/9]", gallery: [fairlie1, fairlie2, fairlie3] },
  { id: 4, src: gallery3, alt: "Dessert display", category: "cuisine", caption: "Curated dessert experience", size: "col-span-12 md:col-span-7 aspect-[4/3]" },
  { id: 8, src: loftLucia1, alt: "Loft Lucia venue", category: "venues", caption: "Loft Lucia", size: "col-span-12 md:col-span-5 aspect-square", gallery: [loftLucia1, loftLucia2] },
  { id: 5, src: gallery4, alt: "Private dining experience", category: "events", caption: "Intimate gathering", size: "col-span-12 md:col-span-4 aspect-[3/4]" },
  { id: 9, src: sarabande3, alt: "Sarabande venue", category: "venues", caption: "Sarabande", size: "col-span-12 md:col-span-8 aspect-[16/9]", gallery: [sarabande1, sarabande2, sarabande3] },
  { id: 10, src: greenhouse1, alt: "GreenHouse Loft", category: "venues", caption: "GreenHouse Loft", size: "col-span-12 md:col-span-6 aspect-square", gallery: [greenhouse1, greenhouse2, greenhouse3] },
  { id: 6, src: chefPortrait, alt: "Chef preparing cuisine", category: "cuisine", caption: "Executive Chef Artisan Series", size: "col-span-12 md:col-span-6 aspect-square" },
];

const filterTabs = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "cuisine", label: "Cuisine" },
  { id: "venues", label: "Venues" },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter);

  const openLightbox = (item: PortfolioItem) => {
    setCurrentItem(item);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentItem(null);
    document.body.style.overflow = "";
  };

  return (
    <div className="min-h-screen bg-background whitespace-normal">
      <Navbar />

      <section className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${eventsHero})` }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-[10px] tracking-[0.4em] uppercase text-white/60 mb-6"
          >
            The Collection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="heading-display text-white mb-8 tracking-wider"
          >
            A Portfolio of <br /> <span className="italic">Elevated</span> Experiences
          </motion.h1>
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="w-24 h-px bg-primary/60 origin-center"
          />
        </div>
      </section>

      <section className="sticky top-20 z-30 bg-background/80 backdrop-blur-xl border-b border-border/10 py-8">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <div className="flex justify-center gap-10 md:gap-16">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`nav-link pb-4 border-b-2 transition-all duration-700 ${
                  activeFilter === tab.id ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-48">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
          <motion.div layout className="grid grid-cols-12 gap-6 md:gap-12 lg:gap-16">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => openLightbox(item)}
                  className={`${item.size} group relative overflow-hidden bg-muted/20 cursor-pointer shadow-xl`}
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-90"
                  />
                  <div className="absolute inset-x-0 bottom-0 p-8 pt-20 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <span className="nav-link text-white/60 mb-2 block">{item.category}</span>
                    <p className="font-serif text-xl text-white italic">{item.caption}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxOpen && currentItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-2xl flex items-center justify-center p-6 md:p-12 overflow-hidden"
          >
            <button onClick={closeLightbox} className="absolute top-10 right-10 text-foreground/60 hover:text-foreground transition-colors z-[110]">
              <X size={32} />
            </button>

            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-7xl h-full flex flex-col justify-center gap-12"
            >
              <div className="relative aspect-video md:aspect-[21/9] overflow-hidden rounded-sm bg-muted/20 shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    src={currentItem.gallery?.[currentImageIndex] || currentItem.src}
                    alt={currentItem.alt}
                    className="w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {currentItem.gallery && currentItem.gallery.length > 1 && (
                  <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between pointer-events-none">
                    <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i => i === 0 ? currentItem.gallery!.length - 1 : i - 1) }} className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-all">
                      <ChevronLeft size={24} />
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i => i === currentItem.gallery!.length - 1 ? 0 : i + 1) }} className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white pointer-events-auto hover:bg-white/20 transition-all">
                      <ChevronRight size={24} />
                    </button>
                  </div>
                )}
              </div>

              <div className="text-center space-y-4">
                <span className="text-[10px] tracking-[0.4em] uppercase text-primary">{currentItem.category}</span>
                <h3 className="heading-section text-foreground italic">{currentItem.caption}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Portfolio;
