import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const ExperienceSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imgParallax = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  const listItems = [
    "Customized menus tailored to your taste",
    "Locally sourced, seasonal ingredients",
    "Full-service event coordination",
    "Expert beverage pairing recommendations",
  ];

  return (
    <section ref={containerRef} id="experience" className="py-32 lg:py-48 bg-background overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6 block">The Service</span>
          <h2 className="heading-section text-foreground mb-10">Plan Your Experience</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-10"
          >
            <h3 className="text-3xl md:text-4xl font-serif text-foreground leading-tight italic">
              A Personalized <br /> Approach
            </h3>
            <div className="space-y-6 text-muted-foreground body-elegant">
              <p>
                At Maison Cuisine, we believe that exceptional food is the heart of 
                every memorable event. Our team works closely with you to understand 
                your preferences and the atmosphere you wish to create.
              </p>
              <p>
                Whether you envision a French-inspired soirée or a farm-to-table 
                celebration, we bring your dreams to life with precision and artistry.
              </p>
            </div>
            
            <ul className="space-y-6">
              {listItems.map((item, i) => (
                <motion.li 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4 text-xs tracking-[0.15em] uppercase text-foreground/80 group"
                >
                  <span className="w-8 h-px bg-primary/40 group-hover:w-12 transition-all duration-500" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl"
            >
              <img
                src={gallery1}
                alt="Gourmet appetizers beautifully arranged"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              style={{ y: imgParallax }}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-16 -left-16 w-56 h-56 md:w-72 md:h-72 aspect-square overflow-hidden rounded-sm shadow-2xl border-8 border-background hidden lg:block"
            >
              <img
                src={gallery4}
                alt="Intimate dining experience"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
