import { motion } from "framer-motion";
import heroWedding from "@/assets/hero-wedding.jpg";

const WeddingsSection = () => {
  return (
    <section id="weddings" className="py-32 lg:py-48 bg-background overflow-hidden border-t border-border/10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6 block">Weddings</span>
            <h2 className="heading-section text-foreground mb-10">
              Unforgettable <br /> <span className="italic">Beginnings</span>
            </h2>
            <div className="section-divider mb-12 mx-0" />
            
            <p className="body-elegant text-muted-foreground mb-10">
              Your wedding is a once-in-a-lifetime celebration. We craft bespoke 
              menus and experiences that reflect your unique love story.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Bespoke Menus", desc: "Custom-curated culinary journeys." },
                { title: "Full Service", desc: "From table settings to beverage pairings." },
                { title: "Venue Planning", desc: "Coordinating perfectly with your chosen space." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  className="group"
                >
                  <h4 className="font-serif text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-500">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 shadow-2xl overflow-hidden rounded-sm"
          >
            <img
              src={heroWedding}
              alt="Beautifully set wedding table"
              className="w-full h-[600px] object-cover transition-transform duration-[3s] hover:scale-110"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeddingsSection;
