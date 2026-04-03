import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (progressBarRef.current) {
      gsap.to(progressBarRef.current, {
        width: `${scrollProgress}%`,
        duration: 0.5,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }, [scrollProgress]);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-9999 pointer-events-none">
      <div 
        ref={progressBarRef}
        className="h-full bg-linear-to-r from-indigo-500 via-cyan-400 to-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.6)] relative"
      >
        {/* Glow indicator at the edge (Matching theme) */}
        <div className="absolute right-0 top-0 h-full w-20 bg-linear-to-r from-transparent to-indigo-400/30 blur-sm"></div>
        <div className="absolute -right-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full shadow-[0_0_15px_rgba(34,211,238,0.8)]"></div>
      </div>
    </div>
  );
};

export default ScrollProgress;
