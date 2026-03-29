import { useEffect, useRef } from "react";
import PortfolioDialog from "./PortfolioDialog";

const HomeHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Pause autoplay — scroll controls playback
    video.pause();

    const handleScroll = () => {
      if (!video.duration) return;

      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      // Progress 0→1 as the user scrolls through the sticky range
      const progress = Math.max(
        0,
        Math.min(1, (scrollTop - sectionTop) / (sectionHeight - windowHeight))
      );

      video.currentTime = progress * video.duration;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Tall section — extra height gives scroll room to scrub the full video
    <section ref={sectionRef} className="relative h-[300vh] w-full">
      {/* Sticky viewport — pins the video in place while scrolling */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/catering-transition.mp4"
          muted
          playsInline
          preload="auto"
        />

        {/* Content — anchored at the top so it clears the video */}
        <div className="relative z-10 h-full flex flex-col items-start justify-end pb-16 px-10 md:px-16">
          <h1
            className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-6 tracking-wide animate-fade-up drop-shadow-lg"
          >
            Elevated Culinary Experiences
          </h1>

          <p
            className="text-white/85 max-w-xl mb-10 text-base md:text-lg leading-relaxed opacity-0 animate-fade-up drop-shadow-md"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Maison Cuisine crafts bespoke catering experiences for life's most
            extraordinary moments.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <a href="#experience" className="btn-hero">
              Plan Your Experience
            </a>
            <PortfolioDialog>
              <button className="px-8 py-4 border border-white/60 text-white hover:bg-white/10 transition-colors duration-300 font-medium tracking-wide">
                View Portfolio
              </button>
            </PortfolioDialog>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
