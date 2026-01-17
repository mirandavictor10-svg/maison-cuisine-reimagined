import { Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-3xl mb-4">Maison Cuisine</h3>
            <p className="text-background/70 leading-relaxed">
              Crafting unforgettable culinary experiences for your most cherished celebrations.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-background/50">Navigate</h4>
            <nav className="flex flex-col gap-3">
              <a href="#experience" className="text-background/70 hover:text-background transition-colors">Plan Your Experience</a>
              <a href="#events" className="text-background/70 hover:text-background transition-colors">Events</a>
              <a href="#weddings" className="text-background/70 hover:text-background transition-colors">Weddings</a>
              <a href="#about" className="text-background/70 hover:text-background transition-colors">About</a>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-widest mb-6 text-background/50">Contact</h4>
            <div className="flex flex-col gap-4">
              <a href="mailto:hello@maisoncuisine.com" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Mail size={18} />
                hello@maisoncuisine.com
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Phone size={18} />
                +1 (555) 123-4567
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-background/70 hover:text-background transition-colors">
                <Instagram size={18} />
                @maisoncuisine
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <p className="text-background/50 text-sm text-center">
            © {new Date().getFullYear()} Maison Cuisine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
