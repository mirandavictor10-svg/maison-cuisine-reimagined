import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MenuSectionProps {
  title: string;
  items: string[];
  note?: string;
}

const MenuSection = ({ title, items, note }: MenuSectionProps) => (
  <div className="mb-8 text-center">
    <h3 className="text-lg font-serif tracking-widest uppercase mb-4 text-foreground">
      {title}
    </h3>
    <div className="space-y-2">
      {items.map((item, index) => (
        <p key={index} className="text-foreground/70 text-sm leading-relaxed">
          {item}
        </p>
      ))}
    </div>
    {note && (
      <p className="text-foreground/50 text-xs italic mt-3">{note}</p>
    )}
  </div>
);

interface SampleMenusDialogProps {
  children: React.ReactNode;
}

const SampleMenusDialog = ({ children }: SampleMenusDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[85vh] p-0 bg-background border border-border">
        <DialogHeader className="px-8 pt-8 pb-4 border-b border-border/30">
          <p className="text-center font-serif text-2xl tracking-wide text-foreground">
            Maison Cuisine
          </p>
          <DialogTitle className="text-center font-serif text-lg tracking-widest uppercase text-foreground/70 pt-2">
            Sample Menus
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="wedding" className="w-full">
          <TabsList className="w-full justify-center gap-4 bg-transparent border-b border-border/30 rounded-none h-auto py-4">
            <TabsTrigger
              value="wedding"
              className="text-xs uppercase tracking-widest data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none pb-2"
            >
              Plated Dinner
            </TabsTrigger>
            <TabsTrigger
              value="buffet"
              className="text-xs uppercase tracking-widest data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none pb-2"
            >
              Buffet Style
            </TabsTrigger>
            <TabsTrigger
              value="corporate"
              className="text-xs uppercase tracking-widest data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-foreground rounded-none pb-2"
            >
              Corporate
            </TabsTrigger>
          </TabsList>

          <ScrollArea className="h-[55vh]">
            {/* Menu 1: Plated Dinner (Wedding/Formal) */}
            <TabsContent value="wedding" className="px-8 py-6 mt-0">
              <MenuSection
                title="Passed Appetizers"
                items={[
                  "Tuna Poke | Wontons | Citrus Shoyu | Avocado Puree",
                  "Prosciutto Wrapped Mozzarella | Fresh Basil",
                  "Beef Tenderloin Skewers | Herb Chimichurri",
                  "Vegan Loaded Potato Bites | Plant Based Chorizo & Cheese | Cilantro Crema",
                  "Mini Brie Grilled Cheese | Butternut Squash Bisque Soup Shooters",
                ]}
              />

              <MenuSection
                title="First Course"
                items={[
                  "Harvest Salad | Spring Mix | Candied Pecan | Dried Cherry | Goat Cheese | Balsamic Vinaigrette",
                  "Artisan Rolls and Focaccia | Truffle Butter",
                ]}
              />

              <MenuSection
                title="Plated Entrée"
                items={[
                  "Roasted Bone In Chicken Breast | Lemon Dijon Beurre Blanc | Garlic Mashed Potatoes | French Green Beans (GF)",
                  "— Or —",
                  "Braised Short Rib | Peppercorn Demi | Garlic Mashed Potatoes | Rainbow Carrots (GF)",
                  "— Or —",
                  "Butternut Squash Risotto | Fresh Sage (Vegan/GF)",
                ]}
              />

              <MenuSection
                title="Mini Desserts"
                items={[
                  "Lemon Lavender Cookies | Tres Leches Cupcakes | Carrot Cake Cupcakes",
                ]}
              />

              <MenuSection
                title="Coffee & Tea Station"
                items={[
                  "Regular | Decaf | Assorted Sweeteners | Cream",
                ]}
              />

              <MenuSection
                title="Late Night"
                items={[
                  "Pizza to be delivered (Maison to pass in paper boats, then set on station)",
                ]}
              />
            </TabsContent>

            {/* Menu 2: Buffet Style */}
            <TabsContent value="buffet" className="px-8 py-6 mt-0">
              <MenuSection
                title="Passed Appetizers"
                items={[
                  "Bruschetta | Heirloom Tomato | Basil | Fresh Mozzarella | Balsamic Glaze",
                  "Mini Burgers | Cheddar | Herb Aioli",
                  "Brie Tarts | Slivered Almonds",
                ]}
              />

              <MenuSection
                title="Buffet Entrée"
                items={[
                  "Harvest Salad | Spring Mix | Candied Pecan | Dried Cherry | Goat Cheese | Balsamic Vinaigrette",
                  "Artisan Rolls and Focaccia | Truffle Butter",
                  "Grilled Chicken Breast | Marsala Cream Sauce | Mushrooms & Prosciutto",
                  "Seared & Sliced Beef Tenderloin | Roasted Shallot Demi",
                  "Grilled Vegetables | Bed of Quinoa | Drizzled with Balsamic Glaze",
                ]}
                note="*We will provide all chafers, platters, bowls & serving utensils for station"
              />

              <MenuSection
                title="Mini Desserts"
                items={[
                  "Kahlua Brownies | S'mores Cookies | Carrot Cake Cupcakes | Chocolate Raspberry Tarts",
                ]}
              />
            </TabsContent>

            {/* Menu 3: Corporate Event */}
            <TabsContent value="corporate" className="px-8 py-6 mt-0">
              <MenuSection
                title="Appetizer Station"
                items={[
                  "Charcuterie Display | Cured Meat | Imported Cheese | Berries & Grapes | Flatbread & Crackers | Marinated Olives",
                  "Mini Burgers with Sharp Cheddar & Pesto Aioli",
                  "Mini Lamb Meatballs | Tzatziki (GF)",
                  "Beef Tenderloin Skewers (GF/DF)",
                  '"Table" Truffle Fries with Freshly Grated Parmesan & Parsley (GF/V)',
                  "Crab Cakes with Herbed Aioli (GF)",
                  "Grilled Cheese Triangles | Shooter of Roasted Tomato Bisque (V)",
                ]}
                note="*Maison to provide bamboo plates & small napkins"
              />

              <MenuSection
                title="Mini Desserts"
                items={[
                  "Tiramisu Shooters",
                  "Kahlua Brownies (GF/DF)",
                  "Apple Pie Tartlettes",
                ]}
              />
            </TabsContent>
          </ScrollArea>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
};

export default SampleMenusDialog;
