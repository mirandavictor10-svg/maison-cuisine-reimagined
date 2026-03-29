import { motion } from "framer-motion";
import chefPortrait from "@/assets/chef-portrait.jpg";
import QuestionnaireDialog from "./QuestionnaireDialog";

const AboutSection = () => {
  return (
    <section id="about" className="py-32 lg:py-48 bg-background overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <img
              src={chefPortrait}
              alt="Executive Chef preparing a gourmet dish"
              className="w-full h-[600px] lg:h-[800px] object-cover rounded-sm shadow-2xl"
            />
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-10 rounded-sm hidden lg:block shadow-2xl"
            >
              <p className="font-serif text-2xl mb-1 italic">15+ Years</p>
              <p className="text-[10px] tracking-[0.2em] uppercase opacity-80">of Culinary Excellence</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6 block">Our Story</span>
            <h2 className="heading-section text-foreground mb-10">
              The Art of <br /> <span className="italic">Hospitality</span>
            </h2>
            <div className="section-divider mb-12 mx-0" />
            
            <div className="space-y-8 text-muted-foreground body-elegant mb-12">
              <p>
                Maison Cuisine was founded on a simple belief: that exceptional food 
                has the power to transform any gathering into an unforgettable experience.
              </p>
              
              <p className="text-base leading-relaxed font-sans">
                Our Executive Chef brings over 15 years of experience from some of the 
                world's finest kitchens to every event we curate. With a deep respect 
                for classic techniques and a passion for innovation, we honor 
                tradition while embracing modern culinary artistry.
              </p>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-3 gap-10 py-10 border-y border-border/40 mb-12"
            >
              {[
                { label: "Events", val: "500+" },
                { label: "Partners", val: "50+" },
                { label: "Satisfaction", val: "100%" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="font-serif text-3xl text-primary mb-2">{stat.val}</p>
                  <p className="text-[8px] tracking-[0.2em] uppercase text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            <QuestionnaireDialog>
              <button className="btn-elegant w-full sm:w-auto">
                Start Your Journey
              </button>
            </QuestionnaireDialog>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
