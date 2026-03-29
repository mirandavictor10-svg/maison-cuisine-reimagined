import { motion } from "framer-motion";
import gallery2 from "@/assets/gallery-2.jpg";

const CorporateSection = () => {
  return (
    <section id="corporate" className="py-32 lg:py-48 bg-background overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="shadow-2xl overflow-hidden rounded-sm"
          >
            <img
              src={gallery2}
              alt="Sophisticated corporate gathering"
              className="w-full h-[600px] object-cover transition-transform duration-[3s] hover:scale-110"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6 block">Corporate</span>
            <h2 className="heading-section text-foreground mb-10">
              Professional <br /> <span className="italic">Excellence</span>
            </h2>
            <div className="section-divider mb-12 mx-0" />
            
            <p className="body-elegant text-muted-foreground mb-10">
              Elevate your corporate events with culinary experiences that command 
              attention and reflect your brand's commitment to quality.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-10">
              {[
                { title: "Gala Dinners", desc: "Formal seated service with precision." },
                { title: "Product Launches", desc: "Innovative catering that sparks conversation." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  className="space-y-3"
                >
                  <h4 className="font-serif text-xl text-foreground italic">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSection;
