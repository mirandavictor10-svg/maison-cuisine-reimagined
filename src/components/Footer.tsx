import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/10 py-24 lg:py-32 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 pb-20 border-b border-border/30">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <Link to="/" className="font-serif text-3xl tracking-widest text-foreground block mb-8">
              MAISON <br /> CUISINE
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Crafting bespoke culinary experiences for life's most extraordinary moments.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-primary mb-8 block">Navigation</h4>
            <ul className="space-y-4">
              {["Experience", "Services", "Portfolio", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link to="/" className="nav-link text-foreground/70 hover:text-primary transition-colors duration-500">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-primary mb-8 block">Social</h4>
            <ul className="space-y-4">
              {["Instagram", "Facebook", "Pinterest", "LinkedIn"].map((item) => (
                <li key={item}>
                  <a href="#" className="nav-link text-foreground/70 hover:text-primary transition-colors duration-500">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-[10px] tracking-[0.3em] uppercase text-primary mb-8 block">Stay Notified</h4>
            <p className="text-sm text-muted-foreground mb-6">Receive seasonal updates and menu previews.</p>
            <div className="flex border-b border-border/50 py-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="bg-transparent border-none text-[10px] tracking-widest text-foreground placeholder:text-muted-foreground outline-none w-full"
              />
              <button className="nav-link hover:text-primary transition-colors text-primary">Join</button>
            </div>
          </motion.div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] tracking-[0.2em] text-muted-foreground uppercase text-center md:text-left">
            © {new Date().getFullYear()} Maison Cuisine. All Rights Reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] tracking-[0.2em] text-muted-foreground hover:text-primary uppercase transition-colors duration-500">Privacy Policy</a>
            <a href="#" className="text-[10px] tracking-[0.2em] text-muted-foreground hover:text-primary uppercase transition-colors duration-500">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
