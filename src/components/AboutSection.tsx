import chefPortrait from "@/assets/chef-portrait.jpg";
import QuestionnaireDialog from "./QuestionnaireDialog";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Chef Portrait */}
          <div className="relative">
            <img
              src={chefPortrait}
              alt="Executive Chef preparing a gourmet dish"
              className="w-full h-[600px] object-cover rounded-sm shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-sm hidden lg:block">
              <p className="font-serif text-lg">15+ Years</p>
              <p className="text-sm opacity-90">of Culinary Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="heading-section text-foreground mb-6">
              Our Story
            </h2>
            <div className="section-divider mb-8 mx-0" />
            
            <p className="body-elegant text-muted-foreground mb-6">
              Maison Cuisine was founded on a simple belief: that exceptional food 
              has the power to transform any gathering into an unforgettable experience.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our Executive Chef brings over 15 years of experience from some of the 
              world's finest kitchens to every event we curate. With a deep respect 
              for classic techniques and a passion for innovation, we create menus 
              that honor tradition while embracing modern culinary artistry.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              From our carefully cultivated relationships with local farmers and 
              artisan producers to our meticulous attention to presentation, every 
              aspect of our service reflects our commitment to excellence.
            </p>

            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-border mb-8">
              <div className="text-center">
                <p className="font-serif text-3xl text-primary">500+</p>
                <p className="text-sm text-muted-foreground">Events Catered</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Venue Partners</p>
              </div>
              <div className="text-center">
                <p className="font-serif text-3xl text-primary">100%</p>
                <p className="text-sm text-muted-foreground">Satisfaction</p>
              </div>
            </div>

            <QuestionnaireDialog>
              <button className="btn-elegant">
                Start Your Journey
              </button>
            </QuestionnaireDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
