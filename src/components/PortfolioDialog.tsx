import { useState, ReactNode } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
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
  gallery?: string[];
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    src: heroWedding,
    alt: "Black-tie wedding reception",
    category: "events",
    caption: "Black-tie wedding reception — 220 guests",
    gallery: [heroWedding, gallery1, gallery4],
  },
  {
    id: 2,
    src: gallery1,
    alt: "Gourmet appetizers",
    category: "cuisine",
    caption: "Artisanal passed appetizers — seasonal ingredients",
    gallery: [gallery1, gallery3],
  },
  {
    id: 3,
    src: eventsHero,
    alt: "Corporate gala",
    category: "events",
    caption: "Corporate gala — downtown Chicago",
    gallery: [eventsHero, gallery2],
  },
  {
    id: 4,
    src: gallery3,
    alt: "Dessert display",
    category: "cuisine",
    caption: "Curated dessert experience — artisan selections",
    gallery: [gallery3, gallery1],
  },
  {
    id: 5,
    src: gallery4,
    alt: "Private dining experience",
    category: "events",
    caption: "Private dinner experience — intimate gathering",
    gallery: [gallery4, heroWedding],
  },
  {
    id: 6,
    src: chefPortrait,
    alt: "Chef preparing cuisine",
    category: "cuisine",
    caption: "Executive Chef crafting seasonal plates",
    gallery: [chefPortrait, gallery1],
  },
  {
    id: 7,
    src: fairlie1,
    alt: "The Fairlie venue",
    category: "venues",
    caption: "The Fairlie",
    gallery: [fairlie1, fairlie2, fairlie3],
  },
  {
    id: 8,
    src: loftLucia1,
    alt: "Loft Lucia venue",
    category: "venues",
    caption: "Loft Lucia",
    gallery: [loftLucia1, loftLucia2],
  },
  {
    id: 9,
    src: sarabande3,
    alt: "Sarabande venue",
    category: "venues",
    caption: "Sarabande",
    gallery: [sarabande1, sarabande2, sarabande3],
  },
  {
    id: 10,
    src: greenhouse1,
    alt: "GreenHouse Loft venue",
    category: "venues",
    caption: "GreenHouse Loft",
    gallery: [greenhouse1, greenhouse2, greenhouse3],
  },
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

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const openLightbox = (item: PortfolioItem) => {
    setCurrentItem(item);
    setCurrentImageIndex(0);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentItem(null);
  };

  const nextImage = () => {
    if (currentItem?.gallery) {
      setCurrentImageIndex((prev) =>
        prev === currentItem.gallery!.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (currentItem?.gallery) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? currentItem.gallery!.length - 1 : prev - 1
      );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-6xl w-[95vw] h-[90vh] p-0 overflow-hidden bg-background">
        <div className="h-full flex flex-col overflow-hidden">
          {/* Header */}
          <div className="px-6 py-8 text-center border-b border-border/30">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-2">
              Our Portfolio
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm">
              Explore our curated collection of events, culinary creations, and exceptional venues
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="py-4 border-b border-border/30 flex-shrink-0">
            <div className="flex justify-center gap-2 md:gap-6">
              {filterTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-2 font-serif text-sm tracking-wide transition-all duration-300 border-b-2 ${
                    activeFilter === tab.id
                      ? "border-primary text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Portfolio Grid */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  onClick={() => openLightbox(item)}
                  className="group relative aspect-[4/3] overflow-hidden cursor-pointer rounded-sm"
                >
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                  <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-sm font-medium">{item.caption}</p>
                  </div>
                  {item.category === "venues" && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                      <p className="text-white text-sm">{item.caption}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && currentItem && (
          <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-50"
            >
              <X size={32} />
            </button>

            {currentItem.gallery && currentItem.gallery.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors z-50"
                >
                  <ChevronLeft size={48} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors z-50"
                >
                  <ChevronRight size={48} />
                </button>
              </>
            )}

            <div className="max-w-5xl max-h-[80vh] mx-4">
              <img
                src={currentItem.gallery?.[currentImageIndex] || currentItem.src}
                alt={currentItem.alt}
                className="max-w-full max-h-[70vh] object-contain mx-auto"
              />
              <p className="text-white text-center mt-6 font-serif text-lg">
                {currentItem.caption}
              </p>
              {currentItem.gallery && currentItem.gallery.length > 1 && (
                <div className="flex justify-center gap-2 mt-4">
                  {currentItem.gallery.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        idx === currentImageIndex ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default PortfolioDialog;
