import gallery1 from "@/assets/gallery-1.jpg";
import gallery4 from "@/assets/gallery-4.jpg";

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Plan Your Experience
          </h2>
          <div className="section-divider mb-8" />
          <p className="body-elegant text-muted-foreground max-w-3xl mx-auto">
            Every event we curate is a unique reflection of your vision. From intimate 
            dinners to grand celebrations, we craft culinary experiences that leave 
            lasting impressions.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-serif text-foreground">
              A Personalized Approach
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              At Maison Cuisine, we believe that exceptional food is the heart of 
              every memorable event. Our team works closely with you to understand 
              your preferences, dietary requirements, and the atmosphere you wish 
              to create.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you envision a French-inspired soirée, a farm-to-table 
              celebration, or a fusion of global cuisines, we bring your culinary 
              dreams to life with precision and artistry.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary">✦</span>
                <span>Customized menus tailored to your taste</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✦</span>
                <span>Locally sourced, seasonal ingredients</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✦</span>
                <span>Full-service event coordination</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary">✦</span>
                <span>Expert beverage pairing recommendations</span>
              </li>
            </ul>
          </div>

          <div className="relative">
            <img
              src={gallery1}
              alt="Gourmet appetizers beautifully arranged"
              className="w-full h-[500px] object-cover rounded-sm shadow-lg"
            />
            <img
              src={gallery4}
              alt="Intimate dining experience"
              className="absolute -bottom-8 -left-8 w-48 h-48 object-cover rounded-sm shadow-xl border-4 border-background hidden lg:block"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
