import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import SampleMenusDialog from "./SampleMenusDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const mainNavLinks = [
  { name: "Plan Your Experience", href: "#experience" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

const servicesLinks = [
  { name: "Events", href: "#events" },
  { name: "Corporate", href: "#corporate" },
  { name: "Weddings", href: "#weddings" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Text Logo */}
          <a href="/" className="font-serif text-2xl tracking-wide text-foreground">
            Maison Cuisine
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <a
              href="#experience"
              className="nav-link text-foreground/80 hover:text-foreground text-sm"
            >
              Plan Your Experience
            </a>
            
            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="nav-link text-foreground/80 hover:text-foreground text-sm flex items-center gap-1 cursor-pointer">
                Services
                <ChevronDown size={14} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background border border-border shadow-lg z-50">
                {servicesLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <a
                      href={link.href}
                      className="cursor-pointer text-foreground/80 hover:text-foreground"
                    >
                      {link.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <a
              href="#about"
              className="nav-link text-foreground/80 hover:text-foreground text-sm"
            >
              About
            </a>
            <a
              href="#contact"
              className="nav-link text-foreground/80 hover:text-foreground text-sm"
            >
              Contact
            </a>
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
              <a
                href="#experience"
                onClick={() => setIsOpen(false)}
                className="nav-link text-foreground/80 hover:text-foreground py-2"
              >
                Plan Your Experience
              </a>
              
              {/* Mobile Services Dropdown */}
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="nav-link text-foreground/80 hover:text-foreground py-2 text-left flex items-center gap-1"
              >
                Services
                <ChevronDown size={14} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 flex flex-col gap-2">
                  {servicesLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="nav-link text-foreground/60 hover:text-foreground py-1"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}

              <a
                href="#about"
                onClick={() => setIsOpen(false)}
                className="nav-link text-foreground/80 hover:text-foreground py-2"
              >
                About
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="nav-link text-foreground/80 hover:text-foreground py-2"
              >
                Contact
              </a>
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
