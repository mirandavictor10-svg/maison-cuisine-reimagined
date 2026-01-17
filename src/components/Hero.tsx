import heroImage from "@/assets/hero-wedding.jpg";
import QuestionnaireDialog from "./QuestionnaireDialog";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1 className="heading-display text-white mb-8 animate-fade-up drop-shadow-lg">
          Your Wedding with<br />Maison Cuisine
        </h1>
        
        <p className="body-elegant text-white/95 max-w-3xl mb-6 opacity-0 animate-fade-up drop-shadow-md" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          Our wedding packages are built from the ground up and uniquely tailored to each couple. 
          Maison Cuisine is committed to making your wedding day dreams a reality. We collaborate 
          with a wide range of venues, purveyors, and top industry professionals to curate a 
          one-of-a-kind food and beverage experience for your wedding, rehearsal dinner, or both.
        </p>
        
        <p className="body-elegant text-white/90 max-w-2xl mb-10 opacity-0 animate-fade-up drop-shadow-md" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
          Our Executive Chef works directly with you and your planner from day one to execution, 
          providing personal attention to even the smallest detail.
        </p>

        <p className="text-white/80 mb-6 text-sm tracking-wide uppercase opacity-0 animate-fade-up" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
          To begin the conversation, please complete this brief questionnaire.
        </p>

        <QuestionnaireDialog>
          <button 
            className="btn-hero opacity-0 animate-fade-up"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            Open Questionnaire
          </button>
        </QuestionnaireDialog>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-white/40" />
      </div>
    </section>
  );
};

export default Hero;
