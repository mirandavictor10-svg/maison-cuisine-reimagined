import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import PortfolioDialog from "./PortfolioDialog";

const HomeHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Transform for content slide and opacity
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8, 1], [1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onReady = () => {
      video.currentTime = 0;
      setVideoReady(true);
    };

    video.addEventListener("canplay", onReady, { once: true });
    video.load();

    return () => video.removeEventListener("canplay", onReady);
  }, []);

  useEffect(() => {
    if (!videoReady) return;

    const video = videoRef.current;
    if (!video) return;

    const unsubscribe = scrollYProgress.on("change", (latest) => {
      // Complete the full video in the first 35% of scroll so the
      // venue reveal finishes well before the user reaches the fold.
      if (video.duration) {
        const accelerated = Math.min(1, latest / 0.35);
        video.currentTime = accelerated * video.duration;
      }
    });

    return () => unsubscribe();
  }, [videoReady, scrollYProgress]);

  return (
    <section ref={sectionRef} className="relative h-[200vh] w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            src="/catering-transition.mp4"
            poster="/catering-poster.jpg"
            muted
            playsInline
            preload="auto"
          />
        </motion.div>

        {/* Content reveal */}
        <motion.div
          style={{ y, opacity }}
          className="absolute bottom-0 left-0 right-0 z-10 flex flex-col items-start pb-16 px-6 md:pb-24 md:px-20 lg:px-32"
        >
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="heading-display text-white mb-6 hero-text"
          >
            Elevated <br />
            <span className="italic">Culinary</span> Experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="body-elegant text-white/90 max-w-xl mb-10 hero-text"
          >
            Maison Cuisine crafts bespoke catering experiences for life's most
            extraordinary moments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-6"
          >
            <a href="#experience" className="btn-hero">
              Plan Your Experience
            </a>
            <PortfolioDialog>
              <button className="px-10 py-4 border border-white/30 text-white hover:bg-white/10 transition-all duration-500 font-light tracking-[0.25em] uppercase text-[10px]">
                View Portfolio
              </button>
            </PortfolioDialog>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeHero;
