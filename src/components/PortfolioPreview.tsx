import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import eventsHero from "@/assets/events-hero.jpg";

const previewImages = [
  { src: heroWedding, alt: "Wedding reception", category: "Events", size: "col-span-12 md:col-span-8 aspect-[16/9]" },
  { src: gallery1, alt: "Gourmet appetizers", category: "Cuisine", size: "col-span-12 md:col-span-4 aspect-square" },
  { src: gallery2, alt: "Elegant venue", category: "Venues", size: "col-span-12 md:col-span-4 aspect-square" },
  { src: gallery4, alt: "Private dining", category: "Venues", size: "col-span-12 md:col-span-8 aspect-[16/9]" },
  { src: gallery3, alt: "Dessert display", category: "Cuisine", size: "col-span-12 md:col-span-7 aspect-[4/3]" },
  { src: eventsHero, alt: "Corporate gala", category: "Events", size: "col-span-12 md:col-span-5 aspect-square" },
];

const PortfolioPreview = () => {
  return (
    <section className="py-32 lg:py-48 bg-background overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6 block">The Work</span>
          <h2 className="heading-section text-foreground mb-10">Curated Moments</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid grid-cols-12 gap-6 md:gap-10 lg:gap-16">
          {previewImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 1.2, 
                delay: index * 0.1, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className={`${image.size} group relative overflow-hidden bg-muted/20`}
            >
              <Link to="/portfolio" className="block w-full h-full">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-8 flex flex-col justify-end">
                  <span className="nav-link text-white mb-2">{image.category}</span>
                  <p className="text-white/60 text-xs tracking-widest uppercase">{image.alt}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mt-24 md:mt-32"
        >
          <Link to="/portfolio" className="btn-elegant">
            Explore Full Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
