import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroWedding from "@/assets/hero-wedding.jpg";
import eventsHero from "@/assets/events-hero.jpg";

interface MenuItemProps {
  name: string;
  description?: string;
}

const MenuItem = ({ name, description }: MenuItemProps) => (
  <div className="py-3 text-center">
    <span className="font-semibold text-foreground">{name}</span>
    {description && (
      <p className="text-muted-foreground text-sm mt-1">{description}</p>
    )}
  </div>
);

interface MenuSectionProps {
  title: string;
  items: MenuItemProps[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => (
  <div className="mb-12">
    <h3 className="font-serif text-xl md:text-2xl text-primary mb-6 tracking-wide text-center">
      {title}
    </h3>
    <div className="space-y-2">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </div>
  </div>
);

const cuisineImages = [
  { src: gallery1, alt: "Gourmet appetizers" },
  { src: gallery3, alt: "Dessert selection" },
  { src: gallery4, alt: "Fine dining" },
  { src: gallery2, alt: "Plated entrée" },
  { src: heroWedding, alt: "Elegant presentation" },
  { src: eventsHero, alt: "Culinary excellence" },
];

const menuData = {
  passedApps: [
    { name: "Tuna Poke Wontons", description: "Citrus shoyu, avocado purée, sesame" },
    { name: "Prosciutto Wrapped Mozzarella", description: "Fresh basil, aged balsamic" },
    { name: "Beef Tenderloin Skewers", description: "Herb chimichurri, micro greens" },
    { name: "Caprese Skewers", description: "Fresh mozzarella, cherry tomato, basil" },
    { name: "Smoked Salmon Crostini", description: "Dill cream cheese, capers, red onion" },
    { name: "Mushroom Arancini", description: "Truffle aioli, parmesan" },
    { name: "Mini Brie Grilled Cheese", description: "Butternut squash bisque shooter" },
  ],
  platedDinners: [
    { name: "Roasted Bone-In Chicken Breast", description: "Lemon dijon beurre blanc, garlic mashed potatoes, French green beans" },
    { name: "Braised Short Rib", description: "Peppercorn demi, garlic mashed potatoes, rainbow carrots" },
    { name: "Pan Seared Salmon", description: "Citrus herb butter, wild rice pilaf, asparagus" },
    { name: "Filet Mignon", description: "Red wine reduction, truffle mashed potatoes, broccolini" },
    { name: "Butternut Squash Risotto", description: "Fresh sage, parmesan crisp (Vegan option available)" },
  ],
  stations: [
    { name: "Carving Station", description: "Prime rib, herb-crusted tenderloin, honey glazed ham" },
    { name: "Pasta Station", description: "Made-to-order with choice of proteins and sauces" },
    { name: "Raw Bar", description: "Oysters, shrimp cocktail, ceviche, mignonette" },
    { name: "Mediterranean Station", description: "Hummus, baba ganoush, grilled vegetables, pita" },
    { name: "Cheese & Charcuterie", description: "Artisan cheeses, cured meats, seasonal accompaniments" },
  ],
  desserts: [
    { name: "Lemon Lavender Cookies" },
    { name: "Tres Leches Cupcakes" },
    { name: "Chocolate Truffles" },
    { name: "French Macarons" },
    { name: "Fruit Tartlets" },
    { name: "Espresso Brownies" },
    { name: "Crème Brûlée Shooters" },
  ],
  lateNight: [
    { name: "Artisan Pizza Station", description: "Wood-fired, passed in paper boats" },
    { name: "Slider Bar", description: "Beef, chicken, and veggie options" },
    { name: "Taco Cart", description: "Street-style with all the fixings" },
    { name: "Hot Dog Stand", description: "Gourmet dogs with premium toppings" },
  ],
};

const Menus = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 tracking-wide">
            Menus
          </h1>
          <div className="section-divider mb-8 mx-auto" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Every menu is crafted to reflect your unique vision. These selections represent 
            our culinary philosophy — fresh, seasonal, and always exceptional.
          </p>
        </div>
      </section>

      {/* Cuisine Highlights Strip */}
      <section className="py-8 overflow-hidden">
        <div className="flex gap-4 animate-scroll">
          {cuisineImages.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-48 h-32 md:w-64 md:h-40 overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
          {/* Duplicate for seamless scroll */}
          {cuisineImages.map((image, index) => (
            <div
              key={`dup-${index}`}
              className="flex-shrink-0 w-48 h-32 md:w-64 md:h-40 overflow-hidden"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Menu Sections */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          {/* Passed Appetizers */}
          <MenuSection title="PASSED APPETIZERS" items={menuData.passedApps} />
          
          <Separator className="my-12 bg-primary/20 max-w-xs mx-auto" />
          
          {/* Plated Dinners */}
          <MenuSection title="PLATED DINNERS" items={menuData.platedDinners} />
          
          <Separator className="my-12 bg-primary/20 max-w-xs mx-auto" />
          
          {/* Stations */}
          <MenuSection title="STATIONS" items={menuData.stations} />
          
          <Separator className="my-12 bg-primary/20 max-w-xs mx-auto" />
          
          {/* Desserts */}
          <div className="mb-12">
            <h3 className="font-serif text-xl md:text-2xl text-primary mb-6 tracking-wide text-center">
              DESSERTS
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {menuData.desserts.map((item, index) => (
                <span key={index} className="text-foreground px-3 py-1">
                  {item.name}
                  {index < menuData.desserts.length - 1 && (
                    <span className="text-muted-foreground ml-4">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
          
          <Separator className="my-12 bg-primary/20 max-w-xs mx-auto" />
          
          {/* Late Night */}
          <MenuSection title="LATE NIGHT" items={menuData.lateNight} />

          {/* CTA */}
          <div className="text-center mt-16 pt-12 border-t border-border/30">
            <p className="text-muted-foreground mb-6 italic">
              All menus are fully customizable to accommodate dietary restrictions and preferences.
            </p>
            <a
              href="/#experience"
              className="btn-elegant inline-block"
            >
              Plan Your Experience
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Menus;
