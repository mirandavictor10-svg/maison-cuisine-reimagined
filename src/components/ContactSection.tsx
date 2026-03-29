import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you shortly.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", val: "hello@maisoncuisine.com", href: "mailto:hello@maisoncuisine.com" },
    { icon: Phone, label: "Phone", val: "(555) 123-4567", href: "tel:+15551234567" },
    { icon: MapPin, label: "Location", val: "Greater Chicago Area", href: "#" },
  ];

  return (
    <section id="contact" className="py-32 lg:py-48 bg-secondary/20 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-24 md:mb-32"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase text-primary mb-6 block">Contact</span>
          <h2 className="heading-section text-foreground mb-10">Get in Touch</h2>
          <div className="section-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-12"
          >
            <div>
              <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-8 italic">
                Let's Create Something <br /> Beautiful
              </h3>
              <p className="body-elegant text-muted-foreground">
                Whether you have a clear vision or are just beginning to dream, 
                we're here to guide you through every step of the planning process.
              </p>
            </div>

            <div className="grid sm:grid-cols-1 gap-10">
              {contactInfo.map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="flex items-start gap-6 group"
                >
                  <div className="w-14 h-14 bg-background border border-border/40 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-primary/5 transition-colors duration-500">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground mb-1">{item.label}</h4>
                    <a href={item.href} className="text-foreground hover:text-primary transition-colors font-serif text-xl">
                      {item.val}
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="bg-background p-10 md:p-16 rounded-sm shadow-2xl border border-border/10"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-3">
                <Label htmlFor="contact-name" className="text-[10px] tracking-[0.2em] uppercase">Name *</Label>
                <Input
                  id="contact-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-transparent border-0 border-b border-border/40 rounded-none focus:border-primary px-0 transition-all duration-500 h-12"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label htmlFor="contact-email" className="text-[10px] tracking-[0.2em] uppercase">Email *</Label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-0 border-b border-border/40 rounded-none focus:border-primary px-0 transition-all duration-500 h-12"
                  />
                </div>
                <div className="space-y-3">
                  <Label htmlFor="contact-phone" className="text-[10px] tracking-[0.2em] uppercase">Phone</Label>
                  <Input
                    id="contact-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-transparent border-0 border-b border-border/40 rounded-none focus:border-primary px-0 transition-all duration-500 h-12"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <Label htmlFor="contact-message" className="text-[10px] tracking-[0.2em] uppercase">Message *</Label>
                <Textarea
                  id="contact-message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your event..."
                  className="min-h-[120px] bg-transparent border-0 border-b border-border/40 rounded-none focus:border-primary px-0 transition-all duration-500 resize-none pt-4"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-elegant mt-8"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
