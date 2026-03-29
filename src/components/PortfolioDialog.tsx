import { useState, ReactNode } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import QuestionnaireDialog from "./QuestionnaireDialog";
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
];

const filterTabs = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "cuisine", label: "Cuisine" },
  { id: "venues", label: "Venues" },
];

interface PortfolioDialogProps {
  children: ReactNode;
}

const PortfolioDialog = ({ children }: PortfolioDialogProps) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState<PortfolioItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredItems = activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter);

  const openLightbox = (item: PortfolioItem) => {
    setCurrentItem(item);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentItem(null);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-screen-2xl w-[95vw] h-[90vh] p-0 overflow-hidden bg-background border-border/10">
        <div className="h-full flex flex-col overflow-hidden">
          <div className="px-10 py-12 text-center border-b border-border/10 flex-shrink-0">
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary mb-4 block">Our Work</span>
            <h2 className="heading-section text-foreground italic mb-2">Curated Moments</h2>
          </div>

          <div className="py-6 border-b border-border/10 flex-shrink-0 bg-background/50 backdrop-blur-md">
            <div className="flex justify-center gap-10">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`nav-link pb-2 border-b-2 transition-all duration-700 ${
                    activeFilter === tab.id ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 overflow-y-auto p-10 md:p-16">
            <motion.div layout className="grid grid-cols-12 gap-8 lg:gap-12">
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
                    className={`${item.size} group relative overflow-hidden bg-muted/20 cursor-pointer shadow-xl rounded-sm`}
                  >
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-8">
                      <span className="nav-link text-white/60 mb-2 block">{item.category}</span>
                      <p className="font-serif text-lg text-white italic">{item.caption}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            <div className="text-center mt-20 pb-10">
              <p className="body-elegant text-muted-foreground mb-8 text-sm">Ready to create your own memorable experience?</p>
              <QuestionnaireDialog>
                <button className="btn-elegant">Request a Consultation</button>
              </QuestionnaireDialog>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {lightboxOpen && currentItem && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-background/98 backdrop-blur-2xl flex items-center justify-center p-12 overflow-hidden"
            >
              <button onClick={closeLightbox} className="absolute top-10 right-10 text-foreground/60 hover:text-foreground transition-colors z-[210]">
                <X size={32} />
              </button>

              <motion.div 
                initial={{ scale: 0.98, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.98, opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-7xl h-full flex flex-col justify-center gap-12"
              >
                <div className="relative aspect-video overflow-hidden rounded-sm bg-muted/20 shadow-2xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImageIndex}
                      initial={{ opacity: 0, scale: 1.1 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.8 }}
                      src={currentItem.gallery?.[currentImageIndex] || currentItem.src}
                      alt={currentItem.alt}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  
                  {currentItem.gallery && currentItem.gallery.length > 1 && (
                    <div className="absolute inset-y-0 inset-x-4 flex items-center justify-between">
                      <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i => i === 0 ? currentItem.gallery!.length - 1 : i - 1) }} className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                        <ChevronLeft size={24} />
                      </button>
                      <button onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(i => i === currentItem.gallery!.length - 1 ? 0 : i + 1) }} className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all">
                        <ChevronRight size={24} />
                      </button>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="font-serif text-2xl text-foreground italic">{currentItem.caption}</h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioDialog;
