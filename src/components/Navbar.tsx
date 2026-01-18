import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/maison-logo.png";
import SampleMenusDialog from "./SampleMenusDialog";

const navLinks = [
  { name: "Plan Your Experience", href: "#experience" },
  { name: "Events", href: "#events" },
  { name: "Corporate", href: "#corporate" },
  { name: "Weddings", href: "#weddings" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3">
            <img src={logo} alt="Maison Cuisine" className="h-14" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="nav-link text-foreground/80 hover:text-foreground text-sm"
              >
                {link.name}
              </a>
            ))}
            <SampleMenusDialog>
              <button className="nav-link text-foreground/80 hover:text-foreground text-sm cursor-pointer">
                Sample Menus
              </button>
            </SampleMenusDialog>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="nav-link text-foreground/80 hover:text-foreground py-2"
                >
                  {link.name}
                </a>
              ))}
              <SampleMenusDialog>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="nav-link text-foreground/80 hover:text-foreground py-2 text-left cursor-pointer"
                >
                  Sample Menus
                </button>
              </SampleMenusDialog>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
