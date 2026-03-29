import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SampleMenusDialog from "./SampleMenusDialog";
import PortfolioDialog from "./PortfolioDialog";

const servicesLinks = [
  { name: "Weddings", href: "/#weddings" },
  { name: "Corporate", href: "/#corporate" },
  { name: "Private Events", href: "/#events" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const hash = href.replace("/", "");
    
    if (location.pathname === "/") {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate("/" + hash);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40 py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className={`font-serif text-2xl tracking-[0.1em] transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            MAISON CUISINE
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {["Plan Your Experience", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase().replace(/ /g, "")}`}
                onClick={(e) => {
                  if (location.pathname === "/") {
                    e.preventDefault();
                    handleNavClick(`/#${item.toLowerCase().replace(/ /g, "")}`);
                  }
                }}
                className={`nav-link hover:text-primary ${
                  scrolled ? "text-foreground/70" : "text-white/80"
                }`}
              >
                {item}
              </a>
            ))}

            <DropdownMenu open={servicesOpen} onOpenChange={setServicesOpen}>
              <DropdownMenuTrigger 
                className={`nav-link flex items-center gap-2 cursor-pointer outline-none ${
                  scrolled ? "text-foreground/70" : "text-white/80"
                }`}
              >
                Services
                <ChevronDown size={12} className={`transition-transform duration-500 ${servicesOpen ? "rotate-180" : ""}`} />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-background/95 backdrop-blur-xl border border-border/40 shadow-2xl p-2 min-w-[200px] z-50">
                {servicesLinks.map((link) => (
                  <DropdownMenuItem key={link.name} asChild>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (location.pathname === "/") {
                          e.preventDefault();
                          handleNavClick(link.href);
                        }
                        setServicesOpen(false);
                      }}
                      className="cursor-pointer nav-link px-4 py-3 block hover:bg-primary/5 rounded-sm"
                    >
                      {link.name}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <PortfolioDialog>
              <button className={`nav-link ${scrolled ? "text-foreground/70" : "text-white/80"}`}>
                Portfolio
              </button>
            </PortfolioDialog>

            <SampleMenusDialog>
              <button className={`nav-link ${scrolled ? "text-foreground/70" : "text-white/80"}`}>
                Menus
              </button>
            </SampleMenusDialog>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors duration-500 ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="lg:hidden overflow-hidden bg-background/95 backdrop-blur-2xl mt-4 rounded-lg border border-border/40"
            >
              <div className="flex flex-col p-8 gap-6">
                {["Plan Your Experience", "About", "Contact", "Portfolio", "Menus"].map((item) => (
                  <a
                    key={item}
                    href={`/#${item.toLowerCase().replace(/ /g, "")}`}
                    onClick={(e) => {
                      if (location.pathname === "/") e.preventDefault();
                      handleNavClick(`/#${item.toLowerCase().replace(/ /g, "")}`);
                    }}
                    className="nav-link text-foreground/80 text-lg border-b border-border/20 pb-2"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
