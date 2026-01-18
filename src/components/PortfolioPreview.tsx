import { Link } from "react-router-dom";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import eventsHero from "@/assets/events-hero.jpg";

const previewImages = [
  { src: heroWedding, alt: "Wedding reception", category: "Events" },
  { src: gallery1, alt: "Gourmet appetizers", category: "Cuisine" },
  { src: gallery2, alt: "Elegant venue", category: "Venues" },
  { src: gallery3, alt: "Dessert display", category: "Cuisine" },
  { src: eventsHero, alt: "Corporate gala", category: "Events" },
  { src: gallery4, alt: "Private dining", category: "Venues" },
];

const PortfolioPreview = () => {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">Portfolio</h2>
          <div className="section-divider mb-8" />
          <p className="body-elegant text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the unforgettable experiences we've had the honor of creating.
          </p>
        </div>

        {/* Preview Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {previewImages.map((image, index) => (
            <Link
              key={index}
              to="/portfolio"
              className="group relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">{image.category}</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/portfolio" className="btn-elegant inline-block">
            View Full Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
