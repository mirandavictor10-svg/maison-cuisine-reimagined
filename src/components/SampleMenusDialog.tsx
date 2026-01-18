import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import logo from "@/assets/maison-logo.png";

interface MenuSectionProps {
  title: string;
  items: { name: string; description?: string }[];
}

const MenuSection = ({ title, items }: MenuSectionProps) => (
  <div className="mb-8">
    <h3 className="font-serif text-xl md:text-2xl text-primary mb-4 tracking-wide">
      {title}
    </h3>
    <div className="space-y-3">
      {items.map((item, index) => (
        <div key={index} className="text-center">
          <span className="font-semibold text-foreground">{item.name}</span>
          {item.description && (
            <span className="text-muted-foreground"> | {item.description}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

const SampleMenusDialog = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const weddingMenu = {
    passedApps: [
      { name: "Tuna Poke", description: "Wontons | Citrus Shoyu | Avocado Puree" },
      { name: "Prosciutto Wrapped Mozzarella", description: "Fresh Basil" },
      { name: "Beef Tenderloin Skewers", description: "Herb Chimichurri" },
      { name: "Vegan Loaded Potato Bites", description: "Plant based chorizo & cheese | Cilantro Crema" },
      { name: "Mini Brie Grilled Cheese", description: "Butternut Squash Bisque Soup Shooters | Crème Fraiche & Chives" },
    ],
    firstCourse: [
      { name: "Harvest Salad", description: "Spring Mix | Candied Pecan | Dried Cherry | Goat Cheese | Balsamic Vinaigrette" },
      { name: "Artisan Rolls And Focaccia", description: "Truffle Butter" },
    ],
    entree: [
      { name: "Roasted Bone In Chicken Breast", description: "Lemon Dijon Beurre Blanc | Garlic Mashed Potatoes | French Green Beans | GLUTEN FREE" },
      { name: "Braised Short Rib", description: "Peppercorn Demi | Garlic Mashed Potatoes | Rainbow Carrots | GLUTEN FREE" },
      { name: "Butternut Squash Risotto", description: "Fresh Sage | VEGAN/GLUTEN FREE" },
    ],
    dessert: [
      { name: "Mini Desserts", description: "Lemon Lavender Cookies | Tres Leches Cupcakes | Carrot Cake Cupcakes" },
    ],
    coffee: [
      { name: "Coffee & Tea Station", description: "Regular | Decaf | Assorted Sweeteners | Cream" },
    ],
    lateNight: [
      { name: "Late Night", description: "Pizza passed in paper boats, then set on station" },
    ],
  };

  const buffetMenu = {
    passedApps: [
      { name: "Bruschetta", description: "Heirloom Tomato | Basil | Fresh Mozzarella | Balsamic Glaze" },
      { name: "Mini Burgers", description: "Cheddar | Herb Aioli" },
      { name: "Brie Tarts", description: "Slivered Almonds" },
    ],
    buffet: [
      { name: "Harvest Salad", description: "Spring Mix | Candied Pecan | Dried Cherry | Goat Cheese | Balsamic Vinaigrette" },
      { name: "Artisan Rolls And Focaccia", description: "Truffle Butter" },
      { name: "Grilled Chicken Breast", description: "Marsala Cream Sauce | Mushrooms & Prosciutto" },
      { name: "Seared & Sliced Beef Tenderloin", description: "Roasted Shallot Demi" },
      { name: "Grilled Vegetables", description: "Bed of quinoa | Drizzled with balsamic glaze" },
    ],
    dessert: [
      { name: "Mini Desserts", description: "Kahlua brownies | S'mores cookies | Carrot cake cupcakes | Chocolate raspberry tarts" },
    ],
  };

  const corporateMenu = {
    passedApps: [
      { name: "Caprese Skewers", description: "Fresh Mozzarella | Cherry Tomato | Basil | Balsamic Reduction" },
      { name: "Smoked Salmon Crostini", description: "Dill Cream Cheese | Capers | Red Onion" },
      { name: "Mushroom Arancini", description: "Truffle Aioli | Parmesan" },
      { name: "Prosciutto Wrapped Figs", description: "Gorgonzola | Honey Drizzle" },
    ],
    dessert: [
      { name: "Mini Desserts", description: "Chocolate Truffles | Macarons | Fruit Tartlets | Espresso Brownies" },
    ],
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background">
        <DialogHeader className="text-center pb-4">
          <img src={logo} alt="Maison Cuisine" className="h-16 mx-auto mb-4" />
          <DialogTitle className="font-serif text-3xl tracking-wide">Sample Menus</DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="wedding" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-6">
            <TabsTrigger value="wedding" className="font-serif">Wedding Plated</TabsTrigger>
            <TabsTrigger value="buffet" className="font-serif">Buffet Style</TabsTrigger>
            <TabsTrigger value="corporate" className="font-serif">Corporate</TabsTrigger>
          </TabsList>

          <TabsContent value="wedding" className="text-center px-4 md:px-8">
            <p className="text-muted-foreground mb-6 italic">A complete plated dinner experience</p>
            <MenuSection title="PASSED APPETIZERS" items={weddingMenu.passedApps} />
            <Separator className="my-6 bg-primary/20" />
            <MenuSection title="FIRST COURSE" items={weddingMenu.firstCourse} />
            <Separator className="my-6 bg-primary/20" />
            <MenuSection title="PLATED ENTRÉE" items={weddingMenu.entree} />
            <p className="text-sm text-muted-foreground italic mb-6">Guests select one option</p>
            <Separator className="my-6 bg-primary/20" />
            <MenuSection title="MINI DESSERTS" items={weddingMenu.dessert} />
            <Separator className="my-6 bg-primary/20" />
            <MenuSection title="COFFEE & TEA STATION" items={weddingMenu.coffee} />
            <Separator className="my-6 bg-primary/20" />
            <MenuSection title="LATE NIGHT" items={weddingMenu.lateNight} />
          </TabsContent>

          <TabsContent value="buffet" className="text-center px-4 md:px-8">
            <p className="text-muted-foreground mb-6 italic">An elegant buffet experience</p>
            <MenuSection title="PASSED APPETIZERS" items={buffetMenu.passedApps} />
            <Separator className="my-6 bg-primary/20" />
            <MenuSection title="BUFFET ENTRÉE" items={buffetMenu.buffet} />
            <p className="text-sm text-muted-foreground italic mb-6">
              *We will provide all chafers, platters, bowls & serving utensils for station
            </p>
            <Separator className="my-6 bg-primary/20" />
            <MenuSection title="MINI DESSERTS" items={buffetMenu.dessert} />
          </TabsContent>

          <TabsContent value="corporate" className="text-center px-4 md:px-8">
            <p className="text-muted-foreground mb-6 italic">Perfect for corporate gatherings</p>
            <MenuSection title="PASSED APPETIZERS" items={corporateMenu.passedApps} />
            <Separator className="my-6 bg-primary/20" />
            <MenuSection title="MINI DESSERTS" items={corporateMenu.dessert} />
          </TabsContent>
        </Tabs>

        <div className="text-center mt-8 pt-4 border-t border-primary/20">
          <p className="text-muted-foreground text-sm">
            Danielle Wheeler | <a href="mailto:Danielle@MaisonCuisine.com" className="text-primary hover:underline">Danielle@MaisonCuisine.com</a> | 312.315.4479
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SampleMenusDialog;
