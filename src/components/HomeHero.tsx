import { useEffect, useRef, useState } from "react";
import PortfolioDialog from "./PortfolioDialog";

const HomeHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onMetadata = () => {
      video.currentTime = 0;
      setVideoReady(true);
    };

    video.addEventListener("loadedmetadata", onMetadata);
    if (video.readyState >= 1) onMetadata();

    return () => video.removeEventListener("loadedmetadata", onMetadata);
  }, []);

  useEffect(() => {
    if (!videoReady) return;

    const video = videoRef.current;
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!video || !section || !content) return;

    let ticking = false;

    const updateVideo = () => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollTop = window.scrollY;

      const scrollable = sectionHeight - windowHeight;
      const progress = Math.max(0, Math.min(1, (scrollTop - sectionTop) / scrollable));

      // Scrub video
      video.currentTime = progress * video.duration;

      // Slide text up: from bottom toward the darker ceiling area
      const contentHeight = content.offsetHeight;
      const topPadding = 96; // clear the navbar
      const maxTranslate = windowHeight - contentHeight - topPadding;
      content.style.transform = `translateY(${-progress * maxTranslate}px)`;

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateVideo);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateVideo();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [videoReady]);

  return (
    <section ref={sectionRef} className="relative h-[150vh] md:h-[170vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/catering-transition.mp4"
          muted
          playsInline
          preload="auto"
        />

        {/* Content — starts at bottom, slides up as video scrubs */}
        <div
          ref={contentRef}
          className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-start pb-10 px-5 md:pb-16 md:px-16"
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 md:mb-6 tracking-wide animate-fade-up drop-shadow-lg">
            Elevated Culinary Experiences
          </h1>

          <p
            className="text-white/85 max-w-md md:max-w-xl mb-6 md:mb-10 text-sm sm:text-base md:text-lg leading-relaxed opacity-0 animate-fade-up drop-shadow-md"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Maison Cuisine crafts bespoke catering experiences for life's most
            extraordinary moments.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-3 md:gap-4 opacity-0 animate-fade-up"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <a href="#experience" className="btn-hero text-sm md:text-base">
              Plan Your Experience
            </a>
            <PortfolioDialog>
              <button className="px-6 py-3 md:px-8 md:py-4 border border-white/60 text-white hover:bg-white/10 transition-colors duration-300 font-medium tracking-wide text-sm md:text-base">
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
