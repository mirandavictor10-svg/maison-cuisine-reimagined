import { motion } from "framer-motion";
import eventsHero from "@/assets/events-hero.jpg";

const EventsSection = () => {
  return (
    <section id="events" className="py-32 lg:py-48 bg-background overflow-hidden border-b border-border/10">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 lg:order-1"
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6 block">Events</span>
            <h2 className="heading-section text-foreground mb-10">
              Bespoke <br /> <span className="italic">Celebrations</span>
            </h2>
            <div className="section-divider mb-12 mx-0" />
            
            <p className="body-elegant text-muted-foreground mb-10">
              From intimate private dinners to grand social soirées, we bring 
              personalized culinary artistry to life in any setting.
            </p>
            
            <div className="space-y-8">
              {[
                { title: "Private Dining", desc: "An exclusive restaurant experience in your home." },
                { title: "Social Gatherings", desc: "Fluid, engaging catering for any occasion." },
                { title: "Seasonal Soirées", desc: "Themed menus celebrating the year's best yields." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-6"
                >
                  <p className="font-serif text-3xl text-primary/30">0{i + 1}</p>
                  <div>
                    <h4 className="font-serif text-xl text-foreground italic">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 lg:order-2 shadow-2xl overflow-hidden rounded-sm"
          >
            <img
              src={eventsHero}
              alt="Elegant social event"
              className="w-full h-[600px] object-cover transition-transform duration-[3s] hover:scale-110"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
