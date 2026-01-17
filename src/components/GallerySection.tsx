import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import eventsHero from "@/assets/events-hero.jpg";

const GallerySection = () => {
  const images = [
    { src: heroWedding, alt: "Elegant wedding table setting", span: "col-span-2 row-span-2" },
    { src: gallery1, alt: "Gourmet appetizers", span: "col-span-1 row-span-1" },
    { src: gallery2, alt: "Corporate dinner setting", span: "col-span-1 row-span-1" },
    { src: gallery3, alt: "Wedding dessert display", span: "col-span-1 row-span-2" },
    { src: eventsHero, alt: "Outdoor reception", span: "col-span-2 row-span-1" },
    { src: gallery4, alt: "Intimate dining experience", span: "col-span-1 row-span-1" },
  ];

  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Our Portfolio
          </h2>
          <div className="section-divider mb-8" />
          <p className="body-elegant text-muted-foreground max-w-2xl mx-auto">
            A glimpse into the unforgettable experiences we've had the honor of creating.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} overflow-hidden rounded-sm group cursor-pointer`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
