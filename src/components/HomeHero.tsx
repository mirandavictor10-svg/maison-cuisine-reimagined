import { Link } from "react-router-dom";
import heroWedding from "@/assets/hero-wedding.jpg";

const HomeHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroWedding})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-8 tracking-wide animate-fade-up drop-shadow-lg"
        >
          Elevated Culinary Experiences
        </h1>

        <p
          className="text-white/90 max-w-3xl mb-12 text-lg md:text-xl leading-relaxed opacity-0 animate-fade-up drop-shadow-md"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Maison Cuisine crafts bespoke catering experiences for life's most extraordinary 
          moments. From intimate gatherings to grand celebrations, we bring refined cuisine 
          and impeccable service to every occasion.
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
        >
          <a href="#experience" className="btn-hero">
            Plan Your Experience
          </a>
          <Link
            to="/portfolio"
            className="px-8 py-4 border border-white/60 text-white hover:bg-white/10 transition-colors duration-300 font-medium tracking-wide"
          >
            View Portfolio
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-white/40" />
      </div>
    </section>
  );
};

export default HomeHero;
