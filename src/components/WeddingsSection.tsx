import heroWedding from "@/assets/hero-wedding.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import QuestionnaireDialog from "./QuestionnaireDialog";

const WeddingsSection = () => {
  const features = [
    "Personalized menu consultations with our Executive Chef",
    "Tastings and menu refinement sessions",
    "Day-of coordination with your planner",
    "Full bar and beverage service options",
    "Rehearsal dinner packages available",
    "Dietary accommodation expertise",
  ];

  return (
    <section id="weddings" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-section text-foreground mb-6">
            Wedding Celebrations
          </h2>
          <div className="section-divider mb-8" />
          <p className="body-elegant text-muted-foreground max-w-3xl mx-auto">
            Your wedding day deserves nothing less than extraordinary. We create 
            bespoke culinary experiences that become a cherished part of your love story.
          </p>
        </div>

        {/* Images Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <img
            src={heroWedding}
            alt="Elegant wedding table setting"
            className="w-full h-[400px] object-cover rounded-sm shadow-lg"
          />
          <img
            src={gallery3}
            alt="Wedding dessert display"
            className="w-full h-[400px] object-cover rounded-sm shadow-lg"
          />
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif text-foreground mb-6">
              From Vision to Reality
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our Executive Chef works directly with you and your wedding planner 
              from the initial consultation through execution, ensuring every detail 
              reflects your unique story and style.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              We collaborate with premier venues throughout the region and partner 
              with the finest purveyors to source exceptional ingredients for your 
              celebration.
            </p>
            
            <QuestionnaireDialog>
              <button className="btn-elegant">
                Start Planning Your Wedding
              </button>
            </QuestionnaireDialog>
          </div>

          <div className="bg-background p-8 rounded-sm shadow-sm">
            <h4 className="font-serif text-xl text-foreground mb-6">
              What's Included
            </h4>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">✦</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeddingsSection;
