import { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Section1 from './parallax-sections/Section1';
import Section2 from './parallax-sections/Section2';
import Section3 from './parallax-sections/Section3';
import Section4 from './parallax-sections/Section4';
import Section5 from './parallax-sections/Section5';

export default function ParallaxScroll() {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const fullpageControls = useAnimation();

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return;

      const direction = e.deltaY > 0 ? 'down' : 'up';
      const nextSection =
        direction === 'down'
          ? Math.min(currentSection + 1, 3)
          : Math.max(currentSection - 1, 0);

      if (nextSection !== currentSection) {
        scrollToSection(nextSection);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentSection, isScrolling]);

  const scrollToSection = async (sectionIndex: number) => {
    setIsScrolling(true);
    setCurrentSection(sectionIndex);

    await fullpageControls.start({
      y:
        -sectionIndex *
        (typeof window !== 'undefined' ? window.innerHeight : 800),
      transition: {
        duration: 1,
        ease: [0.6, 0.01, 0.05, 0.95],
      },
    });

    setTimeout(() => setIsScrolling(false), 1000);
  };

  return (
    <>
      {/* Scroll/Arrow Section */}
      <motion.div
        className="fixed top-1/2 -translate-y-1/2 left-4 sm:left-6 md:left-8 lg:left-12 xl:left-16 z-[100] flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-white-custom text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-[0.3em]"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="flex flex-col items-center">
          <span className="block">S</span>
          <span className="block">C</span>
          <span className="block">R</span>
          <span className="block">O</span>
          <span className="block">L</span>
          <span className="block">L</span>
        </div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-l-2 sm:border-l-[3px] border-b-2 sm:border-b-[3px] border-current -rotate-45"></div>
      </motion.div>

      {/* Scroll/Arrow Section - RIGHT */}
      <motion.div
        className="fixed top-1/2 -translate-y-1/2 right-4 sm:right-6 md:right-8 lg:right-12 xl:right-16 z-[100] flex flex-col items-center gap-2 sm:gap-3 md:gap-4 text-white text-sm sm:text-base md:text-lg lg:text-xl font-semibold tracking-[0.3em]"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
        }}
      >
        <div className="flex flex-col items-center">
          <span className="block">S</span>
          <span className="block">C</span>
          <span className="block">R</span>
          <span className="block">O</span>
          <span className="block">L</span>
          <span className="block">L</span>
        </div>
        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 border-l-2 sm:border-l-[3px] border-b-2 sm:border-b-[3px] border-current -rotate-45"></div>
      </motion.div>

      {/* Fullpage Container */}
      <motion.div
        animate={fullpageControls}
        initial={{ y: 0 }}
        className="isolate"
      >
        <Section1 isActive={currentSection === 0} />
        <Section2 isActive={currentSection === 1} />
        <Section3 isActive={currentSection === 2} />
        <Section4 isActive={currentSection === 3} />
        <Section5 isActive={currentSection === 4} />
      </motion.div>
    </>
  );
}
